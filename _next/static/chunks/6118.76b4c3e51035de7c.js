(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6118, 6770],
  {
    3248: function (e, t, r) {
      "use strict";
      var n = r(5893),
        a = r(4184),
        l = r.n(a);
      t.Z = function (e) {
        var t,
          r,
          a,
          o = e.children,
          i = e.color,
          c = e.truncate;
        return (0, n.jsxs)("div", {
          className: "grid gap-2 grid-flow-col justify-start",
          children: [
            (0, n.jsx)("div", {
              className: "w-2.5 h-2.5 rounded-full mt-[5px]",
              style: { backgroundColor: "#".concat(i) },
            }),
            (0, n.jsx)("div", {
              className: l()(
                "text-xl font-light leading-5 text-black-900",
                ((t = {}),
                (r = "truncate"),
                (a = c),
                r in t
                  ? Object.defineProperty(t, r, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[r] = a),
                t)
              ),
              itemProp: "address",
              children: o,
            }),
          ],
        });
      };
    },
    4213: function (e, t, r) {
      "use strict";
      var n = r(5893),
        a = r(4184),
        l = r.n(a),
        o = r(8583),
        i = r.n(o);
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
      function s(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      t.Z = function (e) {
        var t = e.children,
          r = e.className,
          a = s(e, ["children", "className"]);
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
                  c(e, t, r[t]);
                });
            }
            return e;
          })({ className: l()(i().list, "grid gap-4 sm:gap-x-3", r) }, a, {
            children: t,
          })
        );
      };
    },
    2862: function (e, t, r) {
      "use strict";
      var n = r(5893),
        a = r(5699),
        l = r(5070);
      t.Z = function (e) {
        var t = e.value;
        return (0, n.jsx)(l.Z, {
          el: "div",
          variant: "h5",
          className: "text-blue-100",
          children: "\xb7 \u043e\u0442 "
            .concat(t / 60, " ")
            .concat(
              (0, a.Z)(t / 60, [
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
        a = r(1664),
        l = r(4184),
        o = r.n(l),
        i = r(5070),
        c = r(4750),
        s = r(3248);
      t.Z = function (e) {
        var t = e.className,
          r = e.name,
          l = e.slug,
          u = e.metroColor,
          f = e.metro,
          d = e.address,
          m = e.query,
          b = e.images,
          g = e.children,
          p = b.length > 0 && b[0].small;
        return (0, n.jsxs)("div", {
          className: o()(
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
                (0, n.jsx)(s.Z, {
                  color: u,
                  truncate: !0,
                  children: "".concat(f, ", ").concat(d),
                }),
                g,
              ],
            }),
            (0, n.jsx)(a.default, {
              href: { pathname: "/coworking/".concat(l), query: m },
              children: (0, n.jsx)("a", {
                "aria-label": r,
                className:
                  'grid before:content-[""] before:absolute before:top-0 before:left-0 before:z-10 before:w-full before:h-full image-placeholder',
                children:
                  p &&
                  (0, n.jsx)(c.d, {
                    src: p,
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
        a = r(4883);
      t.Z = function () {
        return (0, n.jsx)(a.Z, {
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
        a = r(5070),
        l = r(1823);
      t.Z = function (e) {
        var t = e.value,
          r = (0, l.Z)(t);
        return (0, n.jsx)(a.Z, {
          el: "p",
          variant: "h5",
          className: "text-primary",
          children: "\u043e\u0442 ".concat(r, "/\u0447\u0430\u0441"),
        });
      };
    },
    6262: function (e, t, r) {
      "use strict";
      var n = r(5893),
        a = r(7918);
      function l(e, t, r) {
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
                  l(e, t, r[t]);
                });
            }
            return e;
          })(
            {
              variant: "outlined",
              color: "primary",
              size: "small",
              sx: { width: "54px" },
            },
            e
          )
        );
      };
    },
    3050: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return g;
        },
      });
      var n = r(5893),
        a = r(2912),
        l = function (e) {
          var t = e.date,
            r = (0, a.Z)(new Date(), "yyyy-MM-dd");
          return (0, n.jsxs)("div", {
            className: "text-blue-100 text-xs my-1",
            children: [
              "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e",
              t
                ? t === r
                  ? " \u0441\u0435\u0433\u043e\u0434\u043d\u044f"
                  : " ".concat((0, a.Z)(new Date(t), "dd.MM.yyyy"))
                : "",
              ":",
            ],
          });
        },
        o = r(2862),
        i = r(6891),
        c = r(2910),
        s = r(1163),
        u = r(6262);
      function f(e, t, r) {
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
      function d(e) {
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
              f(e, t, r[t]);
            });
        }
        return e;
      }
      var m = function (e) {
          var t = e.slug,
            r = e.slots,
            a = e.query,
            l = e.slotDate,
            o = (0, s.useRouter)();
          return (0, n.jsx)("div", {
            className:
              "flex gap-2 flex-nowrap justify-start px-4 pb-2.5 -mx-4 -mb-2.5 overflow-x-auto relative z-20 lg:px-4 lg:-mx-4 lg:overflow-x-hidden lg:max-w-[246px]",
            children: r.map(function (e) {
              return (0, n.jsx)(
                u.Z,
                {
                  label: e,
                  onClick: function () {
                    return (function (e) {
                      var r = l ? { d: l } : {};
                      o.push({
                        pathname: "/coworking/".concat(t),
                        query: d({}, a, r, {
                          slot: new Date("1970/01/01 ".concat(e)).getTime(),
                        }),
                      });
                    })(e);
                  },
                },
                e
              );
            }),
          });
        },
        b = r(5070),
        g = function (e) {
          var t = e.priceFrom,
            r = e.durationFrom,
            a = e.shortTermRent,
            s = e.longTermRent,
            u = e.slots,
            f = e.slotDate,
            d = e.slug,
            g = e.query;
          return (0, n.jsxs)("div", {
            className: "overflow-x-hidden -mx-4 px-4",
            children: [
              (0, n.jsx)("div", {
                className: "flex items-center gap-1",
                children:
                  s && !a
                    ? (0, n.jsx)(b.Z, {
                        el: "p",
                        variant: "h5",
                        className: "text-primary",
                        children:
                          "\u0446\u0435\u043d\u0430 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u043d\u0430\u044f",
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(c.Z, { value: t }),
                          r && (0, n.jsx)(o.Z, { value: r }),
                        ],
                      }),
              }),
              (0, n.jsx)("div", {
                className:
                  "overflow-hidden px-4 -mx-4 md:px-0 md:mx-0 h-[50px]",
                children:
                  s && !a
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(l, {}), (0, n.jsx)(i.Z, {})],
                      })
                    : u.length > 0
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(l, { date: f }),
                          (0, n.jsx)(m, {
                            slotDate: f,
                            slots: u,
                            slug: d,
                            query: g,
                          }),
                        ],
                      })
                    : (0, n.jsx)("div", {
                        className: "text-blue-100 text-xs my-1",
                        children:
                          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",
                      }),
              }),
            ],
          });
        };
    },
    850: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          SearchResults: function () {
            return w;
          },
          default: function () {
            return N;
          },
        });
      var n = r(5893),
        a = r(1032),
        l = r(4043),
        o = r(4213),
        i = r(4268),
        c = r(1664),
        s = r(1163),
        u = r(4184),
        f = r.n(u),
        d = r(7294);
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function b(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return m(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return m(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return m(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var g = function (e, t) {
          var r = t - e + 1;
          return Array.from({ length: r }, function (t, r) {
            return r + e;
          });
        },
        p = r(5501);
      function x(e, t, r) {
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
      function y(e) {
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
              x(e, t, r[t]);
            });
        }
        return e;
      }
      function h(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var v = "uppercase",
        j = function (e) {
          var t = e.className,
            r = e.pageSize,
            a = e.pageCount,
            l = e.total,
            o = e.page,
            i = h(e, ["className", "pageSize", "pageCount", "total", "page"]),
            u = (0, s.useRouter)(),
            m = (function (e) {
              var t = e.totalCount,
                r = e.pageSize,
                n = e.siblingCount,
                a = void 0 === n ? 1 : n,
                l = e.currentPage;
              return (0, d.useMemo)(
                function () {
                  var e = Math.ceil(t / r);
                  if (a + 5 >= e) return g(1, e);
                  var n = Math.max(l - a, 1),
                    o = Math.min(l + a, e),
                    i = n > 2,
                    c = o < e - 2;
                  return !i && c
                    ? b(g(1, 5 * a))
                    : i && !c
                    ? b(g(e - 5 * a + 1, e))
                    : i && c
                    ? b(g(n, o))
                    : void 0;
                },
                [t, r, a, l]
              );
            })({ currentPage: o, totalCount: l, pageSize: r });
          return (0, n.jsx)(
            "div",
            y({ className: t }, i, {
              children: (0, n.jsxs)("nav", {
                "aria-label":
                  "\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c \u043f\u043e\u0438\u0441\u043a\u0430",
                className:
                  "flex justify-between lg:grid lg:grid-flow-col lg:justify-center gap-2",
                children: [
                  (0, n.jsx)("button", {
                    className: f()(
                      v,
                      "font-light rounded-md inline-flex text-blue-100 h-12 w-12 justify-center items-center",
                      x({}, "text-blue-100/50", 1 === o)
                    ),
                    onClick: function () {
                      return u.push({ query: y({}, u.query, { page: o - 1 }) });
                    },
                    disabled: 1 === o,
                    tabIndex: 1 === o ? -1 : 0,
                    "aria-label":
                      "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",
                    children: (0, n.jsx)(p.Z, {
                      name: "chevron-left",
                      className: "h-5 w-5",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "grid grid-flow-col items-center justify-center gap-2",
                    children:
                      m &&
                      m.map(function (e) {
                        return (0,
                        n.jsx)(c.default, { href: { query: y({}, u.query, { page: e }) }, children: (0, n.jsx)("a", { className: f()("font-light border rounded-md border-blue-100 inline-flex text-primary h-12 w-12 justify-center items-center", x({}, "text-white bg-blue-100", o === e)), "aria-label": "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 ".concat(e), children: e }) }, e);
                      }),
                  }),
                  (0, n.jsx)("button", {
                    className: f()(
                      v,
                      "font-light rounded-md inline-flex text-blue-100 h-12 w-12 justify-center items-center",
                      x({}, "text-blue-100/50", o === a)
                    ),
                    onClick: function () {
                      return u.push({ query: y({}, u.query, { page: o + 1 }) });
                    },
                    disabled: o === a,
                    tabIndex: o === a ? -1 : 0,
                    "aria-label":
                      "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",
                    children: (0, n.jsx)(p.Z, {
                      name: "chevron-right",
                      className: "h-5 w-5",
                    }),
                  }),
                ],
              }),
            })
          );
        },
        O = r(3050),
        w = function (e) {
          var t = e.coworkings,
            r = e.params;
          return (0, n.jsx)(l.Z, {
            children: (0, n.jsxs)("div", {
              className:
                "grid lg:grid-cols-[312px,1fr] lg:items-start lg:gap-6 lg:mt-6",
              children: [
                (0, n.jsx)(a.default, {
                  className: "hidden lg:grid",
                  params: r,
                }),
                t.data.length > 0
                  ? (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(o.Z, {
                          className: "my-4 sm:mb-8 sm:mt-0",
                          children: t.data.map(function (e) {
                            var t = e;
                            return (0,
                            n.jsx)(i.Z, { name: t.name, slug: t.slug, metro: t.metro.name, metroColor: t.metro.color, address: t.address, images: t.images, query: r, children: (0, n.jsx)(O.Z, { priceFrom: t.price_from, slots: t.slots, shortTermRent: t.short_term_rent, longTermRent: t.long_term_rent, slotDate: t.slots_date, durationFrom: t.booking_duration_from, slug: t.slug, query: r }) }, t.unid);
                          }),
                        }),
                        (0, n.jsx)(j, {
                          page: t.current_page,
                          pageSize: t.items_per_page,
                          total: t.total_items,
                          pageCount: t.total_pages,
                        }),
                      ],
                    })
                  : (0, n.jsx)(n.Fragment, {
                      children:
                        "\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",
                    }),
              ],
            }),
          });
        },
        N = w;
    },
    1823: function (e, t, r) {
      "use strict";
      var n = r(7294);
      t.Z = function (e) {
        var t = (0, n.useState)("0"),
          r = t[0],
          a = t[1];
        return (
          (0, n.useEffect)(function () {
            !(function (t) {
              var r = new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(e);
              a(r);
            })();
          }, []),
          r
        );
      };
    },
    4883: function (e, t, r) {
      "use strict";
      var n = r(5893),
        a = r(4184),
        l = r.n(a);
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
      t.Z = function (e) {
        var t,
          r = e.label,
          a = e.leftIcon,
          i = e.className,
          c = e.variant,
          s = void 0 === c ? "filled" : c,
          u = e.size,
          f = void 0 === u ? "medium" : u;
        return (0, n.jsxs)("span", {
          className: l()(
            i,
            "rounded-md inline-flex items-center gap-2 px-2",
            ((t = {}),
            o(t, "bg-blue-100 text-white", "filled" === s),
            o(t, "border border-blue-100 text-primary", "outlined" === s),
            o(t, "text-xl", "small" === f),
            o(t, "text-xl md:text-4xl py-1", "large" === f),
            t)
          ),
          children: [a, r],
        });
      };
    },
    4750: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return c;
        },
      });
      var n = r(5893),
        a = r(5675),
        l = r(8769);
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
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var c = function (e) {
        var t = e.src,
          r = e.alt,
          c = void 0 === r ? "" : r,
          s = i(e, ["src", "alt"]);
        return (0, n.jsx)(
          a.default,
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
          })({ src: "".concat(l.y).concat(t), alt: c }, s)
        );
      };
    },
    8583: function (e) {
      e.exports = { list: "card-list_list__kV3IG" };
    },
  },
]);
