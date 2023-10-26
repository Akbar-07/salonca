(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5675],
  {
    8045: function (t, e, n) {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function o(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o = [],
                a = !0,
                c = !1;
              try {
                for (
                  n = n.call(t);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !e || o.length !== e);
                  a = !0
                );
              } catch (l) {
                (c = !0), (i = l);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (c) throw i;
                }
              }
              return o;
            }
          })(t, e) ||
          c(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function a(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return r(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          c(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(t, e) {
        if (t) {
          if ("string" === typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }
      e.default = function (t) {
        var e,
          n = t.src,
          r = t.sizes,
          a = t.unoptimized,
          c = void 0 !== a && a,
          l = t.priority,
          d = void 0 !== l && l,
          m = t.loading,
          y = t.lazyRoot,
          b = void 0 === y ? null : y,
          v = t.lazyBoundary,
          w = void 0 === v ? "200px" : v,
          A = t.className,
          S = t.quality,
          j = t.width,
          x = t.height,
          E = t.objectFit,
          I = t.objectPosition,
          P = t.onLoadingComplete,
          _ = t.loader,
          R = void 0 === _ ? z : _,
          D = t.placeholder,
          L = void 0 === D ? "empty" : D,
          q = t.blurDataURL,
          C = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(t);
              for (r = 0; r < o.length; r++)
                (n = o[r]),
                  e.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (i[n] = t[n]));
            }
            return i;
          })(t, [
            "src",
            "sizes",
            "unoptimized",
            "priority",
            "loading",
            "lazyRoot",
            "lazyBoundary",
            "className",
            "quality",
            "width",
            "height",
            "objectFit",
            "objectPosition",
            "onLoadingComplete",
            "loader",
            "placeholder",
            "blurDataURL",
          ]),
          N = u.useRef(null),
          W = C,
          M = r ? "responsive" : "intrinsic";
        "layout" in W && (W.layout && (M = W.layout), delete W.layout);
        var U = "";
        if (
          (function (t) {
            return (
              "object" === typeof t &&
              (h(t) ||
                (function (t) {
                  return void 0 !== t.src;
                })(t))
            );
          })(n)
        ) {
          var B = h(n) ? n.default : n;
          if (!B.src)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                JSON.stringify(B)
              )
            );
          if (
            ((q = q || B.blurDataURL),
            (U = B.src),
            (!M || "fill" !== M) &&
              ((x = x || B.height), (j = j || B.width), !B.height || !B.width))
          )
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                JSON.stringify(B)
              )
            );
        }
        n = "string" === typeof n ? n : U;
        var H = k(j),
          T = k(x),
          F = k(S),
          V = !d && ("lazy" === m || "undefined" === typeof m);
        (n.startsWith("data:") || n.startsWith("blob:")) &&
          ((c = !0), (V = !1));
        (null === (e = N.current) || void 0 === e ? void 0 : e.complete) &&
          (V = !1);
        0;
        var J,
          G = o(
            f.useIntersection({ rootRef: b, rootMargin: w, disabled: !V }),
            2
          ),
          Q = G[0],
          $ = G[1],
          K = !V || $,
          X = {
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          Y = {
            boxSizing: "border-box",
            display: "block",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          Z = !1,
          tt = {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: "border-box",
            padding: 0,
            border: "none",
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            objectFit: E,
            objectPosition: I,
          },
          et =
            "blur" === L
              ? {
                  filter: "blur(20px)",
                  backgroundSize: E || "cover",
                  backgroundImage: 'url("'.concat(q, '")'),
                  backgroundPosition: I || "0% 0%",
                }
              : {};
        if ("fill" === M)
          (X.display = "block"),
            (X.position = "absolute"),
            (X.top = 0),
            (X.left = 0),
            (X.bottom = 0),
            (X.right = 0);
        else if ("undefined" !== typeof H && "undefined" !== typeof T) {
          var nt = T / H,
            rt = isNaN(nt) ? "100%" : "".concat(100 * nt, "%");
          "responsive" === M
            ? ((X.display = "block"),
              (X.position = "relative"),
              (Z = !0),
              (Y.paddingTop = rt))
            : "intrinsic" === M
            ? ((X.display = "inline-block"),
              (X.position = "relative"),
              (X.maxWidth = "100%"),
              (Z = !0),
              (Y.maxWidth = "100%"),
              (J =
                "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 version=%271.1%27 width=%27"
                  .concat(H, "%27 height=%27")
                  .concat(T, "%27/%3e")))
            : "fixed" === M &&
              ((X.display = "inline-block"),
              (X.position = "relative"),
              (X.width = H),
              (X.height = T));
        } else 0;
        var it = { src: p, srcSet: void 0, sizes: void 0 };
        K &&
          (it = O({
            src: n,
            unoptimized: c,
            layout: M,
            width: H,
            quality: F,
            sizes: r,
            loader: R,
          }));
        var ot = n;
        0;
        var at;
        0;
        var ct =
            (i((at = {}), "imagesrcset", it.srcSet),
            i(at, "imagesizes", it.sizes),
            at),
          lt = u.default.useLayoutEffect,
          ut = u.useRef(P);
        return (
          u.useEffect(
            function () {
              ut.current = P;
            },
            [P]
          ),
          lt(
            function () {
              Q(N.current);
            },
            [Q]
          ),
          u.useEffect(
            function () {
              !(function (t, e, n, r, i) {
                var o = function () {
                  var e = t.current;
                  e &&
                    e.src !== p &&
                    ("decode" in e ? e.decode() : Promise.resolve())
                      .catch(function () {})
                      .then(function () {
                        if (
                          t.current &&
                          ("blur" === r &&
                            ((e.style.filter = ""),
                            (e.style.backgroundSize = ""),
                            (e.style.backgroundImage = ""),
                            (e.style.backgroundPosition = "")),
                          i.current)
                        ) {
                          var n = e.naturalWidth,
                            o = e.naturalHeight;
                          i.current({ naturalWidth: n, naturalHeight: o });
                        }
                      });
                };
                t.current &&
                  (t.current.complete ? o() : (t.current.onload = o));
              })(N, 0, 0, L, ut);
            },
            [ot, M, L, K]
          ),
          u.default.createElement(
            "span",
            { style: X },
            Z
              ? u.default.createElement(
                  "span",
                  { style: Y },
                  J
                    ? u.default.createElement("img", {
                        style: {
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        },
                        alt: "",
                        "aria-hidden": !0,
                        src: J,
                      })
                    : null
                )
              : null,
            u.default.createElement(
              "img",
              Object.assign({}, W, it, {
                decoding: "async",
                "data-nimg": M,
                className: A,
                ref: N,
                style: g({}, tt, et),
              })
            ),
            V &&
              u.default.createElement(
                "noscript",
                null,
                u.default.createElement(
                  "img",
                  Object.assign(
                    {},
                    W,
                    O({
                      src: n,
                      unoptimized: c,
                      layout: M,
                      width: H,
                      quality: F,
                      sizes: r,
                      loader: R,
                    }),
                    {
                      decoding: "async",
                      "data-nimg": M,
                      style: tt,
                      className: A,
                      loading: m || "lazy",
                    }
                  )
                )
              ),
            d
              ? u.default.createElement(
                  s.default,
                  null,
                  u.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + it.src + it.srcSet + it.sizes,
                        rel: "preload",
                        as: "image",
                        href: it.srcSet ? void 0 : it.src,
                      },
                      ct
                    )
                  )
                )
              : null
          )
        );
      };
      var l,
        u = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(t, n)
                    : {};
                r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
              }
          return (e.default = t), e;
        })(n(7294)),
        s = (l = n(5443)) && l.__esModule ? l : { default: l },
        d = n(5809),
        f = n(7190);
      function m(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function g(t) {
        for (
          var e = arguments,
            n = function (n) {
              var r = null != e[n] ? e[n] : {},
                i = Object.keys(r);
              "function" === typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                  })
                )),
                i.forEach(function (e) {
                  m(t, e, r[e]);
                });
            },
            r = 1;
          r < arguments.length;
          r++
        )
          n(r);
        return t;
      }
      new Map();
      var p =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      var y = new Map([
        [
          "default",
          function (t) {
            var e = t.root,
              n = t.src,
              r = t.width,
              i = t.quality;
            0;
            return ""
              .concat(e, "?url=")
              .concat(encodeURIComponent(n), "&w=")
              .concat(r, "&q=")
              .concat(i || 75);
          },
        ],
        [
          "imgix",
          function (t) {
            var e = t.root,
              n = t.src,
              r = t.width,
              i = t.quality,
              o = new URL("".concat(e).concat(x(n))),
              a = o.searchParams;
            a.set("auto", a.get("auto") || "format"),
              a.set("fit", a.get("fit") || "max"),
              a.set("w", a.get("w") || r.toString()),
              i && a.set("q", i.toString());
            return o.href;
          },
        ],
        [
          "cloudinary",
          function (t) {
            var e = t.root,
              n = t.src,
              r = t.width,
              i = t.quality,
              o =
                ["f_auto", "c_limit", "w_" + r, "q_" + (i || "auto")].join(
                  ","
                ) + "/";
            return "".concat(e).concat(o).concat(x(n));
          },
        ],
        [
          "akamai",
          function (t) {
            var e = t.root,
              n = t.src,
              r = t.width;
            return "".concat(e).concat(x(n), "?imwidth=").concat(r);
          },
        ],
        [
          "custom",
          function (t) {
            var e = t.src;
            throw new Error(
              'Image with src "'.concat(e, '" is missing "loader" prop.') +
                "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
            );
          },
        ],
      ]);
      function h(t) {
        return void 0 !== t.default;
      }
      var b =
          {
            deviceSizes: [360, 768, 1024, 1280, 1440, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
          } || d.imageConfigDefault,
        v = b.deviceSizes,
        w = b.imageSizes,
        A = b.loader,
        S = b.path,
        j = (b.domains, a(v).concat(a(w)));
      function O(t) {
        var e = t.src,
          n = t.unoptimized,
          r = t.layout,
          i = t.width,
          o = t.quality,
          c = t.sizes,
          l = t.loader;
        if (n) return { src: e, srcSet: void 0, sizes: void 0 };
        var u = (function (t, e, n) {
            if (n && ("fill" === e || "responsive" === e)) {
              for (var r, i = /(^|\s)(1?\d?\d)vw/g, o = []; (r = i.exec(n)); r)
                o.push(parseInt(r[2]));
              if (o.length) {
                var c,
                  l = 0.01 * (c = Math).min.apply(c, a(o));
                return {
                  widths: j.filter(function (t) {
                    return t >= v[0] * l;
                  }),
                  kind: "w",
                };
              }
              return { widths: j, kind: "w" };
            }
            return "number" !== typeof t || "fill" === e || "responsive" === e
              ? { widths: v, kind: "w" }
              : {
                  widths: a(
                    new Set(
                      [t, 2 * t].map(function (t) {
                        return (
                          j.find(function (e) {
                            return e >= t;
                          }) || j[j.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(i, r, c),
          s = u.widths,
          d = u.kind,
          f = s.length - 1;
        return {
          sizes: c || "w" !== d ? c : "100vw",
          srcSet: s
            .map(function (t, n) {
              return ""
                .concat(l({ src: e, quality: o, width: t }), " ")
                .concat("w" === d ? t : n + 1)
                .concat(d);
            })
            .join(", "),
          src: l({ src: e, quality: o, width: s[f] }),
        };
      }
      function k(t) {
        return "number" === typeof t
          ? t
          : "string" === typeof t
          ? parseInt(t, 10)
          : void 0;
      }
      function z(t) {
        var e = y.get(A);
        if (e) return e(g({ root: S }, t));
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(d.VALID_LOADERS.join(", "), ". Received: ")
            .concat(A)
        );
      }
      function x(t) {
        return "/" === t[0] ? t.slice(1) : t;
      }
      v.sort(function (t, e) {
        return t - e;
      }),
        j.sort(function (t, e) {
          return t - e;
        });
    },
    5809: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.imageConfigDefault = e.VALID_LOADERS = void 0);
      e.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai", "custom"];
      e.imageConfigDefault = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 60,
        formats: ["image/webp"],
      };
    },
    5675: function (t, e, n) {
      t.exports = n(8045);
    },
  },
]);
