/*!
 * Bootstrap v4.0.0-alpha.3 (http://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), +function (a) {
    "use strict";
    function b(a, b) {
        if ("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    function c(a, b) {
        if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
    }

    var d = function (a, b, c) {
        for (var d = !0; d;) {
            var e = a, f = b, g = c;
            d = !1, null === e && (e = Function.prototype);
            var h = Object.getOwnPropertyDescriptor(e, f);
            if (void 0 !== h) {
                if ("value" in h)return h.value;
                var i = h.get;
                if (void 0 === i)return;
                return i.call(g)
            }
            var j = Object.getPrototypeOf(e);
            if (null === j)return;
            a = j, b = f, c = g, d = !0, h = j = void 0
        }
    }, e = function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
            }
        }

        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }(), f = function (a) {
        function b(a) {
            return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function c(a) {
            return (a[0] || a).nodeType
        }

        function d() {
            return {
                bindType: h.end, delegateType: h.end, handle: function (b) {
                    if (a(b.target).is(this))return b.handleObj.handler.apply(this, arguments)
                }
            }
        }

        function e() {
            if (window.QUnit)return !1;
            var a = document.createElement("bootstrap");
            for (var b in j)if (void 0 !== a.style[b])return {end: j[b]};
            return !1
        }

        function f(b) {
            var c = this, d = !1;
            return a(this).one(k.TRANSITION_END, function () {
                d = !0
            }), setTimeout(function () {
                d || k.triggerTransitionEnd(c)
            }, b), this
        }

        function g() {
            h = e(), a.fn.emulateTransitionEnd = f, k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d())
        }

        var h = !1, i = 1e6, j = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, k = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (a) {
                do a += ~~(Math.random() * i); while (document.getElementById(a));
                return a
            }, getSelectorFromElement: function (a) {
                var b = a.getAttribute("data-target");
                return b || (b = a.getAttribute("href") || "", b = /^#[a-z]/i.test(b) ? b : null), b
            }, reflow: function (a) {
                new Function("bs", "return bs")(a.offsetHeight)
            }, triggerTransitionEnd: function (b) {
                a(b).trigger(h.end)
            }, supportsTransitionEnd: function () {
                return Boolean(h)
            }, typeCheckConfig: function (a, d, e) {
                for (var f in e)if (e.hasOwnProperty(f)) {
                    var g = e[f], h = d[f], i = void 0;
                    if (i = h && c(h) ? "element" : b(h), !new RegExp(g).test(i))throw new Error(a.toUpperCase() + ": " + ('Option "' + f + '" provided type "' + i + '" ') + ('but expected type "' + g + '".'))
                }
            }
        };
        return g(), k
    }(jQuery), g = (function (a) {
        var b = "alert", d = "4.0.0-alpha.3", g = "bs.alert", h = "." + g, i = ".data-api", j = a.fn[b], k = 150, l = {DISMISS: '[data-dismiss="alert"]'}, m = {
            CLOSE: "close" + h,
            CLOSED: "closed" + h,
            CLICK_DATA_API: "click" + h + i
        }, n = {ALERT: "alert", FADE: "fade", IN: "in"}, o = function () {
            function b(a) {
                c(this, b), this._element = a
            }

            return e(b, [{
                key: "close", value: function (a) {
                    a = a || this._element;
                    var b = this._getRootElement(a), c = this._triggerCloseEvent(b);
                    c.isDefaultPrevented() || this._removeElement(b)
                }
            }, {
                key: "dispose", value: function () {
                    a.removeData(this._element, g), this._element = null
                }
            }, {
                key: "_getRootElement", value: function (b) {
                    var c = f.getSelectorFromElement(b), d = !1;
                    return c && (d = a(c)[0]), d || (d = a(b).closest("." + n.ALERT)[0]), d
                }
            }, {
                key: "_triggerCloseEvent", value: function (b) {
                    var c = a.Event(m.CLOSE);
                    return a(b).trigger(c), c
                }
            }, {
                key: "_removeElement", value: function (b) {
                    return a(b).removeClass(n.IN), f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(k) : void this._destroyElement(b)
                }
            }, {
                key: "_destroyElement", value: function (b) {
                    a(b).detach().trigger(m.CLOSED).remove()
                }
            }], [{
                key: "_jQueryInterface", value: function (c) {
                    return this.each(function () {
                        var d = a(this), e = d.data(g);
                        e || (e = new b(this), d.data(g, e)), "close" === c && e[c](this)
                    })
                }
            }, {
                key: "_handleDismiss", value: function (a) {
                    return function (b) {
                        b && b.preventDefault(), a.close(this)
                    }
                }
            }, {
                key: "VERSION", get: function () {
                    return d
                }
            }]), b
        }();
        return a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o)), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function () {
            return a.fn[b] = j, o._jQueryInterface
        }, o
    }(jQuery), function (a) {
        var b = "button", d = "4.0.0-alpha.3", f = "bs.button", g = "." + f, h = ".data-api", i = a.fn[b], j = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus"
        }, k = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: "input",
            ACTIVE: ".active",
            BUTTON: ".btn"
        }, l = {
            CLICK_DATA_API: "click" + g + h,
            FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h)
        }, m = function () {
            function b(a) {
                c(this, b), this._element = a
            }

            return e(b, [{
                key: "toggle", value: function () {
                    var b = !0, c = a(this._element).closest(k.DATA_TOGGLE)[0];
                    if (c) {
                        var d = a(this._element).find(k.INPUT)[0];
                        if (d) {
                            if ("radio" === d.type)if (d.checked && a(this._element).hasClass(j.ACTIVE))b = !1; else {
                                var e = a(c).find(k.ACTIVE)[0];
                                e && a(e).removeClass(j.ACTIVE)
                            }
                            b && (d.checked = !a(this._element).hasClass(j.ACTIVE), a(this._element).trigger("change")), d.focus()
                        }
                    } else this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE));
                    b && a(this._element).toggleClass(j.ACTIVE)
                }
            }, {
                key: "dispose", value: function () {
                    a.removeData(this._element, f), this._element = null
                }
            }], [{
                key: "_jQueryInterface", value: function (c) {
                    return this.each(function () {
                        var d = a(this).data(f);
                        d || (d = new b(this), a(this).data(f, d)), "toggle" === c && d[c]()
                    })
                }
            }, {
                key: "VERSION", get: function () {
                    return d
                }
            }]), b
        }();
        return a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function (b) {
            b.preventDefault();
            var c = b.target;
            a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)), m._jQueryInterface.call(a(c), "toggle")
        }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function (b) {
            var c = a(b.target).closest(k.BUTTON)[0];
            a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type))
        }), a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function () {
            return a.fn[b] = i, m._jQueryInterface
        }, m
    }(jQuery), function (a) {
        var b = "carousel", d = "4.0.0-alpha.3", g = "bs.carousel", h = "." + g, i = ".data-api", j = a.fn[b], k = 600, l = 37, m = 39, n = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, o = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, p = {NEXT: "next", PREVIOUS: "prev"}, q = {
            SLIDE: "slide" + h,
            SLID: "slid" + h,
            KEYDOWN: "keydown" + h,
            MOUSEENTER: "mouseenter" + h,
            MOUSELEAVE: "mouseleave" + h,
            LOAD_DATA_API: "load" + h + i,
            CLICK_DATA_API: "click" + h + i
        }, r = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "right",
            LEFT: "left",
            ITEM: "carousel-item"
        }, s = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".next, .prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, t = function () {
            function i(b, d) {
                c(this, i), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(d), this._element = a(b)[0], this._indicatorsElement = a(this._element).find(s.INDICATORS)[0], this._addEventListeners()
            }

            return e(i, [{
                key: "next", value: function () {
                    this._isSliding || this._slide(p.NEXT)
                }
            }, {
                key: "nextWhenVisible", value: function () {
                    document.hidden || this.next()
                }
            }, {
                key: "prev", value: function () {
                    this._isSliding || this._slide(p.PREVIOUS)
                }
            }, {
                key: "pause", value: function (b) {
                    b || (this._isPaused = !0), a(this._element).find(s.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }
            }, {
                key: "cycle", value: function (b) {
                    b || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                }
            }, {
                key: "to", value: function (b) {
                    var c = this;
                    this._activeElement = a(this._element).find(s.ACTIVE_ITEM)[0];
                    var d = this._getItemIndex(this._activeElement);
                    if (!(b > this._items.length - 1 || b < 0)) {
                        if (this._isSliding)return void a(this._element).one(q.SLID, function () {
                            return c.to(b)
                        });
                        if (d === b)return this.pause(), void this.cycle();
                        var e = b > d ? p.NEXT : p.PREVIOUS;
                        this._slide(e, this._items[b])
                    }
                }
            }, {
                key: "dispose", value: function () {
                    a(this._element).off(h), a.removeData(this._element, g), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }
            }, {
                key: "_getConfig", value: function (c) {
                    return c = a.extend({}, n, c), f.typeCheckConfig(b, c, o), c
                }
            }, {
                key: "_addEventListeners", value: function () {
                    this._config.keyboard && a(this._element).on(q.KEYDOWN, a.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || a(this._element).on(q.MOUSEENTER, a.proxy(this.pause, this)).on(q.MOUSELEAVE, a.proxy(this.cycle, this))
                }
            }, {
                key: "_keydown", value: function (a) {
                    if (a.preventDefault(), !/input|textarea/i.test(a.target.tagName))switch (a.which) {
                        case l:
                            this.prev();
                            break;
                        case m:
                            this.next();
                            break;
                        default:
                            return
                    }
                }
            }, {
                key: "_getItemIndex", value: function (b) {
                    return this._items = a.makeArray(a(b).parent().find(s.ITEM)), this._items.indexOf(b)
                }
            }, {
                key: "_getItemByDirection", value: function (a, b) {
                    var c = a === p.NEXT, d = a === p.PREVIOUS, e = this._getItemIndex(b), f = this._items.length - 1, g = d && 0 === e || c && e === f;
                    if (g && !this._config.wrap)return b;
                    var h = a === p.PREVIOUS ? -1 : 1, i = (e + h) % this._items.length;
                    return i === -1 ? this._items[this._items.length - 1] : this._items[i]
                }
            }, {
                key: "_triggerSlideEvent", value: function (b, c) {
                    var d = a.Event(q.SLIDE, {relatedTarget: b, direction: c});
                    return a(this._element).trigger(d), d
                }
            }, {
                key: "_setActiveIndicatorElement", value: function (b) {
                    if (this._indicatorsElement) {
                        a(this._indicatorsElement).find(s.ACTIVE).removeClass(r.ACTIVE);
                        var c = this._indicatorsElement.children[this._getItemIndex(b)];
                        c && a(c).addClass(r.ACTIVE)
                    }
                }
            }, {
                key: "_slide", value: function (b, c) {
                    var d = this, e = a(this._element).find(s.ACTIVE_ITEM)[0], g = c || e && this._getItemByDirection(b, e), h = Boolean(this._interval), i = b === p.NEXT ? r.LEFT : r.RIGHT;
                    if (g && a(g).hasClass(r.ACTIVE))return void(this._isSliding = !1);
                    var j = this._triggerSlideEvent(g, i);
                    if (!j.isDefaultPrevented() && e && g) {
                        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(g);
                        var l = a.Event(q.SLID, {relatedTarget: g, direction: i});
                        f.supportsTransitionEnd() && a(this._element).hasClass(r.SLIDE) ? (a(g).addClass(b), f.reflow(g), a(e).addClass(i), a(g).addClass(i), a(e).one(f.TRANSITION_END, function () {
                            a(g).removeClass(i).removeClass(b), a(g).addClass(r.ACTIVE), a(e).removeClass(r.ACTIVE).removeClass(b).removeClass(i), d._isSliding = !1, setTimeout(function () {
                                return a(d._element).trigger(l)
                            }, 0)
                        }).emulateTransitionEnd(k)) : (a(e).removeClass(r.ACTIVE), a(g).addClass(r.ACTIVE), this._isSliding = !1, a(this._element).trigger(l)), h && this.cycle()
                    }
                }
            }], [{
                key: "_jQueryInterface", value: function (b) {
                    return this.each(function () {
                        var c = a(this).data(g), d = a.extend({}, n, a(this).data());
                        "object" == typeof b && a.extend(d, b);
                        var e = "string" == typeof b ? b : d.slide;
                        if (c || (c = new i(this, d), a(this).data(g, c)), "number" == typeof b)c.to(b); else if ("string" == typeof e) {
                            if (void 0 === c[e])throw new Error('No method named "' + e + '"');
                            c[e]()
                        } else d.interval && (c.pause(), c.cycle())
                    })
                }
            }, {
                key: "_dataApiClickHandler", value: function (b) {
                    var c = f.getSelectorFromElement(this);
                    if (c) {
                        var d = a(c)[0];
                        if (d && a(d).hasClass(r.CAROUSEL)) {
                            var e = a.extend({}, a(d).data(), a(this).data()), h = this.getAttribute("data-slide-to");
                            h && (e.interval = !1), i._jQueryInterface.call(a(d), e), h && a(d).data(g).to(h), b.preventDefault()
                        }
                    }
                }
            }, {
                key: "VERSION", get: function () {
                    return d
                }
            }, {
                key: "Default", get: function () {
                    return n
                }
            }]), i
        }();
        return a(document).on(q.CLICK_DATA_API, s.DATA_SLIDE, t._dataApiClickHandler), a(window).on(q.LOAD_DATA_API, function () {
            a(s.DATA_RIDE).each(function () {
                var b = a(this);
                t._jQueryInterface.call(b, b.data())
            })
        }), a.fn[b] = t._jQueryInterface, a.fn[b].Constructor = t, a.fn[b].noConflict = function () {
            return a.fn[b] = j, t._jQueryInterface
        }, t
    }(jQuery), function (a) {
        var b = "collapse", d = "4.0.0-alpha.3", g = "bs.collapse", h = "." + g, i = ".data-api", j = a.fn[b], k = 600, l = {
            toggle: !0,
            parent: ""
        }, m = {toggle: "boolean", parent: "string"}, n = {
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            CLICK_DATA_API: "click" + h + i
        }, o = {IN: "in", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed"}, p = {
            WIDTH: "width",
            HEIGHT: "height"
        }, q = {
            ACTIVES: ".panel > .in, .panel > .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, r = function () {
            function h(b, d) {
                c(this, h), this._isTransitioning = !1, this._element = b, this._config = this._getConfig(d), this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],' + ('[data-toggle="collapse"][data-target="#' + b.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            return e(h, [{
                key: "toggle", value: function () {
                    a(this._element).hasClass(o.IN) ? this.hide() : this.show()
                }
            }, {
                key: "show", value: function () {
                    var b = this;
                    if (!this._isTransitioning && !a(this._element).hasClass(o.IN)) {
                        var c = void 0, d = void 0;
                        if (this._parent && (c = a.makeArray(a(q.ACTIVES)), c.length || (c = null)), !(c && (d = a(c).data(g), d && d._isTransitioning))) {
                            var e = a.Event(n.SHOW);
                            if (a(this._element).trigger(e), !e.isDefaultPrevented()) {
                                c && (h._jQueryInterface.call(a(c), "hide"), d || a(c).data(g, null));
                                var i = this._getDimension();
                                a(this._element).removeClass(o.COLLAPSE).addClass(o.COLLAPSING), this._element.style[i] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && a(this._triggerArray).removeClass(o.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var j = function () {
                                    a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).addClass(o.IN), b._element.style[i] = "", b.setTransitioning(!1), a(b._element).trigger(n.SHOWN)
                                };
                                if (!f.supportsTransitionEnd())return void j();
                                var l = i[0].toUpperCase() + i.slice(1), m = "scroll" + l;
                                a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(k), this._element.style[i] = this._element[m] + "px"
                            }
                        }
                    }
                }
            }, {
                key: "hide", value: function () {
                    var b = this;
                    if (!this._isTransitioning && a(this._element).hasClass(o.IN)) {
                        var c = a.Event(n.HIDE);
                        if (a(this._element).trigger(c), !c.isDefaultPrevented()) {
                            var d = this._getDimension(), e = d === p.WIDTH ? "offsetWidth" : "offsetHeight";
                            this._element.style[d] = this._element[e] + "px", f.reflow(this._element), a(this._element).addClass(o.COLLAPSING).removeClass(o.COLLAPSE).removeClass(o.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && a(this._triggerArray).addClass(o.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                            var g = function () {
                                b.setTransitioning(!1), a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).trigger(n.HIDDEN)
                            };
                            return this._element.style[d] = 0, f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : void g()
                        }
                    }
                }
            }, {
                key: "setTransitioning", value: function (a) {
                    this._isTransitioning = a
                }
            }, {
                key: "dispose", value: function () {
                    a.removeData(this._element, g), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }
            }, {
                key: "_getConfig", value: function (c) {
                    return c = a.extend({}, l, c), c.toggle = Boolean(c.toggle), f.typeCheckConfig(b, c, m), c
                }
            }, {
                key: "_getDimension", value: function () {
                    var b = a(this._element).hasClass(p.WIDTH);
                    return b ? p.WIDTH : p.HEIGHT
                }
            }, {
                key: "_getParent", value: function () {
                    var b = this, c = a(this._config.parent)[0], d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return a(c).find(d).each(function (a, c) {
                        b._addAriaAndCollapsedClass(h._getTargetFromElement(c), [c])
                    }), c
                }
            }, {
                key: "_addAriaAndCollapsedClass", value: function (b, c) {
                    if (b) {
                        var d = a(b).hasClass(o.IN);
                        b.setAttribute("aria-expanded", d), c.length && a(c).toggleClass(o.COLLAPSED, !d).attr("aria-expanded", d)
                    }
                }
            }], [{
                key: "_getTargetFromElement", value: function (b) {
                    var c = f.getSelectorFromElement(b);
                    return c ? a(c)[0] : null
                }
            }, {
                key: "_jQueryInterface", value: function (b) {
                    return this.each(function () {
                        var c = a(this), d = c.data(g), e = a.extend({}, l, c.data(), "object" == typeof b && b);
                        if (!d && e.toggle && /show|hide/.test(b) && (e.toggle = !1), d || (d = new h(this, e), c.data(g, d)), "string" == typeof b) {
                            if (void 0 === d[b])throw new Error('No method named "' + b + '"');
                            d[b]()
                        }
                    })
                }
            }, {
                key: "VERSION", get: function () {
                    return d
                }
            }, {
                key: "Default", get: function () {
                    return l
                }
            }]), h
        }();
        return a(document).on(n.CLICK_DATA_API, q.DATA_TOGGLE, function (b) {
            b.preventDefault();
            var c = r._getTargetFromElement(this), d = a(c).data(g), e = d ? "toggle" : a(this).data();
            r._jQueryInterface.call(a(c), e)
        }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function () {
            return a.fn[b] = j, r._jQueryInterface
        }, r
    }(jQuery), function (a) {
        var b = "dropdown", d = "4.0.0-alpha.3", g = "bs.dropdown", h = "." + g, i = ".data-api", j = a.fn[b], k = 27, l = 38, m = 40, n = 3, o = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            CLICK: "click" + h,
            CLICK_DATA_API: "click" + h + i,
            KEYDOWN_DATA_API: "keydown" + h + i
        }, p = {BACKDROP: "dropdown-backdrop", DISABLED: "disabled", OPEN: "open"}, q = {
            BACKDROP: ".dropdown-backdrop",
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            ROLE_MENU: '[role="menu"]',
            ROLE_LISTBOX: '[role="listbox"]',
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
        }, r = function () {
            function b(a) {
                c(this, b), this._element = a, this._addEventListeners()
            }

            return e(b, [{
                key: "toggle", value: function () {
                    if (this.disabled || a(this).hasClass(p.DISABLED))return !1;
                    var c = b._getParentFromElement(this), d = a(c).hasClass(p.OPEN);
                    if (b._clearMenus(), d)return !1;
                    if ("ontouchstart" in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
                        var e = document.createElement("div");
                        e.className = p.BACKDROP, a(e).insertBefore(this), a(e).on("click", b._clearMenus)
                    }
                    var f = {relatedTarget: this}, g = a.Event(o.SHOW, f);
                    return a(c).trigger(g), !g.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), a(c).toggleClass(p.OPEN), a(c).trigger(a.Event(o.SHOWN, f)), !1)
                }
            }, {
                key: "dispose", value: function () {
                    a.removeData(this._element, g), a(this._element).off(h), this._element = null
                }
            }, {
                key: "_addEventListeners", value: function () {
                    a(this._element).on(o.CLICK, this.toggle)
                }
            }], [{
                key: "_jQueryInterface", value: function (c) {
                    return this.each(function () {
                        var d = a(this).data(g);
                        if (d || a(this).data(g, d = new b(this)), "string" == typeof c) {
                            if (void 0 === d[c])throw new Error('No method named "' + c + '"');
                            d[c].call(this)
                        }
                    })
                }
            }, {
                key: "_clearMenus", value: function (c) {
                    if (!c || c.which !== n) {
                        var d = a(q.BACKDROP)[0];
                        d && d.parentNode.removeChild(d);
                        for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                            var g = b._getParentFromElement(e[f]), h = {relatedTarget: e[f]};
                            if (a(g).hasClass(p.OPEN) && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(g, c.target))) {
                                var i = a.Event(o.HIDE, h);
                                a(g).trigger(i), i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"), a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN, h)))
                            }
                        }
                    }
                }
            }, {
                key: "_getParentFromElement", value: function (b) {
                    var c = void 0, d = f.getSelectorFromElement(b);
                    return d && (c = a(d)[0]), c || b.parentNode
                }
            }, {
                key: "_dataApiKeydownHandler", value: function (c) {
                    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(), c.stopPropagation(), !this.disabled && !a(this).hasClass(p.DISABLED))) {
                        var d = b._getParentFromElement(this), e = a(d).hasClass(p.OPEN);
                        if (!e && c.which !== k || e && c.which === k) {
                            if (c.which === k) {
                                var f = a(d).find(q.DATA_TOGGLE)[0];
                                a(f).trigger("focus")
                            }
                            return void a(this).trigger("click")
                        }
                        var g = a.makeArray(a(q.VISIBLE_ITEMS));
                        if (g = g.filter(function (a) {
                                return a.offsetWidth || a.offsetHeight
                            }), g.length) {
                            var h = g.indexOf(c.target);
                            c.which === l && h > 0 && h--, c.which === m && h < g.length - 1 && h++, h < 0 && (h = 0), g[h].focus()
                        }
                    }
                }
            }, {
                key: "VERSION", get: function () {
                    return d
                }
            }]), b
        }();
        return a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function (a) {
            a.stopPropagation()
        }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function () {
            return a.fn[b] = j, r._jQueryInterface
        }, r
    }(jQuery), function (a) {
        var b = "modal", d = "4.0.0-alpha.3", g = "bs.modal", h = "." + g, i = ".data-api", j = a.fn[b], k = 300, l = 150, m = 27, n = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, o = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, p = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            FOCUSIN: "focusin" + h,
            RESIZE: "resize" + h,
            CLICK_DISMISS: "click.dismiss" + h,
            KEYDOWN_DISMISS: "keydown.dismiss" + h,
            MOUSEUP_DISMISS: "mouseup.dismiss" + h,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
            CLICK_DATA_API: "click" + h + i
        }, q = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            IN: "in"
        }, r = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
        }, s = function () {
            function i(b, d) {
                c(this, i), this._config = this._getConfig(d), this._element = b, this._dialog = a(b).find(r.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
            }

            return e(i, [{
                key: "toggle", value: function (a) {
                    return this._isShown ? this.hide() : this.show(a)
                }
            }, {
                key: "show", value: function (b) {
                    var c = this, d = a.Event(p.SHOW, {relatedTarget: b});
                    a(this._element).trigger(d), this._isShown || d.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), a(document.body).addClass(q.OPEN), this._setEscapeEvent(), this._setResizeEvent(), a(this._element).on(p.CLICK_DISMISS, r.DATA_DISMISS, a.proxy(this.hide, this)), a(this._dialog).on(p.MOUSEDOWN_DISMISS, function () {
                        a(c._element).one(p.MOUSEUP_DISMISS, function (b) {
                            a(b.target).is(c._element) && (c._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(a.proxy(this._showElement, this, b)))
                }
            }, {
                key: "hide", value: function (b) {
                    b && b.preventDefault();
                    var c = a.Event(p.HIDE);
                    a(this._element).trigger(c), this._isShown && !c.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), a(document).off(p.FOCUSIN), a(this._element).removeClass(q.IN), a(this._element).off(p.CLICK_DISMISS), a(this._dialog).off(p.MOUSEDOWN_DISMISS), f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE) ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(k) : this._hideModal())
                }
            }, {
                key: "dispose", value: function () {
                    a.removeData(this._element, g), a(window).off(h), a(document).off(h), a(this._element).off(h), a(this._backdrop).off(h), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                }
            }, {
                key: "_getConfig", value: function (c) {
                    return c = a.extend({}, n, c), f.typeCheckConfig(b, c, o), c
                }
            }, {
                key: "_showElement", value: function (b) {
                    var c = this, d = f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, d && f.reflow(this._element), a(this._element).addClass(q.IN), this._config.focus && this._enforceFocus();
                    var e = a.Event(p.SHOWN, {relatedTarget: b}), g = function () {
                        c._config.focus && c._element.focus(), a(c._element).trigger(e)
                    };
                    d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : g()
                }
            }, {
                key: "_enforceFocus", value: function () {
                    var b = this;
                    a(document).off(p.FOCUSIN).on(p.FOCUSIN, function (c) {
                        document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus()
                    })
                }
            }, {
                key: "_setEscapeEvent", value: function () {
                    var b = this;
                    this._isShown && this._config.keyboard ? a(this._element).on(p.KEYDOWN_DISMISS, function (a) {
                        a.which === m && b.hide()
                    }) : this._isShown || a(this._element).off(p.KEYDOWN_DISMISS)
                }
            }, {
                key: "_setResizeEvent", value: function () {
                    this._isShown ? a(window).on(p.RESIZE, a.proxy(this._handleUpdate, this)) : a(window).off(p.RESIZE)
                }
            }, {
                key: "_hideModal", value: function () {
                    var b = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function () {
                        a(document.body).removeClass(q.OPEN), b._resetAdjustments(), b._resetScrollbar(), a(b._element).trigger(p.HIDDEN)
                    })
                }
            }, {
                key: "_removeBackdrop", value: function () {
                    this._backdrop && (a(this._backdrop).remove(), this._backdrop = null)
                }
            }, {
                key: "_showBackdrop", value: function (b) {
                    var c = this, d = a(this._element).hasClass(q.FADE) ? q.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var e = f.supportsTransitionEnd() && d;
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = q.BACKDROP, d && a(this._backdrop).addClass(d), a(this._backdrop).appendTo(document.body), a(this._element).on(p.CLICK_DISMISS, function (a) {
                                return c._ignoreBackdropClick ? void(c._ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide()))
                            }), e && f.reflow(this._backdrop), a(this._backdrop).addClass(q.IN), !b)return;
                        if (!e)return void b();
                        a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(l)
                    } else if (!this._isShown && this._backdrop) {
                        a(this._backdrop).removeClass(q.IN);
                        var g = function () {
                            c._removeBackdrop(), b && b()
                        };
                        f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g()
                    } else b && b()
                }
            }, {
                key: "_handleUpdate", value: function () {
                    this._adjustDialog()
                }
            }, {
                key: "_adjustDialog", value: function () {
                    var a = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }
            }, {
                key: "_resetAdjustments", value: function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }
            }, {
                key: "_checkScrollbar", value: function () {
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }
            }, {
                key: "_setScrollbar", value: function () {
                    var b = parseInt(a(r.FIXED_CONTENT).css("padding-right") || 0, 10);
                    this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = b + this._scrollbarWidth + "px")
                }
            }, {
                key: "_resetScrollbar", value: function () {
                    document.body.style.paddingRight = this._originalBodyPadding
                }
            }, {
                key: "_getScrollbarWidth", value: function () {
                    var a = document.createElement("div");
                    a.className = q.SCROLLBAR_MEASURER, document.body.appendChild(a);
                    var b = a.offsetWidth - a.clientWidth;
                    return document.body.removeChild(a), b
                }
            }], [{
                key: "_jQueryInterface", value: function (b, c) {
                    return this.each(function () {
                        var d = a(this).data(g), e = a.extend({}, i.Default, a(this).data(), "object" == typeof b && b);
                        if (d || (d = new i(this, e), a(this).data(g, d)), "string" == typeof b) {
                            if (void 0 === d[b])throw new Error('No method named "' + b + '"');
                            d[b](c)
                        } else e.show && d.show(c)
                    })
                }
            }, {
                key: "VERSION", get: function () {
                    return d
                }
            }, {
                key: "Default", get: function () {
                    return n
                }
            }]), i
        }();
        return a(document).on(p.CLICK_DATA_API, r.DATA_TOGGLE, function (b) {
            var c = this, d = void 0, e = f.getSelectorFromElement(this);
            e && (d = a(e)[0]);
            var h = a(d).data(g) ? "toggle" : a.extend({}, a(d).data(), a(this).data());
            "A" === this.tagName && b.preventDefault();
            var i = a(d).one(p.SHOW, function (b) {
                b.isDefaultPrevented() || i.one(p.HIDDEN, function () {
                    a(c).is(":visible") && c.focus()
                })
            });
            s._jQueryInterface.call(a(d), h, this)
        }), a.fn[b] = s._jQueryInterface, a.fn[b].Constructor = s, a.fn[b].noConflict = function () {
            return a.fn[b] = j, s._jQueryInterface
        }, s
    }(jQuery), function (a) {
        var b = "scrollspy", d = "4.0.0-alpha.3", g = "bs.scrollspy", h = "." + g, i = ".data-api", j = a.fn[b], k = {
            offset: 10,
            method: "auto",
            target: ""
        }, l = {offset: "number", method: "string", target: "(string|element)"}, m = {
            ACTIVATE: "activate" + h,
            SCROLL: "scroll" + h,
            LOAD_DATA_API: "load" + h + i
        }, n = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            NAV_LINK: "nav-link",
            NAV: "nav",
            ACTIVE: "active"
        }, o = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            LIST_ITEM: ".list-item",
            LI: "li",
            LI_DROPDOWN: "li.dropdown",
            NAV_LINKS: ".nav-link",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, p = {OFFSET: "offset", POSITION: "position"}, q = function () {
            function i(b, d) {
                c(this, i), this._element = b, this._scrollElement = "BODY" === b.tagName ? window : b, this._config = this._getConfig(d), this._selector = this._config.target + " " + o.NAV_LINKS + "," + (this._config.target + " " + o.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, a(this._scrollElement).on(m.SCROLL, a.proxy(this._process, this)), this.refresh(), this._process()
            }

            return e(i, [{
                key: "refresh", value: function () {
                    var b = this, c = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET, d = "auto" === this._config.method ? c : this._config.method, e = d === p.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                    var g = a.makeArray(a(this._selector));
                    g.map(function (b) {
                        var c = void 0, g = f.getSelectorFromElement(b);
                        return g && (c = a(g)[0]), c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null
                    }).filter(function (a) {
                        return a
                    }).sort(function (a, b) {
                        return a[0] - b[0]
                    }).forEach(function (a) {
                        b._offsets.push(a[0]), b._targets.push(a[1])
                    })
                }
            }, {
                key: "dispose", value: function () {
                    a.removeData(this._element, g), a(this._scrollElement).off(h), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }
            }, {
                key: "_getConfig", value: function (c) {
                    if (c = a.extend({}, k, c), "string" != typeof c.target) {
                        var d = a(c.target).attr("id");
                        d || (d = f.getUID(b), a(c.target).attr("id", d)), c.target = "#" + d
                    }
                    return f.typeCheckConfig(b, c, l), c
                }
            }, {
                key: "_getScrollTop", value: function () {
                    return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                }
            }, {
                key: "_getScrollHeight", value: function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            }, {
                key: "_process", value: function () {
                    var a = this._getScrollTop() + this._config.offset, b = this._getScrollHeight(), c = this._config.offset + b - this._scrollElement.offsetHeight;
                    if (this._scrollHeight !== b && this.refresh(), a >= c) {
                        var d = this._targets[this._targets.length - 1];
                        this._activeTarget !== d && this._activate(d)
                    }
                    if (this._activeTarget && a < this._offsets[0])return this._activeTarget = null, void this._clear();
                    for (var e = this._offsets.length; e--;) {
                        var f = this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]);
                        f && this._activate(this._targets[e])
                    }
                }
            }, {
                key: "_activate", value: function (b) {
                    this._activeTarget = b, this._clear();
                    var c = this._selector.split(",");
                    c = c.map(function (a) {
                        return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]')
                    });
                    var d = a(c.join(","));
                    d.hasClass(n.DROPDOWN_ITEM) ? (d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE), d.addClass(n.ACTIVE)) : d.parents(o.LI).find(o.NAV_LINKS).addClass(n.ACTIVE), a(this._scrollElement).trigger(m.ACTIVATE, {relatedTarget: b})
                }
            }, {
                key: "_clear", value: function () {
                    a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE)
                }
            }], [{
                key: "_jQueryInterface", value: function (b) {
                    return this.each(function () {
                        var c = a(this).data(g), d = "object" == typeof b && b || null;
                        if (c || (c = new i(this, d), a(this).data(g, c)), "string" == typeof b) {
                            if (void 0 === c[b])throw new Error('No method named "' + b + '"');
                            c[b]()
                        }
                    })
                }
            }, {
                key: "VERSION", get: function () {
                    return d
                }
            }, {
                key: "Default", get: function () {
                    return k
                }
            }]), i
        }();
        return a(window).on(m.LOAD_DATA_API, function () {
            for (var b = a.makeArray(a(o.DATA_SPY)), c = b.length; c--;) {
                var d = a(b[c]);
                q._jQueryInterface.call(d, d.data())
            }
        }), a.fn[b] = q._jQueryInterface, a.fn[b].Constructor = q, a.fn[b].noConflict = function () {
            return a.fn[b] = j, q._jQueryInterface
        }, q
    }(jQuery), function (a) {
        var b = "tab", d = "4.0.0-alpha.3", g = "bs.tab", h = "." + g, i = ".data-api", j = a.fn[b], k = 150, l = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            CLICK_DATA_API: "click" + h + i
        }, m = {DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", FADE: "fade", IN: "in"}, n = {
            A: "a",
            LI: "li",
            DROPDOWN: ".dropdown",
            UL: "ul:not(.dropdown-menu)",
            FADE_CHILD: "> .nav-item .fade, > .fade",
            ACTIVE: ".active",
            ACTIVE_CHILD: "> .nav-item > .active, > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        }, o = function () {
            function b(a) {
                c(this, b), this._element = a
            }

            return e(b, [{
                key: "show", value: function () {
                    var b = this;
                    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass(m.ACTIVE)) {
                        var c = void 0, d = void 0, e = a(this._element).closest(n.UL)[0], g = f.getSelectorFromElement(this._element);
                        e && (d = a.makeArray(a(e).find(n.ACTIVE)), d = d[d.length - 1]);
                        var h = a.Event(l.HIDE, {relatedTarget: this._element}), i = a.Event(l.SHOW, {relatedTarget: d});
                        if (d && a(d).trigger(h), a(this._element).trigger(i), !i.isDefaultPrevented() && !h.isDefaultPrevented()) {
                            g && (c = a(g)[0]), this._activate(this._element, e);
                            var j = function () {
                                var c = a.Event(l.HIDDEN, {relatedTarget: b._element}), e = a.Event(l.SHOWN, {relatedTarget: d});
                                a(d).trigger(c), a(b._element).trigger(e)
                            };
                            c ? this._activate(c, c.parentNode, j) : j()
                        }
                    }
                }
            }, {
                key: "dispose", value: function () {
                    a.removeClass(this._element, g), this._element = null
                }
            }, {
                key: "_activate", value: function (b, c, d) {
                    var e = a(c).find(n.ACTIVE_CHILD)[0], g = d && f.supportsTransitionEnd() && (e && a(e).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0])), h = a.proxy(this._transitionComplete, this, b, e, g, d);
                    e && g ? a(e).one(f.TRANSITION_END, h).emulateTransitionEnd(k) : h(), e && a(e).removeClass(m.IN)
                }
            }, {
                key: "_transitionComplete", value: function (b, c, d, e) {
                    if (c) {
                        a(c).removeClass(m.ACTIVE);
                        var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                        g && a(g).removeClass(m.ACTIVE), c.setAttribute("aria-expanded", !1)
                    }
                    if (a(b).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0), d ? (f.reflow(b), a(b).addClass(m.IN)) : a(b).removeClass(m.FADE), b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU)) {
                        var h = a(b).closest(n.DROPDOWN)[0];
                        h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0)
                    }
                    e && e()
                }
            }], [{
                key: "_jQueryInterface", value: function (c) {
                    return this.each(function () {
                        var d = a(this), e = d.data(g);
                        if (e || (e = e = new b(this), d.data(g, e)), "string" == typeof c) {
                            if (void 0 === e[c])throw new Error('No method named "' + c + '"');
                            e[c]()
                        }
                    })
                }
            }, {
                key: "VERSION", get: function () {
                    return d
                }
            }]), b
        }();
        return a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function (b) {
            b.preventDefault(), o._jQueryInterface.call(a(this), "show")
        }), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function () {
            return a.fn[b] = j, o._jQueryInterface
        }, o
    }(jQuery), function (a) {
        if (void 0 === window.Tether)throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
        var b = "tooltip", d = "4.0.0-alpha.3", g = "bs.tooltip", h = "." + g, i = a.fn[b], j = 150, k = "bs-tether", l = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: "0 0",
            constraints: []
        }, m = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "string",
            constraints: "array"
        }, n = {TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right"}, o = {
            IN: "in",
            OUT: "out"
        }, p = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            INSERTED: "inserted" + h,
            CLICK: "click" + h,
            FOCUSIN: "focusin" + h,
            FOCUSOUT: "focusout" + h,
            MOUSEENTER: "mouseenter" + h,
            MOUSELEAVE: "mouseleave" + h
        }, q = {FADE: "fade", IN: "in"}, r = {TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner"}, s = {
            element: !1,
            enabled: !1
        }, t = {HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual"}, u = function () {
            function i(a, b) {
                c(this, i), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = a, this.config = this._getConfig(b), this.tip = null, this._setListeners()
            }

            return e(i, [{
                key: "enable", value: function () {
                    this._isEnabled = !0
                }
            }, {
                key: "disable", value: function () {
                    this._isEnabled = !1
                }
            }, {
                key: "toggleEnabled", value: function () {
                    this._isEnabled = !this._isEnabled
                }
            }, {
                key: "toggle", value: function (b) {
                    if (b) {
                        var c = this.constructor.DATA_KEY, d = a(b.currentTarget).data(c);
                        d || (d = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(c, d)), d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                    } else {
                        if (a(this.getTipElement()).hasClass(q.IN))return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }
            }, {
                key: "dispose", value: function () {
                    clearTimeout(this._timeout), this.cleanupTether(), a.removeData(this.element, this.constructor.DATA_KEY), a(this.element).off(this.constructor.EVENT_KEY), this.tip && a(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                }
            }, {
                key: "show", value: function () {
                    var b = this, c = a.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        a(this.element).trigger(c);
                        var d = a.contains(this.element.ownerDocument.documentElement, this.element);
                        if (c.isDefaultPrevented() || !d)return;
                        var e = this.getTipElement(), g = f.getUID(this.constructor.NAME);
                        e.setAttribute("id", g), this.element.setAttribute("aria-describedby", g), this.setContent(), this.config.animation && a(e).addClass(q.FADE);
                        var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement, j = this._getAttachment(h);
                        a(e).data(this.constructor.DATA_KEY, this).appendTo(document.body), a(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                            attachment: j,
                            element: e,
                            target: this.element,
                            classes: s,
                            classPrefix: k,
                            offset: this.config.offset,
                            constraints: this.config.constraints,
                            addTargetClasses: !1
                        }), f.reflow(e), this._tether.position(), a(e).addClass(q.IN);
                        var l = function () {
                            var c = b._hoverState;
                            b._hoverState = null, a(b.element).trigger(b.constructor.Event.SHOWN), c === o.OUT && b._leave(null, b)
                        };
                        if (f.supportsTransitionEnd() && a(this.tip).hasClass(q.FADE))return void a(this.tip).one(f.TRANSITION_END, l).emulateTransitionEnd(i._TRANSITION_DURATION);
                        l()
                    }
                }
            }, {
                key: "hide", value: function (b) {
                    var c = this, d = this.getTipElement(), e = a.Event(this.constructor.Event.HIDE), g = function () {
                        c._hoverState !== o.IN && d.parentNode && d.parentNode.removeChild(d), c.element.removeAttribute("aria-describedby"), a(c.element).trigger(c.constructor.Event.HIDDEN), c.cleanupTether(), b && b()
                    };
                    a(this.element).trigger(e), e.isDefaultPrevented() || (a(d).removeClass(q.IN), f.supportsTransitionEnd() && a(this.tip).hasClass(q.FADE) ? a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(j) : g(), this._hoverState = "")
                }
            }, {
                key: "isWithContent", value: function () {
                    return Boolean(this.getTitle())
                }
            }, {
                key: "getTipElement", value: function () {
                    return this.tip = this.tip || a(this.config.template)[0]
                }
            }, {
                key: "setContent", value: function () {
                    var b = a(this.getTipElement());
                    this.setElementContent(b.find(r.TOOLTIP_INNER), this.getTitle()), b.removeClass(q.FADE).removeClass(q.IN), this.cleanupTether()
                }
            }, {
                key: "setElementContent", value: function (b, c) {
                    var d = this.config.html;
                    "object" == typeof c && (c.nodeType || c.jquery) ? d ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()) : b[d ? "html" : "text"](c)
                }
            }, {
                key: "getTitle", value: function () {
                    var a = this.element.getAttribute("data-original-title");
                    return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), a
                }
            }, {
                key: "cleanupTether", value: function () {
                    this._tether && this._tether.destroy()
                }
            }, {
                key: "_getAttachment", value: function (a) {
                    return n[a.toUpperCase()]
                }
            }, {
                key: "_setListeners", value: function () {
                    var b = this, c = this.config.trigger.split(" ");
                    c.forEach(function (c) {
                        if ("click" === c)a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b)); else if (c !== t.MANUAL) {
                            var d = c === t.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN, e = c === t.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                            a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(e, b.config.selector, a.proxy(b._leave, b))
                        }
                    }), this.config.selector ? this.config = a.extend({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }
            }, {
                key: "_fixTitle", value: function () {
                    var a = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }
            }, {
                key: "_enter", value: function (b, c) {
                    var d = this.constructor.DATA_KEY;
                    return c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusin" === b.type ? t.FOCUS : t.HOVER] = !0), a(c.getTipElement()).hasClass(q.IN) || c._hoverState === o.IN ? void(c._hoverState = o.IN) : (clearTimeout(c._timeout), c._hoverState = o.IN, c.config.delay && c.config.delay.show ? void(c._timeout = setTimeout(function () {
                        c._hoverState === o.IN && c.show()
                    }, c.config.delay.show)) : void c.show())
                }
            }, {
                key: "_leave", value: function (b, c) {
                    var d = this.constructor.DATA_KEY;
                    if (c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusout" === b.type ? t.FOCUS : t.HOVER] = !1), !c._isWithActiveTrigger())return clearTimeout(c._timeout), c._hoverState = o.OUT, c.config.delay && c.config.delay.hide ? void(c._timeout = setTimeout(function () {
                        c._hoverState === o.OUT && c.hide()
                    }, c.config.delay.hide)) : void c.hide()
                }
            }, {
                key: "_isWithActiveTrigger", value: function () {
                    for (var a in this._activeTrigger)if (this._activeTrigger[a])return !0;
                    return !1
                }
            }, {
                key: "_getConfig", value: function (c) {
                    return c = a.extend({}, this.constructor.Default, a(this.element).data(), c), c.delay && "number" == typeof c.delay && (c.delay = {
                        show: c.delay,
                        hide: c.delay
                    }), f.typeCheckConfig(b, c, this.constructor.DefaultType), c
                }
            }, {
                key: "_getDelegateConfig", value: function () {
                    var a = {};
                    if (this.config)for (var b in this.config)this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                    return a
                }
            }], [{
                key: "_jQueryInterface", value: function (b) {
                    return this.each(function () {
                        var c = a(this).data(g), d = "object" == typeof b ? b : null;
                        if ((c || !/destroy|hide/.test(b)) && (c || (c = new i(this, d), a(this).data(g, c)), "string" == typeof b)) {
                            if (void 0 === c[b])throw new Error('No method named "' + b + '"');
                            c[b]()
                        }
                    })
                }
            }, {
                key: "VERSION", get: function () {
                    return d
                }
            }, {
                key: "Default", get: function () {
                    return l
                }
            }, {
                key: "NAME", get: function () {
                    return b
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return g
                }
            }, {
                key: "Event", get: function () {
                    return p
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return h
                }
            }, {
                key: "DefaultType", get: function () {
                    return m
                }
            }]), i
        }();
        return a.fn[b] = u._jQueryInterface, a.fn[b].Constructor = u, a.fn[b].noConflict = function () {
            return a.fn[b] = i, u._jQueryInterface
        }, u
    }(jQuery));
    (function (a) {
        var f = "popover", h = "4.0.0-alpha.3", i = "bs.popover", j = "." + i, k = a.fn[f], l = a.extend({}, g.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), m = a.extend({}, g.DefaultType, {content: "(string|element|function)"}), n = {
            FADE: "fade",
            IN: "in"
        }, o = {TITLE: ".popover-title", CONTENT: ".popover-content", ARROW: ".popover-arrow"}, p = {
            HIDE: "hide" + j,
            HIDDEN: "hidden" + j,
            SHOW: "show" + j,
            SHOWN: "shown" + j,
            INSERTED: "inserted" + j,
            CLICK: "click" + j,
            FOCUSIN: "focusin" + j,
            FOCUSOUT: "focusout" + j,
            MOUSEENTER: "mouseenter" + j,
            MOUSELEAVE: "mouseleave" + j
        }, q = function (g) {
            function k() {
                c(this, k), d(Object.getPrototypeOf(k.prototype), "constructor", this).apply(this, arguments)
            }

            return b(k, g), e(k, [{
                key: "isWithContent", value: function () {
                    return this.getTitle() || this._getContent()
                }
            }, {
                key: "getTipElement", value: function () {
                    return this.tip = this.tip || a(this.config.template)[0]
                }
            }, {
                key: "setContent", value: function () {
                    var b = a(this.getTipElement());
                    this.setElementContent(b.find(o.TITLE), this.getTitle()), this.setElementContent(b.find(o.CONTENT), this._getContent()), b.removeClass(n.FADE).removeClass(n.IN), this.cleanupTether()
                }
            }, {
                key: "_getContent", value: function () {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }
            }], [{
                key: "_jQueryInterface", value: function (b) {
                    return this.each(function () {
                        var c = a(this).data(i), d = "object" == typeof b ? b : null;
                        if ((c || !/destroy|hide/.test(b)) && (c || (c = new k(this, d), a(this).data(i, c)), "string" == typeof b)) {
                            if (void 0 === c[b])throw new Error('No method named "' + b + '"');
                            c[b]()
                        }
                    })
                }
            }, {
                key: "VERSION", get: function () {
                    return h
                }
            }, {
                key: "Default", get: function () {
                    return l
                }
            }, {
                key: "NAME", get: function () {
                    return f
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return i
                }
            }, {
                key: "Event", get: function () {
                    return p
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return j
                }
            }, {
                key: "DefaultType", get: function () {
                    return m
                }
            }]), k
        }(g);
        return a.fn[f] = q._jQueryInterface, a.fn[f].Constructor = q, a.fn[f].noConflict = function () {
            return a.fn[f] = k, q._jQueryInterface
        }, q
    })(jQuery)
}(jQuery);
/*!
 * Waterwheel Carousel
 * Version 2.3.0
 * http://www.bkosborne.com
 *
 * Copyright 2011-2013 Brian Osborne
 * Dual licensed under GPLv3 or MIT
 * Copies of the licenses have been distributed
 * with this plugin.
 *
 * Plugin written by Brian Osborne
 * for use with the jQuery JavaScript Framework
 * http://www.jquery.com
 */
