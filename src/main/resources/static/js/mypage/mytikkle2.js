/*!
 * TOAST UI Calendar 2nd Edition
 * @version 2.1.3 | Tue Aug 16 2022
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("tui-date-picker")) : "function" == typeof define && define.amd ? define(["tui-date-picker"], t) : "object" == typeof exports ? exports.tui = t(require("tui-date-picker")) : (e.tui = e.tui || {}, e.tui.Calendar = t(e.tui.DatePicker))
}(this, (function (e) {
    return function () {
        var t = {
            7111: function (e, t, n) {
                var r = n(6733), o = n(9821), i = TypeError;
                e.exports = function (e) {
                    if (r(e)) return e;
                    throw i(o(e) + " is not a function")
                }
            }, 8505: function (e, t, n) {
                var r = n(6733), o = String, i = TypeError;
                e.exports = function (e) {
                    if ("object" == typeof e || r(e)) return e;
                    throw i("Can't set " + o(e) + " as a prototype")
                }
            }, 9736: function (e, t, n) {
                var r = n(95), o = n(2391), i = n(1787).f, a = r("unscopables"), l = Array.prototype;
                null == l[a] && i(l, a, {configurable: !0, value: o(null)}), e.exports = function (e) {
                    l[a][e] = !0
                }
            }, 6637: function (e, t, n) {
                "use strict";
                var r = n(966).charAt;
                e.exports = function (e, t, n) {
                    return t + (n ? r(e, t).length : 1)
                }
            }, 1176: function (e, t, n) {
                var r = n(5052), o = String, i = TypeError;
                e.exports = function (e) {
                    if (r(e)) return e;
                    throw i(o(e) + " is not an object")
                }
            }, 9540: function (e, t, n) {
                var r = n(905), o = n(3231), i = n(9646), a = function (e) {
                    return function (t, n, a) {
                        var l, c = r(t), s = i(c), u = o(a, s);
                        if (e && n != n) {
                            for (; s > u;) if ((l = c[u++]) != l) return !0
                        } else for (; s > u; u++) if ((e || u in c) && c[u] === n) return e || u || 0;
                        return !e && -1
                    }
                };
                e.exports = {includes: a(!0), indexOf: a(!1)}
            }, 7079: function (e, t, n) {
                var r = n(5968), o = r({}.toString), i = r("".slice);
                e.exports = function (e) {
                    return i(o(e), 8, -1)
                }
            }, 1589: function (e, t, n) {
                var r = n(1601), o = n(6733), i = n(7079), a = n(95)("toStringTag"), l = Object,
                    c = "Arguments" == i(function () {
                        return arguments
                    }());
                e.exports = r ? i : function (e) {
                    var t, n, r;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                        try {
                            return e[t]
                        } catch (e) {
                        }
                    }(t = l(e), a)) ? n : c ? i(t) : "Object" == (r = i(t)) && o(t.callee) ? "Arguments" : r
                }
            }, 1590: function (e, t, n) {
                var r = n(5968), o = Error, i = r("".replace), a = String(o("zxcasd").stack),
                    l = /\n\s*at [^:]*:[^\n]*/, c = l.test(a);
                e.exports = function (e, t) {
                    if (c && "string" == typeof e && !o.prepareStackTrace) for (; t--;) e = i(e, l, "");
                    return e
                }
            }, 7081: function (e, t, n) {
                var r = n(8270), o = n(4826), i = n(7933), a = n(1787);
                e.exports = function (e, t, n) {
                    for (var l = o(t), c = a.f, s = i.f, u = 0; u < l.length; u++) {
                        var d = l[u];
                        r(e, d) || n && r(n, d) || c(e, d, s(t, d))
                    }
                }
            }, 7528: function (e, t, n) {
                var r = n(4229);
                e.exports = !r((function () {
                    function e() {
                    }

                    return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
                }))
            }, 3723: function (e, t, n) {
                "use strict";
                var r = n(693).IteratorPrototype, o = n(2391), i = n(5358), a = n(4555), l = n(5495), c = function () {
                    return this
                };
                e.exports = function (e, t, n, s) {
                    var u = t + " Iterator";
                    return e.prototype = o(r, {next: i(+!s, n)}), a(e, u, !1, !0), l[u] = c, e
                }
            }, 5762: function (e, t, n) {
                var r = n(7400), o = n(1787), i = n(5358);
                e.exports = r ? function (e, t, n) {
                    return o.f(e, t, i(1, n))
                } : function (e, t, n) {
                    return e[t] = n, e
                }
            }, 5358: function (e) {
                e.exports = function (e, t) {
                    return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
                }
            }, 4768: function (e, t, n) {
                var r = n(6733), o = n(1787), i = n(6039), a = n(8400);
                e.exports = function (e, t, n, l) {
                    l || (l = {});
                    var c = l.enumerable, s = void 0 !== l.name ? l.name : t;
                    if (r(n) && i(n, s, l), l.global) c ? e[t] = n : a(t, n); else {
                        try {
                            l.unsafe ? e[t] && (c = !0) : delete e[t]
                        } catch (e) {
                        }
                        c ? e[t] = n : o.f(e, t, {
                            value: n,
                            enumerable: !1,
                            configurable: !l.nonConfigurable,
                            writable: !l.nonWritable
                        })
                    }
                    return e
                }
            }, 8400: function (e, t, n) {
                var r = n(9859), o = Object.defineProperty;
                e.exports = function (e, t) {
                    try {
                        o(r, e, {value: t, configurable: !0, writable: !0})
                    } catch (n) {
                        r[e] = t
                    }
                    return t
                }
            }, 7675: function (e, t, n) {
                "use strict";
                var r = n(3103), o = n(266), i = n(4231), a = n(1805), l = n(6733), c = n(3723), s = n(7567),
                    u = n(6540), d = n(4555), f = n(5762), p = n(4768), h = n(95), m = n(5495), g = n(693),
                    v = a.PROPER, y = a.CONFIGURABLE, w = g.IteratorPrototype, _ = g.BUGGY_SAFARI_ITERATORS,
                    b = h("iterator"), x = "keys", D = "values", k = "entries", S = function () {
                        return this
                    };
                e.exports = function (e, t, n, a, h, g, C) {
                    c(n, t, a);
                    var E, I, M, N = function (e) {
                            if (e === h && R) return R;
                            if (!_ && e in P) return P[e];
                            switch (e) {
                                case x:
                                case D:
                                case k:
                                    return function () {
                                        return new n(this, e)
                                    }
                            }
                            return function () {
                                return new n(this)
                            }
                        }, T = t + " Iterator", O = !1, P = e.prototype, A = P[b] || P["@@iterator"] || h && P[h],
                        R = !_ && A || N(h), L = "Array" == t && P.entries || A;
                    if (L && (E = s(L.call(new e))) !== Object.prototype && E.next && (i || s(E) === w || (u ? u(E, w) : l(E[b]) || p(E, b, S)), d(E, T, !0, !0), i && (m[T] = S)), v && h == D && A && A.name !== D && (!i && y ? f(P, "name", D) : (O = !0, R = function () {
                        return o(A, this)
                    })), h) if (I = {
                        values: N(D),
                        keys: g ? R : N(x),
                        entries: N(k)
                    }, C) for (M in I) (_ || O || !(M in P)) && p(P, M, I[M]); else r({
                        target: t,
                        proto: !0,
                        forced: _ || O
                    }, I);
                    return i && !C || P[b] === R || p(P, b, R, {name: h}), m[t] = R, I
                }
            }, 7400: function (e, t, n) {
                var r = n(4229);
                e.exports = !r((function () {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function () {
                            return 7
                        }
                    })[1]
                }))
            }, 2635: function (e, t, n) {
                var r = n(9859), o = n(5052), i = r.document, a = o(i) && o(i.createElement);
                e.exports = function (e) {
                    return a ? i.createElement(e) : {}
                }
            }, 5694: function (e) {
                e.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                }
            }, 8865: function (e, t, n) {
                var r = n(2635)("span").classList, o = r && r.constructor && r.constructor.prototype;
                e.exports = o === Object.prototype ? void 0 : o
            }, 598: function (e, t, n) {
                var r = n(1333);
                e.exports = r("navigator", "userAgent") || ""
            }, 6358: function (e, t, n) {
                var r, o, i = n(9859), a = n(598), l = i.process, c = i.Deno, s = l && l.versions || c && c.version,
                    u = s && s.v8;
                u && (o = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = +r[1]), e.exports = o
            }, 3837: function (e) {
                e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            }, 373: function (e, t, n) {
                var r = n(4229), o = n(5358);
                e.exports = !r((function () {
                    var e = Error("a");
                    return !("stack" in e) || (Object.defineProperty(e, "stack", o(1, 7)), 7 !== e.stack)
                }))
            }, 3103: function (e, t, n) {
                var r = n(9859), o = n(7933).f, i = n(5762), a = n(4768), l = n(8400), c = n(7081), s = n(6541);
                e.exports = function (e, t) {
                    var n, u, d, f, p, h = e.target, m = e.global, g = e.stat;
                    if (n = m ? r : g ? r[h] || l(h, {}) : (r[h] || {}).prototype) for (u in t) {
                        if (f = t[u], d = e.dontCallGetSet ? (p = o(n, u)) && p.value : n[u], !s(m ? u : h + (g ? "." : "#") + u, e.forced) && void 0 !== d) {
                            if (typeof f == typeof d) continue;
                            c(f, d)
                        }
                        (e.sham || d && d.sham) && i(f, "sham", !0), a(n, u, f, e)
                    }
                }
            }, 4229: function (e) {
                e.exports = function (e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            }, 4954: function (e, t, n) {
                "use strict";
                n(7950);
                var r = n(5968), o = n(4768), i = n(3466), a = n(4229), l = n(95), c = n(5762), s = l("species"),
                    u = RegExp.prototype;
                e.exports = function (e, t, n, d) {
                    var f = l(e), p = !a((function () {
                        var t = {};
                        return t[f] = function () {
                            return 7
                        }, 7 != ""[e](t)
                    })), h = p && !a((function () {
                        var t = !1, n = /a/;
                        return "split" === e && ((n = {}).constructor = {}, n.constructor[s] = function () {
                            return n
                        }, n.flags = "", n[f] = /./[f]), n.exec = function () {
                            return t = !0, null
                        }, n[f](""), !t
                    }));
                    if (!p || !h || n) {
                        var m = r(/./[f]), g = t(f, ""[e], (function (e, t, n, o, a) {
                            var l = r(e), c = t.exec;
                            return c === i || c === u.exec ? p && !a ? {done: !0, value: m(t, n, o)} : {
                                done: !0,
                                value: l(n, t, o)
                            } : {done: !1}
                        }));
                        o(String.prototype, e, g[0]), o(u, f, g[1])
                    }
                    d && c(u[f], "sham", !0)
                }
            }, 3171: function (e, t, n) {
                var r = n(7188), o = Function.prototype, i = o.apply, a = o.call;
                e.exports = "object" == typeof Reflect && Reflect.apply || (r ? a.bind(i) : function () {
                    return a.apply(i, arguments)
                })
            }, 7188: function (e, t, n) {
                var r = n(4229);
                e.exports = !r((function () {
                    var e = function () {
                    }.bind();
                    return "function" != typeof e || e.hasOwnProperty("prototype")
                }))
            }, 266: function (e, t, n) {
                var r = n(7188), o = Function.prototype.call;
                e.exports = r ? o.bind(o) : function () {
                    return o.apply(o, arguments)
                }
            }, 1805: function (e, t, n) {
                var r = n(7400), o = n(8270), i = Function.prototype, a = r && Object.getOwnPropertyDescriptor,
                    l = o(i, "name"), c = l && "something" === function () {
                    }.name, s = l && (!r || r && a(i, "name").configurable);
                e.exports = {EXISTS: l, PROPER: c, CONFIGURABLE: s}
            }, 5968: function (e, t, n) {
                var r = n(7188), o = Function.prototype, i = o.bind, a = o.call, l = r && i.bind(a, a);
                e.exports = r ? function (e) {
                    return e && l(e)
                } : function (e) {
                    return e && function () {
                        return a.apply(e, arguments)
                    }
                }
            }, 1333: function (e, t, n) {
                var r = n(9859), o = n(6733), i = function (e) {
                    return o(e) ? e : void 0
                };
                e.exports = function (e, t) {
                    return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t]
                }
            }, 5300: function (e, t, n) {
                var r = n(7111);
                e.exports = function (e, t) {
                    var n = e[t];
                    return null == n ? void 0 : r(n)
                }
            }, 17: function (e, t, n) {
                var r = n(5968), o = n(2991), i = Math.floor, a = r("".charAt), l = r("".replace), c = r("".slice),
                    s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, u = /\$([$&'`]|\d{1,2})/g;
                e.exports = function (e, t, n, r, d, f) {
                    var p = n + e.length, h = r.length, m = u;
                    return void 0 !== d && (d = o(d), m = s), l(f, m, (function (o, l) {
                        var s;
                        switch (a(l, 0)) {
                            case"$":
                                return "$";
                            case"&":
                                return e;
                            case"`":
                                return c(t, 0, n);
                            case"'":
                                return c(t, p);
                            case"<":
                                s = d[c(l, 1, -1)];
                                break;
                            default:
                                var u = +l;
                                if (0 === u) return o;
                                if (u > h) {
                                    var f = i(u / 10);
                                    return 0 === f ? o : f <= h ? void 0 === r[f - 1] ? a(l, 1) : r[f - 1] + a(l, 1) : o
                                }
                                s = r[u - 1]
                        }
                        return void 0 === s ? "" : s
                    }))
                }
            }, 9859: function (e, t, n) {
                var r = function (e) {
                    return e && e.Math == Math && e
                };
                e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function () {
                    return this
                }() || Function("return this")()
            }, 8270: function (e, t, n) {
                var r = n(5968), o = n(2991), i = r({}.hasOwnProperty);
                e.exports = Object.hasOwn || function (e, t) {
                    return i(o(e), t)
                }
            }, 5977: function (e) {
                e.exports = {}
            }, 3777: function (e, t, n) {
                var r = n(1333);
                e.exports = r("document", "documentElement")
            }, 4394: function (e, t, n) {
                var r = n(7400), o = n(4229), i = n(2635);
                e.exports = !r && !o((function () {
                    return 7 != Object.defineProperty(i("div"), "a", {
                        get: function () {
                            return 7
                        }
                    }).a
                }))
            }, 9337: function (e, t, n) {
                var r = n(5968), o = n(4229), i = n(7079), a = Object, l = r("".split);
                e.exports = o((function () {
                    return !a("z").propertyIsEnumerable(0)
                })) ? function (e) {
                    return "String" == i(e) ? l(e, "") : a(e)
                } : a
            }, 835: function (e, t, n) {
                var r = n(6733), o = n(5052), i = n(6540);
                e.exports = function (e, t, n) {
                    var a, l;
                    return i && r(a = t.constructor) && a !== n && o(l = a.prototype) && l !== n.prototype && i(e, l), e
                }
            }, 8511: function (e, t, n) {
                var r = n(5968), o = n(6733), i = n(5353), a = r(Function.toString);
                o(i.inspectSource) || (i.inspectSource = function (e) {
                    return a(e)
                }), e.exports = i.inspectSource
            }, 9679: function (e, t, n) {
                var r = n(5052), o = n(5762);
                e.exports = function (e, t) {
                    r(t) && "cause" in t && o(e, "cause", t.cause)
                }
            }, 6407: function (e, t, n) {
                var r, o, i, a = n(8694), l = n(9859), c = n(5968), s = n(5052), u = n(5762), d = n(8270), f = n(5353),
                    p = n(4399), h = n(5977), m = "Object already initialized", g = l.TypeError, v = l.WeakMap;
                if (a || f.state) {
                    var y = f.state || (f.state = new v), w = c(y.get), _ = c(y.has), b = c(y.set);
                    r = function (e, t) {
                        if (_(y, e)) throw new g(m);
                        return t.facade = e, b(y, e, t), t
                    }, o = function (e) {
                        return w(y, e) || {}
                    }, i = function (e) {
                        return _(y, e)
                    }
                } else {
                    var x = p("state");
                    h[x] = !0, r = function (e, t) {
                        if (d(e, x)) throw new g(m);
                        return t.facade = e, u(e, x, t), t
                    }, o = function (e) {
                        return d(e, x) ? e[x] : {}
                    }, i = function (e) {
                        return d(e, x)
                    }
                }
                e.exports = {
                    set: r, get: o, has: i, enforce: function (e) {
                        return i(e) ? o(e) : r(e, {})
                    }, getterFor: function (e) {
                        return function (t) {
                            var n;
                            if (!s(t) || (n = o(t)).type !== e) throw g("Incompatible receiver, " + e + " required");
                            return n
                        }
                    }
                }
            }, 6733: function (e) {
                e.exports = function (e) {
                    return "function" == typeof e
                }
            }, 6541: function (e, t, n) {
                var r = n(4229), o = n(6733), i = /#|\.prototype\./, a = function (e, t) {
                    var n = c[l(e)];
                    return n == u || n != s && (o(t) ? r(t) : !!t)
                }, l = a.normalize = function (e) {
                    return String(e).replace(i, ".").toLowerCase()
                }, c = a.data = {}, s = a.NATIVE = "N", u = a.POLYFILL = "P";
                e.exports = a
            }, 5052: function (e, t, n) {
                var r = n(6733);
                e.exports = function (e) {
                    return "object" == typeof e ? null !== e : r(e)
                }
            }, 4231: function (e) {
                e.exports = !1
            }, 9395: function (e, t, n) {
                var r = n(1333), o = n(6733), i = n(1321), a = n(6969), l = Object;
                e.exports = a ? function (e) {
                    return "symbol" == typeof e
                } : function (e) {
                    var t = r("Symbol");
                    return o(t) && i(t.prototype, l(e))
                }
            }, 693: function (e, t, n) {
                "use strict";
                var r, o, i, a = n(4229), l = n(6733), c = n(2391), s = n(7567), u = n(4768), d = n(95), f = n(4231),
                    p = d("iterator"), h = !1;
                [].keys && ("next" in (i = [].keys()) ? (o = s(s(i))) !== Object.prototype && (r = o) : h = !0), null == r || a((function () {
                    var e = {};
                    return r[p].call(e) !== e
                })) ? r = {} : f && (r = c(r)), l(r[p]) || u(r, p, (function () {
                    return this
                })), e.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: h}
            }, 5495: function (e) {
                e.exports = {}
            }, 9646: function (e, t, n) {
                var r = n(4237);
                e.exports = function (e) {
                    return r(e.length)
                }
            }, 6039: function (e, t, n) {
                var r = n(4229), o = n(6733), i = n(8270), a = n(7400), l = n(1805).CONFIGURABLE, c = n(8511),
                    s = n(6407), u = s.enforce, d = s.get, f = Object.defineProperty, p = a && !r((function () {
                        return 8 !== f((function () {
                        }), "length", {value: 8}).length
                    })), h = String(String).split("String"), m = e.exports = function (e, t, n) {
                        "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!i(e, "name") || l && e.name !== t) && (a ? f(e, "name", {
                            value: t,
                            configurable: !0
                        }) : e.name = t), p && n && i(n, "arity") && e.length !== n.arity && f(e, "length", {value: n.arity});
                        try {
                            n && i(n, "constructor") && n.constructor ? a && f(e, "prototype", {writable: !1}) : e.prototype && (e.prototype = void 0)
                        } catch (e) {
                        }
                        var r = u(e);
                        return i(r, "source") || (r.source = h.join("string" == typeof t ? t : "")), e
                    };
                Function.prototype.toString = m((function () {
                    return o(this) && d(this).source || c(this)
                }), "toString")
            }, 917: function (e) {
                var t = Math.ceil, n = Math.floor;
                e.exports = Math.trunc || function (e) {
                    var r = +e;
                    return (r > 0 ? n : t)(r)
                }
            }, 3839: function (e, t, n) {
                var r = n(6358), o = n(4229);
                e.exports = !!Object.getOwnPropertySymbols && !o((function () {
                    var e = Symbol();
                    return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
                }))
            }, 8694: function (e, t, n) {
                var r = n(9859), o = n(6733), i = n(8511), a = r.WeakMap;
                e.exports = o(a) && /native code/.test(i(a))
            }, 635: function (e, t, n) {
                var r = n(3326);
                e.exports = function (e, t) {
                    return void 0 === e ? arguments.length < 2 ? "" : t : r(e)
                }
            }, 2391: function (e, t, n) {
                var r, o = n(1176), i = n(219), a = n(3837), l = n(5977), c = n(3777), s = n(2635), u = n(4399),
                    d = u("IE_PROTO"), f = function () {
                    }, p = function (e) {
                        return "<script>" + e + "</" + "script>"
                    }, h = function (e) {
                        e.write(p("")), e.close();
                        var t = e.parentWindow.Object;
                        return e = null, t
                    }, m = function () {
                        try {
                            r = new ActiveXObject("htmlfile")
                        } catch (e) {
                        }
                        var e, t;
                        m = "undefined" != typeof document ? document.domain && r ? h(r) : ((t = s("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F) : h(r);
                        for (var n = a.length; n--;) delete m.prototype[a[n]];
                        return m()
                    };
                l[d] = !0, e.exports = Object.create || function (e, t) {
                    var n;
                    return null !== e ? (f.prototype = o(e), n = new f, f.prototype = null, n[d] = e) : n = m(), void 0 === t ? n : i.f(n, t)
                }
            }, 219: function (e, t, n) {
                var r = n(7400), o = n(7137), i = n(1787), a = n(1176), l = n(905), c = n(5632);
                t.f = r && !o ? Object.defineProperties : function (e, t) {
                    a(e);
                    for (var n, r = l(t), o = c(t), s = o.length, u = 0; s > u;) i.f(e, n = o[u++], r[n]);
                    return e
                }
            }, 1787: function (e, t, n) {
                var r = n(7400), o = n(4394), i = n(7137), a = n(1176), l = n(9310), c = TypeError,
                    s = Object.defineProperty, u = Object.getOwnPropertyDescriptor, d = "enumerable",
                    f = "configurable", p = "writable";
                t.f = r ? i ? function (e, t, n) {
                    if (a(e), t = l(t), a(n), "function" == typeof e && "prototype" === t && "value" in n && p in n && !n.writable) {
                        var r = u(e, t);
                        r && r.writable && (e[t] = n.value, n = {
                            configurable: f in n ? n.configurable : r.configurable,
                            enumerable: d in n ? n.enumerable : r.enumerable,
                            writable: !1
                        })
                    }
                    return s(e, t, n)
                } : s : function (e, t, n) {
                    if (a(e), t = l(t), a(n), o) try {
                        return s(e, t, n)
                    } catch (e) {
                    }
                    if ("get" in n || "set" in n) throw c("Accessors not supported");
                    return "value" in n && (e[t] = n.value), e
                }
            }, 7933: function (e, t, n) {
                var r = n(7400), o = n(266), i = n(9195), a = n(5358), l = n(905), c = n(9310), s = n(8270),
                    u = n(4394), d = Object.getOwnPropertyDescriptor;
                t.f = r ? d : function (e, t) {
                    if (e = l(e), t = c(t), u) try {
                        return d(e, t)
                    } catch (e) {
                    }
                    if (s(e, t)) return a(!o(i.f, e, t), e[t])
                }
            }, 8151: function (e, t, n) {
                var r = n(140), o = n(3837).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function (e) {
                    return r(e, o)
                }
            }, 894: function (e, t) {
                t.f = Object.getOwnPropertySymbols
            }, 7567: function (e, t, n) {
                var r = n(8270), o = n(6733), i = n(2991), a = n(4399), l = n(7528), c = a("IE_PROTO"), s = Object,
                    u = s.prototype;
                e.exports = l ? s.getPrototypeOf : function (e) {
                    var t = i(e);
                    if (r(t, c)) return t[c];
                    var n = t.constructor;
                    return o(n) && t instanceof n ? n.prototype : t instanceof s ? u : null
                }
            }, 1321: function (e, t, n) {
                var r = n(5968);
                e.exports = r({}.isPrototypeOf)
            }, 140: function (e, t, n) {
                var r = n(5968), o = n(8270), i = n(905), a = n(9540).indexOf, l = n(5977), c = r([].push);
                e.exports = function (e, t) {
                    var n, r = i(e), s = 0, u = [];
                    for (n in r) !o(l, n) && o(r, n) && c(u, n);
                    for (; t.length > s;) o(r, n = t[s++]) && (~a(u, n) || c(u, n));
                    return u
                }
            }, 5632: function (e, t, n) {
                var r = n(140), o = n(3837);
                e.exports = Object.keys || function (e) {
                    return r(e, o)
                }
            }, 9195: function (e, t) {
                "use strict";
                var n = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, o = r && !n.call({1: 2}, 1);
                t.f = o ? function (e) {
                    var t = r(this, e);
                    return !!t && t.enumerable
                } : n
            }, 6540: function (e, t, n) {
                var r = n(5968), o = n(1176), i = n(8505);
                e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                    var e, t = !1, n = {};
                    try {
                        (e = r(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), t = n instanceof Array
                    } catch (e) {
                    }
                    return function (n, r) {
                        return o(n), i(r), t ? e(n, r) : n.__proto__ = r, n
                    }
                }() : void 0)
            }, 2914: function (e, t, n) {
                var r = n(266), o = n(6733), i = n(5052), a = TypeError;
                e.exports = function (e, t) {
                    var n, l;
                    if ("string" === t && o(n = e.toString) && !i(l = r(n, e))) return l;
                    if (o(n = e.valueOf) && !i(l = r(n, e))) return l;
                    if ("string" !== t && o(n = e.toString) && !i(l = r(n, e))) return l;
                    throw a("Can't convert object to primitive value")
                }
            }, 4826: function (e, t, n) {
                var r = n(1333), o = n(5968), i = n(8151), a = n(894), l = n(1176), c = o([].concat);
                e.exports = r("Reflect", "ownKeys") || function (e) {
                    var t = i.f(l(e)), n = a.f;
                    return n ? c(t, n(e)) : t
                }
            }, 6060: function (e, t, n) {
                var r = n(1787).f;
                e.exports = function (e, t, n) {
                    n in e || r(e, n, {
                        configurable: !0, get: function () {
                            return t[n]
                        }, set: function (e) {
                            t[n] = e
                        }
                    })
                }
            }, 8115: function (e, t, n) {
                var r = n(266), o = n(1176), i = n(6733), a = n(7079), l = n(3466), c = TypeError;
                e.exports = function (e, t) {
                    var n = e.exec;
                    if (i(n)) {
                        var s = r(n, e, t);
                        return null !== s && o(s), s
                    }
                    if ("RegExp" === a(e)) return r(l, e, t);
                    throw c("RegExp#exec called on incompatible receiver")
                }
            }, 3466: function (e, t, n) {
                "use strict";
                var r, o, i = n(266), a = n(5968), l = n(3326), c = n(895), s = n(5650), u = n(3036), d = n(2391),
                    f = n(6407).get, p = n(2926), h = n(461), m = u("native-string-replace", String.prototype.replace),
                    g = RegExp.prototype.exec, v = g, y = a("".charAt), w = a("".indexOf), _ = a("".replace),
                    b = a("".slice),
                    x = (o = /b*/g, i(g, r = /a/, "a"), i(g, o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
                    D = s.BROKEN_CARET, k = void 0 !== /()??/.exec("")[1];
                (x || k || D || p || h) && (v = function (e) {
                    var t, n, r, o, a, s, u, p = this, h = f(p), S = l(e), C = h.raw;
                    if (C) return C.lastIndex = p.lastIndex, t = i(v, C, S), p.lastIndex = C.lastIndex, t;
                    var E = h.groups, I = D && p.sticky, M = i(c, p), N = p.source, T = 0, O = S;
                    if (I && (M = _(M, "y", ""), -1 === w(M, "g") && (M += "g"), O = b(S, p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== y(S, p.lastIndex - 1)) && (N = "(?: " + N + ")", O = " " + O, T++), n = new RegExp("^(?:" + N + ")", M)), k && (n = new RegExp("^" + N + "$(?!\\s)", M)), x && (r = p.lastIndex), o = i(g, I ? n : p, O), I ? o ? (o.input = b(o.input, T), o[0] = b(o[0], T), o.index = p.lastIndex, p.lastIndex += o[0].length) : p.lastIndex = 0 : x && o && (p.lastIndex = p.global ? o.index + o[0].length : r), k && o && o.length > 1 && i(m, o[0], n, (function () {
                        for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0)
                    })), o && E) for (o.groups = s = d(null), a = 0; a < E.length; a++) s[(u = E[a])[0]] = o[u[1]];
                    return o
                }), e.exports = v
            }, 895: function (e, t, n) {
                "use strict";
                var r = n(1176);
                e.exports = function () {
                    var e = r(this), t = "";
                    return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
                }
            }, 5650: function (e, t, n) {
                var r = n(4229), o = n(9859).RegExp, i = r((function () {
                    var e = o("a", "y");
                    return e.lastIndex = 2, null != e.exec("abcd")
                })), a = i || r((function () {
                    return !o("a", "y").sticky
                })), l = i || r((function () {
                    var e = o("^r", "gy");
                    return e.lastIndex = 2, null != e.exec("str")
                }));
                e.exports = {BROKEN_CARET: l, MISSED_STICKY: a, UNSUPPORTED_Y: i}
            }, 2926: function (e, t, n) {
                var r = n(4229), o = n(9859).RegExp;
                e.exports = r((function () {
                    var e = o(".", "s");
                    return !(e.dotAll && e.exec("\n") && "s" === e.flags)
                }))
            }, 461: function (e, t, n) {
                var r = n(4229), o = n(9859).RegExp;
                e.exports = r((function () {
                    var e = o("(?<a>b)", "g");
                    return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
                }))
            }, 8885: function (e) {
                var t = TypeError;
                e.exports = function (e) {
                    if (null == e) throw t("Can't call method on " + e);
                    return e
                }
            }, 4555: function (e, t, n) {
                var r = n(1787).f, o = n(8270), i = n(95)("toStringTag");
                e.exports = function (e, t, n) {
                    e && !n && (e = e.prototype), e && !o(e, i) && r(e, i, {configurable: !0, value: t})
                }
            }, 4399: function (e, t, n) {
                var r = n(3036), o = n(1441), i = r("keys");
                e.exports = function (e) {
                    return i[e] || (i[e] = o(e))
                }
            }, 5353: function (e, t, n) {
                var r = n(9859), o = n(8400), i = "__core-js_shared__", a = r[i] || o(i, {});
                e.exports = a
            }, 3036: function (e, t, n) {
                var r = n(4231), o = n(5353);
                (e.exports = function (e, t) {
                    return o[e] || (o[e] = void 0 !== t ? t : {})
                })("versions", []).push({
                    version: "3.23.5",
                    mode: r ? "pure" : "global",
                    copyright: "짤 2014-2022 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            }, 966: function (e, t, n) {
                var r = n(5968), o = n(3329), i = n(3326), a = n(8885), l = r("".charAt), c = r("".charCodeAt),
                    s = r("".slice), u = function (e) {
                        return function (t, n) {
                            var r, u, d = i(a(t)), f = o(n), p = d.length;
                            return f < 0 || f >= p ? e ? "" : void 0 : (r = c(d, f)) < 55296 || r > 56319 || f + 1 === p || (u = c(d, f + 1)) < 56320 || u > 57343 ? e ? l(d, f) : r : e ? s(d, f, f + 2) : u - 56320 + (r - 55296 << 10) + 65536
                        }
                    };
                e.exports = {codeAt: u(!1), charAt: u(!0)}
            }, 3231: function (e, t, n) {
                var r = n(3329), o = Math.max, i = Math.min;
                e.exports = function (e, t) {
                    var n = r(e);
                    return n < 0 ? o(n + t, 0) : i(n, t)
                }
            }, 905: function (e, t, n) {
                var r = n(9337), o = n(8885);
                e.exports = function (e) {
                    return r(o(e))
                }
            }, 3329: function (e, t, n) {
                var r = n(917);
                e.exports = function (e) {
                    var t = +e;
                    return t != t || 0 === t ? 0 : r(t)
                }
            }, 4237: function (e, t, n) {
                var r = n(3329), o = Math.min;
                e.exports = function (e) {
                    return e > 0 ? o(r(e), 9007199254740991) : 0
                }
            }, 2991: function (e, t, n) {
                var r = n(8885), o = Object;
                e.exports = function (e) {
                    return o(r(e))
                }
            }, 2066: function (e, t, n) {
                var r = n(266), o = n(5052), i = n(9395), a = n(5300), l = n(2914), c = n(95), s = TypeError,
                    u = c("toPrimitive");
                e.exports = function (e, t) {
                    if (!o(e) || i(e)) return e;
                    var n, c = a(e, u);
                    if (c) {
                        if (void 0 === t && (t = "default"), n = r(c, e, t), !o(n) || i(n)) return n;
                        throw s("Can't convert object to primitive value")
                    }
                    return void 0 === t && (t = "number"), l(e, t)
                }
            }, 9310: function (e, t, n) {
                var r = n(2066), o = n(9395);
                e.exports = function (e) {
                    var t = r(e, "string");
                    return o(t) ? t : t + ""
                }
            }, 1601: function (e, t, n) {
                var r = {};
                r[n(95)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
            }, 3326: function (e, t, n) {
                var r = n(1589), o = String;
                e.exports = function (e) {
                    if ("Symbol" === r(e)) throw TypeError("Cannot convert a Symbol value to a string");
                    return o(e)
                }
            }, 9821: function (e) {
                var t = String;
                e.exports = function (e) {
                    try {
                        return t(e)
                    } catch (e) {
                        return "Object"
                    }
                }
            }, 1441: function (e, t, n) {
                var r = n(5968), o = 0, i = Math.random(), a = r(1..toString);
                e.exports = function (e) {
                    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++o + i, 36)
                }
            }, 6969: function (e, t, n) {
                var r = n(3839);
                e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
            }, 7137: function (e, t, n) {
                var r = n(7400), o = n(4229);
                e.exports = r && o((function () {
                    return 42 != Object.defineProperty((function () {
                    }), "prototype", {value: 42, writable: !1}).prototype
                }))
            }, 95: function (e, t, n) {
                var r = n(9859), o = n(3036), i = n(8270), a = n(1441), l = n(3839), c = n(6969), s = o("wks"),
                    u = r.Symbol, d = u && u.for, f = c ? u : u && u.withoutSetter || a;
                e.exports = function (e) {
                    if (!i(s, e) || !l && "string" != typeof s[e]) {
                        var t = "Symbol." + e;
                        l && i(u, e) ? s[e] = u[e] : s[e] = c && d ? d(t) : f(t)
                    }
                    return s[e]
                }
            }, 3949: function (e, t, n) {
                "use strict";
                var r = n(1333), o = n(8270), i = n(5762), a = n(1321), l = n(6540), c = n(7081), s = n(6060),
                    u = n(835), d = n(635), f = n(9679), p = n(1590), h = n(373), m = n(7400), g = n(4231);
                e.exports = function (e, t, n, v) {
                    var y = "stackTraceLimit", w = v ? 2 : 1, _ = e.split("."), b = _[_.length - 1],
                        x = r.apply(null, _);
                    if (x) {
                        var D = x.prototype;
                        if (!g && o(D, "cause") && delete D.cause, !n) return x;
                        var k = r("Error"), S = t((function (e, t) {
                            var n = d(v ? t : e, void 0), r = v ? new x(e) : new x;
                            return void 0 !== n && i(r, "message", n), h && i(r, "stack", p(r.stack, 2)), this && a(D, this) && u(r, this, S), arguments.length > w && f(r, arguments[w]), r
                        }));
                        if (S.prototype = D, "Error" !== b ? l ? l(S, k) : c(S, k, {name: !0}) : m && y in x && (s(S, x, y), s(S, x, "prepareStackTrace")), c(S, x), !g) try {
                            D.name !== b && i(D, "name", b), D.constructor = S
                        } catch (e) {
                        }
                        return S
                    }
                }
            }, 9529: function (e, t, n) {
                "use strict";
                var r = n(3103), o = n(9540).includes, i = n(4229), a = n(9736);
                r({
                    target: "Array", proto: !0, forced: i((function () {
                        return !Array(1).includes()
                    }))
                }, {
                    includes: function (e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), a("includes")
            }, 5735: function (e, t, n) {
                "use strict";
                var r = n(905), o = n(9736), i = n(5495), a = n(6407), l = n(1787).f, c = n(7675), s = n(4231),
                    u = n(7400), d = "Array Iterator", f = a.set, p = a.getterFor(d);
                e.exports = c(Array, "Array", (function (e, t) {
                    f(this, {type: d, target: r(e), index: 0, kind: t})
                }), (function () {
                    var e = p(this), t = e.target, n = e.kind, r = e.index++;
                    return !t || r >= t.length ? (e.target = void 0, {
                        value: void 0,
                        done: !0
                    }) : "keys" == n ? {value: r, done: !1} : "values" == n ? {
                        value: t[r],
                        done: !1
                    } : {value: [r, t[r]], done: !1}
                }), "values");
                var h = i.Arguments = i.Array;
                if (o("keys"), o("values"), o("entries"), !s && u && "values" !== h.name) try {
                    l(h, "name", {value: "values"})
                } catch (e) {
                }
            }, 3985: function (e, t, n) {
                n(9736)("flatMap")
            }, 7694: function (e, t, n) {
                n(9736)("flat")
            }, 1372: function (e, t, n) {
                var r = n(3103), o = n(9859), i = n(3171), a = n(3949), l = "WebAssembly", c = o.WebAssembly,
                    s = 7 !== Error("e", {cause: 7}).cause, u = function (e, t) {
                        var n = {};
                        n[e] = a(e, t, s), r({global: !0, constructor: !0, arity: 1, forced: s}, n)
                    }, d = function (e, t) {
                        if (c && c[e]) {
                            var n = {};
                            n[e] = a("WebAssembly." + e, t, s), r({
                                target: l,
                                stat: !0,
                                constructor: !0,
                                arity: 1,
                                forced: s
                            }, n)
                        }
                    };
                u("Error", (function (e) {
                    return function (t) {
                        return i(e, this, arguments)
                    }
                })), u("EvalError", (function (e) {
                    return function (t) {
                        return i(e, this, arguments)
                    }
                })), u("RangeError", (function (e) {
                    return function (t) {
                        return i(e, this, arguments)
                    }
                })), u("ReferenceError", (function (e) {
                    return function (t) {
                        return i(e, this, arguments)
                    }
                })), u("SyntaxError", (function (e) {
                    return function (t) {
                        return i(e, this, arguments)
                    }
                })), u("TypeError", (function (e) {
                    return function (t) {
                        return i(e, this, arguments)
                    }
                })), u("URIError", (function (e) {
                    return function (t) {
                        return i(e, this, arguments)
                    }
                })), d("CompileError", (function (e) {
                    return function (t) {
                        return i(e, this, arguments)
                    }
                })), d("LinkError", (function (e) {
                    return function (t) {
                        return i(e, this, arguments)
                    }
                })), d("RuntimeError", (function (e) {
                    return function (t) {
                        return i(e, this, arguments)
                    }
                }))
            }, 7950: function (e, t, n) {
                "use strict";
                var r = n(3103), o = n(3466);
                r({target: "RegExp", proto: !0, forced: /./.exec !== o}, {exec: o})
            }, 5940: function (e, t, n) {
                "use strict";
                var r = n(3171), o = n(266), i = n(5968), a = n(4954), l = n(4229), c = n(1176), s = n(6733),
                    u = n(3329), d = n(4237), f = n(3326), p = n(8885), h = n(6637), m = n(5300), g = n(17),
                    v = n(8115), y = n(95)("replace"), w = Math.max, _ = Math.min, b = i([].concat), x = i([].push),
                    D = i("".indexOf), k = i("".slice), S = "$0" === "a".replace(/./, "$0"),
                    C = !!/./[y] && "" === /./[y]("a", "$0");
                a("replace", (function (e, t, n) {
                    var i = C ? "$" : "$0";
                    return [function (e, n) {
                        var r = p(this), i = null == e ? void 0 : m(e, y);
                        return i ? o(i, e, r, n) : o(t, f(r), e, n)
                    }, function (e, o) {
                        var a = c(this), l = f(e);
                        if ("string" == typeof o && -1 === D(o, i) && -1 === D(o, "$<")) {
                            var p = n(t, a, l, o);
                            if (p.done) return p.value
                        }
                        var m = s(o);
                        m || (o = f(o));
                        var y = a.global;
                        if (y) {
                            var S = a.unicode;
                            a.lastIndex = 0
                        }
                        for (var C = []; ;) {
                            var E = v(a, l);
                            if (null === E) break;
                            if (x(C, E), !y) break;
                            "" === f(E[0]) && (a.lastIndex = h(l, d(a.lastIndex), S))
                        }
                        for (var I, M = "", N = 0, T = 0; T < C.length; T++) {
                            for (var O = f((E = C[T])[0]), P = w(_(u(E.index), l.length), 0), A = [], R = 1; R < E.length; R++) x(A, void 0 === (I = E[R]) ? I : String(I));
                            var L = E.groups;
                            if (m) {
                                var H = b([O], A, P, l);
                                void 0 !== L && x(H, L);
                                var F = f(r(o, void 0, H))
                            } else F = g(O, l, P, A, L, o);
                            P >= N && (M += k(l, N, P) + F, N = P + O.length)
                        }
                        return M + k(l, N)
                    }]
                }), !!l((function () {
                    var e = /./;
                    return e.exec = function () {
                        var e = [];
                        return e.groups = {a: "7"}, e
                    }, "7" !== "".replace(e, "$<a>")
                })) || !S || C)
            }, 6886: function (e, t, n) {
                var r = n(9859), o = n(5694), i = n(8865), a = n(5735), l = n(5762), c = n(95), s = c("iterator"),
                    u = c("toStringTag"), d = a.values, f = function (e, t) {
                        if (e) {
                            if (e[s] !== d) try {
                                l(e, s, d)
                            } catch (t) {
                                e[s] = d
                            }
                            if (e[u] || l(e, u, t), o[t]) for (var n in a) if (e[n] !== a[n]) try {
                                l(e, n, a[n])
                            } catch (t) {
                                e[n] = a[n]
                            }
                        }
                    };
                for (var p in o) f(r[p] && r[p].prototype, p);
                f(i, "DOMTokenList")
            }, 5368: function (e) {
                /*! @license DOMPurify 2.3.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.8/LICENSE */
                e.exports = function () {
                    "use strict";

                    function e(t) {
                        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }, e(t)
                    }

                    function t(e, n) {
                        return t = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t, e
                        }, t(e, n)
                    }

                    function n() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                            }))), !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function r(e, o, i) {
                        return r = n() ? Reflect.construct : function (e, n, r) {
                            var o = [null];
                            o.push.apply(o, n);
                            var i = new (Function.bind.apply(e, o));
                            return r && t(i, r.prototype), i
                        }, r.apply(null, arguments)
                    }

                    function o(e) {
                        return i(e) || a(e) || l(e) || s()
                    }

                    function i(e) {
                        if (Array.isArray(e)) return c(e)
                    }

                    function a(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }

                    function l(e, t) {
                        if (e) {
                            if ("string" == typeof e) return c(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                        }
                    }

                    function c(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function s() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }

                    var u = Object.hasOwnProperty, d = Object.setPrototypeOf, f = Object.isFrozen,
                        p = Object.getPrototypeOf, h = Object.getOwnPropertyDescriptor, m = Object.freeze,
                        g = Object.seal, v = Object.create, y = "undefined" != typeof Reflect && Reflect, w = y.apply,
                        _ = y.construct;
                    w || (w = function (e, t, n) {
                        return e.apply(t, n)
                    }), m || (m = function (e) {
                        return e
                    }), g || (g = function (e) {
                        return e
                    }), _ || (_ = function (e, t) {
                        return r(e, o(t))
                    });
                    var b = T(Array.prototype.forEach), x = T(Array.prototype.pop), D = T(Array.prototype.push),
                        k = T(String.prototype.toLowerCase), S = T(String.prototype.match),
                        C = T(String.prototype.replace), E = T(String.prototype.indexOf), I = T(String.prototype.trim),
                        M = T(RegExp.prototype.test), N = O(TypeError);

                    function T(e) {
                        return function (t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            return w(e, t, r)
                        }
                    }

                    function O(e) {
                        return function () {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return _(e, n)
                        }
                    }

                    function P(e, t) {
                        d && d(e, null);
                        for (var n = t.length; n--;) {
                            var r = t[n];
                            if ("string" == typeof r) {
                                var o = k(r);
                                o !== r && (f(t) || (t[n] = o), r = o)
                            }
                            e[r] = !0
                        }
                        return e
                    }

                    function A(e) {
                        var t, n = v(null);
                        for (t in e) w(u, e, [t]) && (n[t] = e[t]);
                        return n
                    }

                    function R(e, t) {
                        for (; null !== e;) {
                            var n = h(e, t);
                            if (n) {
                                if (n.get) return T(n.get);
                                if ("function" == typeof n.value) return T(n.value)
                            }
                            e = p(e)
                        }

                        function r(e) {
                            return console.warn("fallback value for", e), null
                        }

                        return r
                    }

                    var L = m(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                        H = m(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                        F = m(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                        z = m(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                        W = m(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
                        B = m(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                        j = m(["#text"]),
                        G = m(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
                        U = m(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                        Y = m(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                        V = m(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                        $ = g(/\{\{[\w\W]*|[\w\W]*\}\}/gm), X = g(/<%[\w\W]*|[\w\W]*%>/gm),
                        q = g(/^data-[\-\w.\u00B7-\uFFFF]/), K = g(/^aria-[\-\w]+$/),
                        Z = g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                        J = g(/^(?:\w+script|data):/i),
                        Q = g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), ee = g(/^html$/i),
                        te = function () {
                            return "undefined" == typeof window ? null : window
                        }, ne = function (t, n) {
                            if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
                            var r = null, o = "data-tt-policy-suffix";
                            n.currentScript && n.currentScript.hasAttribute(o) && (r = n.currentScript.getAttribute(o));
                            var i = "dompurify" + (r ? "#" + r : "");
                            try {
                                return t.createPolicy(i, {
                                    createHTML: function (e) {
                                        return e
                                    }
                                })
                            } catch (e) {
                                return console.warn("TrustedTypes policy " + i + " could not be created."), null
                            }
                        };

                    function re() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te(),
                            n = function (e) {
                                return re(e)
                            };
                        if (n.version = "2.3.8", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
                        var r = t.document, i = t.document, a = t.DocumentFragment, l = t.HTMLTemplateElement,
                            c = t.Node, s = t.Element, u = t.NodeFilter, d = t.NamedNodeMap,
                            f = void 0 === d ? t.NamedNodeMap || t.MozNamedAttrMap : d, p = t.HTMLFormElement,
                            h = t.DOMParser, g = t.trustedTypes, v = s.prototype, y = R(v, "cloneNode"),
                            w = R(v, "nextSibling"), _ = R(v, "childNodes"), T = R(v, "parentNode");
                        if ("function" == typeof l) {
                            var O = i.createElement("template");
                            O.content && O.content.ownerDocument && (i = O.content.ownerDocument)
                        }
                        var oe = ne(g, r), ie = oe ? oe.createHTML("") : "", ae = i, le = ae.implementation,
                            ce = ae.createNodeIterator, se = ae.createDocumentFragment, ue = ae.getElementsByTagName,
                            de = r.importNode, fe = {};
                        try {
                            fe = A(i).documentMode ? i.documentMode : {}
                        } catch (e) {
                        }
                        var pe = {};
                        n.isSupported = "function" == typeof T && le && void 0 !== le.createHTMLDocument && 9 !== fe;
                        var he, me, ge = $, ve = X, ye = q, we = K, _e = J, be = Q, xe = Z, De = null,
                            ke = P({}, [].concat(o(L), o(H), o(F), o(W), o(j))), Se = null,
                            Ce = P({}, [].concat(o(G), o(U), o(Y), o(V))), Ee = Object.seal(Object.create(null, {
                                tagNameCheck: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: null
                                },
                                attributeNameCheck: {writable: !0, configurable: !1, enumerable: !0, value: null},
                                allowCustomizedBuiltInElements: {writable: !0, configurable: !1, enumerable: !0, value: !1}
                            })), Ie = null, Me = null, Ne = !0, Te = !0, Oe = !1, Pe = !1, Ae = !1, Re = !1, Le = !1,
                            He = !1, Fe = !1, ze = !1, We = !0, Be = !0, je = !1, Ge = {}, Ue = null,
                            Ye = P({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                            Ve = null, $e = P({}, ["audio", "video", "img", "source", "image", "track"]), Xe = null,
                            qe = P({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                            Ke = "http://www.w3.org/1998/Math/MathML", Ze = "http://www.w3.org/2000/svg",
                            Je = "http://www.w3.org/1999/xhtml", Qe = Je, et = !1,
                            tt = ["application/xhtml+xml", "text/html"], nt = "text/html", rt = null,
                            ot = i.createElement("form"), it = function (e) {
                                return e instanceof RegExp || e instanceof Function
                            }, at = function (t) {
                                rt && rt === t || (t && "object" === e(t) || (t = {}), t = A(t), De = "ALLOWED_TAGS" in t ? P({}, t.ALLOWED_TAGS) : ke, Se = "ALLOWED_ATTR" in t ? P({}, t.ALLOWED_ATTR) : Ce, Xe = "ADD_URI_SAFE_ATTR" in t ? P(A(qe), t.ADD_URI_SAFE_ATTR) : qe, Ve = "ADD_DATA_URI_TAGS" in t ? P(A($e), t.ADD_DATA_URI_TAGS) : $e, Ue = "FORBID_CONTENTS" in t ? P({}, t.FORBID_CONTENTS) : Ye, Ie = "FORBID_TAGS" in t ? P({}, t.FORBID_TAGS) : {}, Me = "FORBID_ATTR" in t ? P({}, t.FORBID_ATTR) : {}, Ge = "USE_PROFILES" in t && t.USE_PROFILES, Ne = !1 !== t.ALLOW_ARIA_ATTR, Te = !1 !== t.ALLOW_DATA_ATTR, Oe = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Pe = t.SAFE_FOR_TEMPLATES || !1, Ae = t.WHOLE_DOCUMENT || !1, He = t.RETURN_DOM || !1, Fe = t.RETURN_DOM_FRAGMENT || !1, ze = t.RETURN_TRUSTED_TYPE || !1, Le = t.FORCE_BODY || !1, We = !1 !== t.SANITIZE_DOM, Be = !1 !== t.KEEP_CONTENT, je = t.IN_PLACE || !1, xe = t.ALLOWED_URI_REGEXP || xe, Qe = t.NAMESPACE || Je, t.CUSTOM_ELEMENT_HANDLING && it(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ee.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && it(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ee.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ee.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), he = he = -1 === tt.indexOf(t.PARSER_MEDIA_TYPE) ? nt : t.PARSER_MEDIA_TYPE, me = "application/xhtml+xml" === he ? function (e) {
                                    return e
                                } : k, Pe && (Te = !1), Fe && (He = !0), Ge && (De = P({}, o(j)), Se = [], !0 === Ge.html && (P(De, L), P(Se, G)), !0 === Ge.svg && (P(De, H), P(Se, U), P(Se, V)), !0 === Ge.svgFilters && (P(De, F), P(Se, U), P(Se, V)), !0 === Ge.mathMl && (P(De, W), P(Se, Y), P(Se, V))), t.ADD_TAGS && (De === ke && (De = A(De)), P(De, t.ADD_TAGS)), t.ADD_ATTR && (Se === Ce && (Se = A(Se)), P(Se, t.ADD_ATTR)), t.ADD_URI_SAFE_ATTR && P(Xe, t.ADD_URI_SAFE_ATTR), t.FORBID_CONTENTS && (Ue === Ye && (Ue = A(Ue)), P(Ue, t.FORBID_CONTENTS)), Be && (De["#text"] = !0), Ae && P(De, ["html", "head", "body"]), De.table && (P(De, ["tbody"]), delete Ie.tbody), m && m(t), rt = t)
                            }, lt = P({}, ["mi", "mo", "mn", "ms", "mtext"]),
                            ct = P({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                            st = P({}, ["title", "style", "font", "a", "script"]), ut = P({}, H);
                        P(ut, F), P(ut, z);
                        var dt = P({}, W);
                        P(dt, B);
                        var ft = function (e) {
                            var t = T(e);
                            t && t.tagName || (t = {namespaceURI: Je, tagName: "template"});
                            var n = k(e.tagName), r = k(t.tagName);
                            return e.namespaceURI === Ze ? t.namespaceURI === Je ? "svg" === n : t.namespaceURI === Ke ? "svg" === n && ("annotation-xml" === r || lt[r]) : Boolean(ut[n]) : e.namespaceURI === Ke ? t.namespaceURI === Je ? "math" === n : t.namespaceURI === Ze ? "math" === n && ct[r] : Boolean(dt[n]) : e.namespaceURI === Je && !(t.namespaceURI === Ze && !ct[r]) && !(t.namespaceURI === Ke && !lt[r]) && !dt[n] && (st[n] || !ut[n])
                        }, pt = function (e) {
                            D(n.removed, {element: e});
                            try {
                                e.parentNode.removeChild(e)
                            } catch (t) {
                                try {
                                    e.outerHTML = ie
                                } catch (t) {
                                    e.remove()
                                }
                            }
                        }, ht = function (e, t) {
                            try {
                                D(n.removed, {attribute: t.getAttributeNode(e), from: t})
                            } catch (e) {
                                D(n.removed, {attribute: null, from: t})
                            }
                            if (t.removeAttribute(e), "is" === e && !Se[e]) if (He || Fe) try {
                                pt(t)
                            } catch (e) {
                            } else try {
                                t.setAttribute(e, "")
                            } catch (e) {
                            }
                        }, mt = function (e) {
                            var t, n;
                            if (Le) e = "<remove></remove>" + e; else {
                                var r = S(e, /^[\r\n\t ]+/);
                                n = r && r[0]
                            }
                            "application/xhtml+xml" === he && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                            var o = oe ? oe.createHTML(e) : e;
                            if (Qe === Je) try {
                                t = (new h).parseFromString(o, he)
                            } catch (e) {
                            }
                            if (!t || !t.documentElement) {
                                t = le.createDocument(Qe, "template", null);
                                try {
                                    t.documentElement.innerHTML = et ? "" : o
                                } catch (e) {
                                }
                            }
                            var a = t.body || t.documentElement;
                            return e && n && a.insertBefore(i.createTextNode(n), a.childNodes[0] || null), Qe === Je ? ue.call(t, Ae ? "html" : "body")[0] : Ae ? t.documentElement : a
                        }, gt = function (e) {
                            return ce.call(e.ownerDocument || e, e, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT, null, !1)
                        }, vt = function (e) {
                            return e instanceof p && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof f) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore)
                        }, yt = function (t) {
                            return "object" === e(c) ? t instanceof c : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
                        }, wt = function (e, t, r) {
                            pe[e] && b(pe[e], (function (e) {
                                e.call(n, t, r, rt)
                            }))
                        }, _t = function (e) {
                            var t;
                            if (wt("beforeSanitizeElements", e, null), vt(e)) return pt(e), !0;
                            if (M(/[\u0080-\uFFFF]/, e.nodeName)) return pt(e), !0;
                            var r = me(e.nodeName);
                            if (wt("uponSanitizeElement", e, {
                                tagName: r,
                                allowedTags: De
                            }), e.hasChildNodes() && !yt(e.firstElementChild) && (!yt(e.content) || !yt(e.content.firstElementChild)) && M(/<[/\w]/g, e.innerHTML) && M(/<[/\w]/g, e.textContent)) return pt(e), !0;
                            if ("select" === r && M(/<template/i, e.innerHTML)) return pt(e), !0;
                            if (!De[r] || Ie[r]) {
                                if (!Ie[r] && xt(r)) {
                                    if (Ee.tagNameCheck instanceof RegExp && M(Ee.tagNameCheck, r)) return !1;
                                    if (Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(r)) return !1
                                }
                                if (Be && !Ue[r]) {
                                    var o = T(e) || e.parentNode, i = _(e) || e.childNodes;
                                    if (i && o) for (var a = i.length - 1; a >= 0; --a) o.insertBefore(y(i[a], !0), w(e))
                                }
                                return pt(e), !0
                            }
                            return e instanceof s && !ft(e) ? (pt(e), !0) : "noscript" !== r && "noembed" !== r || !M(/<\/no(script|embed)/i, e.innerHTML) ? (Pe && 3 === e.nodeType && (t = e.textContent, t = C(t, ge, " "), t = C(t, ve, " "), e.textContent !== t && (D(n.removed, {element: e.cloneNode()}), e.textContent = t)), wt("afterSanitizeElements", e, null), !1) : (pt(e), !0)
                        }, bt = function (e, t, n) {
                            if (We && ("id" === t || "name" === t) && (n in i || n in ot)) return !1;
                            if (Te && !Me[t] && M(ye, t)) ; else if (Ne && M(we, t)) ; else if (!Se[t] || Me[t]) {
                                if (!(xt(e) && (Ee.tagNameCheck instanceof RegExp && M(Ee.tagNameCheck, e) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(e)) && (Ee.attributeNameCheck instanceof RegExp && M(Ee.attributeNameCheck, t) || Ee.attributeNameCheck instanceof Function && Ee.attributeNameCheck(t)) || "is" === t && Ee.allowCustomizedBuiltInElements && (Ee.tagNameCheck instanceof RegExp && M(Ee.tagNameCheck, n) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(n)))) return !1
                            } else if (Xe[t]) ; else if (M(xe, C(n, be, ""))) ; else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== E(n, "data:") || !Ve[e]) if (Oe && !M(_e, C(n, be, ""))) ; else if (n) return !1;
                            return !0
                        }, xt = function (e) {
                            return e.indexOf("-") > 0
                        }, Dt = function (e) {
                            var t, r, o, i;
                            wt("beforeSanitizeAttributes", e, null);
                            var a = e.attributes;
                            if (a) {
                                var l = {attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Se};
                                for (i = a.length; i--;) {
                                    var c = t = a[i], s = c.name, u = c.namespaceURI;
                                    if (r = "value" === s ? t.value : I(t.value), o = me(s), l.attrName = o, l.attrValue = r, l.keepAttr = !0, l.forceKeepAttr = void 0, wt("uponSanitizeAttribute", e, l), r = l.attrValue, !l.forceKeepAttr && (ht(s, e), l.keepAttr)) if (M(/\/>/i, r)) ht(s, e); else {
                                        Pe && (r = C(r, ge, " "), r = C(r, ve, " "));
                                        var d = me(e.nodeName);
                                        if (bt(d, o, r)) try {
                                            u ? e.setAttributeNS(u, s, r) : e.setAttribute(s, r), x(n.removed)
                                        } catch (e) {
                                        }
                                    }
                                }
                                wt("afterSanitizeAttributes", e, null)
                            }
                        }, kt = function e(t) {
                            var n, r = gt(t);
                            for (wt("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) wt("uponSanitizeShadowNode", n, null), _t(n) || (n.content instanceof a && e(n.content), Dt(n));
                            wt("afterSanitizeShadowDOM", t, null)
                        };
                        return n.sanitize = function (o, i) {
                            var l, s, u, d, f;
                            if ((et = !o) && (o = "\x3c!--\x3e"), "string" != typeof o && !yt(o)) {
                                if ("function" != typeof o.toString) throw N("toString is not a function");
                                if ("string" != typeof (o = o.toString())) throw N("dirty is not a string, aborting")
                            }
                            if (!n.isSupported) {
                                if ("object" === e(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                                    if ("string" == typeof o) return t.toStaticHTML(o);
                                    if (yt(o)) return t.toStaticHTML(o.outerHTML)
                                }
                                return o
                            }
                            if (Re || at(i), n.removed = [], "string" == typeof o && (je = !1), je) {
                                if (o.nodeName) {
                                    var p = me(o.nodeName);
                                    if (!De[p] || Ie[p]) throw N("root node is forbidden and cannot be sanitized in-place")
                                }
                            } else if (o instanceof c) 1 === (s = (l = mt("\x3c!----\x3e")).ownerDocument.importNode(o, !0)).nodeType && "BODY" === s.nodeName || "HTML" === s.nodeName ? l = s : l.appendChild(s); else {
                                if (!He && !Pe && !Ae && -1 === o.indexOf("<")) return oe && ze ? oe.createHTML(o) : o;
                                if (!(l = mt(o))) return He ? null : ze ? ie : ""
                            }
                            l && Le && pt(l.firstChild);
                            for (var h = gt(je ? o : l); u = h.nextNode();) 3 === u.nodeType && u === d || _t(u) || (u.content instanceof a && kt(u.content), Dt(u), d = u);
                            if (d = null, je) return o;
                            if (He) {
                                if (Fe) for (f = se.call(l.ownerDocument); l.firstChild;) f.appendChild(l.firstChild); else f = l;
                                return Se.shadowroot && (f = de.call(r, f, !0)), f
                            }
                            var m = Ae ? l.outerHTML : l.innerHTML;
                            return Ae && De["!doctype"] && l.ownerDocument && l.ownerDocument.doctype && l.ownerDocument.doctype.name && M(ee, l.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + l.ownerDocument.doctype.name + ">\n" + m), Pe && (m = C(m, ge, " "), m = C(m, ve, " ")), oe && ze ? oe.createHTML(m) : m
                        }, n.setConfig = function (e) {
                            at(e), Re = !0
                        }, n.clearConfig = function () {
                            rt = null, Re = !1
                        }, n.isValidAttribute = function (e, t, n) {
                            rt || at({});
                            var r = me(e), o = me(t);
                            return bt(r, o, n)
                        }, n.addHook = function (e, t) {
                            "function" == typeof t && (pe[e] = pe[e] || [], D(pe[e], t))
                        }, n.removeHook = function (e) {
                            if (pe[e]) return x(pe[e])
                        }, n.removeHooks = function (e) {
                            pe[e] && (pe[e] = [])
                        }, n.removeAllHooks = function () {
                            pe = {}
                        }, n
                    }

                    return re()
                }()
            }, 4304: function (e, t, n) {
                e.exports = window.DOMPurify || (window.DOMPurify = n(5368).default || n(5368))
            }, 7386: function (e, t, n) {
                "use strict";
                var r = n(3929);
                e.exports = function (e, t, n) {
                    var o, i = [];
                    for (r(t) && (t = e || 0, e = 0), t *= o = (n = n || 1) < 0 ? -1 : 1; e * o < t; e += n) i.push(e);
                    return i
                }
            }, 1690: function (e, t, n) {
                "use strict";
                var r = n(7322), o = n(893), i = n(6956);
                e.exports = function (e, t, n) {
                    r(e) ? o(e, t, n) : i(e, t, n)
                }
            }, 893: function (e) {
                "use strict";
                e.exports = function (e, t, n) {
                    var r = 0, o = e.length;
                    for (n = n || null; r < o && !1 !== t.call(n, e[r], r, e); r += 1) ;
                }
            }, 6956: function (e) {
                "use strict";
                e.exports = function (e, t, n) {
                    var r;
                    for (r in n = n || null, e) if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) break
                }
            }, 2278: function (e, t, n) {
                "use strict";
                var r = n(7969), o = n(7065), i = n(758), a = n(5758), l = n(7322), c = n(4294), s = n(1690),
                    u = /\s+/g;

                function d() {
                    this.events = null, this.contexts = null
                }

                d.mixin = function (e) {
                    r(e.prototype, d.prototype)
                }, d.prototype._getHandlerItem = function (e, t) {
                    var n = {handler: e};
                    return t && (n.context = t), n
                }, d.prototype._safeEvent = function (e) {
                    var t, n = this.events;
                    return n || (n = this.events = {}), e && ((t = n[e]) || (t = [], n[e] = t), n = t), n
                }, d.prototype._safeContext = function () {
                    var e = this.contexts;
                    return e || (e = this.contexts = []), e
                }, d.prototype._indexOfContext = function (e) {
                    for (var t = this._safeContext(), n = 0; t[n];) {
                        if (e === t[n][0]) return n;
                        n += 1
                    }
                    return -1
                }, d.prototype._memorizeContext = function (e) {
                    var t, n;
                    o(e) && (t = this._safeContext(), (n = this._indexOfContext(e)) > -1 ? t[n][1] += 1 : t.push([e, 1]))
                }, d.prototype._forgetContext = function (e) {
                    var t, n;
                    o(e) && (t = this._safeContext(), (n = this._indexOfContext(e)) > -1 && (t[n][1] -= 1, t[n][1] <= 0 && t.splice(n, 1)))
                }, d.prototype._bindEvent = function (e, t, n) {
                    var r = this._safeEvent(e);
                    this._memorizeContext(n), r.push(this._getHandlerItem(t, n))
                }, d.prototype.on = function (e, t, n) {
                    var r = this;
                    i(e) ? (e = e.split(u), s(e, (function (e) {
                        r._bindEvent(e, t, n)
                    }))) : a(e) && (n = t, s(e, (function (e, t) {
                        r.on(t, e, n)
                    })))
                }, d.prototype.once = function (e, t, n) {
                    var r = this;
                    if (a(e)) return n = t, void s(e, (function (e, t) {
                        r.once(t, e, n)
                    }));
                    this.on(e, (function o() {
                        t.apply(n, arguments), r.off(e, o, n)
                    }), n)
                }, d.prototype._spliceMatches = function (e, t) {
                    var n, r = 0;
                    if (l(e)) for (n = e.length; r < n; r += 1) !0 === t(e[r]) && (e.splice(r, 1), n -= 1, r -= 1)
                }, d.prototype._matchHandler = function (e) {
                    var t = this;
                    return function (n) {
                        var r = e === n.handler;
                        return r && t._forgetContext(n.context), r
                    }
                }, d.prototype._matchContext = function (e) {
                    var t = this;
                    return function (n) {
                        var r = e === n.context;
                        return r && t._forgetContext(n.context), r
                    }
                }, d.prototype._matchHandlerAndContext = function (e, t) {
                    var n = this;
                    return function (r) {
                        var o = e === r.handler, i = t === r.context, a = o && i;
                        return a && n._forgetContext(r.context), a
                    }
                }, d.prototype._offByEventName = function (e, t) {
                    var n = this, r = c(t), o = n._matchHandler(t);
                    e = e.split(u), s(e, (function (e) {
                        var t = n._safeEvent(e);
                        r ? n._spliceMatches(t, o) : (s(t, (function (e) {
                            n._forgetContext(e.context)
                        })), n.events[e] = [])
                    }))
                }, d.prototype._offByHandler = function (e) {
                    var t = this, n = this._matchHandler(e);
                    s(this._safeEvent(), (function (e) {
                        t._spliceMatches(e, n)
                    }))
                }, d.prototype._offByObject = function (e, t) {
                    var n, r = this;
                    this._indexOfContext(e) < 0 ? s(e, (function (e, t) {
                        r.off(t, e)
                    })) : i(t) ? (n = this._matchContext(e), r._spliceMatches(this._safeEvent(t), n)) : c(t) ? (n = this._matchHandlerAndContext(t, e), s(this._safeEvent(), (function (e) {
                        r._spliceMatches(e, n)
                    }))) : (n = this._matchContext(e), s(this._safeEvent(), (function (e) {
                        r._spliceMatches(e, n)
                    })))
                }, d.prototype.off = function (e, t) {
                    i(e) ? this._offByEventName(e, t) : arguments.length ? c(e) ? this._offByHandler(e) : a(e) && this._offByObject(e, t) : (this.events = {}, this.contexts = [])
                }, d.prototype.fire = function (e) {
                    this.invoke.apply(this, arguments)
                }, d.prototype.invoke = function (e) {
                    var t, n, r, o;
                    if (!this.hasListener(e)) return !0;
                    for (t = this._safeEvent(e), n = Array.prototype.slice.call(arguments, 1), r = 0; t[r];) {
                        if (!1 === (o = t[r]).handler.apply(o.context, n)) return !1;
                        r += 1
                    }
                    return !0
                }, d.prototype.hasListener = function (e) {
                    return this.getListenerLength(e) > 0
                }, d.prototype.getListenerLength = function (e) {
                    return this._safeEvent(e).length
                }, e.exports = d
            }, 7969: function (e) {
                "use strict";
                e.exports = function (e, t) {
                    var n, r, o, i, a = Object.prototype.hasOwnProperty;
                    for (o = 1, i = arguments.length; o < i; o += 1) for (r in n = arguments[o]) a.call(n, r) && (e[r] = n[r]);
                    return e
                }
            }, 4254: function (e, t, n) {
                "use strict";
                var r = n(6956);
                e.exports = function (e, t) {
                    var n = document.createElement("img"), o = "";
                    return r(t, (function (e, t) {
                        o += "&" + t + "=" + e
                    })), o = o.substring(1), n.src = e + "?" + o, n.style.display = "none", document.body.appendChild(n), document.body.removeChild(n), n
                }
            }, 1391: function (e, t, n) {
                "use strict";
                var r = n(3929), o = n(4254);
                e.exports = function (e, t) {
                    var n = location.hostname, i = "TOAST UI " + e + " for " + n + ": Statistics",
                        a = window.localStorage.getItem(i);
                    (r(window.tui) || !1 !== window.tui.usageStatistics) && (a && !function (e) {
                        return (new Date).getTime() - e > 6048e5
                    }(a) || (window.localStorage.setItem(i, (new Date).getTime()), setTimeout((function () {
                        "interactive" !== document.readyState && "complete" !== document.readyState || o("https://www.google-analytics.com/collect", {
                            v: 1,
                            t: "event",
                            tid: t,
                            cid: n,
                            dp: n,
                            dh: e,
                            el: e,
                            ec: "use"
                        })
                    }), 1e3)))
                }
            }, 7322: function (e) {
                "use strict";
                e.exports = function (e) {
                    return e instanceof Array
                }
            }, 1326: function (e) {
                "use strict";
                e.exports = function (e) {
                    return "boolean" == typeof e || e instanceof Boolean
                }
            }, 7065: function (e, t, n) {
                "use strict";
                var r = n(3929), o = n(2934);
                e.exports = function (e) {
                    return !r(e) && !o(e)
                }
            }, 4294: function (e) {
                "use strict";
                e.exports = function (e) {
                    return e instanceof Function
                }
            }, 2934: function (e) {
                "use strict";
                e.exports = function (e) {
                    return null === e
                }
            }, 321: function (e) {
                "use strict";
                e.exports = function (e) {
                    return "number" == typeof e || e instanceof Number
                }
            }, 5758: function (e) {
                "use strict";
                e.exports = function (e) {
                    return e === Object(e)
                }
            }, 758: function (e) {
                "use strict";
                e.exports = function (e) {
                    return "string" == typeof e || e instanceof String
                }
            }, 3929: function (e) {
                "use strict";
                e.exports = function (e) {
                    return void 0 === e
                }
            }, 4268: function (t) {
                "use strict";
                t.exports = e
            }
        }, n = {};

        function r(e) {
            var o = n[e];
            if (void 0 !== o) return o.exports;
            var i = n[e] = {exports: {}};
            return t[e].call(i.exports, i, i.exports, r), i.exports
        }

        r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, {a: t}), t
        }, r.d = function (e, t) {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
        }, r.g = function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        };
        var o = {};
        return function () {
            "use strict";
            r.d(o, {
                default: function () {
                    return Hs
                }
            });
            var e, t, n, i, a, l, c = {}, s = [],
                u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

            function d(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function f(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function p(t, n, r) {
                var o, i, a, l = {};
                for (a in n) "key" == a ? o = n[a] : "ref" == a ? i = n[a] : l[a] = n[a];
                if (arguments.length > 2 && (l.children = arguments.length > 3 ? e.call(arguments, 2) : r), "function" == typeof t && null != t.defaultProps) for (a in t.defaultProps) void 0 === l[a] && (l[a] = t.defaultProps[a]);
                return h(t, l, o, i, null)
            }

            function h(e, r, o, i, a) {
                var l = {
                    type: e,
                    props: r,
                    key: o,
                    ref: i,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: null == a ? ++n : a
                };
                return null == a && null != t.vnode && t.vnode(l), l
            }

            function m(e) {
                return e.children
            }

            function g(e, t) {
                this.props = e, this.context = t
            }

            function v(e, t) {
                if (null == t) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? v(e) : null
            }

            function y(e) {
                var t, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    }
                    return y(e)
                }
            }

            function w(e) {
                (!e.__d && (e.__d = !0) && i.push(e) && !_.__r++ || a !== t.debounceRendering) && ((a = t.debounceRendering) || setTimeout)(_)
            }

            function _() {
                for (var e; _.__r = i.length;) e = i.sort((function (e, t) {
                    return e.__v.__b - t.__v.__b
                })), i = [], e.some((function (e) {
                    var t, n, r, o, i, a;
                    e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = d({}, o)).__v = o.__v + 1, M(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? v(o) : i, o.__h), N(n, o), o.__e != i && y(o)))
                }))
            }

            function b(e, t, n, r, o, i, a, l, u, d) {
                var f, p, g, y, w, _, b, D = r && r.__k || s, S = D.length;
                for (n.__k = [], f = 0; f < t.length; f++) if (null != (y = n.__k[f] = null == (y = t[f]) || "boolean" == typeof y ? null : "string" == typeof y || "number" == typeof y || "bigint" == typeof y ? h(null, y, null, null, y) : Array.isArray(y) ? h(m, {children: y}, null, null, null) : y.__b > 0 ? h(y.type, y.props, y.key, null, y.__v) : y)) {
                    if (y.__ = n, y.__b = n.__b + 1, null === (g = D[f]) || g && y.key == g.key && y.type === g.type) D[f] = void 0; else for (p = 0; p < S; p++) {
                        if ((g = D[p]) && y.key == g.key && y.type === g.type) {
                            D[p] = void 0;
                            break
                        }
                        g = null
                    }
                    M(e, y, g = g || c, o, i, a, l, u, d), w = y.__e, (p = y.ref) && g.ref != p && (b || (b = []), g.ref && b.push(g.ref, null, y), b.push(p, y.__c || w, y)), null != w ? (null == _ && (_ = w), "function" == typeof y.type && y.__k === g.__k ? y.__d = u = x(y, u, e) : u = k(e, y, g, D, w, u), "function" == typeof n.type && (n.__d = u)) : u && g.__e == u && u.parentNode != e && (u = v(g))
                }
                for (n.__e = _, f = S; f--;) null != D[f] && ("function" == typeof n.type && null != D[f].__e && D[f].__e == n.__d && (n.__d = v(r, f + 1)), P(D[f], D[f]));
                if (b) for (f = 0; f < b.length; f++) O(b[f], b[++f], b[++f])
            }

            function x(e, t, n) {
                for (var r, o = e.__k, i = 0; o && i < o.length; i++) (r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? x(r, t, n) : k(n, r, r, o, r.__e, t));
                return t
            }

            function D(e, t) {
                return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function (e) {
                    D(e, t)
                })) : t.push(e)), t
            }

            function k(e, t, n, r, o, i) {
                var a, l, c;
                if (void 0 !== t.__d) a = t.__d, t.__d = void 0; else if (null == n || o != i || null == o.parentNode) e:if (null == i || i.parentNode !== e) e.appendChild(o), a = null; else {
                    for (l = i, c = 0; (l = l.nextSibling) && c < r.length; c += 2) if (l == o) break e;
                    e.insertBefore(o, i), a = i
                }
                return void 0 !== a ? a : o.nextSibling
            }

            function S(e, t, n) {
                "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || u.test(t) ? n : n + "px"
            }

            function C(e, t, n, r, o) {
                var i;
                e:if ("style" === t) if ("string" == typeof n) e.style.cssText = n; else {
                    if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) n && t in n || S(e.style, t, "");
                    if (n) for (t in n) r && n[t] === r[t] || S(e.style, t, n[t])
                } else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? I : E, i) : e.removeEventListener(t, i ? I : E, i); else if ("dangerouslySetInnerHTML" !== t) {
                    if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s"); else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {
                    }
                    "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
                }
            }

            function E(e) {
                this.l[e.type + !1](t.event ? t.event(e) : e)
            }

            function I(e) {
                this.l[e.type + !0](t.event ? t.event(e) : e)
            }

            function M(e, n, r, o, i, a, l, c, s) {
                var u, f, p, h, v, y, w, _, x, D, k, S, C, E = n.type;
                if (void 0 !== n.constructor) return null;
                null != r.__h && (s = r.__h, c = n.__e = r.__e, n.__h = null, a = [c]), (u = t.__b) && u(n);
                try {
                    e:if ("function" == typeof E) {
                        if (_ = n.props, x = (u = E.contextType) && o[u.__c], D = u ? x ? x.props.value : u.__ : o, r.__c ? w = (f = n.__c = r.__c).__ = f.__E : ("prototype" in E && E.prototype.render ? n.__c = f = new E(_, D) : (n.__c = f = new g(_, D), f.constructor = E, f.render = A), x && x.sub(f), f.props = _, f.state || (f.state = {}), f.context = D, f.__n = o, p = f.__d = !0, f.__h = []), null == f.__s && (f.__s = f.state), null != E.getDerivedStateFromProps && (f.__s == f.state && (f.__s = d({}, f.__s)), d(f.__s, E.getDerivedStateFromProps(_, f.__s))), h = f.props, v = f.state, p) null == E.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount); else {
                            if (null == E.getDerivedStateFromProps && _ !== h && null != f.componentWillReceiveProps && f.componentWillReceiveProps(_, D), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(_, f.__s, D) || n.__v === r.__v) {
                                f.props = _, f.state = f.__s, n.__v !== r.__v && (f.__d = !1), f.__v = n, n.__e = r.__e, n.__k = r.__k, n.__k.forEach((function (e) {
                                    e && (e.__ = n)
                                })), f.__h.length && l.push(f);
                                break e
                            }
                            null != f.componentWillUpdate && f.componentWillUpdate(_, f.__s, D), null != f.componentDidUpdate && f.__h.push((function () {
                                f.componentDidUpdate(h, v, y)
                            }))
                        }
                        if (f.context = D, f.props = _, f.__v = n, f.__P = e, k = t.__r, S = 0, "prototype" in E && E.prototype.render) f.state = f.__s, f.__d = !1, k && k(n), u = f.render(f.props, f.state, f.context); else do {
                            f.__d = !1, k && k(n), u = f.render(f.props, f.state, f.context), f.state = f.__s
                        } while (f.__d && ++S < 25);
                        f.state = f.__s, null != f.getChildContext && (o = d(d({}, o), f.getChildContext())), p || null == f.getSnapshotBeforeUpdate || (y = f.getSnapshotBeforeUpdate(h, v)), C = null != u && u.type === m && null == u.key ? u.props.children : u, b(e, Array.isArray(C) ? C : [C], n, r, o, i, a, l, c, s), f.base = n.__e, n.__h = null, f.__h.length && l.push(f), w && (f.__E = f.__ = null), f.__e = !1
                    } else null == a && n.__v === r.__v ? (n.__k = r.__k, n.__e = r.__e) : n.__e = T(r.__e, n, r, o, i, a, l, s);
                    (u = t.diffed) && u(n)
                } catch (e) {
                    n.__v = null, (s || null != a) && (n.__e = c, n.__h = !!s, a[a.indexOf(c)] = null), t.__e(e, n, r)
                }
            }

            function N(e, n) {
                t.__c && t.__c(n, e), e.some((function (n) {
                    try {
                        e = n.__h, n.__h = [], e.some((function (e) {
                            e.call(n)
                        }))
                    } catch (e) {
                        t.__e(e, n.__v)
                    }
                }))
            }

            function T(t, n, r, o, i, a, l, s) {
                var u, d, p, h = r.props, m = n.props, g = n.type, y = 0;
                if ("svg" === g && (i = !0), null != a) for (; y < a.length; y++) if ((u = a[y]) && "setAttribute" in u == !!g && (g ? u.localName === g : 3 === u.nodeType)) {
                    t = u, a[y] = null;
                    break
                }
                if (null == t) {
                    if (null === g) return document.createTextNode(m);
                    t = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m), a = null, s = !1
                }
                if (null === g) h === m || s && t.data === m || (t.data = m); else {
                    if (a = a && e.call(t.childNodes), d = (h = r.props || c).dangerouslySetInnerHTML, p = m.dangerouslySetInnerHTML, !s) {
                        if (null != a) for (h = {}, y = 0; y < t.attributes.length; y++) h[t.attributes[y].name] = t.attributes[y].value;
                        (p || d) && (p && (d && p.__html == d.__html || p.__html === t.innerHTML) || (t.innerHTML = p && p.__html || ""))
                    }
                    if (function (e, t, n, r, o) {
                        var i;
                        for (i in n) "children" === i || "key" === i || i in t || C(e, i, null, n[i], r);
                        for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || C(e, i, t[i], n[i], r)
                    }(t, m, h, i, s), p) n.__k = []; else if (y = n.props.children, b(t, Array.isArray(y) ? y : [y], n, r, o, i && "foreignObject" !== g, a, l, a ? a[0] : r.__k && v(r, 0), s), null != a) for (y = a.length; y--;) null != a[y] && f(a[y]);
                    s || ("value" in m && void 0 !== (y = m.value) && (y !== t.value || "progress" === g && !y || "option" === g && y !== h.value) && C(t, "value", y, h.value, !1), "checked" in m && void 0 !== (y = m.checked) && y !== t.checked && C(t, "checked", y, h.checked, !1))
                }
                return t
            }

            function O(e, n, r) {
                try {
                    "function" == typeof e ? e(n) : e.current = n
                } catch (e) {
                    t.__e(e, r)
                }
            }

            function P(e, n, r) {
                var o, i;
                if (t.unmount && t.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || O(o, null, n)), null != (o = e.__c)) {
                    if (o.componentWillUnmount) try {
                        o.componentWillUnmount()
                    } catch (e) {
                        t.__e(e, n)
                    }
                    o.base = o.__P = null
                }
                if (o = e.__k) for (i = 0; i < o.length; i++) o[i] && P(o[i], n, "function" != typeof e.type);
                r || null == e.__e || f(e.__e), e.__e = e.__d = void 0
            }

            function A(e, t, n) {
                return this.constructor(e, n)
            }

            function R(n, r, o) {
                var i, a, l;
                t.__ && t.__(n, r), a = (i = "function" == typeof o) ? null : o && o.__k || r.__k, l = [], M(r, n = (!i && o || r).__k = p(m, null, [n]), a || c, c, void 0 !== r.ownerSVGElement, !i && o ? [o] : a ? null : r.firstChild ? e.call(r.childNodes) : null, l, !i && o ? o : a ? a.__e : r.firstChild, i), N(l, n)
            }

            function L(t, n, r) {
                var o, i, a, l = d({}, t.props);
                for (a in n) "key" == a ? o = n[a] : "ref" == a ? i = n[a] : l[a] = n[a];
                return arguments.length > 2 && (l.children = arguments.length > 3 ? e.call(arguments, 2) : r), h(t.type, l, o || t.key, i || t.ref, null)
            }

            function H(e, t) {
                var n = {
                    __c: t = "__cC" + l++, __: e, Consumer: function (e, t) {
                        return e.children(t)
                    }, Provider: function (e) {
                        var n, r;
                        return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function () {
                            return r
                        }, this.shouldComponentUpdate = function (e) {
                            this.props.value !== e.value && n.some(w)
                        }, this.sub = function (e) {
                            n.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function () {
                                n.splice(n.indexOf(e), 1), t && t.call(e)
                            }
                        }), e.children
                    }
                };
                return n.Provider.__ = n.Consumer.contextType = n
            }

            e = s.slice, t = {
                __e: function (e, t, n, r) {
                    for (var o, i, a; t = t.__;) if ((o = t.__c) && !o.__) try {
                        if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o
                    } catch (t) {
                        e = t
                    }
                    throw e
                }
            }, n = 0, g.prototype.setState = function (e, t) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof e && (e = e(d({}, n), this.props)), e && d(n, e), null != e && this.__v && (t && this.__h.push(t), w(this))
            }, g.prototype.forceUpdate = function (e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), w(this))
            }, g.prototype.render = m, i = [], _.__r = 0, l = 0;
            var F, z, W, B, j = 0, G = [], U = [], Y = t.__b, V = t.__r, $ = t.diffed, X = t.__c, q = t.unmount;

            function K(e, n) {
                t.__h && t.__h(z, e, j || n), j = 0;
                var r = z.__H || (z.__H = {__: [], __h: []});
                return e >= r.__.length && r.__.push({__V: U}), r.__[e]
            }

            function Z(e) {
                return j = 1, J(ue, e)
            }

            function J(e, t, n) {
                var r = K(F++, 2);
                return r.t = e, r.__c || (r.__ = [n ? n(t) : ue(void 0, t), function (e) {
                    var t = r.t(r.__[0], e);
                    r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
                }], r.__c = z), r.__
            }

            function Q(e, n) {
                var r = K(F++, 3);
                !t.__s && se(r.__H, n) && (r.__ = e, r.u = n, z.__H.__h.push(r))
            }

            function ee(e, n) {
                var r = K(F++, 4);
                !t.__s && se(r.__H, n) && (r.__ = e, r.u = n, z.__h.push(r))
            }

            function te(e) {
                return j = 5, ne((function () {
                    return {current: e}
                }), [])
            }

            function ne(e, t) {
                var n = K(F++, 7);
                return se(n.__H, t) ? (n.__V = e(), n.u = t, n.__h = e, n.__V) : n.__
            }

            function re(e, t) {
                return j = 8, ne((function () {
                    return e
                }), t)
            }

            function oe(e) {
                var t = z.context[e.__c], n = K(F++, 9);
                return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(z)), t.props.value) : e.__
            }

            function ie() {
                for (var e; e = G.shift();) if (e.__P) try {
                    e.__H.__h.forEach(le), e.__H.__h.forEach(ce), e.__H.__h = []
                } catch (n) {
                    e.__H.__h = [], t.__e(n, e.__v)
                }
            }

            t.__b = function (e) {
                z = null, Y && Y(e)
            }, t.__r = function (e) {
                V && V(e), F = 0;
                var t = (z = e.__c).__H;
                t && (W === z ? (t.__h = [], z.__h = [], t.__.forEach((function (e) {
                    e.__V = U, e.u = void 0
                }))) : (t.__h.forEach(le), t.__h.forEach(ce), t.__h = [])), W = z
            }, t.diffed = function (e) {
                $ && $(e);
                var n = e.__c;
                n && n.__H && (n.__H.__h.length && (1 !== G.push(n) && B === t.requestAnimationFrame || ((B = t.requestAnimationFrame) || function (e) {
                    var t, n = function () {
                        clearTimeout(r), ae && cancelAnimationFrame(t), setTimeout(e)
                    }, r = setTimeout(n, 100);
                    ae && (t = requestAnimationFrame(n))
                })(ie)), n.__H.__.forEach((function (e) {
                    e.u && (e.__H = e.u), e.__V !== U && (e.__ = e.__V), e.u = void 0, e.__V = U
                }))), W = z = null
            }, t.__c = function (e, n) {
                n.some((function (e) {
                    try {
                        e.__h.forEach(le), e.__h = e.__h.filter((function (e) {
                            return !e.__ || ce(e)
                        }))
                    } catch (r) {
                        n.some((function (e) {
                            e.__h && (e.__h = [])
                        })), n = [], t.__e(r, e.__v)
                    }
                })), X && X(e, n)
            }, t.unmount = function (e) {
                q && q(e);
                var n, r = e.__c;
                r && r.__H && (r.__H.__.forEach((function (e) {
                    try {
                        le(e)
                    } catch (e) {
                        n = e
                    }
                })), n && t.__e(n, r.__v))
            };
            var ae = "function" == typeof requestAnimationFrame;

            function le(e) {
                var t = z, n = e.__c;
                "function" == typeof n && (e.__c = void 0, n()), z = t
            }

            function ce(e) {
                var t = z;
                e.__c = e.__(), z = t
            }

            function se(e, t) {
                return !e || e.length !== t.length || t.some((function (t, n) {
                    return t !== e[n]
                }))
            }

            function ue(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            r(6886), r(9529);

            function de(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map((function (e) {
                    return "'" + e + "'"
                })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }

            function fe(e) {
                return !!e && !!e[Je]
            }

            function pe(e) {
                return !!e && (function (e) {
                    if (!e || "object" != typeof e) return !1;
                    var t = Object.getPrototypeOf(e);
                    if (null === t) return !0;
                    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                    return n === Object || "function" == typeof n && Function.toString.call(n) === Qe
                }(e) || Array.isArray(e) || !!e[Ze] || !!e.constructor[Ze] || _e(e) || be(e))
            }

            function he(e, t, n) {
                void 0 === n && (n = !1), 0 === me(e) ? (n ? Object.keys : et)(e).forEach((function (r) {
                    n && "symbol" == typeof r || t(r, e[r], e)
                })) : e.forEach((function (n, r) {
                    return t(r, n, e)
                }))
            }

            function me(e) {
                var t = e[Je];
                return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : _e(e) ? 2 : be(e) ? 3 : 0
            }

            function ge(e, t) {
                return 2 === me(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function ve(e, t) {
                return 2 === me(e) ? e.get(t) : e[t]
            }

            function ye(e, t, n) {
                var r = me(e);
                2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : e[t] = n
            }

            function we(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }

            function _e(e) {
                return $e && e instanceof Map
            }

            function be(e) {
                return Xe && e instanceof Set
            }

            function xe(e) {
                return e.o || e.t
            }

            function De(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                var t = tt(e);
                delete t[Je];
                for (var n = et(t), r = 0; r < n.length; r++) {
                    var o = n[r], i = t[o];
                    !1 === i.writable && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[o] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: i.enumerable,
                        value: e[o]
                    })
                }
                return Object.create(Object.getPrototypeOf(e), t)
            }

            function ke(e, t) {
                return void 0 === t && (t = !1), Ce(e) || fe(e) || !pe(e) || (me(e) > 1 && (e.set = e.add = e.clear = e.delete = Se), Object.freeze(e), t && he(e, (function (e, t) {
                    return ke(t, !0)
                }), !0)), e
            }

            function Se() {
                de(2)
            }

            function Ce(e) {
                return null == e || "object" != typeof e || Object.isFrozen(e)
            }

            function Ee(e) {
                var t = nt[e];
                return t || de(18, e), t
            }

            function Ie() {
                return Ye
            }

            function Me(e, t) {
                t && (Ee("Patches"), e.u = [], e.s = [], e.v = t)
            }

            function Ne(e) {
                Te(e), e.p.forEach(Pe), e.p = null
            }

            function Te(e) {
                e === Ye && (Ye = e.l)
            }

            function Oe(e) {
                return Ye = {p: [], l: Ye, h: e, m: !0, _: 0}
            }

            function Pe(e) {
                var t = e[Je];
                0 === t.i || 1 === t.i ? t.j() : t.O = !0
            }

            function Ae(e, t) {
                t._ = t.p.length;
                var n = t.p[0], r = void 0 !== e && e !== n;
                return t.h.g || Ee("ES5").S(t, e, r), r ? (n[Je].P && (Ne(t), de(4)), pe(e) && (e = Re(t, e), t.l || He(t, e)), t.u && Ee("Patches").M(n[Je].t, e, t.u, t.s)) : e = Re(t, n, []), Ne(t), t.u && t.v(t.u, t.s), e !== Ke ? e : void 0
            }

            function Re(e, t, n) {
                if (Ce(t)) return t;
                var r = t[Je];
                if (!r) return he(t, (function (o, i) {
                    return Le(e, r, t, o, i, n)
                }), !0), t;
                if (r.A !== e) return t;
                if (!r.P) return He(e, r.t, !0), r.t;
                if (!r.I) {
                    r.I = !0, r.A._--;
                    var o = 4 === r.i || 5 === r.i ? r.o = De(r.k) : r.o;
                    he(3 === r.i ? new Set(o) : o, (function (t, i) {
                        return Le(e, r, o, t, i, n)
                    })), He(e, o, !1), n && e.u && Ee("Patches").R(r, n, e.u, e.s)
                }
                return r.o
            }

            function Le(e, t, n, r, o, i) {
                if (fe(o)) {
                    var a = Re(e, o, i && t && 3 !== t.i && !ge(t.D, r) ? i.concat(r) : void 0);
                    if (ye(n, r, a), !fe(a)) return;
                    e.m = !1
                }
                if (pe(o) && !Ce(o)) {
                    if (!e.h.F && e._ < 1) return;
                    Re(e, o), t && t.A.l || He(e, o)
                }
            }

            function He(e, t, n) {
                void 0 === n && (n = !1), e.h.F && e.m && ke(t, n)
            }

            function Fe(e, t) {
                var n = e[Je];
                return (n ? xe(n) : e)[t]
            }

            function ze(e, t) {
                if (t in e) for (var n = Object.getPrototypeOf(e); n;) {
                    var r = Object.getOwnPropertyDescriptor(n, t);
                    if (r) return r;
                    n = Object.getPrototypeOf(n)
                }
            }

            function We(e) {
                e.P || (e.P = !0, e.l && We(e.l))
            }

            function Be(e) {
                e.o || (e.o = De(e.t))
            }

            function je(e, t, n) {
                var r = _e(t) ? Ee("MapSet").N(t, n) : be(t) ? Ee("MapSet").T(t, n) : e.g ? function (e, t) {
                    var n = Array.isArray(e), r = {
                        i: n ? 1 : 0,
                        A: t ? t.A : Ie(),
                        P: !1,
                        I: !1,
                        D: {},
                        l: t,
                        t: e,
                        k: null,
                        o: null,
                        j: null,
                        C: !1
                    }, o = r, i = rt;
                    n && (o = [r], i = ot);
                    var a = Proxy.revocable(o, i), l = a.revoke, c = a.proxy;
                    return r.k = c, r.j = l, c
                }(t, n) : Ee("ES5").J(t, n);
                return (n ? n.A : Ie()).p.push(r), r
            }

            function Ge(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e)
                }
                return De(e)
            }

            var Ue, Ye, Ve = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                $e = "undefined" != typeof Map, Xe = "undefined" != typeof Set,
                qe = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                Ke = Ve ? Symbol.for("immer-nothing") : ((Ue = {})["immer-nothing"] = !0, Ue),
                Ze = Ve ? Symbol.for("immer-draftable") : "__$immer_draftable",
                Je = Ve ? Symbol.for("immer-state") : "__$immer_state",
                Qe = ("undefined" != typeof Symbol && Symbol.iterator, "" + Object.prototype.constructor),
                et = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                } : Object.getOwnPropertyNames, tt = Object.getOwnPropertyDescriptors || function (e) {
                    var t = {};
                    return et(e).forEach((function (n) {
                        t[n] = Object.getOwnPropertyDescriptor(e, n)
                    })), t
                }, nt = {}, rt = {
                    get: function (e, t) {
                        if (t === Je) return e;
                        var n = xe(e);
                        if (!ge(n, t)) return function (e, t, n) {
                            var r, o = ze(t, n);
                            return o ? "value" in o ? o.value : null === (r = o.get) || void 0 === r ? void 0 : r.call(e.k) : void 0
                        }(e, n, t);
                        var r = n[t];
                        return e.I || !pe(r) ? r : r === Fe(e.t, t) ? (Be(e), e.o[t] = je(e.A.h, r, e)) : r
                    }, has: function (e, t) {
                        return t in xe(e)
                    }, ownKeys: function (e) {
                        return Reflect.ownKeys(xe(e))
                    }, set: function (e, t, n) {
                        var r = ze(xe(e), t);
                        if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
                        if (!e.P) {
                            var o = Fe(xe(e), t), i = null == o ? void 0 : o[Je];
                            if (i && i.t === n) return e.o[t] = n, e.D[t] = !1, !0;
                            if (we(n, o) && (void 0 !== n || ge(e.t, t))) return !0;
                            Be(e), We(e)
                        }
                        return e.o[t] === n && "number" != typeof n && (void 0 !== n || t in e.o) || (e.o[t] = n, e.D[t] = !0, !0)
                    }, deleteProperty: function (e, t) {
                        return void 0 !== Fe(e.t, t) || t in e.t ? (e.D[t] = !1, Be(e), We(e)) : delete e.D[t], e.o && delete e.o[t], !0
                    }, getOwnPropertyDescriptor: function (e, t) {
                        var n = xe(e), r = Reflect.getOwnPropertyDescriptor(n, t);
                        return r ? {
                            writable: !0,
                            configurable: 1 !== e.i || "length" !== t,
                            enumerable: r.enumerable,
                            value: n[t]
                        } : r
                    }, defineProperty: function () {
                        de(11)
                    }, getPrototypeOf: function (e) {
                        return Object.getPrototypeOf(e.t)
                    }, setPrototypeOf: function () {
                        de(12)
                    }
                }, ot = {};
            he(rt, (function (e, t) {
                ot[e] = function () {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            })), ot.deleteProperty = function (e, t) {
                return ot.set.call(this, e, t, void 0)
            }, ot.set = function (e, t, n) {
                return rt.set.call(this, e[0], t, n, e[0])
            };
            var it = function () {
                    function e(e) {
                        var t = this;
                        this.g = qe, this.F = !0, this.produce = function (e, n, r) {
                            if ("function" == typeof e && "function" != typeof n) {
                                var o = n;
                                n = e;
                                var i = t;
                                return function (e) {
                                    var t = this;
                                    void 0 === e && (e = o);
                                    for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++) a[l - 1] = arguments[l];
                                    return i.produce(e, (function (e) {
                                        var r;
                                        return (r = n).call.apply(r, [t, e].concat(a))
                                    }))
                                }
                            }
                            var a;
                            if ("function" != typeof n && de(6), void 0 !== r && "function" != typeof r && de(7), pe(e)) {
                                var l = Oe(t), c = je(t, e, void 0), s = !0;
                                try {
                                    a = n(c), s = !1
                                } finally {
                                    s ? Ne(l) : Te(l)
                                }
                                return "undefined" != typeof Promise && a instanceof Promise ? a.then((function (e) {
                                    return Me(l, r), Ae(e, l)
                                }), (function (e) {
                                    throw Ne(l), e
                                })) : (Me(l, r), Ae(a, l))
                            }
                            if (!e || "object" != typeof e) {
                                if (void 0 === (a = n(e)) && (a = e), a === Ke && (a = void 0), t.F && ke(a, !0), r) {
                                    var u = [], d = [];
                                    Ee("Patches").M(e, a, u, d), r(u, d)
                                }
                                return a
                            }
                            de(21, e)
                        }, this.produceWithPatches = function (e, n) {
                            if ("function" == typeof e) return function (n) {
                                for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                                return t.produceWithPatches(n, (function (t) {
                                    return e.apply(void 0, [t].concat(o))
                                }))
                            };
                            var r, o, i = t.produce(e, n, (function (e, t) {
                                r = e, o = t
                            }));
                            return "undefined" != typeof Promise && i instanceof Promise ? i.then((function (e) {
                                return [e, r, o]
                            })) : [i, r, o]
                        }, "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
                    }

                    var t = e.prototype;
                    return t.createDraft = function (e) {
                        pe(e) || de(8), fe(e) && (e = function (e) {
                            return fe(e) || de(22, e), function e(t) {
                                if (!pe(t)) return t;
                                var n, r = t[Je], o = me(t);
                                if (r) {
                                    if (!r.P && (r.i < 4 || !Ee("ES5").K(r))) return r.t;
                                    r.I = !0, n = Ge(t, o), r.I = !1
                                } else n = Ge(t, o);
                                return he(n, (function (t, o) {
                                    r && ve(r.t, t) === o || ye(n, t, e(o))
                                })), 3 === o ? new Set(n) : n
                            }(e)
                        }(e));
                        var t = Oe(this), n = je(this, e, void 0);
                        return n[Je].C = !0, Te(t), n
                    }, t.finishDraft = function (e, t) {
                        var n = (e && e[Je]).A;
                        return Me(n, t), Ae(void 0, n)
                    }, t.setAutoFreeze = function (e) {
                        this.F = e
                    }, t.setUseProxies = function (e) {
                        e && !qe && de(20), this.g = e
                    }, t.applyPatches = function (e, t) {
                        var n;
                        for (n = t.length - 1; n >= 0; n--) {
                            var r = t[n];
                            if (0 === r.path.length && "replace" === r.op) {
                                e = r.value;
                                break
                            }
                        }
                        n > -1 && (t = t.slice(n + 1));
                        var o = Ee("Patches").$;
                        return fe(e) ? o(e, t) : this.produce(e, (function (e) {
                            return o(e, t)
                        }))
                    }, e
                }(), at = new it, lt = at.produce,
                ct = (at.produceWithPatches.bind(at), at.setAutoFreeze.bind(at), at.setUseProxies.bind(at), at.applyPatches.bind(at), at.createDraft.bind(at), at.finishDraft.bind(at), lt),
                st = (r(5940), r(7386)), ut = r.n(st);
            const dt = "0", ft = 24, pt = 72,
                ht = {color: "#000", backgroundColor: "#a1b56c", dragBackgroundColor: "#a1b56c", borderColor: "#000"};
            var mt = r(758), gt = r.n(mt);
            const vt = "toastui-calendar-";

            function yt() {
                const e = [];
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return n.forEach((t => {
                    t && (gt()(t) ? e.push(t) : Object.keys(t).forEach((n => {
                        t[n] && e.push(n)
                    })))
                })), e.map((e => "".concat(vt).concat(e))).join(" ")
            }

            function wt(e) {
                return "".concat(e, "%")
            }

            function _t(e) {
                return "".concat(e, "px")
            }

            function bt(e) {
                const t = e.match(/(\d+)%/), n = e.match(/(-?)\s?(\d+)px/);
                return {percent: t ? parseInt(t[1], 10) : 0, px: n ? parseInt("".concat(n[1]).concat(n[2]), 10) : 0}
            }

            function xt(e, t) {
                const n = e.model.getColors();
                return Object.keys(ht).reduce(((e, r) => {
                    var o, i;
                    const a = r;
                    return e[a] = null !== (o = null !== (i = n[a]) && void 0 !== i ? i : t[a]) && void 0 !== o ? o : ht[a], e
                }), {})
            }

            r(1372);
            const Dt = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.)?([0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;

            function kt() {
                throw new Error("This operation is not supported.")
            }

            function St(e) {
                const t = function (e) {
                    const t = Dt.exec(e);
                    if (t) {
                        const [, e, n, r, o, i, a, , l, c] = t;
                        return {
                            y: Number(e),
                            M: Number(n) - 1,
                            d: Number(r),
                            h: Number(o),
                            m: Number(i),
                            s: Number(a),
                            ms: Number(l) || 0,
                            zoneInfo: c
                        }
                    }
                    return null
                }(e);
                if (t && !t.zoneInfo) {
                    const {y: e, M: n, d: r, h: o, m: i, s: a, ms: l} = t;
                    return new Date(e, n, r, o, i, a, l)
                }
                return null
            }

            class Ct {
                constructor() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    const [r] = t;
                    r instanceof Date ? this.d = new Date(r.getTime()) : gt()(r) && 1 === t.length && (this.d = St(r)), this.d || (this.d = new Date(...t))
                }

                setTimezoneOffset() {
                    kt()
                }

                setTimezoneName() {
                    kt()
                }

                clone() {
                    return new Ct(this.d)
                }

                toDate() {
                    return new Date(this.d.getTime())
                }

                toString() {
                    return this.d.toString()
                }
            }

            ["getTime", "getTimezoneOffset", "getFullYear", "getMonth", "getDate", "getHours", "getMinutes", "getSeconds", "getMilliseconds", "getDay"].forEach((e => {
                Ct.prototype[e] = function () {
                    return this.d[e](...arguments)
                }
            })), ["setTime", "setFullYear", "setMonth", "setDate", "setHours", "setMinutes", "setSeconds", "setMilliseconds"].forEach((e => {
                Ct.prototype[e] = function () {
                    return this.d[e](...arguments)
                }
            }));

            class Et extends Ct {
                clone() {
                    return new Et(this.d)
                }

                getTimezoneOffset() {
                    return 0
                }
            }

            ["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds", "Day"].forEach((e => {
                const t = "get".concat(e);
                Et.prototype[t] = function () {
                    return this.d["getUTC".concat(e)](...arguments)
                }
            })), ["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds"].forEach((e => {
                const t = "set".concat(e);
                Et.prototype[t] = function () {
                    return this.d["setUTC".concat(e)](...arguments)
                }
            }));
            const It = "@toast-ui/calendar: ";

            class Mt extends Error {
                constructor(e) {
                    super("".concat(It).concat("Invalid IANA Timezone Name", " - ").concat(e)), this.name = "InvalidTimezoneNameError"
                }
            }

            class Nt extends Error {
                constructor(e) {
                    super("".concat(It).concat("Invalid DateTime Format", " - ").concat(e)), this.name = "InvalidDateTimeFormatError"
                }
            }

            class Tt extends Error {
                constructor(e) {
                    super("".concat(It).concat("Invalid View Type", " - ").concat(e)), this.name = "InvalidViewTypeError"
                }
            }

            const Ot = function (e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                console.warn("".concat(It).concat(e), ...n)
            };
            var Pt = r(3929), At = r.n(Pt), Rt = r(1326), Lt = r.n(Rt), Ht = r(321), Ft = r.n(Ht), zt = r(5758),
                Wt = r.n(zt);

            function Bt(e) {
                return At()(e) || null === e
            }

            function jt(e) {
                return !Bt(e)
            }

            function Gt(e) {
                return "function" == typeof e
            }

            let Ut = Ct;

            function Yt() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new Ut(...t)
            }

            function Vt(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new nn;
                if (!Kt()) return Ot("Intl.DateTimeFormat is not fully supported. So It will return the local timezone offset only.\nYou can use a polyfill to fix this issue."), -t.toDate().getTimezoneOffset();
                Zt(e);
                const n = Qt(t, e), r = en(n);
                return Math.round((r.getTime() - t.getTime()) / 60 / 1e3)
            }

            function $t(e, t) {
                t && Zt(t);
                const n = new nn(e.getFullYear(), 0, 1), r = new nn(e.getFullYear(), 6, 1);
                return t ? Math.max(-Vt(t, n), -Vt(t, r)) !== -Vt(t, e) : Math.max(n.getTimezoneOffset(), r.getTimezoneOffset()) !== e.toDate().getTimezoneOffset()
            }

            const Xt = {}, qt = {};

            function Kt() {
                var e, t, n;
                return Gt(null === (e = Intl) || void 0 === e || null === (t = e.DateTimeFormat) || void 0 === t || null === (n = t.prototype) || void 0 === n ? void 0 : n.formatToParts)
            }

            function Zt(e) {
                if (qt[e]) return !0;
                try {
                    return Intl.DateTimeFormat("en-US", {timeZone: e}), qt[e] = !0, !0
                } catch {
                    throw new Mt(e)
                }
            }

            const Jt = {year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5};

            function Qt(e, t) {
                const n = function (e) {
                    if (Xt[e]) return Xt[e];
                    const t = new Intl.DateTimeFormat("en-US", {
                        timeZone: e,
                        hourCycle: "h23",
                        hour12: !1,
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    });
                    return Xt[e] = t, t
                }(t);
                return n.formatToParts(e.toDate()).reduce(((e, t) => {
                    const n = Jt[t.type];
                    return jt(n) && (e[n] = parseInt(t.value, 10)), e
                }), [])
            }

            function en(e) {
                const [t, n, r, o, i, a] = e, l = n - 1;
                return new Date(Date.UTC(t, l, r, o % 24, i, a))
            }

            function tn(e) {
                return (-(new Date).getTimezoneOffset() - e) * bn
            }

            class nn {
                constructor() {
                    var e, t, n;
                    n = null, (t = "tzOffset") in (e = this) ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                    o[0] instanceof nn ? this.d = Yt(o[0].getTime()) : this.d = Yt(...o)
                }

                toString() {
                    return this.d.toString()
                }

                addFullYear(e) {
                    return this.setFullYear(this.getFullYear() + e), this
                }

                addMonth(e) {
                    return this.setMonth(this.getMonth() + e), this
                }

                addDate(e) {
                    return this.setDate(this.getDate() + e), this
                }

                addHours(e) {
                    return this.setHours(this.getHours() + e), this
                }

                addMinutes(e) {
                    return this.setMinutes(this.getMinutes() + e), this
                }

                addSeconds(e) {
                    return this.setSeconds(this.getSeconds() + e), this
                }

                addMilliseconds(e) {
                    return this.setMilliseconds(this.getMilliseconds() + e), this
                }

                setWithRaw(e, t, n, r, o, i, a) {
                    return this.setFullYear(e, t, n), this.setHours(r, o, i, a), this
                }

                toDate() {
                    return this.d.toDate()
                }

                valueOf() {
                    return this.getTime()
                }

                getTimezoneOffset() {
                    var e;
                    return null !== (e = this.tzOffset) && void 0 !== e ? e : this.d.getTimezoneOffset()
                }

                getTime() {
                    return this.d.getTime()
                }

                getFullYear() {
                    return this.d.getFullYear()
                }

                getMonth() {
                    return this.d.getMonth()
                }

                getDate() {
                    return this.d.getDate()
                }

                getHours() {
                    return this.d.getHours()
                }

                getMinutes() {
                    return this.d.getMinutes()
                }

                getSeconds() {
                    return this.d.getSeconds()
                }

                getMilliseconds() {
                    return this.d.getMilliseconds()
                }

                getDay() {
                    return this.d.getDay()
                }

                setTime(e) {
                    return this.d.setTime(e)
                }

                setFullYear(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getMonth(),
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.getDate();
                    return this.d.setFullYear(e, t, n)
                }

                setMonth(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getDate();
                    return this.d.setMonth(e, t)
                }

                setDate(e) {
                    return this.d.setDate(e)
                }

                setHours(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getMinutes(),
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.getSeconds(),
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.getMilliseconds();
                    return this.d.setHours(e, t, n, r)
                }

                setMinutes(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getSeconds(),
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.getMilliseconds();
                    return this.d.setMinutes(e, t, n)
                }

                setSeconds(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getMilliseconds();
                    return this.d.setSeconds(e, t)
                }

                setMilliseconds(e) {
                    return this.d.setMilliseconds(e)
                }

                tz(e) {
                    if ("Local" === e) return new nn(this.getTime());
                    const t = gt()(e) ? Vt(e, this) : e, n = new nn(this.getTime() - tn(t));
                    return n.tzOffset = t, n
                }

                local(e) {
                    if (jt(e)) {
                        const t = gt()(e) ? Vt(e, this) : e;
                        return new nn(this.getTime() + tn(t))
                    }
                    return new nn(this.getTime() + (jt(this.tzOffset) ? tn(this.tzOffset) : 0))
                }
            }

            function rn(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Wt()(t) ? (Object.keys(t).forEach((n => {
                    const r = n, o = n;
                    Array.isArray(t[o]) || !Wt()(e[r]) || !Wt()(t[o]) || t[o] instanceof nn ? e[r] = t[o] : e[r] = rn(e[r], t[o])
                })), e) : e
            }

            function on(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            const an = ["top", "left", "width", "height", "exceedLeft", "exceedRight", "croppedStart", "croppedEnd", "goingDurationHeight", "modelDurationHeight", "comingDurationHeight", "duplicateEvents", "duplicateEventIndex", "duplicateStarts", "duplicateEnds", "duplicateLeft", "duplicateWidth", "collapse", "isMain"];

            class ln {
                constructor(e) {
                    on(this, "top", 0), on(this, "left", 0), on(this, "width", 0), on(this, "height", 0), on(this, "exceedLeft", !1), on(this, "exceedRight", !1), on(this, "croppedStart", !1), on(this, "croppedEnd", !1), on(this, "goingDurationHeight", 0), on(this, "modelDurationHeight", 100), on(this, "comingDurationHeight", 0), on(this, "duplicateEvents", []), on(this, "duplicateEventIndex", -1), on(this, "duplicateLeft", ""), on(this, "duplicateWidth", ""), on(this, "collapse", !1), on(this, "isMain", !1), this.model = e
                }

                getUIProps() {
                    return function (e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return n.reduce(((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t)), {})
                    }(this, ...an)
                }

                setUIProps(e) {
                    Object.assign(this, e)
                }

                getStarts() {
                    return this.renderStarts ? this.renderStarts : this.model.getStarts()
                }

                getEnds() {
                    return this.renderEnds ? this.renderEnds : this.model.getEnds()
                }

                cid() {
                    return this.model.cid()
                }

                valueOf() {
                    return this.model
                }

                duration() {
                    return this.model.duration()
                }

                collidesWith(e) {
                    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    const n = [];
                    [this, e].forEach((e => {
                        e instanceof ln && e.duplicateEvents.length > 0 ? n.push({
                            start: e.duplicateStarts,
                            end: e.duplicateEnds,
                            goingDuration: 0,
                            comingDuration: 0
                        }) : n.push({
                            start: e.getStarts(),
                            end: e.getEnds(),
                            goingDuration: e.valueOf().goingDuration,
                            comingDuration: e.valueOf().comingDuration
                        })
                    }));
                    const [r, o] = n;
                    return Yn({
                        start: r.start.getTime(),
                        end: r.end.getTime(),
                        targetStart: o.start.getTime(),
                        targetEnd: o.end.getTime(),
                        goingDuration: r.goingDuration,
                        comingDuration: r.comingDuration,
                        targetGoingDuration: o.goingDuration,
                        targetComingDuration: o.comingDuration,
                        usingTravelTime: t
                    })
                }

                clone() {
                    const e = this.getUIProps(), t = new ln(this.model);
                    return t.setUIProps(e), this.renderStarts && (t.renderStarts = new nn(this.renderStarts)), this.renderEnds && (t.renderEnds = new nn(this.renderEnds)), t
                }
            }

            var cn = {
                event: {
                    asc: function (e, t) {
                        const n = e instanceof ln ? e.model : e, r = t instanceof ln ? t.model : t,
                            o = function (e, t) {
                                return e !== t ? e ? -1 : 1 : 0
                            }(n.isAllday || n.hasMultiDates, r.isAllday || r.hasMultiDates);
                        if (o) return o;
                        const i = Mn(e.getStarts(), t.getStarts());
                        if (i) return i;
                        const a = e.duration(), l = t.duration();
                        return a < l ? 1 : a > l ? -1 : n.cid() - r.cid()
                    }
                }, num: {
                    asc: function (e, t) {
                        return Number(e) - Number(t)
                    }
                }
            };

            function sn(e) {
                return e[0]
            }

            function un(e) {
                return e[e.length - 1]
            }

            function dn(e, t) {
                for (let n = e.length - 1; n >= 0; n -= 1) if (t(e[n])) return n;
                return -1
            }

            function fn(e, t) {
                return e > 0 ? Array.from({length: e}, (() => Array.isArray(t) ? t.slice() : t)) : []
            }

            let pn;
            !function (e) {
                e[e.SUN = 0] = "SUN", e[e.MON = 1] = "MON", e[e.TUE = 2] = "TUE", e[e.WED = 3] = "WED", e[e.THU = 4] = "THU", e[e.FRI = 5] = "FRI", e[e.SAT = 6] = "SAT"
            }(pn || (pn = {}));
            const hn = /^(\d{4}[-|/]*\d{2}[-|/]*\d{2})\s?(\d{2}:\d{2}:\d{2})?$/, mn = {}, gn = [24, 60, 60, 1e3];

            function vn(e, t) {
                let n = "", r = 0;
                if (String(e).length > t) return String(e);
                for (; r < t - 1; r += 1) n += "0";
                return (n + e).slice(-1 * t)
            }

            function yn(e) {
                let t = e.getHours();
                return 0 === t && (t = 12), t > 12 && (t %= 12), t
            }

            const wn = {
                YYYYMMDD: e => [e.getFullYear(), vn(e.getMonth() + 1, 2), vn(e.getDate(), 2)].join(""),
                YYYY: e => String(e.getFullYear()),
                MM: e => vn(e.getMonth() + 1, 2),
                DD: e => vn(e.getDate(), 2),
                "HH:mm": function (e) {
                    const t = e.getHours(), n = e.getMinutes();
                    return "".concat(vn(t, 2), ":").concat(vn(n, 2))
                },
                "hh:mm": function (e) {
                    const t = yn(e), n = e.getMinutes();
                    return "".concat(vn(t, 2), ":").concat(vn(n, 2))
                },
                hh(e) {
                    const t = yn(e);
                    return String(t)
                },
                tt: e => e.getHours() < 12 ? "am" : "pm"
            }, _n = 864e5, bn = 6e4, xn = 20 * bn, Dn = 18e5;

            function kn(e, t) {
                let n = t;
                return Object.entries(wn).forEach((t => {
                    let [r, o] = t;
                    n = n.replace(r, o(e))
                })), n
            }

            function Sn(e, t) {
                const n = mn, r = e + t;
                if (n[r]) return n[r];
                const o = function (e, t, n) {
                    const r = {date: 0, hour: 1, minute: 2, second: 3};
                    return !(e in r) || isNaN(t) ? 0 : [t].concat(gn.slice(r[e])).reduce(n)
                }(e, t, ((e, t) => e * t));
                return o ? (n[r] = o, n[r]) : 0
            }

            function Cn(e) {
                const t = e ? new nn(e) : new nn;
                return t.setHours(0, 0, 0, 0), t
            }

            function En(e, t, n) {
                const r = e.getTime(), o = t.getTime(), i = new nn(e), a = [];
                let l = r;
                for (; l <= o && o >= i.getTime();) a.push(new nn(i)), l += n, i.addMilliseconds(n);
                return a
            }

            function In(e) {
                return new nn(e)
            }

            function Mn(e, t) {
                const n = e.getTime(), r = t.getTime();
                return n < r ? -1 : n > r ? 1 : 0
            }

            function Nn(e, t) {
                return function (e, t) {
                    return function (e, t) {
                        return e.getFullYear() === t.getFullYear()
                    }(e, t) && e.getMonth() === t.getMonth()
                }(e, t) && e.getDate() === t.getDate()
            }

            function Tn(e, t) {
                return 1 === Mn(e, t) ? e : t
            }

            function On(e, t) {
                return -1 === Mn(e, t) ? e : t
            }

            function Pn(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                const n = e.match(hn);
                let r, o, i;
                if (!n) throw new Nt(e);
                if (e.length > 8) {
                    r = ~e.indexOf("/") ? "/" : "-";
                    const t = n.splice(1);
                    o = t[0].split(r), i = t[1] ? t[1].split(":") : [0, 0, 0]
                } else {
                    const [e] = n;
                    o = [e.substr(0, 4), e.substr(4, 2), e.substr(6, 2)], i = [0, 0, 0]
                }
                return (new nn).setWithRaw(Number(o[0]), Number(o[1]) + t, Number(o[2]), Number(i[0]), Number(i[1]), Number(i[2]), 0)
            }

            function An(e) {
                const t = e ? new nn(e) : new nn;
                return t.setHours(23, 59, 59, 999), t
            }

            function Rn(e) {
                return e === pn.SUN || e === pn.SAT
            }

            function Ln(e) {
                return e === pn.SUN
            }

            function Hn(e) {
                return e === pn.SAT
            }

            function Fn(e) {
                const t = new nn(e);
                return t.setDate(1), t.setHours(0, 0, 0, 0), t
            }

            function zn(e, t, n, r) {
                const o = 100 / e, i = e > 5 ? 100 / (e - 1) : o;
                let a = 0;
                const l = ut()(n, 7).concat(ut()(e)).slice(0, 7);
                t = !r && t;
                const c = l.map((n => {
                    let r = t ? i : o;
                    e > 5 && t && Rn(n) && (r = i / 2);
                    const l = {width: r, left: a};
                    return a += r, l
                })), {length: s} = c, u = fn(s, fn(s, 0));
                return c.forEach(((e, t) => {
                    let {width: n} = e;
                    for (let e = 0; e <= t; e += 1) for (let r = t; r < s; r += 1) u[e][r] += n
                })), u[0][s - 1] = 100, {rowStyleInfo: c, cellWidthMap: u.map((e => e.map(wt)))}
            }

            function Wn(e, t) {
                const n = In(e);
                return n.setMilliseconds(e.getMilliseconds() + t), n
            }

            function Bn(e, t) {
                const n = In(e);
                return n.setMinutes(e.getMinutes() + t), n
            }

            function jn(e, t) {
                const n = In(e);
                return n.setHours(...t.split(":").map(Number)), n
            }

            function Gn(e, t) {
                const n = In(e);
                return n.setDate(e.getDate() + t), n
            }

            function Un(e, t) {
                const n = new nn(e.getFullYear(), e.getMonth(), e.getDate()).getTime(),
                    r = new nn(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                return Math.round((n - r) / _n)
            }

            function Yn(e) {
                let {start: t, end: n, targetStart: r, targetEnd: o, goingDuration: i, comingDuration: a, targetGoingDuration: l, targetComingDuration: c, usingTravelTime: s} = e;
                return Math.abs(n - t) < xn && (n += xn), Math.abs(n - t) < xn && (n += xn), s && (t -= Sn("minute", i), n += Sn("minute", a), r -= Sn("minute", l), o += Sn("minute", c)), function (e, t, n, r) {
                    return n > e && n < t || r > e && r < t || n <= e && r >= t
                }(t, n, r, o)
            }

            const Vn = function () {
                const e = function () {
                    let e = 0;
                    return {next: () => (e += 1, e)}
                }();
                return () => e.next()
            }();

            function $n(e) {
                return e.__fe_id || (e.__fe_id = Vn()), e.__fe_id
            }

            function Xn(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            class qn {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Xn(this, "id", ""), Xn(this, "calendarId", ""), Xn(this, "title", ""), Xn(this, "body", ""), Xn(this, "isAllday", !1), Xn(this, "start", new nn), Xn(this, "end", new nn), Xn(this, "goingDuration", 0), Xn(this, "comingDuration", 0), Xn(this, "location", ""), Xn(this, "attendees", []), Xn(this, "category", "time"), Xn(this, "dueDateClass", ""), Xn(this, "recurrenceRule", ""), Xn(this, "state", "Busy"), Xn(this, "isVisible", !0), Xn(this, "isPending", !1), Xn(this, "isFocused", !1), Xn(this, "isReadOnly", !1), Xn(this, "isPrivate", !1), Xn(this, "customStyle", {}), Xn(this, "raw", null), Xn(this, "hasMultiDates", !1), $n(this), this.init(e)
                }

                init() {
                    let {id: e = "", calendarId: t = "", title: n = "", body: r = "", isAllday: o = !1, start: i = new nn, end: a = new nn, goingDuration: l = 0, comingDuration: c = 0, location: s = "", attendees: u = [], category: d = "time", dueDateClass: f = "", recurrenceRule: p = "", state: h = "Busy", isVisible: m = !0, isPending: g = !1, isFocused: v = !1, isReadOnly: y = !1, isPrivate: w = !1, color: _, backgroundColor: b, dragBackgroundColor: x, borderColor: D, customStyle: k = {}, raw: S = null} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.id = e, this.calendarId = t, this.title = n, this.body = r, this.isAllday = "allday" === d || o, this.goingDuration = l, this.comingDuration = c, this.location = s, this.attendees = u, this.category = d, this.dueDateClass = f, this.recurrenceRule = p, this.state = h, this.isVisible = m, this.isPending = g, this.isFocused = v, this.isReadOnly = y, this.isPrivate = w, this.color = _, this.backgroundColor = b, this.dragBackgroundColor = x, this.borderColor = D, this.customStyle = k, this.raw = S, this.isAllday ? this.setAlldayPeriod(i, a) : this.setTimePeriod(i, a), "milestone" !== d && "task" !== d || (this.start = new nn(this.end))
                }

                setAlldayPeriod(e, t) {
                    let n, r;
                    n = gt()(e) ? Pn(e.substring(0, 10)) : new nn(e || Date.now()), r = gt()(t) ? Pn(t.substring(0, 10)) : new nn(t || this.start), this.start = n, this.start.setHours(0, 0, 0), this.end = r || new nn(this.start), this.end.setHours(23, 59, 59)
                }

                setTimePeriod(e, t) {
                    this.start = new nn(e || Date.now()), this.end = new nn(t || this.start), t || this.end.setMinutes(this.end.getMinutes() + 30), this.hasMultiDates = this.end.getTime() - this.start.getTime() > _n
                }

                getStarts() {
                    return this.start
                }

                getEnds() {
                    return this.end
                }

                cid() {
                    return $n(this)
                }

                equals(e) {
                    return this.id === e.id && (this.title === e.title && (this.body === e.body && (this.isAllday === e.isAllday && (0 === Mn(this.getStarts(), e.getStarts()) && (0 === Mn(this.getEnds(), e.getEnds()) && (this.color === e.color && (this.backgroundColor === e.backgroundColor && (this.dragBackgroundColor === e.dragBackgroundColor && this.borderColor === e.borderColor))))))))
                }

                duration() {
                    const e = Number(this.getStarts()), t = Number(this.getEnds());
                    let n;
                    return n = this.isAllday ? Number(An(t)) - Number(Cn(e)) : t - e, n
                }

                valueOf() {
                    return this
                }

                collidesWith(e) {
                    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return e = e instanceof ln ? e.model : e, Yn({
                        start: Number(this.getStarts()),
                        end: Number(this.getEnds()),
                        targetStart: Number(e.getStarts()),
                        targetEnd: Number(e.getEnds()),
                        goingDuration: this.goingDuration,
                        comingDuration: this.comingDuration,
                        targetGoingDuration: e.goingDuration,
                        targetComingDuration: e.comingDuration,
                        usingTravelTime: t
                    })
                }

                toEventObject() {
                    return {
                        id: this.id,
                        calendarId: this.calendarId,
                        __cid: this.cid(),
                        title: this.title,
                        body: this.body,
                        isAllday: this.isAllday,
                        start: this.start,
                        end: this.end,
                        goingDuration: this.goingDuration,
                        comingDuration: this.comingDuration,
                        location: this.location,
                        attendees: this.attendees,
                        category: this.category,
                        dueDateClass: this.dueDateClass,
                        recurrenceRule: this.recurrenceRule,
                        state: this.state,
                        isVisible: this.isVisible,
                        isPending: this.isPending,
                        isFocused: this.isFocused,
                        isReadOnly: this.isReadOnly,
                        isPrivate: this.isPrivate,
                        color: this.color,
                        backgroundColor: this.backgroundColor,
                        dragBackgroundColor: this.dragBackgroundColor,
                        borderColor: this.borderColor,
                        customStyle: this.customStyle,
                        raw: this.raw
                    }
                }

                getColors() {
                    return {
                        color: this.color,
                        backgroundColor: this.backgroundColor,
                        dragBackgroundColor: this.dragBackgroundColor,
                        borderColor: this.borderColor
                    }
                }
            }

            function Kn(e) {
                let {model: t} = e;
                const {category: n, isAllday: r, hasMultiDates: o} = t;
                return "time" === n && !r && !o
            }

            Xn(qn, "schema", {required: ["title"], dateRange: ["start", "end"]});

            class Zn {
                constructor(e) {
                    var t, n, r;
                    t = this, n = "internalMap", r = new Map, n in t ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r, Gt(e) && (this.getItemID = e)
                }

                static and() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    const {length: r} = t;
                    return e => {
                        for (let n = 0; n < r; n += 1) if (!t[n].call(null, e)) return !1;
                        return !0
                    }
                }

                static or() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    const {length: r} = t;
                    return r ? e => {
                        let n = t[0].call(null, e);
                        for (let o = 1; o < r; o += 1) n = n || t[o].call(null, e);
                        return n
                    } : () => !1
                }

                getItemID(e) {
                    var t;
                    return null !== (t = null == e ? void 0 : e._id) && void 0 !== t ? t : ""
                }

                getFirstItem() {
                    return this.internalMap.values().next().value
                }

                add() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.forEach((e => {
                        const t = this.getItemID(e);
                        this.internalMap.set(t, e)
                    })), this
                }

                remove() {
                    const e = [];
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return n.forEach((t => {
                        const n = gt()(t) || Ft()(t) ? t : this.getItemID(t);
                        this.internalMap.has(n) && (e.push(this.internalMap.get(n)), this.internalMap.delete(n))
                    })), 1 === e.length ? e[0] : e
                }

                has(e) {
                    const t = gt()(e) || Ft()(e) ? e : this.getItemID(e);
                    return this.internalMap.has(t)
                }

                get(e) {
                    var t;
                    const n = gt()(e) || Ft()(e) ? e : this.getItemID(e);
                    return null !== (t = this.internalMap.get(n)) && void 0 !== t ? t : null
                }

                doWhenHas(e, t) {
                    const n = this.internalMap.get(e);
                    Bt(n) || t(n)
                }

                filter(e) {
                    const t = new Zn;
                    return this.hasOwnProperty("getItemID") && (t.getItemID = this.getItemID), this.internalMap.forEach((n => {
                        !0 === e(n) && t.add(n)
                    })), t
                }

                groupBy(e) {
                    const t = {};
                    return this.internalMap.forEach((n => {
                        var r, o;
                        let i = Gt(e) ? e(n) : n[e];
                        Gt(i) && (i = i.call(n)), null !== (o = t[r = i]) && void 0 !== o || (t[r] = new Zn(this.getItemID)), t[i].add(n)
                    })), t
                }

                find(e) {
                    let t = null;
                    const n = this.internalMap.values();
                    let r = n.next();
                    for (; !1 === r.done;) {
                        if (e(r.value)) {
                            t = r.value;
                            break
                        }
                        r = n.next()
                    }
                    return t
                }

                sort(e) {
                    return this.toArray().sort(e)
                }

                each(e) {
                    const t = this.internalMap.entries();
                    let n = t.next();
                    for (; !1 === n.done;) {
                        const [r, o] = n.value;
                        if (!1 === e(o, r)) break;
                        n = t.next()
                    }
                }

                clear() {
                    this.internalMap.clear()
                }

                toArray() {
                    return Array.from(this.internalMap.values())
                }

                get size() {
                    return this.internalMap.size
                }
            }

            function Jn() {
                const e = new Zn((e => e.cid()));
                return arguments.length && e.add(...arguments), e
            }

            function Qn(e, t) {
                return En(Cn(e), An(t), _n)
            }

            function er(e) {
                const {model: t} = e;
                return (n = t).isAllday || "time" === n.category && Number(n.end) - Number(n.start) > _n ? "allday" : t.category;
                var n
            }

            function tr(e, t) {
                Qn(t.getStarts(), t.getEnds()).forEach((n => {
                    const r = kn(n, "YYYYMMDD");
                    (e[r] = e[r] || []).push(t.cid())
                }))
            }

            function nr(e, t) {
                const n = t.cid();
                Object.values(e).forEach((e => {
                    const t = e.indexOf(n);
                    ~t && e.splice(t, 1)
                }))
            }

            function rr(e, t) {
                return function (e, t) {
                    return e.events.add(t), tr(e.idsOfDay, t), t
                }(e, new qn(t))
            }

            function or() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return {calendar: {calendars: e, events: Jn(), idsOfDay: {}}}
            }

            function ir(e) {
                return {
                    createEvents: t => e(ct((e => {
                        !function (e) {
                            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((t => rr(e, t)))
                        }(e.calendar, t)
                    }))), updateEvent: t => {
                        let {event: n, eventData: r} = t;
                        return e(ct((e => {
                            !function (e, t, n, r) {
                                const {idsOfDay: o} = e, i = e.events.find((e => function (e, t, n) {
                                    return e.id === t && e.calendarId === n
                                }(e, t, n)));
                                !!i && (i.init({...i, ...r}), nr(o, i), tr(o, i))
                            }(e.calendar, n.id, n.calendarId, r)
                        })))
                    }, deleteEvent: t => e(ct((e => {
                        !function (e, t) {
                            nr(e.idsOfDay, t), e.events.remove(t)
                        }(e.calendar, t)
                    }))), clearEvents: () => e(ct((e => {
                        var t;
                        (t = e.calendar).idsOfDay = {}, t.events.clear()
                    }))), setCalendars: t => e(ct((e => {
                        e.calendar.calendars = t
                    }))), setCalendarColor: (t, n) => e(ct((e => {
                        const r = e.calendar.calendars.map((e => e.id === t ? {...e, ...n} : e)),
                            o = Jn(...e.calendar.events.toArray().map((e => {
                                var r, o, i, a;
                                e.calendarId === t && (e.color = null !== (r = n.color) && void 0 !== r ? r : e.color, e.backgroundColor = null !== (o = n.backgroundColor) && void 0 !== o ? o : e.backgroundColor, e.borderColor = null !== (i = n.borderColor) && void 0 !== i ? i : e.borderColor, e.dragBackgroundColor = null !== (a = n.dragBackgroundColor) && void 0 !== a ? a : e.dragBackgroundColor);
                                return e
                            })));
                        e.calendar.calendars = r, e.calendar.events = o
                    }))), setCalendarVisibility: (t, n) => e(ct((e => {
                        const r = e.calendar.events.toArray();
                        e.calendar.events = Jn(...r.map((e => (t.includes(e.calendarId) && (e.isVisible = n), e))))
                    })))
                }
            }

            let ar;

            function lr() {
                return {
                    dnd: {
                        draggingItemType: null,
                        draggingState: ar.IDLE,
                        initX: null,
                        initY: null,
                        x: null,
                        y: null,
                        draggingEventUIModel: null
                    }
                }
            }

            function cr(e) {
                return {
                    initDrag: t => {
                        e(ct((e => {
                            e.dnd = {...e.dnd, ...t, draggingState: ar.INIT}
                        })))
                    }, setDragging: t => {
                        e(ct((e => {
                            e.dnd = {...e.dnd, ...t, draggingState: ar.DRAGGING}
                        })))
                    }, cancelDrag: () => {
                        e(ct((e => {
                            e.dnd = lr().dnd, e.dnd.draggingState = ar.CANCELED
                        })))
                    }, reset: () => {
                        e(ct((e => {
                            e.dnd = lr().dnd
                        })))
                    }, setDraggingEventUIModel: t => {
                        e(ct((e => {
                            var n;
                            e.dnd.draggingEventUIModel = null !== (n = null == t ? void 0 : t.clone()) && void 0 !== n ? n : null
                        })))
                    }
                }
            }

            function sr(e) {
                return {
                    setGridSelection: (t, n) => {
                        e(ct((e => {
                            e.gridSelection[t] = n
                        })))
                    }, addGridSelection: (t, n) => {
                        e(ct((e => {
                            "dayGridMonth" === t && n && (e.gridSelection.accumulated[t] = [...e.gridSelection.accumulated[t], n], e.gridSelection.dayGridMonth = null)
                        })))
                    }, clearAll: () => e(ct((e => {
                        e.gridSelection = {
                            dayGridMonth: null,
                            dayGridWeek: null,
                            timeGrid: null,
                            accumulated: {dayGridMonth: []}
                        }
                    })))
                }
            }

            !function (e) {
                e[e.IDLE = 0] = "IDLE", e[e.INIT = 1] = "INIT", e[e.DRAGGING = 2] = "DRAGGING", e[e.CANCELED = 3] = "CANCELED"
            }(ar || (ar = {}));
            const ur = 3;

            function dr(e, t, n) {
                return Object.keys(e).reduce(((n, r) => r === t ? n : n - e[r].height - ur), n)
            }

            function fr(e) {
                return {
                    setLastPanelType: t => {
                        e(ct((e => {
                            e.weekViewLayout.lastPanelType = t, t && (e.weekViewLayout.dayGridRows[t].height = dr(e.weekViewLayout.dayGridRows, t, e.layout))
                        })))
                    }, updateLayoutHeight: t => e(ct((e => {
                        const {lastPanelType: n} = e.weekViewLayout;
                        e.layout = t, n && (e.weekViewLayout.dayGridRows[n].height = dr(e.weekViewLayout.dayGridRows, n, t))
                    }))), updateDayGridRowHeight: t => {
                        let {rowName: n, height: r} = t;
                        return e(ct((e => {
                            const {lastPanelType: t} = e.weekViewLayout;
                            e.weekViewLayout.dayGridRows[n] = {height: r}, t && (e.weekViewLayout.dayGridRows[t].height = dr(e.weekViewLayout.dayGridRows, t, e.layout))
                        })))
                    }, updateDayGridRowHeightByDiff: t => {
                        let {rowName: n, diff: r} = t;
                        return e(ct((e => {
                            var t, o, i;
                            const {lastPanelType: a} = e.weekViewLayout,
                                l = null !== (t = null === (o = e.weekViewLayout.dayGridRows) || void 0 === o || null === (i = o[n]) || void 0 === i ? void 0 : i.height) && void 0 !== t ? t : pt;
                            e.weekViewLayout.dayGridRows[n] = {height: l + r}, a && (e.weekViewLayout.dayGridRows[a].height = dr(e.weekViewLayout.dayGridRows, a, e.layout))
                        })))
                    }, setSelectedDuplicateEventCid: t => e(ct((e => {
                        e.weekViewLayout.selectedDuplicateEventCid = null != t ? t : -1
                    })))
                }
            }

            function pr(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }

            const hr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], mr = e => hr[e];

            function gr(e, t) {
                return e.map((e => {
                    const n = e.getDay(), r = t.length > 0 ? t[n] : pr(mr(n));
                    return {
                        date: e.getDate(),
                        day: e.getDay(),
                        dayName: r,
                        isToday: !0,
                        renderDate: "date",
                        dateInstance: e
                    }
                }))
            }

            function vr(e) {
                if (!e) return !1;
                const t = {
                    getDuplicateEvents: (e, t) => t.filter((t => t.title === e.title && 0 === Mn(t.start, e.start) && 0 === Mn(t.end, e.end))).sort(((e, t) => e.calendarId > t.calendarId ? 1 : -1)),
                    getMainEvent: e => un(e)
                };
                return Lt()(e) ? t : {...t, ...e}
            }

            function yr() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = {
                    startDayOfWeek: pn.SUN,
                    dayNames: [],
                    narrowWeekend: !1,
                    workweek: !1,
                    showNowIndicator: !0,
                    showTimezoneCollapseButton: !1,
                    timezonesCollapsed: !1,
                    hourStart: 0,
                    hourEnd: 24,
                    eventView: !0,
                    taskView: !0,
                    collapseDuplicateEvents: !1, ...e
                };
                return t.collapseDuplicateEvents = vr(t.collapseDuplicateEvents), t
            }

            function wr() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {zones: [], ...e}
            }

            function _r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = {
                    dayNames: [],
                    visibleWeeksCount: 0,
                    workweek: !1,
                    narrowWeekend: !1,
                    startDayOfWeek: pn.SUN,
                    isAlways6Weeks: !0,
                    visibleEventCount: 6, ...e
                };
                return 0 === t.dayNames.length && (t.dayNames = hr.slice()), t
            }

            function br(e) {
                return Lt()(e) ? {enableDblClick: e, enableClick: e} : {enableDblClick: !0, enableClick: !0, ...e}
            }

            const xr = e => !!e.isVisible;

            function Dr() {
                var e, t, n, r, o, i;
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    options: {
                        defaultView: null !== (e = a.defaultView) && void 0 !== e ? e : "week",
                        useFormPopup: null !== (t = a.useFormPopup) && void 0 !== t && t,
                        useDetailPopup: null !== (n = a.useDetailPopup) && void 0 !== n && n,
                        isReadOnly: null !== (r = a.isReadOnly) && void 0 !== r && r,
                        week: yr(a.week),
                        month: _r(a.month),
                        gridSelection: br(a.gridSelection),
                        usageStatistics: null === (o = a.usageStatistics) || void 0 === o || o,
                        eventFilter: null !== (i = a.eventFilter) && void 0 !== i ? i : xr,
                        timezone: wr(a.timezone)
                    }
                }
            }

            function kr(e) {
                return {
                    setOptions: function () {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e(ct((e => {
                            var n;
                            t.gridSelection && (t.gridSelection = br(t.gridSelection)), null !== (n = t.week) && void 0 !== n && n.collapseDuplicateEvents && (t.week.collapseDuplicateEvents = vr(t.week.collapseDuplicateEvents)), rn(e.options, t)
                        })))
                    }
                }
            }

            let Sr;

            function Cr(e) {
                return {
                    showSeeMorePopup: t => e(ct((e => {
                        e.popup[Sr.SeeMore] = t, e.popup[Sr.Form] = null, e.popup[Sr.Detail] = null
                    }))), showFormPopup: t => e(ct((e => {
                        e.popup[Sr.Form] = t, e.popup[Sr.SeeMore] = null, e.popup[Sr.Detail] = null
                    }))), showDetailPopup: (t, n) => e(ct((e => {
                        e.popup[Sr.Detail] = t, e.popup[Sr.Form] = null, n || (e.popup[Sr.SeeMore] = null)
                    }))), hideSeeMorePopup: () => e(ct((e => {
                        e.popup[Sr.SeeMore] = null
                    }))), hideFormPopup: () => e(ct((e => {
                        e.popup[Sr.Form] = null
                    }))), hideDetailPopup: () => e(ct((e => {
                        e.popup[Sr.Detail] = null
                    }))), hideAllPopup: () => e(ct((e => {
                        e.popup[Sr.SeeMore] = null, e.popup[Sr.Form] = null, e.popup[Sr.Detail] = null
                    })))
                }
            }

            !function (e) {
                e.SeeMore = "seeMore", e.Form = "form", e.Detail = "detail"
            }(Sr || (Sr = {}));
            const Er = () => {
            }, Ir = /^auto$|^$|%/;

            function Mr(e, t) {
                let n = e.style[t];
                if ((!n || "auto" === n) && document.defaultView) {
                    const r = document.defaultView.getComputedStyle(e, null);
                    n = r ? r[t] : null
                }
                return "auto" === n ? null : n
            }

            function Nr(e) {
                return gt()(e) ? Ir.test(e) : null === e
            }

            function Tr(e) {
                const t = Mr(e, "width"), n = Mr(e, "height");
                if ((Nr(t) || Nr(n)) && e.getBoundingClientRect) {
                    const {width: t, height: n} = e.getBoundingClientRect();
                    return {width: t || e.offsetWidth, height: n || e.offsetHeight}
                }
                return {width: parseFloat(null != t ? t : "0"), height: parseFloat(null != n ? n : "0")}
            }

            const Or = ("undefined" == typeof Element ? Er : Element).prototype;
            Or.matches || Or.webkitMatchesSelector || Or.msMatchesSelector;

            function Pr(e) {
                return e.replace(/<([^>]+)>/gi, "")
            }

            const Ar = 60, Rr = {
                milestone: e => p(m, null, p("span", {className: yt("icon", "ic-milestone")}), p("span", {style: {backgroundColor: e.backgroundColor}}, Pr(e.title))),
                milestoneTitle: () => p("span", {className: yt("left-content")}, "Milestone"),
                task: e => "#".concat(e.title),
                taskTitle: () => p("span", {className: yt("left-content")}, "Task"),
                alldayTitle: () => p("span", {className: yt("left-content")}, "All Day"),
                allday: e => Pr(e.title),
                time(e) {
                    const {start: t, title: n} = e;
                    return t ? p("span", null, p("strong", null, kn(t, "HH:mm")), "혻", p("span", null, Pr(n))) : Pr(n)
                },
                goingDuration(e) {
                    const {goingDuration: t} = e, n = Math.floor(t / Ar), r = t % Ar;
                    return "GoingTime ".concat(vn(n, 2), ":").concat(vn(r, 2))
                },
                comingDuration(e) {
                    const {comingDuration: t} = e, n = Math.floor(t / Ar), r = t % Ar;
                    return "ComingTime ".concat(vn(n, 2), ":").concat(vn(r, 2))
                },
                monthMoreTitleDate(e) {
                    const {date: t, day: n} = e, r = yt("more-title-date"), o = yt("more-title-day"), i = pr(mr(n));
                    return p(m, null, p("span", {className: r}, t), p("span", {className: o}, i))
                },
                monthMoreClose: () => "",
                monthGridHeader(e) {
                    const t = parseInt(e.date.split("-")[2], 10);
                    return p("span", {className: yt("weekday-grid-date", {"weekday-grid-date-decorator": e.isToday})}, t)
                },
                monthGridHeaderExceed: e => p("span", {className: yt("weekday-grid-more-events")}, e, " more"),
                monthGridFooter: e => "",
                monthGridFooterExceed: e => "",
                monthDayName: e => e.label,
                weekDayName(e) {
                    const t = yt("day-name__date"), n = yt("day-name__name");
                    return p(m, null, p("span", {className: t}, e.date), "혻혻", p("span", {className: n}, e.dayName))
                },
                weekGridFooterExceed: e => "+".concat(e),
                collapseBtnTitle: () => p("span", {className: yt("collapse-btn-icon")}),
                timezoneDisplayLabel(e) {
                    let {displayLabel: t, timezoneOffset: n} = e;
                    if (Bt(t) && jt(n)) {
                        const e = n < 0 ? "-" : "+", t = Math.abs(n / Ar), r = Math.abs(n % Ar);
                        return "GMT".concat(e).concat(vn(t, 2), ":").concat(vn(r, 2))
                    }
                    return t
                },
                timegridDisplayPrimaryTime(e) {
                    const {time: t} = e;
                    return kn(t, "hh tt")
                },
                timegridDisplayTime(e) {
                    const {time: t} = e;
                    return kn(t, "HH:mm")
                },
                timegridNowIndicatorLabel(e) {
                    const {time: t, format: n = "HH:mm"} = e;
                    return kn(t, n)
                },
                popupIsAllday: () => "All day",
                popupStateFree: () => "Free",
                popupStateBusy: () => "Busy",
                titlePlaceholder: () => "Subject",
                locationPlaceholder: () => "Location",
                startDatePlaceholder: () => "Start date",
                endDatePlaceholder: () => "End date",
                popupSave: () => "Save",
                popupUpdate: () => "Update",
                popupEdit: () => "Edit",
                popupDelete: () => "Delete",
                popupDetailTitle(e) {
                    let {title: t} = e;
                    return t
                },
                popupDetailDate(e) {
                    let {isAllday: t, start: n, end: r} = e;
                    const o = "YYYY.MM.DD", i = "hh:mm tt", a = "".concat(o, " ").concat(i), l = kn(n, t ? o : i),
                        c = Nn(n, r) ? i : a;
                    return t ? "".concat(l).concat(Nn(n, r) ? "" : " - ".concat(kn(r, o))) : "".concat(kn(n, a), " - ").concat(kn(r, c))
                },
                popupDetailLocation(e) {
                    let {location: t} = e;
                    return t
                },
                popupDetailAttendees(e) {
                    let {attendees: t = []} = e;
                    return t.join(", ")
                },
                popupDetailState(e) {
                    let {state: t} = e;
                    return t || "Busy"
                },
                popupDetailRecurrenceRule(e) {
                    let {recurrenceRule: t} = e;
                    return t
                },
                popupDetailBody(e) {
                    let {body: t} = e;
                    return t
                }
            };

            function Lr() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {template: {...Rr, ...e}}
            }

            function Hr(e) {
                return {
                    setTemplate: t => e(ct((e => {
                        e.template = {...e.template, ...t}
                    })))
                }
            }

            function Fr() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "week";
                const t = new nn;
                return t.setHours(0, 0, 0, 0), {view: {currentView: e, renderDate: t}}
            }

            function zr(e) {
                return {
                    changeView: t => e(ct((e => {
                        e.view.currentView = t
                    }))), setRenderDate: t => e(ct((e => {
                        e.view.renderDate = Cn(t)
                    })))
                }
            }

            const Wr = At()(window) || !window.navigator ? Q : ee;

            function Br() {
                const e = H(null);
                return {
                    StoreProvider: function (t) {
                        let {children: n, store: r} = t;
                        return p(e.Provider, {value: r, children: n})
                    }, useStore: function (t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is;
                        const r = oe(e);
                        if (Bt(r)) throw new Error("StoreProvider is not found");
                        const [, o] = J((e => e + 1), 0), i = r.getState(), a = te(i), l = te(t), c = te(n), s = te(!1),
                            u = te();
                        let d;
                        At()(u.current) && (u.current = t(i));
                        let f = !1;
                        const p = a.current !== i || l.current !== t || c.current !== n || s.current;
                        p && (d = t(i), f = !n(u.current, d)), Wr((() => {
                            f && (u.current = d), a.current = i, l.current = t, c.current = n, s.current = !1
                        }));
                        const h = te(i);
                        return Wr((() => {
                            const e = () => {
                                try {
                                    const e = r.getState(), t = l.current(e);
                                    !c.current(u.current, t) && (a.current = e, u.current = d, o())
                                } catch (e) {
                                    console.error("[toastui-calendar] failed to update state", null == e ? void 0 : e.message), s.current = !0, o()
                                }
                            }, t = r.subscribe(e);
                            return r.getState() !== h.current && e(), t
                        }), []), f ? d : u.current
                    }, useInternalStore: () => {
                        const t = oe(e);
                        if (Bt(t)) throw new Error("StoreProvider is not found");
                        return ne((() => t), [t])
                    }
                }
            }

            function jr(e) {
                let t;
                const n = new Set, r = e => {
                    const r = e(t);
                    if (r !== t) {
                        const e = t;
                        t = {...t, ...r}, n.forEach((n => n(t, e)))
                    }
                }, o = () => t, i = {
                    setState: r, getState: o, subscribe: (e, r, o) => {
                        let i = e;
                        if (r) {
                            let n = r(t);
                            const a = null != o ? o : Object.is;
                            i = () => {
                                const o = r(t);
                                if (!a(n, o)) {
                                    const t = n;
                                    n = o, e(n, t)
                                }
                            }
                        }
                        return n.add(i), () => n.delete(i)
                    }, clearListeners: () => n.clear()
                };
                return t = e(r, o, i), i
            }

            const Gr = e => t => ({
                ...Dr(e), ...Lr(e.template),
                popup: {[Sr.SeeMore]: null, [Sr.Form]: null, [Sr.Detail]: null},
                layout: 500,
                weekViewLayout: {
                    lastPanelType: null,
                    dayGridRows: {},
                    selectedDuplicateEventCid: -1
                }, ...or(e.calendars), ...Fr(e.defaultView), ...lr(),
                gridSelection: {dayGridMonth: null, dayGridWeek: null, timeGrid: null, accumulated: {dayGridMonth: []}},
                dispatch: {
                    options: kr(t),
                    popup: Cr(t),
                    weekViewLayout: fr(t),
                    calendar: ir(t),
                    view: zr(t),
                    dnd: cr(t),
                    gridSelection: sr(t),
                    template: Hr(t)
                }
            }), {StoreProvider: Ur, useStore: Yr, useInternalStore: Vr} = Br();

            function $r(e) {
                return Yr(re((t => e ? t.dispatch[e] : t.dispatch), [e]))
            }

            function Xr(e) {
                return t => t[e]
            }

            Xr("popup");
            const qr = Xr("calendar"), Kr = Xr("weekViewLayout"), Zr = Xr("template"), Jr = Xr("view"),
                Qr = Xr("options"), eo = Xr("dnd");
            var to = r(4304), no = r.n(to);
            const ro = "data-target-temp";

            function oo(e) {
                var t;
                let {template: n, param: r, as: o = "div"} = e;
                const i = Yr(Zr)[n];
                if (Bt(i)) return null;
                const a = i(r);
                return gt()(a) ? p(o, {
                    className: yt("template-".concat(n)),
                    dangerouslySetInnerHTML: {__html: (l = a, no().sanitize(l))}
                }) : L(a, {className: "".concat(null !== (t = a.props.className) && void 0 !== t ? t : "", " ").concat(yt("template-".concat(n)))});
                var l
            }

            const io = H(null), ao = io.Provider, lo = () => {
                const e = oe(io);
                if (!e) throw new Error("useEventBus must be used within a EventBusProvider");
                return e
            }, co = e => {
                var t, n, r, o, i;
                return null !== (t = null === (n = e.options) || void 0 === n || null === (r = n.timezone) || void 0 === r || null === (o = r.zones) || void 0 === o || null === (i = o[0]) || void 0 === i ? void 0 : i.timezoneName) && void 0 !== t ? t : "Local"
            }, so = e => {
                var t, n;
                return null === (t = e.options) || void 0 === t || null === (n = t.timezone) || void 0 === n ? void 0 : n.customOffsetCalculator
            }, uo = e => {
                var t;
                return null !== (t = e.options.timezone.zones) && void 0 !== t ? t : []
            };

            function fo() {
                const e = Yr(so), t = jt(e);
                return re((function (n) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new nn;
                    return r.tz(t ? e(n, r.getTime()) : n)
                }), [e, t])
            }

            function po() {
                const e = Yr(co), t = fo(), n = re((() => t(e)), [e, t]);
                return [e, n]
            }

            function ho(e) {
                let {dayName: t, style: n, type: r, theme: o} = e;
                const i = lo(), [, a] = po(), l = a(), {day: c} = t, s = "week" === r ? function (e) {
                    let {dayName: t, theme: n, today: r} = e;
                    const {day: o, dateInstance: i} = t, a = Nn(r, i), l = !a && i < r;
                    return Ln(o) ? n.common.holiday.color : l ? null === (c = n.week) || void 0 === c ? void 0 : c.pastDay.color : Hn(o) ? n.common.saturday.color : a ? null === (s = n.week) || void 0 === s ? void 0 : s.today.color : n.common.dayName.color;
                    var c, s
                }({dayName: t, theme: o, today: l}) : function (e) {
                    let {dayName: t, theme: n} = e;
                    const {day: r} = t;
                    return Ln(r) ? n.common.holiday.color : Hn(r) ? n.common.saturday.color : n.common.dayName.color
                }({dayName: t, theme: o}), u = "".concat(r, "DayName");
                return p("div", {
                    className: yt("day-name-item", r),
                    style: n
                }, p("span", {
                    className: yt({["holiday-".concat(mr(c))]: Rn(c)}), style: {color: s}, onClick: () => {
                        (function (e, t) {
                            return "week" === e
                        })(r) && i.fire("clickDayName", {date: kn(t.dateInstance, "YYYY-MM-DD")})
                    }, "data-testid": "dayName-".concat(r, "-").concat(mr(c))
                }, p(oo, {template: u, param: t})))
            }

            const mo = Xr("common"), go = (Xr("week"), Xr("month")), vo = e => e.week.dayGridLeft,
                yo = e => e.week.timeGridLeft, wo = e => e.month.moreView, _o = e => e.month.gridCell, bo = {
                    border: "1px solid #e5e5e5",
                    backgroundColor: "white",
                    holiday: {color: "#ff4040"},
                    saturday: {color: "#333"},
                    dayName: {color: "#333"},
                    today: {color: "#fff"},
                    gridSelection: {backgroundColor: "rgba(81, 92, 230, 0.05)", border: "1px solid #515ce6"}
                }, xo = {
                    dayName: {
                        borderLeft: "none",
                        borderTop: "1px solid #e5e5e5",
                        borderBottom: "1px solid #e5e5e5",
                        backgroundColor: "inherit"
                    },
                    weekend: {backgroundColor: "inherit"},
                    today: {color: "inherit", backgroundColor: "rgba(81, 92, 230, 0.05)"},
                    pastDay: {color: "#bbb"},
                    panelResizer: {border: "1px solid #e5e5e5"},
                    dayGrid: {borderRight: "1px solid #e5e5e5", backgroundColor: "inherit"},
                    dayGridLeft: {borderRight: "1px solid #e5e5e5", backgroundColor: "inherit", width: "72px"},
                    timeGrid: {borderRight: "1px solid #e5e5e5"},
                    timeGridLeft: {backgroundColor: "inherit", borderRight: "1px solid #e5e5e5", width: "72px"},
                    timeGridLeftAdditionalTimezone: {backgroundColor: "white"},
                    timeGridHalfHourLine: {borderBottom: "none"},
                    timeGridHourLine: {borderBottom: "1px solid #e5e5e5"},
                    nowIndicatorLabel: {color: "#515ce6"},
                    nowIndicatorPast: {border: "1px dashed #515ce6"},
                    nowIndicatorBullet: {backgroundColor: "#515ce6"},
                    nowIndicatorToday: {border: "1px solid #515ce6"},
                    nowIndicatorFuture: {border: "none"},
                    pastTime: {color: "#bbb"},
                    futureTime: {color: "#333"},
                    gridSelection: {color: "#515ce6"}
                }, Do = {
                    dayName: {borderLeft: "none", backgroundColor: "inherit"},
                    holidayExceptThisMonth: {color: "rgba(255, 64, 64, 0.4)"},
                    dayExceptThisMonth: {color: "rgba(51, 51, 51, 0.4)"},
                    weekend: {backgroundColor: "inherit"},
                    moreView: {
                        border: "1px solid #d5d5d5",
                        boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
                        backgroundColor: "white",
                        width: null,
                        height: null
                    },
                    gridCell: {headerHeight: 31, footerHeight: null},
                    moreViewTitle: {backgroundColor: "inherit"}
                };

            function ko() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {common: rn(bo, e)}
            }

            function So(e) {
                return {
                    setTheme: t => {
                        e(ct((e => {
                            e.common = rn(e.common, t.common), e.week = rn(e.week, t.week), e.month = rn(e.month, t.month)
                        })))
                    }, setCommonTheme: t => {
                        e(ct((e => {
                            e.common = rn(e.common, t)
                        })))
                    }, setWeekTheme: t => {
                        e(ct((e => {
                            e.week = rn(e.week, t)
                        })))
                    }, setMonthTheme: t => {
                        e(ct((e => {
                            e.month = rn(e.month, t)
                        })))
                    }
                }
            }

            function Co() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {month: rn(Do, e)}
            }

            function Eo() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {week: rn(xo, e)}
            }

            const Io = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t => ({
                    ...ko(null == e ? void 0 : e.common), ...Eo(null == e ? void 0 : e.week), ...Co(null == e ? void 0 : e.month),
                    dispatch: {...So(t)}
                })
            }, {StoreProvider: Mo, useInternalStore: No, useStore: To} = Br();

            function Oo() {
                return To(go)
            }

            function Po(e) {
                return {
                    common: {
                        saturday: e.common.saturday,
                        holiday: e.common.holiday,
                        today: e.common.today,
                        dayName: e.common.dayName
                    }, week: {pastDay: e.week.pastDay, today: e.week.today, dayName: e.week.dayName}
                }
            }

            function Ao(e) {
                return {
                    common: {
                        saturday: e.common.saturday,
                        holiday: e.common.holiday,
                        today: e.common.today,
                        dayName: e.common.dayName
                    }, month: {dayName: e.month.dayName}
                }
            }

            function Ro(e) {
                var t, n;
                let {dayNames: r, marginLeft: o = dt, rowStyleInfo: i, type: a = "month"} = e;
                const l = To("month" === a ? Ao : Po), {backgroundColor: c = "white", borderLeft: s = null, ...u} = null !== (t = null === (n = l[a]) || void 0 === n ? void 0 : n.dayName) && void 0 !== t ? t : {}, {borderTop: d = null, borderBottom: f = null} = u;
                return p("div", {
                    "data-testid": "grid-header-".concat(a),
                    className: yt("day-names", a),
                    style: {backgroundColor: c, borderTop: d, borderBottom: f}
                }, p("div", {
                    className: yt("day-name-container"),
                    style: {marginLeft: o}
                }, r.map(((e, t) => p(ho, {
                    type: a,
                    key: "dayNames-".concat(e.day),
                    dayName: e,
                    style: {width: wt(i[t].width), left: wt(i[t].left), borderLeft: s},
                    theme: l
                })))))
            }

            r(3985);
            let Lo;

            function Ho(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                const n = [];
                let r;
                return e.length ? (n[0] = [e[0].cid()], e.slice(1).forEach(((o, i) => {
                    r = e.slice(0, i + 1).reverse();
                    const a = r.find((e => o.collidesWith(e, t)));
                    a ? n.slice().reverse().some((e => !!~e.indexOf(a.cid()) && (e.push(o.cid()), !0))) : n.push([o.cid()])
                })), n) : n
            }

            function Fo(e, t) {
                let {length: n} = e;
                for (; n > 0;) if (n -= 1, !At()(e[n][t])) return n;
                return -1
            }

            function zo(e, t) {
                let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                const r = [];
                return t.forEach((t => {
                    const o = [[]];
                    t.forEach((t => {
                        const r = e.get(t);
                        let i, a, l = 0, c = !1;
                        for (; !c;) a = Fo(o, l), -1 === a ? (o[0].push(r), c = !0) : r.collidesWith(o[a][l], n) || (i = a + 1, At()(o[i]) && (o[i] = []), o[i][l] = r, c = !0), l += 1
                    })), r.push(o)
                })), r
            }

            function Wo(e, t) {
                return n => {
                    const r = n.getStarts();
                    return !(n.getEnds() < e || r > t)
                }
            }

            function Bo(e, t, n, r) {
                const o = En(e, t, _n).map((e => kn(e, "YYYYMMDD")));
                n.forEach((e => {
                    e.forEach((e => {
                        e.forEach(((e, t) => {
                            if (!e) return;
                            const n = kn(e.getStarts(), "YYYYMMDD"),
                                i = En(Cn(e.getStarts()), An(e.getEnds()), _n).length;
                            e.top = t, e.left = o.indexOf(n), e.width = i, null == r || r(e)
                        }))
                    }))
                }))
            }

            function jo(e, t, n) {
                return n.getStarts() < e && (n.exceedLeft = !0, n.renderStarts = new nn(e)), n.getEnds() > t && (n.exceedRight = !0, n.renderEnds = new nn(t)), n
            }

            function Go(e, t, n) {
                return n instanceof Zn ? (n.each((n => (jo(e, t, n), !0))), null) : jo(e, t, n)
            }

            function Uo(e) {
                const t = new Zn((e => e.cid()));
                return e.each((function (e) {
                    t.add(new ln(e))
                })), t
            }

            function Yo(e) {
                let {model: t} = e;
                return t.isAllday || t.hasMultiDates
            }

            function Vo(e) {
                return !Yo(e)
            }

            function $o(e) {
                e.top = e.top || 0, e.top += 1
            }

            function Xo(e, t) {
                const n = t.filter(Yo), r = t.filter(Vo).sort(cn.event.asc), o = {};
                r.forEach((t => {
                    const r = kn(t.getStarts(), "YYYYMMDD");
                    let i = o[r];
                    At()(i) && (i = o[r] = function (e, t, n) {
                        const r = [];
                        return e[t].forEach((e => {
                            n.doWhenHas(e, (e => {
                                r.push(e.top)
                            }))
                        })), r.length > 0 ? Math.max(...r) : 0
                    }(e, r, n)), o[r] = t.top = i + 1
                }))
            }

            function qo(e, t) {
                const {start: n, end: r, andFilters: o = [], alldayFirstMode: i = !1} = t, {events: a, idsOfDay: l} = e,
                    c = Zn.and(...[Wo(n, r)].concat(o)), s = Uo(a.filter(c));
                !function (e) {
                    e.each((e => {
                        const {model: t} = e, n = t.getStarts(), r = t.getEnds();
                        t.hasMultiDates = !Nn(n, r), !t.isAllday && t.hasMultiDates && (e.renderStarts = Cn(n), e.renderEnds = An(r))
                    }))
                }(s), function (e, t, n) {
                    n.each((n => {
                        (n.model.isAllday || n.model.hasMultiDates) && Go(Cn(e), An(t), n)
                    }))
                }(n, r, s);
                const u = s.sort(cn.event.asc), d = zo(s, Ho(u, false), false);
                return Bo(n, r, d, $o), i ? Xo(l, s) : function (e, t) {
                    const n = t.filter(Yo), r = t.filter(Vo).sort(cn.event.asc), o = {};
                    r.forEach((t => {
                        const r = kn(t.getStarts(), "YYYYMMDD");
                        let i = o[r];
                        if (At()(i) && (i = o[r] = [], e[r].forEach((e => {
                            n.doWhenHas(e, (e => {
                                i.push(e.top)
                            }))
                        }))), i.indexOf(t.top) >= 0) {
                            const e = Math.max(...i) + 1;
                            for (let n = 1; n <= e && (t.top = n, !(i.indexOf(t.top) < 0)); n += 1) ;
                        }
                        i.push(t.top)
                    }))
                }(l, s), d
            }

            function Ko(e, t) {
                return 0 === e && 24 === t ? e => e.sort(cn.event.asc) : n => {
                    return n.filter((r = e, o = t, e => {
                        const t = e.getStarts(), n = e.getEnds(), i = t.getTime(), a = n.getTime(), l = t.getFullYear(),
                            c = t.getMonth(), s = t.getDate(), u = new nn(l, c, s).setHours(r),
                            d = new nn(l, c, s).setHours(o);
                        return i >= u && i < d || a > u && a <= d || i < u && a > u || a > d && i < d
                    })).sort(cn.event.asc);
                    var r, o
                }
            }

            function Zo(e, t) {
                const {start: n, end: r, uiModelTimeColl: o, hourStart: i, hourEnd: a} = t, l = function (e, t, n, r) {
                    const o = {};
                    return Qn(t, n).forEach((t => {
                        const n = kn(t, "YYYYMMDD"), i = e[n], a = o[n] = new Zn((e => e.cid()));
                        i && i.length && i.forEach((e => {
                            r.doWhenHas(e, (e => {
                                a.add(e)
                            }))
                        }))
                    }), {}), o
                }(e, n, r, o), c = {}, s = Ko(i, a);
                return Object.entries(l).forEach((e => {
                    let [t, n] = e;
                    const r = zo(n, Ho(s(n), true), true);
                    c[t] = r
                })), c
            }

            function Jo(e, t, n) {
                if (!n || !n.size) return [];
                !function (e) {
                    e.each((e => {
                        const {model: t} = e;
                        t.hasMultiDates = !0, e.renderStarts = Cn(t.getStarts()), e.renderEnds = An(t.getEnds())
                    }))
                }(n), Go(e, t, n);
                const r = n.sort(cn.event.asc), o = zo(n, Ho(r, true), true);
                return Bo(e, t, o), o
            }

            function Qo(e, t, n) {
                const r = Math.max(e, ...t);
                return Math.min(r, ...n)
            }

            function ei(e, t, n) {
                return t * n / e
            }

            function ti(e, t, n) {
                return t <= e && e <= n
            }

            !function (e) {
                e.header = "header", e.footer = "footer"
            }(Lo || (Lo = {}));
            const ni = 22;

            function ri(e, t) {
                e.forEach((e => {
                    e.forEach((e => {
                        e.forEach(((e, n) => {
                            t(e, n)
                        }))
                    }))
                }))
            }

            function oi(e, t) {
                return n => {
                    let {top: r} = n;
                    return e >= r * t
                }
            }

            function ii(e, t, n) {
                return e.filter(function (e, t) {
                    return n => {
                        let {top: r} = n;
                        return e < r * t
                    }
                }(t, n)).length
            }

            function ai(e, t, n) {
                const r = (e => e.filter((e => Rn(e.getDay()))).length)(e), o = e.length, i = r === o,
                    a = n / (t && !i ? 2 * o - r : o), l = e.map((e => {
                        const n = e.getDay();
                        return !t || i || Rn(n) ? a : 2 * a
                    })), c = l.reduce(((e, t, n) => n ? [...e, e[n - 1] + l[n - 1]] : [0]), []);
                return {widthList: l, leftList: c}
            }

            function li(e, t, n) {
                return e.reduce(((e, r, o) => t <= o && o <= n ? e + r : e), 0)
            }

            function ci(e, t) {
                return t.findIndex((t => e >= Cn(t) && e <= An(t)))
            }

            const si = (e, t, n, r) => {
                const {widthList: o} = ai(n, r, 100);
                let i = 0, a = n.length - 1;
                return n.forEach(((n, r) => {
                    n <= e && (i = r), n <= t && (a = r)
                })), {width: li(o, i, a), left: i ? li(o, 0, i - 1) : 0}
            };

            function ui(e, t, n) {
                const {idsOfDay: r} = t, o = qo(t, {start: e[0], end: An(e[e.length - 1])}), i = [];
                ri(o, (t => {
                    const r = t.model.cid();
                    i[r] = function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        const r = e.getStarts(), o = e.getEnds(), {width: i, left: a} = si(r, o, t, n);
                        return e.width = i, e.left = a, e
                    }(t, e, n)
                }));
                const a = Object.keys(r).reduce(((e, t) => {
                    const n = r[t];
                    return e[t] = n.map((e => i[e])).filter((e => !!e)), e
                }), {});
                return {uiModels: Object.values(i), gridDateEventModelMap: a}
            }

            const di = function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return ri(e, (e => {
                    const r = e.getStarts(), o = e.getEnds(), {width: i, left: a} = si(r, o, t, n);
                    e.width = i, e.left = a, e.top += 1
                })), fi(e)
            };

            function fi(e) {
                return e.flatMap((e => e.flatMap((e => (e => e.filter((e => !!e)))(e)))))
            }

            const pi = (e, t, n) => {
                let {narrowWeekend: r, hourStart: o, hourEnd: i, weekStartDate: a, weekEndDate: l} = n;
                const c = function (e, t) {
                    var n, r;
                    const {start: o, end: i, panels: a, andFilters: l = [], options: c} = t, {events: s, idsOfDay: u} = e,
                        d = null !== (n = null == c ? void 0 : c.hourStart) && void 0 !== n ? n : 0,
                        f = null !== (r = null == c ? void 0 : c.hourEnd) && void 0 !== r ? r : 24,
                        p = Zn.and(...[Wo(o, i)].concat(l)), h = Uo(s.filter(p)).groupBy(er);
                    return a.reduce(((e, t) => {
                        const {name: n, type: r} = t;
                        return Bt(h[n]) ? e : {
                            ...e,
                            [n]: "daygrid" === r ? Jo(o, i, h[n]) : Zo(u, {
                                start: o,
                                end: i,
                                uiModelTimeColl: h[n],
                                hourStart: d,
                                hourEnd: f
                            })
                        }
                    }), {milestone: [], task: [], allday: [], time: {}})
                }(t, {
                    start: a,
                    end: l,
                    panels: [{name: "milestone", type: "daygrid", show: !0}, {
                        name: "task",
                        type: "daygrid",
                        show: !0
                    }, {name: "allday", type: "daygrid", show: !0}, {name: "time", type: "timegrid", show: !0}],
                    andFilters: [],
                    options: {hourStart: o, hourEnd: i}
                });
                return Object.keys(c).reduce(((t, n) => {
                    const o = c[n];
                    return {
                        ...t,
                        [n]: Array.isArray(o) ? di(o, e, r) : (i = o, Array.from(new Set(Object.values(i).reduce(((e, t) => e.concat(...fi(t))), []))))
                    };
                    var i
                }), {milestone: [], allday: [], task: [], time: []})
            };

            function hi(e, t) {
                let {workweek: n = !1, visibleWeeksCount: r = 0, startDayOfWeek: o = 0, isAlways6Weeks: i = !0} = t;
                const a = new nn(e), l = r > 0, c = l ? a : Fn(a), s = function (e, t) {
                    const n = In(e);
                    return n.setDate(e.getDate() - t), n
                }(c, c.getDay() - o + (c.getDay() < o ? 7 : 0)), u = s.getDay(), d = function (e) {
                    const t = Fn(e);
                    return t.setMonth(t.getMonth() + 1), t.setDate(t.getDate() - 1), t.setHours(23, 59, 59, 999), t
                }(a).getDate(), f = Un(s, c), p = d + Math.abs(f);
                let h = 6;
                return l ? h = r : !1 === i && (h = Math.ceil(p / 7)), ut()(0, h).map((e => ut()(0, 7).reduce(((t, r) => {
                    const o = 7 * e + r;
                    if (!n || n && !Rn((o + u) % 7)) {
                        const e = Gn(s, o);
                        t.push(e)
                    }
                    return t
                }), [])))
            }

            function mi(e, t) {
                let {startDayOfWeek: n = pn.SUN, workweek: r} = t;
                const o = Cn(e), i = o.getDay() - n;
                return (i >= 0 ? ut()(-i, 7 - i) : ut()(-7 - i, -i)).reduce(((e, t) => {
                    const n = Gn(o, t);
                    return r && Rn(n.getDay()) || e.push(n), e
                }), [])
            }

            function gi(e, t) {
                var n;
                const r = function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        const n = e.length, r = n > 5 && t, o = r ? 100 / (n - 1) : 100 / n;
                        return e.map((e => {
                            const t = r && Rn(e.getDay()) ? o / 2 : o;
                            return {date: e, width: t}
                        })).reduce(((e, t, n) => {
                            const r = e[n - 1];
                            return e.push({...t, left: 0 === n ? 0 : r.left + r.width}), e
                        }), [])
                    }(e, null !== (n = t.narrowWeekend) && void 0 !== n && n), o = 2 * (t.hourEnd - t.hourStart),
                    i = 100 / o;
                return {
                    columns: r, rows: ut()(o).map(((e, n) => {
                        const r = n % 2 == 1, o = t.hourStart + Math.floor(e / 2),
                            a = "".concat(o, ":").concat(r ? "30" : "00").padStart(5, "0"),
                            l = (r ? "".concat(o + 1, ":00") : "".concat(o, ":30")).padStart(5, "0");
                        return {top: i * n, height: i, startTime: a, endTime: l}
                    }))
                }
            }

            function vi(e) {
                let {rowsCount: t, columnsCount: n, container: r, narrowWeekend: o = !1, startDayOfWeek: i = pn.SUN} = e;
                if (Bt(r)) return () => null;
                const a = ut()(i, i + n).map((e => e % 7)), l = o ? a.filter((e => Rn(e))).length : 0;
                return function (e) {
                    const {left: i, top: c, width: s, height: u} = r.getBoundingClientRect(), [d, f] = function (e, t) {
                        let {clientX: n, clientY: r} = e, {left: o, top: i, clientLeft: a, clientTop: l} = t;
                        return [n - o - a, r - i - l]
                    }(e, {left: i, top: c, clientLeft: r.clientLeft, clientTop: r.clientTop});
                    if (d < 0 || f < 0 || d > s || f > u) return null;
                    const p = o ? s / (n - l + 1) : s / n, h = a.map((e => o && Rn(e) ? p / 2 : p)), m = [];
                    h.forEach(((e, t) => {
                        0 === t ? m.push(0) : m.push(m[t - 1] + h[t - 1])
                    }));
                    return {
                        columnIndex: dn(m, (e => d >= e)),
                        rowIndex: (g = t, v = u, y = f, Qo(Math.floor(ei(v, g, y)), [0], [g - 1]))
                    };
                    var g, v, y
                }
            }

            function yi(e) {
                return e.common.gridSelection
            }

            function wi(e) {
                let {type: t, gridSelectionData: n, weekDates: r, narrowWeekend: o} = e;
                const {backgroundColor: i, border: a} = To(yi), {startCellIndex: l, endCellIndex: c} = n, {left: s, width: u} = ((e, t, n, r) => {
                        const {widthList: o} = ai(n, r, 100);
                        return {left: e ? li(o, 0, e - 1) : 0, width: li(o, null != e ? e : 0, t < 0 ? n.length - 1 : t)}
                    })(Math.min(l, c), Math.max(l, c), r, o),
                    d = {left: wt(s), width: wt(u), height: wt(100), backgroundColor: i, border: a};
                return u > 0 ? p("div", {className: yt(t, "grid-selection"), style: d}) : null
            }

            function _i(e, t, n) {
                return {
                    startColumnIndex: n ? t.columnIndex : e.columnIndex,
                    startRowIndex: n ? t.rowIndex : e.rowIndex,
                    endColumnIndex: n ? e.columnIndex : t.columnIndex,
                    endRowIndex: n ? e.rowIndex : t.rowIndex
                }
            }

            const bi = {
                sortSelection: (e, t) => _i(e, t, e.columnIndex > t.columnIndex || e.columnIndex === t.columnIndex && e.rowIndex > t.rowIndex),
                getDateFromCollection: (e, t) => {
                    const n = e;
                    return [jn(n.columns[t.startColumnIndex].date, n.rows[t.startRowIndex].startTime), jn(n.columns[t.endColumnIndex].date, n.rows[t.endRowIndex].endTime)]
                },
                calculateSelection: function (e, t, n) {
                    if (Bt(e)) return null;
                    const {startColumnIndex: r, endColumnIndex: o, endRowIndex: i, startRowIndex: a} = e;
                    if (!ti(t, r, o)) return null;
                    const l = {
                        startRowIndex: a,
                        endRowIndex: i,
                        isSelectingMultipleColumns: r !== o,
                        isStartingColumn: t === r
                    };
                    return r < t && t < o ? (l.startRowIndex = 0, l.endRowIndex = n) : r !== o && (r === t ? l.endRowIndex = n : o === t && (l.startRowIndex = 0)), l
                }
            };
            const xi = {
                sortSelection: (e, t) => _i(e, t, e.rowIndex > t.rowIndex || e.rowIndex === t.rowIndex && e.columnIndex > t.columnIndex),
                getDateFromCollection: (e, t) => {
                    const n = e;
                    return [n[t.startRowIndex][t.startColumnIndex], n[t.endRowIndex][t.endColumnIndex]]
                },
                calculateSelection: function (e, t, n) {
                    if (!(jt(e) && jt(t) && jt(n))) return null;
                    const {startRowIndex: r, startColumnIndex: o, endRowIndex: i, endColumnIndex: a} = e;
                    if (!ti(t, Math.min(r, i), Math.max(r, i))) return null;
                    let l = o, c = a;
                    return r < t && (l = 0), i > t && (c = n - 1), {startCellIndex: l, endCellIndex: c}
                }
            };
            const Di = {
                sortSelection: (e, t) => _i(e, t, e.columnIndex > t.columnIndex),
                getDateFromCollection: (e, t) => {
                    const n = e;
                    return [n[t.startColumnIndex], n[t.endColumnIndex]]
                },
                calculateSelection: function (e) {
                    return jt(e) ? {startCellIndex: e.startColumnIndex, endCellIndex: e.endColumnIndex} : null
                }
            };

            function ki(e) {
                return Di.calculateSelection(e.gridSelection.dayGridWeek)
            }

            function Si(e) {
                let {weekDates: t, narrowWeekend: n} = e;
                const r = Yr(ki);
                return Bt(r) ? null : p(wi, {type: "allday", gridSelectionData: r, weekDates: t, narrowWeekend: n})
            }

            function Ci(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function Ei(e, t) {
                for (var n in e) if ("__source" !== n && !(n in t)) return !0;
                for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
                return !1
            }

            function Ii(e) {
                this.props = e
            }

            function Mi(e, t) {
                function n(e) {
                    var n = this.props.ref, r = n == e.ref;
                    return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : Ei(this.props, e)
                }

                function r(t) {
                    return this.shouldComponentUpdate = n, p(e, t)
                }

                return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
            }

            (Ii.prototype = new g).isPureReactComponent = !0, Ii.prototype.shouldComponentUpdate = function (e, t) {
                return Ei(this.props, e) || Ei(this.state, t)
            };
            var Ni = t.__b;
            t.__b = function (e) {
                e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ni && Ni(e)
            };
            var Ti = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

            function Oi(e) {
                function t(t) {
                    var n = Ci({}, t);
                    return delete n.ref, e(n, t.ref || null)
                }

                return t.$$typeof = Ti, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
            }

            var Pi = t.__e;
            t.__e = function (e, t, n, r) {
                if (e.then) for (var o, i = t; i = i.__;) if ((o = i.__c) && o.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
                Pi(e, t, n, r)
            };
            var Ai = t.unmount;

            function Ri() {
                this.__u = 0, this.t = null, this.__b = null
            }

            function Li(e) {
                var t = e.__.__c;
                return t && t.__a && t.__a(e)
            }

            function Hi() {
                this.u = null, this.o = null
            }

            t.unmount = function (e) {
                var t = e.__c;
                t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Ai && Ai(e)
            }, (Ri.prototype = new g).__c = function (e, t) {
                var n = t.__c, r = this;
                null == r.t && (r.t = []), r.t.push(n);
                var o = Li(r.__v), i = !1, a = function () {
                    i || (i = !0, n.__R = null, o ? o(l) : l())
                };
                n.__R = a;
                var l = function () {
                    if (!--r.__u) {
                        if (r.state.__a) {
                            var e = r.state.__a;
                            r.__v.__k[0] = function e(t, n, r) {
                                return t && (t.__v = null, t.__k = t.__k && t.__k.map((function (t) {
                                    return e(t, n, r)
                                })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                            }(e, e.__c.__P, e.__c.__O)
                        }
                        var t;
                        for (r.setState({__a: r.__b = null}); t = r.t.pop();) t.forceUpdate()
                    }
                }, c = !0 === t.__h;
                r.__u++ || c || r.setState({__a: r.__b = r.__v.__k[0]}), e.then(a, a)
            }, Ri.prototype.componentWillUnmount = function () {
                this.t = []
            }, Ri.prototype.render = function (e, t) {
                if (this.__b) {
                    if (this.__v.__k) {
                        var n = document.createElement("div"), r = this.__v.__k[0].__c;
                        this.__v.__k[0] = function e(t, n, r) {
                            return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function (e) {
                                "function" == typeof e.__c && e.__c()
                            })), t.__c.__H = null), null != (t = Ci({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function (t) {
                                return e(t, n, r)
                            }))), t
                        }(this.__b, n, r.__O = r.__P)
                    }
                    this.__b = null
                }
                var o = t.__a && p(m, null, e.fallback);
                return o && (o.__h = null), [p(m, null, t.__a ? null : e.children), o]
            };
            var Fi = function (e, t, n) {
                if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)) for (n = e.u; n;) {
                    for (; n.length > 3;) n.pop()();
                    if (n[1] < n[0]) break;
                    e.u = n = n[2]
                }
            };

            function zi(e) {
                return this.getChildContext = function () {
                    return e.context
                }, e.children
            }

            function Wi(e) {
                var t = this, n = e.i;
                t.componentWillUnmount = function () {
                    R(null, t.l), t.l = null, t.i = null
                }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
                    nodeType: 1,
                    parentNode: n,
                    childNodes: [],
                    appendChild: function (e) {
                        this.childNodes.push(e), t.i.appendChild(e)
                    },
                    insertBefore: function (e, n) {
                        this.childNodes.push(e), t.i.appendChild(e)
                    },
                    removeChild: function (e) {
                        this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
                    }
                }), R(p(zi, {context: t.context}, e.__v), t.l)) : t.l && t.componentWillUnmount()
            }

            function Bi(e, t) {
                var n = p(Wi, {__v: e, i: t});
                return n.containerInfo = t, n
            }

            (Hi.prototype = new g).__a = function (e) {
                var t = this, n = Li(t.__v), r = t.o.get(e);
                return r[0]++, function (o) {
                    var i = function () {
                        t.props.revealOrder ? (r.push(o), Fi(t, e, r)) : o()
                    };
                    n ? n(i) : i()
                }
            }, Hi.prototype.render = function (e) {
                this.u = null, this.o = new Map;
                var t = D(e.children);
                e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
                for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
                return e.children
            }, Hi.prototype.componentDidUpdate = Hi.prototype.componentDidMount = function () {
                var e = this;
                this.o.forEach((function (t, n) {
                    Fi(e, n, t)
                }))
            };
            var ji = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                Gi = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                Ui = "undefined" != typeof document, Yi = function (e) {
                    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
                };
            g.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function (e) {
                Object.defineProperty(g.prototype, e, {
                    configurable: !0, get: function () {
                        return this["UNSAFE_" + e]
                    }, set: function (t) {
                        Object.defineProperty(this, e, {configurable: !0, writable: !0, value: t})
                    }
                })
            }));
            var Vi = t.event;

            function $i() {
            }

            function Xi() {
                return this.cancelBubble
            }

            function qi() {
                return this.defaultPrevented
            }

            t.event = function (e) {
                return Vi && (e = Vi(e)), e.persist = $i, e.isPropagationStopped = Xi, e.isDefaultPrevented = qi, e.nativeEvent = e
            };
            var Ki = {
                configurable: !0, get: function () {
                    return this.class
                }
            }, Zi = t.vnode;
            t.vnode = function (e) {
                var t = e.type, n = e.props, r = n;
                if ("string" == typeof t) {
                    var o = -1 === t.indexOf("-");
                    for (var i in r = {}, n) {
                        var a = n[i];
                        Ui && "children" === i && "noscript" === t || "value" === i && "defaultValue" in n && null == a || ("defaultValue" === i && "value" in n && null == n.value ? i = "value" : "download" === i && !0 === a ? a = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Yi(n.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && Gi.test(i) ? i = i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === a && (a = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), r[i] && (i = "oninputCapture")), r[i] = a)
                    }
                    "select" == t && r.multiple && Array.isArray(r.value) && (r.value = D(n.children).forEach((function (e) {
                        e.props.selected = -1 != r.value.indexOf(e.props.value)
                    }))), "select" == t && null != r.defaultValue && (r.value = D(n.children).forEach((function (e) {
                        e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
                    }))), e.props = r, n.class != n.className && (Ki.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", Ki))
                }
                e.$$typeof = ji, Zi && Zi(e)
            };
            var Ji = t.__r;
            t.__r = function (e) {
                Ji && Ji(e), e.__c
            };

            function Qi(e) {
                return !!e.__k && (R(null, e), !0)
            }

            function ea(e) {
                let {index: t, exceedCount: n, isClicked: r, onClickExceedCount: o} = e;
                const i = {display: r ? "none" : ""};
                return n && !r ? p("span", {
                    className: yt("weekday-exceed-in-week"),
                    onClick: () => o(t),
                    style: i
                }, p(oo, {template: "weekGridFooterExceed", param: n})) : null
            }

            function ta(e) {
                let {isClicked: t, isClickedIndex: n, onClickCollapseButton: r} = e;
                return t && n ? p("span", {
                    className: yt("weekday-exceed-in-week"),
                    onClick: r
                }, p(oo, {template: "collapseBtnTitle"})) : null
            }

            function na(e) {
                let {width: t, left: n, index: r, exceedCount: o, isClicked: i, onClickExceedCount: a, isClickedIndex: l, onClickCollapseButton: c, isLastCell: s} = e;
                const {borderRight: u, backgroundColor: d} = To(re((e => e.week.dayGrid), [])),
                    f = {width: t, left: n, borderRight: s ? "none" : u, backgroundColor: d};
                return p("div", {className: yt("panel-grid"), style: f}, p(ea, {
                    index: r,
                    exceedCount: o,
                    isClicked: i,
                    onClickExceedCount: a
                }), p(ta, {isClickedIndex: l, isClicked: i, onClickCollapseButton: c}))
            }

            const ra = Mi((function (e) {
                let {uiModels: t, weekDates: n, narrowWeekend: r, height: o, clickedIndex: i, isClickedCount: a, onClickExceedCount: l, onClickCollapseButton: c} = e;
                const {widthList: s, leftList: u} = ai(n, r, 100), d = n.length - 1;
                return p(m, null, n.map(((e, n) => {
                    const r = wt(s[n]), f = wt(u[n]);
                    var h;
                    const m = ii(t.filter((h = e, e => {
                        const t = Cn(e.getStarts()), n = Cn(e.getEnds());
                        return t <= h && h <= n
                    })), o, ni + 2), g = n === i, v = n === d;
                    return p(na, {
                        key: "panel-grid-".concat(e.getDate()),
                        width: r,
                        left: f,
                        index: n,
                        exceedCount: m,
                        isClicked: a,
                        onClickExceedCount: l,
                        isClickedIndex: g,
                        onClickCollapseButton: c,
                        isLastCell: v
                    })
                })))
            }));
            r(7694);

            function oa(e) {
                let {onMouseDown: t} = e;
                return p("span", {
                    className: "".concat(yt("weekday-resize-handle"), " ").concat(yt("handle-y")),
                    onMouseDown: t,
                    "data-testid": "horizontal-event-resize-icon"
                }, p("i", {className: "".concat(yt("icon"), " ").concat(yt("ic-handle-y"))}))
            }

            const ia = H(null), aa = ia.Provider, la = () => {
                    const e = oe(ia);
                    if (At()(e)) throw new Error("LayoutContainerProvider is not found");
                    return e
                }, ca = "panelResizer", sa = (e, t) => "event/".concat(e, "/resize/").concat(t),
                ua = (e, t) => "event/".concat(e, "/move/").concat(t), da = e => "gridSelection/".concat(e);

            function fa(e) {
                return Yr(re((t => t.calendar.calendars.find((t => t.id === e))), [e]))
            }

            function pa(e) {
                var t;
                const n = fa(null !== (t = null == e ? void 0 : e.calendarId) && void 0 !== t ? t : null);
                return ne((() => ({
                    color: null == n ? void 0 : n.color,
                    borderColor: null == n ? void 0 : n.borderColor,
                    backgroundColor: null == n ? void 0 : n.backgroundColor,
                    dragBackgroundColor: null == n ? void 0 : n.dragBackgroundColor
                })), [n])
            }

            let ha;
            !function (e) {
                e.ESCAPE = "Escape"
            }(ha || (ha = {}));
            const ma = {[ha.ESCAPE]: 27};

            function ga(e, t) {
                const n = Vr(), r = te(e), o = te(t);
                Q((() => {
                    r.current = e, o.current = t
                }), [e, t]), Q((() => n.subscribe((e => o.current(e)), (e => r.current(e)))), [e, n])
            }

            function va(e, t) {
                return e.key ? e.key === t : e.keyCode === ma[t]
            }

            function ya(e) {
                return 0 === e
            }

            function wa(e, t, n, r) {
                return Math.abs(e - n) >= 3 || Math.abs(t - r) >= 3
            }

            function _a(e) {
                let {onInit: t, onDragStart: n, onDrag: r, onMouseUp: o, onPressESCKey: i} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const {initDrag: a, setDragging: l, cancelDrag: c, reset: s} = $r("dnd"), u = Vr(),
                    d = te(u.getState().dnd);
                ga(eo, (e => {
                    d.current = e
                }));
                const [f, p] = Z(!1), h = te(null), m = te(null), g = te(null), v = re((n => {
                    ya(n.button) && (n.currentTarget && (n.currentTarget.ondragstart = function () {
                        return !1
                    }), n.preventDefault(), p(!0), a({
                        draggingItemType: e,
                        initX: n.clientX,
                        initY: n.clientY
                    }), null == t || t(n, d.current))
                }), [t, e, a]), y = re((t => {
                    const {initX: o, initY: i, draggingState: a, draggingItemType: c} = d.current;
                    if (c !== e) return p(!1), void s();
                    if (!jt(o) || !jt(i) || wa(o, i, t.clientX, t.clientY)) {
                        if (a <= ar.INIT) return l({x: t.clientX, y: t.clientY}), void (null == n || n(t, d.current));
                        l({x: t.clientX, y: t.clientY}), null == r || r(t, d.current)
                    }
                }), [e, r, n, l, s]), w = re((e => {
                    e.stopPropagation(), f && (null == o || o(e, d.current), p(!1), s())
                }), [f, o, s]), _ = re((e => {
                    va(e, ha.ESCAPE) && (p(!1), c(), null == i || i(e, d.current))
                }), [i, c]);
                return Q((() => {
                    h.current = y, m.current = w, g.current = _
                }), [_, y, w]), Q((() => {
                    const e = e => {
                        var t;
                        return null === (t = h.current) || void 0 === t ? void 0 : t.call(h, e)
                    }, t = e => {
                        var t;
                        return null === (t = m.current) || void 0 === t ? void 0 : t.call(m, e)
                    }, n = e => {
                        var t;
                        return null === (t = g.current) || void 0 === t ? void 0 : t.call(g, e)
                    };
                    return f ? (document.addEventListener("mousemove", e), document.addEventListener("mouseup", t), document.addEventListener("keydown", n), () => {
                        document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", t), document.removeEventListener("keydown", n)
                    }) : Er
                }), [f, s]), v
            }

            function ba(e, t) {
                return e ? t : void 0
            }

            function xa(e) {
                return {vertical: e ? 5 : 2, horizontal: 8}
            }

            function Da(e, t) {
                const n = e ? 0 : "2px", r = t ? 0 : "2px";
                return "".concat(n, " ").concat(r, " ").concat(r, " ").concat(n)
            }

            function ka(e) {
                let {model: t} = e;
                const n = t.calendarId ? "".concat(t.calendarId, "-") : "", r = t.id ? "".concat(t.id, "-") : "";
                return "".concat(n).concat(r).concat(t.title)
            }

            const Sa = {
                eventBody: yt("weekday-event"),
                eventTitle: yt("weekday-event-title"),
                eventDot: yt("weekday-event-dot"),
                moveEvent: yt("dragging--move-event"),
                resizeEvent: yt("dragging--resize-horizontal-event")
            };

            function Ca(e) {
                let {flat: t = !1, uiModel: n, eventHeight: r, headerHeight: o, resizingWidth: i = null, movingLeft: a = null} = e;
                const {currentView: l} = Yr(Jr), {useDetailPopup: c, isReadOnly: s} = Yr(Qr), {setDraggingEventUIModel: u} = $r("dnd"), {showDetailPopup: d} = $r("popup"),
                    f = la(), h = lo(), m = pa(n.model), [g, v] = Z(!1),
                    y = te(null), {isReadOnly: w, id: _, calendarId: b} = n.model, x = !s && !w && Bt(i) && Bt(a),
                    D = e => {
                        u(n), null == f || f.classList.add(e)
                    }, k = e => {
                        v(!1), null == f || f.classList.remove(e)
                    };
                ga(eo, (e => {
                    let {draggingEventUIModel: t, draggingState: r} = e;
                    r === ar.DRAGGING && (null == t ? void 0 : t.cid()) === n.cid() && Bt(i) && Bt(a) ? v(!0) : v(!1)
                })), Q((() => {
                    x && h.fire("afterRenderEvent", n.model.toEventObject())
                }), []);
                const S = _a(sa("dayGrid", "".concat(n.cid())), {
                        onDragStart: () => D(Sa.resizeEvent),
                        onMouseUp: () => k(Sa.resizeEvent),
                        onPressESCKey: () => k(Sa.resizeEvent)
                    }), C = _a(ua("dayGrid", "".concat(n.cid())), {
                        onDragStart: () => {
                            x && D(Sa.moveEvent)
                        }, onMouseUp: (e, r) => {
                            let {draggingState: o} = r;
                            k(Sa.moveEvent);
                            const i = o <= ar.INIT;
                            i && c && y.current && d({
                                event: n.model,
                                eventRect: y.current.getBoundingClientRect()
                            }, t), i && h.fire("clickEvent", {event: n.model.toEventObject(), nativeEvent: e})
                        }, onPressESCKey: () => k(Sa.moveEvent)
                    }), E = !g && "month" === l && "time" === n.model.category && Nn(n.model.start, n.model.end),
                    I = !x || t || g || n.exceedRight, M = function (e) {
                        let {flat: t, uiModel: n, resizingWidth: r, movingLeft: o, eventHeight: i, headerHeight: a} = e;
                        const {top: l, left: c, width: s, model: u} = n, d = xa(t), f = t ? {} : {
                            width: r || wt(s),
                            left: wt(null != o ? o : c),
                            top: (l - 1) * (i + d.vertical) + a,
                            position: "absolute"
                        };
                        return Object.assign(f, u.customStyle)
                    }({uiModel: n, eventHeight: r, headerHeight: o, flat: t, movingLeft: a, resizingWidth: i}),
                    N = function (e) {
                        let {uiModel: t, flat: n, eventHeight: r, isDraggingTarget: o, calendarColor: i} = e;
                        const {exceedLeft: a, exceedRight: l} = t, {color: c, backgroundColor: s, dragBackgroundColor: u, borderColor: d} = xt(t, i),
                            f = {
                                color: c,
                                backgroundColor: o ? u : s,
                                borderLeft: a ? "none" : "3px solid ".concat(d),
                                borderRadius: Da(a, l),
                                overflow: "hidden",
                                height: r,
                                lineHeight: _t(r),
                                opacity: o ? .5 : 1
                            }, p = xa(n);
                        return n ? {marginTop: p.vertical, ...f} : {
                            marginLeft: a ? 0 : p.horizontal,
                            marginRight: l ? 0 : p.horizontal, ...f
                        }
                    }({uiModel: n, flat: t, eventHeight: r, isDraggingTarget: g, calendarColor: m});
                return p("div", {
                    className: yt("weekday-event-block", {
                        "weekday-exceed-left": n.exceedLeft,
                        "weekday-exceed-right": n.exceedRight
                    }), style: M, "data-testid": ba(x, ka(n)), "data-calendar-id": b, "data-event-id": _, ref: y
                }, p("div", {
                    className: Sa.eventBody,
                    style: {...N, backgroundColor: E ? null : N.backgroundColor, borderLeft: E ? null : N.borderLeft},
                    onMouseDown: e => {
                        e.stopPropagation(), C(e)
                    }
                }, E ? p("span", {
                    className: Sa.eventDot,
                    style: {backgroundColor: N.backgroundColor}
                }) : null, p("span", {className: Sa.eventTitle}, p(oo, {
                    template: n.model.category,
                    param: n.model
                })), I ? null : p(oa, {
                    onMouseDown: e => {
                        e.stopPropagation(), x && S(e)
                    }
                })))
            }

            function Ea(e, t) {
                const n = te(e);
                Q((() => {
                    n.current = e
                }), [e]), Q((() => {
                    t && n.current()
                }), [t])
            }

            function Ia(e) {
                const [t, n] = Z(null);
                ga(eo, (t => {
                    if (jt(t.x) && jt(t.y)) {
                        const r = e({clientX: t.x, clientY: t.y});
                        r && n(r)
                    }
                }));
                return [t, re((() => n(null)), [])]
            }

            function Ma(e, t) {
                const [n, r] = Z(!1), [o, i] = Z(!1), [a, l] = Z(null);
                ga(eo, (n => {
                    let {draggingItemType: o, draggingEventUIModel: c, draggingState: s} = n;
                    const u = ((e, t, n) => {
                            return Bt(e) ? null : (r = e, new RegExp("^event/".concat(t, "/").concat(n, "/\\d+$")).test(r) ? un(e.split("/")) : null);
                            var r
                        })(o, e, t), d = Number(u) === (null == c ? void 0 : c.cid()), f = s === ar.IDLE,
                        p = s === ar.CANCELED;
                    Bt(a) && d && l(c), jt(a) && (f || p) && (r(!0), i(p))
                }));
                return {
                    isDraggingEnd: n, isDraggingCanceled: o, draggingEvent: a, clearDraggingEvent: () => {
                        l(null), r(!1), i(!1)
                    }
                }
            }

            function Na(e) {
                let {rowStyleInfo: t, gridPositionFinder: n} = e;
                const {movingEvent: r, movingLeft: o} = function (e) {
                    let {rowStyleInfo: t, gridPositionFinder: n} = e;
                    const r = lo(), {isDraggingEnd: o, isDraggingCanceled: i, draggingEvent: a, clearDraggingEvent: l} = Ma("dayGrid", "move"),
                        c = te(null), [s, u] = Ia(n), {columnIndex: d} = null != s ? s : {},
                        f = ne((() => Bt(a) ? null : t.findIndex((e => {
                            let {left: t} = e;
                            return t === a.left
                        }))), [t, a]), p = ne((() => {
                            if (Bt(d) || Bt(c.current) || Bt(f)) return null;
                            const e = f + d - c.current;
                            return e < 0 ? -t[-e].left : t[e].left
                        }), [d, t, f]);
                    return Q((() => {
                        Bt(c.current) && jt(d) && (c.current = d)
                    }), [d]), Ea((() => {
                        if (!i && jt(a) && jt(d) && jt(p) && d !== c.current && jt(c.current)) {
                            const e = d - c.current, t = new nn(a.model.getStarts()), n = new nn(a.model.getEnds());
                            t.addDate(e), n.addDate(e), r.fire("beforeUpdateEvent", {
                                event: a.model.toEventObject(),
                                changes: {start: t, end: n}
                            })
                        }
                        l(), u(), c.current = null
                    }), o), ne((() => ({movingEvent: a, movingLeft: p})), [p, a])
                }({rowStyleInfo: t, gridPositionFinder: n});
                return Bt(r) ? null : p(Ca, {uiModel: r, eventHeight: ni, headerHeight: 0, movingLeft: o})
            }

            function Ta(e) {
                let {weekDates: t, gridColWidthMap: n, gridPositionFinder: r} = e;
                const o = lo(), {isDraggingEnd: i, isDraggingCanceled: a, draggingEvent: l, clearDraggingEvent: c} = Ma("dayGrid", "resize"), [s, u] = Ia(r), {columnIndex: d} = null != s ? s : {},
                    f = ne((() => {
                        return l ? (n = t, {start: ci((e = l).getStarts(), n), end: ci(e.getEnds(), n)}) : {
                            start: -1,
                            end: -1
                        };
                        var e, n
                    }), [t, l]), p = ne((() => f.start > -1 && jt(d) ? n[f.start][d] : null), [d, n, f.start]);
                return Ea((() => {
                    if (!a && jt(l) && jt(d) && f.start <= d && f.end !== d) {
                        const e = t[d];
                        o.fire("beforeUpdateEvent", {event: l.model.toEventObject(), changes: {end: e}})
                    }
                    u(), c()
                }), i), ne((() => ({resizingEvent: l, resizingWidth: p})), [p, l])
            }

            function Oa(e) {
                let {weekDates: t, gridColWidthMap: n, gridPositionFinder: r} = e;
                const {resizingEvent: o, resizingWidth: i} = Ta({
                    weekDates: t,
                    gridColWidthMap: n,
                    gridPositionFinder: r
                });
                return Bt(o) ? null : p(Ca, {uiModel: o, eventHeight: ni, headerHeight: 0, resizingWidth: i})
            }

            function Pa() {
                const [e, t] = Z(null);
                return [e, re((e => {
                    e && t(e)
                }), [])]
            }

            function Aa(e, t) {
                const [n, r] = Z(0), [o, i] = Z(!1), {updateDayGridRowHeight: a} = $r("weekViewLayout");
                return {
                    clickedIndex: n, isClickedCount: o, onClickExceedCount: re((n => {
                        i(!0), r(n), a({rowName: t, height: (e + 1) * ni})
                    }), [t, e, a]), onClickCollapseButton: re((() => {
                        i(!1), a({rowName: t, height: pt})
                    }), [t, a])
                }
            }

            function Ra(e) {
                let {onClick: t, onDblClick: n, delay: r = 300} = e;
                const o = te(Er), i = e => {
                    o.current = e
                }, a = () => {
                    o.current()
                };
                Q((() => a), []);
                return [e => {
                    a(), function (e, t, n) {
                        let r;
                        const o = i => {
                            if (r || (r = i), i - r >= t) return e(), void n(Er);
                            const a = requestAnimationFrame(o);
                            n((() => cancelAnimationFrame(a)))
                        }, i = requestAnimationFrame(o);
                        n((() => cancelAnimationFrame(i)))
                    }(t.bind(null, e), r, i)
                }, e => {
                    a(), n(e)
                }]
            }

            const La = {dayGridMonth: "month", dayGridWeek: "allday", timeGrid: "time"};

            function Ha(e) {
                let {type: t, selectionSorter: n, dateGetter: r, dateCollection: o, gridPositionFinder: i} = e;
                const {useFormPopup: a, gridSelection: l} = Yr(Qr), {enableDblClick: c, enableClick: s} = l, {setGridSelection: u, addGridSelection: d, clearAll: f} = $r("gridSelection"), {hideAllPopup: p, showFormPopup: h} = $r("popup"),
                    m = lo(), g = la(), [v, y] = Z(null), [w, _] = Z(null), b = te(!1), x = te(null);
                ga(re((e => e.gridSelection[t]), [t]), (e => {
                    x.current = e
                })), ga(eo, (e => {
                    let {draggingState: t, draggingItemType: n} = e;
                    b.current = n === D && t >= ar.INIT
                }));
                const D = da(t), k = e => {
                    const r = i(e);
                    jt(w) && jt(r) && u(t, n(w, r))
                }, [S, C] = Ra({
                    onClick: e => {
                        s && E(e, !0)
                    }, onDblClick: e => {
                        c && E(e, !0)
                    }, delay: 250
                }), E = (e, n) => {
                    if (n && k(e), jt(x.current)) {
                        var i;
                        const [n, l] = function (e, t) {
                            return e < t ? [e, t] : [t, e]
                        }(...r(o, x.current));
                        if (a && jt(v)) {
                            const r = {top: (e.clientY + v.y) / 2, left: (e.clientX + v.x) / 2};
                            h({
                                isCreationPopup: !0,
                                title: "",
                                location: "",
                                start: n,
                                end: l,
                                isAllday: "timeGrid" !== t,
                                isPrivate: !1,
                                popupArrowPointPosition: r,
                                close: f
                            })
                        }
                        const c = ".".concat(yt(La[t]), ".").concat(yt("grid-selection")),
                            s = Array.from(null !== (i = null == g ? void 0 : g.querySelectorAll(c)) && void 0 !== i ? i : []);
                        m.fire("selectDateTime", {
                            start: n.toDate(),
                            end: l.toDate(),
                            isAllday: "timeGrid" !== t,
                            nativeEvent: e,
                            gridSelectionElements: s
                        })
                    }
                }, I = re((() => {
                    y(null), _(null), u(t, null)
                }), [u, t]), M = _a(D, {
                    onInit: e => {
                        a && (y({x: e.clientX, y: e.clientY}), p());
                        const n = i(e);
                        jt(n) && _(n), a || d(t, x.current)
                    }, onDragStart: e => {
                        k(e)
                    }, onDrag: e => {
                        b.current && k(e)
                    }, onMouseUp: (e, t) => {
                        let {draggingState: n} = t;
                        e.stopPropagation();
                        const r = n <= ar.INIT;
                        r ? (e => {
                            const t = e.detail <= 1;
                            (s || c && !t) && (s ? t ? S(e) : C(e) : E(e, !0))
                        })(e) : E(e, r)
                    }, onPressESCKey: I
                });
                return Q((() => I), [I]), M
            }

            function Fa(e) {
                let {events: t, weekDates: n, height: r = pt, options: o = {}, rowStyleInfo: i, gridColWidthMap: a} = e;
                const {isReadOnly: l} = Yr(Qr),
                    c = To(vo), [s, u] = Pa(), {narrowWeekend: d = !1, startDayOfWeek: f = pn.SUN} = o,
                    h = ne((() => Math.max(0, ...t.map((e => {
                        let {top: t} = e;
                        return t
                    })))), [t]), g = ne((() => vi({
                        container: s,
                        rowsCount: 1,
                        columnsCount: n.length,
                        narrowWeekend: d,
                        startDayOfWeek: f
                    })), [s, n.length, d, f]), {clickedIndex: v, isClickedCount: y, onClickExceedCount: w, onClickCollapseButton: _} = Aa(h, "allday"),
                    b = ne((() => t.filter(oi(r, ni + 2)).map((e => p(Ca, {
                        key: "allday-DayEvent-".concat(e.cid()),
                        uiModel: e,
                        eventHeight: ni,
                        headerHeight: 0
                    })))), [t, r]), x = Ha({
                        type: "dayGridWeek",
                        gridPositionFinder: g,
                        dateCollection: n,
                        selectionSorter: Di.sortSelection,
                        dateGetter: Di.getDateFromCollection
                    });
                return p(m, null, p("div", {className: yt("panel-title"), style: c}, p(oo, {
                    template: "alldayTitle",
                    param: "alldayTitle"
                })), p("div", {
                    className: yt("allday-panel"), ref: u, onMouseDown: e => {
                        const t = e.target;
                        !l && t.classList.contains(yt("panel-grid")) && x(e)
                    }
                }, p("div", {className: yt("panel-grid-wrapper")}, p(ra, {
                    uiModels: t,
                    weekDates: n,
                    narrowWeekend: d,
                    height: r,
                    clickedIndex: v,
                    isClickedCount: y,
                    onClickExceedCount: w,
                    onClickCollapseButton: _
                })), p("div", {className: yt("panel-allday-events")}, b), p(Oa, {
                    weekDates: n,
                    gridPositionFinder: g,
                    gridColWidthMap: a
                }), p(Na, {rowStyleInfo: i, gridPositionFinder: g}), p(Si, {weekDates: n, narrowWeekend: d})))
            }

            function za(e) {
                let {events: t, weekDates: n, category: r, height: o = pt, options: i = {}} = e;
                const a = To(vo), l = ne((() => Math.max(0, ...t.map((e => {
                        let {top: t} = e;
                        return t
                    })))), [t]), {narrowWeekend: c = !1} = i,
                    s = "".concat(r, "Title"), {clickedIndex: u, isClickedCount: d, onClickExceedCount: f, onClickCollapseButton: h} = Aa(l, r),
                    g = ne((() => t.filter(oi(o, ni + 2)).map((e => p(Ca, {
                        key: "".concat(r, "-DayEvent-").concat(e.cid()),
                        uiModel: e,
                        eventHeight: ni,
                        headerHeight: 0
                    })))), [r, t, o]);
                return p(m, null, p("div", {className: yt("panel-title"), style: a}, p(oo, {
                    template: s,
                    param: r
                })), p("div", {className: yt("allday-panel")}, p("div", {className: yt("panel-grid-wrapper")}, p(ra, {
                    uiModels: t,
                    weekDates: n,
                    narrowWeekend: c,
                    height: o,
                    clickedIndex: u,
                    isClickedCount: d,
                    onClickExceedCount: f,
                    onClickCollapseButton: h
                })), p("div", {className: yt("panel-".concat(r, "-events"))}, g)))
            }

            const Wa = {
                detailItem: yt("detail-item"),
                detailItemIndent: yt("detail-item", "detail-item-indent"),
                detailItemSeparate: yt("detail-item", "detail-item-separate"),
                sectionDetail: yt("popup-section", "section-detail"),
                content: yt("content"),
                locationIcon: yt("icon", "ic-location-b"),
                repeatIcon: yt("icon", "ic-repeat-b"),
                userIcon: yt("icon", "ic-user-b"),
                stateIcon: yt("icon", "ic-state-b"),
                calendarDotIcon: yt("icon", "calendar-dot")
            };

            function Ba(e) {
                var t, n;
                let {event: r} = e;
                const {location: o, recurrenceRule: i, attendees: a, state: l, calendarId: c, body: s} = r, u = fa(c);
                return p("div", {className: Wa.sectionDetail}, o && p("div", {className: Wa.detailItem}, p("span", {className: Wa.locationIcon}), p("span", {className: Wa.content}, p(oo, {
                    template: "popupDetailLocation",
                    param: r,
                    as: "span"
                }))), i && p("div", {className: Wa.detailItem}, p("span", {className: Wa.repeatIcon}), p("span", {className: Wa.content}, p(oo, {
                    template: "popupDetailRecurrenceRule",
                    param: r,
                    as: "span"
                }))), a && p("div", {className: Wa.detailItemIndent}, p("span", {className: Wa.userIcon}), p("span", {className: Wa.content}, p(oo, {
                    template: "popupDetailAttendees",
                    param: r,
                    as: "span"
                }))), l && p("div", {className: Wa.detailItem}, p("span", {className: Wa.stateIcon}), p("span", {className: Wa.content}, p(oo, {
                    template: "popupDetailState",
                    param: r,
                    as: "span"
                }))), u && p("div", {className: Wa.detailItem}, p("span", {
                    className: Wa.calendarDotIcon,
                    style: {backgroundColor: null !== (t = null == u ? void 0 : u.backgroundColor) && void 0 !== t ? t : ""}
                }), p("span", {className: Wa.content}, null !== (n = null == u ? void 0 : u.name) && void 0 !== n ? n : "")), s && p("div", {className: Wa.detailItemSeparate}, p("span", {className: Wa.content}, p(oo, {
                    template: "popupDetailBody",
                    param: r,
                    as: "span"
                }))))
            }

            const ja = {
                sectionHeader: yt("popup-section", "section-header"),
                content: yt("content"),
                eventTitle: yt("event-title")
            };

            function Ga(e) {
                let {event: t} = e;
                return p("div", {className: ja.sectionHeader}, p("div", {className: ja.eventTitle}, p(oo, {
                    template: "popupDetailTitle",
                    param: t,
                    as: "span"
                })), p("div", {className: ja.content}, p(oo, {template: "popupDetailDate", param: t, as: "span"})))
            }

            const Ua = yt("see-more-popup-slot"), Ya = yt("event-form-popup-slot"), Va = yt("event-detail-popup-slot"),
                $a = ["isPrivate", "isAllday", "isPending", "isFocused", "isVisible", "isReadOnly"];
            let Xa, qa;
            !function (e) {
                e.right = "right", e.left = "left"
            }(Xa || (Xa = {})), function (e) {
                e.top = "top", e.bottom = "bottom"
            }(qa || (qa = {}));
            const Ka = H(null);

            function Za(e) {
                let {children: t} = e;
                const [n, r] = Pa(), [o, i] = Pa(), [a, l] = Pa(), [c, s] = Pa(),
                    u = {container: n, seeMorePopupSlot: o, formPopupSlot: a, detailPopupSlot: c};
                return p(Ka.Provider, {value: u}, t, p("div", {
                    ref: r,
                    className: yt("floating-layer")
                }, p("div", {ref: i, className: Ua}), p("div", {ref: l, className: Ya}), p("div", {
                    ref: s,
                    className: Va
                })))
            }

            const Ja = e => {
                var t;
                const n = oe(Ka);
                if (At()(n)) throw new Error("FloatingLayerProvider is not found");
                return null !== (t = null == n ? void 0 : n[e]) && void 0 !== t ? t : null
            };

            function Qa(e, t, n) {
                return e + n.height > t.top + t.height
            }

            function el(e, t, n) {
                return e + n.width > t.left + t.width
            }

            const tl = e => e.popup[Sr.Form], nl = e => e.popup[Sr.Detail], rl = e => e.popup[Sr.SeeMore], ol = {
                popupContainer: yt("popup-container"),
                detailContainer: yt("detail-container"),
                topLine: yt("popup-top-line"),
                border: yt("popup-arrow-border"),
                fill: yt("popup-arrow-fill"),
                sectionButton: yt("popup-section", "section-button"),
                content: yt("content"),
                editIcon: yt("icon", "ic-edit"),
                deleteIcon: yt("icon", "ic-delete"),
                editButton: yt("edit-button"),
                deleteButton: yt("delete-button"),
                verticalLine: yt("vertical-line")
            };

            function il() {
                const {useFormPopup: e} = Yr(Qr),
                    t = Yr(nl), {event: n, eventRect: r} = null != t ? t : {}, {showFormPopup: o, hideDetailPopup: i} = $r("popup"),
                    a = pa(n), l = la(), c = Ja("detailPopupSlot"), s = lo(),
                    u = te(null), [d, f] = Z({}), [h, m] = Z(0), [g, v] = Z(Xa.left),
                    y = ne((() => yt("popup-arrow", {right: g === Xa.right, left: g === Xa.left})), [g]);
                if (ee((() => {
                    if (u.current && r && l) {
                        const e = l.getBoundingClientRect(),
                            t = u.current.getBoundingClientRect(), [n, o] = function (e, t, n) {
                                let r = e.top + e.height / 2 - n.height / 2, o = e.left + e.width;
                                return Qa(r, t, n) && (r = t.top + t.height - n.height), el(o, t, n) && (o = e.left - n.width), [Math.max(r, t.top) + window.scrollY, Math.max(o, t.left) + window.scrollX]
                            }(r, e, t), {top: i, direction: a} = function (e, t, n) {
                                return {
                                    top: e.top + e.height / 2 + window.scrollY,
                                    direction: e.left + e.width + n.width > t.left + t.width ? Xa.right : Xa.left
                                }
                            }(r, e, t);
                        f({top: n, left: o}), m(i - n - 8), v(a)
                    }
                }), [r, l]), Bt(n) || Bt(r) || Bt(c)) return null;
                const {title: w = "", isAllday: _ = !1, start: b = new nn, end: x = new nn, location: D, state: k, isReadOnly: S, isPrivate: C} = n,
                    E = {top: r.top + r.height / 2, left: r.left + r.width / 2};
                return Bi(p("div", {
                    role: "dialog",
                    className: ol.popupContainer,
                    ref: u,
                    style: d
                }, p("div", {className: ol.detailContainer}, p(Ga, {event: n}), p(Ba, {event: n}), !S && p("div", {className: ol.sectionButton}, p("button", {
                    type: "button",
                    className: ol.editButton,
                    onClick: () => {
                        e ? o({
                            isCreationPopup: !1,
                            event: n,
                            title: w,
                            location: D,
                            start: b,
                            end: x,
                            isAllday: _,
                            isPrivate: C,
                            eventState: k,
                            popupArrowPointPosition: E
                        }) : s.fire("beforeUpdateEvent", {event: n.toEventObject(), changes: {}})
                    }
                }, p("span", {className: ol.editIcon}), p("span", {className: ol.content}, p(oo, {
                    template: "popupEdit",
                    as: "span"
                }))), p("div", {className: ol.verticalLine}), p("button", {
                    type: "button",
                    className: ol.deleteButton,
                    onClick: () => {
                        s.fire("beforeDeleteEvent", n.toEventObject()), i()
                    }
                }, p("span", {className: ol.deleteIcon}), p("span", {className: ol.content}, p(oo, {
                    template: "popupDelete",
                    as: "span"
                }))))), p("div", {
                    className: ol.topLine,
                    style: {backgroundColor: a.backgroundColor}
                }), p("div", {className: y}, p("div", {
                    className: ol.border,
                    style: {top: h}
                }, p("div", {className: ol.fill})))), c)
            }

            const al = {
                dropdownMenu: yt("dropdown-menu"),
                dropdownMenuItem: yt("dropdown-menu-item"),
                dotIcon: yt("icon", "dot"),
                content: yt("content")
            };

            function ll(e) {
                let {index: t, name: n, backgroundColor: r, onClick: o} = e;
                return p("li", {
                    className: al.dropdownMenuItem,
                    onClick: e => o(e, t)
                }, p("span", {
                    className: al.dotIcon,
                    style: {backgroundColor: r}
                }), p("span", {className: al.content}, n))
            }

            function cl(e) {
                let {calendars: t, setOpened: n, onChangeIndex: r} = e;
                const o = (e, t) => {
                    e.stopPropagation(), n(!1), r(t)
                };
                return p("ul", {className: al.dropdownMenu}, t.map(((e, t) => {
                    let {name: n, backgroundColor: r = "000"} = e;
                    return p(ll, {
                        key: "dropdown-".concat(n, "-").concat(t),
                        index: t,
                        name: n,
                        backgroundColor: r,
                        onClick: o
                    })
                })))
            }

            function sl(e) {
                let {children: t, classNames: n = [], onClick: r = Er} = e;
                return p("div", {className: yt("popup-section", ...n), onClick: r}, t)
            }

            function ul() {
                const [e, t] = Z(!1);
                return {isOpened: e, setOpened: t, toggleDropdown: () => t((e => !e))}
            }

            let dl;
            !function (e) {
                e.init = "init", e.setCalendarId = "setCalendarId", e.setTitle = "setTitle", e.setLocation = "setLocation", e.setPrivate = "setPrivate", e.setAllday = "setAllday", e.setState = "setState", e.reset = "reset"
            }(dl || (dl = {}));
            const fl = {title: "", location: "", isAllday: !1, isPrivate: !1, state: "Busy"};

            function pl(e, t) {
                switch (t.type) {
                    case dl.init:
                        return {...fl, ...t.event};
                    case dl.setCalendarId:
                        return {...e, calendarId: t.calendarId};
                    case dl.setTitle:
                        return {...e, title: t.title};
                    case dl.setLocation:
                        return {...e, location: t.location};
                    case dl.setPrivate:
                        return {...e, isPrivate: t.isPrivate};
                    case dl.setAllday:
                        return {...e, isAllday: t.isAllday};
                    case dl.setState:
                        return {...e, state: t.state};
                    case dl.reset:
                        return {...e, ...fl};
                    default:
                        return e
                }
            }

            const hl = {
                popupSection: ["dropdown-section", "calendar-section"],
                popupSectionItem: yt("popup-section-item", "popup-button"),
                dotIcon: yt("icon", "dot"),
                content: yt("content", "event-calendar")
            };

            function ml(e) {
                let {calendars: t, selectedCalendarId: n, formStateDispatch: r} = e;
                const {isOpened: o, setOpened: i, toggleDropdown: a} = ul(),
                    l = t.find((e => e.id === n)), {backgroundColor: c = "", name: s = ""} = null != l ? l : {};
                return p(sl, {onClick: a, classNames: hl.popupSection}, p("button", {
                    type: "button",
                    className: hl.popupSectionItem
                }, p("span", {
                    className: hl.dotIcon,
                    style: {backgroundColor: c}
                }), p("span", {className: hl.content}, s), p("span", {className: yt("icon", "ic-dropdown-arrow", {open: o})})), o && p(cl, {
                    calendars: t,
                    setOpened: i,
                    onChangeIndex: e => r({type: dl.setCalendarId, calendarId: t[e].id})
                }))
            }

            const gl = {closeButton: yt("popup-button", "popup-close"), closeIcon: yt("icon", "ic-close")};

            function vl(e) {
                let {type: t, close: n} = e;
                const {hideAllPopup: r} = $r("popup");
                return p("button", {
                    type: "button", className: gl.closeButton, onClick: () => {
                        r(), Gt(n) && n()
                    }
                }, "moreEvents" === t ? p(oo, {template: "monthMoreClose"}) : p("i", {className: gl.closeIcon}))
            }

            const yl = {confirmButton: yt("popup-button", "popup-confirm")};

            function wl(e) {
                let {children: t} = e;
                return p("button", {type: "submit", className: yl.confirmButton}, p("span", null, t))
            }

            var _l = r(4268), bl = r.n(_l);

            function xl(e) {
                let {template: t, model: n, defaultValue: r = ""} = e;
                const o = Yr(Zr)[t];
                if (Bt(o)) return r;
                let i = o(n);
                return gt()(i) || (i = r), i
            }

            const Dl = {
                datePickerContainer: yt("datepicker-container"),
                datePicker: yt("popup-section-item", "popup-date-picker"),
                allday: yt("popup-section-item", "popup-section-allday"),
                dateIcon: yt("icon", "ic-date"),
                dateDash: yt("popup-date-dash"),
                content: yt("content")
            }, kl = Oi((function (e, t) {
                let {start: n, end: r, isAllday: o = !1, formStateDispatch: i} = e;
                const {usageStatistics: a} = Yr(Qr), l = te(null), c = te(null), s = te(null), u = te(null),
                    d = xl({template: "startDatePlaceholder", defaultValue: "Start Date"}),
                    f = xl({template: "endDatePlaceholder", defaultValue: "End Date"});
                return Q((() => {
                    if (l.current && c.current && s.current && u.current) {
                        const e = new nn(n), i = new nn(r);
                        o && (e.setHours(12, 0, 0), i.setHours(13, 0, 0)), t.current = bl().createRangePicker({
                            startpicker: {
                                date: e.toDate(),
                                input: c.current,
                                container: l.current
                            },
                            endpicker: {date: i.toDate(), input: u.current, container: s.current},
                            format: o ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm",
                            timePicker: !o && {showMeridiem: !1, usageStatistics: a},
                            usageStatistics: a
                        })
                    }
                }), [n, r, o, a, t]), p(sl, null, p("div", {className: Dl.datePicker}, p("span", {className: Dl.dateIcon}), p("input", {
                    name: "start",
                    className: Dl.content,
                    placeholder: d,
                    ref: c
                }), p("div", {
                    className: Dl.datePickerContainer,
                    ref: l
                })), p("span", {className: Dl.dateDash}, "-"), p("div", {className: Dl.datePicker}, p("span", {className: Dl.dateIcon}), p("input", {
                    name: "end",
                    className: Dl.content,
                    placeholder: f,
                    ref: u
                }), p("div", {className: Dl.datePickerContainer, ref: s})), p("div", {
                    className: Dl.allday,
                    onClick: () => i({type: dl.setAllday, isAllday: !o})
                }, p("span", {
                    className: yt("icon", {
                        "ic-checkbox-normal": !o,
                        "ic-checkbox-checked": o
                    })
                }), p("span", {className: Dl.content}, p(oo, {template: "popupIsAllday"})), p("input", {
                    name: "isAllday",
                    type: "checkbox",
                    className: yt("hidden-input"),
                    value: o ? "true" : "false",
                    checked: o
                })))
            })), Sl = ["Busy", "Free"], Cl = {
                popupSectionItem: yt("popup-section-item", "dropdown-menu-item"),
                dropdownMenu: yt("dropdown-menu"),
                icon: yt("icon"),
                content: yt("content")
            };

            function El(e) {
                let {setOpened: t, setEventState: n} = e;
                return p("ul", {className: Cl.dropdownMenu}, Sl.map((e => p("li", {
                    key: e,
                    className: Cl.popupSectionItem,
                    onClick: r => ((e, r) => {
                        e.stopPropagation(), t(!1), n(r)
                    })(r, e)
                }, p("span", {className: Cl.icon}), p("span", {className: Cl.content}, p(oo, "Busy" === e ? {template: "popupStateBusy"} : {template: "popupStateFree"}))))))
            }

            const Il = {
                popupSection: ["dropdown-section", "state-section"],
                popupSectionItem: yt("popup-section-item", "popup-button"),
                stateIcon: yt("icon", "ic-state"),
                arrowIcon: yt("icon", "ic-dropdown-arrow"),
                content: yt("content", "event-state")
            };

            function Ml(e) {
                let {eventState: t = "Busy", formStateDispatch: n} = e;
                const {isOpened: r, setOpened: o, toggleDropdown: i} = ul();
                return p(sl, {onClick: i, classNames: Il.popupSection}, p("button", {
                    type: "button",
                    className: Il.popupSectionItem
                }, p("span", {className: Il.stateIcon}), p("span", {className: Il.content}, p(oo, "Busy" === t ? {template: "popupStateBusy"} : {template: "popupStateFree"})), p("span", {className: Il.arrowIcon})), r && p(El, {
                    setOpened: o,
                    setEventState: e => n({type: dl.setState, state: e})
                }))
            }

            const Nl = {
                popupSectionItem: yt("popup-section-item", "popup-section-location"),
                locationIcon: yt("icon", "ic-location"),
                content: yt("content")
            };

            function Tl(e) {
                let {location: t, formStateDispatch: n} = e;
                const r = xl({template: "locationPlaceholder", defaultValue: "Location"});
                return p(sl, null, p("div", {className: Nl.popupSectionItem}, p("span", {className: Nl.locationIcon}), p("input", {
                    name: "location",
                    className: Nl.content,
                    placeholder: r,
                    value: t,
                    onChange: e => {
                        n({type: dl.setLocation, location: e.currentTarget.value})
                    }
                })))
            }

            const Ol = {
                popupSectionItem: yt("popup-section-item", "popup-section-title"),
                privateButton: yt("popup-section-item", "popup-section-private", "popup-button"),
                titleIcon: yt("icon", "ic-title"),
                content: yt("content")
            };

            function Pl(e) {
                let {title: t, isPrivate: n = !1, formStateDispatch: r} = e;
                const o = xl({template: "titlePlaceholder", defaultValue: "Subject"});
                return p(sl, null, p("div", {className: Ol.popupSectionItem}, p("span", {className: Ol.titleIcon}), p("input", {
                    name: "title",
                    className: Ol.content,
                    placeholder: o,
                    value: t,
                    onChange: e => {
                        r({type: dl.setTitle, title: e.currentTarget.value})
                    },
                    required: !0
                })), p("button", {
                    type: "button",
                    className: Ol.privateButton,
                    onClick: () => r({type: dl.setPrivate, isPrivate: !n})
                }, p("span", {
                    className: yt("icon", {
                        "ic-private": n,
                        "ic-public": !n
                    })
                }), p("input", {
                    name: "isPrivate",
                    type: "checkbox",
                    className: yt("hidden-input"),
                    value: n ? "true" : "false",
                    checked: n
                })))
            }

            const Al = {
                popupContainer: yt("popup-container"),
                formContainer: yt("form-container"),
                popupArrowBorder: yt("popup-arrow-border"),
                popupArrowFill: yt("popup-arrow-fill")
            };

            function Rl() {
                var e;
                const {calendars: t} = Yr(qr), {hideAllPopup: n} = $r("popup"),
                    r = Yr(tl), {start: o, end: i, popupArrowPointPosition: a, close: l, isCreationPopup: c, event: s} = null != r ? r : {},
                    u = lo(),
                    d = Ja("formPopupSlot"), [f, h] = J(pl, {calendarId: null === (e = t[0]) || void 0 === e ? void 0 : e.id, ...fl});
                const m = te(null), g = te(null), [v, y] = Z({}), [w, _] = Z(0), [b, x] = Z(qa.bottom), D = la(),
                    k = ne((() => yt("popup-arrow", {top: b === qa.top, bottom: b === qa.bottom})), [b]);
                if (ee((() => {
                    if (g.current && a && D) {
                        const e = D.getBoundingClientRect(),
                            t = g.current.getBoundingClientRect(), {top: n, left: r, direction: o} = function (e, t, n) {
                                let r = e.top - n.height - 8, o = e.left - n.width / 2, i = qa.bottom;
                                return r < t.top && (i = qa.top, r = e.top + 8), Qa(r, t, n) && (r = t.top + t.height - n.height), el(o, t, n) && (o = t.left + t.width - n.width), {
                                    top: r + window.scrollY,
                                    left: Math.max(o, t.left) + window.scrollX,
                                    direction: i
                                }
                            }(a, e, t), i = a.left - r;
                        y({left: r, top: n}), _(i), x(o)
                    }
                }), [D, a]), Q((() => {
                    jt(r) && jt(s) && h({
                        type: dl.init,
                        event: {
                            title: r.title,
                            location: r.location,
                            isAllday: r.isAllday,
                            isPrivate: r.isPrivate,
                            calendarId: s.calendarId,
                            state: r.eventState
                        }
                    })
                }), [t, s, h, r]), Q((() => {
                    Bt(r) && h({type: dl.reset})
                }), [h, r]), Bt(o) || Bt(i) || Bt(d)) return null;
                return Bi(p("div", {
                    role: "dialog",
                    className: Al.popupContainer,
                    ref: g,
                    style: v
                }, p("form", {
                    onSubmit: e => {
                        var t, r;
                        e.preventDefault();
                        const o = new FormData(e.target), i = {...f};
                        if (o.forEach(((e, t) => {
                            i[t] = function (e) {
                                return -1 !== $a.indexOf(e)
                            }(t) ? "true" === e : e
                        })), i.start = new nn(null === (t = m.current) || void 0 === t ? void 0 : t.getStartDate()), i.end = new nn(null === (r = m.current) || void 0 === r ? void 0 : r.getEndDate()), c) u.fire("beforeCreateEvent", i); else if (s) {
                            const e = function (e, t) {
                                return Object.entries(t).reduce(((t, n) => {
                                    let [r, o] = n;
                                    const i = r;
                                    return e[i] instanceof nn ? 0 !== Mn(e[i], o) && (t[i] = o) : e[i] !== o && (t[i] = o), t
                                }), {})
                            }(s, i);
                            u.fire("beforeUpdateEvent", {event: s.toEventObject(), changes: e})
                        }
                        n()
                    }
                }, p("div", {className: Al.formContainer}, null != t && t.length ? p(ml, {
                    selectedCalendarId: f.calendarId,
                    calendars: t,
                    formStateDispatch: h
                }) : p(sl, null), p(Pl, {
                    title: f.title,
                    isPrivate: f.isPrivate,
                    formStateDispatch: h
                }), p(Tl, {location: f.location, formStateDispatch: h}), p(kl, {
                    start: o,
                    end: i,
                    isAllday: f.isAllday,
                    formStateDispatch: h,
                    ref: m
                }), p(Ml, {eventState: f.state, formStateDispatch: h}), p(vl, {
                    type: "form",
                    close: l
                }), p(sl, null, p(wl, null, p(oo, c ? {template: "popupSave"} : {template: "popupUpdate"})))), p("div", {className: k}, p("div", {
                    className: Al.popupArrowBorder,
                    style: {left: w}
                }, p("div", {className: Al.popupArrowFill}))))), d)
            }

            function Ll(e) {
                return Object.values(e.popup).find((e => jt(e)))
            }

            function Hl() {
                const e = Yr(Ll), {hideAllPopup: t} = $r("popup"), n = jt(e);
                return p("div", {
                    className: yt("popup-overlay"), style: {display: n ? "block" : "none"}, onClick: n => {
                        var r;
                        n.stopPropagation(), null == e || null === (r = e.close) || void 0 === r || r.call(e), t()
                    }
                })
            }

            const Fl = {
                container: yt("see-more-container"),
                seeMore: yt("see-more"),
                header: yt("see-more-header"),
                list: yt("month-more-list")
            };

            function zl() {
                const e = Yr(rl), {date: t, events: n = [], popupPosition: r} = null != e ? e : {}, {moreView: o, moreViewTitle: i} = Oo(),
                    a = Ja("seeMorePopupSlot"), l = lo(), c = te(null), s = Bt(t) || Bt(r) || Bt(a);
                if (Q((() => {
                    !s && c.current && l.fire("clickMoreEventsBtn", {date: t.toDate(), target: c.current})
                }), [t, l, s]), s) return null;
                const u = {height: 44, marginBottom: 12, padding: "12px 17px 0", backgroundColor: i.backgroundColor},
                    d = {ymd: kn(t, "YYYY-MM-DD"), day: t.getDay(), date: t.getDate().toString().padStart(2, "0")},
                    f = {height: "calc(100% - ".concat(68, "px)")};
                return Bi(p("div", {
                    role: "dialog",
                    className: Fl.container,
                    style: r,
                    ref: c
                }, p("div", {className: Fl.seeMore, style: o}, p("div", {
                    className: Fl.header,
                    style: u
                }, p(oo, {
                    template: "monthMoreTitleDate",
                    param: d
                }), p(vl, {type: "moreEvents"})), p("div", {
                    className: Fl.list,
                    style: f
                }, n.map((e => p(Ca, {
                    key: "see-more-event-item-".concat(e.cid()),
                    uiModel: e,
                    eventHeight: ft,
                    headerHeight: 44,
                    flat: !0
                })))))), a)
            }

            function Wl(e, t) {
                const n = {height: wt(100)};
                return e && (n.width = e), t && (n.height = t), n
            }

            function Bl(e) {
                let {children: t, width: n, height: r, className: o = "", autoAdjustPanels: i = !1} = e;
                const {backgroundColor: a} = To(mo), [l, c] = Pa(), {setLastPanelType: s, updateLayoutHeight: u} = $r("weekViewLayout"),
                    d = ne((() => "".concat(yt("layout"), " ").concat(o)), [o]);
                return ee((() => {
                    if (l) {
                        const e = () => u(l.offsetHeight);
                        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }
                    return Er
                }), [l, u]), ee((() => {
                    if (l && i) {
                        const e = D(t), n = e[e.length - 1];
                        gt()(n) || Ft()(n) || Bt(n) || s(n.props.name)
                    }
                }), [t, s, i, l]), p(aa, {value: l}, p("div", {
                    ref: c,
                    className: d,
                    style: {...Wl(n, r), backgroundColor: a}
                }, l ? t : null), p(Rl, null), p(il, null), p(zl, null), p(Hl, null))
            }

            function jl(e) {
                let {name: t, height: n} = e;
                const r = function (e, t) {
                        return {height: e, width: "100%", cursor: "row-resize", borderTop: t, borderBottom: t}
                    }(n, To(re((e => e.week.panelResizer.border), []))),
                    o = {...r, display: "none", border: "none", backgroundColor: "#999"}, [i, a] = Z(o),
                    l = te(null), {updateDayGridRowHeightByDiff: c} = $r("weekViewLayout"), s = _a(ca, {
                        onDragStart: e => {
                            l.current = {left: e.pageX, top: e.pageY}
                        }, onDrag: e => {
                            if (l.current) {
                                const t = e.pageY - l.current.top;
                                a((e => ({...e, top: t, display: null})))
                            }
                        }, onMouseUp: e => {
                            if (l.current) {
                                const n = e.pageY - l.current.top;
                                l.current = null, a(o), c({rowName: t, diff: n})
                            }
                        }
                    });
                return p("div", {style: {position: "relative"}}, p("div", {
                    className: yt("panel-resizer"),
                    style: r,
                    onMouseDown: s
                }), p("div", {className: yt("panel-resizer-guide"), style: i}))
            }

            function Gl(e, t) {
                return t ? Math.min(t, e) : e
            }

            const Ul = Oi((function (e, t) {
                let {name: n, initialWidth: r = pt, initialHeight: o = pt, overflowX: i, overflowY: a, maxExpandableWidth: l, maxExpandableHeight: c, minHeight: s, maxHeight: u, minWidth: d, maxWidth: f, resizerWidth: h = ur, resizerHeight: g = ur, resizable: v, children: y} = e;
                const {updateDayGridRowHeight: w} = $r("weekViewLayout"), {height: _} = Yr(re((e => {
                    var t;
                    return null !== (t = e.weekViewLayout.dayGridRows[n]) && void 0 !== t ? t : {}
                }), [n])), b = null != _ ? _ : o;
                ee((() => {
                    w({rowName: n, height: o})
                }), [o, n, w]);
                const x = function (e) {
                    let {initialHeight: t, initialWidth: n, overflowX: r, overflowY: o, maxExpandableWidth: i, maxExpandableHeight: a, minHeight: l, maxHeight: c, minWidth: s, maxWidth: u} = e;
                    const d = {};
                    return n && (d.width = Gl(n, i), d.height = "100%"), t && (d.width = "100%", d.height = Gl(t, a)), r && (d.overflowX = "auto"), o && (d.overflowY = "auto"), {
                        ...d,
                        minHeight: l,
                        maxHeight: c,
                        minWidth: s,
                        maxWidth: u
                    }
                }({
                    initialWidth: r,
                    initialHeight: b,
                    overflowX: i,
                    overflowY: a,
                    maxExpandableWidth: l,
                    maxExpandableHeight: c,
                    minHeight: s,
                    maxHeight: u,
                    minWidth: d,
                    maxWidth: f
                }), D = ne((() => Bt(v) || Lt()(v) ? !!v : v.includes(n)), [v, n]);
                return p(m, null, p("div", {className: yt("panel", n), style: x, ref: t}, y), D ? p(jl, {
                    name: n,
                    width: h,
                    height: g
                }) : null)
            })), Yl = "timegrid", Vl = e => "".concat(Yl, "-").concat(e), $l = {
                second: "HH:mm:ss",
                minute: "HH:mm",
                hour: "HH:mm",
                date: "HH:mm",
                month: "MM.DD",
                year: "YYYY.MM.DD"
            }, Xl = {
                time: yt("event-time"),
                content: yt("event-time-content"),
                travelTime: yt("travel-time"),
                resizeHandleX: yt("resize-handler-x"),
                moveEvent: yt("dragging--move-event"),
                resizeEvent: yt("dragging--resize-vertical-event")
            };

            function ql(e, t) {
                return gt()(e) ? e : e >= 0 ? "calc(".concat(wt(e), " - ").concat(t, "px)") : ""
            }

            function Kl(e) {
                let {uiModel: t, isDraggingTarget: n, hasNextStartTime: r, calendarColor: o, minHeight: i} = e;
                const {top: a, left: l, height: c, width: s, duplicateLeft: u, duplicateWidth: d, goingDurationHeight: f, modelDurationHeight: p, comingDurationHeight: h, croppedStart: m, croppedEnd: g} = t,
                    v = "white", y = function (e) {
                        const {percent: t, px: n} = bt("".concat(e));
                        return e > 0 || t > 0 || n > 0 ? 2 : 0
                    }(l), {color: w, backgroundColor: _, borderColor: b, dragBackgroundColor: x} = xt(t, o), D = {
                        width: ql(d || s, y),
                        height: "calc(".concat(wt(Math.max(c, i)), " - ").concat(2, "px)"),
                        top: wt(a),
                        left: u || wt(l),
                        borderRadius: 2,
                        borderLeft: "3px solid ".concat(b),
                        marginLeft: y,
                        color: w,
                        backgroundColor: n ? x : _,
                        opacity: n ? .5 : 1,
                        zIndex: r ? 1 : 0
                    }, k = {height: wt(f), borderBottom: "1px dashed ".concat(v)}, S = {height: wt(p)},
                    C = {height: wt(h), borderTop: "1px dashed ".concat(v)};
                return m && (D.borderTopLeftRadius = 0, D.borderTopRightRadius = 0), g && (D.borderBottomLeftRadius = 0, D.borderBottomRightRadius = 0), {
                    containerStyle: D,
                    goingDurationStyle: k,
                    modelDurationStyle: S,
                    comingDurationStyle: C
                }
            }

            function Zl(e) {
                let {uiModel: t, nextStartTime: n, isResizingGuide: r = !1, minHeight: o = 0} = e;
                const {useDetailPopup: i, isReadOnly: a, week: l} = Yr(Qr),
                    c = pa(t.model), {collapseDuplicateEvents: s} = l,
                    u = la(), {showDetailPopup: d} = $r("popup"), {setDraggingEventUIModel: f} = $r("dnd"), {setSelectedDuplicateEventCid: h} = $r("weekViewLayout"),
                    m = lo(),
                    g = te(null), [v, y] = Z(!1), {model: w, goingDurationHeight: _, modelDurationHeight: b, comingDurationHeight: x, croppedEnd: D} = t, {id: k, calendarId: S, customStyle: C} = w,
                    E = jt(n), {containerStyle: I, goingDurationStyle: M, modelDurationStyle: N, comingDurationStyle: T} = Kl({
                        uiModel: t,
                        isDraggingTarget: v,
                        hasNextStartTime: E,
                        calendarColor: c,
                        minHeight: o
                    }), O = E || r;
                ga(eo, (e => {
                    let {draggingEventUIModel: n, draggingState: o} = e;
                    o !== ar.DRAGGING || (null == n ? void 0 : n.cid()) !== t.cid() || E || r ? y(!1) : y(!0)
                })), Q((() => {
                    r || m.fire("afterRenderEvent", t.model.toEventObject())
                }), []);
                const P = e => {
                    f(t), null == u || u.classList.add(e)
                }, A = e => {
                    y(!1), null == u || u.classList.remove(e)
                }, R = _a(ua("timeGrid", "".concat(t.cid())), {
                    onDragStart: () => {
                        H && P(Xl.moveEvent)
                    }, onMouseUp: (e, n) => {
                        let {draggingState: r} = n;
                        A(Xl.moveEvent);
                        const o = r <= ar.INIT;
                        if (o && s) {
                            const e = t.duplicateEvents.length > 0 ? t.cid() : -1;
                            h(e)
                        }
                        o && i && g.current && d({
                            event: t.model,
                            eventRect: g.current.getBoundingClientRect()
                        }, !1), o && m.fire("clickEvent", {event: t.model.toEventObject(), nativeEvent: e})
                    }, onPressESCKey: () => A(Xl.moveEvent)
                }), L = _a(sa("timeGrid", "".concat(t.cid())), {
                    onDragStart: () => P(Xl.resizeEvent),
                    onMouseUp: () => A(Xl.resizeEvent),
                    onPressESCKey: () => A(Xl.resizeEvent)
                }), H = function (e) {
                    let {uiModel: t, isReadOnlyCalendar: n, isDraggingTarget: r, hasNextStartTime: o} = e;
                    const {model: i} = t;
                    return !(n || i.isReadOnly || r || o)
                }({uiModel: t, isReadOnlyCalendar: a, isDraggingTarget: v, hasNextStartTime: E}), F = H && !D;
                return p("div", {
                    "data-testid": "".concat(O ? "guide-" : "", "time-event-").concat(w.title, "-").concat(t.cid()),
                    "data-calendar-id": S,
                    "data-event-id": k,
                    className: Xl.time,
                    style: {...I, ...C},
                    onMouseDown: e => {
                        e.stopPropagation(), R(e)
                    },
                    ref: g
                }, _ ? p("div", {className: Xl.travelTime, style: M}, p(oo, {
                    template: "goingDuration",
                    param: w
                })) : null, b ? p("div", {className: Xl.content, style: N}, p(oo, {
                    template: "time",
                    param: {...w.toEventObject(), start: E ? n : w.start}
                })) : null, x ? p("div", {className: Xl.travelTime, style: T}, p(oo, {
                    template: "comingDuration",
                    param: w
                })) : null, F ? p("div", {
                    className: Xl.resizeHandleX, onMouseDown: e => {
                        e.stopPropagation(), L(e)
                    }
                }) : null)
            }

            function Jl(e) {
                let {top: t, height: n, text: r} = e;
                const {backgroundColor: o, border: i} = To(re((e => e.common.gridSelection), [])),
                    a = To(re((e => e.week.gridSelection.color), [])),
                    l = {top: wt(t), height: wt(n), backgroundColor: o, border: i};
                return p("div", {
                    className: yt("time", "grid-selection"),
                    style: l,
                    "data-testid": "time-grid-selection-".concat(t, "-").concat(n)
                }, r.length > 0 ? p("span", {className: yt("grid-selection-label"), style: {color: a}}, r) : null)
            }

            function Ql(e) {
                let {columnIndex: t, timeGridRows: n} = e;
                const r = Yr(re((e => bi.calculateSelection(e.gridSelection.timeGrid, t, n.length - 1)), [t, n])),
                    o = ne((() => {
                        if (!r) return null;
                        const {startRowIndex: e, endRowIndex: t, isStartingColumn: o, isSelectingMultipleColumns: i} = r, {top: a, startTime: l} = n[e], {top: c, height: s, endTime: u} = n[t],
                            d = c + s - a;
                        let f = "".concat(l, " - ").concat(u);
                        return i && (f = o ? l : ""), {top: a, height: d, text: f}
                    }), [r, n]);
                return Bt(o) ? null : p(Jl, o)
            }

            function ec(e) {
                let {gridPositionFinder: t, totalUIModels: n, columnIndex: r, timeGridData: o} = e;
                const i = function (e) {
                    let {gridPositionFinder: t, totalUIModels: n, columnIndex: r, timeGridData: o} = e;
                    const i = lo(), {isDraggingEnd: a, isDraggingCanceled: l, draggingEvent: c, clearDraggingEvent: s} = Ma("timeGrid", "resize"), [u, d] = Ia(t), [f, p] = Z(null),
                        h = re((() => {
                            p(null), s(), d()
                        }), [d, s]), m = ne((() => {
                            if (Bt(c)) return null;
                            const {columns: e, rows: t} = o, r = n.map((e => e.filter((e => e.cid() === c.cid())))),
                                i = (t, n) => r => {
                                    const i = jn(e[n].date, r.startTime), a = jn(o.columns[n].date, r.endTime);
                                    return i <= t && t < a
                                }, a = r.findIndex((e => e.length > 0)), l = r[a][0], {goingDuration: s = 0} = l.model,
                                u = Bn(l.getStarts(), -s), d = Math.max(t.findIndex(i(u, a)), 0),
                                f = dn(r, (e => e.length > 0)), p = r[f][0], {comingDuration: h = 0} = p.model,
                                m = Bn(p.getStarts(), h);
                            let g = t.findIndex(i(m, f));
                            return g = g >= 0 ? g : t.length - 1, {
                                eventStartDateColumnIndex: a,
                                eventStartDateRowIndex: d,
                                eventEndDateColumnIndex: f,
                                eventEndDateRowIndex: g,
                                resizeTargetUIModelColumns: r
                            }
                        }), [c, o, n]), g = jt(m) && jt(c) && jt(u), v = ne((() => m ? o.rows[0].height : 0), [m, o.rows]);
                    return Q((() => {
                        if (g) {
                            const {eventStartDateRowIndex: e, eventStartDateColumnIndex: t, eventEndDateColumnIndex: n} = m;
                            if (r === n && t === n) {
                                const t = c.clone(), {height: n, goingDurationHeight: r, comingDurationHeight: i} = t,
                                    a = Math.max(v + r * n / 100 + i * n / 100, o.rows[u.rowIndex].top - o.rows[e].top + v),
                                    l = r * n / a, s = i * n / a;
                                t.setUIProps({
                                    height: a,
                                    goingDurationHeight: l,
                                    comingDurationHeight: s,
                                    modelDurationHeight: 100 - (l + s)
                                }), p(t)
                            }
                        }
                    }), [m, g, r, u, c, o.rows, v]), Q((() => {
                        if (g) {
                            const {resizeTargetUIModelColumns: e, eventStartDateColumnIndex: t, eventEndDateColumnIndex: n} = m;
                            if ((r === t || r === n) && t !== n) {
                                let n;
                                r === t ? n = e[r][0].clone() : (n = c.clone(), n.setUIProps({height: o.rows[u.rowIndex].top + v})), p(n)
                            }
                        }
                    }), [m, g, r, u, c, o.rows, v]), Ea((() => {
                        if (!l && jt(m) && jt(u) && jt(c) && m.eventEndDateColumnIndex === r) {
                            const {comingDuration: e = 0} = c.model,
                                t = Bn(jn(o.columns[r].date, o.rows[u.rowIndex].endTime), -e),
                                n = Bn(c.getStarts(), 30);
                            i.fire("beforeUpdateEvent", {event: c.model.toEventObject(), changes: {end: Tn(n, t)}})
                        }
                        h()
                    }), a), f
                }({gridPositionFinder: t, totalUIModels: n, columnIndex: r, timeGridData: o});
                return Bt(i) ? null : p(Zl, {uiModel: i, isResizingGuide: !0})
            }

            const tc = {column: yt("column"), backgrounds: yt("background-events"), events: yt("events")};

            function nc(e) {
                let {eventUIModels: t, minEventHeight: n} = e;
                return p("div", {
                    className: tc.events,
                    style: {marginRight: 8}
                }, t.map((e => p(Zl, {key: "".concat(e.valueOf(), "-").concat(e.cid()), uiModel: e, minHeight: n}))))
            }

            function rc(e) {
                return {
                    defaultBackgroundColor: e.week.dayGrid.backgroundColor,
                    todayBackgroundColor: e.week.today.backgroundColor,
                    weekendBackgroundColor: e.week.weekend.backgroundColor
                }
            }

            const oc = Mi((function (e) {
                let {columnDate: t, columnWidth: n, columnIndex: r, totalUIModels: o, gridPositionFinder: i, timeGridData: a, isLastColumn: l} = e;
                const {rows: c} = a, s = To(re((e => e.week.timeGrid.borderRight), [])), u = To(rc), [, d] = po(),
                    f = function (e) {
                        let {today: t, columnDate: n, defaultBackgroundColor: r, todayBackgroundColor: o, weekendBackgroundColor: i} = e;
                        const a = Nn(t, n), l = Rn(n.getDay());
                        return a ? o : l ? i : r
                    }({today: d(), columnDate: t, ...u}),
                    h = {width: n, backgroundColor: f, borderRight: l ? "none" : s}, m = o[r], g = c[0].height;
                return p("div", {
                    className: tc.column,
                    style: h,
                    "data-testid": "timegrid-column-".concat(t.getDay())
                }, p(nc, {eventUIModels: m, minEventHeight: g}), p(ec, {
                    gridPositionFinder: i,
                    totalUIModels: o,
                    columnIndex: r,
                    timeGridData: a
                }), p(Ql, {columnIndex: r, timeGridRows: c}))
            }));

            function ic(e) {
                return {
                    halfHourLineBorder: e.week.timeGridHalfHourLine.borderBottom,
                    hourLineBorder: e.week.timeGridHourLine.borderBottom
                }
            }

            const ac = Mi((function (e) {
                let {timeGridRows: t} = e;
                const {halfHourLineBorder: n, hourLineBorder: r} = To(ic);
                return p("div", {className: yt("gridlines")}, t.map(((e, t) => {
                    const o = t % 2 == 0;
                    return p("div", {
                        key: "gridline-".concat(e.startTime, "-").concat(e.endTime),
                        className: yt("gridline-half"),
                        style: {top: wt(e.top), height: wt(e.height), borderBottom: o ? n : r},
                        "data-testid": "gridline-".concat(e.startTime, "-").concat(e.endTime)
                    })
                })))
            }));

            function lc(e, t) {
                const n = e.getHours() - t, r = e.getMinutes();
                return 2 * n + Math.floor(r / 30)
            }

            const cc = e => e.dnd.initX, sc = e => e.dnd.initY;

            function uc(e) {
                let {gridPositionFinder: t, timeGridData: n} = e;
                const r = Yr(cc), o = Yr(sc),
                    i = lo(), {isDraggingEnd: a, isDraggingCanceled: l, draggingEvent: c, clearDraggingEvent: s} = Ma("timeGrid", "move"), [u, d] = Ia(t),
                    f = te(null);
                Q((() => {
                    jt(r) && jt(o) && (f.current = t({clientX: r, clientY: o}))
                }), [t, r, o]);
                const p = ne((() => Bt(f.current) || Bt(u) ? null : {
                        columnDiff: u.columnIndex - f.current.columnIndex,
                        rowDiff: u.rowIndex - f.current.rowIndex
                    }), [u]), h = ne((() => Bt(c) ? null : c.getStarts()), [c]), m = re((() => {
                        d(), s(), f.current = null
                    }), [d, s]), g = ne((() => Bt(p) || Bt(h) ? null : Wn(h, p.rowDiff * Dn + p.columnDiff * _n)), [p, h]),
                    v = ne((() => {
                        if (Bt(c) || Bt(u) || Bt(p)) return null;
                        const e = c.clone(), {top: t, height: r} = function (e) {
                            let {draggingEvent: t, columnDiff: n, rowDiff: r, timeGridDataRows: o, currentDate: i} = e;
                            const a = o[0].height, l = a * o.length, c = r * Dn + n * _n,
                                s = Number(o[0].startTime.split(":")[0]), {goingDuration: u = 0, comingDuration: d = 0} = t.model,
                                f = Bn(t.getStarts(), -u), p = Bn(t.getEnds(), d), h = Wn(f, c), m = Wn(p, c),
                                g = Math.max(lc(h, s), 0), v = Math.min(lc(m, s), o.length - 1),
                                y = h.getFullYear() < i.getFullYear() || h.getMonth() < i.getMonth() || h.getDate() < i.getDate(),
                                w = m.getFullYear() > i.getFullYear() || m.getMonth() > i.getMonth() || m.getDate() > i.getDate(),
                                _ = v - (y ? 0 : g);
                            return {top: y ? 0 : o[g].top, height: w ? l : Math.max(_, 1) * a}
                        }({
                            draggingEvent: e,
                            columnDiff: p.columnDiff,
                            rowDiff: p.rowDiff,
                            timeGridDataRows: n.rows,
                            currentDate: n.columns[u.columnIndex].date
                        });
                        return e.setUIProps({
                            left: n.columns[u.columnIndex].left,
                            width: n.columns[u.columnIndex].width,
                            top: t,
                            height: r
                        }), e
                    }), [u, c, p, n.columns, n.rows]);
                return Ea((() => {
                    if (!l && jt(c) && jt(u) && jt(p) && jt(g) && (0 !== p.rowDiff || 0 !== p.columnDiff)) {
                        const e = c.duration(), t = Wn(g, e);
                        i.fire("beforeUpdateEvent", {event: c.model.toEventObject(), changes: {start: g, end: t}})
                    }
                    m()
                }), a), {movingEvent: v, nextStartTime: g}
            }

            function dc(e) {
                let {gridPositionFinder: t, timeGridData: n} = e;
                const {movingEvent: r, nextStartTime: o} = uc({gridPositionFinder: t, timeGridData: n});
                return Bt(r) ? null : p(Zl, {uiModel: r, nextStartTime: o})
            }

            const fc = "timegrid-now-indicator", pc = "timegrid-now-indicator-label", hc = {
                line: yt(Vl("now-indicator")),
                left: yt(Vl("now-indicator-left")),
                marker: yt(Vl("now-indicator-marker")),
                today: yt(Vl("now-indicator-today")),
                right: yt(Vl("now-indicator-right"))
            };

            function mc(e) {
                return {
                    pastBorder: e.week.nowIndicatorPast.border,
                    todayBorder: e.week.nowIndicatorToday.border,
                    futureBorder: e.week.nowIndicatorFuture.border,
                    bulletBackgroundColor: e.week.nowIndicatorBullet.backgroundColor
                }
            }

            function gc(e) {
                let {top: t, columnWidth: n, columnCount: r, columnIndex: o} = e;
                const {pastBorder: i, todayBorder: a, futureBorder: l, bulletBackgroundColor: c} = To(mc), s = la(),
                    u = lo(), d = te(null), f = {left: wt(n * o), width: wt(n * o)},
                    h = {left: wt(n * (o + 1)), width: wt(n * (r - o + 1))};
                return Q((() => {
                    const e = e => {
                        var t;
                        const n = null !== (t = null == s ? void 0 : s.querySelector(".".concat(yt("panel"), ".").concat(yt("time")))) && void 0 !== t ? t : null;
                        if (n && d.current) {
                            const {offsetHeight: t} = n, {offsetTop: r} = d.current, o = r - t / 2;
                            n.scrollTo ? n.scrollTo({top: o, behavior: e}) : n.scrollTop = o
                        }
                    };
                    return u.on("scrollToNow", e), () => u.off("scrollToNow", e)
                }), [u, s]), Q((() => {
                    u.fire("scrollToNow", "smooth")
                }), [u]), p("div", {
                    ref: d,
                    className: hc.line,
                    style: {top: wt(t)},
                    "data-testid": fc
                }, p("div", {
                    className: hc.left,
                    style: {width: f.width, borderTop: i}
                }), p("div", {
                    className: hc.marker,
                    style: {left: f.left, backgroundColor: c}
                }), p("div", {
                    className: hc.today,
                    style: {left: f.left, width: wt(n), borderTop: a}
                }), p("div", {className: hc.right, style: {left: h.left, borderTop: l}}))
            }

            const vc = {now: Vl("current-time"), dayDifference: Vl("day-difference")};

            function yc(e) {
                let {unit: t, top: n, now: r, zonedNow: o} = e;
                const i = To(re((e => e.week.nowIndicatorLabel.color), [])), a = ne((() => Un(o, r)), [o, r]),
                    l = {unit: t, time: o, format: $l[t]};
                return p("div", {
                    className: yt(vc.now),
                    style: {top: wt(n), color: i},
                    "data-testid": pc
                }, 0 !== a && p("span", {className: yt(vc.dayDifference)}, "[".concat(a > 0 ? "+" : "-").concat(Math.abs(a), "]")), p(oo, {
                    template: "timegridNowIndicatorLabel",
                    param: l,
                    as: "span"
                }))
            }

            const wc = e => {
                var t;
                return null !== (t = e.options.month.visibleEventCount) && void 0 !== t ? t : 6
            }, _c = e => e.options.week.showNowIndicator, bc = e => {
                var t;
                return null !== (t = e.options.week.showTimezoneCollapseButton) && void 0 !== t && t
            }, xc = e => {
                var t;
                return null !== (t = e.options.week.timezonesCollapsed) && void 0 !== t && t
            }, Dc = {
                timeColumn: Vl("time-column"),
                hourRows: Vl("hour-rows"),
                time: Vl("time"),
                timeLabel: Vl("time-label"),
                first: Vl("time-first"),
                last: Vl("time-last"),
                hidden: Vl("time-hidden")
            };

            function kc(e) {
                return {
                    primaryTimezoneBackgroundColor: e.week.timeGridLeft.backgroundColor,
                    subTimezoneBackgroundColor: e.week.timeGridLeftAdditionalTimezone.backgroundColor
                }
            }

            function Sc(e) {
                return {pastTimeColor: e.week.pastTime.color, futureTimeColor: e.week.futureTime.color}
            }

            function Cc(e) {
                var t;
                let {rowsInfo: n, isPrimary: r, borderRight: o, width: i, nowIndicatorState: a} = e;
                const l = Yr(_c), {primaryTimezoneBackgroundColor: c, subTimezoneBackgroundColor: s} = To(kc), {pastTimeColor: u, futureTimeColor: d} = To(Sc),
                    f = jt(a) ? Bn(a.now, null !== (t = n[0].diffFromPrimaryTimezone) && void 0 !== t ? t : 0) : null,
                    h = r ? c : s;
                return p("div", {
                    role: "rowgroup",
                    className: yt(Dc.hourRows),
                    style: {width: wt(i), borderRight: o, backgroundColor: h}
                }, n.map((e => {
                    let {date: t, top: n, className: o} = e;
                    const i = jt(f) && t < f ? u : d;
                    return p("div", {
                        key: t.getTime(),
                        className: o,
                        style: {top: wt(n), color: i},
                        role: "row"
                    }, p(oo, {
                        template: "timegridDisplay".concat(r ? "Primary" : "", "Time"),
                        param: {time: t},
                        as: "span"
                    }))
                })), l && jt(a) && jt(f) && p(yc, {unit: "hour", top: a.top, now: a.now, zonedNow: f}))
            }

            const Ec = Mi((function (e) {
                let {timeGridRows: t, nowIndicatorState: n} = e;
                const r = Yr(_c), o = Yr(uo), i = Yr(xc), a = fo(), {width: l, borderRight: c} = To(yo),
                    s = ne((() => t.filter(((e, n) => n % 2 == 0 || n === t.length - 1))), [t]), u = re(((e, t, o) => {
                        const i = 0 === t, a = t === s.length - 1, l = yt(Dc.time, {
                            [Dc.first]: i, [Dc.last]: a, [Dc.hidden]: (e => {
                                let {top: t, height: o} = e;
                                if (!r || Bt(n)) return !1;
                                const i = n.top;
                                return t - o <= i && i <= t + o
                            })(e)
                        });
                        let c = jn(new nn, a ? e.endTime : e.startTime);
                        return jt(o) && (c = Bn(c, o)), {date: c, top: e.top, className: l, diffFromPrimaryTimezone: o}
                    }), [s, n, r]), [d, ...f] = o, h = f.length > 0 ? 100 / (f.length + 1) : 100,
                    m = s.map(((e, t) => u(e, t))), g = ne((() => 0 === f.length ? [] : f.reverse().map((e => {
                        const {timezoneName: t} = e, n = a(d.timezoneName).getTimezoneOffset(),
                            r = a(t).getTimezoneOffset() - n;
                        return s.map(((e, t) => u(e, t, r)))
                    }))), [u, f, d, s, a]);
                return p("div", {
                    className: yt(Dc.timeColumn),
                    style: {width: l},
                    "data-testid": "timegrid-time-column"
                }, !i && g.map((e => p(Cc, {
                    key: e[0].diffFromPrimaryTimezone,
                    rowsInfo: e,
                    isPrimary: !1,
                    borderRight: c,
                    width: h,
                    nowIndicatorState: n
                }))), p(Cc, {rowsInfo: m, isPrimary: !0, borderRight: c, width: i ? 100 : h, nowIndicatorState: n}))
            }));

            function Ic(e, t, n) {
                const r = t.getTime(), o = n.getTime(), i = Qo(e.getTime(), [r], [o]) - r;
                return Qo(ei(o - r, 100, i), [0], [100])
            }

            function Mc(e, t, n, r) {
                const o = Ic(e, n, r);
                return {top: o, height: Ic(t, n, r) - o}
            }

            function Nc(e, t) {
                return n => {
                    const {goingDuration: r = 0, comingDuration: o = 0} = n.model, i = Bn(n.getStarts(), -r);
                    return !(Bn(n.getEnds(), o) <= e || i >= t)
                }
            }

            function Tc(e, t) {
                const {startColumnTime: n, endColumnTime: r, baseWidth: o, columnIndex: i, renderStart: a, renderEnd: l} = t, {duplicateEvents: c} = e, {top: s, height: u} = Mc(a, l, n, r),
                    d = {top: s, left: o * i, width: o, height: Math.max(1, u), duplicateLeft: "", duplicateWidth: ""};
                c.length > 0 && (d.duplicateLeft = function (e, t) {
                    const {duplicateEvents: n, duplicateEventIndex: r} = e, o = n[r - 1];
                    let i = t;
                    if (o) {
                        const {percent: e, px: t} = bt("".concat(o.duplicateLeft)), {percent: n, px: r} = bt("".concat(o.duplicateWidth)),
                            a = e + n, l = t + r + 2;
                        i = 0 !== a ? "calc(".concat(wt(a), " ").concat(l > 0 ? "+" : "-", " ").concat(_t(Math.abs(l)), ")") : _t(l)
                    } else i = wt(i);
                    return i
                }(e, d.left), d.duplicateWidth = function (e, t) {
                    const {collapse: n} = e;
                    return n ? "".concat(9, "px") : "calc(".concat(wt(t), " - ").concat(_t(11 * (e.duplicateEvents.length - 1) + 2), ")")
                }(e, d.width)), e.setUIProps(d)
            }

            function Oc(e) {
                let {uiModel: t, columnIndex: n, baseWidth: r, startColumnTime: o, endColumnTime: i, isDuplicateEvent: a = !1} = e;
                if (!a && t.duplicateEvents.length > 0) return void t.duplicateEvents.forEach((e => {
                    Oc({
                        uiModel: e,
                        columnIndex: n,
                        baseWidth: r,
                        startColumnTime: o,
                        endColumnTime: i,
                        isDuplicateEvent: !0
                    })
                }));
                const l = function (e, t, n, r, o) {
                    const {goingDuration: i = 0, comingDuration: a = 0} = e.model, l = e.getStarts(), c = e.getEnds(),
                        s = Bn(l, -i), u = Bn(c, a);
                    return {
                        baseWidth: n,
                        columnIndex: t,
                        modelStart: l,
                        modelEnd: c,
                        renderStart: Tn(s, r),
                        renderEnd: On(u, o),
                        goingStart: s,
                        comingEnd: u,
                        startColumnTime: r,
                        endColumnTime: o,
                        duplicateEvents: e.duplicateEvents
                    }
                }(t, n, r, o, i);
                Tc(t, l), function (e, t) {
                    const {renderStart: n, renderEnd: r, modelStart: o, modelEnd: i} = t, {goingDuration: a = 0, comingDuration: l = 0} = e.model;
                    let c = 100;
                    if (a > 0) {
                        const {height: t} = Mc(n, o, n, r);
                        e.goingDurationHeight = t, c -= t
                    }
                    if (l > 0) {
                        const {height: t} = Mc(i, r, n, r);
                        e.comingDurationHeight = t, c -= t
                    }
                    e.modelDurationHeight = c
                }(t, l), function (e, t) {
                    const {goingStart: n, comingEnd: r, startColumnTime: o, endColumnTime: i} = t;
                    n < o && (e.croppedStart = !0), r > i && (e.croppedEnd = !0)
                }(t, l)
            }

            function Pc(e, t, n, r, o) {
                const i = e.filter(Kn).filter(Nc(t, n)).sort(cn.event.asc);
                o && function (e, t, n) {
                    const {getDuplicateEvents: r, getMainEvent: o} = t, i = e.map((e => e.model.toEventObject()));
                    e.forEach((t => {
                        if (t.collapse || t.duplicateEvents.length > 0) return;
                        const a = r(t.model.toEventObject(), i);
                        if (a.length <= 1) return;
                        const l = o(a), c = a.map((t => e.find((e => e.cid() === t.__cid)))),
                            s = !!(n > -1 && a.find((e => e.__cid === n))), u = a.reduce(((e, t) => {
                                let {start: n, goingDuration: r} = t;
                                return On(e, Bn(n, -r))
                            }), a[0].start), d = a.reduce(((e, t) => {
                                let {end: n, comingDuration: r} = t;
                                return Tn(e, Bn(n, r))
                            }), a[0].end);
                        c.forEach(((e, t) => {
                            const r = e.cid() === l.__cid, o = !(s && e.cid() === n || !s && r);
                            e.setUIProps({
                                duplicateEvents: c,
                                duplicateEventIndex: t,
                                collapse: o,
                                isMain: r,
                                duplicateStarts: u,
                                duplicateEnds: d
                            })
                        }))
                    }))
                }(i, o, r);
                const a = i.filter((e => !e.collapse));
                return zo(Jn(...a), Ho(a, true), true).forEach((e => {
                    const r = Math.max(...e.map((e => e.length))), o = Math.round(100 / r);
                    e.forEach((e => {
                        e.forEach(((e, r) => {
                            Oc({uiModel: e, columnIndex: r, baseWidth: o, startColumnTime: t, endColumnTime: n})
                        }))
                    }))
                })), i
            }

            const Ac = {timegrid: yt(Yl), scrollArea: yt(Vl("scroll-area"))};

            function Rc(e) {
                let {timeGridData: t, events: n} = e;
                const {isReadOnly: r, week: {narrowWeekend: o, startDayOfWeek: i, collapseDuplicateEvents: a}} = Yr(Qr),
                    l = Yr(_c), c = Yr((e => e.weekViewLayout.selectedDuplicateEventCid)), [, s] = po(),
                    u = function () {
                        const e = te(!0);
                        return Q((() => () => {
                            e.current = !1
                        }), []), re((() => e.current), [])
                    }(), {width: d} = To(yo), [f, h] = Z(null), {columns: m, rows: g} = t, v = m.length - 1,
                    y = ne((() => m.map((e => {
                        let {date: t} = e;
                        return n.filter(Nc(Cn(t), An(t))).map((e => e.clone()))
                    })).map(((e, t) => Pc(e, jn(m[t].date, sn(g).startTime), jn(m[t].date, un(g).endTime), c, a)))), [m, g, n, c, a]),
                    w = ne((() => {
                        const e = s(), n = m.findIndex((t => Nn(t.date, e)));
                        if (n < 0) return null;
                        return {
                            startTime: jn(m[n].date, t.rows[0].startTime),
                            endTime: jn(m[n].date, un(t.rows).endTime),
                            currentDateIndex: n
                        }
                    }), [m, s, t.rows]), [_, b] = Pa(), x = ne((() => vi({
                        rowsCount: g.length,
                        columnsCount: m.length,
                        container: _,
                        narrowWeekend: o,
                        startDayOfWeek: i
                    })), [m.length, _, o, g.length, i]), D = Ha({
                        type: "timeGrid",
                        gridPositionFinder: x,
                        selectionSorter: bi.sortSelection,
                        dateGetter: bi.getDateFromCollection,
                        dateCollection: t
                    }), k = re((() => {
                        if (jt(w)) {
                            const {startTime: e, endTime: t} = w, n = s();
                            e <= n && n <= t && h({top: Ic(n, e, t), now: n})
                        }
                    }), [w, s]);
                return ee((() => {
                    var e;
                    u() && ((null !== (e = null == w ? void 0 : w.currentDateIndex) && void 0 !== e ? e : -1) >= 0 ? k() : h(null))
                }), [w, u, k]), function (e, t) {
                    const n = te(e);
                    Q((() => {
                        n.current = e
                    }), [e]), Q((() => {
                        const e = null != t ? t : -1;
                        if (e > 0) {
                            const t = setInterval((() => n.current()), e);
                            return () => clearInterval(t)
                        }
                    }), [t])
                }(k, jt(w) ? bn : null), p("div", {className: Ac.timegrid}, p("div", {className: Ac.scrollArea}, p(Ec, {
                    timeGridRows: g,
                    nowIndicatorState: f
                }), p("div", {
                    className: yt("columns"),
                    style: {left: d},
                    ref: b,
                    onMouseDown: ba(!r, D)
                }, p(ac, {timeGridRows: g}), p(dc, {
                    gridPositionFinder: x,
                    timeGridData: t
                }), m.map(((e, n) => p(oc, {
                    key: e.date.toString(),
                    timeGridData: t,
                    columnDate: e.date,
                    columnWidth: wt(e.width),
                    columnIndex: n,
                    totalUIModels: y,
                    gridPositionFinder: x,
                    isLastColumn: n === v
                }))), l && jt(w) && jt(f) ? p(gc, {
                    top: f.top,
                    columnWidth: m[0].width,
                    columnCount: m.length,
                    columnIndex: w.currentDateIndex
                }) : null)))
            }

            function Lc(e) {
                let {isCollapsed: t} = e;
                const n = lo(), r = yt("icon", {"ic-arrow-right": t, "ic-arrow-left": !t});
                return p("button", {
                    className: yt(Vl("timezone-collapse-button")),
                    "aria-expanded": !t,
                    onClick: () => n.fire("clickTimezonesCollapseBtn", t)
                }, p("span", {className: r, role: "img"}))
            }

            function Hc() {
                return Hc = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, Hc.apply(this, arguments)
            }

            function Fc(e) {
                let {label: t, offset: n, tooltip: r, width: o = 100, left: i} = e;
                return p("div", {
                    title: r,
                    className: yt(Vl("timezone-label")),
                    style: {width: wt(o), height: wt(100), left: wt(i)},
                    role: "gridcell"
                }, p(oo, {template: "timezoneDisplayLabel", param: {displayLabel: t, timezoneOffset: n}, as: "span"}))
            }

            function zc(e) {
                let {top: t} = e;
                const n = Yr(uo), {width: r} = To(yo),
                    o = fo(), {showTimezoneCollapseButton: i, timezonesCollapsed: a} = function () {
                        const e = Yr(bc), t = Yr(xc);
                        return ne((() => ({showTimezoneCollapseButton: e, timezonesCollapsed: t})), [e, t])
                    }();
                if (n.length <= 1) return null;
                const l = n.map((e => {
                    let {displayLabel: t, timezoneName: n, tooltip: r} = e;
                    return At()(t) ? {
                        label: null,
                        offset: o(n).getTimezoneOffset(),
                        tooltip: null != r ? r : n
                    } : {label: t, offset: null, tooltip: null != r ? r : n}
                })), [c, ...s] = l, u = s.reverse(), d = 100 / (a ? 1 : n.length);
                return p("div", {
                    style: {top: t, width: r},
                    role: "columnheader",
                    className: yt("timezone-labels-slot")
                }, !a && u.map(((e, t) => {
                    var n;
                    return p(Fc, Hc({
                        key: "subTimezone-".concat(null !== (n = e.label) && void 0 !== n ? n : e.offset),
                        width: d,
                        left: d * t
                    }, e))
                })), i && p(Lc, {isCollapsed: a}), p(Fc, Hc({width: d, left: d * u.length}, c)))
            }

            const Wc = {MONTH: "month", WEEK: "week", DAY: "day"}, Bc = ["milestone", "task"], jc = ["allday", "time"];

            function Gc(e, t) {
                const n = [];
                return !0 === e ? n.push(...Bc) : Array.isArray(e) && n.push(...e), !0 === t ? n.push(...jc) : Array.isArray(t) && n.push(...t), n
            }

            function Uc(e) {
                const t = Yr(co), n = fo();
                return ne((() => {
                    if ("Local" === t) return e;
                    const r = $t(new nn), {timedEvents: o = Jn(), totalEvents: i = Jn()} = e.groupBy((e => "time" === e.category ? "timedEvents" : "totalEvents"));
                    return o.each((e => {
                        const o = (a = e, Object.assign(Object.create(Object.getPrototypeOf(a)), a));
                        var a;
                        let l = n(t, o.start), c = n(t, o.end);
                        r ? ($t(l) || (l = l.addHours(1)), $t(c) || (c = c.addHours(1))) : ($t(l) && (l = l.addHours(-1)), $t(c) && (c = c.addHours(-1))), o.start = l, o.end = c, i.add(o)
                    })), i
                }), [e, t, n])
            }

            function Yc(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                const o = ne((() => e.events.filter(Zn.and(...n))), [e.events, n]), i = Uc(o);
                return ne((() => ({...e, events: i})), [e, i])
            }

            function Vc(e, t) {
                ga(eo, (n => {
                    let {y: r, draggingItemType: o, draggingState: i} = n;
                    if (jt(e) && function (e) {
                        return /^(event|gridSelection)\/timeGrid/.test(null != e ? e : "")
                    }(o) && i === ar.DRAGGING && jt(r)) {
                        const {offsetTop: n, offsetHeight: o, scrollHeight: i} = e, a = Math.floor(i / t), l = n + o;
                        if (r < n + a) {
                            const t = r - (n + a);
                            e.scrollTop = Math.max(0, e.scrollTop + t)
                        } else if (r > l - a) {
                            const t = r - (l - a);
                            e.scrollTop = Math.min(o, e.scrollTop + t)
                        }
                    }
                }))
            }

            function $c(e) {
                var t, n, r;
                return null === (t = e.weekViewLayout) || void 0 === t || null === (n = t.dayGridRows) || void 0 === n || null === (r = n.time) || void 0 === r ? void 0 : r.height
            }

            function Xc(e) {
                const t = Yr($c), [n, r] = Z(null);
                return ee((() => {
                    jt(t) && e && r(e.offsetTop)
                }), [t, e]), n
            }

            function qc(e) {
                let {rowIndex: t, weekDates: n, narrowWeekend: r} = e;
                const o = Yr(re((e => e.gridSelection.accumulated.dayGridMonth.map((e => xi.calculateSelection(e, t, n.length)))), [t, n]));
                return p("div", {className: yt("accumulated-grid-selection")}, o.map((e => e ? p(wi, {
                    type: "accumulated",
                    gridSelectionData: e,
                    weekDates: n,
                    narrowWeekend: r
                }) : null)))
            }

            function Kc(e) {
                let {type: t, number: n, onClickButton: r, className: o} = e;
                const {reset: i} = $r("dnd");
                return p("button", {
                    type: "button", onMouseDown: e => {
                        e.stopPropagation()
                    }, onClick: () => {
                        i(), r()
                    }, className: o
                }, p(oo, {template: "monthGrid".concat(t === Lo.header ? "Header" : "Footer", "Exceed"), param: n}))
            }

            function Zc(e) {
                let {date: t, theme: n, renderDate: r, isToday: o} = e;
                const i = t.getDay(),
                    a = r.getMonth() === t.getMonth(), {common: {holiday: l, saturday: c, today: s, dayName: u}, month: {dayExceptThisMonth: d, holidayExceptThisMonth: f}} = n;
                return o ? s.color : Ln(i) ? a ? l.color : f.color : Hn(i) ? a ? c.color : d.color : a ? u.color : d.color
            }

            function Jc() {
                const e = To(mo), t = Oo();
                return ne((() => ({common: e, month: t})), [e, t])
            }

            function Qc(e) {
                let {type: t = Lo.header, exceedCount: n = 0, date: r, onClickExceedCount: o} = e;
                const {renderDate: i} = Yr(Jr), [, a] = po(), l = Jc(), c = l.month.gridCell["".concat(t, "Height")],
                    s = kn(r, "YYYYMMDD"), u = kn(a(), "YYYYMMDD"), d = s === u, f = {
                        date: kn(r, "YYYY-MM-DD"),
                        day: r.getDay(),
                        hiddenEventCount: n,
                        isOtherMonth: r.getMonth() !== i.getMonth(),
                        isToday: s === u,
                        month: r.getMonth(),
                        ymd: s
                    }, h = {color: Zc({date: r, theme: l, isToday: d, renderDate: i})}, m = "monthGrid".concat(pr(t));
                return Bt(c) ? null : p("div", {
                    className: yt("grid-cell-".concat(t)),
                    style: {height: c}
                }, p("span", {className: yt("grid-cell-date"), style: h}, p(oo, {
                    template: m,
                    param: f
                })), n ? p(Kc, {type: t, number: n, onClickButton: o, className: yt("grid-cell-more-events")}) : null)
            }

            function es(e) {
                let {layoutContainer: t, cell: n, popupSize: r} = e;
                const o = function (e, t, n) {
                    const {width: r, height: o, left: i, top: a} = t, {width: l, height: c} = e, s = i + r, u = a + o;
                    let d = n.left + n.width / 2 - l / 2, {top: f} = n;
                    const p = d + l > s, h = f + c > u;
                    return d < i && (d = i), p && (d = s - l), f < a && (f = a), h && (f = u - c), {
                        top: f + window.scrollY,
                        left: d + window.scrollX
                    }
                }(r, t.getBoundingClientRect(), n.getBoundingClientRect());
                return {...r, ...o}
            }

            function ts(e, t, n) {
                const {width: r, height: o} = To(wo), [i, a] = Pa(), [l, c] = Z(null);
                return Q((() => {
                    if (n && t && i) {
                        const a = function (e) {
                                let {grid: t, offsetWidth: n, eventLength: r, layerSize: o} = e;
                                const i = Tr(t).height + 10;
                                let a = n + 10;
                                const {width: l, height: c} = o;
                                a = Math.max(a, 280);
                                let s = 61;
                                return s += r <= 10 ? 26 * r : 260, l && (a = l), c && (s = c), (isNaN(s) || s < i) && (s = i), {
                                    width: a,
                                    height: s
                                }
                            }({grid: t, offsetWidth: i.offsetWidth, eventLength: e, layerSize: {width: r, height: o}}),
                            l = es({cell: i, layoutContainer: n, popupSize: a});
                        c(l)
                    }
                }), [n, i, e, t, r, o]), {popupPosition: l, containerRefCallback: a}
            }

            function ns(e) {
                return e.month.weekend.backgroundColor
            }

            function rs(e) {
                let {date: t, events: n = [], style: r, parentContainer: o, contentAreaHeight: i} = e;
                const a = la(), {showSeeMorePopup: l} = $r("popup"),
                    c = To(ns), {popupPosition: s, containerRefCallback: u} = ts(n.length, o, a), d = re((() => {
                        s && l({date: t, popupPosition: s, events: n})
                    }), [t, n, s, l]), f = ii(n, i, 26);
                return p("div", {
                    className: yt("daygrid-cell"),
                    style: {...r, backgroundColor: Rn(t.getDay()) ? c : "inherit"},
                    ref: u
                }, p(Qc, {type: Lo.header, exceedCount: f, date: t, onClickExceedCount: d}), p(Qc, {
                    type: Lo.footer,
                    exceedCount: f,
                    date: t,
                    onClickExceedCount: d
                }))
            }

            const os = Mi((function (e) {
                let {week: t, rowInfo: n, gridDateEventModelMap: r = {}, contentAreaHeight: o} = e;
                const [i, a] = Pa(), l = To(re((e => e.common.border), []));
                return p("div", {className: yt("weekday-grid"), style: {borderTop: l}, ref: a}, t.map(((e, t) => {
                    const a = e.getDay(), {width: l, left: c} = n[t], s = kn(Cn(e), "YYYYMMDD");
                    return p(rs, {
                        key: "daygrid-cell-".concat(a),
                        date: e,
                        style: {width: wt(l), left: wt(c)},
                        parentContainer: i,
                        events: r[s],
                        contentAreaHeight: o
                    })
                })))
            }));

            function is(e) {
                let {weekDates: t, narrowWeekend: n, rowIndex: r} = e;
                const o = Yr(re((e => xi.calculateSelection(e.gridSelection.dayGridMonth, r, t.length)), [r, t.length]));
                return Bt(o) ? null : p(wi, {type: "month", gridSelectionData: o, weekDates: t, narrowWeekend: n})
            }

            const as = Mi((function (e) {
                let {contentAreaHeight: t, eventHeight: n = ni, events: r, name: o, className: i} = e;
                const {headerHeight: a} = To(_o), l = r.filter(oi(t, n + 2)).map((e => p(Ca, {
                    key: "".concat(o, "-DayEvent-").concat(e.cid()),
                    uiModel: e,
                    eventHeight: n,
                    headerHeight: null != a ? a : 27
                })));
                return p("div", {className: i}, l)
            }));

            function ls(e) {
                let {dateMatrix: t, gridPositionFinder: n, rowInfo: r, rowIndex: o} = e;
                const i = function (e) {
                    let {dateMatrix: t, rowInfo: n, gridPositionFinder: r, rowIndex: o} = e;
                    const i = lo(), {isDraggingEnd: a, isDraggingCanceled: l, draggingEvent: c, clearDraggingEvent: s} = Ma("dayGrid", "move"), [u, d] = Ia(r),
                        f = ne((() => {
                            let e = null;
                            var t, r;
                            return c && (null == u ? void 0 : u.rowIndex) === o && (e = c, e.left = n[null !== (t = null == u ? void 0 : u.columnIndex) && void 0 !== t ? t : 0].left, e.width = n[null !== (r = null == u ? void 0 : u.columnIndex) && void 0 !== r ? r : 0].width), e
                        }), [c, null == u ? void 0 : u.rowIndex, null == u ? void 0 : u.columnIndex, o, n]);
                    return Ea((() => {
                        if (!l && jt(f) && jt(u)) {
                            const e = f.model.getStarts(), n = f.duration(),
                                r = Un(t[u.rowIndex][u.columnIndex], e) * _n, o = new nn(e.getTime() + r),
                                a = new nn(o.getTime() + n);
                            i.fire("beforeUpdateEvent", {event: f.model.toEventObject(), changes: {start: o, end: a}})
                        }
                        s(), d()
                    }), a), f
                }({dateMatrix: t, rowInfo: r, gridPositionFinder: n, rowIndex: o});
                return Bt(i) ? null : p(Ca, {uiModel: i, movingLeft: i.left, eventHeight: ni, headerHeight: 30})
            }

            function cs(e, t) {
                return {startColumnIndex: Math.max(ci(e.getStarts(), t), 0), endColumnIndex: ci(e.getEnds(), t)}
            }

            function ss(e) {
                let {dateMatrix: t, cellWidthMap: n, gridPositionFinder: r, renderedUIModels: o, rowIndex: i} = e;
                const a = function (e) {
                    let {dateMatrix: t, gridPositionFinder: n, renderedUIModels: r, cellWidthMap: o, rowIndex: i} = e;
                    const a = lo(), {isDraggingEnd: l, isDraggingCanceled: c, draggingEvent: s, clearDraggingEvent: u} = Ma("dayGrid", "resize"), [d, f] = Ia(n), [p, h] = Z(null),
                        m = re((() => {
                            h(null), f(), u()
                        }), [f, u]), g = ne((() => {
                            if (Bt(s)) return null;
                            const e = r.map((e => {
                                    let {uiModels: t} = e;
                                    return t.filter((e => e.cid() === s.cid()))
                                })), n = e.findIndex((e => e.length > 0)), o = dn(e, (e => e.length > 0)),
                                i = cs(e[n][0], t[n]), a = cs(e[o][0], t[o]);
                            return {
                                eventStartDateColumnIndex: i.startColumnIndex,
                                eventStartDateRowIndex: n,
                                eventEndDateColumnIndex: a.endColumnIndex,
                                eventEndDateRowIndex: o,
                                resizeTargetUIModelRows: e
                            }
                        }), [t, r, s]), v = jt(g) && jt(s) && jt(d);
                    return Q((() => {
                        if (v && i === g.eventStartDateRowIndex) {
                            const {eventStartDateRowIndex: e, eventStartDateColumnIndex: n} = g,
                                r = g.resizeTargetUIModelRows[e][0].clone();
                            let a;
                            e === d.rowIndex ? a = o[n][Math.max(n, d.columnIndex)] : e > d.rowIndex ? a = o[n][n] : (a = o[n][t[i].length - 1], r.setUIProps({exceedRight: !0})), h([r, a])
                        }
                    }), [g, v, o, d, t, i]), Q((() => {
                        if (v && g.eventStartDateRowIndex < i && i < d.rowIndex) {
                            const e = s.clone();
                            e.setUIProps({left: 0, exceedLeft: !0, exceedRight: !0}), h([e, "100%"])
                        }
                    }), [g, v, d, s, i]), Q((() => {
                        if (v && g.eventStartDateRowIndex < d.rowIndex && i === d.rowIndex) {
                            const e = s.clone();
                            e.setUIProps({left: 0, exceedLeft: !0}), h([e, o[0][d.columnIndex]])
                        }
                    }), [g, v, o, d, s, i]), Q((() => {
                        v && i > g.eventStartDateRowIndex && i > d.rowIndex && h(null)
                    }), [v, d, g, i]), Ea((() => {
                        if (v) {
                            const {eventStartDateColumnIndex: e, eventStartDateRowIndex: n} = g;
                            if (!c && (d.rowIndex === n && d.columnIndex >= e || d.rowIndex > n)) {
                                const e = t[d.rowIndex][d.columnIndex];
                                a.fire("beforeUpdateEvent", {event: s.model.toEventObject(), changes: {end: e}})
                            }
                        }
                        m()
                    }), l), p
                }({dateMatrix: t, gridPositionFinder: r, cellWidthMap: n, renderedUIModels: o, rowIndex: i});
                if (Bt(a)) return null;
                const [l, c] = a;
                return p("div", {className: yt("weekday-events")}, p(Ca, {
                    key: "resizing-event-".concat(l.cid()),
                    uiModel: l,
                    eventHeight: ft,
                    headerHeight: 30,
                    resizingWidth: c
                }))
            }

            function us(e) {
                let {dateMatrix: t = [], rowInfo: n = [], cellWidthMap: r = []} = e;
                const [o, i] = Pa(), a = Yr(qr), {ref: l, cellContentAreaHeight: c} = function (e) {
                        const t = Yr(wc), {headerHeight: n, footerHeight: r} = To(_o), o = te(null), [i, a] = Z(0);
                        return Q((() => {
                            if (o.current) {
                                const i = Tr(o.current).height - (3 + (null != n ? n : 27)) - (null != r ? r : 0),
                                    l = t * (e + 2);
                                a(Math.min(i, l))
                            }
                        }), [r, n, e, t]), {ref: o, cellContentAreaHeight: i}
                    }(ft), {eventFilter: s, month: u, isReadOnly: d} = Yr(Qr), {narrowWeekend: f, startDayOfWeek: h} = u,
                    m = 100 / t.length, g = ne((() => vi({
                        container: o,
                        rowsCount: t.length,
                        columnsCount: t[0].length,
                        narrowWeekend: f,
                        startDayOfWeek: h
                    })), [t, o, f, h]), v = Yc(a, s), y = ne((() => t.map((e => ui(e, v, f)))), [v, t, f]);
                return p("div", {
                    ref: i,
                    onMouseDown: ba(!d, Ha({
                        type: "dayGridMonth",
                        gridPositionFinder: g,
                        dateCollection: t,
                        dateGetter: xi.getDateFromCollection,
                        selectionSorter: xi.sortSelection
                    })),
                    className: yt("month-daygrid")
                }, t.map(((e, o) => {
                    const {uiModels: i, gridDateEventModelMap: a} = y[o];
                    return p("div", {
                        key: "dayGrid-events-".concat(o),
                        className: yt("month-week-item"),
                        style: {height: wt(m)},
                        ref: l
                    }, p("div", {className: yt("weekday")}, p(os, {
                        gridDateEventModelMap: a,
                        week: e,
                        rowInfo: n,
                        contentAreaHeight: c
                    }), p(as, {
                        name: "month",
                        events: i,
                        contentAreaHeight: c,
                        eventHeight: ft,
                        className: yt("weekday-events")
                    }), p(is, {weekDates: e, narrowWeekend: f, rowIndex: o}), p(qc, {
                        rowIndex: o,
                        weekDates: e,
                        narrowWeekend: f
                    })), p(ss, {
                        dateMatrix: t,
                        gridPositionFinder: g,
                        rowIndex: o,
                        cellWidthMap: r,
                        renderedUIModels: y
                    }), p(ls, {dateMatrix: t, gridPositionFinder: g, rowIndex: o, rowInfo: n}))
                })))
            }

            const ds = {
                month: function () {
                    const e = Yr(Qr), {renderDate: t} = Yr(Jr), n = function (e) {
                            const {dayNames: t, startDayOfWeek: n, workweek: r} = e.month,
                                o = [...Array(7)].map(((e, t) => (n + t) % 7)),
                                i = o.map((e => ({day: e, label: pr(t[e])})));
                            return i.filter((e => !r || !Rn(e.day)))
                        }(e), r = e.month, {narrowWeekend: o, startDayOfWeek: i, workweek: a} = r,
                        l = ne((() => hi(t, r)), [r, t]), {rowStyleInfo: c, cellWidthMap: s} = ne((() => zn(n.length, o, i, a)), [n.length, o, i, a]),
                        u = c.map(((e, t) => ({...e, date: l[0][t]})));
                    return p(Bl, {className: yt("month")}, p(Ro, {
                        type: "month",
                        dayNames: n,
                        options: r,
                        rowStyleInfo: c
                    }), p(us, {dateMatrix: l, rowInfo: u, cellWidthMap: s}))
                }, week: function () {
                    var e, t;
                    const {options: n, calendar: r, gridRowLayout: o, lastPanelType: i, renderDate: a} = function () {
                            const e = Yr(Qr),
                                t = Yr(qr), {dayGridRows: n, lastPanelType: r} = Yr(Kr), {renderDate: o} = Yr(Jr);
                            return ne((() => ({
                                options: e,
                                calendar: t,
                                gridRowLayout: n,
                                lastPanelType: r,
                                renderDate: o
                            })), [t, n, r, e, o])
                        }(), l = To(re((e => e.week.dayGridLeft.width), [])), c = Yr(co), [s, u] = Pa(),
                        d = n.week, {narrowWeekend: f, startDayOfWeek: h, workweek: m, hourStart: g, hourEnd: v, eventView: y, taskView: w} = d,
                        _ = ne((() => mi(a, d)), [a, d]),
                        b = gr(_, null !== (e = null === (t = n.week) || void 0 === t ? void 0 : t.dayNames) && void 0 !== e ? e : []), {rowStyleInfo: x, cellWidthMap: D} = zn(_.length, f, h, m),
                        k = Yc(r, n.eventFilter), S = ne((() => {
                            const [e, t] = "Local" === c ? [Cn(sn(_)), An(un(_))] : [Cn(Gn(sn(_), -1)), An(Gn(un(_), 1))];
                            return pi(_, k, {narrowWeekend: f, hourStart: g, hourEnd: v, weekStartDate: e, weekEndDate: t})
                        }), [k, v, g, f, c, _]),
                        C = ne((() => gi(_, {hourStart: g, hourEnd: v, narrowWeekend: f})), [v, g, f, _]), E = Gc(w, y),
                        I = E.map((e => {
                            var t, n;
                            if ("time" === e) return null;
                            const r = e;
                            return p(Ul, {name: r, key: r, resizable: r !== i}, "allday" === r ? p(Fa, {
                                events: S[r],
                                rowStyleInfo: x,
                                gridColWidthMap: D,
                                weekDates: _,
                                height: null === (t = o[r]) || void 0 === t ? void 0 : t.height,
                                options: d
                            }) : p(za, {
                                category: r,
                                events: S[r],
                                weekDates: _,
                                height: null === (n = o[r]) || void 0 === n ? void 0 : n.height,
                                options: d,
                                gridColWidthMap: D
                            }))
                        })), M = ne((() => E.includes("time")), [E]);
                    Vc(s, C.rows.length);
                    const N = Xc(s);
                    return p(Bl, {className: yt("week-view"), autoAdjustPanels: !0}, p(Ul, {
                        name: "week-view-day-names",
                        initialHeight: 44
                    }, p(Ro, {
                        type: "week",
                        dayNames: b,
                        marginLeft: l,
                        options: d,
                        rowStyleInfo: x
                    })), I, M ? p(Ul, {name: "time", autoSize: 1, ref: u}, p(Rc, {
                        events: S.time,
                        timeGridData: C
                    }), p(zc, {top: N})) : null)
                }, day: function () {
                    var e, t;
                    const {calendar: n, options: r, gridRowLayout: o, lastPanelType: i, renderDate: a} = function () {
                            const e = Yr(qr),
                                t = Yr(Qr), {dayGridRows: n, lastPanelType: r} = Yr(Kr), {renderDate: o} = Yr(Jr);
                            return ne((() => ({
                                calendar: e,
                                options: t,
                                gridRowLayout: n,
                                lastPanelType: r,
                                renderDate: o
                            })), [e, t, n, r, o])
                        }(), l = Yr(co), c = To(re((e => e.week.dayGridLeft.width), [])), [s, u] = Pa(),
                        d = r.week, {narrowWeekend: f, startDayOfWeek: h, workweek: m, hourStart: g, hourEnd: v, eventView: y, taskView: w} = d,
                        _ = ne((() => [a]), [a]),
                        b = gr(_, null !== (e = null === (t = r.week) || void 0 === t ? void 0 : t.dayNames) && void 0 !== e ? e : []), {rowStyleInfo: x, cellWidthMap: D} = zn(_.length, f, h, m),
                        k = Yc(n, r.eventFilter), S = ne((() => {
                            const [e, t] = "Local" === l ? [Cn(_[0]), An(_[0])] : [Cn(Gn(_[0], -1)), An(Gn(_[0], 1))];
                            return pi(_, k, {narrowWeekend: f, hourStart: g, hourEnd: v, weekStartDate: e, weekEndDate: t})
                        }), [k, _, v, g, f, l]),
                        C = ne((() => gi(_, {hourStart: g, hourEnd: v, narrowWeekend: f})), [_, v, g, f]), E = Gc(w, y),
                        I = E.map((e => {
                            var t, n;
                            if ("time" === e) return null;
                            const r = e;
                            return p(Ul, {key: r, name: r, resizable: r !== i}, "allday" === r ? p(Fa, {
                                events: S[r],
                                rowStyleInfo: x,
                                gridColWidthMap: D,
                                weekDates: _,
                                height: null === (t = o[r]) || void 0 === t ? void 0 : t.height,
                                options: d
                            }) : p(za, {
                                category: r,
                                events: S[r],
                                weekDates: _,
                                height: null === (n = o[r]) || void 0 === n ? void 0 : n.height,
                                options: d,
                                gridColWidthMap: D
                            }))
                        }));
                    Vc(s, C.rows.length);
                    const M = Xc(s);
                    return p(Bl, {className: yt("day-view"), autoAdjustPanels: !0}, p(Ul, {
                        name: "day-view-day-names",
                        initialHeight: 43
                    }, p(Ro, {
                        type: "week",
                        dayNames: b,
                        marginLeft: c,
                        rowStyleInfo: x
                    })), I, E.includes("time") ? p(Ul, {name: "time", autoSize: 1, ref: u}, p(Rc, {
                        events: S.time,
                        timeGridData: C
                    }), p(zc, {top: M})) : null)
                }
            };

            function fs() {
                const {currentView: e} = Yr(Jr);
                return p(ne((() => ds[e] || (() => null)), [e]), null)
            }

            var ps = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, hs = /[&<>"]/;

            function ms(e) {
                var t = String(e);
                return hs.test(t) ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t
            }

            var gs = function (e, t) {
                return String(e).replace(/(\n+)/g, "$1" + (t || "\t"))
            }, vs = function (e, t, n) {
                return String(e).length > (t || 40) || !n && -1 !== String(e).indexOf("\n") || -1 !== String(e).indexOf("<")
            }, ys = {};

            function ws(e) {
                var t = "";
                for (var n in e) {
                    var r = e[n];
                    null != r && "" !== r && (t && (t += " "), t += "-" == n[0] ? n : ys[n] || (ys[n] = n.replace(/([A-Z])/g, "-$1").toLowerCase()), t += ": ", t += r, "number" == typeof r && !1 === ps.test(n) && (t += "px"), t += ";")
                }
                return t || void 0
            }

            function _s(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function bs(e, t) {
                return Array.isArray(t) ? t.reduce(bs, e) : null != t && !1 !== t && e.push(t), e
            }

            var xs = {shallow: !0}, Ds = [],
                ks = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
                Ss = /[\s\n\\/='"\0<>]/;

            function Cs() {
                this.__d = !0
            }

            Is.render = Is;
            var Es = [];

            function Is(e, n, r) {
                n = n || {}, r = r || {};
                var o = t.__s;
                t.__s = !0;
                var i = Ms(e, n, r);
                return t.__c && t.__c(e, Es), Es.length = 0, t.__s = o, i
            }

            function Ms(e, n, r, o, i, a) {
                if (null == e || "boolean" == typeof e) return "";
                if ("object" != typeof e) return ms(e);
                var l = r.pretty, c = l && "string" == typeof l ? l : "\t";
                if (Array.isArray(e)) {
                    for (var s = "", u = 0; u < e.length; u++) l && u > 0 && (s += "\n"), s += Ms(e[u], n, r, o, i, a);
                    return s
                }
                var d, f = e.type, p = e.props, h = !1;
                if ("function" == typeof f) {
                    if (h = !0, !r.shallow || !o && !1 !== r.renderRootComponent) {
                        if (f === m) {
                            var g = [];
                            return bs(g, e.props.children), Ms(g, n, r, !1 !== r.shallowHighOrder, i, a)
                        }
                        var v, y = e.__c = {
                            __v: e,
                            context: n,
                            props: e.props,
                            setState: Cs,
                            forceUpdate: Cs,
                            __d: !0,
                            __h: []
                        };
                        t.__b && t.__b(e);
                        var w = t.__r;
                        if (f.prototype && "function" == typeof f.prototype.render) {
                            var _ = f.contextType, b = _ && n[_.__c], x = null != _ ? b ? b.props.value : _.__ : n;
                            (y = e.__c = new f(p, x)).__v = e, y._dirty = y.__d = !0, y.props = p, null == y.state && (y.state = {}), null == y._nextState && null == y.__s && (y._nextState = y.__s = y.state), y.context = x, f.getDerivedStateFromProps ? y.state = _s(_s({}, y.state), f.getDerivedStateFromProps(y.props, y.state)) : y.componentWillMount && (y.componentWillMount(), y.state = y._nextState !== y.state ? y._nextState : y.__s !== y.state ? y.__s : y.state), w && w(e), v = y.render(y.props, y.state, y.context)
                        } else for (var D = f.contextType, k = D && n[D.__c], S = null != D ? k ? k.props.value : D.__ : n, C = 0; y.__d && C++ < 25;) y.__d = !1, w && w(e), v = f.call(e.__c, p, S);
                        return y.getChildContext && (n = _s(_s({}, n), y.getChildContext())), t.diffed && t.diffed(e), Ms(v, n, r, !1 !== r.shallowHighOrder, i, a)
                    }
                    f = (d = f).displayName || d !== Function && d.name || function (e) {
                        var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) || "")[1];
                        if (!t) {
                            for (var n = -1, r = Ds.length; r--;) if (Ds[r] === e) {
                                n = r;
                                break
                            }
                            n < 0 && (n = Ds.push(e) - 1), t = "UnnamedComponent" + n
                        }
                        return t
                    }(d)
                }
                var E, I, M = "<" + f;
                if (p) {
                    var N = Object.keys(p);
                    r && !0 === r.sortAttributes && N.sort();
                    for (var T = 0; T < N.length; T++) {
                        var O = N[T], P = p[O];
                        if ("children" !== O) {
                            if (!Ss.test(O) && (r && r.allAttributes || "key" !== O && "ref" !== O && "__self" !== O && "__source" !== O)) {
                                if ("defaultValue" === O) O = "value"; else if ("defaultChecked" === O) O = "checked"; else if ("defaultSelected" === O) O = "selected"; else if ("className" === O) {
                                    if (void 0 !== p.class) continue;
                                    O = "class"
                                } else i && /^xlink:?./.test(O) && (O = O.toLowerCase().replace(/^xlink:?/, "xlink:"));
                                if ("htmlFor" === O) {
                                    if (p.for) continue;
                                    O = "for"
                                }
                                "style" === O && P && "object" == typeof P && (P = ws(P)), "a" === O[0] && "r" === O[1] && "boolean" == typeof P && (P = String(P));
                                var A = r.attributeHook && r.attributeHook(O, P, n, r, h);
                                if (A || "" === A) M += A; else if ("dangerouslySetInnerHTML" === O) I = P && P.__html; else if ("textarea" === f && "value" === O) E = P; else if ((P || 0 === P || "" === P) && "function" != typeof P) {
                                    if (!(!0 !== P && "" !== P || (P = O, r && r.xml))) {
                                        M = M + " " + O;
                                        continue
                                    }
                                    if ("value" === O) {
                                        if ("select" === f) {
                                            a = P;
                                            continue
                                        }
                                        "option" === f && a == P && void 0 === p.selected && (M += " selected")
                                    }
                                    M = M + " " + O + '="' + ms(P) + '"'
                                }
                            }
                        } else E = P
                    }
                }
                if (l) {
                    var R = M.replace(/\n\s*/, " ");
                    R === M || ~R.indexOf("\n") ? l && ~M.indexOf("\n") && (M += "\n") : M = R
                }
                if (M += ">", Ss.test(f)) throw new Error(f + " is not a valid HTML tag name in " + M);
                var L, H = ks.test(f) || r.voidElements && r.voidElements.test(f), F = [];
                if (I) l && vs(I) && (I = "\n" + c + gs(I, c)), M += I; else if (null != E && bs(L = [], E).length) {
                    for (var z = l && ~M.indexOf("\n"), W = !1, B = 0; B < L.length; B++) {
                        var j = L[B];
                        if (null != j && !1 !== j) {
                            var G = Ms(j, n, r, !0, "svg" === f || "foreignObject" !== f && i, a);
                            if (l && !z && vs(G) && (z = !0), G) if (l) {
                                var U = G.length > 0 && "<" != G[0];
                                W && U ? F[F.length - 1] += G : F.push(G), W = U
                            } else F.push(G)
                        }
                    }
                    if (l && z) for (var Y = F.length; Y--;) F[Y] = "\n" + c + gs(F[Y], c)
                }
                if (F.length || I) M += F.join(""); else if (r && r.xml) return M.substring(0, M.length - 1) + " />";
                return !H || L || I ? (l && ~M.indexOf("\n") && (M += "\n"), M = M + "</" + f + ">") : M = M.replace(/>$/, " />"), M
            }

            Is.shallowRender = function (e, t) {
                return Is(e, t, xs)
            };
            var Ns = Is, Ts = r(1391), Os = r.n(Ts);

            function Ps(e) {
                let {theme: t, store: n, eventBus: r, children: o} = e;
                return p(ao, {value: r}, p(Mo, {store: t}, p(Ur, {store: n}, p(Za, null, o))))
            }

            var As = r(2278), Rs = r.n(As);

            class Ls extends (Rs()) {
                on(e, t) {
                    return super.on(e, t), this
                }

                off(e, t) {
                    return super.off(e, t), this
                }

                fire(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return super.fire(e, ...n), this
                }

                once(e, t) {
                    return super.once(e, t), this
                }
            }

            var Hs = class extends class {
                constructor(e) {
                    var t, n;
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.container = gt()(e) ? null !== (t = null === (n = document) || void 0 === n ? void 0 : n.querySelector(e)) && void 0 !== t ? t : null : e, this.theme = function () {
                        return jr(Io(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}))
                    }(r.theme), this.eventBus = new Ls, this.store = function () {
                        return jr(Gr(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}))
                    }(r), this.renderRange = this.calculateRenderRange(Cn()), no().addHook("beforeSanitizeAttributes", (e => {
                        if ("A" === e.tagName) {
                            const t = e.getAttribute("target");
                            t ? e.setAttribute(ro, t) : e.setAttribute("target", "_self")
                        }
                    })), no().addHook("afterSanitizeAttributes", (e => {
                        "A" === e.tagName && e.hasAttribute(ro) && (e.setAttribute("target", e.getAttribute(ro)), e.removeAttribute(ro), "_blank" === e.getAttribute("target") && e.setAttribute("rel", "noopener"))
                    })), !0 === this.getStoreState().options.usageStatistics && Os()("calendar", "UA-129951699-1")
                }

                getStoreState(e) {
                    const t = this.store.getState();
                    return e ? t[e] : t
                }

                getStoreDispatchers(e) {
                    const t = this.store.getState().dispatch;
                    return e ? t[e] : t
                }

                destroy() {
                    this.container && Qi(this.container), this.store.clearListeners(), this.theme.clearListeners(), this.eventBus.off(), no().removeAllHooks();
                    for (const e in this) this.hasOwnProperty(e) && delete this[e]
                }

                calculateMonthRenderDate(e) {
                    let {renderDate: t, offset: n, monthOptions: r} = e, o = new nn(t);
                    const {visibleWeeksCount: i} = r;
                    o = i > 0 ? Gn(o, 7 * n * i) : function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        const n = In(e);
                        if (0 !== t) {
                            const e = n.getDate(), r = new nn(n.getTime());
                            if (r.setMonth(n.getMonth() + t + 1, 0), e >= r.getDate()) return r;
                            n.setFullYear(r.getFullYear(), r.getMonth(), e)
                        }
                        return n
                    }(o, n);
                    const a = hi(o, r), [[l]] = a;
                    return {renderDate: o, renderRange: {start: l, end: un(un(a))}}
                }

                calculateWeekRenderDate(e) {
                    let {renderDate: t, offset: n, weekOptions: r} = e;
                    const o = new nn(t);
                    o.addDate(7 * n);
                    const i = mi(o, r), [a] = i;
                    return {renderDate: o, renderRange: {start: a, end: un(i)}}
                }

                calculateDayRenderDate(e) {
                    let {renderDate: t, offset: n} = e;
                    const r = new nn(t);
                    r.addDate(n);
                    return {renderDate: r, renderRange: {start: Cn(r), end: An(r)}}
                }

                move(e) {
                    if (Bt(e)) return;
                    const {currentView: t, renderDate: n} = this.getStoreState().view, {options: r} = this.getStoreState(), {setRenderDate: o} = this.getStoreDispatchers().view,
                        i = new nn(n);
                    let a = {renderDate: i, renderRange: {start: new nn(i), end: new nn(i)}};
                    "month" === t ? a = this.calculateMonthRenderDate({
                        renderDate: n,
                        offset: e,
                        monthOptions: r.month
                    }) : "week" === t ? a = this.calculateWeekRenderDate({
                        renderDate: n,
                        offset: e,
                        weekOptions: r.week
                    }) : "day" === t && (a = this.calculateDayRenderDate({
                        renderDate: n,
                        offset: e
                    })), o(a.renderDate), this.renderRange = a.renderRange
                }

                createEvents(e) {
                    const {createEvents: t} = this.getStoreDispatchers("calendar");
                    t(e)
                }

                getEventModel(e, t) {
                    const {events: n} = this.getStoreState("calendar");
                    return n.find((n => {
                        let {id: r, calendarId: o} = n;
                        return r === e && o === t
                    }))
                }

                getEvent(e, t) {
                    var n, r;
                    return null !== (n = null === (r = this.getEventModel(e, t)) || void 0 === r ? void 0 : r.toEventObject()) && void 0 !== n ? n : null
                }

                updateEvent(e, t, n) {
                    const {updateEvent: r} = this.getStoreDispatchers("calendar"), o = this.getEventModel(e, t);
                    o && r({event: o, eventData: n})
                }

                deleteEvent(e, t) {
                    const {deleteEvent: n} = this.getStoreDispatchers("calendar"), r = this.getEventModel(e, t);
                    r && n(r)
                }

                setCalendarVisibility(e, t) {
                    const {setCalendarVisibility: n} = this.getStoreDispatchers("calendar");
                    n(Array.isArray(e) ? e : [e], t)
                }

                render() {
                    return jt(this.container) && R(p(Ps, {
                        theme: this.theme,
                        store: this.store,
                        eventBus: this.eventBus
                    }, this.getComponent()), this.container), this
                }

                renderToString() {
                    return Ns(p(Ps, {
                        theme: this.theme,
                        store: this.store,
                        eventBus: this.eventBus
                    }, this.getComponent()))
                }

                clear() {
                    const {clearEvents: e} = this.getStoreDispatchers("calendar");
                    e()
                }

                scrollToNow() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto";
                    this.eventBus.fire("scrollToNow", e)
                }

                calculateRenderRange(e) {
                    const {currentView: t} = this.getStoreState().view, {options: n} = this.getStoreState(),
                        r = new nn(e);
                    let o = {start: new nn(r), end: new nn(r)};
                    return "month" === t ? o = this.calculateMonthRenderDate({
                        renderDate: e,
                        offset: 0,
                        monthOptions: n.month
                    }).renderRange : "week" === t ? o = this.calculateWeekRenderDate({
                        renderDate: e,
                        offset: 0,
                        weekOptions: n.week
                    }).renderRange : "day" === t && (o = this.calculateDayRenderDate({
                        renderDate: e,
                        offset: 0
                    }).renderRange), o
                }

                today() {
                    const {setRenderDate: e} = this.getStoreDispatchers().view, t = new nn;
                    e(t), this.renderRange = this.calculateRenderRange(t)
                }

                setDate(e) {
                    const {setRenderDate: t} = this.getStoreDispatchers("view"), n = new nn(e);
                    t(n), this.renderRange = this.calculateRenderRange(n)
                }

                next() {
                    this.move(1)
                }

                prev() {
                    this.move(-1)
                }

                setCalendarColor(e, t) {
                    const {setCalendarColor: n} = this.getStoreDispatchers().calendar;
                    n(e, t)
                }

                changeView(e) {
                    const {changeView: t} = this.getStoreDispatchers("view");
                    t(e), this.renderRange = this.calculateRenderRange(this.getDate())
                }

                getElement(e, t) {
                    return this.getEvent(e, t) && this.container ? this.container.querySelector('[data-event-id="'.concat(e, '"][data-calendar-id="').concat(t, '"]')) : null
                }

                setTheme(e) {
                    const {setTheme: t} = this.theme.getState().dispatch;
                    t(e)
                }

                getOptions() {
                    const {options: e, template: t} = this.getStoreState(), {dispatch: n, ...r} = this.theme.getState();
                    return {...e, template: t, theme: r}
                }

                setOptions(e) {
                    const {theme: t, template: n, ...r} = e, {setTheme: o} = this.theme.getState().dispatch, {options: {setOptions: i}, template: {setTemplate: a}} = this.getStoreDispatchers();
                    jt(t) && o(t), jt(n) && a(n), i(r)
                }

                getDate() {
                    const {renderDate: e} = this.getStoreState().view;
                    return e
                }

                getDateRangeStart() {
                    return this.renderRange.start
                }

                getDateRangeEnd() {
                    return this.renderRange.end
                }

                getViewName() {
                    const {currentView: e} = this.getStoreState("view");
                    return e
                }

                setCalendars(e) {
                    const {setCalendars: t} = this.getStoreDispatchers().calendar;
                    t(e)
                }

                openFormPopup(e) {
                    const {showFormPopup: t} = this.getStoreDispatchers().popup,
                        n = new qn(e), {title: r, location: o, start: i, end: a, isAllday: l, isPrivate: c, state: s} = n;
                    t({
                        isCreationPopup: !0,
                        event: n,
                        title: r,
                        location: o,
                        start: i,
                        end: a,
                        isAllday: l,
                        isPrivate: c,
                        eventState: s
                    })
                }

                clearGridSelections() {
                    const {clearAll: e} = this.getStoreDispatchers().gridSelection;
                    e()
                }

                fire(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return this.eventBus.fire(e, ...n), this
                }

                off(e, t) {
                    return this.eventBus.off(e, t), this
                }

                on(e, t) {
                    return this.eventBus.on(e, t), this
                }

                once(e, t) {
                    return this.eventBus.once(e, t), this
                }
            } {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(e, t);
                    const {defaultView: n = "week"} = t;
                    if (r = n, !Object.values(Wc).find((e => e === r))) throw new Tt(n);
                    var r;
                    this.render()
                }

                getComponent() {
                    return p(fs, null)
                }
            }
        }(), o = o.default
    }()
}));