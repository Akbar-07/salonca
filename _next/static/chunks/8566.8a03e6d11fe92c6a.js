"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8566, 6770],
  {
    6645: function (e, r, t) {
      var n = t(5893),
        o = t(7294),
        i = t(3550);
      function a(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function l(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (t = i[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (t = i[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var u = (0, o.forwardRef)(function (e, r) {
        var t = e.children,
          o = l(e, ["children"]);
        return (0, n.jsx)(
          i.Z,
          (function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = null != arguments[r] ? arguments[r] : {},
                n = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })
                )),
                n.forEach(function (r) {
                  a(e, r, t[r]);
                });
            }
            return e;
          })({ ref: r, el: "a" }, o, { children: t })
        );
      });
      (u.displayName = "ButtonLink"), (r.Z = u);
    },
    2444: function (e, r, t) {
      var n = t(5893),
        o = t(5344),
        i = t(7038),
        a = t(1634),
        l = t(1806),
        u = t(7003);
      function c(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (r) {
              c(e, r, t[r]);
            });
        }
        return e;
      }
      function d(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (t = i[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (t = i[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      r.Z = function (e) {
        var r = e.value,
          t = e.onChange,
          c = e.textFieldProps,
          f = e.minDate,
          p = void 0 === f ? new Date() : f,
          m = e.inputFormat,
          b = void 0 === m ? "PPP" : m,
          g = e.mask,
          h = void 0 === g ? "__-__-____" : g,
          A = d(e, [
            "value",
            "onChange",
            "textFieldProps",
            "minDate",
            "inputFormat",
            "mask",
          ]);
        return (0, n.jsx)(o.Z, {
          dateAdapter: a.Z,
          locale: l.Z,
          children: (0, n.jsx)(
            i.Z,
            s(
              {
                inputFormat: b,
                minDate: p,
                mask: h,
                cancelText: "\u041e\u0442\u043c\u0435\u043d\u0430",
                clearText: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
                todayText: "\u0421\u0435\u0433\u043e\u0434\u043d\u044f",
                toolbarTitle:
                  "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0430\u0442\u0443",
                DialogProps: {
                  sx: {
                    zIndex: "1500",
                    ".MuiBackdrop-root": {
                      backgroundColor: "rgba(41, 50, 65, 0.5)",
                    },
                    ".MuiPaper-root": {
                      borderRadius: "var(--rounded-xl)",
                      boxShadow: "var(--shadow-sm)",
                      color: "#333",
                    },
                    ".MuiButton-root": { color: "#333" },
                    ".MuiButtonBase-root": { color: "#333" },
                    ".MuiButtonBase-root.Mui-disabled": {
                      color: "rgba(0, 0, 0, 0.38)",
                    },
                    ".MuiPickersDay-today": {
                      borderColor: "var(--color-primary)",
                    },
                    ".MuiPickersDay-root.Mui-selected": {
                      borderColor: "var(--color-primary)",
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-white)",
                    },
                  },
                },
                PaperProps: {
                  sx: {
                    borderRadius: "var(--rounded-xl)",
                    boxShadow: "var(--shadow-sm)",
                  },
                },
                views: ["day"],
                showToolbar: !1,
                value: r,
                onChange: t,
                renderInput: function (e) {
                  var r = e.InputProps,
                    t = e.inputRef,
                    o = e.inputProps;
                  return (0, n.jsx)(
                    u.Z,
                    s(
                      { ref: t },
                      o,
                      {
                        endAdornment:
                          null === r || void 0 === r ? void 0 : r.endAdornment,
                      },
                      c
                    )
                  );
                },
              },
              A
            )
          ),
        });
      };
    },
    5070: function (e, r, t) {
      var n = t(5893),
        o = t(4184),
        i = t.n(o);
      function a(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function l(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (t = i[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (t = i[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      r.Z = function (e) {
        var r,
          t = e.children,
          o = e.variant,
          u = void 0 === o ? "p" : o,
          c = e.el,
          s = void 0 === c ? "p" : c,
          d = e.truncate,
          f = e.className,
          p = l(e, ["children", "variant", "el", "truncate", "className"]);
        return (0, n.jsx)(
          s,
          (function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = null != arguments[r] ? arguments[r] : {},
                n = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })
                )),
                n.forEach(function (r) {
                  a(e, r, t[r]);
                });
            }
            return e;
          })(
            {
              className: i()(
                ((r = {}),
                a(r, "text-4xl font-bold mb-1 md:text-7xl md:mb-2", "h1" === u),
                a(
                  r,
                  "text-4xl font-bold leading-7 md:text-6xl md:leading-8",
                  "h2" === u
                ),
                a(
                  r,
                  "text-xl font-bold leading-5 md:text-6xl md:leading-8",
                  "h3" === u
                ),
                a(
                  r,
                  "text-xl font-semibold leading-5 md:text-4xl md:leading-7",
                  "h4" === u
                ),
                a(r, "text-xl leading-5", "h5" === u),
                a(r, "text-lg leading-4", "h6" === u),
                a(
                  r,
                  "text-xl leading-5 md:text-4xl md:leading-7",
                  "body" === u || "subtitle" === u
                ),
                a(r, "text-base", "p" === u),
                a(r, "", "custom" === u),
                a(r, "truncate", d),
                r),
                f
              ),
            },
            p,
            { children: t }
          )
        );
      };
    },
    8411: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return D;
          },
        });
      var n = t(5893),
        o = t(5675),
        i = t(4043),
        a = t(5070),
        l = t(4051),
        u = t.n(l),
        c = t(7294),
        s = t(1496),
        d = t(1155),
        f = t(2912),
        p = t(7129),
        m = t(3206),
        b = t(3481),
        g = t(6645),
        h = t(2444),
        A = t(5488),
        v = t(3485),
        x = t(7003),
        y = t(1664);
      function O(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
        return n;
      }
      function j(e, r, t, n, o, i, a) {
        try {
          var l = e[i](a),
            u = l.value;
        } catch (c) {
          return void t(c);
        }
        l.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function w(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function P(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (r) {
              w(e, r, t[r]);
            });
        }
        return e;
      }
      function S(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (t = i[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (t = i[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function k(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return O(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, r) {
            if (!e) return;
            if ("string" === typeof e) return O(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return O(e, r);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var C,
        E = (0, s.ZP)(v.Z)(function (e) {
          var r,
            t = e.theme;
          return (
            w(
              (r = {
                fontSize: "var(--font-xl)",
                color: "var(--color-primary)",
                lineHeight: "20px",
                minHeight: "initial",
              }),
              t.breakpoints.up("sm"),
              {
                fontSize: "var(--font-4xl)",
                lineHeight: "24px",
                height: "60px",
              }
            ),
            w(
              r,
              "&, &::before",
              w(
                { borderRadius: "var(--rounded-lg) var(--rounded-lg) 0 0" },
                t.breakpoints.up("md"),
                { borderRadius: "var(--rounded-lg) 0 0 var(--rounded-lg)" }
              )
            ),
            w(r, "&::before", { borderColor: "var(--color-white)" }),
            r
          );
        }),
        I =
          (w(
            (C = {
              borderRadius: "0",
              fontSize: "var(--font-xl)",
              lineHeight: "20px",
            }),
            b.r.breakpoints.up("sm"),
            {
              fontSize: "var(--font-4xl)",
              lineHeight: "24px",
              minHeight: "60px",
            }
          ),
          w(C, "&::before", {
            borderColor: "var(--color-white)",
            borderRadius: "0",
          }),
          w(C, "&:hover:not(.Mui-disabled)::before", {
            borderColor: "var(--color-white)",
          }),
          w(C, "& .MuiInput-input", {
            borderRadius: "0",
            height: "100%",
            padding: "0 16px",
            "&::placeholder": { color: "var(--color-primary)" },
          }),
          C),
        z = function () {
          var e = (0, m.O)(),
            r = e.metros,
            o = e.areas,
            i = e.specialties,
            l = (0, c.useState)(0),
            s = l[0],
            v = l[1],
            O = (0, c.useState)(""),
            C = O[0],
            z = O[1],
            Z = (0, c.useState)(null),
            D = Z[0],
            M = Z[1],
            _ = (0, c.useState)({}),
            R = _[0],
            B = _[1],
            N = (function () {
              var e,
                r =
                  ((e = u().mark(function e() {
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Promise.resolve().then(t.bind(t, 6431))
                            );
                          case 2:
                            (0, e.sent.VKPEvent)("to_search_page");
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var r = this,
                      t = arguments;
                    return new Promise(function (n, o) {
                      var i = e.apply(r, t);
                      function a(e) {
                        j(i, n, o, a, l, "next", e);
                      }
                      function l(e) {
                        j(i, n, o, a, l, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function () {
                return r.apply(this, arguments);
              };
            })(),
            F = function (e, r) {
              if ((z(r), r)) {
                var t, n;
                if (
                  null === (t = Object.prototype.hasOwnProperty) || void 0 === t
                    ? void 0
                    : t.call(r, "m")
                ) {
                  R.a;
                  var o = S(R, ["a"]);
                  B(P({}, o, { m: r.id }));
                } else if (
                  null === (n = Object.prototype.hasOwnProperty) || void 0 === n
                    ? void 0
                    : n.call(r, "a")
                ) {
                  R.m;
                  var i = S(R, ["m"]);
                  B(P({}, i, { a: r.id }));
                }
              } else {
                R.m, R.a;
                var a = S(R, ["m", "a"]);
                B(a);
              }
            },
            Q = k(r)
              .concat(k(o))
              .filter(function (e) {
                return e.has_coworkings;
              })
              .map(function (e) {
                return P(
                  {
                    groupKey: e.m
                      ? "\u041c\u0435\u0442\u0440\u043e"
                      : "\u0420\u0430\u0439\u043e\u043d",
                  },
                  e
                );
              });
          return (0, n.jsxs)("div", {
            className:
              "grid gap-2 md:gap-3 lg:grid-cols-4 xl:grid-cols-[310px,310px,1fr,1fr]",
            children: [
              (0, n.jsxs)(E, {
                id: "home-specialization",
                value: s,
                onChange: function (e) {
                  var r = e.target.value;
                  if ((v(r), 0 === r)) {
                    R.s;
                    var t = S(R, ["s"]);
                    B(t);
                  } else B(P({}, R, { s: r }));
                },
                MenuProps: {
                  sx: {
                    ".MuiMenu-paper": w(
                      { borderRadius: "var(--rounded-lg)", mt: "-44px" },
                      b.r.breakpoints.up("sm"),
                      { mt: "-60px" }
                    ),
                  },
                },
                children: [
                  (0, n.jsx)(A.Z, {
                    value: 0,
                    children:
                      "\u0412\u0430\u0448\u0430 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",
                  }),
                  i.map(function (e) {
                    return (0,
                    n.jsx)(A.Z, { value: e.id, children: e.name }, e.name);
                  }),
                ],
              }),
              (0, n.jsx)(d.Z, {
                open: (null === C || void 0 === C ? void 0 : C.length) > 0,
                noOptionsText:
                  "\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432",
                options: Q.sort(function (e) {
                  return "\u041c\u0435\u0442\u0440\u043e" === e.groupKey
                    ? 1
                    : -1;
                }),
                groupBy: function (e) {
                  return e.groupKey;
                },
                getOptionLabel: function (e) {
                  return e.name;
                },
                onInputChange: F,
                onChange: F,
                id: "home-address",
                isOptionEqualToValue: function (e, r) {
                  return e.name === r.name;
                },
                sx: {
                  "&.MuiAutocomplete-root .MuiInput-root .MuiInput-input": w(
                    { p: "0 16px" },
                    b.r.breakpoints.up("sm"),
                    { p: "0 16px" }
                  ),
                },
                renderOption: function (e, r) {
                  return (0, n.jsx)(n.Fragment, {
                    children: r.color
                      ? (0, c.createElement)(
                          A.Z,
                          P(
                            {
                              sx: {
                                "&.MuiMenuItem-root": {
                                  display: "grid",
                                  gridTemplateColumns: "10px 1fr",
                                  gap: "8px",
                                },
                              },
                            },
                            e,
                            {
                              key: ""
                                .concat(r.name, "-")
                                .concat(r.line, "-")
                                .concat(r.id),
                              children: [
                                (0, n.jsx)("div", {
                                  className: "rounded-full w-2 h-2",
                                  style: {
                                    backgroundColor: "#".concat(r.color),
                                  },
                                }),
                                (0, n.jsx)(a.Z, {
                                  truncate: !0,
                                  children: r.name,
                                }),
                              ],
                            }
                          )
                        )
                      : (0, n.jsx)(
                          A.Z,
                          P({}, e, {
                            children: (0, n.jsx)(a.Z, {
                              truncate: !0,
                              children: r.name,
                            }),
                          }),
                          "".concat(r.name, "-").concat(r.id)
                        ),
                  });
                },
                renderInput: function (e) {
                  var r = e.InputProps,
                    t = e.inputProps;
                  return (0, n.jsx)(
                    x.Z,
                    P(
                      {
                        placeholder:
                          "\u0420\u0430\u0439\u043e\u043d \u0438\u043b\u0438 \u043c\u0435\u0442\u0440\u043e",
                        autocompleteRef: r.ref,
                      },
                      t,
                      { sx: I }
                    )
                  );
                },
              }),
              (0, n.jsx)(h.Z, {
                onChange: function (e) {
                  e && (M(e), B(P({}, R, { d: (0, f.Z)(e, "yyyy-MM-dd") })));
                },
                value: D,
                inputFormat: "P",
                mask: "__.__.____",
                textFieldProps: {
                  id: "home-date",
                  placeholder: "\u0414\u0430\u0442\u0430",
                  sx: I,
                },
              }),
              (0, n.jsx)(y.default, {
                passHref: !0,
                href: "/search.html".concat(p.stringify(R, !0)),
                children: (0, n.jsx)(g.Z, {
                  className:
                    "rounded-b-lg h-11 md:h-[60px] lg:rounded-bl-none lg:rounded-r-lg",
                  onClick: N,
                  customRounded: !0,
                  size: "custom",
                  children: "\u041d\u0430\u0439\u0442\u0438",
                }),
              }),
            ],
          });
        },
        Z = {
          src: "/_next/static/media/master-hero-bg.ce44580f.jpg",
          height: 1470,
          width: 4320,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIRAwQTFGH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCiR2c3Xb5ZXTd34mAAtmAv/9k=",
        },
        D = function (e) {
          var r = e.title,
            t = e.subtitle;
          return (0, n.jsxs)("section", {
            className: "relative mx-auto max-w-screen-3xl",
            children: [
              (0, n.jsx)(i.Z, {
                children: (0, n.jsxs)("div", {
                  className:
                    "relative grid z-10 lg:h-[490px] gap-4 max-w-6xl mx-auto pt-5 pb-7 lg:grid-flow-row lg:auto-rows-max lg:items-start lg:pt-32",
                  children: [
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(a.Z, {
                          el: "h1",
                          variant: "h1",
                          children: r,
                        }),
                        (0, n.jsx)(a.Z, { variant: "subtitle", children: t }),
                      ],
                    }),
                    (0, n.jsx)(z, {}),
                  ],
                }),
              }),
              (0, n.jsx)(o.default, {
                src: Z,
                layout: "fill",
                alt: "",
                priority: !0,
                placeholder: "blur",
                objectFit: "cover",
                objectPosition: "center",
              }),
            ],
          });
        };
    },
    7129: function (e, r) {
      var t = Object.prototype.hasOwnProperty;
      function n(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, " "));
        } catch (r) {
          return null;
        }
      }
      function o(e) {
        try {
          return encodeURIComponent(e);
        } catch (r) {
          return null;
        }
      }
      (r.stringify = function (e, r) {
        r = r || "";
        var n,
          i,
          a = [];
        for (i in ("string" !== typeof r && (r = "?"), e))
          if (t.call(e, i)) {
            if (
              ((n = e[i]) ||
                (null !== n && undefined !== n && !isNaN(n)) ||
                (n = ""),
              (i = o(i)),
              (n = o(n)),
              null === i || null === n)
            )
              continue;
            a.push(i + "=" + n);
          }
        return a.length ? r + a.join("&") : "";
      }),
        (r.parse = function (e) {
          for (var r, t = /([^=?#&]+)=?([^&]*)/g, o = {}; (r = t.exec(e)); ) {
            var i = n(r[1]),
              a = n(r[2]);
            null === i || null === a || i in o || (o[i] = a);
          }
          return o;
        });
    },
  },
]);