(function (a) {
    a.fn.waterwheelCarousel = function (r) {
        if (this.length > 1) {
            this.each(function () {
                a(this).waterwheelCarousel(r)
            });
            return this
        }
        var m = this;
        var c = {};
        var t = {};

        function j() {
            t = {
                itemsContainer: a(m),
                totalItems: a(m).find("img").length,
                containerWidth: a(m).width(),
                containerHeight: a(m).height(),
                currentCenterItem: null,
                previousCenterItem: null,
                items: [],
                calculations: [],
                carouselRotationsLeft: 0,
                currentlyMoving: false,
                itemsAnimating: 0,
                currentSpeed: c.speed,
                intervalTimer: null,
                currentDirection: "forward",
                leftItemsCount: 0,
                rightItemsCount: 0,
                performingSetup: true
            };
            t.itemsContainer.find("img").removeClass(c.activeClassName)
        }

        function l(u) {
            clearTimeout(t.autoPlayTimer);
            if (!u && c.autoPlay !== 0) {
                t.autoPlayTimer = setTimeout(function () {
                    if (c.autoPlay > 0) {
                        n("forward")
                    } else {
                        n("backward")
                    }
                }, Math.abs(c.autoPlay))
            }
        }

        function h(x) {
            if (c.preloadImages === false) {
                x();
                return
            }
            var v = t.itemsContainer.find("img"), u = 0, w = v.length;
            v.each(function () {
                a(this).bind("load", function () {
                    u += 1;
                    if (u === w) {
                        x();
                        return
                    }
                });
                a(this).attr("src", a(this).attr("src"));
                if (this.complete) {
                    a(this).trigger("load")
                }
            })
        }

        function d() {
            t.itemsContainer.find("img").each(function () {
                if (a(this).data("original_width") == undefined || c.forcedImageWidth > 0) {
                    a(this).data("original_width", a(this).width())
                }
                if (a(this).data("original_height") == undefined || c.forcedImageHeight > 0) {
                    a(this).data("original_height", a(this).height())
                }
            })
        }

        function e() {
            if (c.forcedImageWidth && c.forcedImageHeight) {
                t.itemsContainer.find("img").each(function () {
                    a(this).width(c.forcedImageWidth);
                    a(this).height(c.forcedImageHeight)
                })
            }
        }

        function s() {
            var v = t.itemsContainer.find("img:first");
            t.calculations[0] = {distance: 0, offset: 0, opacity: 1};
            var u = c.horizonOffset;
            var x = c.separation;
            for (var w = 1; w <= c.flankingItems + 2; w++) {
                if (w > 1) {
                    u *= c.horizonOffsetMultiplier;
                    x *= c.separationMultiplier
                }
                t.calculations[w] = {
                    distance: t.calculations[w - 1].distance + x,
                    offset: t.calculations[w - 1].offset + u,
                    opacity: t.calculations[w - 1].opacity * c.opacityMultiplier
                }
            }
            if (c.edgeFadeEnabled) {
                t.calculations[c.flankingItems + 1].opacity = 0
            } else {
                t.calculations[c.flankingItems + 1] = {distance: 0, offset: 0, opacity: 0}
            }
        }

        function b() {
            t.items = t.itemsContainer.find("img");
            for (var u = 0; u < t.totalItems; u++) {
                t.items[u] = a(t.items[u])
            }
            if (c.horizon === 0) {
                if (c.orientation === "horizontal") {
                    c.horizon = t.containerHeight / 2
                } else {
                    c.horizon = t.containerWidth / 2
                }
            }
            t.itemsContainer.css("position", "relative").find("img").each(function () {
                var w, v;
                if (c.orientation === "horizontal") {
                    w = (t.containerWidth / 2) - (a(this).data("original_width") / 2);
                    v = c.horizon - (a(this).data("original_height") / 2)
                } else {
                    w = c.horizon - (a(this).data("original_width") / 2);
                    v = (t.containerHeight / 2) - (a(this).data("original_height") / 2)
                }
                a(this).css({
                    left: w,
                    top: v,
                    visibility: "visible",
                    position: "absolute",
                    "z-index": 0,
                    opacity: 0
                }).data({top: v, left: w, oldPosition: 0, currentPosition: 0, depth: 0, opacity: 0}).show()
            })
        }

        function q() {
            c.startingItem = (c.startingItem === 0) ? Math.round(t.totalItems / 2) : c.startingItem;
            t.rightItemsCount = Math.ceil((t.totalItems - 1) / 2);
            t.leftItemsCount = Math.floor((t.totalItems - 1) / 2);
            t.carouselRotationsLeft = 1;
            k(t.items[c.startingItem - 1], 0);
            t.items[c.startingItem - 1].css("opacity", 1);
            var u = c.startingItem - 1;
            for (var v = 1; v <= t.rightItemsCount; v++) {
                (u < t.totalItems - 1) ? u += 1 : u = 0;
                t.items[u].css("opacity", 1);
                k(t.items[u], v)
            }
            var u = c.startingItem - 1;
            for (var v = -1; v >= t.leftItemsCount * -1; v--) {
                (u > 0) ? u -= 1 : u = t.totalItems - 1;
                t.items[u].css("opacity", 1);
                k(t.items[u], v)
            }
        }

        function f(I, y) {
            var z = Math.abs(y);
            if (z < c.flankingItems + 1) {
                var x = t.calculations[z]
            } else {
                var x = t.calculations[c.flankingItems + 1]
            }
            var A = Math.pow(c.sizeMultiplier, z);
            var C = A * I.data("original_width");
            var w = A * I.data("original_height");
            var v = Math.abs(I.width() - C);
            var B = Math.abs(I.height() - w);
            var D = x.offset;
            var J = x.distance;
            if (y < 0) {
                J *= -1
            }
            if (c.orientation == "horizontal") {
                var u = t.containerWidth / 2;
                var H = u + J - (C / 2);
                var F = c.horizon - D - (w / 2)
            } else {
                var u = t.containerHeight / 2;
                var H = c.horizon - D - (C / 2);
                var F = u + J - (w / 2)
            }
            var E;
            if (y === 0) {
                E = 1
            } else {
                E = x.opacity
            }
            var G = c.flankingItems + 2 - z;
            I.data("width", C);
            I.data("height", w);
            I.data("top", F);
            I.data("left", H);
            I.data("oldPosition", I.data("currentPosition"));
            I.data("depth", G);
            I.data("opacity", E)
        }

        function k(u, v) {
            if (Math.abs(v) <= c.flankingItems + 1) {
                f(u, v);
                t.itemsAnimating++;
                u.css("z-index", u.data().depth).animate({
                    left: u.data().left,
                    width: u.data().width,
                    height: u.data().height,
                    top: u.data().top,
                    opacity: u.data().opacity
                }, t.currentSpeed, c.animationEasing, function () {
                    g(u, v)
                })
            } else {
                u.data("currentPosition", v);
                if (u.data("oldPosition") === 0) {
                    u.css({
                        left: u.data().left,
                        width: u.data().width,
                        height: u.data().height,
                        top: u.data().top,
                        opacity: u.data().opacity,
                        "z-index": u.data().depth
                    })
                }
            }
        }

        function g(u, v) {
            t.itemsAnimating--;
            u.data("currentPosition", v);
            if (v === 0) {
                t.currentCenterItem = u
            }
            if (t.itemsAnimating === 0) {
                t.carouselRotationsLeft -= 1;
                t.currentlyMoving = false;
                if (t.carouselRotationsLeft > 0) {
                    p(0)
                } else {
                    t.currentSpeed = c.speed;
                    t.currentCenterItem.addClass(c.activeClassName);
                    if (t.performingSetup === false) {
                        c.movedToCenter(t.currentCenterItem);
                        c.movedFromCenter(t.previousCenterItem)
                    }
                    t.performingSetup = false;
                    l()
                }
            }
        }

        function p(v) {
            if (t.currentlyMoving === false) {
                t.currentCenterItem.removeClass(c.activeClassName);
                t.currentlyMoving = true;
                t.itemsAnimating = 0;
                t.carouselRotationsLeft += v;
                if (c.quickerForFurther === true) {
                    if (v > 1) {
                        t.currentSpeed = c.speed / v
                    }
                    t.currentSpeed = (t.currentSpeed < 100) ? 100 : t.currentSpeed
                }
                for (var y = 0; y < t.totalItems; y++) {
                    var w = a(t.items[y]);
                    var z = w.data("currentPosition");
                    var x;
                    if (t.currentDirection == "forward") {
                        x = z - 1
                    } else {
                        x = z + 1
                    }
                    var u = (x > 0) ? t.rightItemsCount : t.leftItemsCount;
                    if (Math.abs(x) > u) {
                        x = z * -1;
                        if (t.totalItems % 2 == 0) {
                            x += 1
                        }
                    }
                    k(w, x)
                }
            }
        }

        a(this).find("img").bind("click", function () {
            var v = a(this).data().currentPosition;
            if (c.imageNav == false) {
                return
            }
            if (Math.abs(v) >= c.flankingItems + 1) {
                return
            }
            if (t.currentlyMoving) {
                return
            }
            t.previousCenterItem = t.currentCenterItem;
            l(true);
            c.autoPlay = 0;
            var u = Math.abs(v);
            if (v == 0) {
                c.clickedCenter(a(this))
            } else {
                c.movingFromCenter(t.currentCenterItem);
                c.movingToCenter(a(this));
                if (v < 0) {
                    t.currentDirection = "backward";
                    p(u)
                } else {
                    if (v > 0) {
                        t.currentDirection = "forward";
                        p(u)
                    }
                }
            }
        });
        a(this).find("a").bind("click", function (u) {
            var v = a(this).find("img").data("currentPosition") == 0;
            if (c.linkHandling === 1 || (c.linkHandling === 2 && !v)) {
                u.preventDefault();
                return false
            }
        });
        function o() {
            var u = t.currentCenterItem.next();
            if (u.length <= 0) {
                u = t.currentCenterItem.parent().children().first()
            }
            return u
        }

        function i() {
            var u = t.currentCenterItem.prev();
            if (u.length <= 0) {
                u = t.currentCenterItem.parent().children().last()
            }
            return u
        }

        function n(u) {
            if (t.currentlyMoving === false) {
                t.previousCenterItem = t.currentCenterItem;
                c.movingFromCenter(t.currentCenterItem);
                if (u == "backward") {
                    c.movingToCenter(i());
                    t.currentDirection = "backward"
                } else {
                    if (u == "forward") {
                        c.movingToCenter(o());
                        t.currentDirection = "forward"
                    }
                }
            }
            p(1)
        }

        a(document).keydown(function (u) {
            if (c.keyboardNav) {
                if ((u.which === 37 && c.orientation == "horizontal") || (u.which === 38 && c.orientation == "vertical")) {
                    l(true);
                    c.autoPlay = 0;
                    n("backward")
                } else {
                    if ((u.which === 39 && c.orientation == "horizontal") || (u.which === 40 && c.orientation == "vertical")) {
                        l(true);
                        c.autoPlay = 0;
                        n("forward")
                    }
                }
                if (c.keyboardNavOverride && ((c.orientation == "horizontal" && (u.which === 37 || u.which === 39)) || (c.orientation == "vertical" && (u.which === 38 || u.which === 40)))) {
                    u.preventDefault();
                    return false
                }
            }
        });
        this.reload = function (v) {
            if (typeof v === "object") {
                var u = v
            } else {
                var u = {}
            }
            c = a.extend({}, a.fn.waterwheelCarousel.defaults, v);
            j();
            t.itemsContainer.find("img").hide();
            e();
            h(function () {
                d();
                s();
                b();
                q()
            })
        };
        this.next = function () {
            l(true);
            c.autoPlay = 0;
            n("forward")
        };
        this.prev = function () {
            l(true);
            c.autoPlay = 0;
            n("backward")
        };
        this.reload(r);
        return this
    };
    a.fn.waterwheelCarousel.defaults = {
        startingItem: 1,
        separation: 175,
        separationMultiplier: 0.6,
        horizonOffset: 0,
        horizonOffsetMultiplier: 1,
        sizeMultiplier: 0.7,
        opacityMultiplier: 0.8,
        horizon: 0,
        flankingItems: 3,
        speed: 300,
        animationEasing: "linear",
        quickerForFurther: true,
        edgeFadeEnabled: false,
        linkHandling: 2,
        autoPlay: 0,
        orientation: "horizontal",
        activeClassName: "carousel-center",
        keyboardNav: false,
        keyboardNavOverride: true,
        imageNav: true,
        preloadImages: true,
        forcedImageWidth: 0,
        forcedImageHeight: 0,
        movingToCenter: a.noop,
        movedToCenter: a.noop,
        clickedCenter: a.noop,
        movingFromCenter: a.noop,
        movedFromCenter: a.noop
    }
})(jQuery);

