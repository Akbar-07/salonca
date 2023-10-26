(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2266],
  {
    5749: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/coworking/[slug]",
        function () {
          return n(685);
        },
      ]);
    },
    685: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return q;
          },
          default: function () {
            return B;
          },
        });
      var r = n(5893),
        a = n(2376),
        o = n(4341),
        c = n(4051),
        i = n.n(c),
        l = n(7294),
        u = n(1163),
        s = n(5152),
        d = n(1955),
        f = n(3206),
        p = n(5501),
        m = n(4043),
        y = n(2899),
        g = n(5070),
        b = function (e) {
          var t = e.title,
            n = e.titleId,
            a = e.description,
            o = e.descriptionItemProp,
            c = e.children;
          return (0, r.jsxs)("section", {
            children: [
              (0, r.jsx)(g.Z, {
                id: n,
                el: "h2",
                variant: "h3",
                className: "text-black mb-3",
                children: t,
              }),
              a &&
                (0, r.jsx)(g.Z, {
                  variant: "body",
                  className: "text-black",
                  itemProp: o,
                  children: a,
                }),
              c,
            ],
          });
        },
        h = n(6566),
        x = n(6649),
        v = n(9930);
      var _ = (0, s.default)(
          function () {
            return Promise.all([n.e(7870), n.e(3185)]).then(n.bind(n, 7870));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7870];
              },
            },
          }
        ),
        w = function () {
          var e = (0, h.d)().showModal,
            t = (function (e) {
              var t = ("" + e)
                .replace(/\D/g, "")
                .match(/^(7|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
              if (t) {
                var n = t[1] ? "+7 " : "";
                return ""
                  .concat(n)
                  .concat(t[2], " ")
                  .concat(t[3], "-")
                  .concat(t[4], "-")
                  .concat(t[5]);
              }
              return null;
            })(v.m);
          return (0, r.jsxs)("div", {
            className: "grid gap-5 md:gap-3 mt-4",
            children: [
              (0, r.jsx)("a", {
                href: "tel:".concat(v.m),
                className:
                  "hidden font-semibold text-7xl text-primary/70 md:inline-flex w-max",
                children: t,
              }),
              (0, r.jsx)(x.Z, {
                onClick: function () {
                  e(_, {
                    title:
                      "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438",
                  });
                },
                className: "w-full md:max-w-[212px]",
                children:
                  "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438",
              }),
            ],
          });
        },
        j = n(6645),
        E = n(3248),
        P = (0, s.default)(
          function () {
            return Promise.all([
              n.e(6056),
              n.e(5675),
              n.e(8112),
              n.e(6990),
            ]).then(n.bind(n, 6990));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6990];
              },
            },
          }
        ),
        O = function (e) {
          var t = e.name,
            n = e.unid,
            a = e.slug,
            o = e.address,
            c = e.metroName,
            i = e.metroColor,
            l = e.latitude,
            u = e.longitude,
            s = (0, h.d)().showModal;
          return (0, r.jsxs)("div", {
            className:
              "my-4 md:grid md:gap-4 items-end md:grid-cols-[1fr,212px] xl:mt-0",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "grid gap-2 justify-items-start md:gap-x-6 md:gap-y-3 md:grid-cols-[1fr,max-content]",
                children: [
                  (0, r.jsx)(g.Z, {
                    variant: "h2",
                    el: "h1",
                    className: "col-span-2 text-black",
                    itemProp: "name",
                    children: t,
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "grid gap-2 justify-items-start lg:grid-flow-col",
                    children: [
                      (0, r.jsx)(E.Z, {
                        color: i,
                        children: "".concat(c, ", ").concat(o),
                      }),
                      (0, r.jsx)(y.Z, {
                        onClick: function () {
                          return s(P, { unid: n, slug: a });
                        },
                        children:
                          "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(j.Z, {
                className: "hidden md:inline-flex",
                href: "#places",
                children:
                  "\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
              }),
              (0, r.jsx)("meta", {
                itemProp: "latitude",
                content: "".concat(l),
              }),
              (0, r.jsx)("meta", {
                itemProp: "longitude",
                content: "".concat(u),
              }),
            ],
          });
        };
      function S(e, t, n, r, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (u) {
          return void n(u);
        }
        i.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      var T = (0, s.default)(
          function () {
            return n.e(2663).then(n.bind(n, 2663));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [2663];
              },
            },
          }
        ),
        k = (0, s.default)(
          function () {
            return n.e(4112).then(n.bind(n, 4112));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [4112];
              },
            },
          }
        ),
        C = (0, s.default)(
          function () {
            return Promise.all([n.e(5675), n.e(936), n.e(6510)]).then(
              n.bind(n, 251)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [251];
              },
            },
          }
        ),
        D = (0, s.default)(
          function () {
            return Promise.all([
              n.e(6056),
              n.e(5456),
              n.e(8409),
              n.e(2028),
              n.e(4424),
            ]).then(n.bind(n, 2576));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [2576];
              },
            },
          }
        ),
        N = (0, s.default)(
          function () {
            return n.e(4231).then(n.bind(n, 4231));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [4231];
              },
            },
          }
        ),
        I = (0, s.default)(
          function () {
            return Promise.all([n.e(936), n.e(4612), n.e(2962)]).then(
              n.bind(n, 8338)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8338];
              },
            },
          }
        ),
        R = (0, s.default)(
          function () {
            return Promise.all([
              n.e(6056),
              n.e(5675),
              n.e(8648),
              n.e(1806),
              n.e(7950),
              n.e(905),
            ]).then(n.bind(n, 5854));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [5854];
              },
            },
          }
        ),
        A = function (e) {
          var t = e.coworking,
            a = e.questions,
            o = e.reviews,
            c = (0, f.O)().featuresList,
            s = (0, u.useRouter)(),
            g = s.query.back,
            h = t.features
              ? c
                  .filter(function (e) {
                    return t.features && t.features[e.slug];
                  })
                  .map(function (e) {
                    return e.name;
                  })
              : [];
          return (
            (0, l.useEffect)(function () {
              (function () {
                var e,
                  t =
                    ((e = i().mark(function e() {
                      var t, r, a;
                      return i().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = d.Z.get("userId")),
                                (r = d.Z.get("clientStatus")),
                                (a = t
                                  ? { type: r, user_unid: t }
                                  : { type: "noname" }),
                                (e.next = 5),
                                Promise.resolve().then(n.bind(n, 4765))
                              );
                            case 5:
                              (0, e.sent.YMGoal)("viewing-coworking", a);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })),
                    function () {
                      var t = this,
                        n = arguments;
                      return new Promise(function (r, a) {
                        var o = e.apply(t, n);
                        function c(e) {
                          S(o, r, a, c, i, "next", e);
                        }
                        function i(e) {
                          S(o, r, a, c, i, "throw", e);
                        }
                        c(void 0);
                      });
                    });
                return function () {
                  return t.apply(this, arguments);
                };
              })()();
            }, []),
            (0, r.jsx)("main", {
              className: "mt-4 mb-6 md:my-8",
              itemScope: !0,
              itemType: "https://schema.org/BeautySalon",
              children: (0, r.jsx)(m.Z, {
                children: (0, r.jsxs)("div", {
                  className:
                    "xl:grid xl:items-start xl:grid-cols-[1fr,886px,1fr]",
                  children: [
                    (0, r.jsxs)(y.Z, {
                      onClick: function () {
                        return g ? s.push("".concat(g)) : s.back();
                      },
                      className:
                        "no-underline justify-self-start p-0 xl:mt-2 xl:col-span-1",
                      children: [
                        (0, r.jsx)(p.Z, {
                          className: "w-5 h-5",
                          name: "arrow-back",
                        }),
                        "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434",
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "grid xl:col-start-2 xl:col-end-3",
                      children: [
                        (0, r.jsx)(O, {
                          name: t.name,
                          unid: t.unid,
                          slug: t.slug,
                          address: t.address,
                          metroName: t.metro.name,
                          metroColor: t.metro.color,
                          latitude: t.latitude,
                          longitude: t.longitude,
                        }),
                        (0, r.jsxs)("div", {
                          className: "grid gap-6 md:gap-8",
                          children: [
                            t.images.length > 0 &&
                              (0, r.jsx)(C, {
                                className: "lg:gap-4",
                                carouselClass: "md:h-[420px]",
                                thumbsClass: "md:h-[120px]",
                                images: t.images,
                                thumbsBreakpoints: {
                                  768: { spaceBetween: 12 },
                                },
                              }),
                            (t.long_term_rent || t.booking_duration_from) &&
                              (0, r.jsx)(k, {
                                longTermRent: t.long_term_rent,
                                durationFrom: t.booking_duration_from,
                              }),
                            t.description &&
                              (0, r.jsx)(b, {
                                title:
                                  "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
                                description: t.description,
                                descriptionItemProp: "description",
                              }),
                            h.length > 0 &&
                              (0, r.jsx)(b, {
                                title:
                                  "\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",
                                children: (0, r.jsx)(N, { features: h }),
                              }),
                            t.requirements &&
                              (0, r.jsx)(b, {
                                title:
                                  "\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u043c\u0430\u0441\u0442\u0435\u0440\u0443",
                                description: t.requirements,
                              }),
                            t.short_term_rent &&
                              (0, r.jsx)(b, {
                                title:
                                  "\u0422\u0438\u043f \u043c\u0435\u0441\u0442\u0430",
                                titleId: "places",
                                children: (0, r.jsx)(R, {}),
                              }),
                            o.length > 0 &&
                              (0, r.jsx)(b, {
                                title: "\u041e\u0442\u0437\u044b\u0432\u044b",
                                children: (0, r.jsx)(I, { reviews: o }),
                              }),
                            a.length > 0 &&
                              (0, r.jsx)(b, {
                                title:
                                  "\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043e\u0442\u0432\u0435\u0442\u044b",
                                children: (0, r.jsx)(T, { list: a }),
                              }),
                            t.long_term_rent &&
                              (0, r.jsx)(b, {
                                title:
                                  "\u041d\u0443\u0436\u043d\u0430 \u0434\u043e\u043b\u0433\u043e\u0441\u0440\u043e\u0447\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430?",
                                description:
                                  "\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443 \u0438 \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442 \u0434\u043b\u044f \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u0435\u0442\u0430\u043b\u0435\u0439",
                                children: (0, r.jsx)(D, { unid: t.unid }),
                              }),
                            (0, r.jsx)(b, {
                              title:
                                "\u041e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b?",
                              description:
                                "\u0423\u0442\u043e\u0447\u043d\u0438\u043c \u0432\u0441\u0435 \u0434\u0435\u0442\u0430\u043b\u0438, \u043f\u043e\u043c\u043e\u0436\u0435\u043c \u0441 \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u0438\u043b\u0438 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u043c\u0441\u044f \u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435",
                              children: (0, r.jsx)(w, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        L = n(5510),
        Z = n(2879),
        M = n(8769);
      function U(e, t, n) {
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
      function G(e) {
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
              U(e, t, n[t]);
            });
        }
        return e;
      }
      var q = !0;
      function B(e) {
        var t = e.coworking,
          n = e.questions,
          c = e.reviews,
          i = e.params,
          l =
            t.images.length > 0
              ? "".concat(M.y).concat(t.images[0].medium)
              : Z.u.image;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(
              L.Z,
              G({}, Z.u, {
                prefix: "",
                title:
                  "\u0410\u0440\u0435\u043d\u0434\u0443\u0439\u0442\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 ".concat(
                    t.name
                  ),
                desc: "\u0410\u0440\u0435\u043d\u0434\u0443\u0439\u0442\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 ".concat(
                  t.name,
                  ". \u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u0441\u043a\u0440\u044b\u0442\u044b\u0445 \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439. \u0412\u044b \u043f\u043b\u0430\u0442\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u0430\u0440\u0435\u043d\u0434\u0443. \u041e\u0442 \u043e\u0434\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0430"
                ),
                slug: "coworking/".concat(t.slug),
                image: l,
              })
            ),
            (0, r.jsx)(o.R, {
              slug: t.slug,
              params: i,
              children: (0, r.jsx)(a.Z, {
                children: (0, r.jsx)(A, {
                  coworking: t,
                  questions: n,
                  reviews: c,
                }),
              }),
            }),
          ],
        });
      }
    },
    3248: function (e, t, n) {
      "use strict";
      var r = n(5893),
        a = n(4184),
        o = n.n(a);
      t.Z = function (e) {
        var t,
          n,
          a,
          c = e.children,
          i = e.color,
          l = e.truncate;
        return (0, r.jsxs)("div", {
          className: "grid gap-2 grid-flow-col justify-start",
          children: [
            (0, r.jsx)("div", {
              className: "w-2.5 h-2.5 rounded-full mt-[5px]",
              style: { backgroundColor: "#".concat(i) },
            }),
            (0, r.jsx)("div", {
              className: o()(
                "text-xl font-light leading-5 text-black-900",
                ((t = {}),
                (n = "truncate"),
                (a = l),
                n in t
                  ? Object.defineProperty(t, n, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[n] = a),
                t)
              ),
              itemProp: "address",
              children: c,
            }),
          ],
        });
      };
    },
    4341: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return j;
        },
        L: function () {
          return E;
        },
      });
      var r = n(4051),
        a = n.n(r),
        o = n(5893),
        c = n(7294),
        i = n(2912),
        l = n(1163),
        u = n(9669),
        s = n.n(u),
        d = n(469);
      function f(e, t, n) {
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
              f(e, t, n[t]);
            });
        }
        return e;
      }
      var m = function (e, t) {
        switch (t.type) {
          case "SET_TIME":
            return p({}, e, { time: t.payload });
          case "SET_PLACES":
            return p({}, e, { places: t.payload });
          case "SET_CURRENT_PLACE_ID":
            return p({}, e, { currentPlaceId: t.payload });
          case "SET_CURRENT_PLACE_LIST_DATE":
            return p({}, e, { currentPlaceListDate: t.payload });
          case "SET_CURRENT_PLACE_ITEM_DATES":
            return p({}, e, { currentPlaceItemDates: t.payload });
        }
      };
      function y(e, t, n, r, a, o, c) {
        try {
          var i = e[o](c),
            l = i.value;
        } catch (u) {
          return void n(u);
        }
        i.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function g(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function c(e) {
              y(o, r, a, c, i, "next", e);
            }
            function i(e) {
              y(o, r, a, c, i, "throw", e);
            }
            c(void 0);
          });
        };
      }
      function b(e, t, n) {
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
      function h(e) {
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
              b(e, t, n[t]);
            });
        }
        return e;
      }
      var x = {
          time: "",
          places: [],
          currentPlaceId: 0,
          currentPlaceListDate: new Date(),
          currentPlaceItemDates: [],
          slug: "",
        },
        v = function (e) {
          var t = e.filter(function (e) {
            return e.slots_date && 0 !== e.slots.length;
          });
          return t.length > 0
            ? t.reduce(function (e, t) {
                return e.slots_date &&
                  t.slots_date &&
                  e.slots_date > t.slots_date
                  ? t
                  : e;
              }).slots_date
            : "";
        },
        _ = {
          handleSelectSlot: function (e, t) {
            console.log("".concat(e, " ").concat(t));
          },
          getPlaces: (function () {
            var e = g(
              a().mark(function e(t) {
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        console.log("getPlaces");
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          changeCurrentPlaceListDate: function (e) {
            console.log(e);
          },
          changeCurrentPlaceItemDate: (function () {
            var e = g(
              a().mark(function e(t, n) {
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        console.log("".concat(t, " ").concat(n));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          onBook: function (e, t, n) {
            console.log("onBook");
          },
        },
        w = (0, c.createContext)(h({}, x, _)),
        j = function (e) {
          var t = e.children,
            n = e.slug,
            r = e.params,
            u = (0, l.useRouter)(),
            f = (0, c.useReducer)(m, x),
            p = f[0],
            y = f[1],
            b = (0, c.useCallback)(
              function (e, t) {
                t &&
                  t !== p.currentPlaceId &&
                  y({ type: "SET_CURRENT_PLACE_ID", payload: t }),
                  p.time === e
                    ? y({ type: "SET_TIME", payload: "" })
                    : y({ type: "SET_TIME", payload: e });
              },
              [p.currentPlaceId, p.time]
            ),
            _ = (0, c.useCallback)(
              (function () {
                var e = g(
                  a().mark(function e(t) {
                    var r, o, c, l;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              y({ type: "SET_TIME", payload: "" }),
                              y({ type: "SET_CURRENT_PLACE_ID", payload: 0 }),
                              y({ type: "SET_PLACES", payload: [] }),
                              (r = t
                                ? { d: (0, i.Z)(new Date(t), "yyyy-MM-dd") }
                                : {}),
                              (o = t || new Date()),
                              (e.next = 7),
                              s().get(
                                ""
                                  .concat(d.API.coworking, "/")
                                  .concat(n, "/place"),
                                { params: h({}, r) }
                              )
                            );
                          case 7:
                            (c = e.sent),
                              (l = c.data),
                              y({
                                type: "SET_CURRENT_PLACE_ITEM_DATES",
                                payload: l.map(function (e) {
                                  return { id: e.id, date: o };
                                }),
                              }),
                              y({
                                type: "SET_CURRENT_PLACE_LIST_DATE",
                                payload: o,
                              }),
                              y({ type: "SET_PLACES", payload: l });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [n]
            ),
            j = (0, c.useCallback)(
              function (e) {
                e &&
                  (y({
                    type: "SET_CURRENT_PLACE_LIST_DATE",
                    payload: new Date(e),
                  }),
                  u.push(
                    {
                      query: {
                        slug: n,
                        d: (0, i.Z)(new Date(e), "yyyy-MM-dd"),
                      },
                    },
                    void 0,
                    { shallow: !0 }
                  ));
              },
              [u, n]
            ),
            E = (0, c.useCallback)(
              (function () {
                var e = g(
                  a().mark(function e(t, n, r) {
                    var o, c, l;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              s().get(
                                ""
                                  .concat(d.API.coworking, "/")
                                  .concat(n, "/place/")
                                  .concat(r),
                                {
                                  params: {
                                    d: (0, i.Z)(new Date(t), "yyyy-MM-dd"),
                                  },
                                }
                              )
                            );
                          case 2:
                            (o = e.sent),
                              (c = o.data),
                              (l = p.places.map(function (e) {
                                return e.id === c.id ? (e = h({}, c)) : e;
                              })),
                              y({ type: "SET_PLACES", payload: l });
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
              [p.places]
            ),
            P = (0, c.useCallback)(
              (function () {
                var e = g(
                  a().mark(function e(t, r) {
                    var o;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (o = p.currentPlaceItemDates.map(function (e) {
                                return e.id === r ? ((e.date = t), e) : e;
                              })),
                              y({ type: "SET_CURRENT_PLACE_ID", payload: r }),
                              y({
                                type: "SET_CURRENT_PLACE_ITEM_DATES",
                                payload: o,
                              }),
                              (e.next = 7),
                              E(t, n, r)
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [E, n, p.currentPlaceItemDates]
            ),
            O = (0, c.useCallback)(
              function (e, t, r) {
                var a = (0, i.Z)(e, "yyyy-MM-dd");
                u.push({
                  pathname: "/coworking/".concat(n, "/booking"),
                  query: {
                    d: a,
                    time: r ? new Date("1970/01/01 ".concat(r)).getTime() : "",
                    placeId: t,
                  },
                });
              },
              [u, n]
            ),
            S = (0, c.useMemo)(
              function () {
                return h({}, p, {
                  handleSelectSlot: b,
                  getPlaces: _,
                  onBook: O,
                  changeCurrentPlaceListDate: j,
                  changeCurrentPlaceItemDate: P,
                  slug: n,
                });
              },
              [p, b, _, O, j, P, n]
            );
          return (
            (0, c.useEffect)(function () {
              (function () {
                var e = g(
                  a().mark(function e() {
                    var t, o, c, l, u, f, p, m, g, b, x, _, w, j, E;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = document.body.clientWidth),
                              (o = r.d),
                              (c = r.s),
                              (l = r.pf),
                              (u = r.pt),
                              (f = r.slot),
                              (p = o ? { d: o } : {}),
                              (e.next = 5),
                              s().get(
                                ""
                                  .concat(d.API.coworking, "/")
                                  .concat(n, "/place"),
                                { params: h({}, p) }
                              )
                            );
                          case 5:
                            (m = e.sent),
                              (g = m.data),
                              y({
                                type: "SET_CURRENT_PLACE_ITEM_DATES",
                                payload: g.map(function (e) {
                                  var t = o ? new Date(o) : new Date();
                                  return { id: e.id, date: t };
                                }),
                              }),
                              o
                                ? (y({
                                    type: "SET_CURRENT_PLACE_LIST_DATE",
                                    payload: new Date(o),
                                  }),
                                  y({ type: "SET_PLACES", payload: g }))
                                : t > 768
                                ? ((b = v(g)),
                                  y({
                                    type: "SET_PLACES",
                                    payload: g.map(function (e) {
                                      return e.slots_date === b
                                        ? e
                                        : h({}, e, {
                                            slots_date: b,
                                            slots: [],
                                          });
                                    }),
                                  }),
                                  y({
                                    type: "SET_CURRENT_PLACE_LIST_DATE",
                                    payload: b
                                      ? new Date(Date.parse(b))
                                      : new Date(),
                                  }))
                                : y({ type: "SET_PLACES", payload: g }),
                              f &&
                                ((x = (0, i.Z)(new Date(+f), "HH:mm")),
                                y({ type: "SET_TIME", payload: x }),
                                (_ = c ? +c : null),
                                (w = l ? +l : null),
                                (j = u ? +u : null),
                                0 ===
                                (E = g
                                  .filter(function (e) {
                                    return e.slots.length > 0;
                                  })
                                  .filter(function (e) {
                                    if (_) {
                                      var t = e.specialties.map(function (e) {
                                        return e.id;
                                      });
                                      return !(!_ || !t.includes(_));
                                    }
                                    return !0;
                                  })
                                  .filter(function (e) {
                                    return (
                                      !w ||
                                      !e.price_per_hour ||
                                      !!(w && w < e.price_per_hour)
                                    );
                                  })
                                  .filter(function (e) {
                                    return (
                                      !j ||
                                      !e.price_per_hour ||
                                      !!(j && j > e.price_per_hour)
                                    );
                                  })
                                  .filter(function (e) {
                                    return !x || !(!x || !e.slots.includes(x));
                                  })).length
                                  ? g[0].id &&
                                    y({
                                      type: "SET_CURRENT_PLACE_ID",
                                      payload: +g[0].id,
                                    })
                                  : E[0].id &&
                                    y({
                                      type: "SET_CURRENT_PLACE_ID",
                                      payload: +E[0].id,
                                    }));
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []),
            (0, o.jsx)(w.Provider, { value: S, children: t })
          );
        },
        E = function () {
          return (0, c.useContext)(w);
        };
    },
    2899: function (e, t, n) {
      "use strict";
      var r = n(5893),
        a = n(1496),
        o = n(9990);
      function c(e, t, n) {
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
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var l = (0, a.ZP)(o.Z)(function () {
        return {
          fontSize: "var(--font-lg)",
          lineHeight: "18px",
          textDecoration: "underline",
          "&:hover": { textDecoration: "none" },
        };
      });
      t.Z = function (e) {
        var t = e.children,
          n = i(e, ["children"]);
        return (0, r.jsx)(
          l,
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
                  c(e, t, n[t]);
                });
            }
            return e;
          })({}, n, { children: t })
        );
      };
    },
    6645: function (e, t, n) {
      "use strict";
      var r = n(5893),
        a = n(7294),
        o = n(3550);
      function c(e, t, n) {
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
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var l = (0, a.forwardRef)(function (e, t) {
        var n = e.children,
          a = i(e, ["children"]);
        return (0, r.jsx)(
          o.Z,
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
                  c(e, t, n[t]);
                });
            }
            return e;
          })({ ref: t, el: "a" }, a, { children: n })
        );
      });
      (l.displayName = "ButtonLink"), (t.Z = l);
    },
    5070: function (e, t, n) {
      "use strict";
      var r = n(5893),
        a = n(4184),
        o = n.n(a);
      function c(e, t, n) {
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
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
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
          l = void 0 === a ? "p" : a,
          u = e.el,
          s = void 0 === u ? "p" : u,
          d = e.truncate,
          f = e.className,
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
                  c(e, t, n[t]);
                });
            }
            return e;
          })(
            {
              className: o()(
                ((t = {}),
                c(t, "text-4xl font-bold mb-1 md:text-7xl md:mb-2", "h1" === l),
                c(
                  t,
                  "text-4xl font-bold leading-7 md:text-6xl md:leading-8",
                  "h2" === l
                ),
                c(
                  t,
                  "text-xl font-bold leading-5 md:text-6xl md:leading-8",
                  "h3" === l
                ),
                c(
                  t,
                  "text-xl font-semibold leading-5 md:text-4xl md:leading-7",
                  "h4" === l
                ),
                c(t, "text-xl leading-5", "h5" === l),
                c(t, "text-lg leading-4", "h6" === l),
                c(
                  t,
                  "text-xl leading-5 md:text-4xl md:leading-7",
                  "body" === l || "subtitle" === l
                ),
                c(t, "text-base", "p" === l),
                c(t, "", "custom" === l),
                c(t, "truncate", d),
                t),
                f
              ),
            },
            p,
            { children: n }
          )
        );
      };
    },
    9930: function (e) {
      "use strict";
      e.exports = JSON.parse('{"m":"+79938950829","O":"79938950829"}');
    },
  },
  function (e) {
    e.O(0, [9774, 2912, 5118, 230, 2888, 179], function () {
      return (t = 5749), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
