(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    5301: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(5075);
        },
      ]);
    },
    5075: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return s;
          },
          default: function () {
            return f;
          },
        });
      var r = t(5893),
        o = t(2376),
        c = t(5510),
        u = t(2879),
        a = t(4578);
      function i(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (n) {
              i(e, n, t[n]);
            });
        }
        return e;
      }
      var s = !0;
      function f(e) {
        var n = e.coworkings;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(
              c.Z,
              l({}, u.u, {
                title: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",
              })
            ),
            (0, r.jsx)(o.Z, {
              children: (0, r.jsx)("main", {
                children: (0, r.jsx)(a.u, {
                  blocks: [
                    {
                      __component: "blocks.search-bar",
                      title:
                        "\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u043c\u0435\u0441\u0442\u043e",
                      subtitle:
                        "\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0431\u044c\u044e\u0442\u0438 \u0441\u0430\u043b\u043e\u043d\u0430\u043c \u0433\u043e\u0440\u043e\u0434\u0430",
                    },
                    {
                      __component: "blocks.popular-coworkings",
                      title:
                        "\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441",
                      btnLabel:
                        "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435",
                      coworkings: n,
                    },
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    4578: function (e, n, t) {
      "use strict";
      t.d(n, {
        u: function () {
          return d;
        },
      });
      var r = t(5893),
        o = t(7294),
        c = t(5152);
      function u(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function a(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            r.forEach(function (n) {
              u(e, n, t[n]);
            });
        }
        return e;
      }
      var i = (0, c.default)(
          function () {
            return Promise.all([
              t.e(6056),
              t.e(5675),
              t.e(2912),
              t.e(5456),
              t.e(8648),
              t.e(1806),
              t.e(7950),
              t.e(1155),
              t.e(2028),
              t.e(8566),
            ]).then(t.bind(t, 8411));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8411];
              },
            },
          }
        ),
        l = (0, c.default)(
          function () {
            return Promise.all([t.e(5675), t.e(9006)]).then(t.bind(t, 9006));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [9006];
              },
            },
          }
        ),
        s = (0, c.default)(
          function () {
            return t.e(1677).then(t.bind(t, 1677));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1677];
              },
            },
          }
        ),
        f = (0, c.default)(
          function () {
            return Promise.all([t.e(5675), t.e(5495)]).then(t.bind(t, 5495));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [5495];
              },
            },
          }
        ),
        b = (0, c.default)(
          function () {
            return t.e(9235).then(t.bind(t, 9235));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [9235];
              },
            },
          }
        ),
        d = (0, o.memo)(function (e) {
          var n = e.blocks;
          return (0, r.jsx)(r.Fragment, {
            children:
              null === n || void 0 === n
                ? void 0
                : n.map(function (e, n) {
                    switch (e.__component) {
                      case "blocks.search-bar":
                        return (0, r.jsx)(i, a({}, e), e.__component + n);
                      case "blocks.popular-coworkings":
                        return (0, r.jsx)(l, a({}, e), e.__component + n);
                      case "blocks.feature":
                        return (0, r.jsx)(s, a({}, e), e.__component + n);
                      case "blocks.hero-coworking-registration":
                        return (0, r.jsx)(f, a({}, e), e.__component + n);
                      case "blocks.text-content":
                        return (0, r.jsx)(b, a({}, e), e.__component + n);
                      default:
                        return null;
                    }
                  }),
          });
        });
      d.displayName = "BlockManager";
    },
  },
  function (e) {
    e.O(0, [9774, 5118, 230, 2888, 179], function () {
      return (n = 5301), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