//
//
// Main js code

$(document).ready(function () {

//----------------------------------------------------------
//----------------------------------------------------------
// carousel slider
    function reloadCarousel(newoptions) {
        var w_width = $(window).width();
        var newOptions = {};
        if ((w_width > 1366)) {
            console.log(">1366");
            newOptions = {
                flankingItems: 3,
                imageNav: false,
                forcedImageWidth: 705,
                forcedImageHeight: 390,
                movingToCenter: function ($item) {
                    $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
                },
                movedToCenter: function ($item) {
                    $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
                },
                movingFromCenter: function ($item) {
                    $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
                },
                movedFromCenter: function ($item) {
                    $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
                },
                clickedCenter: function ($item) {
                    $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
                }
            }
        }
        if ((w_width > 991) && (w_width < 1367)) {
            console.log(">991");
            newOptions = {
                flankingItems: 3,
                imageNav: false,
                forcedImageWidth: 522,
                forcedImageHeight: 290,
                movingToCenter: function ($item) {
                    $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
                },
                movedToCenter: function ($item) {
                    $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
                },
                movingFromCenter: function ($item) {
                    $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
                },
                movedFromCenter: function ($item) {
                    $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
                },
                clickedCenter: function ($item) {
                    $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
                }
            }
        }
        if ((w_width < 992)) {
            console.log("width = " + w_width + " <992");
            newOptions = {
                flankingItems: 0,
                movingToCenter: function ($item) {
                    $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
                },
                movedToCenter: function ($item) {
                    $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
                },
                movingFromCenter: function ($item) {
                    $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
                },
                movedFromCenter: function ($item) {
                    $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
                },
                clickedCenter: function ($item) {
                    $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
                }
            }
        }


        carousel = $("#carousel").waterwheelCarousel(newOptions);

    }// /function

    var options = {
        flankingItems: 3,
        movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
        },
        movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
        },
        movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
        },
        movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
        },
        clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
        }
    };

    var carousel = $('#carousel').waterwheelCarousel(options);

    $(".monitor .prev").bind("click", function () {
        carousel.prev();
    });

    $(".monitor .next").bind("click", function () {
        carousel.next();
    });

    // reloadCarousel();

    var resizeTimer;
    $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            reloadCarousel();
        }, 300);

    });


