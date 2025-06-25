!(function () {
    var t,
        e,
        n,
        i,
        o = window.location,
        a = window.document,
        t = a.currentScript,
        r = {};
    function c(t, e, n) {
        window.fetch &&
            fetch(t, { method: "POST", headers: { "Content-Type": "text/plain" }, keepalive: !0, body: JSON.stringify(e) })
                .then(function (t) {
                    n && n.callback && n.callback({ status: t.status });
                })
                .catch(function () {});
    }
    var l = !1,
        d = location.href,
        u = {},
        s = -1,
        p = 0,
        f = 0;
    function v() {
        var t = h();
        if (!e && (s < i || t >= 3e3)) {
            s = i;
            var o = { n: "engagement", sd: Math.round((i / n) * 100), d: r.domain, u: d, p: u, e: t, v: 16 };
            (p = 0), (f = 0), (o.h = 1), c(r.endpoint, o);
        }
    }
    function w() {
        "visible" === document.visibilityState && document.hasFocus() && 0 === p ? (p = Date.now()) : ("hidden" !== document.visibilityState && document.hasFocus()) || ((f = h()), (p = 0), v());
    }
    function h() {
        return p ? f + (Date.now() - p) : f;
    }
    function m() {
        var t = document.body || {},
            e = document.documentElement || {};
        return Math.max(t.scrollHeight || 0, t.offsetHeight || 0, t.clientHeight || 0, e.scrollHeight || 0, e.offsetHeight || 0, e.clientHeight || 0);
    }
    function g() {
        var t = document.body || {},
            e = document.documentElement || {},
            i = window.innerHeight || e.clientHeight || 0,
            o = window.scrollY || e.scrollTop || t.scrollTop || 0;
        return n <= i ? n : o + i;
    }
    function b(t, h) {
        var b = "pageview" === t;
        if ((b && l && (v(), (n = m()), (i = g())), /^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname) || "file:" === o.protocol)) return y(t, h, "localhost");
        if ((window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) && !window.__plausible) return y(t, h);
        try {
            if ("true" === window.localStorage.plausible_ignore) return y(t, h, "localStorage flag");
        } catch (t) {}
        var k = {};
        (k.n = t),
            (k.v = 16),
            (k.u = o.href),
            (k.d = r.domain),
            (k.r = a.referrer || null),
            h && h.meta && (k.m = JSON.stringify(h.meta)),
            h && h.props && (k.p = h.props),
            h && !1 === h.interactive && (k.i = !1),
            (k.h = 1),
            b && ((e = !1), (d = k.u), (u = k.p), (s = -1), (f = 0), (p = Date.now()), l || (document.addEventListener("visibilitychange", w), window.addEventListener("blur", w), window.addEventListener("focus", w), (l = !0))),
            c(r.endpoint, k, h);
    }
    function y(t, n, i) {
        i && console.warn("Ignoring Event: " + i), n && n.callback && n.callback(), "pageview" === t && (e = !0);
    }
    var k = ["pdf", "xlsx", "docx", "txt", "rtf", "csv", "exe", "key", "pps", "ppt", "pptx", "7z", "pkg", "rar", "gz", "zip", "avi", "mov", "mp4", "mpeg", "wmv", "midi", "mp3", "wav", "wma", "dmg"],
        E = k;
    function L(t) {
        if ("auxclick" !== t.type || 1 === t.button) {
            var e = (function (t) {
                    for (var e; t && (void 0 === t.tagName || !((e = t) && e.tagName && "a" === e.tagName.toLowerCase()) || !t.href); ) t = t.parentNode;
                    return t;
                })(t.target),
                n = e && e.href && e.href.split("?")[0];
            if (e && e.href && e.host && e.host !== o.host) return S(t, e, { name: "Outbound Link: Click", props: { url: e.href } });
            if (
                (function (t) {
                    if (!t) return !1;
                    var e = t.split(".").pop();
                    return E.some(function (t) {
                        return t === e;
                    });
                })(n)
            )
                return S(t, e, { name: "File Download", props: { url: n } });
        }
    }
    function S(t, e, n) {
        var i = !1;
        function o() {
            i || ((i = !0), (window.location = e.href));
        }
        if (
            (function (t, e) {
                if (t.defaultPrevented) return !1;
                var n = !e.target || e.target.match(/^_(self|parent|top)$/i),
                    i = !(t.ctrlKey || t.metaKey || t.shiftKey) && "click" === t.type;
                return n && i;
            })(t, e)
        ) {
            var a = { props: n.props, callback: o };
            b(n.name, a), setTimeout(o, 5e3), t.preventDefault();
        } else {
            var a = { props: n.props };
            b(n.name, a);
        }
    }
    !(function e(c) {
        var l, d;
        (r.endpoint = t.getAttribute("data-api") || new URL(t.src).origin + "/api/event"),
            (r.domain = t.getAttribute("data-domain")),
            (n = m()),
            (i = g()),
            window.addEventListener("load", function () {
                n = m();
                var t = 0,
                    e = setInterval(function () {
                        (n = m()), 15 == ++t && clearInterval(e);
                    }, 200);
            }),
            document.addEventListener("scroll", function () {
                n = m();
                var t = g();
                t > i && (i = t);
            }),
            (function (t) {
                var e;
                function n(n) {
                    (e = o.pathname), t("pageview");
                }
                window.addEventListener("hashchange", function () {
                    n(!0);
                }),
                    "hidden" === a.visibilityState || "prerender" === a.visibilityState
                        ? a.addEventListener("visibilitychange", function () {
                              e || "visible" !== a.visibilityState || n();
                          })
                        : n(),
                    window.addEventListener("pageshow", function (t) {
                        t.persisted && n();
                    });
            })(b),
            a.addEventListener("click", L),
            a.addEventListener("auxclick", L),
            (l = t.getAttribute("file-types")),
            (d = t.getAttribute("add-file-types")),
            l && (E = l.split(",")),
            d && (E = d.split(",").concat(k));
        for (var u = (window.plausible && window.plausible.q) || [], s = 0; s < u.length; s++) b.apply(this, u[s]);
        (window.plausible = b), (window.plausible.init = e), (window.plausible.l = !0);
    })();
})();
