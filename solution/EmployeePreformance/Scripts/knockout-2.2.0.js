﻿// Knockout JavaScript library v2.2.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function () {
    function i(v) { throw v; } var l = !0, n = null, q = !1; function t(v) { return function () { return v } }; var w = window, x = document, fa = navigator, E = window.jQuery, H = void 0;
    function K(v) {
        function ga(a, d, c, e, f) { var g = [], a = b.j(function () { var a = d(c, f) || []; 0 < g.length && (b.a.Xa(L(g), a), e && b.r.K(e, n, [c, a, f])); g.splice(0, g.length); b.a.P(g, a) }, n, { W: a, Ja: function () { return 0 == g.length || !b.a.X(g[0]) } }); return { M: g, j: a.oa() ? a : H } } function L(a) { for (; a.length && !b.a.X(a[0]);)a.splice(0, 1); if (1 < a.length) { for (var d = a[0], c = a[a.length - 1], e = [d]; d !== c;) { d = d.nextSibling; if (!d) return; e.push(d) } Array.prototype.splice.apply(a, [0, a.length].concat(e)) } return a } function R(a, b, c, e, f) {
            var g = Math.min,
            h = Math.max, j = [], k, m = a.length, p, r = b.length, u = r - m || 1, F = m + r + 1, I, z, y; for (k = 0; k <= m; k++) { z = I; j.push(I = []); y = g(r, k + u); for (p = h(0, k - 1); p <= y; p++)I[p] = p ? k ? a[k - 1] === b[p - 1] ? z[p - 1] : g(z[p] || F, I[p - 1] || F) + 1 : p + 1 : k + 1 } g = []; h = []; u = []; k = m; for (p = r; k || p;)r = j[k][p] - 1, p && r === j[k][p - 1] ? h.push(g[g.length] = { status: c, value: b[--p], index: p }) : k && r === j[k - 1][p] ? u.push(g[g.length] = { status: e, value: a[--k], index: k }) : (g.push({ status: "retained", value: b[--p] }), --k); if (h.length && u.length) for (var a = 10 * m, s, b = c = 0; (f || b < a) && (s = h[c]); c++) {
                for (e =
                    0; j = u[e]; e++)if (s.value === j.value) { s.moved = j.index; j.moved = s.index; u.splice(e, 1); b = e = 0; break } b += e
            } return g.reverse()
        } function S(a, d, c, e, f) {
            var f = f || {}, g = a && M(a), g = g && g.ownerDocument, h = f.templateEngine || N; b.ya.ub(c, h, g); c = h.renderTemplate(c, e, f, g); ("number" != typeof c.length || 0 < c.length && "number" != typeof c[0].nodeType) && i(Error("Template engine must return an array of DOM nodes")); g = q; switch (d) {
                case "replaceChildren": b.e.N(a, c); g = l; break; case "replaceNode": b.a.Xa(a, c); g = l; break; case "ignoreTargetNode": break;
                default: i(Error("Unknown renderMode: " + d))
            }g && (T(c, e), f.afterRender && b.r.K(f.afterRender, n, [c, e.$data])); return c
        } function M(a) { return a.nodeType ? a : 0 < a.length ? a[0] : n } function T(a, d) { if (a.length) { var c = a[0], e = a[a.length - 1]; U(c, e, function (a) { b.Ca(d, a) }); U(c, e, function (a) { b.s.hb(a, [d]) }) } } function U(a, d, c) { for (var e, d = b.e.nextSibling(d); a && (e = a) !== d;)a = b.e.nextSibling(e), (1 === e.nodeType || 8 === e.nodeType) && c(e) } function V(a, d, c) {
            for (var a = b.g.aa(a), e = b.g.Q, f = 0; f < a.length; f++) {
                var g = a[f].key; if (e.hasOwnProperty(g)) {
                    var h =
                        e[g]; "function" === typeof h ? (g = h(a[f].value)) && i(Error(g)) : h || i(Error("This template engine does not support the '" + g + "' binding within its templates"))
                }
            } a = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + b.g.ba(a) + " } })()})"; return c.createJavaScriptEvaluatorBlock(a) + d
        } function W(a, d, c, e) {
            function f(a) { return function () { return j[a] } } function g() { return j } var h = 0, j, k; b.j(function () {
                var m = c && c instanceof b.z ? c : new b.z(b.a.d(c)), p = m.$data; e && b.cb(a, m); if (j = ("function" == typeof d ?
                    d(m, a) : d) || b.J.instance.getBindings(a, m)) {
                        if (0 === h) { h = 1; for (var r in j) { var u = b.c[r]; u && 8 === a.nodeType && !b.e.I[r] && i(Error("The binding '" + r + "' cannot be used with virtual elements")); if (u && "function" == typeof u.init && (u = (0, u.init)(a, f(r), g, p, m)) && u.controlsDescendantBindings) k !== H && i(Error("Multiple bindings (" + k + " and " + r + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")), k = r } h = 2 } if (2 === h) for (r in j) (u = b.c[r]) && "function" ==
                            typeof u.update && (0, u.update)(a, f(r), g, p, m)
                }
            }, n, { W: a }); return { Mb: k === H }
        } function X(a, d, c) { var e = l, f = 1 === d.nodeType; f && b.e.Sa(d); if (f && c || b.J.instance.nodeHasBindings(d)) e = W(d, n, a, c).Mb; e && Y(a, d, !f) } function Y(a, d, c) { for (var e = b.e.firstChild(d); d = e;)e = b.e.nextSibling(d), X(a, d, c) } function Z(a, b) { var c = $(a, b); return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : n } function $(a, b) {
            for (var c = a, e = 1, f = []; c = c.nextSibling;) { if (G(c) && (e-- , 0 === e)) return f; f.push(c); A(c) && e++ } b || i(Error("Cannot find closing comment tag to match: " +
                a.nodeValue)); return n
        } function G(a) { return 8 == a.nodeType && (J ? a.text : a.nodeValue).match(ha) } function A(a) { return 8 == a.nodeType && (J ? a.text : a.nodeValue).match(ia) } function O(a, b) { for (var c = n; a != c;)c = a, a = a.replace(ja, function (a, c) { return b[c] }); return a } function ka() { var a = [], d = []; this.save = function (c, e) { var f = b.a.i(a, c); 0 <= f ? d[f] = e : (a.push(c), d.push(e)) }; this.get = function (c) { c = b.a.i(a, c); return 0 <= c ? d[c] : H } } function aa(a, b, c) {
            function e(e) {
                var g = b(a[e]); switch (typeof g) {
                    case "boolean": case "number": case "string": case "function": f[e] =
                        g; break; case "object": case "undefined": var h = c.get(g); f[e] = h !== H ? h : aa(g, b, c)
                }
            } c = c || new ka; a = b(a); if (!("object" == typeof a && a !== n && a !== H && !(a instanceof Date))) return a; var f = a instanceof Array ? [] : {}; c.save(a, f); var g = a; if (g instanceof Array) { for (var h = 0; h < g.length; h++)e(h); "function" == typeof g.toJSON && e("toJSON") } else for (h in g) e(h); return f
        } function ba(a, d) {
            if (a) if (8 == a.nodeType) { var c = b.s.Ta(a.nodeValue); c != n && d.push({ rb: a, Eb: c }) } else if (1 == a.nodeType) for (var c = 0, e = a.childNodes, f = e.length; c < f; c++)ba(e[c],
                d)
        } function P(a, d, c, e) { b.c[a] = { init: function (a) { b.a.f.set(a, ca, {}); return { controlsDescendantBindings: l } }, update: function (a, g, h, j, k) { var h = b.a.f.get(a, ca), g = b.a.d(g()), j = !c !== !g, m = !h.Ya; if (m || d || j !== h.pb) m && (h.Ya = b.a.Ha(b.e.childNodes(a), l)), j ? (m || b.e.N(a, b.a.Ha(h.Ya)), b.Da(e ? e(k, g) : k, a)) : b.e.Y(a), h.pb = j } }; b.g.Q[a] = q; b.e.I[a] = l } function da(a, d, c) { c && d !== b.k.q(a) && b.k.T(a, d); d !== b.k.q(a) && b.r.K(b.a.Aa, n, [a, "change"]) } var b = "undefined" !== typeof v ? v : {}; b.b = function (a, d) {
            for (var c = a.split("."), e = b, f = 0; f <
                c.length - 1; f++)e = e[c[f]]; e[c[c.length - 1]] = d
        }; b.p = function (a, b, c) { a[b] = c }; b.version = "2.2.0"; b.b("version", b.version); b.a = new function () {
            function a(a, d) { if ("input" !== b.a.u(a) || !a.type || "click" != d.toLowerCase()) return q; var c = a.type; return "checkbox" == c || "radio" == c } var d = /^(\s|\u00A0)+|(\s|\u00A0)+$/g, c = {}, e = {}; c[/Firefox\/2/i.test(fa.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"]; c.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
            for (var f in c) { var g = c[f]; if (g.length) for (var h = 0, j = g.length; h < j; h++)e[g[h]] = f } var k = { propertychange: l }, m, c = 3; f = x.createElement("div"); for (g = f.getElementsByTagName("i"); f.innerHTML = "<\!--[if gt IE " + ++c + "]><i></i><![endif]--\>", g[0];); m = 4 < c ? c : H; return {
                Ma: ["authentiDepartment_token", /^__RequestVerificationToken(_.*)?$/], o: function (a, b) { for (var d = 0, c = a.length; d < c; d++)b(a[d]) }, i: function (a, b) {
                    if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b); for (var d = 0, c = a.length; d <
                        c; d++)if (a[d] === b) return d; return -1
                }, kb: function (a, b, d) { for (var c = 0, e = a.length; c < e; c++)if (b.call(d, a[c])) return a[c]; return n }, ga: function (a, d) { var c = b.a.i(a, d); 0 <= c && a.splice(c, 1) }, Fa: function (a) { for (var a = a || [], d = [], c = 0, e = a.length; c < e; c++)0 > b.a.i(d, a[c]) && d.push(a[c]); return d }, V: function (a, b) { for (var a = a || [], d = [], c = 0, e = a.length; c < e; c++)d.push(b(a[c])); return d }, fa: function (a, b) { for (var a = a || [], d = [], c = 0, e = a.length; c < e; c++)b(a[c]) && d.push(a[c]); return d }, P: function (a, b) {
                    if (b instanceof Array) a.push.apply(a,
                        b); else for (var d = 0, c = b.length; d < c; d++)a.push(b[d]); return a
                }, extend: function (a, b) { if (b) for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]); return a }, ka: function (a) { for (; a.firstChild;)b.removeNode(a.firstChild) }, Gb: function (a) { for (var a = b.a.L(a), d = x.createElement("div"), c = 0, e = a.length; c < e; c++)d.appendChild(b.A(a[c])); return d }, Ha: function (a, d) { for (var c = 0, e = a.length, g = []; c < e; c++) { var f = a[c].cloneNode(l); g.push(d ? b.A(f) : f) } return g }, N: function (a, d) { b.a.ka(a); if (d) for (var c = 0, e = d.length; c < e; c++)a.appendChild(d[c]) },
                Xa: function (a, d) { var c = a.nodeType ? [a] : a; if (0 < c.length) { for (var e = c[0], g = e.parentNode, f = 0, h = d.length; f < h; f++)g.insertBefore(d[f], e); f = 0; for (h = c.length; f < h; f++)b.removeNode(c[f]) } }, ab: function (a, b) { 7 > m ? a.setAttribute("selected", b) : a.selected = b }, D: function (a) { return (a || "").replace(d, "") }, Qb: function (a, d) { for (var c = [], e = (a || "").split(d), f = 0, g = e.length; f < g; f++) { var h = b.a.D(e[f]); "" !== h && c.push(h) } return c }, Nb: function (a, b) { a = a || ""; return b.length > a.length ? q : a.substring(0, b.length) === b }, sb: function (a, b) {
                    if (b.compareDocumentPosition) return 16 ==
                        (b.compareDocumentPosition(a) & 16); for (; a != n;) { if (a == b) return l; a = a.parentNode } return q
                }, X: function (a) { return b.a.sb(a, a.ownerDocument) }, u: function (a) { return a && a.tagName && a.tagName.toLowerCase() }, n: function (b, d, c) {
                    var e = m && k[d]; if (!e && "undefined" != typeof E) { if (a(b, d)) var f = c, c = function (a, b) { var d = this.checked; b && (this.checked = b.mb !== l); f.call(this, a); this.checked = d }; E(b).bind(d, c) } else !e && "function" == typeof b.addEventListener ? b.addEventListener(d, c, q) : "undefined" != typeof b.attachEvent ? b.attachEvent("on" +
                        d, function (a) { c.call(b, a) }) : i(Error("Browser doesn't support addEventListener or attachEvent"))
                }, Aa: function (b, d) {
                (!b || !b.nodeType) && i(Error("element must be a DOM node when calling triggerEvent")); if ("undefined" != typeof E) { var c = []; a(b, d) && c.push({ mb: b.checked }); E(b).trigger(d, c) } else "function" == typeof x.createEvent ? "function" == typeof b.dispatchEvent ? (c = x.createEvent(e[d] || "HTMLEvents"), c.initEvent(d, l, l, w, 0, 0, 0, 0, 0, q, q, q, q, 0, b), b.dispatchEvent(c)) : i(Error("The supplied element doesn't support dispatchEvent")) :
                    "undefined" != typeof b.fireEvent ? (a(b, d) && (b.checked = b.checked !== l), b.fireEvent("on" + d)) : i(Error("Browser doesn't support triggering events"))
                }, d: function (a) { return b.$(a) ? a() : a }, ta: function (a) { return b.$(a) ? a.t() : a }, da: function (a, d, c) { if (d) { var e = /[\w-]+/g, f = a.className.match(e) || []; b.a.o(d.match(e), function (a) { var d = b.a.i(f, a); 0 <= d ? c || f.splice(d, 1) : c && f.push(a) }); a.className = f.join(" ") } }, bb: function (a, d) {
                    var c = b.a.d(d); if (c === n || c === H) c = ""; if (3 === a.nodeType) a.data = c; else {
                        var e = b.e.firstChild(a);
                        !e || 3 != e.nodeType || b.e.nextSibling(e) ? b.e.N(a, [x.createTextNode(c)]) : e.data = c; b.a.vb(a)
                    }
                }, $a: function (a, b) { a.name = b; if (7 >= m) try { a.mergeAttributes(x.createElement("<input name='" + a.name + "'/>"), q) } catch (d) { } }, vb: function (a) { 9 <= m && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom)) }, tb: function (a) { if (9 <= m) { var b = a.style.width; a.style.width = 0; a.style.width = b } }, Kb: function (a, d) { for (var a = b.a.d(a), d = b.a.d(d), c = [], e = a; e <= d; e++)c.push(e); return c }, L: function (a) {
                    for (var b = [], d = 0, c = a.length; d <
                        c; d++)b.push(a[d]); return b
                }, Ob: 6 === m, Pb: 7 === m, Z: m, Na: function (a, d) { for (var c = b.a.L(a.getElementsByTagName("input")).concat(b.a.L(a.getElementsByTagName("textarea"))), e = "string" == typeof d ? function (a) { return a.name === d } : function (a) { return d.test(a.name) }, f = [], g = c.length - 1; 0 <= g; g--)e(c[g]) && f.push(c[g]); return f }, Hb: function (a) { return "string" == typeof a && (a = b.a.D(a)) ? w.JSON && w.JSON.parse ? w.JSON.parse(a) : (new Function("return " + a))() : n }, wa: function (a, d, c) {
                ("undefined" == typeof JSON || "undefined" == typeof JSON.stringify) &&
                    i(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js")); return JSON.stringify(b.a.d(a), d, c)
                }, Ib: function (a, d, c) {
                    var c = c || {}, e = c.params || {}, f = c.includeFields || this.Ma, g = a; if ("object" == typeof a && "form" === b.a.u(a)) for (var g = a.action, h = f.length - 1; 0 <= h; h--)for (var j = b.a.Na(a, f[h]), k = j.length - 1; 0 <= k; k--)e[j[k].name] = j[k].value; var d = b.a.d(d), m = x.createElement("form");
                    m.style.display = "none"; m.action = g; m.method = "post"; for (var v in d) a = x.createElement("input"), a.name = v, a.value = b.a.wa(b.a.d(d[v])), m.appendChild(a); for (v in e) a = x.createElement("input"), a.name = v, a.value = e[v], m.appendChild(a); x.body.appendChild(m); c.submitter ? c.submitter(m) : m.submit(); setTimeout(function () { m.parentNode.removeChild(m) }, 0)
                }
            }
        }; b.b("utils", b.a); b.b("utils.arrayForEach", b.a.o); b.b("utils.arrayFirst", b.a.kb); b.b("utils.arrayFilter", b.a.fa); b.b("utils.arrayGetDistinctValues", b.a.Fa); b.b("utils.arrayIndexOf",
            b.a.i); b.b("utils.arrayMap", b.a.V); b.b("utils.arrayPushAll", b.a.P); b.b("utils.arrayRemoveItem", b.a.ga); b.b("utils.extend", b.a.extend); b.b("utils.fieldsIncludedWithJsonPost", b.a.Ma); b.b("utils.getFormFields", b.a.Na); b.b("utils.peekObservable", b.a.ta); b.b("utils.postJson", b.a.Ib); b.b("utils.parseJson", b.a.Hb); b.b("utils.registerEventHandler", b.a.n); b.b("utils.stringifyJson", b.a.wa); b.b("utils.range", b.a.Kb); b.b("utils.toggleDomNodeCssClass", b.a.da); b.b("utils.triggerEvent", b.a.Aa); b.b("utils.unwrapObservable",
                b.a.d); Function.prototype.bind || (Function.prototype.bind = function (a) { var b = this, c = Array.prototype.slice.call(arguments), a = c.shift(); return function () { return b.apply(a, c.concat(Array.prototype.slice.call(arguments))) } }); b.a.f = new function () {
                    var a = 0, d = "__ko__" + (new Date).getTime(), c = {}; return {
                        get: function (a, d) { var c = b.a.f.getAll(a, q); return c === H ? H : c[d] }, set: function (a, d, c) { c === H && b.a.f.getAll(a, q) === H || (b.a.f.getAll(a, l)[d] = c) }, getAll: function (b, f) {
                            var g = b[d]; if (!g || !("null" !== g && c[g])) {
                                if (!f) return H;
                                g = b[d] = "ko" + a++; c[g] = {}
                            } return c[g]
                        }, clear: function (a) { var b = a[d]; return b ? (delete c[b], a[d] = n, l) : q }
                    }
                }; b.b("utils.domData", b.a.f); b.b("utils.domData.clear", b.a.f.clear); b.a.F = new function () {
                    function a(a, d) { var e = b.a.f.get(a, c); e === H && d && (e = [], b.a.f.set(a, c, e)); return e } function d(c) {
                        var e = a(c, q); if (e) for (var e = e.slice(0), j = 0; j < e.length; j++)e[j](c); b.a.f.clear(c); "function" == typeof E && "function" == typeof E.cleanData && E.cleanData([c]); if (f[c.nodeType]) for (e = c.firstChild; c = e;)e = c.nextSibling, 8 === c.nodeType &&
                            d(c)
                    } var c = "__ko_domNodeDisposal__" + (new Date).getTime(), e = { 1: l, 8: l, 9: l }, f = { 1: l, 9: l }; return { Ba: function (b, d) { "function" != typeof d && i(Error("Callback must be a function")); a(b, l).push(d) }, Wa: function (d, e) { var f = a(d, q); f && (b.a.ga(f, e), 0 == f.length && b.a.f.set(d, c, H)) }, A: function (a) { if (e[a.nodeType] && (d(a), f[a.nodeType])) { var c = []; b.a.P(c, a.getElementsByTagName("*")); for (var j = 0, k = c.length; j < k; j++)d(c[j]) } return a }, removeNode: function (a) { b.A(a); a.parentNode && a.parentNode.removeChild(a) } }
                }; b.A = b.a.F.A;
        b.removeNode = b.a.F.removeNode; b.b("cleanNode", b.A); b.b("removeNode", b.removeNode); b.b("utils.domNodeDisposal", b.a.F); b.b("utils.domNodeDisposal.addDisposeCallback", b.a.F.Ba); b.b("utils.domNodeDisposal.removeDisposeCallback", b.a.F.Wa); b.a.sa = function (a) {
            var d; if ("undefined" != typeof E) { if ((d = E.clean([a])) && d[0]) { for (a = d[0]; a.parentNode && 11 !== a.parentNode.nodeType;)a = a.parentNode; a.parentNode && a.parentNode.removeChild(a) } } else {
                var c = b.a.D(a).toLowerCase(); d = x.createElement("div"); c = c.match(/^<(thead|tbody|tfoot)/) &&
                    [1, "<table>", "</table>"] || !c.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!c.indexOf("<td") || !c.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""]; a = "ignored<div>" + c[1] + a + c[2] + "</div>"; for ("function" == typeof w.innerShiv ? d.appendChild(w.innerShiv(a)) : d.innerHTML = a; c[0]--;)d = d.lastChild; d = b.a.L(d.lastChild.childNodes)
            } return d
        }; b.a.ca = function (a, d) {
            b.a.ka(a); d = b.a.d(d); if (d !== n && d !== H) if ("string" != typeof d && (d = d.toString()), "undefined" != typeof E) E(a).html(d); else for (var c =
                b.a.sa(d), e = 0; e < c.length; e++)a.appendChild(c[e])
        }; b.b("utils.parseHtmlFragment", b.a.sa); b.b("utils.setHtml", b.a.ca); var Q = {}; b.s = {
            qa: function (a) { "function" != typeof a && i(Error("You can only pass a function to ko.memoization.memoize()")); var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1); Q[b] = a; return "<\!--[ko_memo:" + b + "]--\>" }, gb: function (a, b) {
                var c = Q[a]; c === H && i(Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized."));
                try { return c.apply(n, b || []), l } finally { delete Q[a] }
            }, hb: function (a, d) { var c = []; ba(a, c); for (var e = 0, f = c.length; e < f; e++) { var g = c[e].rb, h = [g]; d && b.a.P(h, d); b.s.gb(c[e].Eb, h); g.nodeValue = ""; g.parentNode && g.parentNode.removeChild(g) } }, Ta: function (a) { return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : n }
        }; b.b("memoization", b.s); b.b("memoization.memoize", b.s.qa); b.b("memoization.unmemoize", b.s.gb); b.b("memoization.parseMemoText", b.s.Ta); b.b("memoization.unmemoizeDomNodeAndDescendants", b.s.hb); b.La = {
            throttle: function (a,
                d) { a.throttleEvaluation = d; var c = n; return b.j({ read: a, write: function (b) { clearTimeout(c); c = setTimeout(function () { a(b) }, d) } }) }, notify: function (a, d) { a.equalityComparer = "always" == d ? t(q) : b.m.fn.equalityComparer; return a }
        }; b.b("extenders", b.La); b.eb = function (a, d, c) { this.target = a; this.ha = d; this.qb = c; b.p(this, "dispose", this.B) }; b.eb.prototype.B = function () { this.Bb = l; this.qb() }; b.S = function () {
        this.w = {}; b.a.extend(this, b.S.fn); b.p(this, "subscribe", this.xa); b.p(this, "extend", this.extend); b.p(this, "getSubscriptionsCount",
            this.xb)
        }; b.S.fn = {
            xa: function (a, d, c) { var c = c || "change", a = d ? a.bind(d) : a, e = new b.eb(this, a, function () { b.a.ga(this.w[c], e) }.bind(this)); this.w[c] || (this.w[c] = []); this.w[c].push(e); return e }, notifySubscribers: function (a, d) { d = d || "change"; this.w[d] && b.r.K(function () { b.a.o(this.w[d].slice(0), function (b) { b && b.Bb !== l && b.ha(a) }) }, this) }, xb: function () { var a = 0, b; for (b in this.w) this.w.hasOwnProperty(b) && (a += this.w[b].length); return a }, extend: function (a) {
                var d = this; if (a) for (var c in a) {
                    var e = b.La[c]; "function" ==
                        typeof e && (d = e(d, a[c]))
                } return d
            }
        }; b.Pa = function (a) { return "function" == typeof a.xa && "function" == typeof a.notifySubscribers }; b.b("subscribable", b.S); b.b("isSubscribable", b.Pa); var B = []; b.r = { lb: function (a) { B.push({ ha: a, Ka: [] }) }, end: function () { B.pop() }, Va: function (a) { b.Pa(a) || i(Error("Only subscribable things can act as dependencies")); if (0 < B.length) { var d = B[B.length - 1]; d && !(0 <= b.a.i(d.Ka, a)) && (d.Ka.push(a), d.ha(a)) } }, K: function (a, b, c) { try { return B.push(n), a.apply(b, c || []) } finally { B.pop() } } }; var la = {
            undefined: l,
            "boolean": l, number: l, string: l
        }; b.m = function (a) { function d() { if (0 < arguments.length) { if (!d.equalityComparer || !d.equalityComparer(c, arguments[0])) d.H(), c = arguments[0], d.G(); return this } b.r.Va(d); return c } var c = a; b.S.call(d); d.t = function () { return c }; d.G = function () { d.notifySubscribers(c) }; d.H = function () { d.notifySubscribers(c, "beforeChange") }; b.a.extend(d, b.m.fn); b.p(d, "peek", d.t); b.p(d, "valueHasMutated", d.G); b.p(d, "valueWillMutate", d.H); return d }; b.m.fn = {
            equalityComparer: function (a, b) {
                return a === n || typeof a in
                    la ? a === b : q
            }
        }; var D = b.m.Jb = "__ko_proto__"; b.m.fn[D] = b.m; b.la = function (a, d) { return a === n || a === H || a[D] === H ? q : a[D] === d ? l : b.la(a[D], d) }; b.$ = function (a) { return b.la(a, b.m) }; b.Qa = function (a) { return "function" == typeof a && a[D] === b.m || "function" == typeof a && a[D] === b.j && a.yb ? l : q }; b.b("observable", b.m); b.b("isObservable", b.$); b.b("isWriteableObservable", b.Qa); b.R = function (a) {
        0 == arguments.length && (a = []); a !== n && (a !== H && !("length" in a)) && i(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));
            var d = b.m(a); b.a.extend(d, b.R.fn); return d
        }; b.R.fn = {
            remove: function (a) { for (var b = this.t(), c = [], e = "function" == typeof a ? a : function (b) { return b === a }, f = 0; f < b.length; f++) { var g = b[f]; e(g) && (0 === c.length && this.H(), c.push(g), b.splice(f, 1), f--) } c.length && this.G(); return c }, removeAll: function (a) { if (a === H) { var d = this.t(), c = d.slice(0); this.H(); d.splice(0, d.length); this.G(); return c } return !a ? [] : this.remove(function (d) { return 0 <= b.a.i(a, d) }) }, destroy: function (a) {
                var b = this.t(), c = "function" == typeof a ? a : function (b) {
                    return b ===
                        a
                }; this.H(); for (var e = b.length - 1; 0 <= e; e--)c(b[e]) && (b[e]._destroy = l); this.G()
            }, destroyAll: function (a) { return a === H ? this.destroy(t(l)) : !a ? [] : this.destroy(function (d) { return 0 <= b.a.i(a, d) }) }, indexOf: function (a) { var d = this(); return b.a.i(d, a) }, replace: function (a, b) { var c = this.indexOf(a); 0 <= c && (this.H(), this.t()[c] = b, this.G()) }
        }; b.a.o("pop push reverse shift sort splice unshift".split(" "), function (a) { b.R.fn[a] = function () { var b = this.t(); this.H(); b = b[a].apply(b, arguments); this.G(); return b } }); b.a.o(["slice"],
            function (a) { b.R.fn[a] = function () { var b = this(); return b[a].apply(b, arguments) } }); b.b("observableArray", b.R); b.j = function (a, d, c) {
                function e() { b.a.o(y, function (a) { a.B() }); y = [] } function f() { var a = h.throttleEvaluation; a && 0 <= a ? (clearTimeout(s), s = setTimeout(g, a)) : g() } function g() {
                    if (!p) if (m && v()) z(); else {
                        p = l; try {
                            var a = b.a.V(y, function (a) { return a.target }); b.r.lb(function (c) { var d; 0 <= (d = b.a.i(a, c)) ? a[d] = H : y.push(c.xa(f)) }); for (var c = r.call(d), e = a.length - 1; 0 <= e; e--)a[e] && y.splice(e, 1)[0].B(); m = l; h.notifySubscribers(k,
                                "beforeChange"); k = c
                        } finally { b.r.end() } h.notifySubscribers(k); p = q; y.length || z()
                    }
                } function h() { if (0 < arguments.length) return "function" === typeof u ? u.apply(d, arguments) : i(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")), this; m || g(); b.r.Va(h); return k } function j() { return !m || 0 < y.length } var k, m = q, p = q, r = a; r && "object" == typeof r ? (c = r, r = c.read) : (c = c || {}, r || (r = c.read)); "function" != typeof r && i(Error("Pass a function that returns the value of the ko.computed"));
                var u = c.write, F = c.disposeWhenNodeIsRemoved || c.W || n, v = c.disposeWhen || c.Ja || t(q), z = e, y = [], s = n; d || (d = c.owner); h.t = function () { m || g(); return k }; h.wb = function () { return y.length }; h.yb = "function" === typeof c.write; h.B = function () { z() }; h.oa = j; b.S.call(h); b.a.extend(h, b.j.fn); b.p(h, "peek", h.t); b.p(h, "dispose", h.B); b.p(h, "isActive", h.oa); b.p(h, "getDependenciesCount", h.wb); c.deferEvaluation !== l && g(); if (F && j()) { z = function () { b.a.F.Wa(F, arguments.callee); e() }; b.a.F.Ba(F, z); var C = v, v = function () { return !b.a.X(F) || C() } } return h
            };
        b.Ab = function (a) { return b.la(a, b.j) }; v = b.m.Jb; b.j[v] = b.m; b.j.fn = {}; b.j.fn[v] = b.j; b.b("dependentObservable", b.j); b.b("computed", b.j); b.b("isComputed", b.Ab); b.fb = function (a) { 0 == arguments.length && i(Error("When calling ko.toJS, pass the object you want to convert.")); return aa(a, function (a) { for (var c = 0; b.$(a) && 10 > c; c++)a = a(); return a }) }; b.toJSON = function (a, d, c) { a = b.fb(a); return b.a.wa(a, d, c) }; b.b("toJS", b.fb); b.b("toJSON", b.toJSON); b.k = {
            q: function (a) {
                switch (b.a.u(a)) {
                    case "option": return a.__ko__hasDomDataOptionValue__ ===
                        l ? b.a.f.get(a, b.c.options.ra) : 7 >= b.a.Z ? a.getAttributeNode("value").specified ? a.value : a.text : a.value; case "select": return 0 <= a.selectedIndex ? b.k.q(a.options[a.selectedIndex]) : H; default: return a.value
                }
            }, T: function (a, d) {
                switch (b.a.u(a)) {
                    case "option": switch (typeof d) {
                        case "string": b.a.f.set(a, b.c.options.ra, H); "__ko__hasDomDataOptionValue__" in a && delete a.__ko__hasDomDataOptionValue__; a.value = d; break; default: b.a.f.set(a, b.c.options.ra, d), a.__ko__hasDomDataOptionValue__ = l, a.value = "number" === typeof d ?
                            d : ""
                    }break; case "select": for (var c = a.options.length - 1; 0 <= c; c--)if (b.k.q(a.options[c]) == d) { a.selectedIndex = c; break } break; default: if (d === n || d === H) d = ""; a.value = d
                }
            }
        }; b.b("selectExtensions", b.k); b.b("selectExtensions.readValue", b.k.q); b.b("selectExtensions.writeValue", b.k.T); var ja = /\@ko_token_(\d+)\@/g, ma = ["true", "false"], na = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i; b.g = {
            Q: [], aa: function (a) {
                var d = b.a.D(a); if (3 > d.length) return []; "{" === d.charAt(0) && (d = d.substring(1, d.length - 1)); for (var a = [],
                    c = n, e, f = 0; f < d.length; f++) { var g = d.charAt(f); if (c === n) switch (g) { case '"': case "'": case "/": c = f, e = g } else if (g == e && "\\" !== d.charAt(f - 1)) { g = d.substring(c, f + 1); a.push(g); var h = "@ko_token_" + (a.length - 1) + "@", d = d.substring(0, c) + h + d.substring(f + 1), f = f - (g.length - h.length), c = n } } e = c = n; for (var j = 0, k = n, f = 0; f < d.length; f++) {
                        g = d.charAt(f); if (c === n) switch (g) { case "{": c = f; k = g; e = "}"; break; case "(": c = f; k = g; e = ")"; break; case "[": c = f, k = g, e = "]" }g === k ? j++ : g === e && (j-- , 0 === j && (g = d.substring(c, f + 1), a.push(g), h = "@ko_token_" + (a.length -
                            1) + "@", d = d.substring(0, c) + h + d.substring(f + 1), f -= g.length - h.length, c = n))
                    } e = []; d = d.split(","); c = 0; for (f = d.length; c < f; c++)j = d[c], k = j.indexOf(":"), 0 < k && k < j.length - 1 ? (g = j.substring(k + 1), e.push({ key: O(j.substring(0, k), a), value: O(g, a) })) : e.push({ unknown: O(j, a) }); return e
            }, ba: function (a) {
                for (var d = "string" === typeof a ? b.g.aa(a) : a, c = [], a = [], e, f = 0; e = d[f]; f++)if (0 < c.length && c.push(","), e.key) {
                    var g; a: { g = e.key; var h = b.a.D(g); switch (h.length && h.charAt(0)) { case "'": case '"': break a; default: g = "'" + h + "'" } } e = e.value;
                    c.push(g); c.push(":"); c.push(e); e = b.a.D(e); 0 <= b.a.i(ma, b.a.D(e).toLowerCase()) ? e = q : (h = e.match(na), e = h === n ? q : h[1] ? "Object(" + h[1] + ")" + h[2] : e); e && (0 < a.length && a.push(", "), a.push(g + " : function(__ko_value) { " + e + " = __ko_value; }"))
                } else e.unknown && c.push(e.unknown); d = c.join(""); 0 < a.length && (d = d + ", '_ko_property_writers' : { " + a.join("") + " } "); return d
            }, Db: function (a, d) { for (var c = 0; c < a.length; c++)if (b.a.D(a[c].key) == d) return l; return q }, ea: function (a, d, c, e, f) {
                if (!a || !b.Qa(a)) {
                    if ((a = d()._ko_property_writers) &&
                        a[c]) a[c](e)
                } else (!f || a.t() !== e) && a(e)
            }
        }; b.b("expressionRewriting", b.g); b.b("expressionRewriting.bindingRewriteValidators", b.g.Q); b.b("expressionRewriting.parseObjectLiteral", b.g.aa); b.b("expressionRewriting.preProcessBindings", b.g.ba); b.b("jsonExpressionRewriting", b.g); b.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", b.g.ba); var J = "<\!--test--\>" === x.createComment("test").text, ia = J ? /^<\!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\>$/ : /^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/, ha = J ? /^<\!--\s*\/ko\s*--\>$/ :
            /^\s*\/ko\s*$/, oa = { ul: l, ol: l }; b.e = {
                I: {}, childNodes: function (a) { return A(a) ? $(a) : a.childNodes }, Y: function (a) { if (A(a)) for (var a = b.e.childNodes(a), d = 0, c = a.length; d < c; d++)b.removeNode(a[d]); else b.a.ka(a) }, N: function (a, d) { if (A(a)) { b.e.Y(a); for (var c = a.nextSibling, e = 0, f = d.length; e < f; e++)c.parentNode.insertBefore(d[e], c) } else b.a.N(a, d) }, Ua: function (a, b) { A(a) ? a.parentNode.insertBefore(b, a.nextSibling) : a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b) }, Oa: function (a, d, c) {
                    c ? A(a) ? a.parentNode.insertBefore(d,
                        c.nextSibling) : c.nextSibling ? a.insertBefore(d, c.nextSibling) : a.appendChild(d) : b.e.Ua(a, d)
                }, firstChild: function (a) { return !A(a) ? a.firstChild : !a.nextSibling || G(a.nextSibling) ? n : a.nextSibling }, nextSibling: function (a) { A(a) && (a = Z(a)); return a.nextSibling && G(a.nextSibling) ? n : a.nextSibling }, ib: function (a) { return (a = A(a)) ? a[1] : n }, Sa: function (a) {
                    if (oa[b.a.u(a)]) {
                        var d = a.firstChild; if (d) {
                            do if (1 === d.nodeType) {
                                var c; c = d.firstChild; var e = n; if (c) {
                                    do if (e) e.push(c); else if (A(c)) { var f = Z(c, l); f ? c = f : e = [c] } else G(c) &&
                                        (e = [c]); while (c = c.nextSibling)
                                } if (c = e) { e = d.nextSibling; for (f = 0; f < c.length; f++)e ? a.insertBefore(c[f], e) : a.appendChild(c[f]) }
                            } while (d = d.nextSibling)
                        }
                    }
                }
            }; b.b("virtualElements", b.e); b.b("virtualElements.allowedBindings", b.e.I); b.b("virtualElements.emptyNode", b.e.Y); b.b("virtualElements.insertAfter", b.e.Oa); b.b("virtualElements.prepend", b.e.Ua); b.b("virtualElements.setDomNodeChildren", b.e.N); b.J = function () { this.Ga = {} }; b.a.extend(b.J.prototype, {
                nodeHasBindings: function (a) {
                    switch (a.nodeType) {
                        case 1: return a.getAttribute("data-bind") !=
                            n; case 8: return b.e.ib(a) != n; default: return q
                    }
                }, getBindings: function (a, b) { var c = this.getBindingsString(a, b); return c ? this.parseBindingsString(c, b, a) : n }, getBindingsString: function (a) { switch (a.nodeType) { case 1: return a.getAttribute("data-bind"); case 8: return b.e.ib(a); default: return n } }, parseBindingsString: function (a, d, c) {
                    try { var e; if (!(e = this.Ga[a])) { var f = this.Ga, g = "with($context){with($data||{}){return{" + b.g.ba(a) + "}}}"; e = f[a] = new Function("$context", "$element", g) } return e(d, c) } catch (h) {
                        i(Error("Unable to parse bindings.\nMessage: " +
                            h + ";\nBindings value: " + a))
                    }
                }
            }); b.J.instance = new b.J; b.b("bindingProvider", b.J); b.c = {}; b.z = function (a, d, c) { d ? (b.a.extend(this, d), this.$parentContext = d, this.$parent = d.$data, this.$parents = (d.$parents || []).slice(0), this.$parents.unshift(this.$parent)) : (this.$parents = [], this.$root = a, this.ko = b); this.$data = a; c && (this[c] = a) }; b.z.prototype.createChildContext = function (a, d) { return new b.z(a, this, d) }; b.z.prototype.extend = function (a) { var d = b.a.extend(new b.z, this); return b.a.extend(d, a) }; b.cb = function (a, d) {
                if (2 ==
                    arguments.length) b.a.f.set(a, "__ko_bindingContext__", d); else return b.a.f.get(a, "__ko_bindingContext__")
            }; b.Ea = function (a, d, c) { 1 === a.nodeType && b.e.Sa(a); return W(a, d, c, l) }; b.Da = function (a, b) { (1 === b.nodeType || 8 === b.nodeType) && Y(a, b, l) }; b.Ca = function (a, b) { b && (1 !== b.nodeType && 8 !== b.nodeType) && i(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node")); b = b || w.document.body; X(a, b, l) }; b.ja = function (a) {
                switch (a.nodeType) {
                    case 1: case 8: var d = b.cb(a); if (d) return d;
                        if (a.parentNode) return b.ja(a.parentNode)
                }return H
            }; b.ob = function (a) { return (a = b.ja(a)) ? a.$data : H }; b.b("bindingHandlers", b.c); b.b("applyBindings", b.Ca); b.b("applyBindingsToDescendants", b.Da); b.b("applyBindingsToNode", b.Ea); b.b("contextFor", b.ja); b.b("dataFor", b.ob); var ea = { "class": "className", "for": "htmlFor" }; b.c.attr = {
                update: function (a, d) {
                    var c = b.a.d(d()) || {}, e; for (e in c) if ("string" == typeof e) {
                        var f = b.a.d(c[e]), g = f === q || f === n || f === H; g && a.removeAttribute(e); 8 >= b.a.Z && e in ea ? (e = ea[e], g ? a.removeAttribute(e) :
                            a[e] = f) : g || a.setAttribute(e, f.toString()); "name" === e && b.a.$a(a, g ? "" : f.toString())
                    }
                }
            }; b.c.checked = {
                init: function (a, d, c) { b.a.n(a, "click", function () { var e; if ("checkbox" == a.type) e = a.checked; else if ("radio" == a.type && a.checked) e = a.value; else return; var f = d(), g = b.a.d(f); "checkbox" == a.type && g instanceof Array ? (e = b.a.i(g, a.value), a.checked && 0 > e ? f.push(a.value) : !a.checked && 0 <= e && f.splice(e, 1)) : b.g.ea(f, c, "checked", e, l) }); "radio" == a.type && !a.name && b.c.uniqueName.init(a, t(l)) }, update: function (a, d) {
                    var c = b.a.d(d());
                    "checkbox" == a.type ? a.checked = c instanceof Array ? 0 <= b.a.i(c, a.value) : c : "radio" == a.type && (a.checked = a.value == c)
                }
            }; b.c.css = { update: function (a, d) { var c = b.a.d(d()); if ("object" == typeof c) for (var e in c) { var f = b.a.d(c[e]); b.a.da(a, e, f) } else c = String(c || ""), b.a.da(a, a.__ko__cssValue, q), a.__ko__cssValue = c, b.a.da(a, c, l) } }; b.c.enable = { update: function (a, d) { var c = b.a.d(d()); c && a.disabled ? a.removeAttribute("disabled") : !c && !a.disabled && (a.disabled = l) } }; b.c.disable = { update: function (a, d) { b.c.enable.update(a, function () { return !b.a.d(d()) }) } };
        b.c.event = { init: function (a, d, c, e) { var f = d() || {}, g; for (g in f) (function () { var f = g; "string" == typeof f && b.a.n(a, f, function (a) { var g, m = d()[f]; if (m) { var p = c(); try { var r = b.a.L(arguments); r.unshift(e); g = m.apply(e, r) } finally { g !== l && (a.preventDefault ? a.preventDefault() : a.returnValue = q) } p[f + "Bubble"] === q && (a.cancelBubble = l, a.stopPropagation && a.stopPropagation()) } }) })() } }; b.c.foreach = {
            Ra: function (a) {
                return function () {
                    var d = a(), c = b.a.ta(d); if (!c || "number" == typeof c.length) return { foreach: d, templateEngine: b.C.na };
                    b.a.d(d); return { foreach: c.data, as: c.as, includeDestroyed: c.includeDestroyed, afterAdd: c.afterAdd, beforeRemove: c.beforeRemove, afterRender: c.afterRender, beforeMove: c.beforeMove, afterMove: c.afterMove, templateEngine: b.C.na }
                }
            }, init: function (a, d) { return b.c.template.init(a, b.c.foreach.Ra(d)) }, update: function (a, d, c, e, f) { return b.c.template.update(a, b.c.foreach.Ra(d), c, e, f) }
        }; b.g.Q.foreach = q; b.e.I.foreach = l; b.c.hasfocus = {
            init: function (a, d, c) {
                function e(e) {
                a.__ko_hasfocusUpdating = l; var f = a.ownerDocument; "activeElement" in
                    f && (e = f.activeElement === a); f = d(); b.g.ea(f, c, "hasfocus", e, l); a.__ko_hasfocusUpdating = q
                } var f = e.bind(n, l), g = e.bind(n, q); b.a.n(a, "focus", f); b.a.n(a, "focusin", f); b.a.n(a, "blur", g); b.a.n(a, "focusout", g)
            }, update: function (a, d) { var c = b.a.d(d()); a.__ko_hasfocusUpdating || (c ? a.focus() : a.blur(), b.r.K(b.a.Aa, n, [a, c ? "focusin" : "focusout"])) }
        }; b.c.html = { init: function () { return { controlsDescendantBindings: l } }, update: function (a, d) { b.a.ca(a, d()) } }; var ca = "__ko_withIfBindingData"; P("if"); P("ifnot", q, l); P("with", l, q, function (a,
            b) { return a.createChildContext(b) }); b.c.options = {
                update: function (a, d, c) {
                "select" !== b.a.u(a) && i(Error("options binding applies only to SELECT elements")); for (var e = 0 == a.length, f = b.a.V(b.a.fa(a.childNodes, function (a) { return a.tagName && "option" === b.a.u(a) && a.selected }), function (a) { return b.k.q(a) || a.innerText || a.textContent }), g = a.scrollTop, h = b.a.d(d()); 0 < a.length;)b.A(a.options[0]), a.remove(0); if (h) {
                    var c = c(), j = c.optionsIncludeDestroyed; "number" != typeof h.length && (h = [h]); if (c.optionsCaption) {
                        var k = x.createElement("option");
                        b.a.ca(k, c.optionsCaption); b.k.T(k, H); a.appendChild(k)
                    } for (var d = 0, m = h.length; d < m; d++) { var p = h[d]; if (!p || !p._destroy || j) { var k = x.createElement("option"), r = function (a, b, c) { var d = typeof b; return "function" == d ? b(a) : "string" == d ? a[b] : c }, u = r(p, c.optionsValue, p); b.k.T(k, b.a.d(u)); p = r(p, c.optionsText, u); b.a.bb(k, p); a.appendChild(k) } } h = a.getElementsByTagName("option"); d = j = 0; for (m = h.length; d < m; d++)0 <= b.a.i(f, b.k.q(h[d])) && (b.a.ab(h[d], l), j++); a.scrollTop = g; e && "value" in c && da(a, b.a.ta(c.value), l); b.a.tb(a)
                }
                }
            };
        b.c.options.ra = "__ko.optionValueDomData__"; b.c.selectedOptions = { init: function (a, d, c) { b.a.n(a, "change", function () { var e = d(), f = []; b.a.o(a.getElementsByTagName("option"), function (a) { a.selected && f.push(b.k.q(a)) }); b.g.ea(e, c, "value", f) }) }, update: function (a, d) { "select" != b.a.u(a) && i(Error("values binding applies only to SELECT elements")); var c = b.a.d(d()); c && "number" == typeof c.length && b.a.o(a.getElementsByTagName("option"), function (a) { var d = 0 <= b.a.i(c, b.k.q(a)); b.a.ab(a, d) }) } }; b.c.style = {
            update: function (a,
                d) { var c = b.a.d(d() || {}), e; for (e in c) if ("string" == typeof e) { var f = b.a.d(c[e]); a.style[e] = f || "" } }
        }; b.c.submit = { init: function (a, d, c, e) { "function" != typeof d() && i(Error("The value for a submit binding must be a function")); b.a.n(a, "submit", function (b) { var c, h = d(); try { c = h.call(e, a) } finally { c !== l && (b.preventDefault ? b.preventDefault() : b.returnValue = q) } }) } }; b.c.text = { update: function (a, d) { b.a.bb(a, d()) } }; b.e.I.text = l; b.c.uniqueName = {
            init: function (a, d) {
                if (d()) {
                    var c = "ko_unique_" + ++b.c.uniqueName.nb; b.a.$a(a,
                        c)
                }
            }
        }; b.c.uniqueName.nb = 0; b.c.value = {
            init: function (a, d, c) {
                function e() { h = q; var e = d(), f = b.k.q(a); b.g.ea(e, c, "value", f) } var f = ["change"], g = c().valueUpdate, h = q; g && ("string" == typeof g && (g = [g]), b.a.P(f, g), f = b.a.Fa(f)); if (b.a.Z && ("input" == a.tagName.toLowerCase() && "text" == a.type && "off" != a.autocomplete && (!a.form || "off" != a.form.autocomplete)) && -1 == b.a.i(f, "propertychange")) b.a.n(a, "propertychange", function () { h = l }), b.a.n(a, "blur", function () { h && e() }); b.a.o(f, function (c) {
                    var d = e; b.a.Nb(c, "after") && (d = function () {
                        setTimeout(e,
                            0)
                    }, c = c.substring(5)); b.a.n(a, c, d)
                })
            }, update: function (a, d) { var c = "select" === b.a.u(a), e = b.a.d(d()), f = b.k.q(a), g = e != f; 0 === e && (0 !== f && "0" !== f) && (g = l); g && (f = function () { b.k.T(a, e) }, f(), c && setTimeout(f, 0)); c && 0 < a.length && da(a, e, q) }
        }; b.c.visible = { update: function (a, d) { var c = b.a.d(d()), e = "none" != a.style.display; c && !e ? a.style.display = "" : !c && e && (a.style.display = "none") } }; b.c.click = { init: function (a, d, c, e) { return b.c.event.init.call(this, a, function () { var a = {}; a.click = d(); return a }, c, e) } }; b.v = function () { }; b.v.prototype.renderTemplateSource =
            function () { i(Error("Override renderTemplateSource")) }; b.v.prototype.createJavaScriptEvaluatorBlock = function () { i(Error("Override createJavaScriptEvaluatorBlock")) }; b.v.prototype.makeTemplateSource = function (a, d) { if ("string" == typeof a) { var d = d || x, c = d.getElementById(a); c || i(Error("Cannot find template with ID " + a)); return new b.l.h(c) } if (1 == a.nodeType || 8 == a.nodeType) return new b.l.O(a); i(Error("Unknown template type: " + a)) }; b.v.prototype.renderTemplate = function (a, b, c, e) {
                a = this.makeTemplateSource(a, e);
                return this.renderTemplateSource(a, b, c)
            }; b.v.prototype.isTemplateRewritten = function (a, b) { return this.allowTemplateRewriting === q ? l : this.makeTemplateSource(a, b).data("isRewritten") }; b.v.prototype.rewriteTemplate = function (a, b, c) { a = this.makeTemplateSource(a, c); b = b(a.text()); a.text(b); a.data("isRewritten", l) }; b.b("templateEngine", b.v); var pa = /(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi, qa = /<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g; b.ya = {
                ub: function (a,
                    d, c) { d.isTemplateRewritten(a, c) || d.rewriteTemplate(a, function (a) { return b.ya.Fb(a, d) }, c) }, Fb: function (a, b) { return a.replace(pa, function (a, e, f, g, h, j, k) { return V(k, e, b) }).replace(qa, function (a, e) { return V(e, "<\!-- ko --\>", b) }) }, jb: function (a) { return b.s.qa(function (d, c) { d.nextSibling && b.Ea(d.nextSibling, a, c) }) }
            }; b.b("__tr_ambtns", b.ya.jb); b.l = {}; b.l.h = function (a) { this.h = a }; b.l.h.prototype.text = function () {
                var a = b.a.u(this.h), a = "script" === a ? "text" : "textarea" === a ? "value" : "innerHTML"; if (0 == arguments.length) return this.h[a];
                var d = arguments[0]; "innerHTML" === a ? b.a.ca(this.h, d) : this.h[a] = d
            }; b.l.h.prototype.data = function (a) { if (1 === arguments.length) return b.a.f.get(this.h, "templateSourceData_" + a); b.a.f.set(this.h, "templateSourceData_" + a, arguments[1]) }; b.l.O = function (a) { this.h = a }; b.l.O.prototype = new b.l.h; b.l.O.prototype.text = function () { if (0 == arguments.length) { var a = b.a.f.get(this.h, "__ko_anon_template__") || {}; a.za === H && a.ia && (a.za = a.ia.innerHTML); return a.za } b.a.f.set(this.h, "__ko_anon_template__", { za: arguments[0] }) }; b.l.h.prototype.nodes =
                function () { if (0 == arguments.length) return (b.a.f.get(this.h, "__ko_anon_template__") || {}).ia; b.a.f.set(this.h, "__ko_anon_template__", { ia: arguments[0] }) }; b.b("templateSources", b.l); b.b("templateSources.domElement", b.l.h); b.b("templateSources.anonymousTemplate", b.l.O); var N; b.va = function (a) { a != H && !(a instanceof b.v) && i(Error("templateEngine must inherit from ko.templateEngine")); N = a }; b.ua = function (a, d, c, e, f) {
                    c = c || {}; (c.templateEngine || N) == H && i(Error("Set a template engine before calling renderTemplate"));
                    f = f || "replaceChildren"; if (e) { var g = M(e); return b.j(function () { var h = d && d instanceof b.z ? d : new b.z(b.a.d(d)), j = "function" == typeof a ? a(h.$data, h) : a, h = S(e, f, j, h, c); "replaceNode" == f && (e = h, g = M(e)) }, n, { Ja: function () { return !g || !b.a.X(g) }, W: g && "replaceNode" == f ? g.parentNode : g }) } return b.s.qa(function (e) { b.ua(a, d, c, e, "replaceNode") })
                }; b.Lb = function (a, d, c, e, f) {
                    function g(a, b) { T(b, j); c.afterRender && c.afterRender(b, a) } function h(d, e) {
                        j = f.createChildContext(b.a.d(d), c.as); j.$index = e; var g = "function" == typeof a ?
                            a(d, j) : a; return S(n, "ignoreTargetNode", g, j, c)
                    } var j; return b.j(function () { var a = b.a.d(d) || []; "undefined" == typeof a.length && (a = [a]); a = b.a.fa(a, function (a) { return c.includeDestroyed || a === H || a === n || !b.a.d(a._destroy) }); b.r.K(b.a.Za, n, [e, a, h, c, g]) }, n, { W: e })
                }; b.c.template = {
                    init: function (a, d) { var c = b.a.d(d()); if ("string" != typeof c && !c.name && (1 == a.nodeType || 8 == a.nodeType)) c = 1 == a.nodeType ? a.childNodes : b.e.childNodes(a), c = b.a.Gb(c), (new b.l.O(a)).nodes(c); return { controlsDescendantBindings: l } }, update: function (a,
                        d, c, e, f) { var d = b.a.d(d()), c = {}, e = l, g, h = n; "string" != typeof d && (c = d, d = c.name, "if" in c && (e = b.a.d(c["if"])), e && "ifnot" in c && (e = !b.a.d(c.ifnot)), g = b.a.d(c.data)); "foreach" in c ? h = b.Lb(d || a, e && c.foreach || [], c, a, f) : e ? (f = "data" in c ? f.createChildContext(g, c.as) : f, h = b.ua(d || a, f, c, a)) : b.e.Y(a); f = h; (g = b.a.f.get(a, "__ko__templateComputedDomDataKey__")) && "function" == typeof g.B && g.B(); b.a.f.set(a, "__ko__templateComputedDomDataKey__", f && f.oa() ? f : H) }
                }; b.g.Q.template = function (a) {
                    a = b.g.aa(a); return 1 == a.length && a[0].unknown ||
                        b.g.Db(a, "name") ? n : "This template engine does not support anonymous templates nested within its templates"
                }; b.e.I.template = l; b.b("setTemplateEngine", b.va); b.b("renderTemplate", b.ua); b.a.Ia = function (a, b, c) { a = a || []; b = b || []; return a.length <= b.length ? R(a, b, "added", "deleted", c) : R(b, a, "deleted", "added", c) }; b.b("utils.compareArrays", b.a.Ia); b.a.Za = function (a, d, c, e, f) {
                    function g(a, b) { s = k[b]; v !== b && (y[a] = s); s.ma(v++); L(s.M); r.push(s); z.push(s) } function h(a, c) {
                        if (a) for (var d = 0, e = c.length; d < e; d++)c[d] && b.a.o(c[d].M,
                            function (b) { a(b, d, c[d].U) })
                    } for (var d = d || [], e = e || {}, j = b.a.f.get(a, "setDomNodeChildrenFromArrayMapping_lastMappingResult") === H, k = b.a.f.get(a, "setDomNodeChildrenFromArrayMapping_lastMappingResult") || [], m = b.a.V(k, function (a) { return a.U }), p = b.a.Ia(m, d), r = [], u = 0, v = 0, A = [], z = [], d = [], y = [], m = [], s, C = 0, B, D; B = p[C]; C++)switch (D = B.moved, B.status) {
                        case "deleted": D === H && (s = k[u], s.j && s.j.B(), A.push.apply(A, L(s.M)), e.beforeRemove && (d[C] = s, z.push(s))); u++; break; case "retained": g(C, u++); break; case "added": D !== H ? g(C,
                            D) : (s = { U: B.value, ma: b.m(v++) }, r.push(s), z.push(s), j || (m[C] = s))
                    }h(e.beforeMove, y); b.a.o(A, e.beforeRemove ? b.A : b.removeNode); for (var C = 0, j = b.e.firstChild(a), G; s = z[C]; C++) { s.M || b.a.extend(s, ga(a, c, s.U, f, s.ma)); for (u = 0; p = s.M[u]; j = p.nextSibling, G = p, u++)p !== j && b.e.Oa(a, p, G); !s.zb && f && (f(s.U, s.M, s.ma), s.zb = l) } h(e.beforeRemove, d); h(e.afterMove, y); h(e.afterAdd, m); b.a.f.set(a, "setDomNodeChildrenFromArrayMapping_lastMappingResult", r)
                }; b.b("utils.setDomNodeChildrenFromArrayMapping", b.a.Za); b.C = function () {
                this.allowTemplateRewriting =
                    q
                }; b.C.prototype = new b.v; b.C.prototype.renderTemplateSource = function (a) { var d = !(9 > b.a.Z) && a.nodes ? a.nodes() : n; if (d) return b.a.L(d.cloneNode(l).childNodes); a = a.text(); return b.a.sa(a) }; b.C.na = new b.C; b.va(b.C.na); b.b("nativeTemplateEngine", b.C); b.pa = function () {
                    var a = this.Cb = function () { if ("undefined" == typeof E || !E.tmpl) return 0; try { if (0 <= E.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2 } catch (a) { } return 1 }(); this.renderTemplateSource = function (b, c, e) {
                        e = e || {}; 2 > a && i(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));
                        var f = b.data("precompiled"); f || (f = b.text() || "", f = E.template(n, "{{ko_with $item.koBindingContext}}" + f + "{{/ko_with}}"), b.data("precompiled", f)); b = [c.$data]; c = E.extend({ koBindingContext: c }, e.templateOptions); c = E.tmpl(f, b, c); c.appendTo(x.createElement("div")); E.fragments = {}; return c
                    }; this.createJavaScriptEvaluatorBlock = function (a) { return "{{ko_code ((function() { return " + a + " })()) }}" }; this.addTemplate = function (a, b) { x.write("<script type='text/html' id='" + a + "'>" + b + "<\/script>") }; 0 < a && (E.tmpl.tag.ko_code =
                        { open: "__.push($1 || '');" }, E.tmpl.tag.ko_with = { open: "with($1) {", close: "} " })
                }; b.pa.prototype = new b.v; v = new b.pa; 0 < v.Cb && b.va(v); b.b("jqueryTmplTemplateEngine", b.pa)
    } "function" === typeof require && "object" === typeof exports && "object" === typeof module ? K(module.exports || exports) : "function" === typeof define && define.amd ? define(["exports"], K) : K(w.ko = {}); l;
})();