//----------------------------------------------------------
//----------------------------------------------------------
// carousel owl
    var $owl_companies = $('.carousel-companies');
    var $owl_projects = $('.carousel-projects');
    $owl_companies.owlCarousel({
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            380: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        nav: true,
        navText: ["<img src='/assets/images/owl-prev.png'>", "<img src='/assets/images/owl-next.png'>"]

    });

    $owl_projects.owlCarousel({
        margin: 10,
        // loop:true,
        items: 1,
        nav: true,
        navText: ["<img src='/assets/images/owl-prev.png'>", "<img src='/assets/images/owl-next.png'>"]
    });
//----------------------------------------------------------
//----------------------------------------------------------
// filters functionality
    data = {};
    function rebuildSlider($carousel, filter) {
        var slider = $carousel;
        $(".monitor " + slider).html('');
        $(".monitor " + slider).trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $(".monitor " + slider).find('.owl-stage-outer').children().unwrap();

        $('.angar ' + slider + ' ' + filter).each(function () {
            $(this).clone().appendTo(".monitor " + slider);
            console.log('.angar ' + slider + ' ' + filter);
        });
    }

    $('.list-groups li').bind("click", function () {
        var this_name = $(this).attr('data-group');
        $('.list-groups li.active').removeClass('active');
        $(this).addClass('active');

        $('.group li.display').removeClass('display');
        $('.group li.active').removeClass('active');
        $('.group li.' + this_name).addClass('display');
        $('.group li.' + this_name).first().click();

    });

    $('.group li').bind("click", function () {
        var this_name = $(this).attr('data-filter');
        $('.group li.active').removeClass('active');
        $(this).addClass('active');

        rebuildSlider(".list-companies", this_name);
        rebuildSlider(".list-projects", this_name);

        $owl_companies.owlCarousel({
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                380: {
                    items: 2
                },
                700: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            },
            nav: true,
            navText: ["<img src='/assets/images/owl-prev.png'>", "<img src='/assets/images/owl-next.png'>"]

        });

        $owl_projects.owlCarousel({
            margin: 0,
            items: 1,
            // loop:true,
            nav: true,
            navText: ["<img src='/assets/images/owl-prev.png'>", "<img src='/assets/images/owl-next.png'>"]

        });
    });
    $(document).on("click", '.monitor .list-companies .item', function () {

        var this_name = $(this).attr('data-filter') + '' + $('.group li.active').attr('data-filter');
        console.log(this_name);

        rebuildSlider(".list-projects", this_name);
        $('.monitor .list-companies .item.active').removeClass('active');

        $(this).addClass('active');


        $owl_projects.owlCarousel({
            margin: 0,
            items: 1,
            // loop:true,
            nav: true,
            navText: ["<img src='/assets/images/owl-prev.png'>", "<img src='/assets/images/owl-next.png'>"]

        });

    });

    $('.list-groups li').first().click();

//----------------------------------------------------------
//----------------------------------------------------------
// Header > PArallax
    jQuery('#parallax .parallax-layer')
        .parallax({
                // mouseport: jQuery('body'),
                xorigin: 0,
                yorigin: 0,
            }, {
                xparallax: "150px",
                yparallax: "180px",

            }, {
                xparallax: "100px",
                yparallax: "120px",
            }, {
                xparallax: "60px",
                yparallax: "60px",
            }
        );


});// END: $(document).ready(function(){});