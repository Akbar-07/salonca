(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [230],
  {
    4481: function (e, n, t) {
      "use strict";
      t.d(n, {
        d: function () {
          return O;
        },
        a: function () {
          return k;
        },
      });
      var r = t(4051),
        a = t.n(r),
        o = t(5893),
        i = t(9669),
        c = t.n(i),
        s = t(1955),
        l = t(1163),
        u = t(7294),
        d = t(469);
      function p(e, n, t) {
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
      function f(e) {
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
              p(e, n, t[n]);
            });
        }
        return e;
      }
      var m = function (e, n) {
        switch (n.type) {
          case "SET_LOADING":
            return f({}, e, { userLoading: n.payload });
          case "SET_PHONE":
            return f({}, e, { phone_number: n.payload });
          case "SET_MASTER":
            return f({}, e, { master: n.payload });
          case "SET_COWORKING":
            return f({}, e, { coworking: n.payload });
          default:
            return e;
        }
      };
      function h(e, n, t, r, a, o, i) {
        try {
          var c = e[o](i),
            s = c.value;
        } catch (l) {
          return void t(l);
        }
        c.done ? n(s) : Promise.resolve(s).then(r, a);
      }
      function x(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(n, t);
            function i(e) {
              h(o, r, a, i, c, "next", e);
            }
            function c(e) {
              h(o, r, a, i, c, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function y(e, n, t) {
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
      function b(e) {
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
              y(e, n, t[n]);
            });
        }
        return e;
      }
      function g(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var v = 365,
        w = {
          master: null,
          coworking: null,
          phone_number: "",
          userLoading: !1,
        },
        j = {
          clearPhone: function () {
            console.log("clearPhone");
          },
          getOneTimePassword: (function () {
            var e = x(
              a().mark(function e(n) {
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        console.log(n);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          logIn: (function () {
            var e = x(
              a().mark(function e(n, t, r, o) {
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          console.log(
                            ""
                              .concat(n, " ")
                              .concat(t, " ")
                              .concat(r, " ")
                              .concat(o)
                          ),
                          e.abrupt("return", !1)
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n, t, r, a) {
              return e.apply(this, arguments);
            };
          })(),
          masterRegistration: (function () {
            var e = x(
              a().mark(function e(n, t) {
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        console.log("".concat(n, " ").concat(t));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n, t) {
              return e.apply(this, arguments);
            };
          })(),
          switchCoworkingVisibility: (function () {
            var e = x(
              a().mark(function e(n) {
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        console.log(n);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          coworkingRegistration: (function () {
            var e = x(
              a().mark(function e(n, t, r) {
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        console.log("".concat(n, " ").concat(t, " ").concat(r));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n, t, r) {
              return e.apply(this, arguments);
            };
          })(),
          refreshUser: x(
            a().mark(function e() {
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      console.log("refreshUser");
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          updateCoworking: (function () {
            var e = x(
              a().mark(function e(n) {
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        console.log(n);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          masterUpdate: (function () {
            var e = x(
              a().mark(function e(n, t) {
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        console.log("".concat(n, " ").concat(t));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n, t) {
              return e.apply(this, arguments);
            };
          })(),
          quit: function (e) {
            console.log(e);
          },
          deleteImage: (function () {
            var e = x(
              a().mark(function e(n) {
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        console.log(n);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
        },
        _ = (0, u.createContext)(b({}, w, j)),
        O = function (e) {
          var n = e.children,
            r = (0, u.useReducer)(m, w),
            i = r[0],
            p = r[1],
            f = (0, l.useRouter)(),
            h = (0, u.useCallback)(function () {
              p({ type: "SET_PHONE", payload: "" });
            }, []),
            y = (0, u.useCallback)(
              (function () {
                var e = x(
                  a().mark(function e(n) {
                    var t;
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = n.phone_number),
                                p({ type: "SET_LOADING", payload: !0 }),
                                (e.prev = 2),
                                (e.next = 5),
                                c().post(d.API.otp, {
                                  phone_number: "+7".concat(t),
                                })
                              );
                            case 5:
                              p({ type: "SET_PHONE", payload: t }),
                                (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(2)),
                                console.log("e", e.t0);
                            case 11:
                              return (
                                (e.prev = 11),
                                p({ type: "SET_LOADING", payload: !1 }),
                                e.finish(11)
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 8, 11, 14]]
                    );
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              []
            ),
            j = (0, u.useCallback)(
              (function () {
                var e = x(
                  a().mark(function e(n, r, o, i) {
                    var l, u;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              p({ type: "SET_LOADING", payload: !0 }),
                              (e.next = 3),
                              c().post(
                                ""
                                  .concat(d.API.auth, "?client=")
                                  .concat(r)
                                  .concat(i ? "&yclients_salon_id=" + i : ""),
                                n
                              )
                            );
                          case 3:
                            if (
                              ((l = e.sent.data),
                              s.Z.set("jwt-token", l.token, { expires: v }),
                              s.Z.set("clientStatus", r, { expires: v }),
                              !l.user)
                            ) {
                              e.next = 16;
                              break;
                            }
                            return (
                              (e.next = 9),
                              Promise.resolve().then(t.bind(t, 4765))
                            );
                          case 9:
                            return (
                              (u = e.sent.YMGoal),
                              s.Z.set("userId", l.user.unid, { expires: v }),
                              "master" === r
                                ? (u("authorization", { type: "master" }),
                                  p({ type: "SET_MASTER", payload: l.user }))
                                : (u("authorization", { type: "coworking" }),
                                  p({
                                    type: "SET_COWORKING",
                                    payload: l.user,
                                  })),
                              o && f.push({ pathname: "/lk/".concat(r) }),
                              h(),
                              p({ type: "SET_LOADING", payload: !1 }),
                              e.abrupt("return", !0)
                            );
                          case 16:
                            return (
                              p({ type: "SET_LOADING", payload: !1 }),
                              e.abrupt("return", !1)
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n, t, r, a) {
                  return e.apply(this, arguments);
                };
              })(),
              [h, f]
            ),
            O = (0, u.useCallback)(
              (function () {
                var e = x(
                  a().mark(function e(n, r) {
                    var o;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              p({ type: "SET_LOADING", payload: !0 }),
                              (e.next = 3),
                              c().post("".concat(d.API.master), n, {
                                headers: {
                                  Authorization: "Bearer ".concat(
                                    s.Z.get("jwt-token")
                                  ),
                                },
                              })
                            );
                          case 3:
                            return (
                              (o = e.sent.data),
                              s.Z.set("userId", o.unid, { expires: v }),
                              p({ type: "SET_MASTER", payload: o }),
                              r && f.push({ pathname: "/lk/master" }),
                              (e.next = 9),
                              Promise.resolve().then(t.bind(t, 4765))
                            );
                          case 9:
                            (0, e.sent.YMGoal)("registration", {
                              type: "master",
                            }),
                              h(),
                              p({ type: "SET_LOADING", payload: !1 });
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n, t) {
                  return e.apply(this, arguments);
                };
              })(),
              [h, f]
            ),
            k = (0, u.useCallback)(
              (function () {
                var e = x(
                  a().mark(function e(n, r, o) {
                    var i, l, u, m, x, y, w;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              i = n.address,
                                l = g(n, ["address"]),
                                p({ type: "SET_LOADING", payload: !0 }),
                                u = b({}, i, l),
                                (m = new FormData()).append(
                                  "phone_number",
                                  u.phone_number
                                ),
                                m.append("email", u.email),
                                m.append("name", u.name),
                                m.append("address", u.value),
                                m.append("description", u.description),
                                m.append("requirements", u.requirements),
                                m.append("latitude", "".concat(u.latitude)),
                                m.append("longitude", "".concat(u.longitude)),
                                m.append("metro_id", "".concat(u.metro_id)),
                                m.append("area_id", "".concat(u.area_id)),
                                m.append(
                                  "short_term_rent",
                                  "".concat(u.short_term_rent)
                                ),
                                m.append(
                                  "long_term_rent",
                                  "".concat(u.long_term_rent)
                                ),
                                m.append(
                                  "features",
                                  JSON.stringify(u.features)
                                ),
                                x = 0;
                              x < l.images.length;
                              x++
                            )
                              (y = l.images[x]), m.append("images", y, y.name);
                            return (
                              (e.next = 20),
                              c().post(
                                ""
                                  .concat(d.API.coworking)
                                  .concat(o ? "?yclients_salon_id=" + o : ""),
                                m,
                                {
                                  headers: {
                                    Authorization: "Bearer ".concat(
                                      s.Z.get("jwt-token")
                                    ),
                                    "Content-Type": "multipart/form-data",
                                  },
                                }
                              )
                            );
                          case 20:
                            return (
                              (w = e.sent.data),
                              (e.next = 23),
                              Promise.resolve().then(t.bind(t, 4765))
                            );
                          case 23:
                            (0, e.sent.YMGoal)("registration", {
                              type: "coworking",
                            }),
                              p({ type: "SET_COWORKING", payload: w }),
                              s.Z.set("userId", w.unid, { expires: v }),
                              r && f.push({ pathname: "/lk/coworking" }),
                              h(),
                              p({ type: "SET_LOADING", payload: !1 });
                          case 30:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n, t, r) {
                  return e.apply(this, arguments);
                };
              })(),
              [h, f]
            ),
            S = (0, u.useCallback)(
              x(
                a().mark(function e() {
                  var n, t, r, o;
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n = s.Z.get("userId"))) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            (t = s.Z.get("jwt-token")),
                            (r = s.Z.get("clientStatus")),
                            (e.next = 7),
                            c().get("".concat(d.API[r], "/").concat(n), {
                              headers: { Authorization: "Bearer ".concat(t) },
                            })
                          );
                        case 7:
                          (o = e.sent.data),
                            p(
                              "master" === r
                                ? { type: "SET_MASTER", payload: o }
                                : { type: "SET_COWORKING", payload: o }
                            );
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              []
            ),
            N = (0, u.useCallback)(
              (function () {
                var e = x(
                  a().mark(function e(n) {
                    var t, r, o, i, l;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              t = s.Z.get("userId"),
                                r = s.Z.get("jwt-token"),
                                (o = new FormData()).append("name", n.name),
                                o.append("description", n.description),
                                o.append("requirements", n.requirements),
                                o.append(
                                  "short_term_rent",
                                  "".concat(n.short_term_rent)
                                ),
                                o.append(
                                  "long_term_rent",
                                  "".concat(n.long_term_rent)
                                ),
                                o.append(
                                  "features",
                                  JSON.stringify(n.features)
                                ),
                                i = 0;
                              i < n.images.length;
                              i++
                            )
                              (l = n.images[i]), o.append("images", l, l.name);
                            return (
                              (e.next = 12),
                              c().put(
                                "".concat(d.API.coworking, "/").concat(t),
                                o,
                                {
                                  headers: {
                                    Authorization: "Bearer ".concat(r),
                                    "Content-Type": "multipart/form-data",
                                  },
                                }
                              )
                            );
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              []
            ),
            P = (0, u.useCallback)(
              (function () {
                var e = x(
                  a().mark(function e(n, t) {
                    var r;
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                p({ type: "SET_LOADING", payload: !0 }),
                                (e.prev = 1),
                                (e.next = 4),
                                c().put(
                                  "".concat(d.API.master, "/").concat(n),
                                  t,
                                  {
                                    headers: {
                                      Authorization: "Bearer ".concat(
                                        s.Z.get("jwt-token")
                                      ),
                                    },
                                  }
                                )
                              );
                            case 4:
                              (r = e.sent.data),
                                p({ type: "SET_MASTER", payload: r }),
                                (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                console.log("error", e.t0);
                            case 11:
                              return (
                                (e.prev = 11),
                                p({ type: "SET_LOADING", payload: !1 }),
                                e.finish(11)
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8, 11, 14]]
                    );
                  })
                );
                return function (n, t) {
                  return e.apply(this, arguments);
                };
              })(),
              []
            ),
            C = (0, u.useCallback)(
              (function () {
                var e = x(
                  a().mark(function e(n) {
                    var t, r, o, l;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = i.coworking),
                              (r = s.Z.get("userId")),
                              (o = s.Z.get("jwt-token")),
                              (l = new FormData()).append(
                                "active",
                                "".concat(n)
                              ),
                              (e.next = 7),
                              c().put(
                                "".concat(d.API.coworking, "/").concat(r),
                                l,
                                {
                                  headers: {
                                    Authorization: "Bearer ".concat(o),
                                    "Content-Type": "multipart/form-data",
                                  },
                                }
                              )
                            );
                          case 7:
                            p({
                              type: "SET_COWORKING",
                              payload: b({}, t, { active: n }),
                            });
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [i.coworking]
            ),
            Z = (0, u.useCallback)(
              function () {
                var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                e && f.push({ pathname: "/" });
                var n = s.Z.get("clientStatus");
                p(
                  "master" === n
                    ? { type: "SET_MASTER", payload: null }
                    : { type: "SET_COWORKING", payload: null }
                ),
                  s.Z.remove("jwt-token"),
                  s.Z.remove("userId"),
                  s.Z.remove("clientStatus");
              },
              [f]
            ),
            E = (0, u.useCallback)(
              (function () {
                var e = x(
                  a().mark(function e(n) {
                    var t, r, o;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = i.coworking),
                              (r = s.Z.get("userId")),
                              (o = s.Z.get("jwt-token")),
                              (e.next = 5),
                              c().delete(
                                ""
                                  .concat(d.API.coworking, "/")
                                  .concat(r, "/image/")
                                  .concat(n),
                                {
                                  headers: {
                                    Authorization: "Bearer ".concat(o),
                                  },
                                }
                              )
                            );
                          case 5:
                            p({
                              type: "SET_COWORKING",
                              payload: b({}, t, {
                                images: t.images.filter(function (e) {
                                  return e.id !== n;
                                }),
                              }),
                            });
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [i.coworking]
            ),
            I = (0, u.useMemo)(
              function () {
                return b({}, i, {
                  clearPhone: h,
                  getOneTimePassword: y,
                  logIn: j,
                  masterRegistration: O,
                  coworkingRegistration: k,
                  refreshUser: S,
                  updateCoworking: N,
                  masterUpdate: P,
                  switchCoworkingVisibility: C,
                  quit: Z,
                  deleteImage: E,
                });
              },
              [i, h, y, j, O, k, S, N, P, C, Z, E]
            );
          return (0, o.jsx)(_.Provider, { value: I, children: n });
        },
        k = function () {
          return (0, u.useContext)(_);
        };
    },
    5510: function (e, n, t) {
      "use strict";
      var r = t(5893),
        a = t(7294),
        o = t(9008),
        i = function (e) {
          var n = e.url,
            t = e.slug,
            a = e.title,
            i = e.desc,
            c = e.siteName,
            s = e.image,
            l = e.postfix,
            u = e.prefix,
            d = e.keywords,
            p = e.index,
            f = void 0 === p || p,
            m = e.follow,
            h = void 0 === m || m,
            x = e.locales,
            y = e.currentLocale,
            b = e.type,
            g = void 0 === b ? "website" : b,
            v = e.additionalMetaTags,
            w = e.noTags,
            j = void 0 !== w && w,
            _ = ""
              .concat(u ? "".concat(u, " | ") : "")
              .concat(a)
              .concat(l ? " | ".concat(l) : ""),
            O = t ? "/".concat(t) : "";
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(o.default, {
              children: [
                (0, r.jsx)("title", { children: _ }),
                v &&
                  v.map(function (e) {
                    return (0,
                    r.jsx)("meta", { name: e.name, content: e.content }, e.name);
                  }),
                !j &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("meta", { property: "og:title", content: _ }),
                      i &&
                        (0, r.jsx)("meta", {
                          property: "og:description",
                          content: i,
                        }),
                      i &&
                        (0, r.jsx)("meta", { name: "description", content: i }),
                      (0, r.jsx)("meta", { property: "og:type", content: g }),
                      n &&
                        (0, r.jsx)("meta", {
                          property: "og:url",
                          content: "".concat(n).concat(O),
                        }),
                      n &&
                        (0, r.jsx)("link", {
                          href: "".concat(n).concat(O),
                          rel: "canonical",
                          as: "",
                        }),
                      c &&
                        (0, r.jsx)("meta", {
                          property: "og:site_name",
                          content: c,
                        }),
                      s &&
                        (0, r.jsx)("meta", {
                          property: "og:image",
                          content: s,
                        }),
                      d && (0, r.jsx)("meta", { name: "keywords", content: d }),
                      y &&
                        (0, r.jsx)("meta", {
                          property: "og:locale",
                          content: y,
                        }),
                      x &&
                        x.map(function (e) {
                          return (0,
                          r.jsx)("link", { rel: "alternate", hrefLang: e, href: "".concat(n, "/").concat(e).concat(O) }, e);
                        }),
                      x &&
                        (0, r.jsx)("link", {
                          rel: "alternate",
                          hrefLang: "x-default",
                          href: "".concat(n).concat(O),
                        }),
                      (0, r.jsx)("meta", {
                        name: "robots",
                        content: ""
                          .concat(f ? "index" : "noindex", ",")
                          .concat(h ? "follow" : "nowfollow"),
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
      n.Z = (0, a.memo)(i);
    },
    2879: function (e, n, t) {
      "use strict";
      t.d(n, {
        u: function () {
          return a;
        },
      });
      var r = t(8769),
        a = {
          title: "",
          desc: "\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0431\u044c\u044e\u0442\u0438 \u0441\u0430\u043b\u043e\u043d\u0430\u043c \u0438 \u043a\u043e\u0432\u043e\u0440\u043a\u0438\u043d\u0433\u0430\u043c \u0433\u043e\u0440\u043e\u0434\u0430 \u041c\u043e\u0441\u043a\u0432\u044b. \u0410\u0440\u0435\u043d\u0434\u0430 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u043c\u0435\u0441\u0442 \u0434\u043b\u044f \u043f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u043e\u0432, \u0441\u0442\u0438\u043b\u0438\u0441\u0442\u043e\u0432 \u0438 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u043c\u0430\u043d\u0438\u043a\u044e\u0440\u0430.",
          url: r.y,
          siteName: "salonca.ru",
          image: "".concat(r.y, "/coworking-hero-bg.png"),
          prefix:
            "\u0421\u0430\u043b\u043e\u043d\u043a\u0430 - \u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0431\u044c\u044e\u0442\u0438 \u0441\u0430\u043b\u043e\u043d\u0430\u043c \u0433\u043e\u0440\u043e\u0434\u0430 \u041c\u043e\u0441\u043a\u0432\u044b",
          keywords:
            "\u0441\u043d\u044f\u0442\u044c \u043a\u0440\u0435\u0441\u043b\u043e \u043f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0430 \u0432 \u0430\u0440\u0435\u043d\u0434\u0443 \u043c\u043e\u0441\u043a\u0432\u0430,\u0431\u044c\u044e\u0442\u0438 \u043a\u043e\u0432\u043e\u0440\u043a\u0438\u043d\u0433 \u043c\u043e\u0441\u043a\u0432\u0430,\u043f\u043e\u0447\u0430\u0441\u043e\u0432\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0434\u043b\u044f \u0431\u044c\u044e\u0442\u0438 \u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u043c\u043e\u0441\u043a\u0432\u0430,\u043a\u043e\u0432\u043e\u0440\u043a\u0438\u043d\u0433 \u0431\u044c\u044e\u0442\u0438 \u0438\u043d\u0434\u0443\u0441\u0442\u0440\u0438\u0438,\u0430\u0440\u0435\u043d\u0434\u0430 \u0432 \u0441\u0430\u043b\u043e\u043d\u0435 \u043a\u0440\u0430\u0441\u043e\u0442\u044b, \u0430\u0440\u0435\u043d\u0434\u0430 \u0432 \u043f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0441\u043a\u043e\u0439",
          index: !0,
          follow: !0,
          type: "website",
          additionalMetaTags: [
            { name: "yandex-verification", content: "159cb0b667293f58" },
          ],
        };
    },
    3481: function (e, n, t) {
      "use strict";
      t.d(n, {
        r: function () {
          return r;
        },
      });
      var r = (0, t(8239).Z)({
        breakpoints: {
          values: { xs: 0, sm: 768, md: 1024, lg: 1280, xl: 1440 },
        },
        palette: {
          primary: { main: "#3D5A80" },
          secondary: { main: "#E0FBFC", contrastText: "#3D5A80" },
          text: { primary: "#3D5A80", secondary: "#293241" },
          error: { main: "#EE6C4D" },
          success: { main: "#87AF79" },
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: "var(--rounded-xl)",
                boxShadow: "var(--shadow-sm)",
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              outlined: {
                borderColor: "var(--color-blue-100)",
                borderRadius: "var(--rounded-md)",
                backgroundColor: "var(--color-white)",
              },
              filled: {
                backgroundColor: "var(--color-blue-100)",
                borderRadius: "var(--rounded-md)",
                "&:hover": { backgroundColor: "var(--color-blue-100)" },
              },
              label: { padding: "0 8px", fontSize: "var(--font-lg)" },
              root: { fontSize: "var(--font-2xl)", height: "30px" },
              sizeSmall: { height: "26px" },
            },
          },
          MuiFormLabel: {
            styleOverrides: {
              root: {
                color: "var(--color-primary)",
                fontSize: "var(--font-md)",
                transformOrigin: "initial",
                position: "static",
                transform: "none",
                lineHeight: "16px",
                "@media (min-width: 768px)": {
                  fontSize: "var(--font-lg)",
                  lineHeight: "18px",
                },
              },
            },
          },
          MuiSelect: { styleOverrides: { select: { minHeight: "initial" } } },
          MuiMenu: {
            styleOverrides: {
              paper: { boxShadow: "var(--shadow-lg) !important" },
            },
          },
          MuiMenuItem: {
            styleOverrides: {
              root: {
                fontSize: "inherit",
                lineHeight: "inherit",
                minHeight: "initial",
              },
            },
          },
          MuiAutocomplete: {
            styleOverrides: {
              noOptions: {
                p: "6px 16px",
                fontSize: "var(--font-3xl)",
                "@media (min-width: 768px)": { fontSize: "var(--font-3xl)" },
              },
            },
          },
        },
        typography: {
          fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
          fontSize: 14,
          h1: {
            fontSize: 20,
            lineHeight: "27px",
            fontWeight: 700,
            marginBottom: "4px",
            "@media (min-width: 768px)": {
              fontSize: 32,
              lineHeight: "44px",
              marginBottom: "8px",
            },
          },
          h2: {
            fontSize: 20,
            lineHeight: "27px",
            fontWeight: 700,
            "@media (min-width: 768px)": { fontSize: 25, lineHeight: "34px" },
          },
          h3: {
            fontSize: 14,
            lineHeight: "19px",
            fontWeight: 700,
            margin: "16px 0 12px",
            "@media (min-width: 768px)": {
              fontSize: 25,
              lineHeight: "34px",
              margin: "32px 0 16px",
            },
          },
          h4: {
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "19px",
            "@media (min-width: 768px)": { fontSize: 20, lineHeight: "27px" },
          },
          h5: { fontSize: 14, fontWeight: 600 },
          h6: { fontSize: 13, fontWeight: 400, lineHeight: "18px" },
          subtitle1: {
            fontSize: 14,
            lineHeight: "19px",
            "@media (min-width: 768px)": { fontSize: 20, lineHeight: "27px" },
          },
          subtitle2: { fontSize: 16, lineHeight: "22px" },
          body1: {
            fontSize: 14,
            lineHeight: "19px",
            "@media (min-width: 768px)": { fontSize: 20, lineHeight: "27px" },
          },
          body2: { fontSize: 14, lineHeight: "19px" },
        },
      });
    },
    6649: function (e, n, t) {
      "use strict";
      var r = t(5893),
        a = t(4184),
        o = t.n(a),
        i = t(3550),
        c = t(3571);
      function s(e, n, t) {
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
      function l(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      n.Z = function (e) {
        var n,
          t = e.children,
          a = e.variant,
          u = e.loading,
          d = e.disabled,
          p = e.className,
          f = l(e, ["children", "variant", "loading", "disabled", "className"]);
        return (0, r.jsxs)(
          i.Z,
          (function (e) {
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
                  s(e, n, t[n]);
                });
            }
            return e;
          })(
            {
              variant: a,
              disabled: u || d,
              tabIndex: u || d ? -1 : 0,
              className: o()(p, s({}, "text-transparent", u)),
              type: "button",
            },
            f,
            {
              children: [
                t,
                u &&
                  (0, r.jsx)(c.Z, {
                    wrapClassNames:
                      "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                    spinnerClassNames: o()(
                      "w-4 h-4",
                      ((n = {}),
                      s(n, "text-white", "primary" === a),
                      s(
                        n,
                        "text-primary",
                        "base" === a || "secondary" === a || "outlined" === a
                      ),
                      n)
                    ),
                  }),
              ],
            }
          )
        );
      };
    },
    3550: function (e, n, t) {
      "use strict";
      var r = t(5893),
        a = t(7294),
        o = t(4184),
        i = t.n(o);
      function c(e, n, t) {
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
      function s(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var l = (0, a.forwardRef)(function (e, n) {
        var t,
          a = e.el,
          o = e.variant,
          l = void 0 === o ? "primary" : o,
          u = e.className,
          d = e.size,
          p = void 0 === d ? "default" : d,
          f = e.customRounded,
          m = void 0 !== f && f,
          h = s(e, ["el", "variant", "className", "size", "customRounded"]),
          x = a || "button";
        return (0, r.jsx)(
          x,
          (function (e) {
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
                  c(e, n, t[n]);
                });
            }
            return e;
          })(
            {
              ref: n,
              className: i()(
                u,
                "inline-flex relative justify-center items-center disabled:opacity-50",
                ((t = {}),
                c(t, "min-h-sm lg:min-h-md p-2", "default" === p),
                c(
                  t,
                  "text-xl md:text-3xl",
                  "primary" === l || "secondary" === l || "outlined" === l
                ),
                c(
                  t,
                  "text-sm underline hover:bg-primary hover:bg-opacity-5 hover:no-underline md:text-lg",
                  "base" === l
                ),
                c(
                  t,
                  "bg-primary text-white font-bold hover:bg-blue-300 disabled:hover:bg-primary",
                  "primary" === l
                ),
                c(
                  t,
                  "bg-secondary text-primary font-semibold hover:bg-blue-100 hover:bg-opacity-50",
                  "secondary" === l
                ),
                c(
                  t,
                  "bg-transparent font-bold text-primary border border-primary hover:bg-primary hover:bg-opacity-5",
                  "outlined" === l
                ),
                c(t, "rounded-lg", !m),
                t)
              ),
            },
            h
          )
        );
      });
      n.Z = l;
    },
    4043: function (e, n, t) {
      "use strict";
      var r = t(5893),
        a = t(4184),
        o = t.n(a);
      n.Z = function (e) {
        var n = e.children,
          t = e.el,
          a = void 0 === t ? "div" : t,
          i = e.className;
        return (0, r.jsx)(a, { className: o()("container", i), children: n });
      };
    },
    3810: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          PrimaryDrawer: function () {
            return p;
          },
        });
      var r = t(5893),
        a = t(1496),
        o = t(8826),
        i = t(3946),
        c = t(4043),
        s = t(5501);
      function l(e, n, t) {
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
      function u(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var d = (0, a.ZP)(o.ZP)(function () {
          return {
            "& .MuiBackdrop-root": { backgroundColor: "rgba(41, 50, 65, 0.5)" },
            "& .MuiPaper-root": {
              borderRadius: "0 0 12px 12px",
              boxShadow: "0px 6px 24px rgba(26, 61, 107, 0.16)",
            },
          };
        }),
        p = function (e) {
          var n = e.children,
            t = e.onClose,
            a = e.headerElement,
            o = u(e, ["children", "onClose", "headerElement"]);
          return (0, r.jsx)(
            d,
            (function (e) {
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
                    l(e, n, t[n]);
                  });
              }
              return e;
            })({}, o, {
              children: (0, r.jsxs)(c.Z, {
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "sticky z-10 top-0 flex h-[40px] md:h-[70px] items-center justify-between bg-white text-primary",
                    children: [
                      a,
                      (0, r.jsx)(i.Z, {
                        onClick: t,
                        sx: { color: "var(--color-primary)" },
                        children: (0, r.jsx)(s.Z, {
                          className: "w-6 h-6",
                          name: "close",
                        }),
                      }),
                    ],
                  }),
                  n,
                ],
              }),
            })
          );
        };
      n.default = p;
    },
    5501: function (e, n, t) {
      "use strict";
      var r = t(5893);
      n.Z = function (e) {
        var n = e.name,
          t = e.className,
          a = e.section,
          o = void 0 === a ? "icons" : a;
        return (0, r.jsx)("svg", {
          className: t,
          children: (0, r.jsx)("use", {
            xlinkHref: "/sprites/"
              .concat(o, ".svg#")
              .concat(n.toLocaleLowerCase()),
          }),
        });
      };
    },
    3571: function (e, n, t) {
      "use strict";
      var r = t(5893),
        a = t(4184),
        o = t.n(a),
        i = t(5501),
        c = t(6609),
        s = t.n(c);
      n.Z = function (e) {
        var n = e.wrapClassNames,
          t = e.spinnerClassNames,
          a = void 0 === t ? "w-4 h-4 text-white" : t,
          c = e.ariaLabelledby;
        return (0, r.jsx)("span", {
          role: "progressbar",
          "aria-labelledby": c,
          className: n,
          children: (0, r.jsx)(i.Z, {
            name: "loading",
            className: o()(s().loading, a),
          }),
        });
      };
    },
    2376: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return V;
        },
      });
      var r = t(5893),
        a = t(7294),
        o = t(4298),
        i = t(3946),
        c = t(4036),
        s = t(6566),
        l = t(5778),
        u = t(3481),
        d = t(4481),
        p = t(1496),
        f = t(8826),
        m = t(5152),
        h = t(1664),
        x = t(1955),
        y = t(4184),
        b = t.n(y),
        g = t(4043),
        v = t(5501),
        w = t(122),
        j = t(5861),
        _ = t(1163),
        O = t(6649),
        k = t(3810),
        S = t(24),
        N = t.n(S);
      function P(e, n, t) {
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
      function C(e) {
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
              P(e, n, t[n]);
            });
        }
        return e;
      }
      var Z = (0, m.default)(
          function () {
            return Promise.all([t.e(7870), t.e(3083)]).then(t.bind(t, 7870));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7870];
              },
            },
          }
        ),
        E = (0, m.default)(
          function () {
            return Promise.all([
              t.e(6056),
              t.e(5675),
              t.e(2912),
              t.e(5456),
              t.e(8409),
              t.e(8648),
              t.e(1155),
              t.e(2435),
              t.e(7753),
              t.e(2028),
              t.e(6578),
              t.e(9449),
            ]).then(t.bind(t, 6578));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6578];
              },
            },
          }
        ),
        I = function (e) {
          var n = e.name,
            t = e.url;
          return (0, r.jsx)(h.default, {
            href: t,
            children: (0, r.jsx)("a", { className: N().link, children: n }),
          });
        },
        A = function (e) {
          var n = e.children,
            t = x.Z.get("clientStatus");
          return (0, r.jsx)(h.default, {
            href: "/lk/".concat(t),
            passHref: !0,
            children: (0, r.jsx)(w.Z, {
              variant: "h5",
              underline: "none",
              display: "grid",
              children: (0, r.jsx)(j.Z, {
                variant: "inherit",
                textAlign: "center",
                noWrap: !0,
                children: n,
              }),
            }),
          });
        },
        T = function (e) {
          var n = e.name,
            t = e.list,
            o = void 0 === t ? null : t,
            i = e.url,
            c = void 0 === i ? null : i,
            s = (0, a.useState)(!1),
            l = s[0],
            u = s[1];
          return o && o.length > 0
            ? (0, r.jsxs)("li", {
                className: b()(N().item, N().dropdown, P({}, N().isOpen, l)),
                children: [
                  (0, r.jsxs)("button", {
                    className: b()(N().btn, N().dropdownBtn),
                    onClick: function () {
                      u(!l);
                    },
                    children: [
                      n,
                      (0, r.jsx)(v.Z, {
                        className: N().dropdownIcon,
                        name: "arrow-dropdown",
                      }),
                    ],
                  }),
                  (0, r.jsx)("ul", {
                    className: b()(N().list, N().dropdownBody),
                    children: o.map(function (e) {
                      return (0, r.jsx)(T, C({}, e), e.id);
                    }),
                  }),
                ],
              })
            : (0, r.jsx)("li", {
                className: N().item,
                children: (0, r.jsx)(I, { name: n, url: c }),
              });
        },
        z = function (e) {
          var n = e.cities,
            t = (0, s.d)().showModal,
            o = (0, d.a)(),
            i = o.master,
            c = o.coworking,
            l = o.refreshUser,
            u = (0, a.useState)(!1),
            p = u[0],
            f = u[1],
            m = i || c,
            x = (0, _.useRouter)().pathname;
          (0, a.useEffect)(
            function () {
              l();
            },
            [l]
          );
          var y = function () {
              f(!p);
            },
            b = function () {
              t(Z, {
                title:
                  "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438",
              });
            };
          return (0, r.jsxs)("div", {
            className: N().menu,
            children: [
              (0, r.jsx)("div", {
                className: N().desktop,
                children: (0, r.jsxs)("div", {
                  className: N().menuBody,
                  children: [
                    (0, r.jsx)("nav", {
                      className: N().nav,
                      children: (0, r.jsxs)("ul", {
                        className: N().list,
                        children: [
                          n.map(function (e) {
                            return (0, r.jsx)(T, C({}, e), e.id);
                          }),
                          (0, r.jsx)("button", {
                            className: N().link,
                            onClick: b,
                            children:
                              "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438",
                          }),
                          "/coworking" === x
                            ? (0, r.jsx)(I, {
                                name: "\u041c\u0430\u0441\u0442\u0435\u0440\u0430\u043c",
                                url: "/",
                              })
                            : (0, r.jsx)(I, {
                                name: "\u0421\u0430\u043b\u043e\u043d\u0430\u043c",
                                url: "/coworking",
                              }),
                        ],
                      }),
                    }),
                    m && m.name
                      ? (0, r.jsx)(A, { noWrap: !0, children: m.name })
                      : (0, r.jsx)(O.Z, {
                          className: N().button,
                          variant: "secondary",
                          onClick: function () {
                            return t(E, {
                              type: "signup",
                              client: "master",
                              title:
                                "\u0412\u0445\u043e\u0434 \u0438\u043b\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                              fn: t,
                            });
                          },
                          children: "\u0412\u043e\u0439\u0442\u0438",
                        }),
                  ],
                }),
              }),
              (0, r.jsxs)("div", {
                className: N().mobile,
                children: [
                  (0, r.jsx)("button", {
                    className: N().menuBtn,
                    onClick: y,
                    "aria-label":
                      "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",
                    children: (0, r.jsx)(v.Z, {
                      className: "w-6 h-6",
                      name: "dehaze",
                    }),
                  }),
                  (0, r.jsx)(k.default, {
                    anchor: "top",
                    open: p,
                    onClose: y,
                    sx: { zIndex: 1201 },
                    headerElement: (0, r.jsx)(h.default, {
                      href: "/",
                      children: (0, r.jsx)("a", {
                        children: (0, r.jsx)(v.Z, {
                          className: N().logo,
                          name: "logo",
                        }),
                      }),
                    }),
                    children: (0, r.jsxs)("div", {
                      className: N().drawerBody,
                      children: [
                        (0, r.jsx)("nav", {
                          className: N().nav,
                          children: (0, r.jsxs)("ul", {
                            className: N().list,
                            children: [
                              n.map(function (e) {
                                return (0, r.jsx)(T, C({}, e), e.id);
                              }),
                              (0, r.jsx)("button", {
                                className: N().link,
                                onClick: b,
                                children:
                                  "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438",
                              }),
                              (0, r.jsx)(I, {
                                name: "\u0421\u0430\u043b\u043e\u043d\u0430\u043c",
                                url: "/coworking",
                              }),
                            ],
                          }),
                        }),
                        m && m.name
                          ? (0, r.jsx)(A, { children: m.name })
                          : (0, r.jsx)(O.Z, {
                              className: N().button,
                              variant: "secondary",
                              onClick: function () {
                                return t(E, {
                                  type: "signup",
                                  client: "master",
                                  title:
                                    "\u0412\u0445\u043e\u0434 \u0438\u043b\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                                  fn: t,
                                });
                              },
                              children: "\u0412\u043e\u0439\u0442\u0438",
                            }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        H = t(9348),
        R = t.n(H);
      var L = (0, m.default)(
          function () {
            return Promise.all([
              t.e(6056),
              t.e(5675),
              t.e(2912),
              t.e(5456),
              t.e(8409),
              t.e(8648),
              t.e(1155),
              t.e(2435),
              t.e(7753),
              t.e(2028),
              t.e(6578),
              t.e(9449),
            ]).then(t.bind(t, 6578));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6578];
              },
            },
          }
        ),
        M = (0, p.ZP)(f.ZP)(function () {
          return {
            "& .MuiBackdrop-root": { backgroundColor: "rgba(41, 50, 65, 0.5)" },
            "& .MuiPaper-root": {
              borderRadius: "0 0 12px 12px",
              boxShadow: "0px 6px 24px rgba(26, 61, 107, 0.16)",
              overflowY: "visible",
            },
          };
        }),
        B = (0, p.ZP)(i.Z)(function (e) {
          var n,
            t,
            r,
            a = e.theme;
          return (
            (n = {}),
            (t = a.breakpoints.up("sm")),
            (r = { display: "none" }),
            t in n
              ? Object.defineProperty(n, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[t] = r),
            n
          );
        }),
        D = function (e) {
          var n = e.cities,
            t = (0, s.d)().showModal,
            o = (0, d.a)(),
            c = o.master,
            l = o.coworking,
            u = (0, a.useState)(!1),
            p = u[0],
            f = u[1],
            m = x.Z.get("clientStatus"),
            y = c || l,
            w = function (e) {
              f(e);
            };
          return (0, r.jsxs)("header", {
            className: b()(R().outer, "sticky top-0 bg-white"),
            children: [
              (0, r.jsx)(g.Z, {
                children: (0, r.jsxs)("div", {
                  className: b()(
                    R().header,
                    "flex items-center justify-between"
                  ),
                  children: [
                    (0, r.jsx)(h.default, {
                      href: "/",
                      children: (0, r.jsx)("a", {
                        "aria-label":
                          "\u0421\u0430\u043b\u043e\u043d\u043a\u0430",
                        children: (0, r.jsx)(v.Z, {
                          className: R().logo,
                          name: "logo",
                        }),
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "grid grid-flow-col items-center",
                      children: [
                        n.length > 0 &&
                          (0, r.jsx)(B, {
                            size: "small",
                            onClick: function () {
                              w(!0);
                            },
                            children: (0, r.jsx)(v.Z, {
                              className: "w-6 h-6 text-primary",
                              name: "fmd-good",
                            }),
                          }),
                        y && y.name
                          ? (0, r.jsx)(h.default, {
                              href: "/lk/".concat(m),
                              passHref: !0,
                              children: (0, r.jsx)(B, {
                                size: "small",
                                "aria-label":
                                  "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",
                                children: (0, r.jsx)(v.Z, {
                                  className: "w-6 h-6 text-primary",
                                  name: "person",
                                }),
                              }),
                            })
                          : (0, r.jsx)(B, {
                              size: "small",
                              onClick: function () {
                                return t(L, {
                                  type: "signin",
                                  client: "master",
                                  title:
                                    "\u0412\u0445\u043e\u0434 \u0438\u043b\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                                  fn: t,
                                });
                              },
                              "aria-label":
                                "\u0412\u043e\u0439\u0442\u0438 \u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",
                              children: (0, r.jsx)(v.Z, {
                                className: "w-6 h-6 text-primary",
                                name: "person",
                              }),
                            }),
                        (0, r.jsx)(z, { cities: n }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(M, {
                anchor: "top",
                open: p,
                onClose: function () {
                  w(!1);
                },
                children: (0, r.jsxs)(g.Z, {
                  children: [
                    (0, r.jsxs)("div", {
                      className: b()(
                        R().menuHeader,
                        "flex items-center justify-between text-primary"
                      ),
                      children: [
                        (0, r.jsx)(h.default, {
                          href: "/",
                          children: (0, r.jsx)("a", {
                            children: (0, r.jsx)(v.Z, {
                              className: R().logo,
                              name: "logo",
                            }),
                          }),
                        }),
                        (0, r.jsx)(i.Z, {
                          onClick: function () {
                            w(!1);
                          },
                          sx: { color: "var(--color-primary)" },
                          "aria-label":
                            "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",
                          children: (0, r.jsx)(v.Z, {
                            className: "w-6 h-6",
                            name: "close",
                          }),
                        }),
                      ],
                    }),
                    n.length > 0 &&
                      (0, r.jsx)("ul", {
                        className: b()(
                          R().cityList,
                          "text-primary grid justify-items-center gap-4 py-3 px-7 mx-auto"
                        ),
                        children: n.map(function (e) {
                          return (0, r.jsx)(
                            "li",
                            {
                              children: (0, r.jsx)("button", {
                                className:
                                  "inline-flex items-center border-none rounded-lg bg-transparent text-xl",
                                onClick: function () {
                                  w(!1);
                                },
                                children: e.name,
                              }),
                            },
                            e.id
                          );
                        }),
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        G = t(3437),
        W = t.n(G);
      function F(e, n, t) {
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
      function Y(e) {
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
              F(e, n, t[n]);
            });
        }
        return e;
      }
      function K(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var q = function (e) {
          var n = e.children,
            t = e.size,
            a = void 0 === t ? "small" : t,
            o = K(e, ["children", "size"]),
            i = b()("text-lg", F({}, "sm:text-2xl", "medium" === a));
          if (
            (function (e) {
              return "href" in e;
            })(o)
          ) {
            var c = o.href,
              s = K(o, ["href"]);
            return (0, r.jsx)(h.default, {
              href: c,
              children: (0, r.jsx)(
                "a",
                Y({ className: i }, s, { children: n })
              ),
            });
          }
          return (0, r.jsx)("button", Y({ className: i }, o, { children: n }));
        },
        U = (0, m.default)(
          function () {
            return Promise.all([t.e(7870), t.e(3083)]).then(t.bind(t, 7870));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7870];
              },
            },
          }
        ),
        J = function (e) {
          var n = e.topLinks,
            t = e.bottomLinks,
            a = (0, s.d)().showModal;
          return (0, r.jsx)("footer", {
            className: "mt-14 md:mt-24",
            children: (0, r.jsxs)(g.Z, {
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "border-y border-blue-100 pt-3 pb-4 md:py-8 lg:flex lg:justify-between lg:items-center",
                  children: [
                    (0, r.jsx)("nav", {
                      children: (0, r.jsxs)("ul", {
                        className: "grid gap-4 mb-6 sm:flex md:gap-8 lg:mb-0",
                        children: [
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(q, {
                              onClick: function () {
                                a(U, {
                                  title:
                                    "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438",
                                });
                              },
                              size: "medium",
                              children:
                                "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438",
                            }),
                          }),
                          n.map(function (e) {
                            return (0,
                            r.jsx)("li", { children: (0, r.jsx)(q, { href: e.url, size: "medium", children: e.name }) }, e.id);
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "text-lg sm:text-2xl font-bold",
                      children: ["@The Suites, ", new Date().getFullYear()],
                    }),
                  ],
                }),
                t.length > 0 &&
                  (0, r.jsx)("div", {
                    className: "pt-5 pb-6 md:pt-7 md:pb-14",
                    children: (0, r.jsx)("nav", {
                      children: (0, r.jsx)("ul", {
                        className: b()(
                          W().bottomList,
                          "grid gap-y-3 gap-x-20 grid-cols-2 auto-cols-max md:gap-y-3 md:gap-x-28"
                        ),
                        children: t.map(function (e) {
                          return (0,
                          r.jsx)("li", { children: (0, r.jsx)(q, { href: e.url, children: e.name }) }, e.id);
                        }),
                      }),
                    }),
                  }),
              ],
            }),
          });
        },
        Q = JSON.parse(
          '{"c":[],"M":{"W":[{"id":5,"name":"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438","url":"/confidentiality"},{"id":6,"name":"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f","url":"/offer"}],"i":[]}}'
        ),
        V = function (e) {
          var n = e.children,
            t = (0, a.createRef)(),
            p = function (e) {
              return function () {
                var n;
                null === t ||
                  void 0 === t ||
                  null === (n = t.current) ||
                  void 0 === n ||
                  n.closeSnackbar(e);
              };
            };
          return (0, r.jsx)(d.d, {
            children: (0, r.jsx)(c.Z, {
              theme: u.r,
              children: (0, r.jsx)(l.wT, {
                maxSnack: 1,
                ref: t,
                action: function (e) {
                  return (0, r.jsx)(i.Z, {
                    onClick: p(e),
                    children: (0, r.jsx)(v.Z, {
                      className: "w-4 h-4 text-white",
                      name: "close",
                    }),
                  });
                },
                children: (0, r.jsxs)(s.Z, {
                  children: [
                    (0, r.jsx)(D, { cities: Q.c }),
                    n,
                    (0, r.jsx)("div", { id: "yandex_rtb_R-A-2499164-1" }),
                    (0, r.jsx)(o.default, {
                      id: "yandex-direct-ads",
                      dangerouslySetInnerHTML: {
                        __html:
                          'window.yaContextCb.push(()=>{\n\t\t\t\t\t\t\t\t\tYa.Context.AdvManager.render({\n\t\t\t\t\t\t\t\t\t\t"renderTo": "yandex_rtb_R-A-2499164-1",\n\t\t\t\t\t\t\t\t\t\t"blockId": "R-A-2499164-1",\n\t\t\t\t\t\t\t\t\t\t"type": "floorAd"\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t})',
                      },
                    }),
                    (0, r.jsx)(J, { topLinks: Q.M.W, bottomLinks: Q.M.i }),
                  ],
                }),
              }),
            }),
          });
        };
    },
    6609: function (e) {
      e.exports = {
        loading: "spinner_loading__k6qEr",
        wow: "spinner_wow__3QaFt",
      };
    },
    3437: function (e) {
      e.exports = { bottomList: "footer_bottomList___4sC5" };
    },
    9348: function (e) {
      e.exports = {
        outer: "header_outer__oC_jP",
        header: "header_header__dliyZ",
        menuHeader: "header_menuHeader__iQuIp",
        logo: "header_logo__BC0sp",
        cityList: "header_cityList__tTCKb",
      };
    },
    24: function (e) {
      e.exports = {
        menu: "menu_menu___6ZHp",
        button: "menu_button__0ReSs",
        mobile: "menu_mobile__H2YeT",
        desktop: "menu_desktop__FzdBD",
        drawerBody: "menu_drawerBody__yrbK_",
        menuBody: "menu_menuBody__IfST1",
        menuBtn: "menu_menuBtn__OsNOM",
        list: "menu_list__5oxIP",
        link: "menu_link__7Prly",
        dropdownBtn: "menu_dropdownBtn__YVamA",
        dropdownBody: "menu_dropdownBody__dl9Ga",
        dropdownIcon: "menu_dropdownIcon___lsgR",
        dropdown: "menu_dropdown__f9J64",
        isOpen: "menu_isOpen__7_XY_",
        item: "menu_item__opbjC",
        btn: "menu_btn__HH3Nb",
        logo: "menu_logo__hgraE",
        icon: "menu_icon__3dHY2",
        nav: "menu_nav__GLRQp",
      };
    },
  },
]);
