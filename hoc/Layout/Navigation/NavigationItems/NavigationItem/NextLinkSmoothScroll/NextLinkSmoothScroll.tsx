import Router from "next/router";
import React, { FC, useContext } from "react";
import { findSectionEl } from "../../../../../UpdateHashOnScroll/UpdateHashOnScroll";
import { LayoutContext } from "../../../../Layout";

// source: https://gist.github.com/vinaypuppal/b7271ad84a0d69c9cfafaaa83afed199

// Get the top position of an element in the document
const getTop = (element: HTMLElement, start: number) =>
  element.nodeName === "HTML"
    ? -start
    : element.getBoundingClientRect().top + start;
// return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset

// ease in out function thanks to:
// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

// calculate the scroll position we should be in
// given the start and end point of the scroll
// the time elapsed from the beginning of the scroll
// and the total duration of the scroll (default 500ms)
const position = function (
  start: number,
  end: number,
  elapsed: number,
  duration: number
) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
  // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
};

// we use requestAnimationFrame to be called by the browser before every repaint
// if the first argument is an element then scroll to the top of this element
// if the first argument is numeric then scroll to this location
// if the callback exist, it is called when the scrolling is finished
// if context is set then scroll that element, else scroll window
const smoothScroll2 = (
  el: HTMLElement | number,
  duration: number = 250,
  callback: Function
) => {
  const start = window.pageYOffset;
  let end: number;
  if (typeof el === "number") {
    end = el - 60;
  } else {
    end = getTop(el, start) - 60;
  }

  const clock = Date.now();
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    ((fn) => {
      window.setTimeout(fn, 15);
    });

  const step = () => {
    const elapsed = Date.now() - clock;
    window.scroll(0, position(start, end, elapsed, duration));

    if (elapsed > duration) {
      callback(el);
    } else {
      requestAnimationFrame(step);
    }
  };
  step();
};

const smoothScroll = (url: string) =>
  new Promise((resolve) => {
    const id = url.substr(2);
    const el = findSectionEl(id);
    if (el) {
      smoothScroll2(el, 600, resolve);
    } else {
      smoothScroll2(0, 600, resolve);
    }
  });

interface NextLinkSmoothScrollProps {
  href: string;
  as?: string;
  children: JSX.Element;
}

export const NextLinkSmoothScroll: FC<NextLinkSmoothScrollProps> = (props) => {
  const layoutContext = useContext(LayoutContext);

  const linkClicked = async () => {
    layoutContext.setIsNavigatingToHash(true);

    // figure out if the page has to be changed
    if (window.location.pathname === props.href.split("#")[0]) {
      await smoothScroll(props.href);
    } else {
      await Router.push(props.href, props.as);
    }

    layoutContext.setIsNavigatingToHash(false);
  };

  return React.cloneElement(props.children, {
    onClick: (event: Event) => {
      event.preventDefault();
      if (typeof props.children.props.onClick === "function") {
        props.children.props.onClick(event);
      }
      linkClicked();
    },
  });
};
