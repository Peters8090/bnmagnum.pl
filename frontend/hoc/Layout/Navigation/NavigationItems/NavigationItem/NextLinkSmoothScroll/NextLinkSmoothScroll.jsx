import Router from 'next/router'
import React, { Children } from 'react'

// source: https://gist.github.com/vinaypuppal/b7271ad84a0d69c9cfafaaa83afed199


// Get the top position of an element in the document
const getTop = function (element, start) {
    // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
    if (element.nodeName === 'HTML') return -start
    return element.getBoundingClientRect().top + start
}
// ease in out function thanks to:
// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
const easeInOutCubic = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

// calculate the scroll position we should be in
// given the start and end point of the scroll
// the time elapsed from the beginning of the scroll
// and the total duration of the scroll (default 500ms)
const position = function (start, end, elapsed, duration) {
    if (elapsed > duration) return end
    return start +
        (end - start) *
        easeInOutCubic(
            elapsed / duration,
        ) // <-- you can change the easing funtion there
    // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
}

// we use requestAnimationFrame to be called by the browser before every repaint
// if the first argument is an element then scroll to the top of this element
// if the first argument is numeric then scroll to this location
// if the callback exist, it is called when the scrolling is finished
// if context is set then scroll that element, else scroll window
const smoothScroll2 = function (el, duration, callback, context) {
    duration = duration || 250
    context = context || window
    const start = context.scrollTop || window.pageYOffset
    let end
    if (typeof el === 'number') {
        end = parseInt(el) - 60
    } else {
        end = getTop(el, start) - 60
    }

    const clock = Date.now()
    const requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (fn) {
            window.setTimeout(fn, 15)
        }

    const step = function () {
        const elapsed = Date.now() - clock
        if (context !== window) {
            context.scrollTop = position(start, end, elapsed, duration)
        } else {
            window.scroll(0, position(start, end, elapsed, duration))
        }

        if (elapsed > duration) {
            if (typeof callback === 'function') {
                callback(el)
            }
        } else {
            requestAnimationFrame(step)
        }
    }
    step()
}
const smoothScroll = url => {
    return new Promise(function (resolve) {
        const id = url.substr(2)
        const el = document.getElementById(id)
        if (el) {
            smoothScroll2(el, 600, resolve)
        } else {
            smoothScroll2(0, 600, resolve)
        }
    })
}

// this HOC is taken from https://github.com/zeit/next.js/blob/master/lib/link.js and modified
export class NextLinkSmoothScroll extends React.Component {
    constructor(props) {
        super(props)
        this.linkClicked = this.linkClicked.bind(this)
    }

    linkClicked(e) {
        e.preventDefault()
        const scrollX = window.pageXOffset
        const scrollY = window.pageYOffset

        const location = window.location
        const href = this.props.href

        if (location.pathname === href.split('#')[0]) {
            // Router.push(this.props.href, this.props?.as)
            window.scrollTo(scrollX, scrollY)
            return smoothScroll(this.props.href)
        } else {
            Router
                .push(this.props.href, this.props?.as)
                .then(() => {
                    // window.scrollTo(scrollX, scrollY)
                    // return smoothScroll(this.props.href)
                })
                .then(() => {
                    this.props.done && this.props.done()
                })
                .catch(err => {
                    this.props.onError && this.props.onError(err)
                    console.error(err)
                })
        }
    }

    render() {
        let {children} = this.props
        if (typeof children === 'string') {
            children = <a>{children}</a>
        }
        const child = Children.only(children)
        const props = {
            onClick: event => {
                if (typeof child.props.onClick === 'function') {
                    child.props.onClick(event)
                }
                this.linkClicked(event)
            },
        }
        if (child.type === 'a' && !('href' in child.props)) {
            props.href = this.props.href
        }
        return React.cloneElement(child, props)
    }
}