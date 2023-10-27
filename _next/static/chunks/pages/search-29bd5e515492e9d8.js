(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9603],
  {
    881: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/search.html",
        function () {
          return n(3789);
        },
      ]);
    },
    3789: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return k;
          },
          default: function () {
            return N;
          },
        });
      var r = n(5893),
        a = n(2376),
        l = n(7294),
        o = n(1163),
        i = n(5152),
        c = n(5699),
        u = n(6649),
        s = n(4043),
        f = n(5070);
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              d(e, t, n[t]);
            });
        }
        return e;
      }
      function b(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var m = (0, i.default)(
          function () {
            return Promise.all([
              n.e(6056),
              n.e(2912),
              n.e(1806),
              n.e(320),
            ]).then(n.bind(n, 320));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [320];
              },
            },
          }
        ),
        g = (0, i.default)(
          function () {
            return Promise.resolve().then(n.bind(n, 3810));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [3810];
              },
            },
          }
        ),
        x = (0, i.default)(
          function () {
            return Promise.all([
              n.e(6056),
              n.e(2912),
              n.e(5456),
              n.e(8409),
              n.e(8648),
              n.e(1806),
              n.e(7950),
              n.e(1155),
              n.e(2435),
              n.e(2028),
              n.e(1032),
              n.e(6770),
            ]).then(n.bind(n, 1032));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1032];
              },
            },
          }
        ),
        h = (0, i.default)(
          function () {
            return Promise.all([
              n.e(6056),
              n.e(5675),
              n.e(2912),
              n.e(5456),
              n.e(8409),
              n.e(8648),
              n.e(1806),
              n.e(7950),
              n.e(1155),
              n.e(2435),
              n.e(2028),
              n.e(1032),
              n.e(6118),
            ]).then(n.bind(n, 850));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [850];
              },
            },
          }
        ),
        j = (0, i.default)(
          function () {
            return Promise.all([
              n.e(6056),
              n.e(5675),
              n.e(2912),
              n.e(5456),
              n.e(8409),
              n.e(8648),
              n.e(1806),
              n.e(7950),
              n.e(1155),
              n.e(2435),
              n.e(8112),
              n.e(2028),
              n.e(1032),
              n.e(864),
            ]).then(n.bind(n, 3062));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [3062];
              },
            },
          }
        ),
        y = function (e) {
          var t = e.coworkings,
            n = e.isMap,
            a = e.params,
            i = (0, o.useRouter)(),
            d = (0, l.useState)(!1),
            y = d[0],
            O = d[1],
            v = (0, l.useState)(!1),
            w = v[0],
            P = v[1],
            k = function () {
              O(!y);
            };
          return (0, r.jsxs)("main", {
            className: "pt-6 pb-14 lg:pt-8 lg:pb-24",
            children: [
              (0, r.jsxs)(s.Z, {
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "grid gap-3 lg:items-center lg:justify-between lg:grid-flow-col",
                    children: [
                      (0, r.jsxs)(f.Z, {
                        el: "h1",
                        variant: "h2",
                        className: "text-black",
                        children: [
                          "\u041d\u0430\u0439\u0434\u0435\u043d\u043e:",
                          " ",
                          ""
                            .concat(t.total_items, " ")
                            .concat(
                              (0, c.Z)(t.total_items, [
                                "\u0441\u0430\u043b\u043e\u043d\u043e\u0432",
                                "\u0441\u0430\u043b\u043e\u043d\u0430",
                                "\u0441\u0430\u043b\u043e\u043d\u043e\u0432",
                              ])
                            ),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "grid grid-flow-col auto-cols-fr gap-2",
                        children: [
                          (0, r.jsx)(u.Z, {
                            variant: "outlined",
                            className: "lg:hidden",
                            onClick: k,
                            children:
                              "\u0424\u0438\u043b\u044c\u0442\u0440\u044b",
                          }),
                          (0, r.jsx)(u.Z, {
                            className: "md:px-5",
                            onClick: function () {
                              var e = i.query,
                                t = (e.page, b(e, ["page"]));
                              i.push({ query: p({}, t, { map: !n }) });
                            },
                            children: n
                              ? "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043a\u043e\u043c"
                              : "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "grid overflow-x-auto justify-start whitespace-nowrap grid-flow-col gap-4 mt-1.5 mb-2 -mx-4 px-4 sm:-mx-12 sm:px-12 lg:mt-0.5 lg:py-0",
                    children: [
                      n &&
                        (0, r.jsx)(u.Z, {
                          size: "custom",
                          className:
                            "hidden lg:inline-flex min-w-[116px] min-h-[30px] p-0 !text-2xl",
                          onClick: function () {
                            return P(!0);
                          },
                          variant: w ? "outlined" : "primary",
                          children:
                            "\u0424\u0438\u043b\u044c\u0442\u0440\u044b",
                        }),
                      a && (0, r.jsx)(m, { params: a }),
                    ],
                  }),
                ],
              }),
              n &&
                (0, r.jsx)(j, {
                  filterIsOpen: w,
                  onClose: function () {
                    P(!1);
                  },
                  coworkings: t.data,
                  params: a,
                }),
              !n && (0, r.jsx)(h, { coworkings: t, params: a }),
              y &&
                (0, r.jsx)(g, {
                  anchor: "top",
                  open: y,
                  onClose: k,
                  PaperProps: { sx: { pt: "var(--header-height)" } },
                  headerElement: (0, r.jsx)(f.Z, {
                    el: "h6",
                    variant: "h2",
                    children: "\u0424\u0438\u043b\u044c\u0442\u0440\u044b",
                  }),
                  children: (0, r.jsx)(x, { onClose: k, params: a }),
                }),
            ],
          });
        },
        O = n(5510),
        v = n(2879);
      function w(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              w(e, t, n[t]);
            });
        }
        return e;
      }
      var k = !0;
      function N(e) {
        var t = e.coworkings,
          n = e.isMap,
          l = e.params;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(
              O.Z,
              P({}, v.u, {
                title: "\u041f\u043e\u0438\u0441\u043a",
                desc: "\u0410\u0440\u0435\u043d\u0434\u0443\u0439\u0442\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u0431\u044c\u044e\u0442\u0438 \u0441\u0430\u043b\u043e\u043d\u0435 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435",
                slug: "search",
              })
            ),
            (0, r.jsx)(a.Z, {
              children: (0, r.jsx)(y, { coworkings: t, isMap: n, params: l }),
            }),
          ],
        });
      }
    },
    5699: function (e, t) {
      "use strict";
      t.Z = function (e, t) {
        var n = Math.ceil(e);
        return t[
          n % 100 > 4 && n % 100 < 20
            ? 2
            : [2, 0, 1, 1, 1, 2][n % 10 < 5 ? n % 10 : 5]
        ];
      };
    },
    5070: function (e, t, n) {
      "use strict";
      var r = n(5893),
        a = n(4184),
        l = n.n(a);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      t.Z = function (e) {
        var t,
          n = e.children,
          a = e.variant,
          c = void 0 === a ? "p" : a,
          u = e.el,
          s = void 0 === u ? "p" : u,
          f = e.truncate,
          d = e.className,
          p = i(e, ["children", "variant", "el", "truncate", "className"]);
        return (0, r.jsx)(
          s,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                r.forEach(function (t) {
                  o(e, t, n[t]);
                });
            }
            return e;
          })(
            {
              className: l()(
                ((t = {}),
                o(t, "text-4xl font-bold mb-1 md:text-7xl md:mb-2", "h1" === c),
                o(
                  t,
                  "text-4xl font-bold leading-7 md:text-6xl md:leading-8",
                  "h2" === c
                ),
                o(
                  t,
                  "text-xl font-bold leading-5 md:text-6xl md:leading-8",
                  "h3" === c
                ),
                o(
                  t,
                  "text-xl font-semibold leading-5 md:text-4xl md:leading-7",
                  "h4" === c
                ),
                o(t, "text-xl leading-5", "h5" === c),
                o(t, "text-lg leading-4", "h6" === c),
                o(
                  t,
                  "text-xl leading-5 md:text-4xl md:leading-7",
                  "body" === c || "subtitle" === c
                ),
                o(t, "text-base", "p" === c),
                o(t, "", "custom" === c),
                o(t, "truncate", f),
                t),
                d
              ),
            },
            p,
            { children: n }
          )
        );
      };
    },
  },
  function (e) {
    e.O(0, [9774, 5118, 230, 2888, 179], function () {
      return (t = 881), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
