import { createRef, useEffect, useState } from "react";

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export const useVisibility = <Element extends HTMLElement>(): [
  Boolean,
  React.RefObject<Element>
] => {
  const currentElement = createRef<Element>();

  const [isIntersecting, setIntersecting] = useState(false);

  const observer =
    typeof IntersectionObserver !== "undefined" &&
    new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

  useEffect(() => {
    if (observer) {
      if (currentElement.current) {
        observer.observe(currentElement.current);
      }
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return [isIntersecting, currentElement];
};
