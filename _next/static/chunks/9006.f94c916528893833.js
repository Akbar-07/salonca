(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9006],
  {
    3248: function (e, t, r) {
      "use strict";
      var n = r(5893),
        l = r(4184),
        a = r.n(l);
      t.Z = function (e) {
        var t,
          r,
          l,
          c = e.children,
          i = e.color,
          o = e.truncate;
        return (0, n.jsxs)("div", {
          className: "grid gap-2 grid-flow-col justify-start",
          children: [
            (0, n.jsx)("div", {
              className: "w-2.5 h-2.5 rounded-full mt-[5px]",
              style: { backgroundColor: "#".concat(i) },
            }),
            (0, n.jsx)("div", {
              className: a()(
                "text-xl font-light leading-5 text-black-900",
                ((t = {}),
                (r = "truncate"),
                (l = o),
                r in t
                  ? Object.defineProperty(t, r, {
                      value: l,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[r] = l),
                t)
              ),
              itemProp: "address",
              children: c,
            }),
          ],
        });
      };
    },
    4213: function (e, t, r) {
      "use strict";
      var n = r(5893),
        l = r(4184),
        a = r.n(l),
        c = r(8583),
        i = r.n(c);
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function u(e, t) {
        if (null == e) return {};
        var r,
          n,
          l = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              l = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (l[r] = e[r]));
        }
        return l;
      }
      t.Z = function (e) {
        var t = e.children,
          r = e.className,
          l = u(e, ["children", "className"]);
        return (0, n.jsx)(
          "div",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  o(e, t, r[t]);
                });
            }
            return e;
          })({ className: a()(i().list, "grid gap-4 sm:gap-x-3", r) }, l, {
            children: t,
          })
        );
      };
    },
    2862: function (e, t, r) {
      "use strict";
      var n = r(5893),
        l = r(5699),
        a = r(5070);
      t.Z = function (e) {
        var t = e.value;
        return (0, n.jsx)(a.Z, {
          el: "div",
          variant: "h5",
          className: "text-blue-100",
          children: "\xb7 \u043e\u0442 "
            .concat(t / 60, " ")
            .concat(
              (0, l.Z)(t / 60, [
                "\u0447\u0430\u0441\u0430",
                "\u0447\u0430\u0441\u043e\u0432",
                "\u0447\u0430\u0441\u043e\u0432",
              ])
            ),
        });
      };
    },
    4268: function (e, t, r) {
      "use strict";
      var n = r(5893),
        l = r(1664),
        a = r(4184),
        c = r.n(a),
        i = r(5070),
        o = r(4750),
        u = r(3248);
      t.Z = function (e) {
        var t = e.className,
          r = e.name,
          a = e.slug,
          s = e.metroColor,
          f = e.metro,
          d = e.address,
          m = e.query,
          b = e.images,
          x = e.children,
          g = b.length > 0 && b[0].small;
        return (0, n.jsxs)("div", {
          className: c()(
            t,
            "grid relative grid-rows-[1fr,152px] rounded-xl overflow-hidden bg-white shadow"
          ),
          children: [
            (0, n.jsxs)("div", {
              className: "grid gap-1 px-4 pt-3 pb-1.5",
              children: [
                (0, n.jsx)(i.Z, {
                  el: "h2",
                  variant: "h5",
                  className: "text-black font-bold",
                  truncate: !0,
                  children: r,
                }),
                (0, n.jsx)(u.Z, {
                  color: s,
                  truncate: !0,
                  children: "".concat(f, ", ").concat(d),
                }),
                x,
              ],
            }),
            (0, n.jsx)(l.default, {
              href: { pathname: "/coworking/".concat(a), query: m },
              children: (0, n.jsx)("a", {
                "aria-label": r,
                className:
                  'grid before:content-[""] before:absolute before:top-0 before:left-0 before:z-10 before:w-full before:h-full image-placeholder',
                children:
                  g &&
                  (0, n.jsx)(o.d, {
                    src: g,
                    width: "328",
                    height: "200",
                    alt: r,
                    layout: "responsive",
                    objectFit: "cover",
                    objectPosition: "center",
                  }),
              }),
            }),
          ],
        });
      };
    },
    6891: function (e, t, r) {
      "use strict";
      var n = r(5893),
        l = r(4883);
      t.Z = function () {
        return (0, n.jsx)(l.Z, {
          size: "small",
          variant: "outlined",
          label:
            "\u0434\u043e\u043b\u0433\u043e\u0441\u0440\u043e\u0447\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430",
          className: "h-[26px]",
        });
      };
    },
    2910: function (e, t, r) {
      "use strict";
      var n = r(5893),
        l = r(5070),
        a = r(1823);
      t.Z = function (e) {
        var t = e.value,
          r = (0, a.Z)(t);
        return (0, n.jsx)(l.Z, {
          el: "p",
          variant: "h5",
          className: "text-primary",
          children: "\u043e\u0442 ".concat(r, "/\u0447\u0430\u0441"),
        });
      };
    },
    1823: function (e, t, r) {
      "use strict";
      var n = r(7294);
      t.Z = function (e) {
        var t = (0, n.useState)("0"),
          r = t[0],
          l = t[1];
        return (
          (0, n.useEffect)(function () {
            !(function (t) {
              var r = new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(e);
              l(r);
            })();
          }, []),
          r
        );
      };
    },
    5699: function (e, t) {
      "use strict";
      t.Z = function (e, t) {
        var r = Math.ceil(e);
        return t[
          r % 100 > 4 && r % 100 < 20
            ? 2
            : [2, 0, 1, 1, 1, 2][r % 10 < 5 ? r % 10 : 5]
        ];
      };
    },
    4883: function (e, t, r) {
      "use strict";
      var n = r(5893),
        l = r(4184),
        a = r.n(l);
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      t.Z = function (e) {
        var t,
          r = e.label,
          l = e.leftIcon,
          i = e.className,
          o = e.variant,
          u = void 0 === o ? "filled" : o,
          s = e.size,
          f = void 0 === s ? "medium" : s;
        return (0, n.jsxs)("span", {
          className: a()(
            i,
            "rounded-md inline-flex items-center gap-2 px-2",
            ((t = {}),
            c(t, "bg-blue-100 text-white", "filled" === u),
            c(t, "border border-blue-100 text-primary", "outlined" === u),
            c(t, "text-xl", "small" === f),
            c(t, "text-xl md:text-4xl py-1", "large" === f),
            t)
          ),
          children: [l, r],
        });
      };
    },
    6645: function (e, t, r) {
      "use strict";
      var n = r(5893),
        l = r(7294),
        a = r(3550);
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          l = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              l = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (l[r] = e[r]));
        }
        return l;
      }
      var o = (0, l.forwardRef)(function (e, t) {
        var r = e.children,
          l = i(e, ["children"]);
        return (0, n.jsx)(
          a.Z,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  c(e, t, r[t]);
                });
            }
            return e;
          })({ ref: t, el: "a" }, l, { children: r })
        );
      });
      (o.displayName = "ButtonLink"), (t.Z = o);
    },
    4750: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return o;
        },
      });
      var n = r(5893),
        l = r(5675),
        a = r(8769);
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          l = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              l = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (l[r] = e[r]));
        }
        return l;
      }
      var o = function (e) {
        var t = e.src,
          r = e.alt,
          o = void 0 === r ? "" : r,
          u = i(e, ["src", "alt"]);
        return (0, n.jsx)(
          l.default,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  c(e, t, r[t]);
                });
            }
            return e;
          })({ src: "".concat(a.y).concat(t), alt: o }, u)
        );
      };
    },
    5070: function (e, t, r) {
      "use strict";
      var n = r(5893),
        l = r(4184),
        a = r.n(l);
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          l = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              l = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (l[r] = e[r]));
        }
        return l;
      }
      t.Z = function (e) {
        var t,
          r = e.children,
          l = e.variant,
          o = void 0 === l ? "p" : l,
          u = e.el,
          s = void 0 === u ? "p" : u,
          f = e.truncate,
          d = e.className,
          m = i(e, ["children", "variant", "el", "truncate", "className"]);
        return (0, n.jsx)(
          s,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  c(e, t, r[t]);
                });
            }
            return e;
          })(
            {
              className: a()(
                ((t = {}),
                c(t, "text-4xl font-bold mb-1 md:text-7xl md:mb-2", "h1" === o),
                c(
                  t,
                  "text-4xl font-bold leading-7 md:text-6xl md:leading-8",
                  "h2" === o
                ),
                c(
                  t,
                  "text-xl font-bold leading-5 md:text-6xl md:leading-8",
                  "h3" === o
                ),
                c(
                  t,
                  "text-xl font-semibold leading-5 md:text-4xl md:leading-7",
                  "h4" === o
                ),
                c(t, "text-xl leading-5", "h5" === o),
                c(t, "text-lg leading-4", "h6" === o),
                c(
                  t,
                  "text-xl leading-5 md:text-4xl md:leading-7",
                  "body" === o || "subtitle" === o
                ),
                c(t, "text-base", "p" === o),
                c(t, "", "custom" === o),
                c(t, "truncate", f),
                t),
                d
              ),
            },
            m,
            { children: r }
          )
        );
      };
    },
    9006: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return b;
          },
        });
      var n = r(5893),
        l = r(4043),
        a = r(5070),
        c = r(6645),
        i = r(1664),
        o = r(4213),
        u = r(4268),
        s = r(2862),
        f = r(6891),
        d = r(2910),
        m = function (e) {
          var t = e.priceFrom,
            r = e.durationFrom,
            l = e.shortTermRent,
            a = e.longTermRent;
          return (0, n.jsx)("div", {
            className: "flex gap-1 h-[26px]",
            children:
              a && !l
                ? (0, n.jsx)(f.Z, {})
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(d.Z, { value: t }),
                      r && (0, n.jsx)(s.Z, { value: r }),
                    ],
                  }),
          });
        },
        b = function (e) {
          var t = e.title,
            r = e.btnLabel,
            s = e.coworkings;
          return (0, n.jsx)(l.Z, {
            children: (0, n.jsxs)("section", {
              className: "mt-6 mb-14 sm:mt-12 sm:mb-24",
              children: [
                (0, n.jsx)(a.Z, {
                  el: "h2",
                  variant: "h2",
                  className: "text-black",
                  children: t,
                }),
                (0, n.jsx)(o.Z, {
                  className: "mt-4 mb-8 sm:mt-8 lg:mb-12",
                  children: s.map(function (e) {
                    return (0,
                    n.jsx)(u.Z, { metro: e.metro.name, metroColor: e.metro.color, name: e.name, slug: e.slug, address: e.address, images: e.images, children: (0, n.jsx)(m, { priceFrom: e.price_from, durationFrom: e.booking_duration_from, shortTermRent: e.short_term_rent, longTermRent: e.long_term_rent }) }, e.unid);
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "grid justify-center",
                  children: (0, n.jsx)(i.default, {
                    href: "/search.html",
                    passHref: !0,
                    children: (0, n.jsx)(c.Z, {
                      className: "w-[234px] lg:w-[378px]",
                      children: r,
                    }),
                  }),
                }),
              ],
            }),
          });
        };
    },
    8583: function (e) {
      e.exports = { list: "card-list_list__kV3IG" };
    },
  },
]);
