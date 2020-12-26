// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/three.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// threejs.org/license
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).THREE = {});
}(this, function (t) {
  "use strict";

  void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function (t) {
    return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
  }), void 0 === Math.sign && (Math.sign = function (t) {
    return t < 0 ? -1 : t > 0 ? 1 : +t;
  }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
    get: function get() {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
    }
  }), void 0 === Object.assign && (Object.assign = function (t) {
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");

    for (var e = Object(t), n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      if (null != r) for (var i in r) {
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
      }
    }

    return e;
  });
  var e = 100,
      n = 300,
      r = 301,
      i = 302,
      a = 303,
      o = 304,
      s = 306,
      c = 307,
      l = 1e3,
      u = 1001,
      h = 1002,
      d = 1003,
      p = 1004,
      f = 1005,
      m = 1006,
      v = 1007,
      g = 1008,
      y = 1009,
      x = 1012,
      _ = 1014,
      b = 1015,
      w = 1016,
      M = 1020,
      S = 1022,
      T = 1023,
      E = 1026,
      A = 1027,
      L = 33776,
      R = 33777,
      C = 33778,
      P = 33779,
      I = 35840,
      N = 35841,
      D = 35842,
      O = 35843,
      B = 37492,
      z = 37496,
      U = 2300,
      F = 2301,
      G = 2302,
      H = 2400,
      k = 2401,
      V = 2402,
      W = 2500,
      j = 2501,
      q = 3e3,
      X = 3001,
      Y = 3007,
      Z = 3002,
      J = 3004,
      Q = 3005,
      K = 3006,
      $ = 7680,
      tt = 35044,
      et = 35048,
      nt = "300 es";

  function rt() {}

  Object.assign(rt.prototype, {
    addEventListener: function addEventListener(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      var n = this._listeners;
      void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
    },
    hasEventListener: function hasEventListener(t, e) {
      if (void 0 === this._listeners) return !1;
      var n = this._listeners;
      return void 0 !== n[t] && -1 !== n[t].indexOf(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      if (void 0 !== this._listeners) {
        var n = this._listeners[t];

        if (void 0 !== n) {
          var r = n.indexOf(e);
          -1 !== r && n.splice(r, 1);
        }
      }
    },
    dispatchEvent: function dispatchEvent(t) {
      if (void 0 !== this._listeners) {
        var e = this._listeners[t.type];

        if (void 0 !== e) {
          t.target = this;

          for (var n = e.slice(0), r = 0, i = n.length; r < i; r++) {
            n[r].call(this, t);
          }
        }
      }
    }
  });

  for (var it = [], at = 0; at < 256; at++) {
    it[at] = (at < 16 ? "0" : "") + at.toString(16);
  }

  var ot = 1234567,
      st = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function generateUUID() {
      var t = 4294967295 * Math.random() | 0,
          e = 4294967295 * Math.random() | 0,
          n = 4294967295 * Math.random() | 0,
          r = 4294967295 * Math.random() | 0;
      return (it[255 & t] + it[t >> 8 & 255] + it[t >> 16 & 255] + it[t >> 24 & 255] + "-" + it[255 & e] + it[e >> 8 & 255] + "-" + it[e >> 16 & 15 | 64] + it[e >> 24 & 255] + "-" + it[63 & n | 128] + it[n >> 8 & 255] + "-" + it[n >> 16 & 255] + it[n >> 24 & 255] + it[255 & r] + it[r >> 8 & 255] + it[r >> 16 & 255] + it[r >> 24 & 255]).toUpperCase();
    },
    clamp: function clamp(t, e, n) {
      return Math.max(e, Math.min(n, t));
    },
    euclideanModulo: function euclideanModulo(t, e) {
      return (t % e + e) % e;
    },
    mapLinear: function mapLinear(t, e, n, r, i) {
      return r + (t - e) * (i - r) / (n - e);
    },
    lerp: function lerp(t, e, n) {
      return (1 - n) * t + n * e;
    },
    smoothstep: function smoothstep(t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
    },
    smootherstep: function smootherstep(t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
    },
    randInt: function randInt(t, e) {
      return t + Math.floor(Math.random() * (e - t + 1));
    },
    randFloat: function randFloat(t, e) {
      return t + Math.random() * (e - t);
    },
    randFloatSpread: function randFloatSpread(t) {
      return t * (.5 - Math.random());
    },
    seededRandom: function seededRandom(t) {
      return void 0 !== t && (ot = t % 2147483647), ((ot = 16807 * ot % 2147483647) - 1) / 2147483646;
    },
    degToRad: function degToRad(t) {
      return t * st.DEG2RAD;
    },
    radToDeg: function radToDeg(t) {
      return t * st.RAD2DEG;
    },
    isPowerOfTwo: function isPowerOfTwo(t) {
      return 0 == (t & t - 1) && 0 !== t;
    },
    ceilPowerOfTwo: function ceilPowerOfTwo(t) {
      return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
    },
    floorPowerOfTwo: function floorPowerOfTwo(t) {
      return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
    },
    setQuaternionFromProperEuler: function setQuaternionFromProperEuler(t, e, n, r, i) {
      var a = Math.cos,
          o = Math.sin,
          s = a(n / 2),
          c = o(n / 2),
          l = a((e + r) / 2),
          u = o((e + r) / 2),
          h = a((e - r) / 2),
          d = o((e - r) / 2),
          p = a((r - e) / 2),
          f = o((r - e) / 2);

      switch (i) {
        case "XYX":
          t.set(s * u, c * h, c * d, s * l);
          break;

        case "YZY":
          t.set(c * d, s * u, c * h, s * l);
          break;

        case "ZXZ":
          t.set(c * h, c * d, s * u, s * l);
          break;

        case "XZX":
          t.set(s * u, c * f, c * p, s * l);
          break;

        case "YXY":
          t.set(c * p, s * u, c * f, s * l);
          break;

        case "ZYZ":
          t.set(c * f, c * p, s * u, s * l);
          break;

        default:
          console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
      }
    }
  };

  function ct(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function lt(t, e, n) {
    return e && ct(t.prototype, e), n && ct(t, n), t;
  }

  function ut(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
  }

  function ht(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  var dt,
      pt = function () {
    function t(t, e) {
      void 0 === t && (t = 0), void 0 === e && (e = 0), Object.defineProperty(this, "isVector2", {
        value: !0
      }), this.x = t, this.y = e;
    }

    var e = t.prototype;
    return e.set = function (t, e) {
      return this.x = t, this.y = e, this;
    }, e.setScalar = function (t) {
      return this.x = t, this.y = t, this;
    }, e.setX = function (t) {
      return this.x = t, this;
    }, e.setY = function (t) {
      return this.y = t, this;
    }, e.setComponent = function (t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;

        case 1:
          this.y = e;
          break;

        default:
          throw new Error("index is out of range: " + t);
      }

      return this;
    }, e.getComponent = function (t) {
      switch (t) {
        case 0:
          return this.x;

        case 1:
          return this.y;

        default:
          throw new Error("index is out of range: " + t);
      }
    }, e.clone = function () {
      return new this.constructor(this.x, this.y);
    }, e.copy = function (t) {
      return this.x = t.x, this.y = t.y, this;
    }, e.add = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this);
    }, e.addScalar = function (t) {
      return this.x += t, this.y += t, this;
    }, e.addVectors = function (t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this;
    }, e.addScaledVector = function (t, e) {
      return this.x += t.x * e, this.y += t.y * e, this;
    }, e.sub = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this);
    }, e.subScalar = function (t) {
      return this.x -= t, this.y -= t, this;
    }, e.subVectors = function (t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this;
    }, e.multiply = function (t) {
      return this.x *= t.x, this.y *= t.y, this;
    }, e.multiplyScalar = function (t) {
      return this.x *= t, this.y *= t, this;
    }, e.divide = function (t) {
      return this.x /= t.x, this.y /= t.y, this;
    }, e.divideScalar = function (t) {
      return this.multiplyScalar(1 / t);
    }, e.applyMatrix3 = function (t) {
      var e = this.x,
          n = this.y,
          r = t.elements;
      return this.x = r[0] * e + r[3] * n + r[6], this.y = r[1] * e + r[4] * n + r[7], this;
    }, e.min = function (t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
    }, e.max = function (t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
    }, e.clamp = function (t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
    }, e.clampScalar = function (t, e) {
      return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
    }, e.clampLength = function (t, e) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    }, e.floor = function () {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }, e.ceil = function () {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }, e.round = function () {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }, e.roundToZero = function () {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
    }, e.negate = function () {
      return this.x = -this.x, this.y = -this.y, this;
    }, e.dot = function (t) {
      return this.x * t.x + this.y * t.y;
    }, e.cross = function (t) {
      return this.x * t.y - this.y * t.x;
    }, e.lengthSq = function () {
      return this.x * this.x + this.y * this.y;
    }, e.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }, e.manhattanLength = function () {
      return Math.abs(this.x) + Math.abs(this.y);
    }, e.normalize = function () {
      return this.divideScalar(this.length() || 1);
    }, e.angle = function () {
      var t = Math.atan2(-this.y, -this.x) + Math.PI;
      return t;
    }, e.distanceTo = function (t) {
      return Math.sqrt(this.distanceToSquared(t));
    }, e.distanceToSquared = function (t) {
      var e = this.x - t.x,
          n = this.y - t.y;
      return e * e + n * n;
    }, e.manhattanDistanceTo = function (t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }, e.setLength = function (t) {
      return this.normalize().multiplyScalar(t);
    }, e.lerp = function (t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
    }, e.lerpVectors = function (t, e, n) {
      return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
    }, e.equals = function (t) {
      return t.x === this.x && t.y === this.y;
    }, e.fromArray = function (t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this;
    }, e.toArray = function (t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t;
    }, e.fromBufferAttribute = function (t, e, n) {
      return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this;
    }, e.rotateAround = function (t, e) {
      var n = Math.cos(e),
          r = Math.sin(e),
          i = this.x - t.x,
          a = this.y - t.y;
      return this.x = i * n - a * r + t.x, this.y = i * r + a * n + t.y, this;
    }, e.random = function () {
      return this.x = Math.random(), this.y = Math.random(), this;
    }, lt(t, [{
      key: "width",
      get: function get() {
        return this.x;
      },
      set: function set(t) {
        this.x = t;
      }
    }, {
      key: "height",
      get: function get() {
        return this.y;
      },
      set: function set(t) {
        this.y = t;
      }
    }]), t;
  }(),
      ft = function () {
    function t() {
      Object.defineProperty(this, "isMatrix3", {
        value: !0
      }), this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
    }

    var e = t.prototype;
    return e.set = function (t, e, n, r, i, a, o, s, c) {
      var l = this.elements;
      return l[0] = t, l[1] = r, l[2] = o, l[3] = e, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
    }, e.identity = function () {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }, e.clone = function () {
      return new this.constructor().fromArray(this.elements);
    }, e.copy = function (t) {
      var e = this.elements,
          n = t.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
    }, e.extractBasis = function (t, e, n) {
      return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    }, e.setFromMatrix4 = function (t) {
      var e = t.elements;
      return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
    }, e.multiply = function (t) {
      return this.multiplyMatrices(this, t);
    }, e.premultiply = function (t) {
      return this.multiplyMatrices(t, this);
    }, e.multiplyMatrices = function (t, e) {
      var n = t.elements,
          r = e.elements,
          i = this.elements,
          a = n[0],
          o = n[3],
          s = n[6],
          c = n[1],
          l = n[4],
          u = n[7],
          h = n[2],
          d = n[5],
          p = n[8],
          f = r[0],
          m = r[3],
          v = r[6],
          g = r[1],
          y = r[4],
          x = r[7],
          _ = r[2],
          b = r[5],
          w = r[8];
      return i[0] = a * f + o * g + s * _, i[3] = a * m + o * y + s * b, i[6] = a * v + o * x + s * w, i[1] = c * f + l * g + u * _, i[4] = c * m + l * y + u * b, i[7] = c * v + l * x + u * w, i[2] = h * f + d * g + p * _, i[5] = h * m + d * y + p * b, i[8] = h * v + d * x + p * w, this;
    }, e.multiplyScalar = function (t) {
      var e = this.elements;
      return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
    }, e.determinant = function () {
      var t = this.elements,
          e = t[0],
          n = t[1],
          r = t[2],
          i = t[3],
          a = t[4],
          o = t[5],
          s = t[6],
          c = t[7],
          l = t[8];
      return e * a * l - e * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
    }, e.invert = function () {
      var t = this.elements,
          e = t[0],
          n = t[1],
          r = t[2],
          i = t[3],
          a = t[4],
          o = t[5],
          s = t[6],
          c = t[7],
          l = t[8],
          u = l * a - o * c,
          h = o * s - l * i,
          d = c * i - a * s,
          p = e * u + n * h + r * d;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      var f = 1 / p;
      return t[0] = u * f, t[1] = (r * c - l * n) * f, t[2] = (o * n - r * a) * f, t[3] = h * f, t[4] = (l * e - r * s) * f, t[5] = (r * i - o * e) * f, t[6] = d * f, t[7] = (n * s - c * e) * f, t[8] = (a * e - n * i) * f, this;
    }, e.transpose = function () {
      var t,
          e = this.elements;
      return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
    }, e.getNormalMatrix = function (t) {
      return this.setFromMatrix4(t).copy(this).invert().transpose();
    }, e.transposeIntoArray = function (t) {
      var e = this.elements;
      return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
    }, e.setUvTransform = function (t, e, n, r, i, a, o) {
      var s = Math.cos(i),
          c = Math.sin(i);
      this.set(n * s, n * c, -n * (s * a + c * o) + a + t, -r * c, r * s, -r * (-c * a + s * o) + o + e, 0, 0, 1);
    }, e.scale = function (t, e) {
      var n = this.elements;
      return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this;
    }, e.rotate = function (t) {
      var e = Math.cos(t),
          n = Math.sin(t),
          r = this.elements,
          i = r[0],
          a = r[3],
          o = r[6],
          s = r[1],
          c = r[4],
          l = r[7];
      return r[0] = e * i + n * s, r[3] = e * a + n * c, r[6] = e * o + n * l, r[1] = -n * i + e * s, r[4] = -n * a + e * c, r[7] = -n * o + e * l, this;
    }, e.translate = function (t, e) {
      var n = this.elements;
      return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this;
    }, e.equals = function (t) {
      for (var e = this.elements, n = t.elements, r = 0; r < 9; r++) {
        if (e[r] !== n[r]) return !1;
      }

      return !0;
    }, e.fromArray = function (t, e) {
      void 0 === e && (e = 0);

      for (var n = 0; n < 9; n++) {
        this.elements[n] = t[n + e];
      }

      return this;
    }, e.toArray = function (t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var n = this.elements;
      return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
    }, t;
  }(),
      mt = {
    getDataURL: function getDataURL(t) {
      if (/^data:/i.test(t.src)) return t.src;
      if ("undefined" == typeof HTMLCanvasElement) return t.src;
      var e;
      if (t instanceof HTMLCanvasElement) e = t;else {
        void 0 === dt && (dt = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), dt.width = t.width, dt.height = t.height;
        var n = dt.getContext("2d");
        t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = dt;
      }
      return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png");
    }
  },
      vt = 0;

  function gt(t, e, n, r, i, a, o, s, c, l) {
    void 0 === t && (t = gt.DEFAULT_IMAGE), void 0 === e && (e = gt.DEFAULT_MAPPING), void 0 === n && (n = u), void 0 === r && (r = u), void 0 === i && (i = m), void 0 === a && (a = g), void 0 === o && (o = T), void 0 === s && (s = y), void 0 === c && (c = 1), void 0 === l && (l = q), Object.defineProperty(this, "id", {
      value: vt++
    }), this.uuid = st.generateUUID(), this.name = "", this.image = t, this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = r, this.magFilter = i, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = s, this.offset = new pt(0, 0), this.repeat = new pt(1, 1), this.center = new pt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ft(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = l, this.version = 0, this.onUpdate = null;
  }

  function yt(t) {
    return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? mt.getDataURL(t) : t.data ? {
      data: Array.prototype.slice.call(t.data),
      width: t.width,
      height: t.height,
      type: t.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }

  gt.DEFAULT_IMAGE = void 0, gt.DEFAULT_MAPPING = n, gt.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: gt,
    isTexture: !0,
    updateMatrix: function updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this;
    },
    toJSON: function toJSON(t) {
      var e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      var n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };

      if (void 0 !== this.image) {
        var r = this.image;

        if (void 0 === r.uuid && (r.uuid = st.generateUUID()), !e && void 0 === t.images[r.uuid]) {
          var i;

          if (Array.isArray(r)) {
            i = [];

            for (var a = 0, o = r.length; a < o; a++) {
              r[a].isDataTexture ? i.push(yt(r[a].image)) : i.push(yt(r[a]));
            }
          } else i = yt(r);

          t.images[r.uuid] = {
            uuid: r.uuid,
            url: i
          };
        }

        n.image = r.uuid;
      }

      return e || (t.textures[this.uuid] = n), n;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    },
    transformUv: function transformUv(t) {
      if (this.mapping !== n) return t;
      if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
        case l:
          t.x = t.x - Math.floor(t.x);
          break;

        case u:
          t.x = t.x < 0 ? 0 : 1;
          break;

        case h:
          1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
      }
      if (t.y < 0 || t.y > 1) switch (this.wrapT) {
        case l:
          t.y = t.y - Math.floor(t.y);
          break;

        case u:
          t.y = t.y < 0 ? 0 : 1;
          break;

        case h:
          1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
      }
      return this.flipY && (t.y = 1 - t.y), t;
    }
  }), Object.defineProperty(gt.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  });

  var xt = function () {
    function t(t, e, n, r) {
      void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), Object.defineProperty(this, "isVector4", {
        value: !0
      }), this.x = t, this.y = e, this.z = n, this.w = r;
    }

    var e = t.prototype;
    return e.set = function (t, e, n, r) {
      return this.x = t, this.y = e, this.z = n, this.w = r, this;
    }, e.setScalar = function (t) {
      return this.x = t, this.y = t, this.z = t, this.w = t, this;
    }, e.setX = function (t) {
      return this.x = t, this;
    }, e.setY = function (t) {
      return this.y = t, this;
    }, e.setZ = function (t) {
      return this.z = t, this;
    }, e.setW = function (t) {
      return this.w = t, this;
    }, e.setComponent = function (t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;

        case 1:
          this.y = e;
          break;

        case 2:
          this.z = e;
          break;

        case 3:
          this.w = e;
          break;

        default:
          throw new Error("index is out of range: " + t);
      }

      return this;
    }, e.getComponent = function (t) {
      switch (t) {
        case 0:
          return this.x;

        case 1:
          return this.y;

        case 2:
          return this.z;

        case 3:
          return this.w;

        default:
          throw new Error("index is out of range: " + t);
      }
    }, e.clone = function () {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }, e.copy = function (t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this;
    }, e.add = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this);
    }, e.addScalar = function (t) {
      return this.x += t, this.y += t, this.z += t, this.w += t, this;
    }, e.addVectors = function (t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
    }, e.addScaledVector = function (t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
    }, e.sub = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this);
    }, e.subScalar = function (t) {
      return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
    }, e.subVectors = function (t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
    }, e.multiplyScalar = function (t) {
      return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
    }, e.applyMatrix4 = function (t) {
      var e = this.x,
          n = this.y,
          r = this.z,
          i = this.w,
          a = t.elements;
      return this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * i, this;
    }, e.divideScalar = function (t) {
      return this.multiplyScalar(1 / t);
    }, e.setAxisAngleFromQuaternion = function (t) {
      this.w = 2 * Math.acos(t.w);
      var e = Math.sqrt(1 - t.w * t.w);
      return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
    }, e.setAxisAngleFromRotationMatrix = function (t) {
      var e,
          n,
          r,
          i,
          a = .01,
          o = .1,
          s = t.elements,
          c = s[0],
          l = s[4],
          u = s[8],
          h = s[1],
          d = s[5],
          p = s[9],
          f = s[2],
          m = s[6],
          v = s[10];

      if (Math.abs(l - h) < a && Math.abs(u - f) < a && Math.abs(p - m) < a) {
        if (Math.abs(l + h) < o && Math.abs(u + f) < o && Math.abs(p + m) < o && Math.abs(c + d + v - 3) < o) return this.set(1, 0, 0, 0), this;
        e = Math.PI;

        var g = (c + 1) / 2,
            y = (d + 1) / 2,
            x = (v + 1) / 2,
            _ = (l + h) / 4,
            b = (u + f) / 4,
            w = (p + m) / 4;

        return g > y && g > x ? g < a ? (n = 0, r = .707106781, i = .707106781) : (r = _ / (n = Math.sqrt(g)), i = b / n) : y > x ? y < a ? (n = .707106781, r = 0, i = .707106781) : (n = _ / (r = Math.sqrt(y)), i = w / r) : x < a ? (n = .707106781, r = .707106781, i = 0) : (n = b / (i = Math.sqrt(x)), r = w / i), this.set(n, r, i, e), this;
      }

      var M = Math.sqrt((m - p) * (m - p) + (u - f) * (u - f) + (h - l) * (h - l));
      return Math.abs(M) < .001 && (M = 1), this.x = (m - p) / M, this.y = (u - f) / M, this.z = (h - l) / M, this.w = Math.acos((c + d + v - 1) / 2), this;
    }, e.min = function (t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
    }, e.max = function (t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
    }, e.clamp = function (t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
    }, e.clampScalar = function (t, e) {
      return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
    }, e.clampLength = function (t, e) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    }, e.floor = function () {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }, e.ceil = function () {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }, e.round = function () {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }, e.roundToZero = function () {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
    }, e.negate = function () {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }, e.dot = function (t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }, e.lengthSq = function () {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }, e.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }, e.manhattanLength = function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }, e.normalize = function () {
      return this.divideScalar(this.length() || 1);
    }, e.setLength = function (t) {
      return this.normalize().multiplyScalar(t);
    }, e.lerp = function (t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
    }, e.lerpVectors = function (t, e, n) {
      return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
    }, e.equals = function (t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
    }, e.fromArray = function (t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
    }, e.toArray = function (t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
    }, e.fromBufferAttribute = function (t, e, n) {
      return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
    }, e.random = function () {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }, lt(t, [{
      key: "width",
      get: function get() {
        return this.z;
      },
      set: function set(t) {
        this.z = t;
      }
    }, {
      key: "height",
      get: function get() {
        return this.w;
      },
      set: function set(t) {
        this.w = t;
      }
    }]), t;
  }();

  function _t(t, e, n) {
    this.width = t, this.height = e, this.scissor = new xt(0, 0, t, e), this.scissorTest = !1, this.viewport = new xt(0, 0, t, e), n = n || {}, this.texture = new gt(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = t, this.texture.image.height = e, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : m, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null;
  }

  function bt(t, e, n) {
    _t.call(this, t, e, n), this.samples = 4;
  }

  _t.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: _t,
    isWebGLRenderTarget: !0,
    setSize: function setSize(t, e) {
      this.width === t && this.height === e || (this.width = t, this.height = e, this.texture.image.width = t, this.texture.image.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }), bt.prototype = Object.assign(Object.create(_t.prototype), {
    constructor: bt,
    isWebGLMultisampleRenderTarget: !0,
    copy: function copy(t) {
      return _t.prototype.copy.call(this, t), this.samples = t.samples, this;
    }
  });

  var wt = function () {
    function t(t, e, n, r) {
      void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), Object.defineProperty(this, "isQuaternion", {
        value: !0
      }), this._x = t, this._y = e, this._z = n, this._w = r;
    }

    t.slerp = function (t, e, n, r) {
      return n.copy(t).slerp(e, r);
    }, t.slerpFlat = function (t, e, n, r, i, a, o) {
      var s = n[r + 0],
          c = n[r + 1],
          l = n[r + 2],
          u = n[r + 3],
          h = i[a + 0],
          d = i[a + 1],
          p = i[a + 2],
          f = i[a + 3];

      if (u !== f || s !== h || c !== d || l !== p) {
        var m = 1 - o,
            v = s * h + c * d + l * p + u * f,
            g = v >= 0 ? 1 : -1,
            y = 1 - v * v;

        if (y > Number.EPSILON) {
          var x = Math.sqrt(y),
              _ = Math.atan2(x, v * g);

          m = Math.sin(m * _) / x, o = Math.sin(o * _) / x;
        }

        var b = o * g;

        if (s = s * m + h * b, c = c * m + d * b, l = l * m + p * b, u = u * m + f * b, m === 1 - o) {
          var w = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
          s *= w, c *= w, l *= w, u *= w;
        }
      }

      t[e] = s, t[e + 1] = c, t[e + 2] = l, t[e + 3] = u;
    }, t.multiplyQuaternionsFlat = function (t, e, n, r, i, a) {
      var o = n[r],
          s = n[r + 1],
          c = n[r + 2],
          l = n[r + 3],
          u = i[a],
          h = i[a + 1],
          d = i[a + 2],
          p = i[a + 3];
      return t[e] = o * p + l * u + s * d - c * h, t[e + 1] = s * p + l * h + c * u - o * d, t[e + 2] = c * p + l * d + o * h - s * u, t[e + 3] = l * p - o * u - s * h - c * d, t;
    };
    var e = t.prototype;
    return e.set = function (t, e, n, r) {
      return this._x = t, this._y = e, this._z = n, this._w = r, this._onChangeCallback(), this;
    }, e.clone = function () {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }, e.copy = function (t) {
      return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
    }, e.setFromEuler = function (t, e) {
      if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      var n = t._x,
          r = t._y,
          i = t._z,
          a = t._order,
          o = Math.cos,
          s = Math.sin,
          c = o(n / 2),
          l = o(r / 2),
          u = o(i / 2),
          h = s(n / 2),
          d = s(r / 2),
          p = s(i / 2);

      switch (a) {
        case "XYZ":
          this._x = h * l * u + c * d * p, this._y = c * d * u - h * l * p, this._z = c * l * p + h * d * u, this._w = c * l * u - h * d * p;
          break;

        case "YXZ":
          this._x = h * l * u + c * d * p, this._y = c * d * u - h * l * p, this._z = c * l * p - h * d * u, this._w = c * l * u + h * d * p;
          break;

        case "ZXY":
          this._x = h * l * u - c * d * p, this._y = c * d * u + h * l * p, this._z = c * l * p + h * d * u, this._w = c * l * u - h * d * p;
          break;

        case "ZYX":
          this._x = h * l * u - c * d * p, this._y = c * d * u + h * l * p, this._z = c * l * p - h * d * u, this._w = c * l * u + h * d * p;
          break;

        case "YZX":
          this._x = h * l * u + c * d * p, this._y = c * d * u + h * l * p, this._z = c * l * p - h * d * u, this._w = c * l * u - h * d * p;
          break;

        case "XZY":
          this._x = h * l * u - c * d * p, this._y = c * d * u - h * l * p, this._z = c * l * p + h * d * u, this._w = c * l * u + h * d * p;
          break;

        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
      }

      return !1 !== e && this._onChangeCallback(), this;
    }, e.setFromAxisAngle = function (t, e) {
      var n = e / 2,
          r = Math.sin(n);
      return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
    }, e.setFromRotationMatrix = function (t) {
      var e = t.elements,
          n = e[0],
          r = e[4],
          i = e[8],
          a = e[1],
          o = e[5],
          s = e[9],
          c = e[2],
          l = e[6],
          u = e[10],
          h = n + o + u;

      if (h > 0) {
        var d = .5 / Math.sqrt(h + 1);
        this._w = .25 / d, this._x = (l - s) * d, this._y = (i - c) * d, this._z = (a - r) * d;
      } else if (n > o && n > u) {
        var p = 2 * Math.sqrt(1 + n - o - u);
        this._w = (l - s) / p, this._x = .25 * p, this._y = (r + a) / p, this._z = (i + c) / p;
      } else if (o > u) {
        var f = 2 * Math.sqrt(1 + o - n - u);
        this._w = (i - c) / f, this._x = (r + a) / f, this._y = .25 * f, this._z = (s + l) / f;
      } else {
        var m = 2 * Math.sqrt(1 + u - n - o);
        this._w = (a - r) / m, this._x = (i + c) / m, this._y = (s + l) / m, this._z = .25 * m;
      }

      return this._onChangeCallback(), this;
    }, e.setFromUnitVectors = function (t, e) {
      var n = t.dot(e) + 1;
      return n < 1e-6 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
    }, e.angleTo = function (t) {
      return 2 * Math.acos(Math.abs(st.clamp(this.dot(t), -1, 1)));
    }, e.rotateTowards = function (t, e) {
      var n = this.angleTo(t);
      if (0 === n) return this;
      var r = Math.min(1, e / n);
      return this.slerp(t, r), this;
    }, e.identity = function () {
      return this.set(0, 0, 0, 1);
    }, e.invert = function () {
      return this.conjugate();
    }, e.conjugate = function () {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }, e.dot = function (t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }, e.lengthSq = function () {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }, e.length = function () {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }, e.normalize = function () {
      var t = this.length();
      return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
    }, e.multiply = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
    }, e.premultiply = function (t) {
      return this.multiplyQuaternions(t, this);
    }, e.multiplyQuaternions = function (t, e) {
      var n = t._x,
          r = t._y,
          i = t._z,
          a = t._w,
          o = e._x,
          s = e._y,
          c = e._z,
          l = e._w;
      return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
    }, e.slerp = function (t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      var n = this._x,
          r = this._y,
          i = this._z,
          a = this._w,
          o = a * t._w + n * t._x + r * t._y + i * t._z;
      if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = i, this;
      var s = 1 - o * o;

      if (s <= Number.EPSILON) {
        var c = 1 - e;
        return this._w = c * a + e * this._w, this._x = c * n + e * this._x, this._y = c * r + e * this._y, this._z = c * i + e * this._z, this.normalize(), this._onChangeCallback(), this;
      }

      var l = Math.sqrt(s),
          u = Math.atan2(l, o),
          h = Math.sin((1 - e) * u) / l,
          d = Math.sin(e * u) / l;
      return this._w = a * h + this._w * d, this._x = n * h + this._x * d, this._y = r * h + this._y * d, this._z = i * h + this._z * d, this._onChangeCallback(), this;
    }, e.equals = function (t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
    }, e.fromArray = function (t, e) {
      return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
    }, e.toArray = function (t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
    }, e.fromBufferAttribute = function (t, e) {
      return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this;
    }, e._onChange = function (t) {
      return this._onChangeCallback = t, this;
    }, e._onChangeCallback = function () {}, lt(t, [{
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t, this._onChangeCallback();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t, this._onChangeCallback();
      }
    }, {
      key: "z",
      get: function get() {
        return this._z;
      },
      set: function set(t) {
        this._z = t, this._onChangeCallback();
      }
    }, {
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set(t) {
        this._w = t, this._onChangeCallback();
      }
    }]), t;
  }(),
      Mt = function () {
    function t(t, e, n) {
      void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), Object.defineProperty(this, "isVector3", {
        value: !0
      }), this.x = t, this.y = e, this.z = n;
    }

    var e = t.prototype;
    return e.set = function (t, e, n) {
      return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this;
    }, e.setScalar = function (t) {
      return this.x = t, this.y = t, this.z = t, this;
    }, e.setX = function (t) {
      return this.x = t, this;
    }, e.setY = function (t) {
      return this.y = t, this;
    }, e.setZ = function (t) {
      return this.z = t, this;
    }, e.setComponent = function (t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;

        case 1:
          this.y = e;
          break;

        case 2:
          this.z = e;
          break;

        default:
          throw new Error("index is out of range: " + t);
      }

      return this;
    }, e.getComponent = function (t) {
      switch (t) {
        case 0:
          return this.x;

        case 1:
          return this.y;

        case 2:
          return this.z;

        default:
          throw new Error("index is out of range: " + t);
      }
    }, e.clone = function () {
      return new this.constructor(this.x, this.y, this.z);
    }, e.copy = function (t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this;
    }, e.add = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
    }, e.addScalar = function (t) {
      return this.x += t, this.y += t, this.z += t, this;
    }, e.addVectors = function (t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
    }, e.addScaledVector = function (t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
    }, e.sub = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
    }, e.subScalar = function (t) {
      return this.x -= t, this.y -= t, this.z -= t, this;
    }, e.subVectors = function (t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
    }, e.multiply = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
    }, e.multiplyScalar = function (t) {
      return this.x *= t, this.y *= t, this.z *= t, this;
    }, e.multiplyVectors = function (t, e) {
      return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
    }, e.applyEuler = function (t) {
      return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Tt.setFromEuler(t));
    }, e.applyAxisAngle = function (t, e) {
      return this.applyQuaternion(Tt.setFromAxisAngle(t, e));
    }, e.applyMatrix3 = function (t) {
      var e = this.x,
          n = this.y,
          r = this.z,
          i = t.elements;
      return this.x = i[0] * e + i[3] * n + i[6] * r, this.y = i[1] * e + i[4] * n + i[7] * r, this.z = i[2] * e + i[5] * n + i[8] * r, this;
    }, e.applyNormalMatrix = function (t) {
      return this.applyMatrix3(t).normalize();
    }, e.applyMatrix4 = function (t) {
      var e = this.x,
          n = this.y,
          r = this.z,
          i = t.elements,
          a = 1 / (i[3] * e + i[7] * n + i[11] * r + i[15]);
      return this.x = (i[0] * e + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * e + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * e + i[6] * n + i[10] * r + i[14]) * a, this;
    }, e.applyQuaternion = function (t) {
      var e = this.x,
          n = this.y,
          r = this.z,
          i = t.x,
          a = t.y,
          o = t.z,
          s = t.w,
          c = s * e + a * r - o * n,
          l = s * n + o * e - i * r,
          u = s * r + i * n - a * e,
          h = -i * e - a * n - o * r;
      return this.x = c * s + h * -i + l * -o - u * -a, this.y = l * s + h * -a + u * -i - c * -o, this.z = u * s + h * -o + c * -a - l * -i, this;
    }, e.project = function (t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
    }, e.unproject = function (t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
    }, e.transformDirection = function (t) {
      var e = this.x,
          n = this.y,
          r = this.z,
          i = t.elements;
      return this.x = i[0] * e + i[4] * n + i[8] * r, this.y = i[1] * e + i[5] * n + i[9] * r, this.z = i[2] * e + i[6] * n + i[10] * r, this.normalize();
    }, e.divide = function (t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
    }, e.divideScalar = function (t) {
      return this.multiplyScalar(1 / t);
    }, e.min = function (t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
    }, e.max = function (t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
    }, e.clamp = function (t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
    }, e.clampScalar = function (t, e) {
      return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
    }, e.clampLength = function (t, e) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    }, e.floor = function () {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }, e.ceil = function () {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }, e.round = function () {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }, e.roundToZero = function () {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
    }, e.negate = function () {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }, e.dot = function (t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    }, e.lengthSq = function () {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }, e.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }, e.manhattanLength = function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }, e.normalize = function () {
      return this.divideScalar(this.length() || 1);
    }, e.setLength = function (t) {
      return this.normalize().multiplyScalar(t);
    }, e.lerp = function (t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
    }, e.lerpVectors = function (t, e, n) {
      return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
    }, e.cross = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
    }, e.crossVectors = function (t, e) {
      var n = t.x,
          r = t.y,
          i = t.z,
          a = e.x,
          o = e.y,
          s = e.z;
      return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
    }, e.projectOnVector = function (t) {
      var e = t.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      var n = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n);
    }, e.projectOnPlane = function (t) {
      return St.copy(this).projectOnVector(t), this.sub(St);
    }, e.reflect = function (t) {
      return this.sub(St.copy(t).multiplyScalar(2 * this.dot(t)));
    }, e.angleTo = function (t) {
      var e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      var n = this.dot(t) / e;
      return Math.acos(st.clamp(n, -1, 1));
    }, e.distanceTo = function (t) {
      return Math.sqrt(this.distanceToSquared(t));
    }, e.distanceToSquared = function (t) {
      var e = this.x - t.x,
          n = this.y - t.y,
          r = this.z - t.z;
      return e * e + n * n + r * r;
    }, e.manhattanDistanceTo = function (t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
    }, e.setFromSpherical = function (t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    }, e.setFromSphericalCoords = function (t, e, n) {
      var r = Math.sin(e) * t;
      return this.x = r * Math.sin(n), this.y = Math.cos(e) * t, this.z = r * Math.cos(n), this;
    }, e.setFromCylindrical = function (t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    }, e.setFromCylindricalCoords = function (t, e, n) {
      return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
    }, e.setFromMatrixPosition = function (t) {
      var e = t.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this;
    }, e.setFromMatrixScale = function (t) {
      var e = this.setFromMatrixColumn(t, 0).length(),
          n = this.setFromMatrixColumn(t, 1).length(),
          r = this.setFromMatrixColumn(t, 2).length();
      return this.x = e, this.y = n, this.z = r, this;
    }, e.setFromMatrixColumn = function (t, e) {
      return this.fromArray(t.elements, 4 * e);
    }, e.setFromMatrix3Column = function (t, e) {
      return this.fromArray(t.elements, 3 * e);
    }, e.equals = function (t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    }, e.fromArray = function (t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
    }, e.toArray = function (t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
    }, e.fromBufferAttribute = function (t, e, n) {
      return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
    }, e.random = function () {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }, t;
  }(),
      St = new Mt(),
      Tt = new wt(),
      Et = function () {
    function t(t, e) {
      Object.defineProperty(this, "isBox3", {
        value: !0
      }), this.min = void 0 !== t ? t : new Mt(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new Mt(-1 / 0, -1 / 0, -1 / 0);
    }

    var e = t.prototype;
    return e.set = function (t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }, e.setFromArray = function (t) {
      for (var e = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
        var l = t[s],
            u = t[s + 1],
            h = t[s + 2];
        l < e && (e = l), u < n && (n = u), h < r && (r = h), l > i && (i = l), u > a && (a = u), h > o && (o = h);
      }

      return this.min.set(e, n, r), this.max.set(i, a, o), this;
    }, e.setFromBufferAttribute = function (t) {
      for (var e = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
        var l = t.getX(s),
            u = t.getY(s),
            h = t.getZ(s);
        l < e && (e = l), u < n && (n = u), h < r && (r = h), l > i && (i = l), u > a && (a = u), h > o && (o = h);
      }

      return this.min.set(e, n, r), this.max.set(i, a, o), this;
    }, e.setFromPoints = function (t) {
      this.makeEmpty();

      for (var e = 0, n = t.length; e < n; e++) {
        this.expandByPoint(t[e]);
      }

      return this;
    }, e.setFromCenterAndSize = function (t, e) {
      var n = Rt.copy(e).multiplyScalar(.5);
      return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
    }, e.setFromObject = function (t) {
      return this.makeEmpty(), this.expandByObject(t);
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }, e.makeEmpty = function () {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }, e.isEmpty = function () {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }, e.getCenter = function (t) {
      return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new Mt()), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
    }, e.getSize = function (t) {
      return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new Mt()), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }, e.expandByPoint = function (t) {
      return this.min.min(t), this.max.max(t), this;
    }, e.expandByVector = function (t) {
      return this.min.sub(t), this.max.add(t), this;
    }, e.expandByScalar = function (t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }, e.expandByObject = function (t) {
      t.updateWorldMatrix(!1, !1);
      var e = t.geometry;
      void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), Ct.copy(e.boundingBox), Ct.applyMatrix4(t.matrixWorld), this.union(Ct));

      for (var n = t.children, r = 0, i = n.length; r < i; r++) {
        this.expandByObject(n[r]);
      }

      return this;
    }, e.containsPoint = function (t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
    }, e.containsBox = function (t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
    }, e.getParameter = function (t, e) {
      return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new Mt()), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
    }, e.intersectsBox = function (t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
    }, e.intersectsSphere = function (t) {
      return this.clampPoint(t.center, Rt), Rt.distanceToSquared(t.center) <= t.radius * t.radius;
    }, e.intersectsPlane = function (t) {
      var e, n;
      return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
    }, e.intersectsTriangle = function (t) {
      if (this.isEmpty()) return !1;
      this.getCenter(zt), Ut.subVectors(this.max, zt), Pt.subVectors(t.a, zt), It.subVectors(t.b, zt), Nt.subVectors(t.c, zt), Dt.subVectors(It, Pt), Ot.subVectors(Nt, It), Bt.subVectors(Pt, Nt);
      var e = [0, -Dt.z, Dt.y, 0, -Ot.z, Ot.y, 0, -Bt.z, Bt.y, Dt.z, 0, -Dt.x, Ot.z, 0, -Ot.x, Bt.z, 0, -Bt.x, -Dt.y, Dt.x, 0, -Ot.y, Ot.x, 0, -Bt.y, Bt.x, 0];
      return !!At(e, Pt, It, Nt, Ut) && !!At(e = [1, 0, 0, 0, 1, 0, 0, 0, 1], Pt, It, Nt, Ut) && (Ft.crossVectors(Dt, Ot), At(e = [Ft.x, Ft.y, Ft.z], Pt, It, Nt, Ut));
    }, e.clampPoint = function (t, e) {
      return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new Mt()), e.copy(t).clamp(this.min, this.max);
    }, e.distanceToPoint = function (t) {
      return Rt.copy(t).clamp(this.min, this.max).sub(t).length();
    }, e.getBoundingSphere = function (t) {
      return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = .5 * this.getSize(Rt).length(), t;
    }, e.intersect = function (t) {
      return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
    }, e.union = function (t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }, e.applyMatrix4 = function (t) {
      return this.isEmpty() || (Lt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Lt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Lt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Lt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Lt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Lt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Lt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Lt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Lt)), this;
    }, e.translate = function (t) {
      return this.min.add(t), this.max.add(t), this;
    }, e.equals = function (t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }, t;
  }();

  function At(t, e, n, r, i) {
    for (var a = 0, o = t.length - 3; a <= o; a += 3) {
      Gt.fromArray(t, a);
      var s = i.x * Math.abs(Gt.x) + i.y * Math.abs(Gt.y) + i.z * Math.abs(Gt.z),
          c = e.dot(Gt),
          l = n.dot(Gt),
          u = r.dot(Gt);
      if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > s) return !1;
    }

    return !0;
  }

  var Lt = [new Mt(), new Mt(), new Mt(), new Mt(), new Mt(), new Mt(), new Mt(), new Mt()],
      Rt = new Mt(),
      Ct = new Et(),
      Pt = new Mt(),
      It = new Mt(),
      Nt = new Mt(),
      Dt = new Mt(),
      Ot = new Mt(),
      Bt = new Mt(),
      zt = new Mt(),
      Ut = new Mt(),
      Ft = new Mt(),
      Gt = new Mt(),
      Ht = new Et(),
      kt = function () {
    function t(t, e) {
      this.center = void 0 !== t ? t : new Mt(), this.radius = void 0 !== e ? e : -1;
    }

    var e = t.prototype;
    return e.set = function (t, e) {
      return this.center.copy(t), this.radius = e, this;
    }, e.setFromPoints = function (t, e) {
      var n = this.center;
      void 0 !== e ? n.copy(e) : Ht.setFromPoints(t).getCenter(n);

      for (var r = 0, i = 0, a = t.length; i < a; i++) {
        r = Math.max(r, n.distanceToSquared(t[i]));
      }

      return this.radius = Math.sqrt(r), this;
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      return this.center.copy(t.center), this.radius = t.radius, this;
    }, e.isEmpty = function () {
      return this.radius < 0;
    }, e.makeEmpty = function () {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }, e.containsPoint = function (t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }, e.distanceToPoint = function (t) {
      return t.distanceTo(this.center) - this.radius;
    }, e.intersectsSphere = function (t) {
      var e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }, e.intersectsBox = function (t) {
      return t.intersectsSphere(this);
    }, e.intersectsPlane = function (t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }, e.clampPoint = function (t, e) {
      var n = this.center.distanceToSquared(t);
      return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new Mt()), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
    }, e.getBoundingBox = function (t) {
      return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new Et()), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    }, e.applyMatrix4 = function (t) {
      return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
    }, e.translate = function (t) {
      return this.center.add(t), this;
    }, e.equals = function (t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }, t;
  }(),
      Vt = new Mt(),
      Wt = new Mt(),
      jt = new Mt(),
      qt = new Mt(),
      Xt = new Mt(),
      Yt = new Mt(),
      Zt = new Mt(),
      Jt = function () {
    function t(t, e) {
      this.origin = void 0 !== t ? t : new Mt(), this.direction = void 0 !== e ? e : new Mt(0, 0, -1);
    }

    var e = t.prototype;
    return e.set = function (t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    }, e.at = function (t, e) {
      return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new Mt()), e.copy(this.direction).multiplyScalar(t).add(this.origin);
    }, e.lookAt = function (t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this;
    }, e.recast = function (t) {
      return this.origin.copy(this.at(t, Vt)), this;
    }, e.closestPointToPoint = function (t, e) {
      void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new Mt()), e.subVectors(t, this.origin);
      var n = e.dot(this.direction);
      return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
    }, e.distanceToPoint = function (t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }, e.distanceSqToPoint = function (t) {
      var e = Vt.subVectors(t, this.origin).dot(this.direction);
      return e < 0 ? this.origin.distanceToSquared(t) : (Vt.copy(this.direction).multiplyScalar(e).add(this.origin), Vt.distanceToSquared(t));
    }, e.distanceSqToSegment = function (t, e, n, r) {
      Wt.copy(t).add(e).multiplyScalar(.5), jt.copy(e).sub(t).normalize(), qt.copy(this.origin).sub(Wt);
      var i,
          a,
          o,
          s,
          c = .5 * t.distanceTo(e),
          l = -this.direction.dot(jt),
          u = qt.dot(this.direction),
          h = -qt.dot(jt),
          d = qt.lengthSq(),
          p = Math.abs(1 - l * l);
      if (p > 0) {
        if (a = l * u - h, s = c * p, (i = l * h - u) >= 0) {
          if (a >= -s) {
            if (a <= s) {
              var f = 1 / p;
              o = (i *= f) * (i + l * (a *= f) + 2 * u) + a * (l * i + a + 2 * h) + d;
            } else a = c, o = -(i = Math.max(0, -(l * a + u))) * i + a * (a + 2 * h) + d;
          } else a = -c, o = -(i = Math.max(0, -(l * a + u))) * i + a * (a + 2 * h) + d;
        } else a <= -s ? o = -(i = Math.max(0, -(-l * c + u))) * i + (a = i > 0 ? -c : Math.min(Math.max(-c, -h), c)) * (a + 2 * h) + d : a <= s ? (i = 0, o = (a = Math.min(Math.max(-c, -h), c)) * (a + 2 * h) + d) : o = -(i = Math.max(0, -(l * c + u))) * i + (a = i > 0 ? c : Math.min(Math.max(-c, -h), c)) * (a + 2 * h) + d;
      } else a = l > 0 ? -c : c, o = -(i = Math.max(0, -(l * a + u))) * i + a * (a + 2 * h) + d;
      return n && n.copy(this.direction).multiplyScalar(i).add(this.origin), r && r.copy(jt).multiplyScalar(a).add(Wt), o;
    }, e.intersectSphere = function (t, e) {
      Vt.subVectors(t.center, this.origin);
      var n = Vt.dot(this.direction),
          r = Vt.dot(Vt) - n * n,
          i = t.radius * t.radius;
      if (r > i) return null;
      var a = Math.sqrt(i - r),
          o = n - a,
          s = n + a;
      return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e);
    }, e.intersectsSphere = function (t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }, e.distanceToPlane = function (t) {
      var e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      var n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null;
    }, e.intersectPlane = function (t, e) {
      var n = this.distanceToPlane(t);
      return null === n ? null : this.at(n, e);
    }, e.intersectsPlane = function (t) {
      var e = t.distanceToPoint(this.origin);
      return 0 === e || t.normal.dot(this.direction) * e < 0;
    }, e.intersectBox = function (t, e) {
      var n,
          r,
          i,
          a,
          o,
          s,
          c = 1 / this.direction.x,
          l = 1 / this.direction.y,
          u = 1 / this.direction.z,
          h = this.origin;
      return c >= 0 ? (n = (t.min.x - h.x) * c, r = (t.max.x - h.x) * c) : (n = (t.max.x - h.x) * c, r = (t.min.x - h.x) * c), l >= 0 ? (i = (t.min.y - h.y) * l, a = (t.max.y - h.y) * l) : (i = (t.max.y - h.y) * l, a = (t.min.y - h.y) * l), n > a || i > r ? null : ((i > n || n != n) && (n = i), (a < r || r != r) && (r = a), u >= 0 ? (o = (t.min.z - h.z) * u, s = (t.max.z - h.z) * u) : (o = (t.max.z - h.z) * u, s = (t.min.z - h.z) * u), n > s || o > r ? null : ((o > n || n != n) && (n = o), (s < r || r != r) && (r = s), r < 0 ? null : this.at(n >= 0 ? n : r, e)));
    }, e.intersectsBox = function (t) {
      return null !== this.intersectBox(t, Vt);
    }, e.intersectTriangle = function (t, e, n, r, i) {
      Xt.subVectors(e, t), Yt.subVectors(n, t), Zt.crossVectors(Xt, Yt);
      var a,
          o = this.direction.dot(Zt);

      if (o > 0) {
        if (r) return null;
        a = 1;
      } else {
        if (!(o < 0)) return null;
        a = -1, o = -o;
      }

      qt.subVectors(this.origin, t);
      var s = a * this.direction.dot(Yt.crossVectors(qt, Yt));
      if (s < 0) return null;
      var c = a * this.direction.dot(Xt.cross(qt));
      if (c < 0) return null;
      if (s + c > o) return null;
      var l = -a * qt.dot(Zt);
      return l < 0 ? null : this.at(l / o, i);
    }, e.applyMatrix4 = function (t) {
      return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
    }, e.equals = function (t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }, t;
  }(),
      Qt = function () {
    function t() {
      Object.defineProperty(this, "isMatrix4", {
        value: !0
      }), this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
    }

    var e = t.prototype;
    return e.set = function (t, e, n, r, i, a, o, s, c, l, u, h, d, p, f, m) {
      var v = this.elements;
      return v[0] = t, v[4] = e, v[8] = n, v[12] = r, v[1] = i, v[5] = a, v[9] = o, v[13] = s, v[2] = c, v[6] = l, v[10] = u, v[14] = h, v[3] = d, v[7] = p, v[11] = f, v[15] = m, this;
    }, e.identity = function () {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }, e.clone = function () {
      return new t().fromArray(this.elements);
    }, e.copy = function (t) {
      var e = this.elements,
          n = t.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
    }, e.copyPosition = function (t) {
      var e = this.elements,
          n = t.elements;
      return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
    }, e.extractBasis = function (t, e, n) {
      return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    }, e.makeBasis = function (t, e, n) {
      return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
    }, e.extractRotation = function (t) {
      var e = this.elements,
          n = t.elements,
          r = 1 / Kt.setFromMatrixColumn(t, 0).length(),
          i = 1 / Kt.setFromMatrixColumn(t, 1).length(),
          a = 1 / Kt.setFromMatrixColumn(t, 2).length();
      return e[0] = n[0] * r, e[1] = n[1] * r, e[2] = n[2] * r, e[3] = 0, e[4] = n[4] * i, e[5] = n[5] * i, e[6] = n[6] * i, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }, e.makeRotationFromEuler = function (t) {
      t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
      var e = this.elements,
          n = t.x,
          r = t.y,
          i = t.z,
          a = Math.cos(n),
          o = Math.sin(n),
          s = Math.cos(r),
          c = Math.sin(r),
          l = Math.cos(i),
          u = Math.sin(i);

      if ("XYZ" === t.order) {
        var h = a * l,
            d = a * u,
            p = o * l,
            f = o * u;
        e[0] = s * l, e[4] = -s * u, e[8] = c, e[1] = d + p * c, e[5] = h - f * c, e[9] = -o * s, e[2] = f - h * c, e[6] = p + d * c, e[10] = a * s;
      } else if ("YXZ" === t.order) {
        var m = s * l,
            v = s * u,
            g = c * l,
            y = c * u;
        e[0] = m + y * o, e[4] = g * o - v, e[8] = a * c, e[1] = a * u, e[5] = a * l, e[9] = -o, e[2] = v * o - g, e[6] = y + m * o, e[10] = a * s;
      } else if ("ZXY" === t.order) {
        var x = s * l,
            _ = s * u,
            b = c * l,
            w = c * u;

        e[0] = x - w * o, e[4] = -a * u, e[8] = b + _ * o, e[1] = _ + b * o, e[5] = a * l, e[9] = w - x * o, e[2] = -a * c, e[6] = o, e[10] = a * s;
      } else if ("ZYX" === t.order) {
        var M = a * l,
            S = a * u,
            T = o * l,
            E = o * u;
        e[0] = s * l, e[4] = T * c - S, e[8] = M * c + E, e[1] = s * u, e[5] = E * c + M, e[9] = S * c - T, e[2] = -c, e[6] = o * s, e[10] = a * s;
      } else if ("YZX" === t.order) {
        var A = a * s,
            L = a * c,
            R = o * s,
            C = o * c;
        e[0] = s * l, e[4] = C - A * u, e[8] = R * u + L, e[1] = u, e[5] = a * l, e[9] = -o * l, e[2] = -c * l, e[6] = L * u + R, e[10] = A - C * u;
      } else if ("XZY" === t.order) {
        var P = a * s,
            I = a * c,
            N = o * s,
            D = o * c;
        e[0] = s * l, e[4] = -u, e[8] = c * l, e[1] = P * u + D, e[5] = a * l, e[9] = I * u - N, e[2] = N * u - I, e[6] = o * l, e[10] = D * u + P;
      }

      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }, e.makeRotationFromQuaternion = function (t) {
      return this.compose(te, t, ee);
    }, e.lookAt = function (t, e, n) {
      var r = this.elements;
      return ie.subVectors(t, e), 0 === ie.lengthSq() && (ie.z = 1), ie.normalize(), ne.crossVectors(n, ie), 0 === ne.lengthSq() && (1 === Math.abs(n.z) ? ie.x += 1e-4 : ie.z += 1e-4, ie.normalize(), ne.crossVectors(n, ie)), ne.normalize(), re.crossVectors(ie, ne), r[0] = ne.x, r[4] = re.x, r[8] = ie.x, r[1] = ne.y, r[5] = re.y, r[9] = ie.y, r[2] = ne.z, r[6] = re.z, r[10] = ie.z, this;
    }, e.multiply = function (t, e) {
      return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
    }, e.premultiply = function (t) {
      return this.multiplyMatrices(t, this);
    }, e.multiplyMatrices = function (t, e) {
      var n = t.elements,
          r = e.elements,
          i = this.elements,
          a = n[0],
          o = n[4],
          s = n[8],
          c = n[12],
          l = n[1],
          u = n[5],
          h = n[9],
          d = n[13],
          p = n[2],
          f = n[6],
          m = n[10],
          v = n[14],
          g = n[3],
          y = n[7],
          x = n[11],
          _ = n[15],
          b = r[0],
          w = r[4],
          M = r[8],
          S = r[12],
          T = r[1],
          E = r[5],
          A = r[9],
          L = r[13],
          R = r[2],
          C = r[6],
          P = r[10],
          I = r[14],
          N = r[3],
          D = r[7],
          O = r[11],
          B = r[15];
      return i[0] = a * b + o * T + s * R + c * N, i[4] = a * w + o * E + s * C + c * D, i[8] = a * M + o * A + s * P + c * O, i[12] = a * S + o * L + s * I + c * B, i[1] = l * b + u * T + h * R + d * N, i[5] = l * w + u * E + h * C + d * D, i[9] = l * M + u * A + h * P + d * O, i[13] = l * S + u * L + h * I + d * B, i[2] = p * b + f * T + m * R + v * N, i[6] = p * w + f * E + m * C + v * D, i[10] = p * M + f * A + m * P + v * O, i[14] = p * S + f * L + m * I + v * B, i[3] = g * b + y * T + x * R + _ * N, i[7] = g * w + y * E + x * C + _ * D, i[11] = g * M + y * A + x * P + _ * O, i[15] = g * S + y * L + x * I + _ * B, this;
    }, e.multiplyScalar = function (t) {
      var e = this.elements;
      return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
    }, e.determinant = function () {
      var t = this.elements,
          e = t[0],
          n = t[4],
          r = t[8],
          i = t[12],
          a = t[1],
          o = t[5],
          s = t[9],
          c = t[13],
          l = t[2],
          u = t[6],
          h = t[10],
          d = t[14];
      return t[3] * (+i * s * u - r * c * u - i * o * h + n * c * h + r * o * d - n * s * d) + t[7] * (+e * s * d - e * c * h + i * a * h - r * a * d + r * c * l - i * s * l) + t[11] * (+e * c * u - e * o * d - i * a * u + n * a * d + i * o * l - n * c * l) + t[15] * (-r * o * l - e * s * u + e * o * h + r * a * u - n * a * h + n * s * l);
    }, e.transpose = function () {
      var t,
          e = this.elements;
      return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
    }, e.setPosition = function (t, e, n) {
      var r = this.elements;
      return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = e, r[14] = n), this;
    }, e.invert = function () {
      var t = this.elements,
          e = t[0],
          n = t[1],
          r = t[2],
          i = t[3],
          a = t[4],
          o = t[5],
          s = t[6],
          c = t[7],
          l = t[8],
          u = t[9],
          h = t[10],
          d = t[11],
          p = t[12],
          f = t[13],
          m = t[14],
          v = t[15],
          g = u * m * c - f * h * c + f * s * d - o * m * d - u * s * v + o * h * v,
          y = p * h * c - l * m * c - p * s * d + a * m * d + l * s * v - a * h * v,
          x = l * f * c - p * u * c + p * o * d - a * f * d - l * o * v + a * u * v,
          _ = p * u * s - l * f * s - p * o * h + a * f * h + l * o * m - a * u * m,
          b = e * g + n * y + r * x + i * _;

      if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      var w = 1 / b;
      return t[0] = g * w, t[1] = (f * h * i - u * m * i - f * r * d + n * m * d + u * r * v - n * h * v) * w, t[2] = (o * m * i - f * s * i + f * r * c - n * m * c - o * r * v + n * s * v) * w, t[3] = (u * s * i - o * h * i - u * r * c + n * h * c + o * r * d - n * s * d) * w, t[4] = y * w, t[5] = (l * m * i - p * h * i + p * r * d - e * m * d - l * r * v + e * h * v) * w, t[6] = (p * s * i - a * m * i - p * r * c + e * m * c + a * r * v - e * s * v) * w, t[7] = (a * h * i - l * s * i + l * r * c - e * h * c - a * r * d + e * s * d) * w, t[8] = x * w, t[9] = (p * u * i - l * f * i - p * n * d + e * f * d + l * n * v - e * u * v) * w, t[10] = (a * f * i - p * o * i + p * n * c - e * f * c - a * n * v + e * o * v) * w, t[11] = (l * o * i - a * u * i - l * n * c + e * u * c + a * n * d - e * o * d) * w, t[12] = _ * w, t[13] = (l * f * r - p * u * r + p * n * h - e * f * h - l * n * m + e * u * m) * w, t[14] = (p * o * r - a * f * r - p * n * s + e * f * s + a * n * m - e * o * m) * w, t[15] = (a * u * r - l * o * r + l * n * s - e * u * s - a * n * h + e * o * h) * w, this;
    }, e.scale = function (t) {
      var e = this.elements,
          n = t.x,
          r = t.y,
          i = t.z;
      return e[0] *= n, e[4] *= r, e[8] *= i, e[1] *= n, e[5] *= r, e[9] *= i, e[2] *= n, e[6] *= r, e[10] *= i, e[3] *= n, e[7] *= r, e[11] *= i, this;
    }, e.getMaxScaleOnAxis = function () {
      var t = this.elements,
          e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
          n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
          r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n, r));
    }, e.makeTranslation = function (t, e, n) {
      return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
    }, e.makeRotationX = function (t) {
      var e = Math.cos(t),
          n = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    }, e.makeRotationY = function (t) {
      var e = Math.cos(t),
          n = Math.sin(t);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    }, e.makeRotationZ = function (t) {
      var e = Math.cos(t),
          n = Math.sin(t);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }, e.makeRotationAxis = function (t, e) {
      var n = Math.cos(e),
          r = Math.sin(e),
          i = 1 - n,
          a = t.x,
          o = t.y,
          s = t.z,
          c = i * a,
          l = i * o;
      return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
    }, e.makeScale = function (t, e, n) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }, e.makeShear = function (t, e, n) {
      return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this;
    }, e.compose = function (t, e, n) {
      var r = this.elements,
          i = e._x,
          a = e._y,
          o = e._z,
          s = e._w,
          c = i + i,
          l = a + a,
          u = o + o,
          h = i * c,
          d = i * l,
          p = i * u,
          f = a * l,
          m = a * u,
          v = o * u,
          g = s * c,
          y = s * l,
          x = s * u,
          _ = n.x,
          b = n.y,
          w = n.z;
      return r[0] = (1 - (f + v)) * _, r[1] = (d + x) * _, r[2] = (p - y) * _, r[3] = 0, r[4] = (d - x) * b, r[5] = (1 - (h + v)) * b, r[6] = (m + g) * b, r[7] = 0, r[8] = (p + y) * w, r[9] = (m - g) * w, r[10] = (1 - (h + f)) * w, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
    }, e.decompose = function (t, e, n) {
      var r = this.elements,
          i = Kt.set(r[0], r[1], r[2]).length(),
          a = Kt.set(r[4], r[5], r[6]).length(),
          o = Kt.set(r[8], r[9], r[10]).length();
      this.determinant() < 0 && (i = -i), t.x = r[12], t.y = r[13], t.z = r[14], $t.copy(this);
      var s = 1 / i,
          c = 1 / a,
          l = 1 / o;
      return $t.elements[0] *= s, $t.elements[1] *= s, $t.elements[2] *= s, $t.elements[4] *= c, $t.elements[5] *= c, $t.elements[6] *= c, $t.elements[8] *= l, $t.elements[9] *= l, $t.elements[10] *= l, e.setFromRotationMatrix($t), n.x = i, n.y = a, n.z = o, this;
    }, e.makePerspective = function (t, e, n, r, i, a) {
      void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
      var o = this.elements,
          s = 2 * i / (e - t),
          c = 2 * i / (n - r),
          l = (e + t) / (e - t),
          u = (n + r) / (n - r),
          h = -(a + i) / (a - i),
          d = -2 * a * i / (a - i);
      return o[0] = s, o[4] = 0, o[8] = l, o[12] = 0, o[1] = 0, o[5] = c, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = h, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
    }, e.makeOrthographic = function (t, e, n, r, i, a) {
      var o = this.elements,
          s = 1 / (e - t),
          c = 1 / (n - r),
          l = 1 / (a - i),
          u = (e + t) * s,
          h = (n + r) * c,
          d = (a + i) * l;
      return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -h, o[2] = 0, o[6] = 0, o[10] = -2 * l, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
    }, e.equals = function (t) {
      for (var e = this.elements, n = t.elements, r = 0; r < 16; r++) {
        if (e[r] !== n[r]) return !1;
      }

      return !0;
    }, e.fromArray = function (t, e) {
      void 0 === e && (e = 0);

      for (var n = 0; n < 16; n++) {
        this.elements[n] = t[n + e];
      }

      return this;
    }, e.toArray = function (t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var n = this.elements;
      return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
    }, t;
  }(),
      Kt = new Mt(),
      $t = new Qt(),
      te = new Mt(0, 0, 0),
      ee = new Mt(1, 1, 1),
      ne = new Mt(),
      re = new Mt(),
      ie = new Mt(),
      ae = function () {
    function t(e, n, r, i) {
      void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), void 0 === i && (i = t.DefaultOrder), Object.defineProperty(this, "isEuler", {
        value: !0
      }), this._x = e, this._y = n, this._z = r, this._order = i;
    }

    var e = t.prototype;
    return e.set = function (t, e, n, r) {
      return this._x = t, this._y = e, this._z = n, this._order = r || this._order, this._onChangeCallback(), this;
    }, e.clone = function () {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }, e.copy = function (t) {
      return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
    }, e.setFromRotationMatrix = function (t, e, n) {
      var r = st.clamp,
          i = t.elements,
          a = i[0],
          o = i[4],
          s = i[8],
          c = i[1],
          l = i[5],
          u = i[9],
          h = i[2],
          d = i[6],
          p = i[10];

      switch (e = e || this._order) {
        case "XYZ":
          this._y = Math.asin(r(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(d, l), this._z = 0);
          break;

        case "YXZ":
          this._x = Math.asin(-r(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(s, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, a), this._z = 0);
          break;

        case "ZXY":
          this._x = Math.asin(r(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, a));
          break;

        case "ZYX":
          this._y = Math.asin(-r(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, l));
          break;

        case "YZX":
          this._z = Math.asin(r(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-h, a)) : (this._x = 0, this._y = Math.atan2(s, p));
          break;

        case "XZY":
          this._z = Math.asin(-r(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-u, p), this._y = 0);
          break;

        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
      }

      return this._order = e, !1 !== n && this._onChangeCallback(), this;
    }, e.setFromQuaternion = function (t, e, n) {
      return oe.makeRotationFromQuaternion(t), this.setFromRotationMatrix(oe, e, n);
    }, e.setFromVector3 = function (t, e) {
      return this.set(t.x, t.y, t.z, e || this._order);
    }, e.reorder = function (t) {
      return se.setFromEuler(this), this.setFromQuaternion(se, t);
    }, e.equals = function (t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
    }, e.fromArray = function (t) {
      return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
    }, e.toArray = function (t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
    }, e.toVector3 = function (t) {
      return t ? t.set(this._x, this._y, this._z) : new Mt(this._x, this._y, this._z);
    }, e._onChange = function (t) {
      return this._onChangeCallback = t, this;
    }, e._onChangeCallback = function () {}, lt(t, [{
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t, this._onChangeCallback();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t, this._onChangeCallback();
      }
    }, {
      key: "z",
      get: function get() {
        return this._z;
      },
      set: function set(t) {
        this._z = t, this._onChangeCallback();
      }
    }, {
      key: "order",
      get: function get() {
        return this._order;
      },
      set: function set(t) {
        this._order = t, this._onChangeCallback();
      }
    }]), t;
  }();

  ae.DefaultOrder = "XYZ", ae.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];

  var oe = new Qt(),
      se = new wt(),
      ce = function () {
    function t() {
      this.mask = 1;
    }

    var e = t.prototype;
    return e.set = function (t) {
      this.mask = 1 << t | 0;
    }, e.enable = function (t) {
      this.mask |= 1 << t | 0;
    }, e.enableAll = function () {
      this.mask = -1;
    }, e.toggle = function (t) {
      this.mask ^= 1 << t | 0;
    }, e.disable = function (t) {
      this.mask &= ~(1 << t | 0);
    }, e.disableAll = function () {
      this.mask = 0;
    }, e.test = function (t) {
      return 0 != (this.mask & t.mask);
    }, t;
  }(),
      le = 0,
      ue = new Mt(),
      he = new wt(),
      de = new Qt(),
      pe = new Mt(),
      fe = new Mt(),
      me = new Mt(),
      ve = new wt(),
      ge = new Mt(1, 0, 0),
      ye = new Mt(0, 1, 0),
      xe = new Mt(0, 0, 1),
      _e = {
    type: "added"
  },
      be = {
    type: "removed"
  };

  function we() {
    Object.defineProperty(this, "id", {
      value: le++
    }), this.uuid = st.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = we.DefaultUp.clone();
    var t = new Mt(),
        e = new ae(),
        n = new wt(),
        r = new Mt(1, 1, 1);
    e._onChange(function () {
      n.setFromEuler(e, !1);
    }), n._onChange(function () {
      e.setFromQuaternion(n, void 0, !1);
    }), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new Qt()
      },
      normalMatrix: {
        value: new ft()
      }
    }), this.matrix = new Qt(), this.matrixWorld = new Qt(), this.matrixAutoUpdate = we.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new ce(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }

  we.DefaultUp = new Mt(0, 1, 0), we.DefaultMatrixAutoUpdate = !0, we.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: we,
    isObject3D: !0,
    onBeforeRender: function onBeforeRender() {},
    onAfterRender: function onAfterRender() {},
    applyMatrix4: function applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    applyQuaternion: function applyQuaternion(t) {
      return this.quaternion.premultiply(t), this;
    },
    setRotationFromAxisAngle: function setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    },
    setRotationFromEuler: function setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    },
    setRotationFromMatrix: function setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    },
    setRotationFromQuaternion: function setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    },
    rotateOnAxis: function rotateOnAxis(t, e) {
      return he.setFromAxisAngle(t, e), this.quaternion.multiply(he), this;
    },
    rotateOnWorldAxis: function rotateOnWorldAxis(t, e) {
      return he.setFromAxisAngle(t, e), this.quaternion.premultiply(he), this;
    },
    rotateX: function rotateX(t) {
      return this.rotateOnAxis(ge, t);
    },
    rotateY: function rotateY(t) {
      return this.rotateOnAxis(ye, t);
    },
    rotateZ: function rotateZ(t) {
      return this.rotateOnAxis(xe, t);
    },
    translateOnAxis: function translateOnAxis(t, e) {
      return ue.copy(t).applyQuaternion(this.quaternion), this.position.add(ue.multiplyScalar(e)), this;
    },
    translateX: function translateX(t) {
      return this.translateOnAxis(ge, t);
    },
    translateY: function translateY(t) {
      return this.translateOnAxis(ye, t);
    },
    translateZ: function translateZ(t) {
      return this.translateOnAxis(xe, t);
    },
    localToWorld: function localToWorld(t) {
      return t.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: function worldToLocal(t) {
      return t.applyMatrix4(de.copy(this.matrixWorld).invert());
    },
    lookAt: function lookAt(t, e, n) {
      t.isVector3 ? pe.copy(t) : pe.set(t, e, n);
      var r = this.parent;
      this.updateWorldMatrix(!0, !1), fe.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? de.lookAt(fe, pe, this.up) : de.lookAt(pe, fe, this.up), this.quaternion.setFromRotationMatrix(de), r && (de.extractRotation(r.matrixWorld), he.setFromRotationMatrix(de), this.quaternion.premultiply(he.invert()));
    },
    add: function add(t) {
      if (arguments.length > 1) {
        for (var e = 0; e < arguments.length; e++) {
          this.add(arguments[e]);
        }

        return this;
      }

      return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(_e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
    },
    remove: function remove(t) {
      if (arguments.length > 1) {
        for (var e = 0; e < arguments.length; e++) {
          this.remove(arguments[e]);
        }

        return this;
      }

      var n = this.children.indexOf(t);
      return -1 !== n && (t.parent = null, this.children.splice(n, 1), t.dispatchEvent(be)), this;
    },
    clear: function clear() {
      for (var t = 0; t < this.children.length; t++) {
        var e = this.children[t];
        e.parent = null, e.dispatchEvent(be);
      }

      return this.children.length = 0, this;
    },
    attach: function attach(t) {
      return this.updateWorldMatrix(!0, !1), de.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), de.multiply(t.parent.matrixWorld)), t.applyMatrix4(de), t.updateWorldMatrix(!1, !1), this.add(t), this;
    },
    getObjectById: function getObjectById(t) {
      return this.getObjectByProperty("id", t);
    },
    getObjectByName: function getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    },
    getObjectByProperty: function getObjectByProperty(t, e) {
      if (this[t] === e) return this;

      for (var n = 0, r = this.children.length; n < r; n++) {
        var i = this.children[n].getObjectByProperty(t, e);
        if (void 0 !== i) return i;
      }
    },
    getWorldPosition: function getWorldPosition(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new Mt()), this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
    },
    getWorldQuaternion: function getWorldQuaternion(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new wt()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fe, t, me), t;
    },
    getWorldScale: function getWorldScale(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new Mt()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fe, ve, t), t;
    },
    getWorldDirection: function getWorldDirection(t) {
      void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new Mt()), this.updateWorldMatrix(!0, !1);
      var e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    },
    raycast: function raycast() {},
    traverse: function traverse(t) {
      t(this);

      for (var e = this.children, n = 0, r = e.length; n < r; n++) {
        e[n].traverse(t);
      }
    },
    traverseVisible: function traverseVisible(t) {
      if (!1 !== this.visible) {
        t(this);

        for (var e = this.children, n = 0, r = e.length; n < r; n++) {
          e[n].traverseVisible(t);
        }
      }
    },
    traverseAncestors: function traverseAncestors(t) {
      var e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t));
    },
    updateMatrix: function updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    },
    updateMatrixWorld: function updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);

      for (var e = this.children, n = 0, r = e.length; n < r; n++) {
        e[n].updateMatrixWorld(t);
      }
    },
    updateWorldMatrix: function updateWorldMatrix(t, e) {
      var n = this.parent;
      if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) for (var r = this.children, i = 0, a = r.length; i < a; i++) {
        r[i].updateWorldMatrix(!1, !0);
      }
    },
    toJSON: function toJSON(t) {
      var e = void 0 === t || "string" == typeof t,
          n = {};
      e && (t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {}
      }, n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      var r = {};

      function i(e, n) {
        return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
      }

      if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), !0 === this.castShadow && (r.castShadow = !0), !0 === this.receiveShadow && (r.receiveShadow = !0), !1 === this.visible && (r.visible = !1), !1 === this.frustumCulled && (r.frustumCulled = !1), 0 !== this.renderOrder && (r.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
        r.geometry = i(t.geometries, this.geometry);
        var a = this.geometry.parameters;

        if (void 0 !== a && void 0 !== a.shapes) {
          var o = a.shapes;
          if (Array.isArray(o)) for (var s = 0, c = o.length; s < c; s++) {
            var l = o[s];
            i(t.shapes, l);
          } else i(t.shapes, o);
        }
      }

      if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (i(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        for (var u = [], h = 0, d = this.material.length; h < d; h++) {
          u.push(i(t.materials, this.material[h]));
        }

        r.material = u;
      } else r.material = i(t.materials, this.material);

      if (this.children.length > 0) {
        r.children = [];

        for (var p = 0; p < this.children.length; p++) {
          r.children.push(this.children[p].toJSON(t).object);
        }
      }

      if (this.animations.length > 0) {
        r.animations = [];

        for (var f = 0; f < this.animations.length; f++) {
          var m = this.animations[f];
          r.animations.push(i(t.animations, m));
        }
      }

      if (e) {
        var v = M(t.geometries),
            g = M(t.materials),
            y = M(t.textures),
            x = M(t.images),
            _ = M(t.shapes),
            b = M(t.skeletons),
            w = M(t.animations);

        v.length > 0 && (n.geometries = v), g.length > 0 && (n.materials = g), y.length > 0 && (n.textures = y), x.length > 0 && (n.images = x), _.length > 0 && (n.shapes = _), b.length > 0 && (n.skeletons = b), w.length > 0 && (n.animations = w);
      }

      return n.object = r, n;

      function M(t) {
        var e = [];

        for (var n in t) {
          var r = t[n];
          delete r.metadata, e.push(r);
        }

        return e;
      }
    },
    clone: function clone(t) {
      return new this.constructor().copy(this, t);
    },
    copy: function copy(t, e) {
      if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for (var n = 0; n < t.children.length; n++) {
        var r = t.children[n];
        this.add(r.clone());
      }
      return this;
    }
  });

  var Me = new Mt(),
      Se = new Mt(),
      Te = new ft(),
      Ee = function () {
    function t(t, e) {
      Object.defineProperty(this, "isPlane", {
        value: !0
      }), this.normal = void 0 !== t ? t : new Mt(1, 0, 0), this.constant = void 0 !== e ? e : 0;
    }

    var e = t.prototype;
    return e.set = function (t, e) {
      return this.normal.copy(t), this.constant = e, this;
    }, e.setComponents = function (t, e, n, r) {
      return this.normal.set(t, e, n), this.constant = r, this;
    }, e.setFromNormalAndCoplanarPoint = function (t, e) {
      return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
    }, e.setFromCoplanarPoints = function (t, e, n) {
      var r = Me.subVectors(n, e).cross(Se.subVectors(t, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(r, t), this;
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      return this.normal.copy(t.normal), this.constant = t.constant, this;
    }, e.normalize = function () {
      var t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), this.constant *= t, this;
    }, e.negate = function () {
      return this.constant *= -1, this.normal.negate(), this;
    }, e.distanceToPoint = function (t) {
      return this.normal.dot(t) + this.constant;
    }, e.distanceToSphere = function (t) {
      return this.distanceToPoint(t.center) - t.radius;
    }, e.projectPoint = function (t, e) {
      return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new Mt()), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
    }, e.intersectLine = function (t, e) {
      void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new Mt());
      var n = t.delta(Me),
          r = this.normal.dot(n);
      if (0 === r) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
      var i = -(t.start.dot(this.normal) + this.constant) / r;
      return i < 0 || i > 1 ? void 0 : e.copy(n).multiplyScalar(i).add(t.start);
    }, e.intersectsLine = function (t) {
      var e = this.distanceToPoint(t.start),
          n = this.distanceToPoint(t.end);
      return e < 0 && n > 0 || n < 0 && e > 0;
    }, e.intersectsBox = function (t) {
      return t.intersectsPlane(this);
    }, e.intersectsSphere = function (t) {
      return t.intersectsPlane(this);
    }, e.coplanarPoint = function (t) {
      return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new Mt()), t.copy(this.normal).multiplyScalar(-this.constant);
    }, e.applyMatrix4 = function (t, e) {
      var n = e || Te.getNormalMatrix(t),
          r = this.coplanarPoint(Me).applyMatrix4(t),
          i = this.normal.applyMatrix3(n).normalize();
      return this.constant = -r.dot(i), this;
    }, e.translate = function (t) {
      return this.constant -= t.dot(this.normal), this;
    }, e.equals = function (t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }, t;
  }(),
      Ae = new Mt(),
      Le = new Mt(),
      Re = new Mt(),
      Ce = new Mt(),
      Pe = new Mt(),
      Ie = new Mt(),
      Ne = new Mt(),
      De = new Mt(),
      Oe = new Mt(),
      Be = new Mt(),
      ze = function () {
    function t(t, e, n) {
      this.a = void 0 !== t ? t : new Mt(), this.b = void 0 !== e ? e : new Mt(), this.c = void 0 !== n ? n : new Mt();
    }

    t.getNormal = function (t, e, n, r) {
      void 0 === r && (console.warn("THREE.Triangle: .getNormal() target is now required"), r = new Mt()), r.subVectors(n, e), Ae.subVectors(t, e), r.cross(Ae);
      var i = r.lengthSq();
      return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
    }, t.getBarycoord = function (t, e, n, r, i) {
      Ae.subVectors(r, e), Le.subVectors(n, e), Re.subVectors(t, e);
      var a = Ae.dot(Ae),
          o = Ae.dot(Le),
          s = Ae.dot(Re),
          c = Le.dot(Le),
          l = Le.dot(Re),
          u = a * c - o * o;
      if (void 0 === i && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), i = new Mt()), 0 === u) return i.set(-2, -1, -1);
      var h = 1 / u,
          d = (c * s - o * l) * h,
          p = (a * l - o * s) * h;
      return i.set(1 - d - p, p, d);
    }, t.containsPoint = function (t, e, n, r) {
      return this.getBarycoord(t, e, n, r, Ce), Ce.x >= 0 && Ce.y >= 0 && Ce.x + Ce.y <= 1;
    }, t.getUV = function (t, e, n, r, i, a, o, s) {
      return this.getBarycoord(t, e, n, r, Ce), s.set(0, 0), s.addScaledVector(i, Ce.x), s.addScaledVector(a, Ce.y), s.addScaledVector(o, Ce.z), s;
    }, t.isFrontFacing = function (t, e, n, r) {
      return Ae.subVectors(n, e), Le.subVectors(t, e), Ae.cross(Le).dot(r) < 0;
    };
    var e = t.prototype;
    return e.set = function (t, e, n) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
    }, e.setFromPointsAndIndices = function (t, e, n, r) {
      return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this;
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    }, e.getArea = function () {
      return Ae.subVectors(this.c, this.b), Le.subVectors(this.a, this.b), .5 * Ae.cross(Le).length();
    }, e.getMidpoint = function (t) {
      return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new Mt()), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }, e.getNormal = function (e) {
      return t.getNormal(this.a, this.b, this.c, e);
    }, e.getPlane = function (t) {
      return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new Ee()), t.setFromCoplanarPoints(this.a, this.b, this.c);
    }, e.getBarycoord = function (e, n) {
      return t.getBarycoord(e, this.a, this.b, this.c, n);
    }, e.getUV = function (e, n, r, i, a) {
      return t.getUV(e, this.a, this.b, this.c, n, r, i, a);
    }, e.containsPoint = function (e) {
      return t.containsPoint(e, this.a, this.b, this.c);
    }, e.isFrontFacing = function (e) {
      return t.isFrontFacing(this.a, this.b, this.c, e);
    }, e.intersectsBox = function (t) {
      return t.intersectsTriangle(this);
    }, e.closestPointToPoint = function (t, e) {
      void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new Mt());
      var n,
          r,
          i = this.a,
          a = this.b,
          o = this.c;
      Pe.subVectors(a, i), Ie.subVectors(o, i), De.subVectors(t, i);
      var s = Pe.dot(De),
          c = Ie.dot(De);
      if (s <= 0 && c <= 0) return e.copy(i);
      Oe.subVectors(t, a);
      var l = Pe.dot(Oe),
          u = Ie.dot(Oe);
      if (l >= 0 && u <= l) return e.copy(a);
      var h = s * u - l * c;
      if (h <= 0 && s >= 0 && l <= 0) return n = s / (s - l), e.copy(i).addScaledVector(Pe, n);
      Be.subVectors(t, o);
      var d = Pe.dot(Be),
          p = Ie.dot(Be);
      if (p >= 0 && d <= p) return e.copy(o);
      var f = d * c - s * p;
      if (f <= 0 && c >= 0 && p <= 0) return r = c / (c - p), e.copy(i).addScaledVector(Ie, r);
      var m = l * p - d * u;
      if (m <= 0 && u - l >= 0 && d - p >= 0) return Ne.subVectors(o, a), r = (u - l) / (u - l + (d - p)), e.copy(a).addScaledVector(Ne, r);
      var v = 1 / (m + f + h);
      return n = f * v, r = h * v, e.copy(i).addScaledVector(Pe, n).addScaledVector(Ie, r);
    }, e.equals = function (t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }, t;
  }(),
      Ue = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  },
      Fe = {
    h: 0,
    s: 0,
    l: 0
  },
      Ge = {
    h: 0,
    s: 0,
    l: 0
  };

  function He(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t;
  }

  function ke(t) {
    return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
  }

  function Ve(t) {
    return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
  }

  var We = function () {
    function t(t, e, n) {
      return Object.defineProperty(this, "isColor", {
        value: !0
      }), void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
    }

    var e = t.prototype;
    return e.set = function (t) {
      return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this;
    }, e.setScalar = function (t) {
      return this.r = t, this.g = t, this.b = t, this;
    }, e.setHex = function (t) {
      return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this;
    }, e.setRGB = function (t, e, n) {
      return this.r = t, this.g = e, this.b = n, this;
    }, e.setHSL = function (t, e, n) {
      if (t = st.euclideanModulo(t, 1), e = st.clamp(e, 0, 1), n = st.clamp(n, 0, 1), 0 === e) this.r = this.g = this.b = n;else {
        var r = n <= .5 ? n * (1 + e) : n + e - n * e,
            i = 2 * n - r;
        this.r = He(i, r, t + 1 / 3), this.g = He(i, r, t), this.b = He(i, r, t - 1 / 3);
      }
      return this;
    }, e.setStyle = function (t) {
      function e(e) {
        void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
      }

      var n;

      if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
        var r,
            i = n[1],
            a = n[2];

        switch (i) {
          case "rgb":
          case "rgba":
            if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, e(r[5]), this;
            if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, e(r[5]), this;
            break;

          case "hsl":
          case "hsla":
            if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              var o = parseFloat(r[1]) / 360,
                  s = parseInt(r[2], 10) / 100,
                  c = parseInt(r[3], 10) / 100;
              return e(r[5]), this.setHSL(o, s, c);
            }

        }
      } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
        var l = n[1],
            u = l.length;
        if (3 === u) return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255, this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255, this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255, this;
        if (6 === u) return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255, this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255, this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255, this;
      }

      return t && t.length > 0 ? this.setColorName(t) : this;
    }, e.setColorName = function (t) {
      var e = Ue[t];
      return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this;
    }, e.clone = function () {
      return new this.constructor(this.r, this.g, this.b);
    }, e.copy = function (t) {
      return this.r = t.r, this.g = t.g, this.b = t.b, this;
    }, e.copyGammaToLinear = function (t, e) {
      return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this;
    }, e.copyLinearToGamma = function (t, e) {
      void 0 === e && (e = 2);
      var n = e > 0 ? 1 / e : 1;
      return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this;
    }, e.convertGammaToLinear = function (t) {
      return this.copyGammaToLinear(this, t), this;
    }, e.convertLinearToGamma = function (t) {
      return this.copyLinearToGamma(this, t), this;
    }, e.copySRGBToLinear = function (t) {
      return this.r = ke(t.r), this.g = ke(t.g), this.b = ke(t.b), this;
    }, e.copyLinearToSRGB = function (t) {
      return this.r = Ve(t.r), this.g = Ve(t.g), this.b = Ve(t.b), this;
    }, e.convertSRGBToLinear = function () {
      return this.copySRGBToLinear(this), this;
    }, e.convertLinearToSRGB = function () {
      return this.copyLinearToSRGB(this), this;
    }, e.getHex = function () {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
    }, e.getHexString = function () {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    }, e.getHSL = function (t) {
      void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
        h: 0,
        s: 0,
        l: 0
      });
      var e,
          n,
          r = this.r,
          i = this.g,
          a = this.b,
          o = Math.max(r, i, a),
          s = Math.min(r, i, a),
          c = (s + o) / 2;
      if (s === o) e = 0, n = 0;else {
        var l = o - s;

        switch (n = c <= .5 ? l / (o + s) : l / (2 - o - s), o) {
          case r:
            e = (i - a) / l + (i < a ? 6 : 0);
            break;

          case i:
            e = (a - r) / l + 2;
            break;

          case a:
            e = (r - i) / l + 4;
        }

        e /= 6;
      }
      return t.h = e, t.s = n, t.l = c, t;
    }, e.getStyle = function () {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
    }, e.offsetHSL = function (t, e, n) {
      return this.getHSL(Fe), Fe.h += t, Fe.s += e, Fe.l += n, this.setHSL(Fe.h, Fe.s, Fe.l), this;
    }, e.add = function (t) {
      return this.r += t.r, this.g += t.g, this.b += t.b, this;
    }, e.addColors = function (t, e) {
      return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
    }, e.addScalar = function (t) {
      return this.r += t, this.g += t, this.b += t, this;
    }, e.sub = function (t) {
      return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
    }, e.multiply = function (t) {
      return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
    }, e.multiplyScalar = function (t) {
      return this.r *= t, this.g *= t, this.b *= t, this;
    }, e.lerp = function (t, e) {
      return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
    }, e.lerpHSL = function (t, e) {
      this.getHSL(Fe), t.getHSL(Ge);
      var n = st.lerp(Fe.h, Ge.h, e),
          r = st.lerp(Fe.s, Ge.s, e),
          i = st.lerp(Fe.l, Ge.l, e);
      return this.setHSL(n, r, i), this;
    }, e.equals = function (t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    }, e.fromArray = function (t, e) {
      return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
    }, e.toArray = function (t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
    }, e.fromBufferAttribute = function (t, e) {
      return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this;
    }, e.toJSON = function () {
      return this.getHex();
    }, t;
  }();

  We.NAMES = Ue, We.prototype.r = 1, We.prototype.g = 1, We.prototype.b = 1;

  var je = function () {
    function t(t, e, n, r, i, a) {
      void 0 === a && (a = 0), this.a = t, this.b = e, this.c = n, this.normal = r && r.isVector3 ? r : new Mt(), this.vertexNormals = Array.isArray(r) ? r : [], this.color = i && i.isColor ? i : new We(), this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = a;
    }

    var e = t.prototype;
    return e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;

      for (var e = 0, n = t.vertexNormals.length; e < n; e++) {
        this.vertexNormals[e] = t.vertexNormals[e].clone();
      }

      for (var r = 0, i = t.vertexColors.length; r < i; r++) {
        this.vertexColors[r] = t.vertexColors[r].clone();
      }

      return this;
    }, t;
  }(),
      qe = 0;

  function Xe() {
    Object.defineProperty(this, "id", {
      value: qe++
    }), this.uuid = st.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = e, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = $, this.stencilZFail = $, this.stencilZPass = $, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
  }

  function Ye(t) {
    Xe.call(this), this.type = "MeshBasicMaterial", this.color = new We(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(t);
  }

  Xe.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: Xe,
    isMaterial: !0,
    onBeforeCompile: function onBeforeCompile() {},
    customProgramCacheKey: function customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    },
    setValues: function setValues(t) {
      if (void 0 !== t) for (var e in t) {
        var n = t[e];
        if (void 0 !== n) {
          if ("shading" !== e) {
            var r = this[e];
            void 0 !== r ? r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
          } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
        } else console.warn("THREE.Material: '" + e + "' parameter is undefined.");
      }
    },
    toJSON: function toJSON(t) {
      var e = void 0 === t || "string" == typeof t;
      e && (t = {
        textures: {},
        images: {}
      });
      var n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };

      function r(t) {
        var e = [];

        for (var n in t) {
          var r = t[n];
          delete r.metadata, e.push(r);
        }

        return e;
      }

      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
        var i = r(t.textures),
            a = r(t.images);
        i.length > 0 && (n.textures = i), a.length > 0 && (n.images = a);
      }

      return n;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
      var e = t.clippingPlanes,
          n = null;

      if (null !== e) {
        var r = e.length;
        n = new Array(r);

        for (var i = 0; i !== r; ++i) {
          n[i] = e[i].clone();
        }
      }

      return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }), Object.defineProperty(Xe.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  }), Ye.prototype = Object.create(Xe.prototype), Ye.prototype.constructor = Ye, Ye.prototype.isMeshBasicMaterial = !0, Ye.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this;
  };
  var Ze = new Mt(),
      Je = new pt();

  function Qe(t, e, n) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = tt, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0;
  }

  function Ke(t, e, n) {
    Qe.call(this, new Int8Array(t), e, n);
  }

  function $e(t, e, n) {
    Qe.call(this, new Uint8Array(t), e, n);
  }

  function tn(t, e, n) {
    Qe.call(this, new Uint8ClampedArray(t), e, n);
  }

  function en(t, e, n) {
    Qe.call(this, new Int16Array(t), e, n);
  }

  function nn(t, e, n) {
    Qe.call(this, new Uint16Array(t), e, n);
  }

  function rn(t, e, n) {
    Qe.call(this, new Int32Array(t), e, n);
  }

  function an(t, e, n) {
    Qe.call(this, new Uint32Array(t), e, n);
  }

  function on(t, e, n) {
    Qe.call(this, new Uint16Array(t), e, n);
  }

  function sn(t, e, n) {
    Qe.call(this, new Float32Array(t), e, n);
  }

  function cn(t, e, n) {
    Qe.call(this, new Float64Array(t), e, n);
  }

  Object.defineProperty(Qe.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  }), Object.assign(Qe.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function onUploadCallback() {},
    setUsage: function setUsage(t) {
      return this.usage = t, this;
    },
    copy: function copy(t) {
      return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
    },
    copyAt: function copyAt(t, e, n) {
      t *= this.itemSize, n *= e.itemSize;

      for (var r = 0, i = this.itemSize; r < i; r++) {
        this.array[t + r] = e.array[n + r];
      }

      return this;
    },
    copyArray: function copyArray(t) {
      return this.array.set(t), this;
    },
    copyColorsArray: function copyColorsArray(t) {
      for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
        var a = t[r];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), a = new We()), e[n++] = a.r, e[n++] = a.g, e[n++] = a.b;
      }

      return this;
    },
    copyVector2sArray: function copyVector2sArray(t) {
      for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
        var a = t[r];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new pt()), e[n++] = a.x, e[n++] = a.y;
      }

      return this;
    },
    copyVector3sArray: function copyVector3sArray(t) {
      for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
        var a = t[r];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), a = new Mt()), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z;
      }

      return this;
    },
    copyVector4sArray: function copyVector4sArray(t) {
      for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
        var a = t[r];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), a = new xt()), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z, e[n++] = a.w;
      }

      return this;
    },
    applyMatrix3: function applyMatrix3(t) {
      if (2 === this.itemSize) for (var e = 0, n = this.count; e < n; e++) {
        Je.fromBufferAttribute(this, e), Je.applyMatrix3(t), this.setXY(e, Je.x, Je.y);
      } else if (3 === this.itemSize) for (var r = 0, i = this.count; r < i; r++) {
        Ze.fromBufferAttribute(this, r), Ze.applyMatrix3(t), this.setXYZ(r, Ze.x, Ze.y, Ze.z);
      }
      return this;
    },
    applyMatrix4: function applyMatrix4(t) {
      for (var e = 0, n = this.count; e < n; e++) {
        Ze.x = this.getX(e), Ze.y = this.getY(e), Ze.z = this.getZ(e), Ze.applyMatrix4(t), this.setXYZ(e, Ze.x, Ze.y, Ze.z);
      }

      return this;
    },
    applyNormalMatrix: function applyNormalMatrix(t) {
      for (var e = 0, n = this.count; e < n; e++) {
        Ze.x = this.getX(e), Ze.y = this.getY(e), Ze.z = this.getZ(e), Ze.applyNormalMatrix(t), this.setXYZ(e, Ze.x, Ze.y, Ze.z);
      }

      return this;
    },
    transformDirection: function transformDirection(t) {
      for (var e = 0, n = this.count; e < n; e++) {
        Ze.x = this.getX(e), Ze.y = this.getY(e), Ze.z = this.getZ(e), Ze.transformDirection(t), this.setXYZ(e, Ze.x, Ze.y, Ze.z);
      }

      return this;
    },
    set: function set(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this;
    },
    getX: function getX(t) {
      return this.array[t * this.itemSize];
    },
    setX: function setX(t, e) {
      return this.array[t * this.itemSize] = e, this;
    },
    getY: function getY(t) {
      return this.array[t * this.itemSize + 1];
    },
    setY: function setY(t, e) {
      return this.array[t * this.itemSize + 1] = e, this;
    },
    getZ: function getZ(t) {
      return this.array[t * this.itemSize + 2];
    },
    setZ: function setZ(t, e) {
      return this.array[t * this.itemSize + 2] = e, this;
    },
    getW: function getW(t) {
      return this.array[t * this.itemSize + 3];
    },
    setW: function setW(t, e) {
      return this.array[t * this.itemSize + 3] = e, this;
    },
    setXY: function setXY(t, e, n) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this;
    },
    setXYZ: function setXYZ(t, e, n, r) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this;
    },
    setXYZW: function setXYZW(t, e, n, r, i) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = i, this;
    },
    onUpload: function onUpload(t) {
      return this.onUploadCallback = t, this;
    },
    clone: function clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    },
    toJSON: function toJSON() {
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized
      };
    }
  }), Ke.prototype = Object.create(Qe.prototype), Ke.prototype.constructor = Ke, $e.prototype = Object.create(Qe.prototype), $e.prototype.constructor = $e, tn.prototype = Object.create(Qe.prototype), tn.prototype.constructor = tn, en.prototype = Object.create(Qe.prototype), en.prototype.constructor = en, nn.prototype = Object.create(Qe.prototype), nn.prototype.constructor = nn, rn.prototype = Object.create(Qe.prototype), rn.prototype.constructor = rn, an.prototype = Object.create(Qe.prototype), an.prototype.constructor = an, on.prototype = Object.create(Qe.prototype), on.prototype.constructor = on, on.prototype.isFloat16BufferAttribute = !0, sn.prototype = Object.create(Qe.prototype), sn.prototype.constructor = sn, cn.prototype = Object.create(Qe.prototype), cn.prototype.constructor = cn;

  var ln = function () {
    function t() {
      this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1;
    }

    var e = t.prototype;
    return e.computeGroups = function (t) {
      var e,
          n,
          r = [],
          i = void 0,
          a = t.faces;

      for (n = 0; n < a.length; n++) {
        var o = a[n];
        o.materialIndex !== i && (i = o.materialIndex, void 0 !== e && (e.count = 3 * n - e.start, r.push(e)), e = {
          start: 3 * n,
          materialIndex: i
        });
      }

      void 0 !== e && (e.count = 3 * n - e.start, r.push(e)), this.groups = r;
    }, e.fromGeometry = function (t) {
      var e,
          n = t.faces,
          r = t.vertices,
          i = t.faceVertexUvs,
          a = i[0] && i[0].length > 0,
          o = i[1] && i[1].length > 0,
          s = t.morphTargets,
          c = s.length;

      if (c > 0) {
        e = [];

        for (var l = 0; l < c; l++) {
          e[l] = {
            name: s[l].name,
            data: []
          };
        }

        this.morphTargets.position = e;
      }

      var u,
          h = t.morphNormals,
          d = h.length;

      if (d > 0) {
        u = [];

        for (var p = 0; p < d; p++) {
          u[p] = {
            name: h[p].name,
            data: []
          };
        }

        this.morphTargets.normal = u;
      }

      var f = t.skinIndices,
          m = t.skinWeights,
          v = f.length === r.length,
          g = m.length === r.length;
      r.length > 0 && 0 === n.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");

      for (var y = 0; y < n.length; y++) {
        var x = n[y];
        this.vertices.push(r[x.a], r[x.b], r[x.c]);
        var _ = x.vertexNormals;
        if (3 === _.length) this.normals.push(_[0], _[1], _[2]);else {
          var b = x.normal;
          this.normals.push(b, b, b);
        }
        var w = x.vertexColors;
        if (3 === w.length) this.colors.push(w[0], w[1], w[2]);else {
          var M = x.color;
          this.colors.push(M, M, M);
        }

        if (!0 === a) {
          var S = i[0][y];
          void 0 !== S ? this.uvs.push(S[0], S[1], S[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", y), this.uvs.push(new pt(), new pt(), new pt()));
        }

        if (!0 === o) {
          var T = i[1][y];
          void 0 !== T ? this.uvs2.push(T[0], T[1], T[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", y), this.uvs2.push(new pt(), new pt(), new pt()));
        }

        for (var E = 0; E < c; E++) {
          var A = s[E].vertices;
          e[E].data.push(A[x.a], A[x.b], A[x.c]);
        }

        for (var L = 0; L < d; L++) {
          var R = h[L].vertexNormals[y];
          u[L].data.push(R.a, R.b, R.c);
        }

        v && this.skinIndices.push(f[x.a], f[x.b], f[x.c]), g && this.skinWeights.push(m[x.a], m[x.b], m[x.c]);
      }

      return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this;
    }, t;
  }();

  function un(t) {
    if (0 === t.length) return -1 / 0;

    for (var e = t[0], n = 1, r = t.length; n < r; ++n) {
      t[n] > e && (e = t[n]);
    }

    return e;
  }

  var hn = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
  };

  function dn(t, e) {
    return new hn[t](e);
  }

  var pn = 1,
      fn = new Qt(),
      mn = new we(),
      vn = new Mt(),
      gn = new Et(),
      yn = new Et(),
      xn = new Mt();

  function _n() {
    Object.defineProperty(this, "id", {
      value: pn += 2
    }), this.uuid = st.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {};
  }

  _n.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: _n,
    isBufferGeometry: !0,
    getIndex: function getIndex() {
      return this.index;
    },
    setIndex: function setIndex(t) {
      return Array.isArray(t) ? this.index = new (un(t) > 65535 ? an : nn)(t, 1) : this.index = t, this;
    },
    getAttribute: function getAttribute(t) {
      return this.attributes[t];
    },
    setAttribute: function setAttribute(t, e) {
      return this.attributes[t] = e, this;
    },
    deleteAttribute: function deleteAttribute(t) {
      return delete this.attributes[t], this;
    },
    hasAttribute: function hasAttribute(t) {
      return void 0 !== this.attributes[t];
    },
    addGroup: function addGroup(t, e, n) {
      void 0 === n && (n = 0), this.groups.push({
        start: t,
        count: e,
        materialIndex: n
      });
    },
    clearGroups: function clearGroups() {
      this.groups = [];
    },
    setDrawRange: function setDrawRange(t, e) {
      this.drawRange.start = t, this.drawRange.count = e;
    },
    applyMatrix4: function applyMatrix4(t) {
      var e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
      var n = this.attributes.normal;

      if (void 0 !== n) {
        var r = new ft().getNormalMatrix(t);
        n.applyNormalMatrix(r), n.needsUpdate = !0;
      }

      var i = this.attributes.tangent;
      return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    },
    rotateX: function rotateX(t) {
      return fn.makeRotationX(t), this.applyMatrix4(fn), this;
    },
    rotateY: function rotateY(t) {
      return fn.makeRotationY(t), this.applyMatrix4(fn), this;
    },
    rotateZ: function rotateZ(t) {
      return fn.makeRotationZ(t), this.applyMatrix4(fn), this;
    },
    translate: function translate(t, e, n) {
      return fn.makeTranslation(t, e, n), this.applyMatrix4(fn), this;
    },
    scale: function scale(t, e, n) {
      return fn.makeScale(t, e, n), this.applyMatrix4(fn), this;
    },
    lookAt: function lookAt(t) {
      return mn.lookAt(t), mn.updateMatrix(), this.applyMatrix4(mn.matrix), this;
    },
    center: function center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(vn).negate(), this.translate(vn.x, vn.y, vn.z), this;
    },
    setFromObject: function setFromObject(t) {
      var e = t.geometry;

      if (t.isPoints || t.isLine) {
        var n = new sn(3 * e.vertices.length, 3),
            r = new sn(3 * e.colors.length, 3);

        if (this.setAttribute("position", n.copyVector3sArray(e.vertices)), this.setAttribute("color", r.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
          var i = new sn(e.lineDistances.length, 1);
          this.setAttribute("lineDistance", i.copyArray(e.lineDistances));
        }

        null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone());
      } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);

      return this;
    },
    setFromPoints: function setFromPoints(t) {
      for (var e = [], n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        e.push(i.x, i.y, i.z || 0);
      }

      return this.setAttribute("position", new sn(e, 3)), this;
    },
    updateFromObject: function updateFromObject(t) {
      var e = t.geometry;

      if (t.isMesh) {
        var n = e.__directGeometry;
        if (!0 === e.elementsNeedUpdate && (n = void 0, e.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(e);
        n.verticesNeedUpdate = e.verticesNeedUpdate, n.normalsNeedUpdate = e.normalsNeedUpdate, n.colorsNeedUpdate = e.colorsNeedUpdate, n.uvsNeedUpdate = e.uvsNeedUpdate, n.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = n;
      }

      if (!0 === e.verticesNeedUpdate) {
        var r = this.attributes.position;
        void 0 !== r && (r.copyVector3sArray(e.vertices), r.needsUpdate = !0), e.verticesNeedUpdate = !1;
      }

      if (!0 === e.normalsNeedUpdate) {
        var i = this.attributes.normal;
        void 0 !== i && (i.copyVector3sArray(e.normals), i.needsUpdate = !0), e.normalsNeedUpdate = !1;
      }

      if (!0 === e.colorsNeedUpdate) {
        var a = this.attributes.color;
        void 0 !== a && (a.copyColorsArray(e.colors), a.needsUpdate = !0), e.colorsNeedUpdate = !1;
      }

      if (e.uvsNeedUpdate) {
        var o = this.attributes.uv;
        void 0 !== o && (o.copyVector2sArray(e.uvs), o.needsUpdate = !0), e.uvsNeedUpdate = !1;
      }

      if (e.lineDistancesNeedUpdate) {
        var s = this.attributes.lineDistance;
        void 0 !== s && (s.copyArray(e.lineDistances), s.needsUpdate = !0), e.lineDistancesNeedUpdate = !1;
      }

      return e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this;
    },
    fromGeometry: function fromGeometry(t) {
      return t.__directGeometry = new ln().fromGeometry(t), this.fromDirectGeometry(t.__directGeometry);
    },
    fromDirectGeometry: function fromDirectGeometry(t) {
      var e = new Float32Array(3 * t.vertices.length);

      if (this.setAttribute("position", new Qe(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
        var n = new Float32Array(3 * t.normals.length);
        this.setAttribute("normal", new Qe(n, 3).copyVector3sArray(t.normals));
      }

      if (t.colors.length > 0) {
        var r = new Float32Array(3 * t.colors.length);
        this.setAttribute("color", new Qe(r, 3).copyColorsArray(t.colors));
      }

      if (t.uvs.length > 0) {
        var i = new Float32Array(2 * t.uvs.length);
        this.setAttribute("uv", new Qe(i, 2).copyVector2sArray(t.uvs));
      }

      if (t.uvs2.length > 0) {
        var a = new Float32Array(2 * t.uvs2.length);
        this.setAttribute("uv2", new Qe(a, 2).copyVector2sArray(t.uvs2));
      }

      for (var o in this.groups = t.groups, t.morphTargets) {
        for (var s = [], c = t.morphTargets[o], l = 0, u = c.length; l < u; l++) {
          var h = c[l],
              d = new sn(3 * h.data.length, 3);
          d.name = h.name, s.push(d.copyVector3sArray(h.data));
        }

        this.morphAttributes[o] = s;
      }

      if (t.skinIndices.length > 0) {
        var p = new sn(4 * t.skinIndices.length, 4);
        this.setAttribute("skinIndex", p.copyVector4sArray(t.skinIndices));
      }

      if (t.skinWeights.length > 0) {
        var f = new sn(4 * t.skinWeights.length, 4);
        this.setAttribute("skinWeight", f.copyVector4sArray(t.skinWeights));
      }

      return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this;
    },
    computeBoundingBox: function computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Et());
      var t = this.attributes.position,
          e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new Mt(-1 / 0, -1 / 0, -1 / 0), new Mt(1 / 0, 1 / 0, 1 / 0));

      if (void 0 !== t) {
        if (this.boundingBox.setFromBufferAttribute(t), e) for (var n = 0, r = e.length; n < r; n++) {
          var i = e[n];
          gn.setFromBufferAttribute(i), this.morphTargetsRelative ? (xn.addVectors(this.boundingBox.min, gn.min), this.boundingBox.expandByPoint(xn), xn.addVectors(this.boundingBox.max, gn.max), this.boundingBox.expandByPoint(xn)) : (this.boundingBox.expandByPoint(gn.min), this.boundingBox.expandByPoint(gn.max));
        }
      } else this.boundingBox.makeEmpty();

      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    },
    computeBoundingSphere: function computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new kt());
      var t = this.attributes.position,
          e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new Mt(), 1 / 0);

      if (t) {
        var n = this.boundingSphere.center;
        if (gn.setFromBufferAttribute(t), e) for (var r = 0, i = e.length; r < i; r++) {
          var a = e[r];
          yn.setFromBufferAttribute(a), this.morphTargetsRelative ? (xn.addVectors(gn.min, yn.min), gn.expandByPoint(xn), xn.addVectors(gn.max, yn.max), gn.expandByPoint(xn)) : (gn.expandByPoint(yn.min), gn.expandByPoint(yn.max));
        }
        gn.getCenter(n);

        for (var o = 0, s = 0, c = t.count; s < c; s++) {
          xn.fromBufferAttribute(t, s), o = Math.max(o, n.distanceToSquared(xn));
        }

        if (e) for (var l = 0, u = e.length; l < u; l++) {
          for (var h = e[l], d = this.morphTargetsRelative, p = 0, f = h.count; p < f; p++) {
            xn.fromBufferAttribute(h, p), d && (vn.fromBufferAttribute(t, p), xn.add(vn)), o = Math.max(o, n.distanceToSquared(xn));
          }
        }
        this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    },
    computeFaceNormals: function computeFaceNormals() {},
    computeVertexNormals: function computeVertexNormals() {
      var t = this.index,
          e = this.getAttribute("position");

      if (void 0 !== e) {
        var n = this.getAttribute("normal");
        if (void 0 === n) n = new Qe(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);else for (var r = 0, i = n.count; r < i; r++) {
          n.setXYZ(r, 0, 0, 0);
        }
        var a = new Mt(),
            o = new Mt(),
            s = new Mt(),
            c = new Mt(),
            l = new Mt(),
            u = new Mt(),
            h = new Mt(),
            d = new Mt();
        if (t) for (var p = 0, f = t.count; p < f; p += 3) {
          var m = t.getX(p + 0),
              v = t.getX(p + 1),
              g = t.getX(p + 2);
          a.fromBufferAttribute(e, m), o.fromBufferAttribute(e, v), s.fromBufferAttribute(e, g), h.subVectors(s, o), d.subVectors(a, o), h.cross(d), c.fromBufferAttribute(n, m), l.fromBufferAttribute(n, v), u.fromBufferAttribute(n, g), c.add(h), l.add(h), u.add(h), n.setXYZ(m, c.x, c.y, c.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(g, u.x, u.y, u.z);
        } else for (var y = 0, x = e.count; y < x; y += 3) {
          a.fromBufferAttribute(e, y + 0), o.fromBufferAttribute(e, y + 1), s.fromBufferAttribute(e, y + 2), h.subVectors(s, o), d.subVectors(a, o), h.cross(d), n.setXYZ(y + 0, h.x, h.y, h.z), n.setXYZ(y + 1, h.x, h.y, h.z), n.setXYZ(y + 2, h.x, h.y, h.z);
        }
        this.normalizeNormals(), n.needsUpdate = !0;
      }
    },
    merge: function merge(t, e) {
      if (t && t.isBufferGeometry) {
        void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        var n = this.attributes;

        for (var r in n) {
          if (void 0 !== t.attributes[r]) for (var i = n[r].array, a = t.attributes[r], o = a.array, s = a.itemSize * e, c = Math.min(o.length, i.length - s), l = 0, u = s; l < c; l++, u++) {
            i[u] = o[l];
          }
        }

        return this;
      }

      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
    },
    normalizeNormals: function normalizeNormals() {
      for (var t = this.attributes.normal, e = 0, n = t.count; e < n; e++) {
        xn.fromBufferAttribute(t, e), xn.normalize(), t.setXYZ(e, xn.x, xn.y, xn.z);
      }
    },
    toNonIndexed: function toNonIndexed() {
      function t(t, e) {
        for (var n = t.array, r = t.itemSize, i = t.normalized, a = new n.constructor(e.length * r), o = 0, s = 0, c = 0, l = e.length; c < l; c++) {
          o = e[c] * r;

          for (var u = 0; u < r; u++) {
            a[s++] = n[o++];
          }
        }

        return new Qe(a, r, i);
      }

      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
      var e = new _n(),
          n = this.index.array,
          r = this.attributes;

      for (var i in r) {
        var a = t(r[i], n);
        e.setAttribute(i, a);
      }

      var o = this.morphAttributes;

      for (var s in o) {
        for (var c = [], l = o[s], u = 0, h = l.length; u < h; u++) {
          var d = t(l[u], n);
          c.push(d);
        }

        e.morphAttributes[s] = c;
      }

      e.morphTargetsRelative = this.morphTargetsRelative;

      for (var p = this.groups, f = 0, m = p.length; f < m; f++) {
        var v = p[f];
        e.addGroup(v.start, v.count, v.materialIndex);
      }

      return e;
    },
    toJSON: function toJSON() {
      var t = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };

      if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
        var e = this.parameters;

        for (var n in e) {
          void 0 !== e[n] && (t[n] = e[n]);
        }

        return t;
      }

      t.data = {
        attributes: {}
      };
      var r = this.index;
      null !== r && (t.data.index = {
        type: r.array.constructor.name,
        array: Array.prototype.slice.call(r.array)
      });
      var i = this.attributes;

      for (var a in i) {
        var o = i[a],
            s = o.toJSON(t.data);
        "" !== o.name && (s.name = o.name), t.data.attributes[a] = s;
      }

      var c = {},
          l = !1;

      for (var u in this.morphAttributes) {
        for (var h = this.morphAttributes[u], d = [], p = 0, f = h.length; p < f; p++) {
          var m = h[p],
              v = m.toJSON(t.data);
          "" !== m.name && (v.name = m.name), d.push(v);
        }

        d.length > 0 && (c[u] = d, l = !0);
      }

      l && (t.data.morphAttributes = c, t.data.morphTargetsRelative = this.morphTargetsRelative);
      var g = this.groups;
      g.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(g)));
      var y = this.boundingSphere;
      return null !== y && (t.data.boundingSphere = {
        center: y.center.toArray(),
        radius: y.radius
      }), t;
    },
    clone: function clone() {
      return new _n().copy(this);
    },
    copy: function copy(t) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      var e = {};
      this.name = t.name;
      var n = t.index;
      null !== n && this.setIndex(n.clone(e));
      var r = t.attributes;

      for (var i in r) {
        var a = r[i];
        this.setAttribute(i, a.clone(e));
      }

      var o = t.morphAttributes;

      for (var s in o) {
        for (var c = [], l = o[s], u = 0, h = l.length; u < h; u++) {
          c.push(l[u].clone(e));
        }

        this.morphAttributes[s] = c;
      }

      this.morphTargetsRelative = t.morphTargetsRelative;

      for (var d = t.groups, p = 0, f = d.length; p < f; p++) {
        var m = d[p];
        this.addGroup(m.start, m.count, m.materialIndex);
      }

      var v = t.boundingBox;
      null !== v && (this.boundingBox = v.clone());
      var g = t.boundingSphere;
      return null !== g && (this.boundingSphere = g.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  var bn = new Qt(),
      wn = new Jt(),
      Mn = new kt(),
      Sn = new Mt(),
      Tn = new Mt(),
      En = new Mt(),
      An = new Mt(),
      Ln = new Mt(),
      Rn = new Mt(),
      Cn = new Mt(),
      Pn = new Mt(),
      In = new Mt(),
      Nn = new pt(),
      Dn = new pt(),
      On = new pt(),
      Bn = new Mt(),
      zn = new Mt();

  function Un(t, e) {
    we.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new _n(), this.material = void 0 !== e ? e : new Ye(), this.updateMorphTargets();
  }

  function Fn(t, e, n, r, i, a, o, s) {
    if (null === (1 === e.side ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, 2 !== e.side, s))) return null;
    zn.copy(s), zn.applyMatrix4(t.matrixWorld);
    var c = n.ray.origin.distanceTo(zn);
    return c < n.near || c > n.far ? null : {
      distance: c,
      point: zn.clone(),
      object: t
    };
  }

  function Gn(t, e, n, r, i, a, o, s, c, l, u, h) {
    Sn.fromBufferAttribute(i, l), Tn.fromBufferAttribute(i, u), En.fromBufferAttribute(i, h);
    var d = t.morphTargetInfluences;

    if (e.morphTargets && a && d) {
      Cn.set(0, 0, 0), Pn.set(0, 0, 0), In.set(0, 0, 0);

      for (var p = 0, f = a.length; p < f; p++) {
        var m = d[p],
            v = a[p];
        0 !== m && (An.fromBufferAttribute(v, l), Ln.fromBufferAttribute(v, u), Rn.fromBufferAttribute(v, h), o ? (Cn.addScaledVector(An, m), Pn.addScaledVector(Ln, m), In.addScaledVector(Rn, m)) : (Cn.addScaledVector(An.sub(Sn), m), Pn.addScaledVector(Ln.sub(Tn), m), In.addScaledVector(Rn.sub(En), m)));
      }

      Sn.add(Cn), Tn.add(Pn), En.add(In);
    }

    t.isSkinnedMesh && (t.boneTransform(l, Sn), t.boneTransform(u, Tn), t.boneTransform(h, En));
    var g = Fn(t, e, n, r, Sn, Tn, En, Bn);

    if (g) {
      s && (Nn.fromBufferAttribute(s, l), Dn.fromBufferAttribute(s, u), On.fromBufferAttribute(s, h), g.uv = ze.getUV(Bn, Sn, Tn, En, Nn, Dn, On, new pt())), c && (Nn.fromBufferAttribute(c, l), Dn.fromBufferAttribute(c, u), On.fromBufferAttribute(c, h), g.uv2 = ze.getUV(Bn, Sn, Tn, En, Nn, Dn, On, new pt()));
      var y = new je(l, u, h);
      ze.getNormal(Sn, Tn, En, y.normal), g.face = y;
    }

    return g;
  }

  Un.prototype = Object.assign(Object.create(we.prototype), {
    constructor: Un,
    isMesh: !0,
    copy: function copy(t) {
      return we.prototype.copy.call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this;
    },
    updateMorphTargets: function updateMorphTargets() {
      var t = this.geometry;

      if (t.isBufferGeometry) {
        var e = t.morphAttributes,
            n = Object.keys(e);

        if (n.length > 0) {
          var r = e[n[0]];

          if (void 0 !== r) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};

            for (var i = 0, a = r.length; i < a; i++) {
              var o = r[i].name || String(i);
              this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = i;
            }
          }
        }
      } else {
        var s = t.morphTargets;
        void 0 !== s && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    },
    raycast: function raycast(t, e) {
      var n,
          r = this.geometry,
          i = this.material,
          a = this.matrixWorld;
      if (void 0 !== i && (null === r.boundingSphere && r.computeBoundingSphere(), Mn.copy(r.boundingSphere), Mn.applyMatrix4(a), !1 !== t.ray.intersectsSphere(Mn) && (bn.copy(a).invert(), wn.copy(t.ray).applyMatrix4(bn), null === r.boundingBox || !1 !== wn.intersectsBox(r.boundingBox)))) if (r.isBufferGeometry) {
        var o = r.index,
            s = r.attributes.position,
            c = r.morphAttributes.position,
            l = r.morphTargetsRelative,
            u = r.attributes.uv,
            h = r.attributes.uv2,
            d = r.groups,
            p = r.drawRange;
        if (null !== o) {
          if (Array.isArray(i)) for (var f = 0, m = d.length; f < m; f++) {
            for (var v = d[f], g = i[v.materialIndex], y = Math.max(v.start, p.start), x = Math.min(v.start + v.count, p.start + p.count); y < x; y += 3) {
              var _ = o.getX(y),
                  b = o.getX(y + 1),
                  w = o.getX(y + 2);

              (n = Gn(this, g, t, wn, s, c, l, u, h, _, b, w)) && (n.faceIndex = Math.floor(y / 3), n.face.materialIndex = v.materialIndex, e.push(n));
            }
          } else for (var M = Math.max(0, p.start), S = Math.min(o.count, p.start + p.count); M < S; M += 3) {
            var T = o.getX(M),
                E = o.getX(M + 1),
                A = o.getX(M + 2);
            (n = Gn(this, i, t, wn, s, c, l, u, h, T, E, A)) && (n.faceIndex = Math.floor(M / 3), e.push(n));
          }
        } else if (void 0 !== s) if (Array.isArray(i)) for (var L = 0, R = d.length; L < R; L++) {
          for (var C = d[L], P = i[C.materialIndex], I = Math.max(C.start, p.start), N = Math.min(C.start + C.count, p.start + p.count); I < N; I += 3) {
            (n = Gn(this, P, t, wn, s, c, l, u, h, I, I + 1, I + 2)) && (n.faceIndex = Math.floor(I / 3), n.face.materialIndex = C.materialIndex, e.push(n));
          }
        } else for (var D = Math.max(0, p.start), O = Math.min(s.count, p.start + p.count); D < O; D += 3) {
          (n = Gn(this, i, t, wn, s, c, l, u, h, D, D + 1, D + 2)) && (n.faceIndex = Math.floor(D / 3), e.push(n));
        }
      } else if (r.isGeometry) {
        var B,
            z = Array.isArray(i),
            U = r.vertices,
            F = r.faces,
            G = r.faceVertexUvs[0];
        G.length > 0 && (B = G);

        for (var H = 0, k = F.length; H < k; H++) {
          var V = F[H],
              W = z ? i[V.materialIndex] : i;

          if (void 0 !== W) {
            var j = U[V.a],
                q = U[V.b],
                X = U[V.c];

            if (n = Fn(this, W, t, wn, j, q, X, Bn)) {
              if (B && B[H]) {
                var Y = B[H];
                Nn.copy(Y[0]), Dn.copy(Y[1]), On.copy(Y[2]), n.uv = ze.getUV(Bn, j, q, X, Nn, Dn, On, new pt());
              }

              n.face = V, n.faceIndex = H, e.push(n);
            }
          }
        }
      }
    }
  });

  var Hn = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1), void 0 === a && (a = 1), void 0 === o && (o = 1), (s = t.call(this) || this).type = "BoxBufferGeometry", s.parameters = {
        width: e,
        height: n,
        depth: r,
        widthSegments: i,
        heightSegments: a,
        depthSegments: o
      };
      var c = ht(s);
      i = Math.floor(i), a = Math.floor(a), o = Math.floor(o);
      var l = [],
          u = [],
          h = [],
          d = [],
          p = 0,
          f = 0;

      function m(t, e, n, r, i, a, o, s, m, v, g) {
        for (var y = a / m, x = o / v, _ = a / 2, b = o / 2, w = s / 2, M = m + 1, S = v + 1, T = 0, E = 0, A = new Mt(), L = 0; L < S; L++) {
          for (var R = L * x - b, C = 0; C < M; C++) {
            var P = C * y - _;
            A[t] = P * r, A[e] = R * i, A[n] = w, u.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = s > 0 ? 1 : -1, h.push(A.x, A.y, A.z), d.push(C / m), d.push(1 - L / v), T += 1;
          }
        }

        for (var I = 0; I < v; I++) {
          for (var N = 0; N < m; N++) {
            var D = p + N + M * I,
                O = p + N + M * (I + 1),
                B = p + (N + 1) + M * (I + 1),
                z = p + (N + 1) + M * I;
            l.push(D, O, z), l.push(O, B, z), E += 6;
          }
        }

        c.addGroup(f, E, g), f += E, p += T;
      }

      return m("z", "y", "x", -1, -1, r, n, e, o, a, 0), m("z", "y", "x", 1, -1, r, n, -e, o, a, 1), m("x", "z", "y", 1, 1, e, r, n, i, o, 2), m("x", "z", "y", 1, -1, e, r, -n, i, o, 3), m("x", "y", "z", 1, -1, e, n, r, i, a, 4), m("x", "y", "z", -1, -1, e, n, -r, i, a, 5), s.setIndex(l), s.setAttribute("position", new sn(u, 3)), s.setAttribute("normal", new sn(h, 3)), s.setAttribute("uv", new sn(d, 2)), s;
    }

    return ut(e, t), e;
  }(_n);

  function kn(t) {
    var e = {};

    for (var n in t) {
      for (var r in e[n] = {}, t[n]) {
        var i = t[n][r];
        i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture) ? e[n][r] = i.clone() : Array.isArray(i) ? e[n][r] = i.slice() : e[n][r] = i;
      }
    }

    return e;
  }

  function Vn(t) {
    for (var e = {}, n = 0; n < t.length; n++) {
      var r = kn(t[n]);

      for (var i in r) {
        e[i] = r[i];
      }
    }

    return e;
  }

  var Wn = {
    clone: kn,
    merge: Vn
  };

  function jn(t) {
    Xe.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t));
  }

  function qn() {
    we.call(this), this.type = "Camera", this.matrixWorldInverse = new Qt(), this.projectionMatrix = new Qt(), this.projectionMatrixInverse = new Qt();
  }

  function Xn(t, e, n, r) {
    void 0 === t && (t = 50), void 0 === e && (e = 1), void 0 === n && (n = .1), void 0 === r && (r = 2e3), qn.call(this), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }

  jn.prototype = Object.create(Xe.prototype), jn.prototype.constructor = jn, jn.prototype.isShaderMaterial = !0, jn.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = kn(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }, jn.prototype.toJSON = function (t) {
    var e = Xe.prototype.toJSON.call(this, t);

    for (var n in e.glslVersion = this.glslVersion, e.uniforms = {}, this.uniforms) {
      var r = this.uniforms[n].value;
      r && r.isTexture ? e.uniforms[n] = {
        type: "t",
        value: r.toJSON(t).uuid
      } : r && r.isColor ? e.uniforms[n] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? e.uniforms[n] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? e.uniforms[n] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? e.uniforms[n] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? e.uniforms[n] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? e.uniforms[n] = {
        type: "m4",
        value: r.toArray()
      } : e.uniforms[n] = {
        value: r
      };
    }

    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
    var i = {};

    for (var a in this.extensions) {
      !0 === this.extensions[a] && (i[a] = !0);
    }

    return Object.keys(i).length > 0 && (e.extensions = i), e;
  }, qn.prototype = Object.assign(Object.create(we.prototype), {
    constructor: qn,
    isCamera: !0,
    copy: function copy(t, e) {
      return we.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
    },
    getWorldDirection: function getWorldDirection(t) {
      void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new Mt()), this.updateWorldMatrix(!0, !1);
      var e = this.matrixWorld.elements;
      return t.set(-e[8], -e[9], -e[10]).normalize();
    },
    updateMatrixWorld: function updateMatrixWorld(t) {
      we.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    },
    updateWorldMatrix: function updateWorldMatrix(t, e) {
      we.prototype.updateWorldMatrix.call(this, t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    }
  }), Xn.prototype = Object.assign(Object.create(qn.prototype), {
    constructor: Xn,
    isPerspectiveCamera: !0,
    copy: function copy(t, e) {
      return qn.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
    },
    setFocalLength: function setFocalLength(t) {
      var e = .5 * this.getFilmHeight() / t;
      this.fov = 2 * st.RAD2DEG * Math.atan(e), this.updateProjectionMatrix();
    },
    getFocalLength: function getFocalLength() {
      var t = Math.tan(.5 * st.DEG2RAD * this.fov);
      return .5 * this.getFilmHeight() / t;
    },
    getEffectiveFOV: function getEffectiveFOV() {
      return 2 * st.RAD2DEG * Math.atan(Math.tan(.5 * st.DEG2RAD * this.fov) / this.zoom);
    },
    getFilmWidth: function getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    },
    getFilmHeight: function getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    },
    setViewOffset: function setViewOffset(t, e, n, r, i, a) {
      this.aspect = t / e, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
    },
    clearViewOffset: function clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function updateProjectionMatrix() {
      var t = this.near,
          e = t * Math.tan(.5 * st.DEG2RAD * this.fov) / this.zoom,
          n = 2 * e,
          r = this.aspect * n,
          i = -.5 * r,
          a = this.view;

      if (null !== this.view && this.view.enabled) {
        var o = a.fullWidth,
            s = a.fullHeight;
        i += a.offsetX * r / o, e -= a.offsetY * n / s, r *= a.width / o, n *= a.height / s;
      }

      var c = this.filmOffset;
      0 !== c && (i += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    },
    toJSON: function toJSON(t) {
      var e = we.prototype.toJSON.call(this, t);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
    }
  });
  var Yn = 90;

  function Zn(t, e, n) {
    if (we.call(this), this.type = "CubeCamera", !0 === n.isWebGLCubeRenderTarget) {
      this.renderTarget = n;
      var r = new Xn(Yn, 1, t, e);
      r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new Mt(1, 0, 0)), this.add(r);
      var i = new Xn(Yn, 1, t, e);
      i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new Mt(-1, 0, 0)), this.add(i);
      var a = new Xn(Yn, 1, t, e);
      a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new Mt(0, 1, 0)), this.add(a);
      var o = new Xn(Yn, 1, t, e);
      o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new Mt(0, -1, 0)), this.add(o);
      var s = new Xn(Yn, 1, t, e);
      s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new Mt(0, 0, 1)), this.add(s);
      var c = new Xn(Yn, 1, t, e);
      c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new Mt(0, 0, -1)), this.add(c), this.update = function (t, e) {
        null === this.parent && this.updateMatrixWorld();
        var l = t.xr.enabled,
            u = t.getRenderTarget();
        t.xr.enabled = !1;
        var h = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, r), t.setRenderTarget(n, 1), t.render(e, i), t.setRenderTarget(n, 2), t.render(e, a), t.setRenderTarget(n, 3), t.render(e, o), t.setRenderTarget(n, 4), t.render(e, s), n.texture.generateMipmaps = h, t.setRenderTarget(n, 5), t.render(e, c), t.setRenderTarget(u), t.xr.enabled = l;
      };
    } else console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
  }

  function Jn(t, e, n, i, a, o, s, c, l, u) {
    t = void 0 !== t ? t : [], e = void 0 !== e ? e : r, s = void 0 !== s ? s : S, gt.call(this, t, e, n, i, a, o, s, c, l, u), this.flipY = !1, this._needsFlipEnvMap = !0;
  }

  function Qn(t, e, n) {
    Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = n), _t.call(this, t, t, e), e = e || {}, this.texture = new Jn(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture._needsFlipEnvMap = !1;
  }

  function Kn(t, e, n, r, i, a, o, s, c, l, u, h) {
    gt.call(this, null, a, o, s, c, l, r, i, u, h), this.image = {
      data: t || null,
      width: e || 1,
      height: n || 1
    }, this.magFilter = void 0 !== c ? c : d, this.minFilter = void 0 !== l ? l : d, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
  }

  Zn.prototype = Object.create(we.prototype), Zn.prototype.constructor = Zn, Jn.prototype = Object.create(gt.prototype), Jn.prototype.constructor = Jn, Jn.prototype.isCubeTexture = !0, Object.defineProperty(Jn.prototype, "images", {
    get: function get() {
      return this.image;
    },
    set: function set(t) {
      this.image = t;
    }
  }), Qn.prototype = Object.create(_t.prototype), Qn.prototype.constructor = Qn, Qn.prototype.isWebGLCubeRenderTarget = !0, Qn.prototype.fromEquirectangularTexture = function (t, e) {
    this.texture.type = e.type, this.texture.format = T, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    var n = {
      tEquirect: {
        value: null
      }
    },
        r = "\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t#include <begin_vertex>\n\t\t\t\t#include <project_vertex>\n\n\t\t\t}\n\t\t",
        i = "\n\n\t\t\tuniform sampler2D tEquirect;\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t}\n\t\t",
        a = new Hn(5, 5, 5),
        o = new jn({
      name: "CubemapFromEquirect",
      uniforms: kn(n),
      vertexShader: r,
      fragmentShader: i,
      side: 1,
      blending: 0
    });
    o.uniforms.tEquirect.value = e;
    var s = new Un(a, o),
        c = e.minFilter;
    return e.minFilter === g && (e.minFilter = m), new Zn(1, 10, this).update(t, s), e.minFilter = c, s.geometry.dispose(), s.material.dispose(), this;
  }, Qn.prototype.clear = function (t, e, n, r) {
    for (var i = t.getRenderTarget(), a = 0; a < 6; a++) {
      t.setRenderTarget(this, a), t.clear(e, n, r);
    }

    t.setRenderTarget(i);
  }, Kn.prototype = Object.create(gt.prototype), Kn.prototype.constructor = Kn, Kn.prototype.isDataTexture = !0;

  var $n = new kt(),
      tr = new Mt(),
      er = function () {
    function t(t, e, n, r, i, a) {
      this.planes = [void 0 !== t ? t : new Ee(), void 0 !== e ? e : new Ee(), void 0 !== n ? n : new Ee(), void 0 !== r ? r : new Ee(), void 0 !== i ? i : new Ee(), void 0 !== a ? a : new Ee()];
    }

    var e = t.prototype;
    return e.set = function (t, e, n, r, i, a) {
      var o = this.planes;
      return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      for (var e = this.planes, n = 0; n < 6; n++) {
        e[n].copy(t.planes[n]);
      }

      return this;
    }, e.setFromProjectionMatrix = function (t) {
      var e = this.planes,
          n = t.elements,
          r = n[0],
          i = n[1],
          a = n[2],
          o = n[3],
          s = n[4],
          c = n[5],
          l = n[6],
          u = n[7],
          h = n[8],
          d = n[9],
          p = n[10],
          f = n[11],
          m = n[12],
          v = n[13],
          g = n[14],
          y = n[15];
      return e[0].setComponents(o - r, u - s, f - h, y - m).normalize(), e[1].setComponents(o + r, u + s, f + h, y + m).normalize(), e[2].setComponents(o + i, u + c, f + d, y + v).normalize(), e[3].setComponents(o - i, u - c, f - d, y - v).normalize(), e[4].setComponents(o - a, u - l, f - p, y - g).normalize(), e[5].setComponents(o + a, u + l, f + p, y + g).normalize(), this;
    }, e.intersectsObject = function (t) {
      var e = t.geometry;
      return null === e.boundingSphere && e.computeBoundingSphere(), $n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere($n);
    }, e.intersectsSprite = function (t) {
      return $n.center.set(0, 0, 0), $n.radius = .7071067811865476, $n.applyMatrix4(t.matrixWorld), this.intersectsSphere($n);
    }, e.intersectsSphere = function (t) {
      for (var e = this.planes, n = t.center, r = -t.radius, i = 0; i < 6; i++) {
        if (e[i].distanceToPoint(n) < r) return !1;
      }

      return !0;
    }, e.intersectsBox = function (t) {
      for (var e = this.planes, n = 0; n < 6; n++) {
        var r = e[n];
        if (tr.x = r.normal.x > 0 ? t.max.x : t.min.x, tr.y = r.normal.y > 0 ? t.max.y : t.min.y, tr.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint(tr) < 0) return !1;
      }

      return !0;
    }, e.containsPoint = function (t) {
      for (var e = this.planes, n = 0; n < 6; n++) {
        if (e[n].distanceToPoint(t) < 0) return !1;
      }

      return !0;
    }, t;
  }();

  function nr() {
    var t = null,
        e = !1,
        n = null,
        r = null;

    function i(e, a) {
      n(e, a), r = t.requestAnimationFrame(i);
    }

    return {
      start: function start() {
        !0 !== e && null !== n && (r = t.requestAnimationFrame(i), e = !0);
      },
      stop: function stop() {
        t.cancelAnimationFrame(r), e = !1;
      },
      setAnimationLoop: function setAnimationLoop(t) {
        n = t;
      },
      setContext: function setContext(e) {
        t = e;
      }
    };
  }

  function rr(t, e) {
    var n = e.isWebGL2,
        r = new WeakMap();
    return {
      get: function get(t) {
        return t.isInterleavedBufferAttribute && (t = t.data), r.get(t);
      },
      remove: function remove(e) {
        e.isInterleavedBufferAttribute && (e = e.data);
        var n = r.get(e);
        n && (t.deleteBuffer(n.buffer), r.delete(e));
      },
      update: function update(e, i) {
        if (e.isGLBufferAttribute) {
          var a = r.get(e);
          (!a || a.version < e.version) && r.set(e, {
            buffer: e.buffer,
            type: e.type,
            bytesPerElement: e.elementSize,
            version: e.version
          });
        } else {
          e.isInterleavedBufferAttribute && (e = e.data);
          var o = r.get(e);
          void 0 === o ? r.set(e, function (e, r) {
            var i = e.array,
                a = e.usage,
                o = t.createBuffer();
            t.bindBuffer(r, o), t.bufferData(r, i, a), e.onUploadCallback();
            var s = 5126;
            return i instanceof Float32Array ? s = 5126 : i instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : i instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? s = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : s = 5123 : i instanceof Int16Array ? s = 5122 : i instanceof Uint32Array ? s = 5125 : i instanceof Int32Array ? s = 5124 : i instanceof Int8Array ? s = 5120 : i instanceof Uint8Array && (s = 5121), {
              buffer: o,
              type: s,
              bytesPerElement: i.BYTES_PER_ELEMENT,
              version: e.version
            };
          }(e, i)) : o.version < e.version && (!function (e, r, i) {
            var a = r.array,
                o = r.updateRange;
            t.bindBuffer(i, e), -1 === o.count ? t.bufferSubData(i, 0, a) : (n ? t.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : t.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)), o.count = -1);
          }(o.buffer, e, i), o.version = e.version);
        }
      }
    };
  }

  var ir = function (t) {
    function e(e, n, r, i) {
      var a;
      void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1), (a = t.call(this) || this).type = "PlaneBufferGeometry", a.parameters = {
        width: e,
        height: n,
        widthSegments: r,
        heightSegments: i
      };

      for (var o = e / 2, s = n / 2, c = Math.floor(r), l = Math.floor(i), u = c + 1, h = l + 1, d = e / c, p = n / l, f = [], m = [], v = [], g = [], y = 0; y < h; y++) {
        for (var x = y * p - s, _ = 0; _ < u; _++) {
          var b = _ * d - o;
          m.push(b, -x, 0), v.push(0, 0, 1), g.push(_ / c), g.push(1 - y / l);
        }
      }

      for (var w = 0; w < l; w++) {
        for (var M = 0; M < c; M++) {
          var S = M + u * w,
              T = M + u * (w + 1),
              E = M + 1 + u * (w + 1),
              A = M + 1 + u * w;
          f.push(S, T, A), f.push(T, E, A);
        }
      }

      return a.setIndex(f), a.setAttribute("position", new sn(m, 3)), a.setAttribute("normal", new sn(v, 3)), a.setAttribute("uv", new sn(g, 2)), a;
    }

    return ut(e, t), e;
  }(_n),
      ar = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t\t0, 1,\t\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
    normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(\t1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
    transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
  },
      or = {
    common: {
      diffuse: {
        value: new We(15658734)
      },
      opacity: {
        value: 1
      },
      map: {
        value: null
      },
      uvTransform: {
        value: new ft()
      },
      uv2Transform: {
        value: new ft()
      },
      alphaMap: {
        value: null
      }
    },
    specularmap: {
      specularMap: {
        value: null
      }
    },
    envmap: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      reflectivity: {
        value: 1
      },
      refractionRatio: {
        value: .98
      },
      maxMipLevel: {
        value: 0
      }
    },
    aomap: {
      aoMap: {
        value: null
      },
      aoMapIntensity: {
        value: 1
      }
    },
    lightmap: {
      lightMap: {
        value: null
      },
      lightMapIntensity: {
        value: 1
      }
    },
    emissivemap: {
      emissiveMap: {
        value: null
      }
    },
    bumpmap: {
      bumpMap: {
        value: null
      },
      bumpScale: {
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        value: null
      },
      normalScale: {
        value: new pt(1, 1)
      }
    },
    displacementmap: {
      displacementMap: {
        value: null
      },
      displacementScale: {
        value: 1
      },
      displacementBias: {
        value: 0
      }
    },
    roughnessmap: {
      roughnessMap: {
        value: null
      }
    },
    metalnessmap: {
      metalnessMap: {
        value: null
      }
    },
    gradientmap: {
      gradientMap: {
        value: null
      }
    },
    fog: {
      fogDensity: {
        value: 25e-5
      },
      fogNear: {
        value: 1
      },
      fogFar: {
        value: 2e3
      },
      fogColor: {
        value: new We(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        value: []
      },
      lightProbe: {
        value: []
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {}
        }
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      directionalShadowMap: {
        value: []
      },
      directionalShadowMatrix: {
        value: []
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {}
        }
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      spotShadowMap: {
        value: []
      },
      spotShadowMatrix: {
        value: []
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {}
        }
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {
        value: []
      },
      pointShadowMatrix: {
        value: []
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {}
        }
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {}
        }
      },
      ltc_1: {
        value: null
      },
      ltc_2: {
        value: null
      }
    },
    points: {
      diffuse: {
        value: new We(15658734)
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      scale: {
        value: 1
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new ft()
      }
    },
    sprite: {
      diffuse: {
        value: new We(15658734)
      },
      opacity: {
        value: 1
      },
      center: {
        value: new pt(.5, .5)
      },
      rotation: {
        value: 0
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new ft()
      }
    }
  },
      sr = {
    basic: {
      uniforms: Vn([or.common, or.specularmap, or.envmap, or.aomap, or.lightmap, or.fog]),
      vertexShader: ar.meshbasic_vert,
      fragmentShader: ar.meshbasic_frag
    },
    lambert: {
      uniforms: Vn([or.common, or.specularmap, or.envmap, or.aomap, or.lightmap, or.emissivemap, or.fog, or.lights, {
        emissive: {
          value: new We(0)
        }
      }]),
      vertexShader: ar.meshlambert_vert,
      fragmentShader: ar.meshlambert_frag
    },
    phong: {
      uniforms: Vn([or.common, or.specularmap, or.envmap, or.aomap, or.lightmap, or.emissivemap, or.bumpmap, or.normalmap, or.displacementmap, or.fog, or.lights, {
        emissive: {
          value: new We(0)
        },
        specular: {
          value: new We(1118481)
        },
        shininess: {
          value: 30
        }
      }]),
      vertexShader: ar.meshphong_vert,
      fragmentShader: ar.meshphong_frag
    },
    standard: {
      uniforms: Vn([or.common, or.envmap, or.aomap, or.lightmap, or.emissivemap, or.bumpmap, or.normalmap, or.displacementmap, or.roughnessmap, or.metalnessmap, or.fog, or.lights, {
        emissive: {
          value: new We(0)
        },
        roughness: {
          value: 1
        },
        metalness: {
          value: 0
        },
        envMapIntensity: {
          value: 1
        }
      }]),
      vertexShader: ar.meshphysical_vert,
      fragmentShader: ar.meshphysical_frag
    },
    toon: {
      uniforms: Vn([or.common, or.aomap, or.lightmap, or.emissivemap, or.bumpmap, or.normalmap, or.displacementmap, or.gradientmap, or.fog, or.lights, {
        emissive: {
          value: new We(0)
        }
      }]),
      vertexShader: ar.meshtoon_vert,
      fragmentShader: ar.meshtoon_frag
    },
    matcap: {
      uniforms: Vn([or.common, or.bumpmap, or.normalmap, or.displacementmap, or.fog, {
        matcap: {
          value: null
        }
      }]),
      vertexShader: ar.meshmatcap_vert,
      fragmentShader: ar.meshmatcap_frag
    },
    points: {
      uniforms: Vn([or.points, or.fog]),
      vertexShader: ar.points_vert,
      fragmentShader: ar.points_frag
    },
    dashed: {
      uniforms: Vn([or.common, or.fog, {
        scale: {
          value: 1
        },
        dashSize: {
          value: 1
        },
        totalSize: {
          value: 2
        }
      }]),
      vertexShader: ar.linedashed_vert,
      fragmentShader: ar.linedashed_frag
    },
    depth: {
      uniforms: Vn([or.common, or.displacementmap]),
      vertexShader: ar.depth_vert,
      fragmentShader: ar.depth_frag
    },
    normal: {
      uniforms: Vn([or.common, or.bumpmap, or.normalmap, or.displacementmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: ar.normal_vert,
      fragmentShader: ar.normal_frag
    },
    sprite: {
      uniforms: Vn([or.sprite, or.fog]),
      vertexShader: ar.sprite_vert,
      fragmentShader: ar.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new ft()
        },
        t2D: {
          value: null
        }
      },
      vertexShader: ar.background_vert,
      fragmentShader: ar.background_frag
    },
    cube: {
      uniforms: Vn([or.envmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: ar.cube_vert,
      fragmentShader: ar.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: ar.equirect_vert,
      fragmentShader: ar.equirect_frag
    },
    distanceRGBA: {
      uniforms: Vn([or.common, or.displacementmap, {
        referencePosition: {
          value: new Mt()
        },
        nearDistance: {
          value: 1
        },
        farDistance: {
          value: 1e3
        }
      }]),
      vertexShader: ar.distanceRGBA_vert,
      fragmentShader: ar.distanceRGBA_frag
    },
    shadow: {
      uniforms: Vn([or.lights, or.fog, {
        color: {
          value: new We(0)
        },
        opacity: {
          value: 1
        }
      }]),
      vertexShader: ar.shadow_vert,
      fragmentShader: ar.shadow_frag
    }
  };

  function cr(t, e, n, r, i) {
    var a,
        o,
        c = new We(0),
        l = 0,
        u = null,
        h = 0,
        d = null;

    function p(t, e) {
      n.buffers.color.setClear(t.r, t.g, t.b, e, i);
    }

    return {
      getClearColor: function getClearColor() {
        return c;
      },
      setClearColor: function setClearColor(t, e) {
        void 0 === e && (e = 1), c.set(t), p(c, l = e);
      },
      getClearAlpha: function getClearAlpha() {
        return l;
      },
      setClearAlpha: function setClearAlpha(t) {
        p(c, l = t);
      },
      render: function render(n, i, f, m) {
        var v = !0 === i.isScene ? i.background : null;
        v && v.isTexture && (v = e.get(v));
        var g = t.xr,
            y = g.getSession && g.getSession();
        y && "additive" === y.environmentBlendMode && (v = null), null === v ? p(c, l) : v && v.isColor && (p(v, 1), m = !0), (t.autoClear || m) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), v && (v.isCubeTexture || v.isWebGLCubeRenderTarget || v.mapping === s) ? (void 0 === o && ((o = new Un(new Hn(1, 1, 1), new jn({
          name: "BackgroundCubeMaterial",
          uniforms: kn(sr.cube.uniforms),
          vertexShader: sr.cube.vertexShader,
          fragmentShader: sr.cube.fragmentShader,
          side: 1,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        }))).geometry.deleteAttribute("normal"), o.geometry.deleteAttribute("uv"), o.onBeforeRender = function (t, e, n) {
          this.matrixWorld.copyPosition(n.matrixWorld);
        }, Object.defineProperty(o.material, "envMap", {
          get: function get() {
            return this.uniforms.envMap.value;
          }
        }), r.update(o)), v.isWebGLCubeRenderTarget && (v = v.texture), o.material.uniforms.envMap.value = v, o.material.uniforms.flipEnvMap.value = v.isCubeTexture && v._needsFlipEnvMap ? -1 : 1, u === v && h === v.version && d === t.toneMapping || (o.material.needsUpdate = !0, u = v, h = v.version, d = t.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null)) : v && v.isTexture && (void 0 === a && ((a = new Un(new ir(2, 2), new jn({
          name: "BackgroundMaterial",
          uniforms: kn(sr.background.uniforms),
          vertexShader: sr.background.vertexShader,
          fragmentShader: sr.background.fragmentShader,
          side: 0,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        }))).geometry.deleteAttribute("normal"), Object.defineProperty(a.material, "map", {
          get: function get() {
            return this.uniforms.t2D.value;
          }
        }), r.update(a)), a.material.uniforms.t2D.value = v, !0 === v.matrixAutoUpdate && v.updateMatrix(), a.material.uniforms.uvTransform.value.copy(v.matrix), u === v && h === v.version && d === t.toneMapping || (a.material.needsUpdate = !0, u = v, h = v.version, d = t.toneMapping), n.unshift(a, a.geometry, a.material, 0, 0, null));
      }
    };
  }

  function lr(t, e, n, r) {
    var i = t.getParameter(34921),
        a = r.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        o = r.isWebGL2 || null !== a,
        s = {},
        c = d(null),
        l = c;

    function u(e) {
      return r.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e);
    }

    function h(e) {
      return r.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e);
    }

    function d(t) {
      for (var e = [], n = [], r = [], a = 0; a < i; a++) {
        e[a] = 0, n[a] = 0, r[a] = 0;
      }

      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: n,
        attributeDivisors: r,
        object: t,
        attributes: {},
        index: null
      };
    }

    function p() {
      for (var t = l.newAttributes, e = 0, n = t.length; e < n; e++) {
        t[e] = 0;
      }
    }

    function f(t) {
      m(t, 0);
    }

    function m(n, i) {
      var a = l.newAttributes,
          o = l.enabledAttributes,
          s = l.attributeDivisors;
      (a[n] = 1, 0 === o[n] && (t.enableVertexAttribArray(n), o[n] = 1), s[n] !== i) && ((r.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[r.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, i), s[n] = i);
    }

    function v() {
      for (var e = l.newAttributes, n = l.enabledAttributes, r = 0, i = n.length; r < i; r++) {
        n[r] !== e[r] && (t.disableVertexAttribArray(r), n[r] = 0);
      }
    }

    function g(e, n, i, a, o, s) {
      !0 !== r.isWebGL2 || 5124 !== i && 5125 !== i ? t.vertexAttribPointer(e, n, i, a, o, s) : t.vertexAttribIPointer(e, n, i, o, s);
    }

    function y() {
      x(), l !== c && u((l = c).object);
    }

    function x() {
      c.geometry = null, c.program = null, c.wireframe = !1;
    }

    return {
      setup: function setup(i, c, h, y, x) {
        var _ = !1;

        if (o) {
          var b = function (e, n, i) {
            var o = !0 === i.wireframe,
                c = s[e.id];
            void 0 === c && (c = {}, s[e.id] = c);
            var l = c[n.id];
            void 0 === l && (l = {}, c[n.id] = l);
            var u = l[o];
            void 0 === u && (u = d(r.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()), l[o] = u);
            return u;
          }(y, h, c);

          l !== b && u((l = b).object), (_ = function (t, e) {
            var n = l.attributes,
                r = t.attributes,
                i = 0;

            for (var a in r) {
              var o = n[a],
                  s = r[a];
              if (void 0 === o) return !0;
              if (o.attribute !== s) return !0;
              if (o.data !== s.data) return !0;
              i++;
            }

            return l.attributesNum !== i || l.index !== e;
          }(y, x)) && function (t, e) {
            var n = {},
                r = t.attributes,
                i = 0;

            for (var a in r) {
              var o = r[a],
                  s = {};
              s.attribute = o, o.data && (s.data = o.data), n[a] = s, i++;
            }

            l.attributes = n, l.attributesNum = i, l.index = e;
          }(y, x);
        } else {
          var w = !0 === c.wireframe;
          l.geometry === y.id && l.program === h.id && l.wireframe === w || (l.geometry = y.id, l.program = h.id, l.wireframe = w, _ = !0);
        }

        !0 === i.isInstancedMesh && (_ = !0), null !== x && n.update(x, 34963), _ && (!function (i, a, o, s) {
          if (!1 === r.isWebGL2 && (i.isInstancedMesh || s.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
          p();
          var c = s.attributes,
              l = o.getAttributes(),
              u = a.defaultAttributeValues;

          for (var h in l) {
            var d = l[h];

            if (d >= 0) {
              var y = c[h];

              if (void 0 !== y) {
                var x = y.normalized,
                    _ = y.itemSize,
                    b = n.get(y);
                if (void 0 === b) continue;
                var w = b.buffer,
                    M = b.type,
                    S = b.bytesPerElement;

                if (y.isInterleavedBufferAttribute) {
                  var T = y.data,
                      E = T.stride,
                      A = y.offset;
                  T && T.isInstancedInterleavedBuffer ? (m(d, T.meshPerAttribute), void 0 === s._maxInstanceCount && (s._maxInstanceCount = T.meshPerAttribute * T.count)) : f(d), t.bindBuffer(34962, w), g(d, _, M, x, E * S, A * S);
                } else y.isInstancedBufferAttribute ? (m(d, y.meshPerAttribute), void 0 === s._maxInstanceCount && (s._maxInstanceCount = y.meshPerAttribute * y.count)) : f(d), t.bindBuffer(34962, w), g(d, _, M, x, 0, 0);
              } else if ("instanceMatrix" === h) {
                var L = n.get(i.instanceMatrix);
                if (void 0 === L) continue;
                var R = L.buffer,
                    C = L.type;
                m(d + 0, 1), m(d + 1, 1), m(d + 2, 1), m(d + 3, 1), t.bindBuffer(34962, R), t.vertexAttribPointer(d + 0, 4, C, !1, 64, 0), t.vertexAttribPointer(d + 1, 4, C, !1, 64, 16), t.vertexAttribPointer(d + 2, 4, C, !1, 64, 32), t.vertexAttribPointer(d + 3, 4, C, !1, 64, 48);
              } else if ("instanceColor" === h) {
                var P = n.get(i.instanceColor);
                if (void 0 === P) continue;
                var I = P.buffer,
                    N = P.type;
                m(d, 1), t.bindBuffer(34962, I), t.vertexAttribPointer(d, 3, N, !1, 12, 0);
              } else if (void 0 !== u) {
                var D = u[h];
                if (void 0 !== D) switch (D.length) {
                  case 2:
                    t.vertexAttrib2fv(d, D);
                    break;

                  case 3:
                    t.vertexAttrib3fv(d, D);
                    break;

                  case 4:
                    t.vertexAttrib4fv(d, D);
                    break;

                  default:
                    t.vertexAttrib1fv(d, D);
                }
              }
            }
          }

          v();
        }(i, c, h, y), null !== x && t.bindBuffer(34963, n.get(x).buffer));
      },
      reset: y,
      resetDefaultState: x,
      dispose: function dispose() {
        for (var t in y(), s) {
          var e = s[t];

          for (var n in e) {
            var r = e[n];

            for (var i in r) {
              h(r[i].object), delete r[i];
            }

            delete e[n];
          }

          delete s[t];
        }
      },
      releaseStatesOfGeometry: function releaseStatesOfGeometry(t) {
        if (void 0 !== s[t.id]) {
          var e = s[t.id];

          for (var n in e) {
            var r = e[n];

            for (var i in r) {
              h(r[i].object), delete r[i];
            }

            delete e[n];
          }

          delete s[t.id];
        }
      },
      releaseStatesOfProgram: function releaseStatesOfProgram(t) {
        for (var e in s) {
          var n = s[e];

          if (void 0 !== n[t.id]) {
            var r = n[t.id];

            for (var i in r) {
              h(r[i].object), delete r[i];
            }

            delete n[t.id];
          }
        }
      },
      initAttributes: p,
      enableAttribute: f,
      disableUnusedAttributes: v
    };
  }

  function ur(t, e, n, r) {
    var i,
        a = r.isWebGL2;
    this.setMode = function (t) {
      i = t;
    }, this.render = function (e, r) {
      t.drawArrays(i, e, r), n.update(r, i, 1);
    }, this.renderInstances = function (r, o, s) {
      if (0 !== s) {
        var c, l;
        if (a) c = t, l = "drawArraysInstanced";else if (l = "drawArraysInstancedANGLE", null === (c = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        c[l](i, r, o, s), n.update(o, i, s);
      }
    };
  }

  function hr(t, e, n) {
    var r;

    function i(e) {
      if ("highp" === e) {
        if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
        e = "mediump";
      }

      return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }

    var a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext,
        o = void 0 !== n.precision ? n.precision : "highp",
        s = i(o);
    s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
    var c = !0 === n.logarithmicDepthBuffer,
        l = t.getParameter(34930),
        u = t.getParameter(35660),
        h = t.getParameter(3379),
        d = t.getParameter(34076),
        p = t.getParameter(34921),
        f = t.getParameter(36347),
        m = t.getParameter(36348),
        v = t.getParameter(36349),
        g = u > 0,
        y = a || !!e.get("OES_texture_float");
    return {
      isWebGL2: a,
      getMaxAnisotropy: function getMaxAnisotropy() {
        if (void 0 !== r) return r;
        var n = e.get("EXT_texture_filter_anisotropic");
        return r = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
      },
      getMaxPrecision: i,
      precision: o,
      logarithmicDepthBuffer: c,
      maxTextures: l,
      maxVertexTextures: u,
      maxTextureSize: h,
      maxCubemapSize: d,
      maxAttributes: p,
      maxVertexUniforms: f,
      maxVaryings: m,
      maxFragmentUniforms: v,
      vertexTextures: g,
      floatFragmentTextures: y,
      floatVertexTextures: g && y,
      maxSamples: a ? t.getParameter(36183) : 0
    };
  }

  function dr(t) {
    var e = this,
        n = null,
        r = 0,
        i = !1,
        a = !1,
        o = new Ee(),
        s = new ft(),
        c = {
      value: null,
      needsUpdate: !1
    };

    function l() {
      c.value !== n && (c.value = n, c.needsUpdate = r > 0), e.numPlanes = r, e.numIntersection = 0;
    }

    function u(t, n, r, i) {
      var a = null !== t ? t.length : 0,
          l = null;

      if (0 !== a) {
        if (l = c.value, !0 !== i || null === l) {
          var u = r + 4 * a,
              h = n.matrixWorldInverse;
          s.getNormalMatrix(h), (null === l || l.length < u) && (l = new Float32Array(u));

          for (var d = 0, p = r; d !== a; ++d, p += 4) {
            o.copy(t[d]).applyMatrix4(h, s), o.normal.toArray(l, p), l[p + 3] = o.constant;
          }
        }

        c.value = l, c.needsUpdate = !0;
      }

      return e.numPlanes = a, e.numIntersection = 0, l;
    }

    this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, e, a) {
      var o = 0 !== t.length || e || 0 !== r || i;
      return i = e, n = u(t, a, 0), r = t.length, o;
    }, this.beginShadows = function () {
      a = !0, u(null);
    }, this.endShadows = function () {
      a = !1, l();
    }, this.setState = function (e, o, s) {
      var h = e.clippingPlanes,
          d = e.clipIntersection,
          p = e.clipShadows,
          f = t.get(e);
      if (!i || null === h || 0 === h.length || a && !p) a ? u(null) : l();else {
        var m = a ? 0 : r,
            v = 4 * m,
            g = f.clippingState || null;
        c.value = g, g = u(h, o, v, s);

        for (var y = 0; y !== v; ++y) {
          g[y] = n[y];
        }

        f.clippingState = g, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += m;
      }
    };
  }

  function pr(t) {
    var e = new WeakMap();

    function n(t, e) {
      return e === a ? t.mapping = r : e === o && (t.mapping = i), t;
    }

    function s(t) {
      var n = t.target;
      n.removeEventListener("dispose", s);
      var r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }

    return {
      get: function get(r) {
        if (r && r.isTexture) {
          var i = r.mapping;

          if (i === a || i === o) {
            if (e.has(r)) return n(e.get(r).texture, r.mapping);
            var c = r.image;

            if (c && c.height > 0) {
              var l = t.getRenderList(),
                  u = t.getRenderTarget(),
                  h = t.getRenderState(),
                  d = new Qn(c.height / 2);
              return d.fromEquirectangularTexture(t, r), e.set(r, d), t.setRenderTarget(u), t.setRenderList(l), t.setRenderState(h), r.addEventListener("dispose", s), n(d.texture, r.mapping);
            }

            return null;
          }
        }

        return r;
      },
      dispose: function dispose() {
        e = new WeakMap();
      }
    };
  }

  function fr(t) {
    var e = {};
    return {
      has: function has(n) {
        if (void 0 !== e[n]) return null !== e[n];
        var r;

        switch (n) {
          case "WEBGL_depth_texture":
            r = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
            break;

          case "EXT_texture_filter_anisotropic":
            r = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;

          case "WEBGL_compressed_texture_s3tc":
            r = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;

          case "WEBGL_compressed_texture_pvrtc":
            r = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;

          default:
            r = t.getExtension(n);
        }

        return e[n] = r, null !== r;
      },
      get: function get(t) {
        return this.has(t) || console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e[t];
      }
    };
  }

  function mr(t, e, n, r) {
    var i = new WeakMap(),
        a = new WeakMap();

    function o(t) {
      var s = t.target,
          c = i.get(s);

      for (var l in null !== c.index && e.remove(c.index), c.attributes) {
        e.remove(c.attributes[l]);
      }

      s.removeEventListener("dispose", o), i.delete(s);
      var u = a.get(c);
      u && (e.remove(u), a.delete(c)), r.releaseStatesOfGeometry(c), !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount, n.memory.geometries--;
    }

    function s(t) {
      var n = [],
          r = t.index,
          i = t.attributes.position,
          o = 0;

      if (null !== r) {
        var s = r.array;
        o = r.version;

        for (var c = 0, l = s.length; c < l; c += 3) {
          var u = s[c + 0],
              h = s[c + 1],
              d = s[c + 2];
          n.push(u, h, h, d, d, u);
        }
      } else {
        var p = i.array;
        o = i.version;

        for (var f = 0, m = p.length / 3 - 1; f < m; f += 3) {
          var v = f + 0,
              g = f + 1,
              y = f + 2;
          n.push(v, g, g, y, y, v);
        }
      }

      var x = new (un(n) > 65535 ? an : nn)(n, 1);
      x.version = o;

      var _ = a.get(t);

      _ && e.remove(_), a.set(t, x);
    }

    return {
      get: function get(t, e) {
        var r = i.get(e);
        return r || (e.addEventListener("dispose", o), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = new _n().setFromObject(t)), r = e._bufferGeometry), i.set(e, r), n.memory.geometries++, r);
      },
      update: function update(t) {
        var n = t.attributes;

        for (var r in n) {
          e.update(n[r], 34962);
        }

        var i = t.morphAttributes;

        for (var a in i) {
          for (var o = i[a], s = 0, c = o.length; s < c; s++) {
            e.update(o[s], 34962);
          }
        }
      },
      getWireframeAttribute: function getWireframeAttribute(t) {
        var e = a.get(t);

        if (e) {
          var n = t.index;
          null !== n && e.version < n.version && s(t);
        } else s(t);

        return a.get(t);
      }
    };
  }

  function vr(t, e, n, r) {
    var i,
        a,
        o,
        s = r.isWebGL2;
    this.setMode = function (t) {
      i = t;
    }, this.setIndex = function (t) {
      a = t.type, o = t.bytesPerElement;
    }, this.render = function (e, r) {
      t.drawElements(i, r, a, e * o), n.update(r, i, 1);
    }, this.renderInstances = function (r, c, l) {
      if (0 !== l) {
        var u, h;
        if (s) u = t, h = "drawElementsInstanced";else if (h = "drawElementsInstancedANGLE", null === (u = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        u[h](i, c, a, r * o, l), n.update(c, i, l);
      }
    };
  }

  function gr(t) {
    var e = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function reset() {
        e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
      },
      update: function update(t, n, r) {
        switch (e.calls++, n) {
          case 4:
            e.triangles += r * (t / 3);
            break;

          case 1:
            e.lines += r * (t / 2);
            break;

          case 3:
            e.lines += r * (t - 1);
            break;

          case 2:
            e.lines += r * t;
            break;

          case 0:
            e.points += r * t;
            break;

          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        }
      }
    };
  }

  function yr(t, e) {
    return t[0] - e[0];
  }

  function xr(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1]);
  }

  function _r(t) {
    for (var e = {}, n = new Float32Array(8), r = [], i = 0; i < 8; i++) {
      r[i] = [i, 0];
    }

    return {
      update: function update(i, a, o, s) {
        var c = i.morphTargetInfluences,
            l = void 0 === c ? 0 : c.length,
            u = e[a.id];

        if (void 0 === u) {
          u = [];

          for (var h = 0; h < l; h++) {
            u[h] = [h, 0];
          }

          e[a.id] = u;
        }

        for (var d = 0; d < l; d++) {
          var p = u[d];
          p[0] = d, p[1] = c[d];
        }

        u.sort(xr);

        for (var f = 0; f < 8; f++) {
          f < l && u[f][1] ? (r[f][0] = u[f][0], r[f][1] = u[f][1]) : (r[f][0] = Number.MAX_SAFE_INTEGER, r[f][1] = 0);
        }

        r.sort(yr);

        for (var m = o.morphTargets && a.morphAttributes.position, v = o.morphNormals && a.morphAttributes.normal, g = 0, y = 0; y < 8; y++) {
          var x = r[y],
              _ = x[0],
              b = x[1];
          _ !== Number.MAX_SAFE_INTEGER && b ? (m && a.getAttribute("morphTarget" + y) !== m[_] && a.setAttribute("morphTarget" + y, m[_]), v && a.getAttribute("morphNormal" + y) !== v[_] && a.setAttribute("morphNormal" + y, v[_]), n[y] = b, g += b) : (m && !0 === a.hasAttribute("morphTarget" + y) && a.deleteAttribute("morphTarget" + y), v && !0 === a.hasAttribute("morphNormal" + y) && a.deleteAttribute("morphNormal" + y), n[y] = 0);
        }

        var w = a.morphTargetsRelative ? 1 : 1 - g;
        s.getUniforms().setValue(t, "morphTargetBaseInfluence", w), s.getUniforms().setValue(t, "morphTargetInfluences", n);
      }
    };
  }

  function br(t, e, n, r) {
    var i = new WeakMap();
    return {
      update: function update(t) {
        var a = r.render.frame,
            o = t.geometry,
            s = e.get(t, o);
        return i.get(s) !== a && (o.isGeometry && s.updateFromObject(t), e.update(s), i.set(s, a)), t.isInstancedMesh && (n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), s;
      },
      dispose: function dispose() {
        i = new WeakMap();
      }
    };
  }

  function wr(t, e, n, r) {
    void 0 === t && (t = null), void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === r && (r = 1), gt.call(this, null), this.image = {
      data: t,
      width: e,
      height: n,
      depth: r
    }, this.magFilter = d, this.minFilter = d, this.wrapR = u, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
  }

  function Mr(t, e, n, r) {
    void 0 === t && (t = null), void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === r && (r = 1), gt.call(this, null), this.image = {
      data: t,
      width: e,
      height: n,
      depth: r
    }, this.magFilter = d, this.minFilter = d, this.wrapR = u, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
  }

  sr.physical = {
    uniforms: Vn([sr.standard.uniforms, {
      clearcoat: {
        value: 0
      },
      clearcoatMap: {
        value: null
      },
      clearcoatRoughness: {
        value: 0
      },
      clearcoatRoughnessMap: {
        value: null
      },
      clearcoatNormalScale: {
        value: new pt(1, 1)
      },
      clearcoatNormalMap: {
        value: null
      },
      sheen: {
        value: new We(0)
      },
      transmission: {
        value: 0
      },
      transmissionMap: {
        value: null
      }
    }]),
    vertexShader: ar.meshphysical_vert,
    fragmentShader: ar.meshphysical_frag
  }, wr.prototype = Object.create(gt.prototype), wr.prototype.constructor = wr, wr.prototype.isDataTexture2DArray = !0, Mr.prototype = Object.create(gt.prototype), Mr.prototype.constructor = Mr, Mr.prototype.isDataTexture3D = !0;
  var Sr = new gt(),
      Tr = new wr(),
      Er = new Mr(),
      Ar = new Jn(),
      Lr = [],
      Rr = [],
      Cr = new Float32Array(16),
      Pr = new Float32Array(9),
      Ir = new Float32Array(4);

  function Nr(t, e, n) {
    var r = t[0];
    if (r <= 0 || r > 0) return t;
    var i = e * n,
        a = Lr[i];

    if (void 0 === a && (a = new Float32Array(i), Lr[i] = a), 0 !== e) {
      r.toArray(a, 0);

      for (var o = 1, s = 0; o !== e; ++o) {
        s += n, t[o].toArray(a, s);
      }
    }

    return a;
  }

  function Dr(t, e) {
    if (t.length !== e.length) return !1;

    for (var n = 0, r = t.length; n < r; n++) {
      if (t[n] !== e[n]) return !1;
    }

    return !0;
  }

  function Or(t, e) {
    for (var n = 0, r = e.length; n < r; n++) {
      t[n] = e[n];
    }
  }

  function Br(t, e) {
    var n = Rr[e];
    void 0 === n && (n = new Int32Array(e), Rr[e] = n);

    for (var r = 0; r !== e; ++r) {
      n[r] = t.allocateTextureUnit();
    }

    return n;
  }

  function zr(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e);
  }

  function Ur(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);else {
      if (Dr(n, e)) return;
      t.uniform2fv(this.addr, e), Or(n, e);
    }
  }

  function Fr(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);else {
      if (Dr(n, e)) return;
      t.uniform3fv(this.addr, e), Or(n, e);
    }
  }

  function Gr(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);else {
      if (Dr(n, e)) return;
      t.uniform4fv(this.addr, e), Or(n, e);
    }
  }

  function Hr(t, e) {
    var n = this.cache,
        r = e.elements;

    if (void 0 === r) {
      if (Dr(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), Or(n, e);
    } else {
      if (Dr(n, r)) return;
      Ir.set(r), t.uniformMatrix2fv(this.addr, !1, Ir), Or(n, r);
    }
  }

  function kr(t, e) {
    var n = this.cache,
        r = e.elements;

    if (void 0 === r) {
      if (Dr(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), Or(n, e);
    } else {
      if (Dr(n, r)) return;
      Pr.set(r), t.uniformMatrix3fv(this.addr, !1, Pr), Or(n, r);
    }
  }

  function Vr(t, e) {
    var n = this.cache,
        r = e.elements;

    if (void 0 === r) {
      if (Dr(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), Or(n, e);
    } else {
      if (Dr(n, r)) return;
      Cr.set(r), t.uniformMatrix4fv(this.addr, !1, Cr), Or(n, r);
    }
  }

  function Wr(t, e, n) {
    var r = this.cache,
        i = n.allocateTextureUnit();
    r[0] !== i && (t.uniform1i(this.addr, i), r[0] = i), n.safeSetTexture2D(e || Sr, i);
  }

  function jr(t, e, n) {
    var r = this.cache,
        i = n.allocateTextureUnit();
    r[0] !== i && (t.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(e || Tr, i);
  }

  function qr(t, e, n) {
    var r = this.cache,
        i = n.allocateTextureUnit();
    r[0] !== i && (t.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(e || Er, i);
  }

  function Xr(t, e, n) {
    var r = this.cache,
        i = n.allocateTextureUnit();
    r[0] !== i && (t.uniform1i(this.addr, i), r[0] = i), n.safeSetTextureCube(e || Ar, i);
  }

  function Yr(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e);
  }

  function Zr(t, e) {
    var n = this.cache;
    Dr(n, e) || (t.uniform2iv(this.addr, e), Or(n, e));
  }

  function Jr(t, e) {
    var n = this.cache;
    Dr(n, e) || (t.uniform3iv(this.addr, e), Or(n, e));
  }

  function Qr(t, e) {
    var n = this.cache;
    Dr(n, e) || (t.uniform4iv(this.addr, e), Or(n, e));
  }

  function Kr(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e);
  }

  function $r(t, e) {
    t.uniform1fv(this.addr, e);
  }

  function ti(t, e) {
    t.uniform1iv(this.addr, e);
  }

  function ei(t, e) {
    t.uniform2iv(this.addr, e);
  }

  function ni(t, e) {
    t.uniform3iv(this.addr, e);
  }

  function ri(t, e) {
    t.uniform4iv(this.addr, e);
  }

  function ii(t, e) {
    var n = Nr(e, this.size, 2);
    t.uniform2fv(this.addr, n);
  }

  function ai(t, e) {
    var n = Nr(e, this.size, 3);
    t.uniform3fv(this.addr, n);
  }

  function oi(t, e) {
    var n = Nr(e, this.size, 4);
    t.uniform4fv(this.addr, n);
  }

  function si(t, e) {
    var n = Nr(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
  }

  function ci(t, e) {
    var n = Nr(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
  }

  function li(t, e) {
    var n = Nr(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
  }

  function ui(t, e, n) {
    var r = e.length,
        i = Br(n, r);
    t.uniform1iv(this.addr, i);

    for (var a = 0; a !== r; ++a) {
      n.safeSetTexture2D(e[a] || Sr, i[a]);
    }
  }

  function hi(t, e, n) {
    var r = e.length,
        i = Br(n, r);
    t.uniform1iv(this.addr, i);

    for (var a = 0; a !== r; ++a) {
      n.safeSetTextureCube(e[a] || Ar, i[a]);
    }
  }

  function di(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.setValue = function (t) {
      switch (t) {
        case 5126:
          return zr;

        case 35664:
          return Ur;

        case 35665:
          return Fr;

        case 35666:
          return Gr;

        case 35674:
          return Hr;

        case 35675:
          return kr;

        case 35676:
          return Vr;

        case 5124:
        case 35670:
          return Yr;

        case 35667:
        case 35671:
          return Zr;

        case 35668:
        case 35672:
          return Jr;

        case 35669:
        case 35673:
          return Qr;

        case 5125:
          return Kr;

        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return Wr;

        case 35679:
        case 36299:
        case 36307:
          return qr;

        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return Xr;

        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return jr;
      }
    }(e.type);
  }

  function pi(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function (t) {
      switch (t) {
        case 5126:
          return $r;

        case 35664:
          return ii;

        case 35665:
          return ai;

        case 35666:
          return oi;

        case 35674:
          return si;

        case 35675:
          return ci;

        case 35676:
          return li;

        case 5124:
        case 35670:
          return ti;

        case 35667:
        case 35671:
          return ei;

        case 35668:
        case 35672:
          return ni;

        case 35669:
        case 35673:
          return ri;

        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return ui;

        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return hi;
      }
    }(e.type);
  }

  function fi(t) {
    this.id = t, this.seq = [], this.map = {};
  }

  pi.prototype.updateCache = function (t) {
    var e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Or(e, t);
  }, fi.prototype.setValue = function (t, e, n) {
    for (var r = this.seq, i = 0, a = r.length; i !== a; ++i) {
      var o = r[i];
      o.setValue(t, e[o.id], n);
    }
  };
  var mi = /([\w\d_]+)(\])?(\[|\.)?/g;

  function vi(t, e) {
    t.seq.push(e), t.map[e.id] = e;
  }

  function gi(t, e, n) {
    var r = t.name,
        i = r.length;

    for (mi.lastIndex = 0;;) {
      var a = mi.exec(r),
          o = mi.lastIndex,
          s = a[1],
          c = "]" === a[2],
          l = a[3];

      if (c && (s |= 0), void 0 === l || "[" === l && o + 2 === i) {
        vi(n, void 0 === l ? new di(s, t, e) : new pi(s, t, e));
        break;
      }

      var u = n.map[s];
      void 0 === u && vi(n, u = new fi(s)), n = u;
    }
  }

  function yi(t, e) {
    this.seq = [], this.map = {};

    for (var n = t.getProgramParameter(e, 35718), r = 0; r < n; ++r) {
      var i = t.getActiveUniform(e, r);
      gi(i, t.getUniformLocation(e, i.name), this);
    }
  }

  function xi(t, e, n) {
    var r = t.createShader(e);
    return t.shaderSource(r, n), t.compileShader(r), r;
  }

  yi.prototype.setValue = function (t, e, n, r) {
    var i = this.map[e];
    void 0 !== i && i.setValue(t, n, r);
  }, yi.prototype.setOptional = function (t, e, n) {
    var r = e[n];
    void 0 !== r && this.setValue(t, n, r);
  }, yi.upload = function (t, e, n, r) {
    for (var i = 0, a = e.length; i !== a; ++i) {
      var o = e[i],
          s = n[o.id];
      !1 !== s.needsUpdate && o.setValue(t, s.value, r);
    }
  }, yi.seqWithValue = function (t, e) {
    for (var n = [], r = 0, i = t.length; r !== i; ++r) {
      var a = t[r];
      a.id in e && n.push(a);
    }

    return n;
  };
  var _i = 0;

  function bi(t) {
    switch (t) {
      case q:
        return ["Linear", "( value )"];

      case X:
        return ["sRGB", "( value )"];

      case Z:
        return ["RGBE", "( value )"];

      case J:
        return ["RGBM", "( value, 7.0 )"];

      case Q:
        return ["RGBM", "( value, 16.0 )"];

      case K:
        return ["RGBD", "( value, 256.0 )"];

      case Y:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];

      case 3003:
        return ["LogLuv", "( value )"];

      default:
        return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"];
    }
  }

  function wi(t, e, n) {
    var r = t.getShaderParameter(e, 35713),
        i = t.getShaderInfoLog(e).trim();
    return r && "" === i ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + i + function (t) {
      for (var e = t.split("\n"), n = 0; n < e.length; n++) {
        e[n] = n + 1 + ": " + e[n];
      }

      return e.join("\n");
    }(t.getShaderSource(e));
  }

  function Mi(t, e) {
    var n = bi(e);
    return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
  }

  function Si(t, e) {
    var n;

    switch (e) {
      case 1:
        n = "Linear";
        break;

      case 2:
        n = "Reinhard";
        break;

      case 3:
        n = "OptimizedCineon";
        break;

      case 4:
        n = "ACESFilmic";
        break;

      case 5:
        n = "Custom";
        break;

      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
    }

    return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
  }

  function Ti(t) {
    return "" !== t;
  }

  function Ei(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }

  function Ai(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }

  var Li = /^[ \t]*#include +<([\w\d./]+)>/gm;

  function Ri(t) {
    return t.replace(Li, Ci);
  }

  function Ci(t, e) {
    var n = ar[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return Ri(n);
  }

  var Pi = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
      Ii = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

  function Ni(t) {
    return t.replace(Ii, Oi).replace(Pi, Di);
  }

  function Di(t, e, n, r) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Oi(t, e, n, r);
  }

  function Oi(t, e, n, r) {
    for (var i = "", a = parseInt(e); a < parseInt(n); a++) {
      i += r.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
    }

    return i;
  }

  function Bi(t) {
    var e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
    return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e;
  }

  function zi(t, e, n, a) {
    var o,
        l,
        u,
        h,
        d,
        p = t.getContext(),
        f = n.defines,
        m = n.vertexShader,
        v = n.fragmentShader,
        g = function (t) {
      var e = "SHADOWMAP_TYPE_BASIC";
      return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e;
    }(n),
        y = function (t) {
      var e = "ENVMAP_TYPE_CUBE";
      if (t.envMap) switch (t.envMapMode) {
        case r:
        case i:
          e = "ENVMAP_TYPE_CUBE";
          break;

        case s:
        case c:
          e = "ENVMAP_TYPE_CUBE_UV";
      }
      return e;
    }(n),
        x = function (t) {
      var e = "ENVMAP_MODE_REFLECTION";
      if (t.envMap) switch (t.envMapMode) {
        case i:
        case c:
          e = "ENVMAP_MODE_REFRACTION";
      }
      return e;
    }(n),
        _ = function (t) {
      var e = "ENVMAP_BLENDING_NONE";
      if (t.envMap) switch (t.combine) {
        case 0:
          e = "ENVMAP_BLENDING_MULTIPLY";
          break;

        case 1:
          e = "ENVMAP_BLENDING_MIX";
          break;

        case 2:
          e = "ENVMAP_BLENDING_ADD";
      }
      return e;
    }(n),
        b = t.gammaFactor > 0 ? t.gammaFactor : 1,
        w = n.isWebGL2 ? "" : function (t) {
      return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ti).join("\n");
    }(n),
        M = function (t) {
      var e = [];

      for (var n in t) {
        var r = t[n];
        !1 !== r && e.push("#define " + n + " " + r);
      }

      return e.join("\n");
    }(f),
        S = p.createProgram(),
        T = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";

    n.isRawShaderMaterial ? ((o = [M].filter(Ti).join("\n")).length > 0 && (o += "\n"), (l = [w, M].filter(Ti).join("\n")).length > 0 && (l += "\n")) : (o = [Bi(n), "#define SHADER_NAME " + n.shaderName, M, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + b, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + x : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + g : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Ti).join("\n"), l = [w, Bi(n), "#define SHADER_NAME " + n.shaderName, M, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + b, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + y : "", n.envMap ? "#define " + x : "", n.envMap ? "#define " + _ : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + g : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? ar.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Si("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", ar.encodings_pars_fragment, n.map ? Mi("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? Mi("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? Mi("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? Mi("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? Mi("lightMapTexelToLinear", n.lightMapEncoding) : "", (u = "linearToOutputTexel", h = n.outputEncoding, d = bi(h), "vec4 " + u + "( vec4 value ) { return LinearTo" + d[0] + d[1] + "; }"), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Ti).join("\n")), m = Ai(m = Ei(m = Ri(m), n), n), v = Ai(v = Ei(v = Ri(v), n), n), m = Ni(m), v = Ni(v), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (T = "#version 300 es\n", o = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + o, l = ["#define varying in", n.glslVersion === nt ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === nt ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + l);
    var E,
        A,
        L = T + l + v,
        R = xi(p, 35633, T + o + m),
        C = xi(p, 35632, L);

    if (p.attachShader(S, R), p.attachShader(S, C), void 0 !== n.index0AttributeName ? p.bindAttribLocation(S, 0, n.index0AttributeName) : !0 === n.morphTargets && p.bindAttribLocation(S, 0, "position"), p.linkProgram(S), t.debug.checkShaderErrors) {
      var P = p.getProgramInfoLog(S).trim(),
          I = p.getShaderInfoLog(R).trim(),
          N = p.getShaderInfoLog(C).trim(),
          D = !0,
          O = !0;

      if (!1 === p.getProgramParameter(S, 35714)) {
        D = !1;
        var B = wi(p, R, "vertex"),
            z = wi(p, C, "fragment");
        console.error("THREE.WebGLProgram: shader error: ", p.getError(), "35715", p.getProgramParameter(S, 35715), "gl.getProgramInfoLog", P, B, z);
      } else "" !== P ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", P) : "" !== I && "" !== N || (O = !1);

      O && (this.diagnostics = {
        runnable: D,
        programLog: P,
        vertexShader: {
          log: I,
          prefix: o
        },
        fragmentShader: {
          log: N,
          prefix: l
        }
      });
    }

    return p.deleteShader(R), p.deleteShader(C), this.getUniforms = function () {
      return void 0 === E && (E = new yi(p, S)), E;
    }, this.getAttributes = function () {
      return void 0 === A && (A = function (t, e) {
        for (var n = {}, r = t.getProgramParameter(e, 35721), i = 0; i < r; i++) {
          var a = t.getActiveAttrib(e, i).name;
          n[a] = t.getAttribLocation(e, a);
        }

        return n;
      }(p, S)), A;
    }, this.destroy = function () {
      a.releaseStatesOfProgram(this), p.deleteProgram(S), this.program = void 0;
    }, this.name = n.shaderName, this.id = _i++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = R, this.fragmentShader = C, this;
  }

  function Ui(t, e, n, r, i, a) {
    var o = [],
        l = r.isWebGL2,
        u = r.logarithmicDepthBuffer,
        h = r.floatVertexTextures,
        d = r.maxVertexUniforms,
        p = r.vertexTextures,
        f = r.precision,
        m = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    },
        v = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];

    function g(t) {
      var e;
      return t ? t.isTexture ? e = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = q, e;
    }

    return {
      getParameters: function getParameters(i, o, v, y, x) {
        var _,
            b,
            w = y.fog,
            M = i.isMeshStandardMaterial ? y.environment : null,
            S = e.get(i.envMap || M),
            T = m[i.type],
            E = x.isSkinnedMesh ? function (t) {
          var e = t.skeleton.bones;
          if (h) return 1024;
          var n = d,
              r = Math.floor((n - 20) / 4),
              i = Math.min(r, e.length);
          return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."), 0) : i;
        }(x) : 0;

        if (null !== i.precision && (f = r.getMaxPrecision(i.precision)) !== i.precision && console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", f, "instead."), T) {
          var A = sr[T];
          _ = A.vertexShader, b = A.fragmentShader;
        } else _ = i.vertexShader, b = i.fragmentShader;

        var L = t.getRenderTarget();
        return {
          isWebGL2: l,
          shaderID: T,
          shaderName: i.type,
          vertexShader: _,
          fragmentShader: b,
          defines: i.defines,
          isRawShaderMaterial: !0 === i.isRawShaderMaterial,
          glslVersion: i.glslVersion,
          precision: f,
          instancing: !0 === x.isInstancedMesh,
          instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
          supportsVertexTextures: p,
          outputEncoding: null !== L ? g(L.texture) : t.outputEncoding,
          map: !!i.map,
          mapEncoding: g(i.map),
          matcap: !!i.matcap,
          matcapEncoding: g(i.matcap),
          envMap: !!S,
          envMapMode: S && S.mapping,
          envMapEncoding: g(S),
          envMapCubeUV: !!S && (S.mapping === s || S.mapping === c),
          lightMap: !!i.lightMap,
          lightMapEncoding: g(i.lightMap),
          aoMap: !!i.aoMap,
          emissiveMap: !!i.emissiveMap,
          emissiveMapEncoding: g(i.emissiveMap),
          bumpMap: !!i.bumpMap,
          normalMap: !!i.normalMap,
          objectSpaceNormalMap: 1 === i.normalMapType,
          tangentSpaceNormalMap: 0 === i.normalMapType,
          clearcoatMap: !!i.clearcoatMap,
          clearcoatRoughnessMap: !!i.clearcoatRoughnessMap,
          clearcoatNormalMap: !!i.clearcoatNormalMap,
          displacementMap: !!i.displacementMap,
          roughnessMap: !!i.roughnessMap,
          metalnessMap: !!i.metalnessMap,
          specularMap: !!i.specularMap,
          alphaMap: !!i.alphaMap,
          gradientMap: !!i.gradientMap,
          sheen: !!i.sheen,
          transmissionMap: !!i.transmissionMap,
          combine: i.combine,
          vertexTangents: i.normalMap && i.vertexTangents,
          vertexColors: i.vertexColors,
          vertexUvs: !!(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatMap || i.clearcoatRoughnessMap || i.clearcoatNormalMap || i.displacementMap || i.transmissionMap),
          uvsVertexOnly: !(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatNormalMap || i.transmissionMap || !i.displacementMap),
          fog: !!w,
          useFog: i.fog,
          fogExp2: w && w.isFogExp2,
          flatShading: i.flatShading,
          sizeAttenuation: i.sizeAttenuation,
          logarithmicDepthBuffer: u,
          skinning: i.skinning && E > 0,
          maxBones: E,
          useVertexTexture: h,
          morphTargets: i.morphTargets,
          morphNormals: i.morphNormals,
          maxMorphTargets: t.maxMorphTargets,
          maxMorphNormals: t.maxMorphNormals,
          numDirLights: o.directional.length,
          numPointLights: o.point.length,
          numSpotLights: o.spot.length,
          numRectAreaLights: o.rectArea.length,
          numHemiLights: o.hemi.length,
          numDirLightShadows: o.directionalShadowMap.length,
          numPointLightShadows: o.pointShadowMap.length,
          numSpotLightShadows: o.spotShadowMap.length,
          numClippingPlanes: a.numPlanes,
          numClipIntersection: a.numIntersection,
          dithering: i.dithering,
          shadowMapEnabled: t.shadowMap.enabled && v.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: i.toneMapped ? t.toneMapping : 0,
          physicallyCorrectLights: t.physicallyCorrectLights,
          premultipliedAlpha: i.premultipliedAlpha,
          alphaTest: i.alphaTest,
          doubleSided: 2 === i.side,
          flipSided: 1 === i.side,
          depthPacking: void 0 !== i.depthPacking && i.depthPacking,
          index0AttributeName: i.index0AttributeName,
          extensionDerivatives: i.extensions && i.extensions.derivatives,
          extensionFragDepth: i.extensions && i.extensions.fragDepth,
          extensionDrawBuffers: i.extensions && i.extensions.drawBuffers,
          extensionShaderTextureLOD: i.extensions && i.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: l || n.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: l || n.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod: l || n.has("EXT_shader_texture_lod"),
          customProgramCacheKey: i.customProgramCacheKey()
        };
      },
      getProgramCacheKey: function getProgramCacheKey(e) {
        var n = [];
        if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines) for (var r in e.defines) {
          n.push(r), n.push(e.defines[r]);
        }

        if (!1 === e.isRawShaderMaterial) {
          for (var i = 0; i < v.length; i++) {
            n.push(e[v[i]]);
          }

          n.push(t.outputEncoding), n.push(t.gammaFactor);
        }

        return n.push(e.customProgramCacheKey), n.join();
      },
      getUniforms: function getUniforms(t) {
        var e,
            n = m[t.type];

        if (n) {
          var r = sr[n];
          e = Wn.clone(r.uniforms);
        } else e = t.uniforms;

        return e;
      },
      acquireProgram: function acquireProgram(e, n) {
        for (var r, a = 0, s = o.length; a < s; a++) {
          var c = o[a];

          if (c.cacheKey === n) {
            ++(r = c).usedTimes;
            break;
          }
        }

        return void 0 === r && (r = new zi(t, n, e, i), o.push(r)), r;
      },
      releaseProgram: function releaseProgram(t) {
        if (0 == --t.usedTimes) {
          var e = o.indexOf(t);
          o[e] = o[o.length - 1], o.pop(), t.destroy();
        }
      },
      programs: o
    };
  }

  function Fi() {
    var t = new WeakMap();
    return {
      get: function get(e) {
        var n = t.get(e);
        return void 0 === n && (n = {}, t.set(e, n)), n;
      },
      remove: function remove(e) {
        t.delete(e);
      },
      update: function update(e, n, r) {
        t.get(e)[n] = r;
      },
      dispose: function dispose() {
        t = new WeakMap();
      }
    };
  }

  function Gi(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id;
  }

  function Hi(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
  }

  function ki(t) {
    var e = [],
        n = 0,
        r = [],
        i = [],
        a = {
      id: -1
    };

    function o(r, i, o, s, c, l) {
      var u = e[n],
          h = t.get(o);
      return void 0 === u ? (u = {
        id: r.id,
        object: r,
        geometry: i,
        material: o,
        program: h.program || a,
        groupOrder: s,
        renderOrder: r.renderOrder,
        z: c,
        group: l
      }, e[n] = u) : (u.id = r.id, u.object = r, u.geometry = i, u.material = o, u.program = h.program || a, u.groupOrder = s, u.renderOrder = r.renderOrder, u.z = c, u.group = l), n++, u;
    }

    return {
      opaque: r,
      transparent: i,
      init: function init() {
        n = 0, r.length = 0, i.length = 0;
      },
      push: function push(t, e, n, a, s, c) {
        var l = o(t, e, n, a, s, c);
        (!0 === n.transparent ? i : r).push(l);
      },
      unshift: function unshift(t, e, n, a, s, c) {
        var l = o(t, e, n, a, s, c);
        (!0 === n.transparent ? i : r).unshift(l);
      },
      finish: function finish() {
        for (var t = n, r = e.length; t < r; t++) {
          var i = e[t];
          if (null === i.id) break;
          i.id = null, i.object = null, i.geometry = null, i.material = null, i.program = null, i.group = null;
        }
      },
      sort: function sort(t, e) {
        r.length > 1 && r.sort(t || Gi), i.length > 1 && i.sort(e || Hi);
      }
    };
  }

  function Vi(t) {
    var e = new WeakMap();
    return {
      get: function get(n, r) {
        var i,
            a = e.get(n);
        return void 0 === a ? (i = new ki(t), e.set(n, new WeakMap()), e.get(n).set(r, i)) : void 0 === (i = a.get(r)) && (i = new ki(t), a.set(r, i)), i;
      },
      dispose: function dispose() {
        e = new WeakMap();
      }
    };
  }

  function Wi() {
    var t = {};
    return {
      get: function get(e) {
        if (void 0 !== t[e.id]) return t[e.id];
        var n;

        switch (e.type) {
          case "DirectionalLight":
            n = {
              direction: new Mt(),
              color: new We()
            };
            break;

          case "SpotLight":
            n = {
              position: new Mt(),
              direction: new Mt(),
              color: new We(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;

          case "PointLight":
            n = {
              position: new Mt(),
              color: new We(),
              distance: 0,
              decay: 0
            };
            break;

          case "HemisphereLight":
            n = {
              direction: new Mt(),
              skyColor: new We(),
              groundColor: new We()
            };
            break;

          case "RectAreaLight":
            n = {
              color: new We(),
              position: new Mt(),
              halfWidth: new Mt(),
              halfHeight: new Mt()
            };
        }

        return t[e.id] = n, n;
      }
    };
  }

  var ji = 0;

  function qi(t, e) {
    return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
  }

  function Xi(t, e) {
    for (var n, r = new Wi(), i = (n = {}, {
      get: function get(t) {
        if (void 0 !== n[t.id]) return n[t.id];
        var e;

        switch (t.type) {
          case "DirectionalLight":
          case "SpotLight":
            e = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new pt()
            };
            break;

          case "PointLight":
            e = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new pt(),
              shadowCameraNear: 1,
              shadowCameraFar: 1e3
            };
        }

        return n[t.id] = e, e;
      }
    }), a = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: []
    }, o = 0; o < 9; o++) {
      a.probe.push(new Mt());
    }

    var s = new Mt(),
        c = new Qt(),
        l = new Qt();
    return {
      setup: function setup(n, o, u) {
        for (var h = 0, d = 0, p = 0, f = 0; f < 9; f++) {
          a.probe[f].set(0, 0, 0);
        }

        var m = 0,
            v = 0,
            g = 0,
            y = 0,
            x = 0,
            _ = 0,
            b = 0,
            w = 0,
            M = u.matrixWorldInverse;
        n.sort(qi);

        for (var S = 0, T = n.length; S < T; S++) {
          var E = n[S],
              A = E.color,
              L = E.intensity,
              R = E.distance,
              C = E.shadow && E.shadow.map ? E.shadow.map.texture : null;
          if (E.isAmbientLight) h += A.r * L, d += A.g * L, p += A.b * L;else if (E.isLightProbe) for (var P = 0; P < 9; P++) {
            a.probe[P].addScaledVector(E.sh.coefficients[P], L);
          } else if (E.isDirectionalLight) {
            var I = r.get(E);

            if (I.color.copy(E.color).multiplyScalar(E.intensity), I.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), I.direction.sub(s), I.direction.transformDirection(M), E.castShadow) {
              var N = E.shadow,
                  D = i.get(E);
              D.shadowBias = N.bias, D.shadowNormalBias = N.normalBias, D.shadowRadius = N.radius, D.shadowMapSize = N.mapSize, a.directionalShadow[m] = D, a.directionalShadowMap[m] = C, a.directionalShadowMatrix[m] = E.shadow.matrix, _++;
            }

            a.directional[m] = I, m++;
          } else if (E.isSpotLight) {
            var O = r.get(E);

            if (O.position.setFromMatrixPosition(E.matrixWorld), O.position.applyMatrix4(M), O.color.copy(A).multiplyScalar(L), O.distance = R, O.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), O.direction.sub(s), O.direction.transformDirection(M), O.coneCos = Math.cos(E.angle), O.penumbraCos = Math.cos(E.angle * (1 - E.penumbra)), O.decay = E.decay, E.castShadow) {
              var B = E.shadow,
                  z = i.get(E);
              z.shadowBias = B.bias, z.shadowNormalBias = B.normalBias, z.shadowRadius = B.radius, z.shadowMapSize = B.mapSize, a.spotShadow[g] = z, a.spotShadowMap[g] = C, a.spotShadowMatrix[g] = E.shadow.matrix, w++;
            }

            a.spot[g] = O, g++;
          } else if (E.isRectAreaLight) {
            var U = r.get(E);
            U.color.copy(A).multiplyScalar(L), U.position.setFromMatrixPosition(E.matrixWorld), U.position.applyMatrix4(M), l.identity(), c.copy(E.matrixWorld), c.premultiply(M), l.extractRotation(c), U.halfWidth.set(.5 * E.width, 0, 0), U.halfHeight.set(0, .5 * E.height, 0), U.halfWidth.applyMatrix4(l), U.halfHeight.applyMatrix4(l), a.rectArea[y] = U, y++;
          } else if (E.isPointLight) {
            var F = r.get(E);

            if (F.position.setFromMatrixPosition(E.matrixWorld), F.position.applyMatrix4(M), F.color.copy(E.color).multiplyScalar(E.intensity), F.distance = E.distance, F.decay = E.decay, E.castShadow) {
              var G = E.shadow,
                  H = i.get(E);
              H.shadowBias = G.bias, H.shadowNormalBias = G.normalBias, H.shadowRadius = G.radius, H.shadowMapSize = G.mapSize, H.shadowCameraNear = G.camera.near, H.shadowCameraFar = G.camera.far, a.pointShadow[v] = H, a.pointShadowMap[v] = C, a.pointShadowMatrix[v] = E.shadow.matrix, b++;
            }

            a.point[v] = F, v++;
          } else if (E.isHemisphereLight) {
            var k = r.get(E);
            k.direction.setFromMatrixPosition(E.matrixWorld), k.direction.transformDirection(M), k.direction.normalize(), k.skyColor.copy(E.color).multiplyScalar(L), k.groundColor.copy(E.groundColor).multiplyScalar(L), a.hemi[x] = k, x++;
          }
        }

        y > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (a.rectAreaLTC1 = or.LTC_FLOAT_1, a.rectAreaLTC2 = or.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (a.rectAreaLTC1 = or.LTC_HALF_1, a.rectAreaLTC2 = or.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), a.ambient[0] = h, a.ambient[1] = d, a.ambient[2] = p;
        var V = a.hash;
        V.directionalLength === m && V.pointLength === v && V.spotLength === g && V.rectAreaLength === y && V.hemiLength === x && V.numDirectionalShadows === _ && V.numPointShadows === b && V.numSpotShadows === w || (a.directional.length = m, a.spot.length = g, a.rectArea.length = y, a.point.length = v, a.hemi.length = x, a.directionalShadow.length = _, a.directionalShadowMap.length = _, a.pointShadow.length = b, a.pointShadowMap.length = b, a.spotShadow.length = w, a.spotShadowMap.length = w, a.directionalShadowMatrix.length = _, a.pointShadowMatrix.length = b, a.spotShadowMatrix.length = w, V.directionalLength = m, V.pointLength = v, V.spotLength = g, V.rectAreaLength = y, V.hemiLength = x, V.numDirectionalShadows = _, V.numPointShadows = b, V.numSpotShadows = w, a.version = ji++);
      },
      state: a
    };
  }

  function Yi(t, e) {
    var n = new Xi(t, e),
        r = [],
        i = [];
    return {
      init: function init() {
        r.length = 0, i.length = 0;
      },
      state: {
        lightsArray: r,
        shadowsArray: i,
        lights: n
      },
      setupLights: function setupLights(t) {
        n.setup(r, i, t);
      },
      pushLight: function pushLight(t) {
        r.push(t);
      },
      pushShadow: function pushShadow(t) {
        i.push(t);
      }
    };
  }

  function Zi(t, e) {
    var n = new WeakMap();
    return {
      get: function get(r, i) {
        var a;
        return !1 === n.has(r) ? (a = new Yi(t, e), n.set(r, new WeakMap()), n.get(r).set(i, a)) : !1 === n.get(r).has(i) ? (a = new Yi(t, e), n.get(r).set(i, a)) : a = n.get(r).get(i), a;
      },
      dispose: function dispose() {
        n = new WeakMap();
      }
    };
  }

  function Ji(t) {
    Xe.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t);
  }

  function Qi(t) {
    Xe.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new Mt(), this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t);
  }

  Ji.prototype = Object.create(Xe.prototype), Ji.prototype.constructor = Ji, Ji.prototype.isMeshDepthMaterial = !0, Ji.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }, Qi.prototype = Object.create(Xe.prototype), Qi.prototype.constructor = Qi, Qi.prototype.isMeshDistanceMaterial = !0, Qi.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  };

  function Ki(t, e, n) {
    var r = new er(),
        i = new pt(),
        a = new pt(),
        o = new xt(),
        s = [],
        c = [],
        l = {},
        u = {
      0: 1,
      1: 0,
      2: 2
    },
        h = new jn({
      defines: {
        SAMPLE_RATE: 2 / 8,
        HALF_SAMPLE_RATE: 1 / 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new pt()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
      fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
    }),
        p = h.clone();
    p.defines.HORIZONAL_PASS = 1;
    var f = new _n();
    f.setAttribute("position", new Qe(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    var v = new Un(f, h),
        g = this;

    function y(n, r) {
      var i = e.update(v);
      h.uniforms.shadow_pass.value = n.map.texture, h.uniforms.resolution.value = n.mapSize, h.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(r, null, i, h, v, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(r, null, i, p, v, null);
    }

    function x(t, e, n) {
      var r = t << 0 | e << 1 | n << 2,
          i = s[r];
      return void 0 === i && (i = new Ji({
        depthPacking: 3201,
        morphTargets: t,
        skinning: e
      }), s[r] = i), i;
    }

    function _(t, e, n) {
      var r = t << 0 | e << 1 | n << 2,
          i = c[r];
      return void 0 === i && (i = new Qi({
        morphTargets: t,
        skinning: e
      }), c[r] = i), i;
    }

    function b(e, n, r, i, a, o, s) {
      var c = null,
          h = x,
          d = e.customDepthMaterial;

      if (!0 === i.isPointLight && (h = _, d = e.customDistanceMaterial), void 0 === d) {
        var p = !1;
        !0 === r.morphTargets && (p = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);
        var f = !1;
        !0 === e.isSkinnedMesh && (!0 === r.skinning ? f = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e)), c = h(p, f, !0 === e.isInstancedMesh);
      } else c = d;

      if (t.localClippingEnabled && !0 === r.clipShadows && 0 !== r.clippingPlanes.length) {
        var m = c.uuid,
            v = r.uuid,
            g = l[m];
        void 0 === g && (g = {}, l[m] = g);
        var y = g[v];
        void 0 === y && (y = c.clone(), g[v] = y), c = y;
      }

      return c.visible = r.visible, c.wireframe = r.wireframe, c.side = 3 === s ? null !== r.shadowSide ? r.shadowSide : r.side : null !== r.shadowSide ? r.shadowSide : u[r.side], c.clipShadows = r.clipShadows, c.clippingPlanes = r.clippingPlanes, c.clipIntersection = r.clipIntersection, c.wireframeLinewidth = r.wireframeLinewidth, c.linewidth = r.linewidth, !0 === i.isPointLight && !0 === c.isMeshDistanceMaterial && (c.referencePosition.setFromMatrixPosition(i.matrixWorld), c.nearDistance = a, c.farDistance = o), c;
    }

    function w(n, i, a, o, s) {
      if (!1 !== n.visible) {
        if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === s) && (!n.frustumCulled || r.intersectsObject(n))) {
          n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
          var c = e.update(n),
              l = n.material;
          if (Array.isArray(l)) for (var u = c.groups, h = 0, d = u.length; h < d; h++) {
            var p = u[h],
                f = l[p.materialIndex];

            if (f && f.visible) {
              var m = b(n, c, f, o, a.near, a.far, s);
              t.renderBufferDirect(a, null, c, m, n, p);
            }
          } else if (l.visible) {
            var v = b(n, c, l, o, a.near, a.far, s);
            t.renderBufferDirect(a, null, c, v, n, null);
          }
        }

        for (var g = n.children, y = 0, x = g.length; y < x; y++) {
          w(g[y], i, a, o, s);
        }
      }
    }

    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function (e, s, c) {
      if (!1 !== g.enabled && (!1 !== g.autoUpdate || !1 !== g.needsUpdate) && 0 !== e.length) {
        var l = t.getRenderTarget(),
            u = t.getActiveCubeFace(),
            h = t.getActiveMipmapLevel(),
            p = t.state;
        p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);

        for (var f = 0, v = e.length; f < v; f++) {
          var x = e[f],
              _ = x.shadow;

          if (void 0 !== _) {
            if (!1 !== _.autoUpdate || !1 !== _.needsUpdate) {
              i.copy(_.mapSize);

              var b = _.getFrameExtents();

              if (i.multiply(b), a.copy(_.mapSize), (i.x > n || i.y > n) && (i.x > n && (a.x = Math.floor(n / b.x), i.x = a.x * b.x, _.mapSize.x = a.x), i.y > n && (a.y = Math.floor(n / b.y), i.y = a.y * b.y, _.mapSize.y = a.y)), null === _.map && !_.isPointLightShadow && 3 === this.type) {
                var M = {
                  minFilter: m,
                  magFilter: m,
                  format: T
                };
                _.map = new _t(i.x, i.y, M), _.map.texture.name = x.name + ".shadowMap", _.mapPass = new _t(i.x, i.y, M), _.camera.updateProjectionMatrix();
              }

              if (null === _.map) {
                var S = {
                  minFilter: d,
                  magFilter: d,
                  format: T
                };
                _.map = new _t(i.x, i.y, S), _.map.texture.name = x.name + ".shadowMap", _.camera.updateProjectionMatrix();
              }

              t.setRenderTarget(_.map), t.clear();

              for (var E = _.getViewportCount(), A = 0; A < E; A++) {
                var L = _.getViewport(A);

                o.set(a.x * L.x, a.y * L.y, a.x * L.z, a.y * L.w), p.viewport(o), _.updateMatrices(x, A), r = _.getFrustum(), w(s, c, _.camera, x, this.type);
              }

              _.isPointLightShadow || 3 !== this.type || y(_, c), _.needsUpdate = !1;
            }
          } else console.warn("THREE.WebGLShadowMap:", x, "has no shadow.");
        }

        g.needsUpdate = !1, t.setRenderTarget(l, u, h);
      }
    };
  }

  function $i(t, n, r) {
    var i,
        a,
        o = r.isWebGL2;

    var s = new function () {
      var e = !1,
          n = new xt(),
          r = null,
          i = new xt(0, 0, 0, 0);
      return {
        setMask: function setMask(n) {
          r === n || e || (t.colorMask(n, n, n, n), r = n);
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e, r, a, o, s) {
          !0 === s && (e *= o, r *= o, a *= o), n.set(e, r, a, o), !1 === i.equals(n) && (t.clearColor(e, r, a, o), i.copy(n));
        },
        reset: function reset() {
          e = !1, r = null, i.set(-1, 0, 0, 0);
        }
      };
    }(),
        c = new function () {
      var e = !1,
          n = null,
          r = null,
          i = null;
      return {
        setTest: function setTest(t) {
          t ? B(2929) : z(2929);
        },
        setMask: function setMask(r) {
          n === r || e || (t.depthMask(r), n = r);
        },
        setFunc: function setFunc(e) {
          if (r !== e) {
            if (e) switch (e) {
              case 0:
                t.depthFunc(512);
                break;

              case 1:
                t.depthFunc(519);
                break;

              case 2:
                t.depthFunc(513);
                break;

              case 3:
                t.depthFunc(515);
                break;

              case 4:
                t.depthFunc(514);
                break;

              case 5:
                t.depthFunc(518);
                break;

              case 6:
                t.depthFunc(516);
                break;

              case 7:
                t.depthFunc(517);
                break;

              default:
                t.depthFunc(515);
            } else t.depthFunc(515);
            r = e;
          }
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e) {
          i !== e && (t.clearDepth(e), i = e);
        },
        reset: function reset() {
          e = !1, n = null, r = null, i = null;
        }
      };
    }(),
        l = new function () {
      var e = !1,
          n = null,
          r = null,
          i = null,
          a = null,
          o = null,
          s = null,
          c = null,
          l = null;
      return {
        setTest: function setTest(t) {
          e || (t ? B(2960) : z(2960));
        },
        setMask: function setMask(r) {
          n === r || e || (t.stencilMask(r), n = r);
        },
        setFunc: function setFunc(e, n, o) {
          r === e && i === n && a === o || (t.stencilFunc(e, n, o), r = e, i = n, a = o);
        },
        setOp: function setOp(e, n, r) {
          o === e && s === n && c === r || (t.stencilOp(e, n, r), o = e, s = n, c = r);
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e) {
          l !== e && (t.clearStencil(e), l = e);
        },
        reset: function reset() {
          e = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
        }
      };
    }(),
        u = {},
        h = null,
        d = null,
        p = null,
        f = null,
        m = null,
        v = null,
        g = null,
        y = null,
        x = null,
        _ = !1,
        b = null,
        w = null,
        M = null,
        S = null,
        T = null,
        E = t.getParameter(35661),
        A = !1,
        L = 0,
        R = t.getParameter(7938);

    -1 !== R.indexOf("WebGL") ? (L = parseFloat(/^WebGL\ ([0-9])/.exec(R)[1]), A = L >= 1) : -1 !== R.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(R)[1]), A = L >= 2);
    var C = null,
        P = {},
        I = new xt(),
        N = new xt();

    function D(e, n, r) {
      var i = new Uint8Array(4),
          a = t.createTexture();
      t.bindTexture(e, a), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);

      for (var o = 0; o < r; o++) {
        t.texImage2D(n + o, 0, 6408, 1, 1, 0, 6408, 5121, i);
      }

      return a;
    }

    var O = {};

    function B(e) {
      !0 !== u[e] && (t.enable(e), u[e] = !0);
    }

    function z(e) {
      !1 !== u[e] && (t.disable(e), u[e] = !1);
    }

    O[3553] = D(3553, 3553, 1), O[34067] = D(34067, 34069, 6), s.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), B(2929), c.setFunc(3), k(!1), V(1), B(2884), H(0);
    var U = ((i = {})[100] = 32774, i[101] = 32778, i[102] = 32779, i);
    if (o) U[103] = 32775, U[104] = 32776;else {
      var F = n.get("EXT_blend_minmax");
      null !== F && (U[103] = F.MIN_EXT, U[104] = F.MAX_EXT);
    }
    var G = ((a = {})[200] = 0, a[201] = 1, a[202] = 768, a[204] = 770, a[210] = 776, a[208] = 774, a[206] = 772, a[203] = 769, a[205] = 771, a[209] = 775, a[207] = 773, a);

    function H(n, r, i, a, o, s, c, l) {
      if (0 !== n) {
        if (d || (B(3042), d = !0), 5 === n) o = o || r, s = s || i, c = c || a, r === f && o === g || (t.blendEquationSeparate(U[r], U[o]), f = r, g = o), i === m && a === v && s === y && c === x || (t.blendFuncSeparate(G[i], G[a], G[s], G[c]), m = i, v = a, y = s, x = c), p = n, _ = null;else if (n !== p || l !== _) {
          if (f === e && g === e || (t.blendEquation(32774), f = e, g = e), l) switch (n) {
            case 1:
              t.blendFuncSeparate(1, 771, 1, 771);
              break;

            case 2:
              t.blendFunc(1, 1);
              break;

            case 3:
              t.blendFuncSeparate(0, 0, 769, 771);
              break;

            case 4:
              t.blendFuncSeparate(0, 768, 0, 770);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", n);
          } else switch (n) {
            case 1:
              t.blendFuncSeparate(770, 771, 1, 771);
              break;

            case 2:
              t.blendFunc(770, 1);
              break;

            case 3:
              t.blendFunc(0, 769);
              break;

            case 4:
              t.blendFunc(0, 768);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", n);
          }
          m = null, v = null, y = null, x = null, p = n, _ = l;
        }
      } else d && (z(3042), d = !1);
    }

    function k(e) {
      b !== e && (e ? t.frontFace(2304) : t.frontFace(2305), b = e);
    }

    function V(e) {
      0 !== e ? (B(2884), e !== w && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : z(2884), w = e;
    }

    function W(e, n, r) {
      e ? (B(32823), S === n && T === r || (t.polygonOffset(n, r), S = n, T = r)) : z(32823);
    }

    function j(e) {
      void 0 === e && (e = 33984 + E - 1), C !== e && (t.activeTexture(e), C = e);
    }

    return {
      buffers: {
        color: s,
        depth: c,
        stencil: l
      },
      enable: B,
      disable: z,
      useProgram: function useProgram(e) {
        return h !== e && (t.useProgram(e), h = e, !0);
      },
      setBlending: H,
      setMaterial: function setMaterial(t, e) {
        2 === t.side ? z(2884) : B(2884);
        var n = 1 === t.side;
        e && (n = !n), k(n), 1 === t.blending && !1 === t.transparent ? H(0) : H(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), c.setFunc(t.depthFunc), c.setTest(t.depthTest), c.setMask(t.depthWrite), s.setMask(t.colorWrite);
        var r = t.stencilWrite;
        l.setTest(r), r && (l.setMask(t.stencilWriteMask), l.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), l.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), W(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
      },
      setFlipSided: k,
      setCullFace: V,
      setLineWidth: function setLineWidth(e) {
        e !== M && (A && t.lineWidth(e), M = e);
      },
      setPolygonOffset: W,
      setScissorTest: function setScissorTest(t) {
        t ? B(3089) : z(3089);
      },
      activeTexture: j,
      bindTexture: function bindTexture(e, n) {
        null === C && j();
        var r = P[C];
        void 0 === r && (r = {
          type: void 0,
          texture: void 0
        }, P[C] = r), r.type === e && r.texture === n || (t.bindTexture(e, n || O[e]), r.type = e, r.texture = n);
      },
      unbindTexture: function unbindTexture() {
        var e = P[C];
        void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0);
      },
      compressedTexImage2D: function compressedTexImage2D() {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage2D: function texImage2D() {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage3D: function texImage3D() {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      scissor: function scissor(e) {
        !1 === I.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), I.copy(e));
      },
      viewport: function viewport(e) {
        !1 === N.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), N.copy(e));
      },
      reset: function reset() {
        u = {}, C = null, P = {}, h = null, d = null, p = null, f = null, m = null, v = null, g = null, y = null, x = null, _ = !1, b = null, w = null, M = null, S = null, T = null, s.reset(), c.reset(), l.reset();
      }
    };
  }

  function ta(t, e, n, r, i, a, o) {
    var s,
        c,
        l,
        h = i.isWebGL2,
        v = i.maxTextures,
        g = i.maxCubemapSize,
        y = i.maxTextureSize,
        L = i.maxSamples,
        R = new WeakMap(),
        C = !1;

    try {
      C = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t) {}

    function P(t, e) {
      return C ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }

    function I(t, e, n, r) {
      var i = 1;

      if ((t.width > r || t.height > r) && (i = r / Math.max(t.width, t.height)), i < 1 || !0 === e) {
        if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
          var a = e ? st.floorPowerOfTwo : Math.floor,
              o = a(i * t.width),
              s = a(i * t.height);
          void 0 === l && (l = P(o, s));
          var c = n ? P(o, s) : l;
          return c.width = o, c.height = s, c.getContext("2d").drawImage(t, 0, 0, o, s), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + o + "x" + s + ")."), c;
        }

        return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
      }

      return t;
    }

    function N(t) {
      return st.isPowerOfTwo(t.width) && st.isPowerOfTwo(t.height);
    }

    function D(t, e) {
      return t.generateMipmaps && e && t.minFilter !== d && t.minFilter !== m;
    }

    function O(e, n, i, a) {
      t.generateMipmap(e), r.get(n).__maxMipLevel = Math.log(Math.max(i, a)) * Math.LOG2E;
    }

    function B(n, r, i) {
      if (!1 === h) return r;

      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
      }

      var a = r;
      return 6403 === r && (5126 === i && (a = 33326), 5131 === i && (a = 33325), 5121 === i && (a = 33321)), 6407 === r && (5126 === i && (a = 34837), 5131 === i && (a = 34843), 5121 === i && (a = 32849)), 6408 === r && (5126 === i && (a = 34836), 5131 === i && (a = 34842), 5121 === i && (a = 32856)), 33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || e.get("EXT_color_buffer_float"), a;
    }

    function z(t) {
      return t === d || t === p || t === f ? 9728 : 9729;
    }

    function U(e) {
      var n = e.target;
      n.removeEventListener("dispose", U), function (e) {
        var n = r.get(e);
        if (void 0 === n.__webglInit) return;
        t.deleteTexture(n.__webglTexture), r.remove(e);
      }(n), n.isVideoTexture && R.delete(n), o.memory.textures--;
    }

    function F(e) {
      var n = e.target;
      n.removeEventListener("dispose", F), function (e) {
        var n = r.get(e),
            i = r.get(e.texture);
        if (!e) return;
        void 0 !== i.__webglTexture && t.deleteTexture(i.__webglTexture);
        e.depthTexture && e.depthTexture.dispose();
        if (e.isWebGLCubeRenderTarget) for (var a = 0; a < 6; a++) {
          t.deleteFramebuffer(n.__webglFramebuffer[a]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[a]);
        } else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && t.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer && t.deleteRenderbuffer(n.__webglColorRenderbuffer), n.__webglDepthRenderbuffer && t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
        r.remove(e.texture), r.remove(e);
      }(n), o.memory.textures--;
    }

    var G = 0;

    function H(t, e) {
      var i = r.get(t);

      if (t.isVideoTexture && function (t) {
        var e = o.render.frame;
        R.get(t) !== e && (R.set(t, e), t.update());
      }(t), t.version > 0 && i.__version !== t.version) {
        var a = t.image;
        if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else {
          if (!1 !== a.complete) return void X(i, t, e);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      }

      n.activeTexture(33984 + e), n.bindTexture(3553, i.__webglTexture);
    }

    function k(e, i) {
      var o = r.get(e);
      e.version > 0 && o.__version !== e.version ? function (e, r, i) {
        if (6 !== r.image.length) return;
        q(e, r), n.activeTexture(33984 + i), n.bindTexture(34067, e.__webglTexture), t.pixelStorei(37440, r.flipY);

        for (var o = r && (r.isCompressedTexture || r.image[0].isCompressedTexture), s = r.image[0] && r.image[0].isDataTexture, c = [], l = 0; l < 6; l++) {
          c[l] = o || s ? s ? r.image[l].image : r.image[l] : I(r.image[l], !1, !0, g);
        }

        var u,
            d = c[0],
            p = N(d) || h,
            f = a.convert(r.format),
            m = a.convert(r.type),
            v = B(r.internalFormat, f, m);

        if (j(34067, r, p), o) {
          for (var y = 0; y < 6; y++) {
            u = c[y].mipmaps;

            for (var x = 0; x < u.length; x++) {
              var _ = u[x];
              r.format !== T && r.format !== S ? null !== f ? n.compressedTexImage2D(34069 + y, x, v, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + y, x, v, _.width, _.height, 0, f, m, _.data);
            }
          }

          e.__maxMipLevel = u.length - 1;
        } else {
          u = r.mipmaps;

          for (var b = 0; b < 6; b++) {
            if (s) {
              n.texImage2D(34069 + b, 0, v, c[b].width, c[b].height, 0, f, m, c[b].data);

              for (var w = 0; w < u.length; w++) {
                var M = u[w].image[b].image;
                n.texImage2D(34069 + b, w + 1, v, M.width, M.height, 0, f, m, M.data);
              }
            } else {
              n.texImage2D(34069 + b, 0, v, f, m, c[b]);

              for (var E = 0; E < u.length; E++) {
                var A = u[E];
                n.texImage2D(34069 + b, E + 1, v, f, m, A.image[b]);
              }
            }
          }

          e.__maxMipLevel = u.length;
        }

        D(r, p) && O(34067, r, d.width, d.height);
        e.__version = r.version, r.onUpdate && r.onUpdate(r);
      }(o, e, i) : (n.activeTexture(33984 + i), n.bindTexture(34067, o.__webglTexture));
    }

    var V = ((s = {})[1e3] = 10497, s[1001] = 33071, s[1002] = 33648, s),
        W = ((c = {})[1003] = 9728, c[1004] = 9984, c[1005] = 9986, c[1006] = 9729, c[1007] = 9985, c[1008] = 9987, c);

    function j(n, a, o) {
      o ? (t.texParameteri(n, 10242, V[a.wrapS]), t.texParameteri(n, 10243, V[a.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, V[a.wrapR]), t.texParameteri(n, 10240, W[a.magFilter]), t.texParameteri(n, 10241, W[a.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), a.wrapS === u && a.wrapT === u || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, z(a.magFilter)), t.texParameteri(n, 10241, z(a.minFilter)), a.minFilter !== d && a.minFilter !== m && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
      var s = e.get("EXT_texture_filter_anisotropic");

      if (s) {
        if (a.type === b && null === e.get("OES_texture_float_linear")) return;
        if (a.type === w && null === (h || e.get("OES_texture_half_float_linear"))) return;
        (a.anisotropy > 1 || r.get(a).__currentAnisotropy) && (t.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy);
      }
    }

    function q(e, n) {
      void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", U), e.__webglTexture = t.createTexture(), o.memory.textures++);
    }

    function X(e, r, i) {
      var o = 3553;
      r.isDataTexture2DArray && (o = 35866), r.isDataTexture3D && (o = 32879), q(e, r), n.activeTexture(33984 + i), n.bindTexture(o, e.__webglTexture), t.pixelStorei(37440, r.flipY), t.pixelStorei(37441, r.premultiplyAlpha), t.pixelStorei(3317, r.unpackAlignment);

      var s,
          c = function (t) {
        return !h && (t.wrapS !== u || t.wrapT !== u || t.minFilter !== d && t.minFilter !== m);
      }(r) && !1 === N(r.image),
          l = I(r.image, c, !1, y),
          p = N(l) || h,
          f = a.convert(r.format),
          v = a.convert(r.type),
          g = B(r.internalFormat, f, v);

      j(o, r, p);
      var w = r.mipmaps;
      if (r.isDepthTexture) g = 6402, h ? g = r.type === b ? 36012 : r.type === _ ? 33190 : r.type === M ? 35056 : 33189 : r.type === b && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), r.format === E && 6402 === g && r.type !== x && r.type !== _ && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r.type = x, v = a.convert(r.type)), r.format === A && 6402 === g && (g = 34041, r.type !== M && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r.type = M, v = a.convert(r.type))), n.texImage2D(3553, 0, g, l.width, l.height, 0, f, v, null);else if (r.isDataTexture) {
        if (w.length > 0 && p) {
          for (var L = 0, R = w.length; L < R; L++) {
            s = w[L], n.texImage2D(3553, L, g, s.width, s.height, 0, f, v, s.data);
          }

          r.generateMipmaps = !1, e.__maxMipLevel = w.length - 1;
        } else n.texImage2D(3553, 0, g, l.width, l.height, 0, f, v, l.data), e.__maxMipLevel = 0;
      } else if (r.isCompressedTexture) {
        for (var C = 0, P = w.length; C < P; C++) {
          s = w[C], r.format !== T && r.format !== S ? null !== f ? n.compressedTexImage2D(3553, C, g, s.width, s.height, 0, s.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, C, g, s.width, s.height, 0, f, v, s.data);
        }

        e.__maxMipLevel = w.length - 1;
      } else if (r.isDataTexture2DArray) n.texImage3D(35866, 0, g, l.width, l.height, l.depth, 0, f, v, l.data), e.__maxMipLevel = 0;else if (r.isDataTexture3D) n.texImage3D(32879, 0, g, l.width, l.height, l.depth, 0, f, v, l.data), e.__maxMipLevel = 0;else if (w.length > 0 && p) {
        for (var z = 0, U = w.length; z < U; z++) {
          s = w[z], n.texImage2D(3553, z, g, f, v, s);
        }

        r.generateMipmaps = !1, e.__maxMipLevel = w.length - 1;
      } else n.texImage2D(3553, 0, g, f, v, l), e.__maxMipLevel = 0;
      D(r, p) && O(o, r, l.width, l.height), e.__version = r.version, r.onUpdate && r.onUpdate(r);
    }

    function Y(e, i, o, s) {
      var c = a.convert(i.texture.format),
          l = a.convert(i.texture.type),
          u = B(i.texture.internalFormat, c, l);
      n.texImage2D(s, 0, u, i.width, i.height, 0, c, l, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, s, r.get(i.texture).__webglTexture, 0), t.bindFramebuffer(36160, null);
    }

    function Z(e, n, r) {
      if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
        var i = 33189;

        if (r) {
          var o = n.depthTexture;
          o && o.isDepthTexture && (o.type === b ? i = 36012 : o.type === _ && (i = 33190));
          var s = Q(n);
          t.renderbufferStorageMultisample(36161, s, i, n.width, n.height);
        } else t.renderbufferStorage(36161, i, n.width, n.height);

        t.framebufferRenderbuffer(36160, 36096, 36161, e);
      } else if (n.depthBuffer && n.stencilBuffer) {
        if (r) {
          var c = Q(n);
          t.renderbufferStorageMultisample(36161, c, 35056, n.width, n.height);
        } else t.renderbufferStorage(36161, 34041, n.width, n.height);

        t.framebufferRenderbuffer(36160, 33306, 36161, e);
      } else {
        var l = a.convert(n.texture.format),
            u = a.convert(n.texture.type),
            h = B(n.texture.internalFormat, l, u);

        if (r) {
          var d = Q(n);
          t.renderbufferStorageMultisample(36161, d, h, n.width, n.height);
        } else t.renderbufferStorage(36161, h, n.width, n.height);
      }

      t.bindRenderbuffer(36161, null);
    }

    function J(e) {
      var n = r.get(e),
          i = !0 === e.isWebGLCubeRenderTarget;

      if (e.depthTexture) {
        if (i) throw new Error("target.depthTexture not supported in Cube render targets");
        !function (e, n) {
          if (n && n.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (t.bindFramebuffer(36160, e), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          r.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), H(n.depthTexture, 0);

          var i = r.get(n.depthTexture).__webglTexture;

          if (n.depthTexture.format === E) t.framebufferTexture2D(36160, 36096, 3553, i, 0);else {
            if (n.depthTexture.format !== A) throw new Error("Unknown depthTexture format");
            t.framebufferTexture2D(36160, 33306, 3553, i, 0);
          }
        }(n.__webglFramebuffer, e);
      } else if (i) {
        n.__webglDepthbuffer = [];

        for (var a = 0; a < 6; a++) {
          t.bindFramebuffer(36160, n.__webglFramebuffer[a]), n.__webglDepthbuffer[a] = t.createRenderbuffer(), Z(n.__webglDepthbuffer[a], e, !1);
        }
      } else t.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), Z(n.__webglDepthbuffer, e, !1);

      t.bindFramebuffer(36160, null);
    }

    function Q(t) {
      return h && t.isWebGLMultisampleRenderTarget ? Math.min(L, t.samples) : 0;
    }

    var K = !1,
        $ = !1;
    this.allocateTextureUnit = function () {
      var t = G;
      return t >= v && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + v), G += 1, t;
    }, this.resetTextureUnits = function () {
      G = 0;
    }, this.setTexture2D = H, this.setTexture2DArray = function (t, e) {
      var i = r.get(t);
      t.version > 0 && i.__version !== t.version ? X(i, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, i.__webglTexture));
    }, this.setTexture3D = function (t, e) {
      var i = r.get(t);
      t.version > 0 && i.__version !== t.version ? X(i, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, i.__webglTexture));
    }, this.setTextureCube = k, this.setupRenderTarget = function (e) {
      var i = r.get(e),
          s = r.get(e.texture);
      e.addEventListener("dispose", F), s.__webglTexture = t.createTexture(), o.memory.textures++;
      var c = !0 === e.isWebGLCubeRenderTarget,
          l = !0 === e.isWebGLMultisampleRenderTarget,
          u = N(e) || h;

      if (!h || e.texture.format !== S || e.texture.type !== b && e.texture.type !== w || (e.texture.format = T, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), c) {
        i.__webglFramebuffer = [];

        for (var d = 0; d < 6; d++) {
          i.__webglFramebuffer[d] = t.createFramebuffer();
        }
      } else if (i.__webglFramebuffer = t.createFramebuffer(), l) if (h) {
        i.__webglMultisampledFramebuffer = t.createFramebuffer(), i.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, i.__webglColorRenderbuffer);
        var p = a.convert(e.texture.format),
            f = a.convert(e.texture.type),
            m = B(e.texture.internalFormat, p, f),
            v = Q(e);
        t.renderbufferStorageMultisample(36161, v, m, e.width, e.height), t.bindFramebuffer(36160, i.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, i.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (i.__webglDepthRenderbuffer = t.createRenderbuffer(), Z(i.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");

      if (c) {
        n.bindTexture(34067, s.__webglTexture), j(34067, e.texture, u);

        for (var g = 0; g < 6; g++) {
          Y(i.__webglFramebuffer[g], e, 36064, 34069 + g);
        }

        D(e.texture, u) && O(34067, e.texture, e.width, e.height), n.bindTexture(34067, null);
      } else n.bindTexture(3553, s.__webglTexture), j(3553, e.texture, u), Y(i.__webglFramebuffer, e, 36064, 3553), D(e.texture, u) && O(3553, e.texture, e.width, e.height), n.bindTexture(3553, null);

      e.depthBuffer && J(e);
    }, this.updateRenderTargetMipmap = function (t) {
      var e = t.texture;

      if (D(e, N(t) || h)) {
        var i = t.isWebGLCubeRenderTarget ? 34067 : 3553,
            a = r.get(e).__webglTexture;

        n.bindTexture(i, a), O(i, e, t.width, t.height), n.bindTexture(i, null);
      }
    }, this.updateMultisampleRenderTarget = function (e) {
      if (e.isWebGLMultisampleRenderTarget) if (h) {
        var n = r.get(e);
        t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, n.__webglFramebuffer);
        var i = e.width,
            a = e.height,
            o = 16384;
        e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024), t.blitFramebuffer(0, 0, i, a, 0, 0, i, a, o, 9728), t.bindFramebuffer(36160, n.__webglMultisampledFramebuffer);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    }, this.safeSetTexture2D = function (t, e) {
      t && t.isWebGLRenderTarget && (!1 === K && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), K = !0), t = t.texture), H(t, e);
    }, this.safeSetTextureCube = function (t, e) {
      t && t.isWebGLCubeRenderTarget && (!1 === $ && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), $ = !0), t = t.texture), k(t, e);
    };
  }

  function ea(t, e, n) {
    var r = n.isWebGL2;
    return {
      convert: function convert(t) {
        var n;
        if (t === y) return 5121;
        if (1017 === t) return 32819;
        if (1018 === t) return 32820;
        if (1019 === t) return 33635;
        if (1010 === t) return 5120;
        if (1011 === t) return 5122;
        if (t === x) return 5123;
        if (1013 === t) return 5124;
        if (t === _) return 5125;
        if (t === b) return 5126;
        if (t === w) return r ? 5131 : null !== (n = e.get("OES_texture_half_float")) ? n.HALF_FLOAT_OES : null;
        if (1021 === t) return 6406;
        if (t === S) return 6407;
        if (t === T) return 6408;
        if (1024 === t) return 6409;
        if (1025 === t) return 6410;
        if (t === E) return 6402;
        if (t === A) return 34041;
        if (1028 === t) return 6403;
        if (1029 === t) return 36244;
        if (1030 === t) return 33319;
        if (1031 === t) return 33320;
        if (1032 === t) return 36248;
        if (1033 === t) return 36249;

        if (t === L || t === R || t === C || t === P) {
          if (null === (n = e.get("WEBGL_compressed_texture_s3tc"))) return null;
          if (t === L) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (t === R) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (t === C) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (t === P) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }

        if (t === I || t === N || t === D || t === O) {
          if (null === (n = e.get("WEBGL_compressed_texture_pvrtc"))) return null;
          if (t === I) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (t === N) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (t === D) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (t === O) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }

        if (36196 === t) return null !== (n = e.get("WEBGL_compressed_texture_etc1")) ? n.COMPRESSED_RGB_ETC1_WEBGL : null;

        if ((t === B || t === z) && null !== (n = e.get("WEBGL_compressed_texture_etc"))) {
          if (t === B) return n.COMPRESSED_RGB8_ETC2;
          if (t === z) return n.COMPRESSED_RGBA8_ETC2_EAC;
        }

        return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? null !== (n = e.get("WEBGL_compressed_texture_astc")) ? t : null : 36492 === t ? null !== (n = e.get("EXT_texture_compression_bptc")) ? t : null : t === M ? r ? 34042 : null !== (n = e.get("WEBGL_depth_texture")) ? n.UNSIGNED_INT_24_8_WEBGL : null : void 0;
      }
    };
  }

  function na(t) {
    void 0 === t && (t = []), Xn.call(this), this.cameras = t;
  }

  function ra() {
    we.call(this), this.type = "Group";
  }

  function ia() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }

  function aa(t, e) {
    var n = this,
        r = null,
        i = 1,
        a = null,
        o = "local-floor",
        s = null,
        c = [],
        l = new Map(),
        u = new Xn();
    u.layers.enable(1), u.viewport = new xt();
    var h = new Xn();
    h.layers.enable(2), h.viewport = new xt();
    var d = [u, h],
        p = new na();
    p.layers.enable(1), p.layers.enable(2);
    var f = null,
        m = null;

    function v(t) {
      var e = l.get(t.inputSource);
      e && e.dispatchEvent({
        type: t.type,
        data: t.inputSource
      });
    }

    function g() {
      l.forEach(function (t, e) {
        t.disconnect(e);
      }), l.clear(), t.setFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), S.stop(), n.isPresenting = !1, n.dispatchEvent({
        type: "sessionend"
      });
    }

    function y(t) {
      a = t, S.setContext(r), S.start(), n.isPresenting = !0, n.dispatchEvent({
        type: "sessionstart"
      });
    }

    function x(t) {
      for (var e = r.inputSources, n = 0; n < c.length; n++) {
        l.set(e[n], c[n]);
      }

      for (var i = 0; i < t.removed.length; i++) {
        var a = t.removed[i],
            o = l.get(a);
        o && (o.dispatchEvent({
          type: "disconnected",
          data: a
        }), l.delete(a));
      }

      for (var s = 0; s < t.added.length; s++) {
        var u = t.added[s],
            h = l.get(u);
        h && h.dispatchEvent({
          type: "connected",
          data: u
        });
      }
    }

    this.enabled = !1, this.isPresenting = !1, this.getController = function (t) {
      var e = c[t];
      return void 0 === e && (e = new ia(), c[t] = e), e.getTargetRaySpace();
    }, this.getControllerGrip = function (t) {
      var e = c[t];
      return void 0 === e && (e = new ia(), c[t] = e), e.getGripSpace();
    }, this.getHand = function (t) {
      var e = c[t];
      return void 0 === e && (e = new ia(), c[t] = e), e.getHandSpace();
    }, this.setFramebufferScaleFactor = function (t) {
      i = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function (t) {
      o = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function () {
      return a;
    }, this.getSession = function () {
      return r;
    }, this.setSession = function (t) {
      if (null !== (r = t)) {
        r.addEventListener("select", v), r.addEventListener("selectstart", v), r.addEventListener("selectend", v), r.addEventListener("squeeze", v), r.addEventListener("squeezestart", v), r.addEventListener("squeezeend", v), r.addEventListener("end", g);
        var n = e.getContextAttributes();
        !0 !== n.xrCompatible && e.makeXRCompatible();
        var a = {
          antialias: n.antialias,
          alpha: n.alpha,
          depth: n.depth,
          stencil: n.stencil,
          framebufferScaleFactor: i
        },
            s = new XRWebGLLayer(r, e, a);
        r.updateRenderState({
          baseLayer: s
        }), r.requestReferenceSpace(o).then(y), r.addEventListener("inputsourceschange", x);
      }
    };

    var _ = new Mt(),
        b = new Mt();

    function w(t, e) {
      null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert();
    }

    this.getCamera = function (t) {
      p.near = h.near = u.near = t.near, p.far = h.far = u.far = t.far, f === p.near && m === p.far || (r.updateRenderState({
        depthNear: p.near,
        depthFar: p.far
      }), f = p.near, m = p.far);
      var e = t.parent,
          n = p.cameras;
      w(p, e);

      for (var i = 0; i < n.length; i++) {
        w(n[i], e);
      }

      t.matrixWorld.copy(p.matrixWorld);

      for (var a = t.children, o = 0, s = a.length; o < s; o++) {
        a[o].updateMatrixWorld(!0);
      }

      return 2 === n.length ? function (t, e, n) {
        _.setFromMatrixPosition(e.matrixWorld), b.setFromMatrixPosition(n.matrixWorld);

        var r = _.distanceTo(b),
            i = e.projectionMatrix.elements,
            a = n.projectionMatrix.elements,
            o = i[14] / (i[10] - 1),
            s = i[14] / (i[10] + 1),
            c = (i[9] + 1) / i[5],
            l = (i[9] - 1) / i[5],
            u = (i[8] - 1) / i[0],
            h = (a[8] + 1) / a[0],
            d = o * u,
            p = o * h,
            f = r / (-u + h),
            m = f * -u;

        e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
        var v = o + f,
            g = s + f,
            y = d - m,
            x = p + (r - m),
            w = c * s / g * v,
            M = l * s / g * v;
        t.projectionMatrix.makePerspective(y, x, w, M, v, g);
      }(p, u, h) : p.projectionMatrix.copy(u.projectionMatrix), p;
    };

    var M = null;
    var S = new nr();
    S.setAnimationLoop(function (e, n) {
      if (null !== (s = n.getViewerPose(a))) {
        var i = s.views,
            o = r.renderState.baseLayer;
        t.setFramebuffer(o.framebuffer);
        var l = !1;
        i.length !== p.cameras.length && (p.cameras.length = 0, l = !0);

        for (var u = 0; u < i.length; u++) {
          var h = i[u],
              f = o.getViewport(h),
              m = d[u];
          m.matrix.fromArray(h.transform.matrix), m.projectionMatrix.fromArray(h.projectionMatrix), m.viewport.set(f.x, f.y, f.width, f.height), 0 === u && p.matrix.copy(m.matrix), !0 === l && p.cameras.push(m);
        }
      }

      for (var v = r.inputSources, g = 0; g < c.length; g++) {
        var y = c[g],
            x = v[g];
        y.update(x, n, a);
      }

      M && M(e, n);
    }), this.setAnimationLoop = function (t) {
      M = t;
    }, this.dispose = function () {};
  }

  function oa(t) {
    function e(e, n) {
      e.opacity.value = n.opacity, n.color && e.diffuse.value.copy(n.color), n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.specularMap && (e.specularMap.value = n.specularMap);
      var r,
          i,
          a = t.get(n).envMap;

      if (a) {
        e.envMap.value = a, e.flipEnvMap.value = a.isCubeTexture && a._needsFlipEnvMap ? -1 : 1, e.reflectivity.value = n.reflectivity, e.refractionRatio.value = n.refractionRatio;

        var o = t.get(a).__maxMipLevel;

        void 0 !== o && (e.maxMipLevel.value = o);
      }

      n.lightMap && (e.lightMap.value = n.lightMap, e.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (e.aoMap.value = n.aoMap, e.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)), n.aoMap ? i = n.aoMap : n.lightMap && (i = n.lightMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), e.uv2Transform.value.copy(i.matrix));
    }

    function n(e, n) {
      e.roughness.value = n.roughness, e.metalness.value = n.metalness, n.roughnessMap && (e.roughnessMap.value = n.roughnessMap), n.metalnessMap && (e.metalnessMap.value = n.metalnessMap), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias), t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
    }

    return {
      refreshFogUniforms: function refreshFogUniforms(t, e) {
        t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density);
      },
      refreshMaterialUniforms: function refreshMaterialUniforms(t, r, i, a) {
        r.isMeshBasicMaterial ? e(t, r) : r.isMeshLambertMaterial ? (e(t, r), function (t, e) {
          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
        }(t, r)) : r.isMeshToonMaterial ? (e(t, r), function (t, e) {
          e.gradientMap && (t.gradientMap.value = e.gradientMap);
          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, r)) : r.isMeshPhongMaterial ? (e(t, r), function (t, e) {
          t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, r)) : r.isMeshStandardMaterial ? (e(t, r), r.isMeshPhysicalMaterial ? function (t, e) {
          n(t, e), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen);
          e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
          e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
          e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate());
          t.transmission.value = e.transmission, e.transmissionMap && (t.transmissionMap.value = e.transmissionMap);
        }(t, r) : n(t, r)) : r.isMeshMatcapMaterial ? (e(t, r), function (t, e) {
          e.matcap && (t.matcap.value = e.matcap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, r)) : r.isMeshDepthMaterial ? (e(t, r), function (t, e) {
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, r)) : r.isMeshDistanceMaterial ? (e(t, r), function (t, e) {
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
          t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance;
        }(t, r)) : r.isMeshNormalMaterial ? (e(t, r), function (t, e) {
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, r)) : r.isLineBasicMaterial ? (function (t, e) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity;
        }(t, r), r.isLineDashedMaterial && function (t, e) {
          t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale;
        }(t, r)) : r.isPointsMaterial ? function (t, e, n, r) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * r, e.map && (t.map.value = e.map);
          e.alphaMap && (t.alphaMap.value = e.alphaMap);
          var i;
          e.map ? i = e.map : e.alphaMap && (i = e.alphaMap);
          void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix));
        }(t, r, i, a) : r.isSpriteMaterial ? function (t, e) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
          e.alphaMap && (t.alphaMap.value = e.alphaMap);
          var n;
          e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
          void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix));
        }(t, r) : r.isShadowMaterial ? (t.color.value.copy(r.color), t.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
      }
    };
  }

  function sa(t) {
    var e,
        n = void 0 !== (t = t || {}).canvas ? t.canvas : ((e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).style.display = "block", e),
        r = void 0 !== t.context ? t.context : null,
        i = void 0 !== t.alpha && t.alpha,
        a = void 0 === t.depth || t.depth,
        o = void 0 === t.stencil || t.stencil,
        s = void 0 !== t.antialias && t.antialias,
        c = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
        l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
        u = void 0 !== t.powerPreference ? t.powerPreference : "default",
        h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat,
        d = null,
        p = null;
    this.domElement = n, this.debug = {
      checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = q, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
    var f = this,
        m = !1,
        v = null,
        g = 0,
        x = 0,
        _ = null,
        M = null,
        S = -1,
        E = null,
        A = null,
        L = new xt(),
        R = new xt(),
        C = null,
        P = n.width,
        I = n.height,
        N = 1,
        D = null,
        O = null,
        B = new xt(0, 0, P, I),
        z = new xt(0, 0, P, I),
        U = !1,
        F = new er(),
        G = !1,
        H = !1,
        k = new Qt(),
        V = new Mt(),
        W = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };

    function j() {
      return null === _ ? N : 1;
    }

    var X,
        Y,
        Z,
        J,
        Q,
        K,
        $,
        tt,
        et,
        nt,
        rt,
        it,
        at,
        ot,
        ct,
        lt,
        ut,
        ht,
        dt,
        ft,
        mt,
        vt = r;

    function gt(t, e) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r],
            a = n.getContext(i, e);
        if (null !== a) return a;
      }

      return null;
    }

    try {
      var yt = {
        alpha: i,
        depth: a,
        stencil: o,
        antialias: s,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h
      };

      if (n.addEventListener("webglcontextlost", Tt, !1), n.addEventListener("webglcontextrestored", Et, !1), null === vt) {
        var _t = ["webgl2", "webgl", "experimental-webgl"];
        if (!0 === f.isWebGL1Renderer && _t.shift(), null === (vt = gt(_t, yt))) throw gt(_t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }

      void 0 === vt.getShaderPrecisionFormat && (vt.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        };
      });
    } catch (t) {
      throw console.error("THREE.WebGLRenderer: " + t.message), t;
    }

    function bt() {
      X = new fr(vt), !1 === (Y = new hr(vt, X, t)).isWebGL2 && (X.get("WEBGL_depth_texture"), X.get("OES_texture_float"), X.get("OES_texture_half_float"), X.get("OES_texture_half_float_linear"), X.get("OES_standard_derivatives"), X.get("OES_element_index_uint"), X.get("OES_vertex_array_object"), X.get("ANGLE_instanced_arrays")), X.get("OES_texture_float_linear"), ft = new ea(vt, X, Y), (Z = new $i(vt, X, Y)).scissor(R.copy(z).multiplyScalar(N).floor()), Z.viewport(L.copy(B).multiplyScalar(N).floor()), J = new gr(vt), Q = new Fi(), K = new ta(vt, X, Z, Q, Y, ft, J), $ = new pr(f), tt = new rr(vt, Y), mt = new lr(vt, X, tt, Y), et = new mr(vt, tt, J, mt), nt = new br(vt, et, tt, J), ut = new _r(vt), ct = new dr(Q), rt = new Ui(f, $, X, Y, mt, ct), it = new oa(Q), at = new Vi(Q), ot = new Zi(X, Y), lt = new cr(f, $, Z, nt, c), ht = new ur(vt, X, J, Y), dt = new vr(vt, X, J, Y), J.programs = rt.programs, f.capabilities = Y, f.extensions = X, f.properties = Q, f.renderLists = at, f.state = Z, f.info = J;
    }

    bt();
    var wt = new aa(f, vt);
    this.xr = wt;
    var St = new Ki(f, nt, Y.maxTextureSize);

    function Tt(t) {
      t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), m = !0;
    }

    function Et() {
      console.log("THREE.WebGLRenderer: Context Restored."), m = !1, bt();
    }

    function At(t) {
      var e = t.target;
      e.removeEventListener("dispose", At), function (t) {
        Lt(t), Q.remove(t);
      }(e);
    }

    function Lt(t) {
      var e = Q.get(t).program;
      void 0 !== e && rt.releaseProgram(e);
    }

    this.shadowMap = St, this.getContext = function () {
      return vt;
    }, this.getContextAttributes = function () {
      return vt.getContextAttributes();
    }, this.forceContextLoss = function () {
      var t = X.get("WEBGL_lose_context");
      t && t.loseContext();
    }, this.forceContextRestore = function () {
      var t = X.get("WEBGL_lose_context");
      t && t.restoreContext();
    }, this.getPixelRatio = function () {
      return N;
    }, this.setPixelRatio = function (t) {
      void 0 !== t && (N = t, this.setSize(P, I, !1));
    }, this.getSize = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new pt()), t.set(P, I);
    }, this.setSize = function (t, e, r) {
      wt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (P = t, I = e, n.width = Math.floor(t * N), n.height = Math.floor(e * N), !1 !== r && (n.style.width = t + "px", n.style.height = e + "px"), this.setViewport(0, 0, t, e));
    }, this.getDrawingBufferSize = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new pt()), t.set(P * N, I * N).floor();
    }, this.setDrawingBufferSize = function (t, e, r) {
      P = t, I = e, N = r, n.width = Math.floor(t * r), n.height = Math.floor(e * r), this.setViewport(0, 0, t, e);
    }, this.getCurrentViewport = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new xt()), t.copy(L);
    }, this.getViewport = function (t) {
      return t.copy(B);
    }, this.setViewport = function (t, e, n, r) {
      t.isVector4 ? B.set(t.x, t.y, t.z, t.w) : B.set(t, e, n, r), Z.viewport(L.copy(B).multiplyScalar(N).floor());
    }, this.getScissor = function (t) {
      return t.copy(z);
    }, this.setScissor = function (t, e, n, r) {
      t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, n, r), Z.scissor(R.copy(z).multiplyScalar(N).floor());
    }, this.getScissorTest = function () {
      return U;
    }, this.setScissorTest = function (t) {
      Z.setScissorTest(U = t);
    }, this.setOpaqueSort = function (t) {
      D = t;
    }, this.setTransparentSort = function (t) {
      O = t;
    }, this.getClearColor = function () {
      return lt.getClearColor();
    }, this.setClearColor = function () {
      lt.setClearColor.apply(lt, arguments);
    }, this.getClearAlpha = function () {
      return lt.getClearAlpha();
    }, this.setClearAlpha = function () {
      lt.setClearAlpha.apply(lt, arguments);
    }, this.clear = function (t, e, n) {
      var r = 0;
      (void 0 === t || t) && (r |= 16384), (void 0 === e || e) && (r |= 256), (void 0 === n || n) && (r |= 1024), vt.clear(r);
    }, this.clearColor = function () {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }, this.dispose = function () {
      n.removeEventListener("webglcontextlost", Tt, !1), n.removeEventListener("webglcontextrestored", Et, !1), at.dispose(), ot.dispose(), Q.dispose(), $.dispose(), nt.dispose(), mt.dispose(), wt.dispose(), Ct.stop();
    }, this.renderBufferImmediate = function (t, e) {
      mt.initAttributes();
      var n = Q.get(t);
      t.hasPositions && !n.position && (n.position = vt.createBuffer()), t.hasNormals && !n.normal && (n.normal = vt.createBuffer()), t.hasUvs && !n.uv && (n.uv = vt.createBuffer()), t.hasColors && !n.color && (n.color = vt.createBuffer());
      var r = e.getAttributes();
      t.hasPositions && (vt.bindBuffer(34962, n.position), vt.bufferData(34962, t.positionArray, 35048), mt.enableAttribute(r.position), vt.vertexAttribPointer(r.position, 3, 5126, !1, 0, 0)), t.hasNormals && (vt.bindBuffer(34962, n.normal), vt.bufferData(34962, t.normalArray, 35048), mt.enableAttribute(r.normal), vt.vertexAttribPointer(r.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (vt.bindBuffer(34962, n.uv), vt.bufferData(34962, t.uvArray, 35048), mt.enableAttribute(r.uv), vt.vertexAttribPointer(r.uv, 2, 5126, !1, 0, 0)), t.hasColors && (vt.bindBuffer(34962, n.color), vt.bufferData(34962, t.colorArray, 35048), mt.enableAttribute(r.color), vt.vertexAttribPointer(r.color, 3, 5126, !1, 0, 0)), mt.disableUnusedAttributes(), vt.drawArrays(4, 0, t.count), t.count = 0;
    }, this.renderBufferDirect = function (t, e, n, r, i, a) {
      null === e && (e = W);
      var o = i.isMesh && i.matrixWorld.determinant() < 0,
          s = Ot(t, e, r, i);
      Z.setMaterial(r, o);
      var c = n.index,
          l = n.attributes.position;

      if (null === c) {
        if (void 0 === l || 0 === l.count) return;
      } else if (0 === c.count) return;

      var u,
          h = 1;
      !0 === r.wireframe && (c = et.getWireframeAttribute(n), h = 2), (r.morphTargets || r.morphNormals) && ut.update(i, n, r, s), mt.setup(i, r, s, n, c);
      var d = ht;
      null !== c && (u = tt.get(c), (d = dt).setIndex(u));

      var p = null !== c ? c.count : l.count,
          f = n.drawRange.start * h,
          m = n.drawRange.count * h,
          v = null !== a ? a.start * h : 0,
          g = null !== a ? a.count * h : 1 / 0,
          y = Math.max(f, v),
          x = Math.min(p, f + m, v + g) - 1,
          _ = Math.max(0, x - y + 1);

      if (0 !== _) {
        if (i.isMesh) !0 === r.wireframe ? (Z.setLineWidth(r.wireframeLinewidth * j()), d.setMode(1)) : d.setMode(4);else if (i.isLine) {
          var b = r.linewidth;
          void 0 === b && (b = 1), Z.setLineWidth(b * j()), i.isLineSegments ? d.setMode(1) : i.isLineLoop ? d.setMode(2) : d.setMode(3);
        } else i.isPoints ? d.setMode(0) : i.isSprite && d.setMode(4);
        if (i.isInstancedMesh) d.renderInstances(y, _, i.count);else if (n.isInstancedBufferGeometry) {
          var w = Math.min(n.instanceCount, n._maxInstanceCount);
          d.renderInstances(y, _, w);
        } else d.render(y, _);
      }
    }, this.compile = function (t, e) {
      (p = ot.get(t, e)).init(), t.traverseVisible(function (t) {
        t.isLight && t.layers.test(e.layers) && (p.pushLight(t), t.castShadow && p.pushShadow(t));
      }), p.setupLights(e);
      var n = new WeakMap();
      t.traverse(function (e) {
        var r = e.material;
        if (r) if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
          var a = r[i];
          !1 === n.has(a) && (Dt(a, t, e), n.set(a));
        } else !1 === n.has(r) && (Dt(r, t, e), n.set(r));
      });
    };
    var Rt = null;
    var Ct = new nr();

    function Pt(t, e, n, r) {
      if (!1 !== t.visible) {
        if (t.layers.test(e.layers)) if (t.isGroup) n = t.renderOrder;else if (t.isLOD) !0 === t.autoUpdate && t.update(e);else if (t.isLight) p.pushLight(t), t.castShadow && p.pushShadow(t);else if (t.isSprite) {
          if (!t.frustumCulled || F.intersectsSprite(t)) {
            r && V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k);
            var i = nt.update(t),
                a = t.material;
            a.visible && d.push(t, i, a, n, V.z, null);
          }
        } else if (t.isImmediateRenderObject) r && V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k), d.push(t, null, t.material, n, V.z, null);else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== J.render.frame && (t.skeleton.update(), t.skeleton.frame = J.render.frame), !t.frustumCulled || F.intersectsObject(t))) {
          r && V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k);
          var o = nt.update(t),
              s = t.material;
          if (Array.isArray(s)) for (var c = o.groups, l = 0, u = c.length; l < u; l++) {
            var h = c[l],
                f = s[h.materialIndex];
            f && f.visible && d.push(t, o, f, n, V.z, h);
          } else s.visible && d.push(t, o, s, n, V.z, null);
        }

        for (var m = t.children, v = 0, g = m.length; v < g; v++) {
          Pt(m[v], e, n, r);
        }
      }
    }

    function It(t, e, n) {
      for (var r = !0 === e.isScene ? e.overrideMaterial : null, i = 0, a = t.length; i < a; i++) {
        var o = t[i],
            s = o.object,
            c = o.geometry,
            l = null === r ? o.material : r,
            u = o.group;

        if (n.isArrayCamera) {
          A = n;

          for (var h = n.cameras, d = 0, f = h.length; d < f; d++) {
            var m = h[d];
            s.layers.test(m.layers) && (Z.viewport(L.copy(m.viewport)), p.setupLights(m), Nt(s, e, m, c, l, u));
          }
        } else A = null, Nt(s, e, n, c, l, u);
      }
    }

    function Nt(t, e, n, r, i, a) {
      if (t.onBeforeRender(f, e, n, r, i, a), p = ot.get(e, A || n), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
        var o = Ot(n, e, i, t);
        Z.setMaterial(i), mt.reset(), function (t, e) {
          t.render(function (t) {
            f.renderBufferImmediate(t, e);
          });
        }(t, o);
      } else f.renderBufferDirect(n, e, r, i, t, a);

      t.onAfterRender(f, e, n, r, i, a), p = ot.get(e, A || n);
    }

    function Dt(t, e, n) {
      !0 !== e.isScene && (e = W);
      var r = Q.get(t),
          i = p.state.lights,
          a = p.state.shadowsArray,
          o = i.state.version,
          s = rt.getParameters(t, i.state, a, e, n),
          c = rt.getProgramCacheKey(s),
          l = r.program,
          u = !0;
      if (void 0 === l) t.addEventListener("dispose", At);else if (l.cacheKey !== c) Lt(t);else if (r.lightsStateVersion !== o) u = !1;else {
        if (void 0 !== s.shaderID) {
          var h = t.isMeshStandardMaterial ? e.environment : null;
          return void (r.envMap = $.get(t.envMap || h));
        }

        u = !1;
      }
      u && (s.uniforms = rt.getUniforms(t), t.onBeforeCompile(s, f), l = rt.acquireProgram(s, c), r.program = l, r.uniforms = s.uniforms, r.outputEncoding = s.outputEncoding);
      var d = r.uniforms;
      (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (r.numClippingPlanes = ct.numPlanes, r.numIntersection = ct.numIntersection, d.clippingPlanes = ct.uniform), r.environment = t.isMeshStandardMaterial ? e.environment : null, r.fog = e.fog, r.envMap = $.get(t.envMap || r.environment), r.needsLights = function (t) {
        return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights;
      }(t), r.lightsStateVersion = o, r.needsLights && (d.ambientLightColor.value = i.state.ambient, d.lightProbe.value = i.state.probe, d.directionalLights.value = i.state.directional, d.directionalLightShadows.value = i.state.directionalShadow, d.spotLights.value = i.state.spot, d.spotLightShadows.value = i.state.spotShadow, d.rectAreaLights.value = i.state.rectArea, d.ltc_1.value = i.state.rectAreaLTC1, d.ltc_2.value = i.state.rectAreaLTC2, d.pointLights.value = i.state.point, d.pointLightShadows.value = i.state.pointShadow, d.hemisphereLights.value = i.state.hemi, d.directionalShadowMap.value = i.state.directionalShadowMap, d.directionalShadowMatrix.value = i.state.directionalShadowMatrix, d.spotShadowMap.value = i.state.spotShadowMap, d.spotShadowMatrix.value = i.state.spotShadowMatrix, d.pointShadowMap.value = i.state.pointShadowMap, d.pointShadowMatrix.value = i.state.pointShadowMatrix);
      var m = r.program.getUniforms(),
          v = yi.seqWithValue(m.seq, d);
      r.uniformsList = v;
    }

    function Ot(t, e, n, r) {
      !0 !== e.isScene && (e = W), K.resetTextureUnits();
      var i = e.fog,
          a = n.isMeshStandardMaterial ? e.environment : null,
          o = null === _ ? f.outputEncoding : _.texture.encoding,
          s = $.get(n.envMap || a),
          c = Q.get(n),
          l = p.state.lights;

      if (!0 === G && (!0 === H || t !== E)) {
        var u = t === E && n.id === S;
        ct.setState(n, t, u);
      }

      n.version === c.__version ? n.fog && c.fog !== i || c.environment !== a || c.needsLights && c.lightsStateVersion !== l.state.version ? Dt(n, e, r) : void 0 === c.numClippingPlanes || c.numClippingPlanes === ct.numPlanes && c.numIntersection === ct.numIntersection ? (c.outputEncoding !== o || c.envMap !== s) && Dt(n, e, r) : Dt(n, e, r) : (Dt(n, e, r), c.__version = n.version);
      var h,
          d,
          m = !1,
          v = !1,
          g = !1,
          y = c.program,
          x = y.getUniforms(),
          w = c.uniforms;

      if (Z.useProgram(y.program) && (m = !0, v = !0, g = !0), n.id !== S && (S = n.id, v = !0), m || E !== t) {
        if (x.setValue(vt, "projectionMatrix", t.projectionMatrix), Y.logarithmicDepthBuffer && x.setValue(vt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), E !== t && (E = t, v = !0, g = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
          var M = x.map.cameraPosition;
          void 0 !== M && M.setValue(vt, V.setFromMatrixPosition(t.matrixWorld));
        }

        (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && x.setValue(vt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && x.setValue(vt, "viewMatrix", t.matrixWorldInverse);
      }

      if (n.skinning) {
        x.setOptional(vt, r, "bindMatrix"), x.setOptional(vt, r, "bindMatrixInverse");
        var A = r.skeleton;

        if (A) {
          var L = A.bones;

          if (Y.floatVertexTextures) {
            if (null === A.boneTexture) {
              var R = Math.sqrt(4 * L.length);
              R = st.ceilPowerOfTwo(R), R = Math.max(R, 4);
              var C = new Float32Array(R * R * 4);
              C.set(A.boneMatrices);
              var P = new Kn(C, R, R, T, b);
              A.boneMatrices = C, A.boneTexture = P, A.boneTextureSize = R;
            }

            x.setValue(vt, "boneTexture", A.boneTexture, K), x.setValue(vt, "boneTextureSize", A.boneTextureSize);
          } else x.setOptional(vt, A, "boneMatrices");
        }
      }

      return (v || c.receiveShadow !== r.receiveShadow) && (c.receiveShadow = r.receiveShadow, x.setValue(vt, "receiveShadow", r.receiveShadow)), v && (x.setValue(vt, "toneMappingExposure", f.toneMappingExposure), c.needsLights && (d = g, (h = w).ambientLightColor.needsUpdate = d, h.lightProbe.needsUpdate = d, h.directionalLights.needsUpdate = d, h.directionalLightShadows.needsUpdate = d, h.pointLights.needsUpdate = d, h.pointLightShadows.needsUpdate = d, h.spotLights.needsUpdate = d, h.spotLightShadows.needsUpdate = d, h.rectAreaLights.needsUpdate = d, h.hemisphereLights.needsUpdate = d), i && n.fog && it.refreshFogUniforms(w, i), it.refreshMaterialUniforms(w, n, N, I), yi.upload(vt, c.uniformsList, w, K)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (yi.upload(vt, c.uniformsList, w, K), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && x.setValue(vt, "center", r.center), x.setValue(vt, "modelViewMatrix", r.modelViewMatrix), x.setValue(vt, "normalMatrix", r.normalMatrix), x.setValue(vt, "modelMatrix", r.matrixWorld), y;
    }

    Ct.setAnimationLoop(function (t) {
      wt.isPresenting || Rt && Rt(t);
    }), "undefined" != typeof window && Ct.setContext(window), this.setAnimationLoop = function (t) {
      Rt = t, wt.setAnimationLoop(t), null === t ? Ct.stop() : Ct.start();
    }, this.render = function (t, e) {
      var n, r;

      if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), r = arguments[3]), void 0 === e || !0 === e.isCamera) {
        if (!0 !== m) {
          mt.resetDefaultState(), S = -1, E = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === wt.enabled && !0 === wt.isPresenting && (e = wt.getCamera(e)), !0 === t.isScene && t.onBeforeRender(f, t, e, n || _), (p = ot.get(t, e)).init(), k.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), F.setFromProjectionMatrix(k), H = this.localClippingEnabled, G = ct.init(this.clippingPlanes, H, e), (d = at.get(t, e)).init(), Pt(t, e, 0, f.sortObjects), d.finish(), !0 === f.sortObjects && d.sort(D, O), !0 === G && ct.beginShadows();
          var i = p.state.shadowsArray;
          St.render(i, t, e), p.setupLights(e), !0 === G && ct.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), lt.render(d, t, e, r);
          var a = d.opaque,
              o = d.transparent;
          a.length > 0 && It(a, t, e), o.length > 0 && It(o, t, e), !0 === t.isScene && t.onAfterRender(f, t, e), null !== _ && (K.updateRenderTargetMipmap(_), K.updateMultisampleRenderTarget(_)), Z.buffers.depth.setTest(!0), Z.buffers.depth.setMask(!0), Z.buffers.color.setMask(!0), Z.setPolygonOffset(!1), d = null, p = null;
        }
      } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
    }, this.setFramebuffer = function (t) {
      v !== t && null === _ && vt.bindFramebuffer(36160, t), v = t;
    }, this.getActiveCubeFace = function () {
      return g;
    }, this.getActiveMipmapLevel = function () {
      return x;
    }, this.getRenderList = function () {
      return d;
    }, this.setRenderList = function (t) {
      d = t;
    }, this.getRenderState = function () {
      return p;
    }, this.setRenderState = function (t) {
      p = t;
    }, this.getRenderTarget = function () {
      return _;
    }, this.setRenderTarget = function (t, e, n) {
      void 0 === e && (e = 0), void 0 === n && (n = 0), _ = t, g = e, x = n, t && void 0 === Q.get(t).__webglFramebuffer && K.setupRenderTarget(t);
      var r = v,
          i = !1;

      if (t) {
        var a = Q.get(t).__webglFramebuffer;

        t.isWebGLCubeRenderTarget ? (r = a[e], i = !0) : r = t.isWebGLMultisampleRenderTarget ? Q.get(t).__webglMultisampledFramebuffer : a, L.copy(t.viewport), R.copy(t.scissor), C = t.scissorTest;
      } else L.copy(B).multiplyScalar(N).floor(), R.copy(z).multiplyScalar(N).floor(), C = U;

      if (M !== r && (vt.bindFramebuffer(36160, r), M = r), Z.viewport(L), Z.scissor(R), Z.setScissorTest(C), i) {
        var o = Q.get(t.texture);
        vt.framebufferTexture2D(36160, 36064, 34069 + e, o.__webglTexture, n);
      }
    }, this.readRenderTargetPixels = function (t, e, n, r, i, a, o) {
      if (t && t.isWebGLRenderTarget) {
        var s = Q.get(t).__webglFramebuffer;

        if (t.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s) {
          var c = !1;
          s !== M && (vt.bindFramebuffer(36160, s), c = !0);

          try {
            var l = t.texture,
                u = l.format,
                h = l.type;
            if (u !== T && ft.convert(u) !== vt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!(h === y || ft.convert(h) === vt.getParameter(35738) || h === b && (Y.isWebGL2 || X.get("OES_texture_float") || X.get("WEBGL_color_buffer_float")) || h === w && (Y.isWebGL2 ? X.get("EXT_color_buffer_float") : X.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            36053 === vt.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - r && n >= 0 && n <= t.height - i && vt.readPixels(e, n, r, i, ft.convert(u), ft.convert(h), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
          } finally {
            c && vt.bindFramebuffer(36160, M);
          }
        }
      } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
    }, this.copyFramebufferToTexture = function (t, e, n) {
      void 0 === n && (n = 0);
      var r = Math.pow(2, -n),
          i = Math.floor(e.image.width * r),
          a = Math.floor(e.image.height * r),
          o = ft.convert(e.format);
      K.setTexture2D(e, 0), vt.copyTexImage2D(3553, n, o, t.x, t.y, i, a, 0), Z.unbindTexture();
    }, this.copyTextureToTexture = function (t, e, n, r) {
      void 0 === r && (r = 0);
      var i = e.image.width,
          a = e.image.height,
          o = ft.convert(n.format),
          s = ft.convert(n.type);
      K.setTexture2D(n, 0), vt.pixelStorei(37440, n.flipY), vt.pixelStorei(37441, n.premultiplyAlpha), vt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? vt.texSubImage2D(3553, r, t.x, t.y, i, a, o, s, e.image.data) : e.isCompressedTexture ? vt.compressedTexSubImage2D(3553, r, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, o, e.mipmaps[0].data) : vt.texSubImage2D(3553, r, t.x, t.y, o, s, e.image), 0 === r && n.generateMipmaps && vt.generateMipmap(3553), Z.unbindTexture();
    }, this.initTexture = function (t) {
      K.setTexture2D(t, 0), Z.unbindTexture();
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }

  function ca(t) {
    sa.call(this, t);
  }

  na.prototype = Object.assign(Object.create(Xn.prototype), {
    constructor: na,
    isArrayCamera: !0
  }), ra.prototype = Object.assign(Object.create(we.prototype), {
    constructor: ra,
    isGroup: !0
  }), Object.assign(ia.prototype, {
    constructor: ia,
    getHandSpace: function getHandSpace() {
      if (null === this._hand && (this._hand = new ra(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = [], this._hand.inputState = {
        pinching: !1
      }, window.XRHand)) for (var t = 0; t <= window.XRHand.LITTLE_PHALANX_TIP; t++) {
        var e = new ra();
        e.matrixAutoUpdate = !1, e.visible = !1, this._hand.joints.push(e), this._hand.add(e);
      }
      return this._hand;
    },
    getTargetRaySpace: function getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new ra(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay;
    },
    getGripSpace: function getGripSpace() {
      return null === this._grip && (this._grip = new ra(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip;
    },
    dispatchEvent: function dispatchEvent(t) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this;
    },
    disconnect: function disconnect(t) {
      return this.dispatchEvent({
        type: "disconnected",
        data: t
      }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
    },
    update: function update(t, e, n) {
      var r = null,
          i = null,
          a = null,
          o = this._targetRay,
          s = this._grip,
          c = this._hand;
      if (t && "visible-blurred" !== e.session.visibilityState) if (c && t.hand) {
        a = !0;

        for (var l = 0; l <= window.XRHand.LITTLE_PHALANX_TIP; l++) {
          if (t.hand[l]) {
            var u = e.getJointPose(t.hand[l], n),
                h = c.joints[l];
            null !== u && (h.matrix.fromArray(u.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.jointRadius = u.radius), h.visible = null !== u;
            var d = c.joints[window.XRHand.INDEX_PHALANX_TIP],
                p = c.joints[window.XRHand.THUMB_PHALANX_TIP],
                f = d.position.distanceTo(p.position);
            c.inputState.pinching && f > .025 ? (c.inputState.pinching = !1, this.dispatchEvent({
              type: "pinchend",
              handedness: t.handedness,
              target: this
            })) : !c.inputState.pinching && f <= .015 && (c.inputState.pinching = !0, this.dispatchEvent({
              type: "pinchstart",
              handedness: t.handedness,
              target: this
            }));
          }
        }
      } else null !== o && null !== (r = e.getPose(t.targetRaySpace, n)) && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale)), null !== s && t.gripSpace && null !== (i = e.getPose(t.gripSpace, n)) && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale));
      return null !== o && (o.visible = null !== r), null !== s && (s.visible = null !== i), null !== c && (c.visible = null !== a), this;
    }
  }), Object.assign(aa.prototype, rt.prototype), ca.prototype = Object.assign(Object.create(sa.prototype), {
    constructor: ca,
    isWebGL1Renderer: !0
  });

  var la = function () {
    function t(t, e) {
      Object.defineProperty(this, "isFogExp2", {
        value: !0
      }), this.name = "", this.color = new We(t), this.density = void 0 !== e ? e : 25e-5;
    }

    var e = t.prototype;
    return e.clone = function () {
      return new t(this.color, this.density);
    }, e.toJSON = function () {
      return {
        type: "FogExp2",
        color: this.color.getHex(),
        density: this.density
      };
    }, t;
  }(),
      ua = function () {
    function t(t, e, n) {
      Object.defineProperty(this, "isFog", {
        value: !0
      }), this.name = "", this.color = new We(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== n ? n : 1e3;
    }

    var e = t.prototype;
    return e.clone = function () {
      return new t(this.color, this.near, this.far);
    }, e.toJSON = function () {
      return {
        type: "Fog",
        color: this.color.getHex(),
        near: this.near,
        far: this.far
      };
    }, t;
  }(),
      ha = function (t) {
    function e() {
      var e;
      return e = t.call(this) || this, Object.defineProperty(ht(e), "isScene", {
        value: !0
      }), e.type = "Scene", e.background = null, e.environment = null, e.fog = null, e.overrideMaterial = null, e.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: ht(e)
      })), e;
    }

    ut(e, t);
    var n = e.prototype;
    return n.copy = function (e, n) {
      return t.prototype.copy.call(this, e, n), null !== e.background && (this.background = e.background.clone()), null !== e.environment && (this.environment = e.environment.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
    }, n.toJSON = function (e) {
      var n = t.prototype.toJSON.call(this, e);
      return null !== this.background && (n.object.background = this.background.toJSON(e)), null !== this.environment && (n.object.environment = this.environment.toJSON(e)), null !== this.fog && (n.object.fog = this.fog.toJSON()), n;
    }, e;
  }(we);

  function da(t, e) {
    this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = tt, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0, this.uuid = st.generateUUID();
  }

  Object.defineProperty(da.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  }), Object.assign(da.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function onUploadCallback() {},
    setUsage: function setUsage(t) {
      return this.usage = t, this;
    },
    copy: function copy(t) {
      return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
    },
    copyAt: function copyAt(t, e, n) {
      t *= this.stride, n *= e.stride;

      for (var r = 0, i = this.stride; r < i; r++) {
        this.array[t + r] = e.array[n + r];
      }

      return this;
    },
    set: function set(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this;
    },
    clone: function clone(t) {
      void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = st.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      var e = new da(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), this.stride);
      return e.setUsage(this.usage), e;
    },
    onUpload: function onUpload(t) {
      return this.onUploadCallback = t, this;
    },
    toJSON: function toJSON(t) {
      return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = st.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride
      };
    }
  });
  var pa,
      fa = new Mt();

  function ma(t, e, n, r) {
    this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === r;
  }

  function va(t) {
    Xe.call(this), this.type = "SpriteMaterial", this.color = new We(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t);
  }

  Object.defineProperties(ma.prototype, {
    count: {
      get: function get() {
        return this.data.count;
      }
    },
    array: {
      get: function get() {
        return this.data.array;
      }
    },
    needsUpdate: {
      set: function set(t) {
        this.data.needsUpdate = t;
      }
    }
  }), Object.assign(ma.prototype, {
    isInterleavedBufferAttribute: !0,
    applyMatrix4: function applyMatrix4(t) {
      for (var e = 0, n = this.data.count; e < n; e++) {
        fa.x = this.getX(e), fa.y = this.getY(e), fa.z = this.getZ(e), fa.applyMatrix4(t), this.setXYZ(e, fa.x, fa.y, fa.z);
      }

      return this;
    },
    setX: function setX(t, e) {
      return this.data.array[t * this.data.stride + this.offset] = e, this;
    },
    setY: function setY(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 1] = e, this;
    },
    setZ: function setZ(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 2] = e, this;
    },
    setW: function setW(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 3] = e, this;
    },
    getX: function getX(t) {
      return this.data.array[t * this.data.stride + this.offset];
    },
    getY: function getY(t) {
      return this.data.array[t * this.data.stride + this.offset + 1];
    },
    getZ: function getZ(t) {
      return this.data.array[t * this.data.stride + this.offset + 2];
    },
    getW: function getW(t) {
      return this.data.array[t * this.data.stride + this.offset + 3];
    },
    setXY: function setXY(t, e, n) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
    },
    setXYZ: function setXYZ(t, e, n, r) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this;
    },
    setXYZW: function setXYZW(t, e, n, r, i) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this.data.array[t + 3] = i, this;
    },
    clone: function clone(t) {
      if (void 0 === t) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");

        for (var e = [], n = 0; n < this.count; n++) {
          for (var r = n * this.data.stride + this.offset, i = 0; i < this.itemSize; i++) {
            e.push(this.data.array[r + i]);
          }
        }

        return new Qe(new this.array.constructor(e), this.itemSize, this.normalized);
      }

      return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new ma(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    },
    toJSON: function toJSON(t) {
      if (void 0 === t) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");

        for (var e = [], n = 0; n < this.count; n++) {
          for (var r = n * this.data.stride + this.offset, i = 0; i < this.itemSize; i++) {
            e.push(this.data.array[r + i]);
          }
        }

        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: e,
          normalized: this.normalized
        };
      }

      return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
    }
  }), va.prototype = Object.create(Xe.prototype), va.prototype.constructor = va, va.prototype.isSpriteMaterial = !0, va.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this;
  };

  var ga = new Mt(),
      ya = new Mt(),
      xa = new Mt(),
      _a = new pt(),
      ba = new pt(),
      wa = new Qt(),
      Ma = new Mt(),
      Sa = new Mt(),
      Ta = new Mt(),
      Ea = new pt(),
      Aa = new pt(),
      La = new pt();

  function Ra(t) {
    if (we.call(this), this.type = "Sprite", void 0 === pa) {
      pa = new _n();
      var e = new da(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
      pa.setIndex([0, 1, 2, 0, 2, 3]), pa.setAttribute("position", new ma(e, 3, 0, !1)), pa.setAttribute("uv", new ma(e, 2, 3, !1));
    }

    this.geometry = pa, this.material = void 0 !== t ? t : new va(), this.center = new pt(.5, .5);
  }

  function Ca(t, e, n, r, i, a) {
    _a.subVectors(t, n).addScalar(.5).multiply(r), void 0 !== i ? (ba.x = a * _a.x - i * _a.y, ba.y = i * _a.x + a * _a.y) : ba.copy(_a), t.copy(e), t.x += ba.x, t.y += ba.y, t.applyMatrix4(wa);
  }

  Ra.prototype = Object.assign(Object.create(we.prototype), {
    constructor: Ra,
    isSprite: !0,
    raycast: function raycast(t, e) {
      null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ya.setFromMatrixScale(this.matrixWorld), wa.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), xa.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && ya.multiplyScalar(-xa.z);
      var n,
          r,
          i = this.material.rotation;
      0 !== i && (r = Math.cos(i), n = Math.sin(i));
      var a = this.center;
      Ca(Ma.set(-.5, -.5, 0), xa, a, ya, n, r), Ca(Sa.set(.5, -.5, 0), xa, a, ya, n, r), Ca(Ta.set(.5, .5, 0), xa, a, ya, n, r), Ea.set(0, 0), Aa.set(1, 0), La.set(1, 1);
      var o = t.ray.intersectTriangle(Ma, Sa, Ta, !1, ga);

      if (null !== o || (Ca(Sa.set(-.5, .5, 0), xa, a, ya, n, r), Aa.set(0, 1), null !== (o = t.ray.intersectTriangle(Ma, Ta, Sa, !1, ga)))) {
        var s = t.ray.origin.distanceTo(ga);
        s < t.near || s > t.far || e.push({
          distance: s,
          point: ga.clone(),
          uv: ze.getUV(ga, Ma, Sa, Ta, Ea, Aa, La, new pt()),
          face: null,
          object: this
        });
      }
    },
    copy: function copy(t) {
      return we.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this;
    }
  });
  var Pa,
      Ia,
      Na,
      Da,
      Oa,
      Ba = new Mt(),
      za = new Mt();

  function Ua() {
    we.call(this), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      }
    }), this.autoUpdate = !0;
  }

  function Fa(t, e) {
    t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), Un.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Qt(), this.bindMatrixInverse = new Qt();
  }

  function Ga() {
    we.call(this), this.type = "Bone";
  }

  Ua.prototype = Object.assign(Object.create(we.prototype), {
    constructor: Ua,
    isLOD: !0,
    copy: function copy(t) {
      we.prototype.copy.call(this, t, !1);

      for (var e = t.levels, n = 0, r = e.length; n < r; n++) {
        var i = e[n];
        this.addLevel(i.object.clone(), i.distance);
      }

      return this.autoUpdate = t.autoUpdate, this;
    },
    addLevel: function addLevel(t, e) {
      void 0 === e && (e = 0), e = Math.abs(e);
      var n,
          r = this.levels;

      for (n = 0; n < r.length && !(e < r[n].distance); n++) {
        ;
      }

      return r.splice(n, 0, {
        distance: e,
        object: t
      }), this.add(t), this;
    },
    getCurrentLevel: function getCurrentLevel() {
      return this._currentLevel;
    },
    getObjectForDistance: function getObjectForDistance(t) {
      var e = this.levels;

      if (e.length > 0) {
        var n, r;

        for (n = 1, r = e.length; n < r && !(t < e[n].distance); n++) {
          ;
        }

        return e[n - 1].object;
      }

      return null;
    },
    raycast: function raycast(t, e) {
      if (this.levels.length > 0) {
        Ba.setFromMatrixPosition(this.matrixWorld);
        var n = t.ray.origin.distanceTo(Ba);
        this.getObjectForDistance(n).raycast(t, e);
      }
    },
    update: function update(t) {
      var e = this.levels;

      if (e.length > 1) {
        Ba.setFromMatrixPosition(t.matrixWorld), za.setFromMatrixPosition(this.matrixWorld);
        var n,
            r,
            i = Ba.distanceTo(za) / t.zoom;

        for (e[0].object.visible = !0, n = 1, r = e.length; n < r && i >= e[n].distance; n++) {
          e[n - 1].object.visible = !1, e[n].object.visible = !0;
        }

        for (this._currentLevel = n - 1; n < r; n++) {
          e[n].object.visible = !1;
        }
      }
    },
    toJSON: function toJSON(t) {
      var e = we.prototype.toJSON.call(this, t);
      !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];

      for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
        var a = n[r];
        e.object.levels.push({
          object: a.object.uuid,
          distance: a.distance
        });
      }

      return e;
    }
  }), Fa.prototype = Object.assign(Object.create(Un.prototype), {
    constructor: Fa,
    isSkinnedMesh: !0,
    copy: function copy(t) {
      return Un.prototype.copy.call(this, t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this;
    },
    bind: function bind(t, e) {
      this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
    },
    pose: function pose() {
      this.skeleton.pose();
    },
    normalizeSkinWeights: function normalizeSkinWeights() {
      for (var t = new xt(), e = this.geometry.attributes.skinWeight, n = 0, r = e.count; n < r; n++) {
        t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.w = e.getW(n);
        var i = 1 / t.manhattanLength();
        i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
      }
    },
    updateMatrixWorld: function updateMatrixWorld(t) {
      Un.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    },
    boneTransform: (Pa = new Mt(), Ia = new xt(), Na = new xt(), Da = new Mt(), Oa = new Qt(), function (t, e) {
      var n = this.skeleton,
          r = this.geometry;
      Ia.fromBufferAttribute(r.attributes.skinIndex, t), Na.fromBufferAttribute(r.attributes.skinWeight, t), Pa.fromBufferAttribute(r.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);

      for (var i = 0; i < 4; i++) {
        var a = Na.getComponent(i);

        if (0 !== a) {
          var o = Ia.getComponent(i);
          Oa.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), e.addScaledVector(Da.copy(Pa).applyMatrix4(Oa), a);
        }
      }

      return e.applyMatrix4(this.bindMatrixInverse);
    })
  }), Ga.prototype = Object.assign(Object.create(we.prototype), {
    constructor: Ga,
    isBone: !0
  });
  var Ha = new Qt(),
      ka = new Qt();

  function Va(t, e) {
    void 0 === t && (t = []), void 0 === e && (e = []), this.uuid = st.generateUUID(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
  }

  Object.assign(Va.prototype, {
    init: function init() {
      var t = this.bones,
          e = this.boneInverses;
      if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();else if (t.length !== e.length) {
        console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];

        for (var n = 0, r = this.bones.length; n < r; n++) {
          this.boneInverses.push(new Qt());
        }
      }
    },
    calculateInverses: function calculateInverses() {
      this.boneInverses.length = 0;

      for (var t = 0, e = this.bones.length; t < e; t++) {
        var n = new Qt();
        this.bones[t] && n.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(n);
      }
    },
    pose: function pose() {
      for (var t = 0, e = this.bones.length; t < e; t++) {
        var n = this.bones[t];
        n && n.matrixWorld.copy(this.boneInverses[t]).invert();
      }

      for (var r = 0, i = this.bones.length; r < i; r++) {
        var a = this.bones[r];
        a && (a.parent && a.parent.isBone ? (a.matrix.copy(a.parent.matrixWorld).invert(), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale));
      }
    },
    update: function update() {
      for (var t = this.bones, e = this.boneInverses, n = this.boneMatrices, r = this.boneTexture, i = 0, a = t.length; i < a; i++) {
        var o = t[i] ? t[i].matrixWorld : ka;
        Ha.multiplyMatrices(o, e[i]), Ha.toArray(n, 16 * i);
      }

      null !== r && (r.needsUpdate = !0);
    },
    clone: function clone() {
      return new Va(this.bones, this.boneInverses);
    },
    getBoneByName: function getBoneByName(t) {
      for (var e = 0, n = this.bones.length; e < n; e++) {
        var r = this.bones[e];
        if (r.name === t) return r;
      }
    },
    dispose: function dispose() {
      null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
    },
    fromJSON: function fromJSON(t, e) {
      this.uuid = t.uuid;

      for (var n = 0, r = t.bones.length; n < r; n++) {
        var i = t.bones[n],
            a = e[i];
        void 0 === a && (console.warn("THREE.Skeleton: No bone found with UUID:", i), a = new Ga()), this.bones.push(a), this.boneInverses.push(new Qt().fromArray(t.boneInverses[n]));
      }

      return this.init(), this;
    },
    toJSON: function toJSON() {
      var t = {
        metadata: {
          version: 4.5,
          type: "Skeleton",
          generator: "Skeleton.toJSON"
        },
        bones: [],
        boneInverses: []
      };
      t.uuid = this.uuid;

      for (var e = this.bones, n = this.boneInverses, r = 0, i = e.length; r < i; r++) {
        var a = e[r];
        t.bones.push(a.uuid);
        var o = n[r];
        t.boneInverses.push(o.toArray());
      }

      return t;
    }
  });
  var Wa = new Qt(),
      ja = new Qt(),
      qa = [],
      Xa = new Un();

  function Ya(t, e, n) {
    Un.call(this, t, e), this.instanceMatrix = new Qe(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
  }

  function Za(t) {
    Xe.call(this), this.type = "LineBasicMaterial", this.color = new We(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(t);
  }

  Ya.prototype = Object.assign(Object.create(Un.prototype), {
    constructor: Ya,
    isInstancedMesh: !0,
    copy: function copy(t) {
      return Un.prototype.copy.call(this, t), this.instanceMatrix.copy(t.instanceMatrix), this.count = t.count, this;
    },
    getColorAt: function getColorAt(t, e) {
      e.fromArray(this.instanceColor.array, 3 * t);
    },
    getMatrixAt: function getMatrixAt(t, e) {
      e.fromArray(this.instanceMatrix.array, 16 * t);
    },
    raycast: function raycast(t, e) {
      var n = this.matrixWorld,
          r = this.count;
      if (Xa.geometry = this.geometry, Xa.material = this.material, void 0 !== Xa.material) for (var i = 0; i < r; i++) {
        this.getMatrixAt(i, Wa), ja.multiplyMatrices(n, Wa), Xa.matrixWorld = ja, Xa.raycast(t, qa);

        for (var a = 0, o = qa.length; a < o; a++) {
          var s = qa[a];
          s.instanceId = i, s.object = this, e.push(s);
        }

        qa.length = 0;
      }
    },
    setColorAt: function setColorAt(t, e) {
      null === this.instanceColor && (this.instanceColor = new Qe(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * t);
    },
    setMatrixAt: function setMatrixAt(t, e) {
      e.toArray(this.instanceMatrix.array, 16 * t);
    },
    updateMorphTargets: function updateMorphTargets() {}
  }), Za.prototype = Object.create(Xe.prototype), Za.prototype.constructor = Za, Za.prototype.isLineBasicMaterial = !0, Za.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.morphTargets = t.morphTargets, this;
  };
  var Ja = new Mt(),
      Qa = new Mt(),
      Ka = new Qt(),
      $a = new Jt(),
      to = new kt();

  function eo(t, e, n) {
    1 === n && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), we.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new _n(), this.material = void 0 !== e ? e : new Za(), this.updateMorphTargets();
  }

  eo.prototype = Object.assign(Object.create(we.prototype), {
    constructor: eo,
    isLine: !0,
    copy: function copy(t) {
      return we.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this;
    },
    computeLineDistances: function computeLineDistances() {
      var t = this.geometry;
      if (t.isBufferGeometry) {
        if (null === t.index) {
          for (var e = t.attributes.position, n = [0], r = 1, i = e.count; r < i; r++) {
            Ja.fromBufferAttribute(e, r - 1), Qa.fromBufferAttribute(e, r), n[r] = n[r - 1], n[r] += Ja.distanceTo(Qa);
          }

          t.setAttribute("lineDistance", new sn(n, 1));
        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      } else if (t.isGeometry) {
        var a = t.vertices,
            o = t.lineDistances;
        o[0] = 0;

        for (var s = 1, c = a.length; s < c; s++) {
          o[s] = o[s - 1], o[s] += a[s - 1].distanceTo(a[s]);
        }
      }
      return this;
    },
    raycast: function raycast(t, e) {
      var n = this.geometry,
          r = this.matrixWorld,
          i = t.params.Line.threshold;

      if (null === n.boundingSphere && n.computeBoundingSphere(), to.copy(n.boundingSphere), to.applyMatrix4(r), to.radius += i, !1 !== t.ray.intersectsSphere(to)) {
        Ka.copy(r).invert(), $a.copy(t.ray).applyMatrix4(Ka);
        var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            s = new Mt(),
            c = new Mt(),
            l = new Mt(),
            u = new Mt(),
            h = this.isLineSegments ? 2 : 1;

        if (n.isBufferGeometry) {
          var d = n.index,
              p = n.attributes.position;
          if (null !== d) for (var f = d.array, m = 0, v = f.length - 1; m < v; m += h) {
            var g = f[m],
                y = f[m + 1];

            if (s.fromBufferAttribute(p, g), c.fromBufferAttribute(p, y), !($a.distanceSqToSegment(s, c, u, l) > o)) {
              u.applyMatrix4(this.matrixWorld);
              var x = t.ray.origin.distanceTo(u);
              x < t.near || x > t.far || e.push({
                distance: x,
                point: l.clone().applyMatrix4(this.matrixWorld),
                index: m,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          } else for (var _ = 0, b = p.count - 1; _ < b; _ += h) {
            if (s.fromBufferAttribute(p, _), c.fromBufferAttribute(p, _ + 1), !($a.distanceSqToSegment(s, c, u, l) > o)) {
              u.applyMatrix4(this.matrixWorld);
              var w = t.ray.origin.distanceTo(u);
              w < t.near || w > t.far || e.push({
                distance: w,
                point: l.clone().applyMatrix4(this.matrixWorld),
                index: _,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          }
        } else if (n.isGeometry) for (var M = n.vertices, S = M.length, T = 0; T < S - 1; T += h) {
          if (!($a.distanceSqToSegment(M[T], M[T + 1], u, l) > o)) {
            u.applyMatrix4(this.matrixWorld);
            var E = t.ray.origin.distanceTo(u);
            E < t.near || E > t.far || e.push({
              distance: E,
              point: l.clone().applyMatrix4(this.matrixWorld),
              index: T,
              face: null,
              faceIndex: null,
              object: this
            });
          }
        }
      }
    },
    updateMorphTargets: function updateMorphTargets() {
      var t = this.geometry;

      if (t.isBufferGeometry) {
        var e = t.morphAttributes,
            n = Object.keys(e);

        if (n.length > 0) {
          var r = e[n[0]];

          if (void 0 !== r) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};

            for (var i = 0, a = r.length; i < a; i++) {
              var o = r[i].name || String(i);
              this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = i;
            }
          }
        }
      } else {
        var s = t.morphTargets;
        void 0 !== s && s.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  });
  var no = new Mt(),
      ro = new Mt();

  function io(t, e) {
    eo.call(this, t, e), this.type = "LineSegments";
  }

  function ao(t, e) {
    eo.call(this, t, e), this.type = "LineLoop";
  }

  function oo(t) {
    Xe.call(this), this.type = "PointsMaterial", this.color = new We(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(t);
  }

  io.prototype = Object.assign(Object.create(eo.prototype), {
    constructor: io,
    isLineSegments: !0,
    computeLineDistances: function computeLineDistances() {
      var t = this.geometry;
      if (t.isBufferGeometry) {
        if (null === t.index) {
          for (var e = t.attributes.position, n = [], r = 0, i = e.count; r < i; r += 2) {
            no.fromBufferAttribute(e, r), ro.fromBufferAttribute(e, r + 1), n[r] = 0 === r ? 0 : n[r - 1], n[r + 1] = n[r] + no.distanceTo(ro);
          }

          t.setAttribute("lineDistance", new sn(n, 1));
        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      } else if (t.isGeometry) for (var a = t.vertices, o = t.lineDistances, s = 0, c = a.length; s < c; s += 2) {
        no.copy(a[s]), ro.copy(a[s + 1]), o[s] = 0 === s ? 0 : o[s - 1], o[s + 1] = o[s] + no.distanceTo(ro);
      }
      return this;
    }
  }), ao.prototype = Object.assign(Object.create(eo.prototype), {
    constructor: ao,
    isLineLoop: !0
  }), oo.prototype = Object.create(Xe.prototype), oo.prototype.constructor = oo, oo.prototype.isPointsMaterial = !0, oo.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this;
  };
  var so = new Qt(),
      co = new Jt(),
      lo = new kt(),
      uo = new Mt();

  function ho(t, e) {
    we.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new _n(), this.material = void 0 !== e ? e : new oo(), this.updateMorphTargets();
  }

  function po(t, e, n, r, i, a, o) {
    var s = co.distanceSqToPoint(t);

    if (s < n) {
      var c = new Mt();
      co.closestPointToPoint(t, c), c.applyMatrix4(r);
      var l = i.ray.origin.distanceTo(c);
      if (l < i.near || l > i.far) return;
      a.push({
        distance: l,
        distanceToRay: Math.sqrt(s),
        point: c,
        index: e,
        face: null,
        object: o
      });
    }
  }

  function fo(t, e, n, r, i, a, o, s, c) {
    gt.call(this, t, e, n, r, i, a, o, s, c), this.format = void 0 !== o ? o : S, this.minFilter = void 0 !== a ? a : m, this.magFilter = void 0 !== i ? i : m, this.generateMipmaps = !1;
    var l = this;
    "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(function e() {
      l.needsUpdate = !0, t.requestVideoFrameCallback(e);
    });
  }

  function mo(t, e, n, r, i, a, o, s, c, l, u, h) {
    gt.call(this, null, a, o, s, c, l, r, i, u, h), this.image = {
      width: e,
      height: n
    }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1;
  }

  function vo(t, e, n, r, i, a, o, s, c) {
    gt.call(this, t, e, n, r, i, a, o, s, c), this.needsUpdate = !0;
  }

  function go(t, e, n, r, i, a, o, s, c, l) {
    if ((l = void 0 !== l ? l : E) !== E && l !== A) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    void 0 === n && l === E && (n = x), void 0 === n && l === A && (n = M), gt.call(this, null, r, i, a, o, s, l, n, c), this.image = {
      width: t,
      height: e
    }, this.magFilter = void 0 !== o ? o : d, this.minFilter = void 0 !== s ? s : d, this.flipY = !1, this.generateMipmaps = !1;
  }

  ho.prototype = Object.assign(Object.create(we.prototype), {
    constructor: ho,
    isPoints: !0,
    copy: function copy(t) {
      return we.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this;
    },
    raycast: function raycast(t, e) {
      var n = this.geometry,
          r = this.matrixWorld,
          i = t.params.Points.threshold;

      if (null === n.boundingSphere && n.computeBoundingSphere(), lo.copy(n.boundingSphere), lo.applyMatrix4(r), lo.radius += i, !1 !== t.ray.intersectsSphere(lo)) {
        so.copy(r).invert(), co.copy(t.ray).applyMatrix4(so);
        var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a;

        if (n.isBufferGeometry) {
          var s = n.index,
              c = n.attributes.position;
          if (null !== s) for (var l = s.array, u = 0, h = l.length; u < h; u++) {
            var d = l[u];
            uo.fromBufferAttribute(c, d), po(uo, d, o, r, t, e, this);
          } else for (var p = 0, f = c.count; p < f; p++) {
            uo.fromBufferAttribute(c, p), po(uo, p, o, r, t, e, this);
          }
        } else for (var m = n.vertices, v = 0, g = m.length; v < g; v++) {
          po(m[v], v, o, r, t, e, this);
        }
      }
    },
    updateMorphTargets: function updateMorphTargets() {
      var t = this.geometry;

      if (t.isBufferGeometry) {
        var e = t.morphAttributes,
            n = Object.keys(e);

        if (n.length > 0) {
          var r = e[n[0]];

          if (void 0 !== r) {
            this.morphTargetInfluences = [], this.morphTargetDictionary = {};

            for (var i = 0, a = r.length; i < a; i++) {
              var o = r[i].name || String(i);
              this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = i;
            }
          }
        }
      } else {
        var s = t.morphTargets;
        void 0 !== s && s.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  }), fo.prototype = Object.assign(Object.create(gt.prototype), {
    constructor: fo,
    clone: function clone() {
      return new this.constructor(this.image).copy(this);
    },
    isVideoTexture: !0,
    update: function update() {
      var t = this.image;
      !1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
    }
  }), mo.prototype = Object.create(gt.prototype), mo.prototype.constructor = mo, mo.prototype.isCompressedTexture = !0, vo.prototype = Object.create(gt.prototype), vo.prototype.constructor = vo, vo.prototype.isCanvasTexture = !0, go.prototype = Object.create(gt.prototype), go.prototype.constructor = go, go.prototype.isDepthTexture = !0;

  var yo = 0,
      xo = new Qt(),
      _o = new we(),
      bo = new Mt();

  function wo() {
    Object.defineProperty(this, "id", {
      value: yo += 2
    }), this.uuid = st.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1;
  }

  wo.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: wo,
    isGeometry: !0,
    applyMatrix4: function applyMatrix4(t) {
      for (var e = new ft().getNormalMatrix(t), n = 0, r = this.vertices.length; n < r; n++) {
        this.vertices[n].applyMatrix4(t);
      }

      for (var i = 0, a = this.faces.length; i < a; i++) {
        var o = this.faces[i];
        o.normal.applyMatrix3(e).normalize();

        for (var s = 0, c = o.vertexNormals.length; s < c; s++) {
          o.vertexNormals[s].applyMatrix3(e).normalize();
        }
      }

      return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this;
    },
    rotateX: function rotateX(t) {
      return xo.makeRotationX(t), this.applyMatrix4(xo), this;
    },
    rotateY: function rotateY(t) {
      return xo.makeRotationY(t), this.applyMatrix4(xo), this;
    },
    rotateZ: function rotateZ(t) {
      return xo.makeRotationZ(t), this.applyMatrix4(xo), this;
    },
    translate: function translate(t, e, n) {
      return xo.makeTranslation(t, e, n), this.applyMatrix4(xo), this;
    },
    scale: function scale(t, e, n) {
      return xo.makeScale(t, e, n), this.applyMatrix4(xo), this;
    },
    lookAt: function lookAt(t) {
      return _o.lookAt(t), _o.updateMatrix(), this.applyMatrix4(_o.matrix), this;
    },
    fromBufferGeometry: function fromBufferGeometry(t) {
      var e = this,
          n = null !== t.index ? t.index : void 0,
          r = t.attributes;
      if (void 0 === r.position) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
      var i = r.position,
          a = r.normal,
          o = r.color,
          s = r.uv,
          c = r.uv2;
      void 0 !== c && (this.faceVertexUvs[1] = []);

      for (var l = 0; l < i.count; l++) {
        e.vertices.push(new Mt().fromBufferAttribute(i, l)), void 0 !== o && e.colors.push(new We().fromBufferAttribute(o, l));
      }

      function u(t, n, r, i) {
        var l = void 0 === o ? [] : [e.colors[t].clone(), e.colors[n].clone(), e.colors[r].clone()],
            u = void 0 === a ? [] : [new Mt().fromBufferAttribute(a, t), new Mt().fromBufferAttribute(a, n), new Mt().fromBufferAttribute(a, r)],
            h = new je(t, n, r, u, l, i);
        e.faces.push(h), void 0 !== s && e.faceVertexUvs[0].push([new pt().fromBufferAttribute(s, t), new pt().fromBufferAttribute(s, n), new pt().fromBufferAttribute(s, r)]), void 0 !== c && e.faceVertexUvs[1].push([new pt().fromBufferAttribute(c, t), new pt().fromBufferAttribute(c, n), new pt().fromBufferAttribute(c, r)]);
      }

      var h = t.groups;
      if (h.length > 0) for (var d = 0; d < h.length; d++) {
        for (var p = h[d], f = p.start, m = f, v = f + p.count; m < v; m += 3) {
          void 0 !== n ? u(n.getX(m), n.getX(m + 1), n.getX(m + 2), p.materialIndex) : u(m, m + 1, m + 2, p.materialIndex);
        }
      } else if (void 0 !== n) for (var g = 0; g < n.count; g += 3) {
        u(n.getX(g), n.getX(g + 1), n.getX(g + 2));
      } else for (var y = 0; y < i.count; y += 3) {
        u(y, y + 1, y + 2);
      }
      return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this;
    },
    center: function center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(bo).negate(), this.translate(bo.x, bo.y, bo.z), this;
    },
    normalize: function normalize() {
      this.computeBoundingSphere();
      var t = this.boundingSphere.center,
          e = this.boundingSphere.radius,
          n = 0 === e ? 1 : 1 / e,
          r = new Qt();
      return r.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix4(r), this;
    },
    computeFaceNormals: function computeFaceNormals() {
      for (var t = new Mt(), e = new Mt(), n = 0, r = this.faces.length; n < r; n++) {
        var i = this.faces[n],
            a = this.vertices[i.a],
            o = this.vertices[i.b],
            s = this.vertices[i.c];
        t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), i.normal.copy(t);
      }
    },
    computeVertexNormals: function computeVertexNormals(t) {
      void 0 === t && (t = !0);

      for (var e = new Array(this.vertices.length), n = 0, r = this.vertices.length; n < r; n++) {
        e[n] = new Mt();
      }

      if (t) for (var i = new Mt(), a = new Mt(), o = 0, s = this.faces.length; o < s; o++) {
        var c = this.faces[o],
            l = this.vertices[c.a],
            u = this.vertices[c.b],
            h = this.vertices[c.c];
        i.subVectors(h, u), a.subVectors(l, u), i.cross(a), e[c.a].add(i), e[c.b].add(i), e[c.c].add(i);
      } else {
        this.computeFaceNormals();

        for (var d = 0, p = this.faces.length; d < p; d++) {
          var f = this.faces[d];
          e[f.a].add(f.normal), e[f.b].add(f.normal), e[f.c].add(f.normal);
        }
      }

      for (var m = 0, v = this.vertices.length; m < v; m++) {
        e[m].normalize();
      }

      for (var g = 0, y = this.faces.length; g < y; g++) {
        var x = this.faces[g],
            _ = x.vertexNormals;
        3 === _.length ? (_[0].copy(e[x.a]), _[1].copy(e[x.b]), _[2].copy(e[x.c])) : (_[0] = e[x.a].clone(), _[1] = e[x.b].clone(), _[2] = e[x.c].clone());
      }

      this.faces.length > 0 && (this.normalsNeedUpdate = !0);
    },
    computeFlatVertexNormals: function computeFlatVertexNormals() {
      this.computeFaceNormals();

      for (var t = 0, e = this.faces.length; t < e; t++) {
        var n = this.faces[t],
            r = n.vertexNormals;
        3 === r.length ? (r[0].copy(n.normal), r[1].copy(n.normal), r[2].copy(n.normal)) : (r[0] = n.normal.clone(), r[1] = n.normal.clone(), r[2] = n.normal.clone());
      }

      this.faces.length > 0 && (this.normalsNeedUpdate = !0);
    },
    computeMorphNormals: function computeMorphNormals() {
      for (var t = 0, e = this.faces.length; t < e; t++) {
        var n = this.faces[t];
        n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(), n.__originalVertexNormals || (n.__originalVertexNormals = []);

        for (var r = 0, i = n.vertexNormals.length; r < i; r++) {
          n.__originalVertexNormals[r] ? n.__originalVertexNormals[r].copy(n.vertexNormals[r]) : n.__originalVertexNormals[r] = n.vertexNormals[r].clone();
        }
      }

      var a = new wo();
      a.faces = this.faces;

      for (var o = 0, s = this.morphTargets.length; o < s; o++) {
        if (!this.morphNormals[o]) {
          this.morphNormals[o] = {}, this.morphNormals[o].faceNormals = [], this.morphNormals[o].vertexNormals = [];

          for (var c = this.morphNormals[o].faceNormals, l = this.morphNormals[o].vertexNormals, u = 0, h = this.faces.length; u < h; u++) {
            var d = new Mt(),
                p = {
              a: new Mt(),
              b: new Mt(),
              c: new Mt()
            };
            c.push(d), l.push(p);
          }
        }

        var f = this.morphNormals[o];
        a.vertices = this.morphTargets[o].vertices, a.computeFaceNormals(), a.computeVertexNormals();

        for (var m = 0, v = this.faces.length; m < v; m++) {
          var g = this.faces[m],
              y = f.faceNormals[m],
              x = f.vertexNormals[m];
          y.copy(g.normal), x.a.copy(g.vertexNormals[0]), x.b.copy(g.vertexNormals[1]), x.c.copy(g.vertexNormals[2]);
        }
      }

      for (var _ = 0, b = this.faces.length; _ < b; _++) {
        var w = this.faces[_];
        w.normal = w.__originalFaceNormal, w.vertexNormals = w.__originalVertexNormals;
      }
    },
    computeBoundingBox: function computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Et()), this.boundingBox.setFromPoints(this.vertices);
    },
    computeBoundingSphere: function computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new kt()), this.boundingSphere.setFromPoints(this.vertices);
    },
    merge: function merge(t, e, n) {
      if (void 0 === n && (n = 0), t && t.isGeometry) {
        var r,
            i = this.vertices.length,
            a = this.vertices,
            o = t.vertices,
            s = this.faces,
            c = t.faces,
            l = this.colors,
            u = t.colors;
        void 0 !== e && (r = new ft().getNormalMatrix(e));

        for (var h = 0, d = o.length; h < d; h++) {
          var p = o[h].clone();
          void 0 !== e && p.applyMatrix4(e), a.push(p);
        }

        for (var f = 0, m = u.length; f < m; f++) {
          l.push(u[f].clone());
        }

        for (var v = 0, g = c.length; v < g; v++) {
          var y = c[v],
              x = void 0,
              _ = void 0,
              b = y.vertexNormals,
              w = y.vertexColors,
              M = new je(y.a + i, y.b + i, y.c + i);

          M.normal.copy(y.normal), void 0 !== r && M.normal.applyMatrix3(r).normalize();

          for (var S = 0, T = b.length; S < T; S++) {
            x = b[S].clone(), void 0 !== r && x.applyMatrix3(r).normalize(), M.vertexNormals.push(x);
          }

          M.color.copy(y.color);

          for (var E = 0, A = w.length; E < A; E++) {
            _ = w[E], M.vertexColors.push(_.clone());
          }

          M.materialIndex = y.materialIndex + n, s.push(M);
        }

        for (var L = 0, R = t.faceVertexUvs.length; L < R; L++) {
          var C = t.faceVertexUvs[L];
          void 0 === this.faceVertexUvs[L] && (this.faceVertexUvs[L] = []);

          for (var P = 0, I = C.length; P < I; P++) {
            for (var N = C[P], D = [], O = 0, B = N.length; O < B; O++) {
              D.push(N[O].clone());
            }

            this.faceVertexUvs[L].push(D);
          }
        }
      } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
    },
    mergeMesh: function mergeMesh(t) {
      t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t);
    },
    mergeVertices: function mergeVertices(t) {
      void 0 === t && (t = 4);

      for (var e = {}, n = [], r = [], i = Math.pow(10, t), a = 0, o = this.vertices.length; a < o; a++) {
        var s = this.vertices[a],
            c = Math.round(s.x * i) + "_" + Math.round(s.y * i) + "_" + Math.round(s.z * i);
        void 0 === e[c] ? (e[c] = a, n.push(this.vertices[a]), r[a] = n.length - 1) : r[a] = r[e[c]];
      }

      for (var l = [], u = 0, h = this.faces.length; u < h; u++) {
        var d = this.faces[u];
        d.a = r[d.a], d.b = r[d.b], d.c = r[d.c];

        for (var p = [d.a, d.b, d.c], f = 0; f < 3; f++) {
          if (p[f] === p[(f + 1) % 3]) {
            l.push(u);
            break;
          }
        }
      }

      for (var m = l.length - 1; m >= 0; m--) {
        var v = l[m];
        this.faces.splice(v, 1);

        for (var g = 0, y = this.faceVertexUvs.length; g < y; g++) {
          this.faceVertexUvs[g].splice(v, 1);
        }
      }

      var x = this.vertices.length - n.length;
      return this.vertices = n, x;
    },
    setFromPoints: function setFromPoints(t) {
      this.vertices = [];

      for (var e = 0, n = t.length; e < n; e++) {
        var r = t[e];
        this.vertices.push(new Mt(r.x, r.y, r.z || 0));
      }

      return this;
    },
    sortFacesByMaterialIndex: function sortFacesByMaterialIndex() {
      for (var t = this.faces, e = t.length, n = 0; n < e; n++) {
        t[n]._id = n;
      }

      t.sort(function (t, e) {
        return t.materialIndex - e.materialIndex;
      });
      var r,
          i,
          a = this.faceVertexUvs[0],
          o = this.faceVertexUvs[1];
      a && a.length === e && (r = []), o && o.length === e && (i = []);

      for (var s = 0; s < e; s++) {
        var c = t[s]._id;
        r && r.push(a[c]), i && i.push(o[c]);
      }

      r && (this.faceVertexUvs[0] = r), i && (this.faceVertexUvs[1] = i);
    },
    toJSON: function toJSON() {
      var t = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON"
        }
      };

      if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
        var e = this.parameters;

        for (var n in e) {
          void 0 !== e[n] && (t[n] = e[n]);
        }

        return t;
      }

      for (var r = [], i = 0; i < this.vertices.length; i++) {
        var a = this.vertices[i];
        r.push(a.x, a.y, a.z);
      }

      for (var o = [], s = [], c = {}, l = [], u = {}, h = [], d = {}, p = 0; p < this.faces.length; p++) {
        var f = this.faces[p],
            m = void 0 !== this.faceVertexUvs[0][p],
            v = f.normal.length() > 0,
            g = f.vertexNormals.length > 0,
            y = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b,
            x = f.vertexColors.length > 0,
            _ = 0;

        if (_ = S(_, 0, 0), _ = S(_, 1, !0), _ = S(_, 2, !1), _ = S(_, 3, m), _ = S(_, 4, v), _ = S(_, 5, g), _ = S(_, 6, y), _ = S(_, 7, x), o.push(_), o.push(f.a, f.b, f.c), o.push(f.materialIndex), m) {
          var b = this.faceVertexUvs[0][p];
          o.push(A(b[0]), A(b[1]), A(b[2]));
        }

        if (v && o.push(T(f.normal)), g) {
          var w = f.vertexNormals;
          o.push(T(w[0]), T(w[1]), T(w[2]));
        }

        if (y && o.push(E(f.color)), x) {
          var M = f.vertexColors;
          o.push(E(M[0]), E(M[1]), E(M[2]));
        }
      }

      function S(t, e, n) {
        return n ? t | 1 << e : t & ~(1 << e);
      }

      function T(t) {
        var e = t.x.toString() + t.y.toString() + t.z.toString();
        return void 0 !== c[e] || (c[e] = s.length / 3, s.push(t.x, t.y, t.z)), c[e];
      }

      function E(t) {
        var e = t.r.toString() + t.g.toString() + t.b.toString();
        return void 0 !== u[e] || (u[e] = l.length, l.push(t.getHex())), u[e];
      }

      function A(t) {
        var e = t.x.toString() + t.y.toString();
        return void 0 !== d[e] || (d[e] = h.length / 2, h.push(t.x, t.y)), d[e];
      }

      return t.data = {}, t.data.vertices = r, t.data.normals = s, l.length > 0 && (t.data.colors = l), h.length > 0 && (t.data.uvs = [h]), t.data.faces = o, t;
    },
    clone: function clone() {
      return new wo().copy(this);
    },
    copy: function copy(t) {
      this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;

      for (var e = t.vertices, n = 0, r = e.length; n < r; n++) {
        this.vertices.push(e[n].clone());
      }

      for (var i = t.colors, a = 0, o = i.length; a < o; a++) {
        this.colors.push(i[a].clone());
      }

      for (var s = t.faces, c = 0, l = s.length; c < l; c++) {
        this.faces.push(s[c].clone());
      }

      for (var u = 0, h = t.faceVertexUvs.length; u < h; u++) {
        var d = t.faceVertexUvs[u];
        void 0 === this.faceVertexUvs[u] && (this.faceVertexUvs[u] = []);

        for (var p = 0, f = d.length; p < f; p++) {
          for (var m = d[p], v = [], g = 0, y = m.length; g < y; g++) {
            var x = m[g];
            v.push(x.clone());
          }

          this.faceVertexUvs[u].push(v);
        }
      }

      for (var _ = t.morphTargets, b = 0, w = _.length; b < w; b++) {
        var M = {};

        if (M.name = _[b].name, void 0 !== _[b].vertices) {
          M.vertices = [];

          for (var S = 0, T = _[b].vertices.length; S < T; S++) {
            M.vertices.push(_[b].vertices[S].clone());
          }
        }

        if (void 0 !== _[b].normals) {
          M.normals = [];

          for (var E = 0, A = _[b].normals.length; E < A; E++) {
            M.normals.push(_[b].normals[E].clone());
          }
        }

        this.morphTargets.push(M);
      }

      for (var L = t.morphNormals, R = 0, C = L.length; R < C; R++) {
        var P = {};

        if (void 0 !== L[R].vertexNormals) {
          P.vertexNormals = [];

          for (var I = 0, N = L[R].vertexNormals.length; I < N; I++) {
            var D = L[R].vertexNormals[I],
                O = {};
            O.a = D.a.clone(), O.b = D.b.clone(), O.c = D.c.clone(), P.vertexNormals.push(O);
          }
        }

        if (void 0 !== L[R].faceNormals) {
          P.faceNormals = [];

          for (var B = 0, z = L[R].faceNormals.length; B < z; B++) {
            P.faceNormals.push(L[R].faceNormals[B].clone());
          }
        }

        this.morphNormals.push(P);
      }

      for (var U = t.skinWeights, F = 0, G = U.length; F < G; F++) {
        this.skinWeights.push(U[F].clone());
      }

      for (var H = t.skinIndices, k = 0, V = H.length; k < V; k++) {
        this.skinIndices.push(H[k].clone());
      }

      for (var W = t.lineDistances, j = 0, q = W.length; j < q; j++) {
        this.lineDistances.push(W[j]);
      }

      var X = t.boundingBox;
      null !== X && (this.boundingBox = X.clone());
      var Y = t.boundingSphere;
      return null !== Y && (this.boundingSphere = Y.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this;
    },
    dispose: function dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });

  var Mo = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      return (s = t.call(this) || this).type = "BoxGeometry", s.parameters = {
        width: e,
        height: n,
        depth: r,
        widthSegments: i,
        heightSegments: a,
        depthSegments: o
      }, s.fromBufferGeometry(new Hn(e, n, r, i, a, o)), s.mergeVertices(), s;
    }

    return ut(e, t), e;
  }(wo),
      So = function (t) {
    function e(e, n, r, i) {
      var a;
      void 0 === e && (e = 1), void 0 === n && (n = 8), void 0 === r && (r = 0), void 0 === i && (i = 2 * Math.PI), (a = t.call(this) || this).type = "CircleBufferGeometry", a.parameters = {
        radius: e,
        segments: n,
        thetaStart: r,
        thetaLength: i
      }, n = Math.max(3, n);
      var o = [],
          s = [],
          c = [],
          l = [],
          u = new Mt(),
          h = new pt();
      s.push(0, 0, 0), c.push(0, 0, 1), l.push(.5, .5);

      for (var d = 0, p = 3; d <= n; d++, p += 3) {
        var f = r + d / n * i;
        u.x = e * Math.cos(f), u.y = e * Math.sin(f), s.push(u.x, u.y, u.z), c.push(0, 0, 1), h.x = (s[p] / e + 1) / 2, h.y = (s[p + 1] / e + 1) / 2, l.push(h.x, h.y);
      }

      for (var m = 1; m <= n; m++) {
        o.push(m, m + 1, 0);
      }

      return a.setIndex(o), a.setAttribute("position", new sn(s, 3)), a.setAttribute("normal", new sn(c, 3)), a.setAttribute("uv", new sn(l, 2)), a;
    }

    return ut(e, t), e;
  }(_n),
      To = function (t) {
    function e(e, n, r, i) {
      var a;
      return (a = t.call(this) || this).type = "CircleGeometry", a.parameters = {
        radius: e,
        segments: n,
        thetaStart: r,
        thetaLength: i
      }, a.fromBufferGeometry(new So(e, n, r, i)), a.mergeVertices(), a;
    }

    return ut(e, t), e;
  }(wo),
      Eo = function (t) {
    function e(e, n, r, i, a, o, s, c) {
      var l;
      void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 8), void 0 === a && (a = 1), void 0 === o && (o = !1), void 0 === s && (s = 0), void 0 === c && (c = 2 * Math.PI), (l = t.call(this) || this).type = "CylinderBufferGeometry", l.parameters = {
        radiusTop: e,
        radiusBottom: n,
        height: r,
        radialSegments: i,
        heightSegments: a,
        openEnded: o,
        thetaStart: s,
        thetaLength: c
      };
      var u = ht(l);
      i = Math.floor(i), a = Math.floor(a);
      var h = [],
          d = [],
          p = [],
          f = [],
          m = 0,
          v = [],
          g = r / 2,
          y = 0;

      function x(t) {
        for (var r = m, a = new pt(), o = new Mt(), l = 0, v = !0 === t ? e : n, x = !0 === t ? 1 : -1, _ = 1; _ <= i; _++) {
          d.push(0, g * x, 0), p.push(0, x, 0), f.push(.5, .5), m++;
        }

        for (var b = m, w = 0; w <= i; w++) {
          var M = w / i * c + s,
              S = Math.cos(M),
              T = Math.sin(M);
          o.x = v * T, o.y = g * x, o.z = v * S, d.push(o.x, o.y, o.z), p.push(0, x, 0), a.x = .5 * S + .5, a.y = .5 * T * x + .5, f.push(a.x, a.y), m++;
        }

        for (var E = 0; E < i; E++) {
          var A = r + E,
              L = b + E;
          !0 === t ? h.push(L, L + 1, A) : h.push(L + 1, L, A), l += 3;
        }

        u.addGroup(y, l, !0 === t ? 1 : 2), y += l;
      }

      return function () {
        for (var t = new Mt(), o = new Mt(), l = 0, x = (n - e) / r, _ = 0; _ <= a; _++) {
          for (var b = [], w = _ / a, M = w * (n - e) + e, S = 0; S <= i; S++) {
            var T = S / i,
                E = T * c + s,
                A = Math.sin(E),
                L = Math.cos(E);
            o.x = M * A, o.y = -w * r + g, o.z = M * L, d.push(o.x, o.y, o.z), t.set(A, x, L).normalize(), p.push(t.x, t.y, t.z), f.push(T, 1 - w), b.push(m++);
          }

          v.push(b);
        }

        for (var R = 0; R < i; R++) {
          for (var C = 0; C < a; C++) {
            var P = v[C][R],
                I = v[C + 1][R],
                N = v[C + 1][R + 1],
                D = v[C][R + 1];
            h.push(P, I, D), h.push(I, N, D), l += 6;
          }
        }

        u.addGroup(y, l, 0), y += l;
      }(), !1 === o && (e > 0 && x(!0), n > 0 && x(!1)), l.setIndex(h), l.setAttribute("position", new sn(d, 3)), l.setAttribute("normal", new sn(p, 3)), l.setAttribute("uv", new sn(f, 2)), l;
    }

    return ut(e, t), e;
  }(_n),
      Ao = function (t) {
    function e(e, n, r, i, a, o, s, c) {
      var l;
      return (l = t.call(this) || this).type = "CylinderGeometry", l.parameters = {
        radiusTop: e,
        radiusBottom: n,
        height: r,
        radialSegments: i,
        heightSegments: a,
        openEnded: o,
        thetaStart: s,
        thetaLength: c
      }, l.fromBufferGeometry(new Eo(e, n, r, i, a, o, s, c)), l.mergeVertices(), l;
    }

    return ut(e, t), e;
  }(wo),
      Lo = function (t) {
    function e(e, n, r, i, a, o, s) {
      var c;
      return (c = t.call(this, 0, e, n, r, i, a, o, s) || this).type = "ConeGeometry", c.parameters = {
        radius: e,
        height: n,
        radialSegments: r,
        heightSegments: i,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
      }, c;
    }

    return ut(e, t), e;
  }(Ao),
      Ro = function (t) {
    function e(e, n, r, i, a, o, s) {
      var c;
      return void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === r && (r = 8), void 0 === i && (i = 1), void 0 === a && (a = !1), void 0 === o && (o = 0), void 0 === s && (s = 2 * Math.PI), (c = t.call(this, 0, e, n, r, i, a, o, s) || this).type = "ConeBufferGeometry", c.parameters = {
        radius: e,
        height: n,
        radialSegments: r,
        heightSegments: i,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
      }, c;
    }

    return ut(e, t), e;
  }(Eo),
      Co = function (t) {
    function e(e, n, r, i) {
      var a;
      void 0 === r && (r = 1), void 0 === i && (i = 0), (a = t.call(this) || this).type = "PolyhedronBufferGeometry", a.parameters = {
        vertices: e,
        indices: n,
        radius: r,
        detail: i
      };
      var o = [],
          s = [];

      function c(t, e, n, r) {
        for (var i = r + 1, a = [], o = 0; o <= i; o++) {
          a[o] = [];

          for (var s = t.clone().lerp(n, o / i), c = e.clone().lerp(n, o / i), u = i - o, h = 0; h <= u; h++) {
            a[o][h] = 0 === h && o === i ? s : s.clone().lerp(c, h / u);
          }
        }

        for (var d = 0; d < i; d++) {
          for (var p = 0; p < 2 * (i - d) - 1; p++) {
            var f = Math.floor(p / 2);
            p % 2 == 0 ? (l(a[d][f + 1]), l(a[d + 1][f]), l(a[d][f])) : (l(a[d][f + 1]), l(a[d + 1][f + 1]), l(a[d + 1][f]));
          }
        }
      }

      function l(t) {
        o.push(t.x, t.y, t.z);
      }

      function u(t, n) {
        var r = 3 * t;
        n.x = e[r + 0], n.y = e[r + 1], n.z = e[r + 2];
      }

      function h(t, e, n, r) {
        r < 0 && 1 === t.x && (s[e] = t.x - 1), 0 === n.x && 0 === n.z && (s[e] = r / 2 / Math.PI + .5);
      }

      function d(t) {
        return Math.atan2(t.z, -t.x);
      }

      function p(t) {
        return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z));
      }

      return function (t) {
        for (var e = new Mt(), r = new Mt(), i = new Mt(), a = 0; a < n.length; a += 3) {
          u(n[a + 0], e), u(n[a + 1], r), u(n[a + 2], i), c(e, r, i, t);
        }
      }(i), function (t) {
        for (var e = new Mt(), n = 0; n < o.length; n += 3) {
          e.x = o[n + 0], e.y = o[n + 1], e.z = o[n + 2], e.normalize().multiplyScalar(t), o[n + 0] = e.x, o[n + 1] = e.y, o[n + 2] = e.z;
        }
      }(r), function () {
        for (var t = new Mt(), e = 0; e < o.length; e += 3) {
          t.x = o[e + 0], t.y = o[e + 1], t.z = o[e + 2];
          var n = d(t) / 2 / Math.PI + .5,
              r = p(t) / Math.PI + .5;
          s.push(n, 1 - r);
        }

        (function () {
          for (var t = new Mt(), e = new Mt(), n = new Mt(), r = new Mt(), i = new pt(), a = new pt(), c = new pt(), l = 0, u = 0; l < o.length; l += 9, u += 6) {
            t.set(o[l + 0], o[l + 1], o[l + 2]), e.set(o[l + 3], o[l + 4], o[l + 5]), n.set(o[l + 6], o[l + 7], o[l + 8]), i.set(s[u + 0], s[u + 1]), a.set(s[u + 2], s[u + 3]), c.set(s[u + 4], s[u + 5]), r.copy(t).add(e).add(n).divideScalar(3);
            var p = d(r);
            h(i, u + 0, t, p), h(a, u + 2, e, p), h(c, u + 4, n, p);
          }
        })(), function () {
          for (var t = 0; t < s.length; t += 6) {
            var e = s[t + 0],
                n = s[t + 2],
                r = s[t + 4],
                i = Math.max(e, n, r),
                a = Math.min(e, n, r);
            i > .9 && a < .1 && (e < .2 && (s[t + 0] += 1), n < .2 && (s[t + 2] += 1), r < .2 && (s[t + 4] += 1));
          }
        }();
      }(), a.setAttribute("position", new sn(o, 3)), a.setAttribute("normal", new sn(o.slice(), 3)), a.setAttribute("uv", new sn(s, 2)), 0 === i ? a.computeVertexNormals() : a.normalizeNormals(), a;
    }

    return ut(e, t), e;
  }(_n),
      Po = function (t) {
    function e(e, n) {
      var r;
      void 0 === e && (e = 1), void 0 === n && (n = 0);
      var i = (1 + Math.sqrt(5)) / 2,
          a = 1 / i,
          o = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -a, -i, 0, -a, i, 0, a, -i, 0, a, i, -a, -i, 0, -a, i, 0, a, -i, 0, a, i, 0, -i, 0, -a, i, 0, -a, -i, 0, a, i, 0, a];
      return (r = t.call(this, o, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, n) || this).type = "DodecahedronBufferGeometry", r.parameters = {
        radius: e,
        detail: n
      }, r;
    }

    return ut(e, t), e;
  }(Co),
      Io = function (t) {
    function e(e, n) {
      var r;
      return (r = t.call(this) || this).type = "DodecahedronGeometry", r.parameters = {
        radius: e,
        detail: n
      }, r.fromBufferGeometry(new Po(e, n)), r.mergeVertices(), r;
    }

    return ut(e, t), e;
  }(wo),
      No = new Mt(),
      Do = new Mt(),
      Oo = new Mt(),
      Bo = new ze(),
      zo = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "EdgesGeometry", r.parameters = {
        thresholdAngle: n
      }, n = void 0 !== n ? n : 1, e.isGeometry && (e = new _n().fromGeometry(e));

      for (var i = Math.pow(10, 4), a = Math.cos(st.DEG2RAD * n), o = e.getIndex(), s = e.getAttribute("position"), c = o ? o.count : s.count, l = [0, 0, 0], u = ["a", "b", "c"], h = new Array(3), d = {}, p = [], f = 0; f < c; f += 3) {
        o ? (l[0] = o.getX(f), l[1] = o.getX(f + 1), l[2] = o.getX(f + 2)) : (l[0] = f, l[1] = f + 1, l[2] = f + 2);
        var m = Bo.a,
            v = Bo.b,
            g = Bo.c;
        if (m.fromBufferAttribute(s, l[0]), v.fromBufferAttribute(s, l[1]), g.fromBufferAttribute(s, l[2]), Bo.getNormal(Oo), h[0] = Math.round(m.x * i) + "," + Math.round(m.y * i) + "," + Math.round(m.z * i), h[1] = Math.round(v.x * i) + "," + Math.round(v.y * i) + "," + Math.round(v.z * i), h[2] = Math.round(g.x * i) + "," + Math.round(g.y * i) + "," + Math.round(g.z * i), h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0]) for (var y = 0; y < 3; y++) {
          var x = (y + 1) % 3,
              _ = h[y],
              b = h[x],
              w = Bo[u[y]],
              M = Bo[u[x]],
              S = _ + "_" + b,
              T = b + "_" + _;
          T in d && d[T] ? (Oo.dot(d[T].normal) <= a && (p.push(w.x, w.y, w.z), p.push(M.x, M.y, M.z)), d[T] = null) : S in d || (d[S] = {
            index0: l[y],
            index1: l[x],
            normal: Oo.clone()
          });
        }
      }

      for (var E in d) {
        if (d[E]) {
          var A = d[E],
              L = A.index0,
              R = A.index1;
          No.fromBufferAttribute(s, L), Do.fromBufferAttribute(s, R), p.push(No.x, No.y, No.z), p.push(Do.x, Do.y, Do.z);
        }
      }

      return r.setAttribute("position", new sn(p, 3)), r;
    }

    return ut(e, t), e;
  }(_n),
      Uo = function Uo(t, e, n) {
    n = n || 2;
    var r,
        i,
        a,
        o,
        s,
        c,
        l,
        u = e && e.length,
        h = u ? e[0] * n : t.length,
        d = Fo(t, 0, h, n, !0),
        p = [];
    if (!d || d.next === d.prev) return p;

    if (u && (d = function (t, e, n, r) {
      var i,
          a,
          o,
          s = [];

      for (i = 0, a = e.length; i < a; i++) {
        (o = Fo(t, e[i] * r, i < a - 1 ? e[i + 1] * r : t.length, r, !1)) === o.next && (o.steiner = !0), s.push(Jo(o));
      }

      for (s.sort(qo), i = 0; i < s.length; i++) {
        Xo(s[i], n), n = Go(n, n.next);
      }

      return n;
    }(t, e, d, n)), t.length > 80 * n) {
      r = a = t[0], i = o = t[1];

      for (var f = n; f < h; f += n) {
        (s = t[f]) < r && (r = s), (c = t[f + 1]) < i && (i = c), s > a && (a = s), c > o && (o = c);
      }

      l = 0 !== (l = Math.max(a - r, o - i)) ? 1 / l : 0;
    }

    return Ho(d, p, n, r, i, l), p;
  };

  function Fo(t, e, n, r, i) {
    var a, o;
    if (i === function (t, e, n, r) {
      for (var i = 0, a = e, o = n - r; a < n; a += r) {
        i += (t[o] - t[a]) * (t[a + 1] + t[o + 1]), o = a;
      }

      return i;
    }(t, e, n, r) > 0) for (a = e; a < n; a += r) {
      o = os(a, t[a], t[a + 1], o);
    } else for (a = n - r; a >= e; a -= r) {
      o = os(a, t[a], t[a + 1], o);
    }
    return o && ts(o, o.next) && (ss(o), o = o.next), o;
  }

  function Go(t, e) {
    if (!t) return t;
    e || (e = t);
    var n,
        r = t;

    do {
      if (n = !1, r.steiner || !ts(r, r.next) && 0 !== $o(r.prev, r, r.next)) r = r.next;else {
        if (ss(r), (r = e = r.prev) === r.next) break;
        n = !0;
      }
    } while (n || r !== e);

    return e;
  }

  function Ho(t, e, n, r, i, a, o) {
    if (t) {
      !o && a && function (t, e, n, r) {
        var i = t;

        do {
          null === i.z && (i.z = Zo(i.x, i.y, e, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
        } while (i !== t);

        i.prevZ.nextZ = null, i.prevZ = null, function (t) {
          var e,
              n,
              r,
              i,
              a,
              o,
              s,
              c,
              l = 1;

          do {
            for (n = t, t = null, a = null, o = 0; n;) {
              for (o++, r = n, s = 0, e = 0; e < l && (s++, r = r.nextZ); e++) {
                ;
              }

              for (c = l; s > 0 || c > 0 && r;) {
                0 !== s && (0 === c || !r || n.z <= r.z) ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, c--), a ? a.nextZ = i : t = i, i.prevZ = a, a = i;
              }

              n = r;
            }

            a.nextZ = null, l *= 2;
          } while (o > 1);
        }(i);
      }(t, r, i, a);

      for (var s, c, l = t; t.prev !== t.next;) {
        if (s = t.prev, c = t.next, a ? Vo(t, r, i, a) : ko(t)) e.push(s.i / n), e.push(t.i / n), e.push(c.i / n), ss(t), t = c.next, l = c.next;else if ((t = c) === l) {
          o ? 1 === o ? Ho(t = Wo(Go(t), e, n), e, n, r, i, a, 2) : 2 === o && jo(t, e, n, r, i, a) : Ho(Go(t), e, n, r, i, a, 1);
          break;
        }
      }
    }
  }

  function ko(t) {
    var e = t.prev,
        n = t,
        r = t.next;
    if ($o(e, n, r) >= 0) return !1;

    for (var i = t.next.next; i !== t.prev;) {
      if (Qo(e.x, e.y, n.x, n.y, r.x, r.y, i.x, i.y) && $o(i.prev, i, i.next) >= 0) return !1;
      i = i.next;
    }

    return !0;
  }

  function Vo(t, e, n, r) {
    var i = t.prev,
        a = t,
        o = t.next;
    if ($o(i, a, o) >= 0) return !1;

    for (var s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, c = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, l = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, u = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, h = Zo(s, c, e, n, r), d = Zo(l, u, e, n, r), p = t.prevZ, f = t.nextZ; p && p.z >= h && f && f.z <= d;) {
      if (p !== t.prev && p !== t.next && Qo(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && $o(p.prev, p, p.next) >= 0) return !1;
      if (p = p.prevZ, f !== t.prev && f !== t.next && Qo(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && $o(f.prev, f, f.next) >= 0) return !1;
      f = f.nextZ;
    }

    for (; p && p.z >= h;) {
      if (p !== t.prev && p !== t.next && Qo(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && $o(p.prev, p, p.next) >= 0) return !1;
      p = p.prevZ;
    }

    for (; f && f.z <= d;) {
      if (f !== t.prev && f !== t.next && Qo(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && $o(f.prev, f, f.next) >= 0) return !1;
      f = f.nextZ;
    }

    return !0;
  }

  function Wo(t, e, n) {
    var r = t;

    do {
      var i = r.prev,
          a = r.next.next;
      !ts(i, a) && es(i, r, r.next, a) && is(i, a) && is(a, i) && (e.push(i.i / n), e.push(r.i / n), e.push(a.i / n), ss(r), ss(r.next), r = t = a), r = r.next;
    } while (r !== t);

    return Go(r);
  }

  function jo(t, e, n, r, i, a) {
    var o = t;

    do {
      for (var s = o.next.next; s !== o.prev;) {
        if (o.i !== s.i && Ko(o, s)) {
          var c = as(o, s);
          return o = Go(o, o.next), c = Go(c, c.next), Ho(o, e, n, r, i, a), void Ho(c, e, n, r, i, a);
        }

        s = s.next;
      }

      o = o.next;
    } while (o !== t);
  }

  function qo(t, e) {
    return t.x - e.x;
  }

  function Xo(t, e) {
    if (e = function (t, e) {
      var n,
          r = e,
          i = t.x,
          a = t.y,
          o = -1 / 0;

      do {
        if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
          var s = r.x + (a - r.y) * (r.next.x - r.x) / (r.next.y - r.y);

          if (s <= i && s > o) {
            if (o = s, s === i) {
              if (a === r.y) return r;
              if (a === r.next.y) return r.next;
            }

            n = r.x < r.next.x ? r : r.next;
          }
        }

        r = r.next;
      } while (r !== e);

      if (!n) return null;
      if (i === o) return n;
      var c,
          l = n,
          u = n.x,
          h = n.y,
          d = 1 / 0;
      r = n;

      do {
        i >= r.x && r.x >= u && i !== r.x && Qo(a < h ? i : o, a, u, h, a < h ? o : i, a, r.x, r.y) && (c = Math.abs(a - r.y) / (i - r.x), is(r, t) && (c < d || c === d && (r.x > n.x || r.x === n.x && Yo(n, r))) && (n = r, d = c)), r = r.next;
      } while (r !== l);

      return n;
    }(t, e)) {
      var n = as(e, t);
      Go(e, e.next), Go(n, n.next);
    }
  }

  function Yo(t, e) {
    return $o(t.prev, t, e.prev) < 0 && $o(e.next, t, t.next) < 0;
  }

  function Zo(t, e, n, r, i) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
  }

  function Jo(t) {
    var e = t,
        n = t;

    do {
      (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
    } while (e !== t);

    return n;
  }

  function Qo(t, e, n, r, i, a, o, s) {
    return (i - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (r - s) - (n - o) * (e - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0;
  }

  function Ko(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && !function (t, e) {
      var n = t;

      do {
        if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && es(n, n.next, t, e)) return !0;
        n = n.next;
      } while (n !== t);

      return !1;
    }(t, e) && (is(t, e) && is(e, t) && function (t, e) {
      var n = t,
          r = !1,
          i = (t.x + e.x) / 2,
          a = (t.y + e.y) / 2;

      do {
        n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
      } while (n !== t);

      return r;
    }(t, e) && ($o(t.prev, t, e.prev) || $o(t, e.prev, e)) || ts(t, e) && $o(t.prev, t, t.next) > 0 && $o(e.prev, e, e.next) > 0);
  }

  function $o(t, e, n) {
    return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
  }

  function ts(t, e) {
    return t.x === e.x && t.y === e.y;
  }

  function es(t, e, n, r) {
    var i = rs($o(t, e, n)),
        a = rs($o(t, e, r)),
        o = rs($o(n, r, t)),
        s = rs($o(n, r, e));
    return i !== a && o !== s || !(0 !== i || !ns(t, n, e)) || !(0 !== a || !ns(t, r, e)) || !(0 !== o || !ns(n, t, r)) || !(0 !== s || !ns(n, e, r));
  }

  function ns(t, e, n) {
    return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y);
  }

  function rs(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  }

  function is(t, e) {
    return $o(t.prev, t, t.next) < 0 ? $o(t, e, t.next) >= 0 && $o(t, t.prev, e) >= 0 : $o(t, e, t.prev) < 0 || $o(t, t.next, e) < 0;
  }

  function as(t, e) {
    var n = new cs(t.i, t.x, t.y),
        r = new cs(e.i, e.x, e.y),
        i = t.next,
        a = e.prev;
    return t.next = e, e.prev = t, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
  }

  function os(t, e, n, r) {
    var i = new cs(t, e, n);
    return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
  }

  function ss(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
  }

  function cs(t, e, n) {
    this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
  }

  var ls = {
    area: function area(t) {
      for (var e = t.length, n = 0, r = e - 1, i = 0; i < e; r = i++) {
        n += t[r].x * t[i].y - t[i].x * t[r].y;
      }

      return .5 * n;
    },
    isClockWise: function isClockWise(t) {
      return ls.area(t) < 0;
    },
    triangulateShape: function triangulateShape(t, e) {
      var n = [],
          r = [],
          i = [];
      us(t), hs(n, t);
      var a = t.length;
      e.forEach(us);

      for (var o = 0; o < e.length; o++) {
        r.push(a), a += e[o].length, hs(n, e[o]);
      }

      for (var s = Uo(n, r), c = 0; c < s.length; c += 3) {
        i.push(s.slice(c, c + 3));
      }

      return i;
    }
  };

  function us(t) {
    var e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop();
  }

  function hs(t, e) {
    for (var n = 0; n < e.length; n++) {
      t.push(e[n].x), t.push(e[n].y);
    }
  }

  var ds = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).type = "ExtrudeBufferGeometry", r.parameters = {
        shapes: e,
        options: n
      }, e = Array.isArray(e) ? e : [e];

      for (var i = ht(r), a = [], o = [], s = 0, c = e.length; s < c; s++) {
        l(e[s]);
      }

      function l(t) {
        var e = [],
            r = void 0 !== n.curveSegments ? n.curveSegments : 12,
            s = void 0 !== n.steps ? n.steps : 1,
            c = void 0 !== n.depth ? n.depth : 100,
            l = void 0 === n.bevelEnabled || n.bevelEnabled,
            u = void 0 !== n.bevelThickness ? n.bevelThickness : 6,
            h = void 0 !== n.bevelSize ? n.bevelSize : u - 2,
            d = void 0 !== n.bevelOffset ? n.bevelOffset : 0,
            p = void 0 !== n.bevelSegments ? n.bevelSegments : 3,
            f = n.extrudePath,
            m = void 0 !== n.UVGenerator ? n.UVGenerator : ps;
        void 0 !== n.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = n.amount);

        var v,
            g,
            y,
            x,
            _,
            b = !1;

        f && (v = f.getSpacedPoints(s), b = !0, l = !1, g = f.computeFrenetFrames(s, !1), y = new Mt(), x = new Mt(), _ = new Mt()), l || (p = 0, u = 0, h = 0, d = 0);
        var w = t.extractPoints(r),
            M = w.shape,
            S = w.holes;

        if (!ls.isClockWise(M)) {
          M = M.reverse();

          for (var T = 0, E = S.length; T < E; T++) {
            var A = S[T];
            ls.isClockWise(A) && (S[T] = A.reverse());
          }
        }

        for (var L = ls.triangulateShape(M, S), R = M, C = 0, P = S.length; C < P; C++) {
          var I = S[C];
          M = M.concat(I);
        }

        function N(t, e, n) {
          return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t);
        }

        var D = M.length,
            O = L.length;

        function B(t, e, n) {
          var r,
              i,
              a,
              o = t.x - e.x,
              s = t.y - e.y,
              c = n.x - t.x,
              l = n.y - t.y,
              u = o * o + s * s,
              h = o * l - s * c;

          if (Math.abs(h) > Number.EPSILON) {
            var d = Math.sqrt(u),
                p = Math.sqrt(c * c + l * l),
                f = e.x - s / d,
                m = e.y + o / d,
                v = ((n.x - l / p - f) * l - (n.y + c / p - m) * c) / (o * l - s * c),
                g = (r = f + o * v - t.x) * r + (i = m + s * v - t.y) * i;
            if (g <= 2) return new pt(r, i);
            a = Math.sqrt(g / 2);
          } else {
            var y = !1;
            o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(l) && (y = !0), y ? (r = -s, i = o, a = Math.sqrt(u)) : (r = o, i = s, a = Math.sqrt(u / 2));
          }

          return new pt(r / a, i / a);
        }

        for (var z = [], U = 0, F = R.length, G = F - 1, H = U + 1; U < F; U++, G++, H++) {
          G === F && (G = 0), H === F && (H = 0), z[U] = B(R[U], R[G], R[H]);
        }

        for (var k, V = [], W = z.concat(), j = 0, q = S.length; j < q; j++) {
          var X = S[j];
          k = [];

          for (var Y = 0, Z = X.length, J = Z - 1, Q = Y + 1; Y < Z; Y++, J++, Q++) {
            J === Z && (J = 0), Q === Z && (Q = 0), k[Y] = B(X[Y], X[J], X[Q]);
          }

          V.push(k), W = W.concat(k);
        }

        for (var K = 0; K < p; K++) {
          for (var $ = K / p, tt = u * Math.cos($ * Math.PI / 2), et = h * Math.sin($ * Math.PI / 2) + d, nt = 0, rt = R.length; nt < rt; nt++) {
            var it = N(R[nt], z[nt], et);
            Nt(it.x, it.y, -tt);
          }

          for (var at = 0, ot = S.length; at < ot; at++) {
            var st = S[at];
            k = V[at];

            for (var ct = 0, lt = st.length; ct < lt; ct++) {
              var ut = N(st[ct], k[ct], et);
              Nt(ut.x, ut.y, -tt);
            }
          }
        }

        for (var ht = h + d, dt = 0; dt < D; dt++) {
          var ft = l ? N(M[dt], W[dt], ht) : M[dt];
          b ? (x.copy(g.normals[0]).multiplyScalar(ft.x), y.copy(g.binormals[0]).multiplyScalar(ft.y), _.copy(v[0]).add(x).add(y), Nt(_.x, _.y, _.z)) : Nt(ft.x, ft.y, 0);
        }

        for (var mt = 1; mt <= s; mt++) {
          for (var vt = 0; vt < D; vt++) {
            var gt = l ? N(M[vt], W[vt], ht) : M[vt];
            b ? (x.copy(g.normals[mt]).multiplyScalar(gt.x), y.copy(g.binormals[mt]).multiplyScalar(gt.y), _.copy(v[mt]).add(x).add(y), Nt(_.x, _.y, _.z)) : Nt(gt.x, gt.y, c / s * mt);
          }
        }

        for (var yt = p - 1; yt >= 0; yt--) {
          for (var xt = yt / p, _t = u * Math.cos(xt * Math.PI / 2), bt = h * Math.sin(xt * Math.PI / 2) + d, wt = 0, St = R.length; wt < St; wt++) {
            var Tt = N(R[wt], z[wt], bt);
            Nt(Tt.x, Tt.y, c + _t);
          }

          for (var Et = 0, At = S.length; Et < At; Et++) {
            var Lt = S[Et];
            k = V[Et];

            for (var Rt = 0, Ct = Lt.length; Rt < Ct; Rt++) {
              var Pt = N(Lt[Rt], k[Rt], bt);
              b ? Nt(Pt.x, Pt.y + v[s - 1].y, v[s - 1].x + _t) : Nt(Pt.x, Pt.y, c + _t);
            }
          }
        }

        function It(t, e) {
          for (var n = t.length; --n >= 0;) {
            var r = n,
                i = n - 1;
            i < 0 && (i = t.length - 1);

            for (var a = 0, o = s + 2 * p; a < o; a++) {
              var c = D * a,
                  l = D * (a + 1);
              Ot(e + r + c, e + i + c, e + i + l, e + r + l);
            }
          }
        }

        function Nt(t, n, r) {
          e.push(t), e.push(n), e.push(r);
        }

        function Dt(t, e, n) {
          Bt(t), Bt(e), Bt(n);
          var r = a.length / 3,
              o = m.generateTopUV(i, a, r - 3, r - 2, r - 1);
          zt(o[0]), zt(o[1]), zt(o[2]);
        }

        function Ot(t, e, n, r) {
          Bt(t), Bt(e), Bt(r), Bt(e), Bt(n), Bt(r);
          var o = a.length / 3,
              s = m.generateSideWallUV(i, a, o - 6, o - 3, o - 2, o - 1);
          zt(s[0]), zt(s[1]), zt(s[3]), zt(s[1]), zt(s[2]), zt(s[3]);
        }

        function Bt(t) {
          a.push(e[3 * t + 0]), a.push(e[3 * t + 1]), a.push(e[3 * t + 2]);
        }

        function zt(t) {
          o.push(t.x), o.push(t.y);
        }

        !function () {
          var t = a.length / 3;

          if (l) {
            for (var e = 0, n = D * e, r = 0; r < O; r++) {
              var o = L[r];
              Dt(o[2] + n, o[1] + n, o[0] + n);
            }

            n = D * (e = s + 2 * p);

            for (var c = 0; c < O; c++) {
              var u = L[c];
              Dt(u[0] + n, u[1] + n, u[2] + n);
            }
          } else {
            for (var h = 0; h < O; h++) {
              var d = L[h];
              Dt(d[2], d[1], d[0]);
            }

            for (var f = 0; f < O; f++) {
              var m = L[f];
              Dt(m[0] + D * s, m[1] + D * s, m[2] + D * s);
            }
          }

          i.addGroup(t, a.length / 3 - t, 0);
        }(), function () {
          var t = a.length / 3,
              e = 0;
          It(R, e), e += R.length;

          for (var n = 0, r = S.length; n < r; n++) {
            var o = S[n];
            It(o, e), e += o.length;
          }

          i.addGroup(t, a.length / 3 - t, 1);
        }();
      }

      return r.setAttribute("position", new sn(a, 3)), r.setAttribute("uv", new sn(o, 2)), r.computeVertexNormals(), r;
    }

    return ut(e, t), e.prototype.toJSON = function () {
      var t = _n.prototype.toJSON.call(this);

      return function (t, e, n) {
        if (n.shapes = [], Array.isArray(t)) for (var r = 0, i = t.length; r < i; r++) {
          var a = t[r];
          n.shapes.push(a.uuid);
        } else n.shapes.push(t.uuid);
        void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
        return n;
      }(this.parameters.shapes, this.parameters.options, t);
    }, e;
  }(_n),
      ps = {
    generateTopUV: function generateTopUV(t, e, n, r, i) {
      var a = e[3 * n],
          o = e[3 * n + 1],
          s = e[3 * r],
          c = e[3 * r + 1],
          l = e[3 * i],
          u = e[3 * i + 1];
      return [new pt(a, o), new pt(s, c), new pt(l, u)];
    },
    generateSideWallUV: function generateSideWallUV(t, e, n, r, i, a) {
      var o = e[3 * n],
          s = e[3 * n + 1],
          c = e[3 * n + 2],
          l = e[3 * r],
          u = e[3 * r + 1],
          h = e[3 * r + 2],
          d = e[3 * i],
          p = e[3 * i + 1],
          f = e[3 * i + 2],
          m = e[3 * a],
          v = e[3 * a + 1],
          g = e[3 * a + 2];
      return Math.abs(s - u) < .01 ? [new pt(o, 1 - c), new pt(l, 1 - h), new pt(d, 1 - f), new pt(m, 1 - g)] : [new pt(s, 1 - c), new pt(u, 1 - h), new pt(p, 1 - f), new pt(v, 1 - g)];
    }
  };

  var fs = function (t) {
    function e(e, n) {
      var r;
      return (r = t.call(this) || this).type = "ExtrudeGeometry", r.parameters = {
        shapes: e,
        options: n
      }, r.fromBufferGeometry(new ds(e, n)), r.mergeVertices(), r;
    }

    return ut(e, t), e.prototype.toJSON = function () {
      var e = t.prototype.toJSON.call(this);
      return function (t, e, n) {
        if (n.shapes = [], Array.isArray(t)) for (var r = 0, i = t.length; r < i; r++) {
          var a = t[r];
          n.shapes.push(a.uuid);
        } else n.shapes.push(t.uuid);
        void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
        return n;
      }(this.parameters.shapes, this.parameters.options, e);
    }, e;
  }(wo);

  var ms = function (t) {
    function e(e, n) {
      var r;
      void 0 === e && (e = 1), void 0 === n && (n = 0);
      var i = (1 + Math.sqrt(5)) / 2,
          a = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
      return (r = t.call(this, a, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, n) || this).type = "IcosahedronBufferGeometry", r.parameters = {
        radius: e,
        detail: n
      }, r;
    }

    return ut(e, t), e;
  }(Co),
      vs = function (t) {
    function e(e, n) {
      var r;
      return (r = t.call(this) || this).type = "IcosahedronGeometry", r.parameters = {
        radius: e,
        detail: n
      }, r.fromBufferGeometry(new ms(e, n)), r.mergeVertices(), r;
    }

    return ut(e, t), e;
  }(wo),
      gs = function (t) {
    function e(e, n, r, i) {
      var a;
      void 0 === n && (n = 12), void 0 === r && (r = 0), void 0 === i && (i = 2 * Math.PI), (a = t.call(this) || this).type = "LatheBufferGeometry", a.parameters = {
        points: e,
        segments: n,
        phiStart: r,
        phiLength: i
      }, n = Math.floor(n), i = st.clamp(i, 0, 2 * Math.PI);

      for (var o = [], s = [], c = [], l = 1 / n, u = new Mt(), h = new pt(), d = 0; d <= n; d++) {
        for (var p = r + d * l * i, f = Math.sin(p), m = Math.cos(p), v = 0; v <= e.length - 1; v++) {
          u.x = e[v].x * f, u.y = e[v].y, u.z = e[v].x * m, s.push(u.x, u.y, u.z), h.x = d / n, h.y = v / (e.length - 1), c.push(h.x, h.y);
        }
      }

      for (var g = 0; g < n; g++) {
        for (var y = 0; y < e.length - 1; y++) {
          var x = y + g * e.length,
              _ = x,
              b = x + e.length,
              w = x + e.length + 1,
              M = x + 1;
          o.push(_, b, M), o.push(b, w, M);
        }
      }

      if (a.setIndex(o), a.setAttribute("position", new sn(s, 3)), a.setAttribute("uv", new sn(c, 2)), a.computeVertexNormals(), i === 2 * Math.PI) for (var S = a.attributes.normal.array, T = new Mt(), E = new Mt(), A = new Mt(), L = n * e.length * 3, R = 0, C = 0; R < e.length; R++, C += 3) {
        T.x = S[C + 0], T.y = S[C + 1], T.z = S[C + 2], E.x = S[L + C + 0], E.y = S[L + C + 1], E.z = S[L + C + 2], A.addVectors(T, E).normalize(), S[C + 0] = S[L + C + 0] = A.x, S[C + 1] = S[L + C + 1] = A.y, S[C + 2] = S[L + C + 2] = A.z;
      }
      return a;
    }

    return ut(e, t), e;
  }(_n),
      ys = function (t) {
    function e(e, n, r, i) {
      var a;
      return (a = t.call(this) || this).type = "LatheGeometry", a.parameters = {
        points: e,
        segments: n,
        phiStart: r,
        phiLength: i
      }, a.fromBufferGeometry(new gs(e, n, r, i)), a.mergeVertices(), a;
    }

    return ut(e, t), e;
  }(wo),
      xs = function (t) {
    function e(e, n) {
      var r;
      void 0 === e && (e = 1), void 0 === n && (n = 0);
      return (r = t.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, n) || this).type = "OctahedronBufferGeometry", r.parameters = {
        radius: e,
        detail: n
      }, r;
    }

    return ut(e, t), e;
  }(Co),
      _s = function (t) {
    function e(e, n) {
      var r;
      return (r = t.call(this) || this).type = "OctahedronGeometry", r.parameters = {
        radius: e,
        detail: n
      }, r.fromBufferGeometry(new xs(e, n)), r.mergeVertices(), r;
    }

    return ut(e, t), e;
  }(wo);

  function bs(t, e, n) {
    _n.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
      func: t,
      slices: e,
      stacks: n
    };
    var r = [],
        i = [],
        a = [],
        o = [],
        s = 1e-5,
        c = new Mt(),
        l = new Mt(),
        u = new Mt(),
        h = new Mt(),
        d = new Mt();
    t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");

    for (var p = e + 1, f = 0; f <= n; f++) {
      for (var m = f / n, v = 0; v <= e; v++) {
        var g = v / e;
        t(g, m, l), i.push(l.x, l.y, l.z), g - s >= 0 ? (t(g - s, m, u), h.subVectors(l, u)) : (t(g + s, m, u), h.subVectors(u, l)), m - s >= 0 ? (t(g, m - s, u), d.subVectors(l, u)) : (t(g, m + s, u), d.subVectors(u, l)), c.crossVectors(h, d).normalize(), a.push(c.x, c.y, c.z), o.push(g, m);
      }
    }

    for (var y = 0; y < n; y++) {
      for (var x = 0; x < e; x++) {
        var _ = y * p + x,
            b = y * p + x + 1,
            w = (y + 1) * p + x + 1,
            M = (y + 1) * p + x;

        r.push(_, b, M), r.push(b, w, M);
      }
    }

    this.setIndex(r), this.setAttribute("position", new sn(i, 3)), this.setAttribute("normal", new sn(a, 3)), this.setAttribute("uv", new sn(o, 2));
  }

  function ws(t, e, n) {
    wo.call(this), this.type = "ParametricGeometry", this.parameters = {
      func: t,
      slices: e,
      stacks: n
    }, this.fromBufferGeometry(new bs(t, e, n)), this.mergeVertices();
  }

  bs.prototype = Object.create(_n.prototype), bs.prototype.constructor = bs, ws.prototype = Object.create(wo.prototype), ws.prototype.constructor = ws;

  var Ms = function (t) {
    function e(e, n, r, i) {
      var a;
      return (a = t.call(this) || this).type = "PlaneGeometry", a.parameters = {
        width: e,
        height: n,
        widthSegments: r,
        heightSegments: i
      }, a.fromBufferGeometry(new ir(e, n, r, i)), a.mergeVertices(), a;
    }

    return ut(e, t), e;
  }(wo),
      Ss = function (t) {
    function e(e, n, r, i) {
      var a;
      return (a = t.call(this) || this).type = "PolyhedronGeometry", a.parameters = {
        vertices: e,
        indices: n,
        radius: r,
        detail: i
      }, a.fromBufferGeometry(new Co(e, n, r, i)), a.mergeVertices(), a;
    }

    return ut(e, t), e;
  }(wo),
      Ts = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      void 0 === e && (e = .5), void 0 === n && (n = 1), void 0 === r && (r = 8), void 0 === i && (i = 1), void 0 === a && (a = 0), void 0 === o && (o = 2 * Math.PI), (s = t.call(this) || this).type = "RingBufferGeometry", s.parameters = {
        innerRadius: e,
        outerRadius: n,
        thetaSegments: r,
        phiSegments: i,
        thetaStart: a,
        thetaLength: o
      }, r = Math.max(3, r);

      for (var c = [], l = [], u = [], h = [], d = e, p = (n - e) / (i = Math.max(1, i)), f = new Mt(), m = new pt(), v = 0; v <= i; v++) {
        for (var g = 0; g <= r; g++) {
          var y = a + g / r * o;
          f.x = d * Math.cos(y), f.y = d * Math.sin(y), l.push(f.x, f.y, f.z), u.push(0, 0, 1), m.x = (f.x / n + 1) / 2, m.y = (f.y / n + 1) / 2, h.push(m.x, m.y);
        }

        d += p;
      }

      for (var x = 0; x < i; x++) {
        for (var _ = x * (r + 1), b = 0; b < r; b++) {
          var w = b + _,
              M = w,
              S = w + r + 1,
              T = w + r + 2,
              E = w + 1;
          c.push(M, S, E), c.push(S, T, E);
        }
      }

      return s.setIndex(c), s.setAttribute("position", new sn(l, 3)), s.setAttribute("normal", new sn(u, 3)), s.setAttribute("uv", new sn(h, 2)), s;
    }

    return ut(e, t), e;
  }(_n),
      Es = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      return (s = t.call(this) || this).type = "RingGeometry", s.parameters = {
        innerRadius: e,
        outerRadius: n,
        thetaSegments: r,
        phiSegments: i,
        thetaStart: a,
        thetaLength: o
      }, s.fromBufferGeometry(new Ts(e, n, r, i, a, o)), s.mergeVertices(), s;
    }

    return ut(e, t), e;
  }(wo),
      As = function (t) {
    function e(e, n) {
      var r;
      void 0 === n && (n = 12), (r = t.call(this) || this).type = "ShapeBufferGeometry", r.parameters = {
        shapes: e,
        curveSegments: n
      };
      var i = [],
          a = [],
          o = [],
          s = [],
          c = 0,
          l = 0;
      if (!1 === Array.isArray(e)) h(e);else for (var u = 0; u < e.length; u++) {
        h(e[u]), r.addGroup(c, l, u), c += l, l = 0;
      }

      function h(t) {
        var e = a.length / 3,
            r = t.extractPoints(n),
            c = r.shape,
            u = r.holes;
        !1 === ls.isClockWise(c) && (c = c.reverse());

        for (var h = 0, d = u.length; h < d; h++) {
          var p = u[h];
          !0 === ls.isClockWise(p) && (u[h] = p.reverse());
        }

        for (var f = ls.triangulateShape(c, u), m = 0, v = u.length; m < v; m++) {
          var g = u[m];
          c = c.concat(g);
        }

        for (var y = 0, x = c.length; y < x; y++) {
          var _ = c[y];
          a.push(_.x, _.y, 0), o.push(0, 0, 1), s.push(_.x, _.y);
        }

        for (var b = 0, w = f.length; b < w; b++) {
          var M = f[b],
              S = M[0] + e,
              T = M[1] + e,
              E = M[2] + e;
          i.push(S, T, E), l += 3;
        }
      }

      return r.setIndex(i), r.setAttribute("position", new sn(a, 3)), r.setAttribute("normal", new sn(o, 3)), r.setAttribute("uv", new sn(s, 2)), r;
    }

    return ut(e, t), e.prototype.toJSON = function () {
      var t = _n.prototype.toJSON.call(this);

      return function (t, e) {
        if (e.shapes = [], Array.isArray(t)) for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          e.shapes.push(i.uuid);
        } else e.shapes.push(t.uuid);
        return e;
      }(this.parameters.shapes, t);
    }, e;
  }(_n);

  var Ls = function (t) {
    function e(e, n) {
      var r;
      return (r = t.call(this) || this).type = "ShapeGeometry", "object" == _typeof(n) && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), n = n.curveSegments), r.parameters = {
        shapes: e,
        curveSegments: n
      }, r.fromBufferGeometry(new As(e, n)), r.mergeVertices(), r;
    }

    return ut(e, t), e.prototype.toJSON = function () {
      var t = wo.prototype.toJSON.call(this);
      return function (t, e) {
        if (e.shapes = [], Array.isArray(t)) for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          e.shapes.push(i.uuid);
        } else e.shapes.push(t.uuid);
        return e;
      }(this.parameters.shapes, t);
    }, e;
  }(wo);

  var Rs = function (t) {
    function e(e, n, r, i, a, o, s) {
      var c;
      void 0 === e && (e = 1), void 0 === n && (n = 8), void 0 === r && (r = 6), void 0 === i && (i = 0), void 0 === a && (a = 2 * Math.PI), void 0 === o && (o = 0), void 0 === s && (s = Math.PI), (c = t.call(this) || this).type = "SphereBufferGeometry", c.parameters = {
        radius: e,
        widthSegments: n,
        heightSegments: r,
        phiStart: i,
        phiLength: a,
        thetaStart: o,
        thetaLength: s
      }, n = Math.max(3, Math.floor(n)), r = Math.max(2, Math.floor(r));

      for (var l = Math.min(o + s, Math.PI), u = 0, h = [], d = new Mt(), p = new Mt(), f = [], m = [], v = [], g = [], y = 0; y <= r; y++) {
        var x = [],
            _ = y / r,
            b = 0;

        0 == y && 0 == o ? b = .5 / n : y == r && l == Math.PI && (b = -.5 / n);

        for (var w = 0; w <= n; w++) {
          var M = w / n;
          d.x = -e * Math.cos(i + M * a) * Math.sin(o + _ * s), d.y = e * Math.cos(o + _ * s), d.z = e * Math.sin(i + M * a) * Math.sin(o + _ * s), m.push(d.x, d.y, d.z), p.copy(d).normalize(), v.push(p.x, p.y, p.z), g.push(M + b, 1 - _), x.push(u++);
        }

        h.push(x);
      }

      for (var S = 0; S < r; S++) {
        for (var T = 0; T < n; T++) {
          var E = h[S][T + 1],
              A = h[S][T],
              L = h[S + 1][T],
              R = h[S + 1][T + 1];
          (0 !== S || o > 0) && f.push(E, A, R), (S !== r - 1 || l < Math.PI) && f.push(A, L, R);
        }
      }

      return c.setIndex(f), c.setAttribute("position", new sn(m, 3)), c.setAttribute("normal", new sn(v, 3)), c.setAttribute("uv", new sn(g, 2)), c;
    }

    return ut(e, t), e;
  }(_n),
      Cs = function (t) {
    function e(e, n, r, i, a, o, s) {
      var c;
      return (c = t.call(this) || this).type = "SphereGeometry", c.parameters = {
        radius: e,
        widthSegments: n,
        heightSegments: r,
        phiStart: i,
        phiLength: a,
        thetaStart: o,
        thetaLength: s
      }, c.fromBufferGeometry(new Rs(e, n, r, i, a, o, s)), c.mergeVertices(), c;
    }

    return ut(e, t), e;
  }(wo),
      Ps = function (t) {
    function e(e, n) {
      var r;
      void 0 === e && (e = 1), void 0 === n && (n = 0);
      return (r = t.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, n) || this).type = "TetrahedronBufferGeometry", r.parameters = {
        radius: e,
        detail: n
      }, r;
    }

    return ut(e, t), e;
  }(Co),
      Is = function (t) {
    function e(e, n) {
      var r;
      return (r = t.call(this) || this).type = "TetrahedronGeometry", r.parameters = {
        radius: e,
        detail: n
      }, r.fromBufferGeometry(new Ps(e, n)), r.mergeVertices(), r;
    }

    return ut(e, t), e;
  }(wo),
      Ns = function (t) {
    function e(e, n) {
      var r;
      void 0 === n && (n = {});
      var i = n.font;
      if (!i || !i.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new _n() || ht(r);
      var a = i.generateShapes(e, n.size);
      return n.depth = void 0 !== n.height ? n.height : 50, void 0 === n.bevelThickness && (n.bevelThickness = 10), void 0 === n.bevelSize && (n.bevelSize = 8), void 0 === n.bevelEnabled && (n.bevelEnabled = !1), (r = t.call(this, a, n) || this).type = "TextBufferGeometry", r;
    }

    return ut(e, t), e;
  }(ds),
      Ds = function (t) {
    function e(e, n) {
      var r;
      return (r = t.call(this) || this).type = "TextGeometry", r.parameters = {
        text: e,
        parameters: n
      }, r.fromBufferGeometry(new Ns(e, n)), r.mergeVertices(), r;
    }

    return ut(e, t), e;
  }(wo),
      Os = function (t) {
    function e(e, n, r, i, a) {
      var o;
      void 0 === e && (e = 1), void 0 === n && (n = .4), void 0 === r && (r = 8), void 0 === i && (i = 6), void 0 === a && (a = 2 * Math.PI), (o = t.call(this) || this).type = "TorusBufferGeometry", o.parameters = {
        radius: e,
        tube: n,
        radialSegments: r,
        tubularSegments: i,
        arc: a
      }, r = Math.floor(r), i = Math.floor(i);

      for (var s = [], c = [], l = [], u = [], h = new Mt(), d = new Mt(), p = new Mt(), f = 0; f <= r; f++) {
        for (var m = 0; m <= i; m++) {
          var v = m / i * a,
              g = f / r * Math.PI * 2;
          d.x = (e + n * Math.cos(g)) * Math.cos(v), d.y = (e + n * Math.cos(g)) * Math.sin(v), d.z = n * Math.sin(g), c.push(d.x, d.y, d.z), h.x = e * Math.cos(v), h.y = e * Math.sin(v), p.subVectors(d, h).normalize(), l.push(p.x, p.y, p.z), u.push(m / i), u.push(f / r);
        }
      }

      for (var y = 1; y <= r; y++) {
        for (var x = 1; x <= i; x++) {
          var _ = (i + 1) * y + x - 1,
              b = (i + 1) * (y - 1) + x - 1,
              w = (i + 1) * (y - 1) + x,
              M = (i + 1) * y + x;

          s.push(_, b, M), s.push(b, w, M);
        }
      }

      return o.setIndex(s), o.setAttribute("position", new sn(c, 3)), o.setAttribute("normal", new sn(l, 3)), o.setAttribute("uv", new sn(u, 2)), o;
    }

    return ut(e, t), e;
  }(_n),
      Bs = function (t) {
    function e(e, n, r, i, a) {
      var o;
      return (o = t.call(this) || this).type = "TorusGeometry", o.parameters = {
        radius: e,
        tube: n,
        radialSegments: r,
        tubularSegments: i,
        arc: a
      }, o.fromBufferGeometry(new Os(e, n, r, i, a)), o.mergeVertices(), o;
    }

    return ut(e, t), e;
  }(wo),
      zs = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      void 0 === e && (e = 1), void 0 === n && (n = .4), void 0 === r && (r = 64), void 0 === i && (i = 8), void 0 === a && (a = 2), void 0 === o && (o = 3), (s = t.call(this) || this).type = "TorusKnotBufferGeometry", s.parameters = {
        radius: e,
        tube: n,
        tubularSegments: r,
        radialSegments: i,
        p: a,
        q: o
      }, r = Math.floor(r), i = Math.floor(i);

      for (var c = [], l = [], u = [], h = [], d = new Mt(), p = new Mt(), f = new Mt(), m = new Mt(), v = new Mt(), g = new Mt(), y = new Mt(), x = 0; x <= r; ++x) {
        var _ = x / r * a * Math.PI * 2;

        P(_, a, o, e, f), P(_ + .01, a, o, e, m), g.subVectors(m, f), y.addVectors(m, f), v.crossVectors(g, y), y.crossVectors(v, g), v.normalize(), y.normalize();

        for (var b = 0; b <= i; ++b) {
          var w = b / i * Math.PI * 2,
              M = -n * Math.cos(w),
              S = n * Math.sin(w);
          d.x = f.x + (M * y.x + S * v.x), d.y = f.y + (M * y.y + S * v.y), d.z = f.z + (M * y.z + S * v.z), l.push(d.x, d.y, d.z), p.subVectors(d, f).normalize(), u.push(p.x, p.y, p.z), h.push(x / r), h.push(b / i);
        }
      }

      for (var T = 1; T <= r; T++) {
        for (var E = 1; E <= i; E++) {
          var A = (i + 1) * (T - 1) + (E - 1),
              L = (i + 1) * T + (E - 1),
              R = (i + 1) * T + E,
              C = (i + 1) * (T - 1) + E;
          c.push(A, L, C), c.push(L, R, C);
        }
      }

      function P(t, e, n, r, i) {
        var a = Math.cos(t),
            o = Math.sin(t),
            s = n / e * t,
            c = Math.cos(s);
        i.x = r * (2 + c) * .5 * a, i.y = r * (2 + c) * o * .5, i.z = r * Math.sin(s) * .5;
      }

      return s.setIndex(c), s.setAttribute("position", new sn(l, 3)), s.setAttribute("normal", new sn(u, 3)), s.setAttribute("uv", new sn(h, 2)), s;
    }

    return ut(e, t), e;
  }(_n),
      Us = function (t) {
    function e(e, n, r, i, a, o, s) {
      var c;
      return (c = t.call(this) || this).type = "TorusKnotGeometry", c.parameters = {
        radius: e,
        tube: n,
        tubularSegments: r,
        radialSegments: i,
        p: a,
        q: o
      }, void 0 !== s && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), c.fromBufferGeometry(new zs(e, n, r, i, a, o)), c.mergeVertices(), c;
    }

    return ut(e, t), e;
  }(wo),
      Fs = function (t) {
    function e(e, n, r, i, a) {
      var o;
      void 0 === n && (n = 64), void 0 === r && (r = 1), void 0 === i && (i = 8), void 0 === a && (a = !1), (o = t.call(this) || this).type = "TubeBufferGeometry", o.parameters = {
        path: e,
        tubularSegments: n,
        radius: r,
        radialSegments: i,
        closed: a
      };
      var s = e.computeFrenetFrames(n, a);
      o.tangents = s.tangents, o.normals = s.normals, o.binormals = s.binormals;
      var c = new Mt(),
          l = new Mt(),
          u = new pt(),
          h = new Mt(),
          d = [],
          p = [],
          f = [],
          m = [];

      function v(t) {
        h = e.getPointAt(t / n, h);

        for (var a = s.normals[t], o = s.binormals[t], u = 0; u <= i; u++) {
          var f = u / i * Math.PI * 2,
              m = Math.sin(f),
              v = -Math.cos(f);
          l.x = v * a.x + m * o.x, l.y = v * a.y + m * o.y, l.z = v * a.z + m * o.z, l.normalize(), p.push(l.x, l.y, l.z), c.x = h.x + r * l.x, c.y = h.y + r * l.y, c.z = h.z + r * l.z, d.push(c.x, c.y, c.z);
        }
      }

      return function () {
        for (var t = 0; t < n; t++) {
          v(t);
        }

        v(!1 === a ? n : 0), function () {
          for (var t = 0; t <= n; t++) {
            for (var e = 0; e <= i; e++) {
              u.x = t / n, u.y = e / i, f.push(u.x, u.y);
            }
          }
        }(), function () {
          for (var t = 1; t <= n; t++) {
            for (var e = 1; e <= i; e++) {
              var r = (i + 1) * (t - 1) + (e - 1),
                  a = (i + 1) * t + (e - 1),
                  o = (i + 1) * t + e,
                  s = (i + 1) * (t - 1) + e;
              m.push(r, a, s), m.push(a, o, s);
            }
          }
        }();
      }(), o.setIndex(m), o.setAttribute("position", new sn(d, 3)), o.setAttribute("normal", new sn(p, 3)), o.setAttribute("uv", new sn(f, 2)), o;
    }

    return ut(e, t), e.prototype.toJSON = function () {
      var t = _n.prototype.toJSON.call(this);

      return t.path = this.parameters.path.toJSON(), t;
    }, e;
  }(_n),
      Gs = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      (s = t.call(this) || this).type = "TubeGeometry", s.parameters = {
        path: e,
        tubularSegments: n,
        radius: r,
        radialSegments: i,
        closed: a
      }, void 0 !== o && console.warn("THREE.TubeGeometry: taper has been removed.");
      var c = new Fs(e, n, r, i, a);
      return s.tangents = c.tangents, s.normals = c.normals, s.binormals = c.binormals, s.fromBufferGeometry(c), s.mergeVertices(), s;
    }

    return ut(e, t), e;
  }(wo),
      Hs = function (t) {
    function e(e) {
      var n;
      (n = t.call(this) || this).type = "WireframeGeometry";
      var r = [],
          i = [0, 0],
          a = {},
          o = ["a", "b", "c"];

      if (e && e.isGeometry) {
        for (var s = e.faces, c = 0, l = s.length; c < l; c++) {
          for (var u = s[c], h = 0; h < 3; h++) {
            var d = u[o[h]],
                p = u[o[(h + 1) % 3]];
            i[0] = Math.min(d, p), i[1] = Math.max(d, p);
            var f = i[0] + "," + i[1];
            void 0 === a[f] && (a[f] = {
              index1: i[0],
              index2: i[1]
            });
          }
        }

        for (var m in a) {
          var v = a[m],
              g = e.vertices[v.index1];
          r.push(g.x, g.y, g.z), g = e.vertices[v.index2], r.push(g.x, g.y, g.z);
        }
      } else if (e && e.isBufferGeometry) {
        var y = new Mt();

        if (null !== e.index) {
          var x = e.attributes.position,
              _ = e.index,
              b = e.groups;
          0 === b.length && (b = [{
            start: 0,
            count: _.count,
            materialIndex: 0
          }]);

          for (var w = 0, M = b.length; w < M; ++w) {
            for (var S = b[w], T = S.start, E = T, A = T + S.count; E < A; E += 3) {
              for (var L = 0; L < 3; L++) {
                var R = _.getX(E + L),
                    C = _.getX(E + (L + 1) % 3);

                i[0] = Math.min(R, C), i[1] = Math.max(R, C);
                var P = i[0] + "," + i[1];
                void 0 === a[P] && (a[P] = {
                  index1: i[0],
                  index2: i[1]
                });
              }
            }
          }

          for (var I in a) {
            var N = a[I];
            y.fromBufferAttribute(x, N.index1), r.push(y.x, y.y, y.z), y.fromBufferAttribute(x, N.index2), r.push(y.x, y.y, y.z);
          }
        } else for (var D = e.attributes.position, O = 0, B = D.count / 3; O < B; O++) {
          for (var z = 0; z < 3; z++) {
            var U = 3 * O + z;
            y.fromBufferAttribute(D, U), r.push(y.x, y.y, y.z);
            var F = 3 * O + (z + 1) % 3;
            y.fromBufferAttribute(D, F), r.push(y.x, y.y, y.z);
          }
        }
      }

      return n.setAttribute("position", new sn(r, 3)), n;
    }

    return ut(e, t), e;
  }(_n),
      ks = Object.freeze({
    __proto__: null,
    BoxGeometry: Mo,
    BoxBufferGeometry: Hn,
    CircleGeometry: To,
    CircleBufferGeometry: So,
    ConeGeometry: Lo,
    ConeBufferGeometry: Ro,
    CylinderGeometry: Ao,
    CylinderBufferGeometry: Eo,
    DodecahedronGeometry: Io,
    DodecahedronBufferGeometry: Po,
    EdgesGeometry: zo,
    ExtrudeGeometry: fs,
    ExtrudeBufferGeometry: ds,
    IcosahedronGeometry: vs,
    IcosahedronBufferGeometry: ms,
    LatheGeometry: ys,
    LatheBufferGeometry: gs,
    OctahedronGeometry: _s,
    OctahedronBufferGeometry: xs,
    ParametricGeometry: ws,
    ParametricBufferGeometry: bs,
    PlaneGeometry: Ms,
    PlaneBufferGeometry: ir,
    PolyhedronGeometry: Ss,
    PolyhedronBufferGeometry: Co,
    RingGeometry: Es,
    RingBufferGeometry: Ts,
    ShapeGeometry: Ls,
    ShapeBufferGeometry: As,
    SphereGeometry: Cs,
    SphereBufferGeometry: Rs,
    TetrahedronGeometry: Is,
    TetrahedronBufferGeometry: Ps,
    TextGeometry: Ds,
    TextBufferGeometry: Ns,
    TorusGeometry: Bs,
    TorusBufferGeometry: Os,
    TorusKnotGeometry: Us,
    TorusKnotBufferGeometry: zs,
    TubeGeometry: Gs,
    TubeBufferGeometry: Fs,
    WireframeGeometry: Hs
  });

  function Vs(t) {
    Xe.call(this), this.type = "ShadowMaterial", this.color = new We(0), this.transparent = !0, this.setValues(t);
  }

  function Ws(t) {
    jn.call(this, t), this.type = "RawShaderMaterial";
  }

  function js(t) {
    Xe.call(this), this.defines = {
      STANDARD: ""
    }, this.type = "MeshStandardMaterial", this.color = new We(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new We(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new pt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.vertexTangents = !1, this.setValues(t);
  }

  function qs(t) {
    js.call(this), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new pt(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", {
      get: function get() {
        return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity);
      },
      set: function set(t) {
        this.reflectivity = st.clamp(2.5 * (t - 1) / (t + 1), 0, 1);
      }
    }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(t);
  }

  function Xs(t) {
    Xe.call(this), this.type = "MeshPhongMaterial", this.color = new We(16777215), this.specular = new We(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new We(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new pt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t);
  }

  function Ys(t) {
    Xe.call(this), this.defines = {
      TOON: ""
    }, this.type = "MeshToonMaterial", this.color = new We(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new We(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new pt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t);
  }

  function Zs(t) {
    Xe.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new pt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t);
  }

  function Js(t) {
    Xe.call(this), this.type = "MeshLambertMaterial", this.color = new We(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new We(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t);
  }

  function Qs(t) {
    Xe.call(this), this.defines = {
      MATCAP: ""
    }, this.type = "MeshMatcapMaterial", this.color = new We(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new pt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t);
  }

  function Ks(t) {
    Za.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t);
  }

  Vs.prototype = Object.create(Xe.prototype), Vs.prototype.constructor = Vs, Vs.prototype.isShadowMaterial = !0, Vs.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.color.copy(t.color), this;
  }, Ws.prototype = Object.create(jn.prototype), Ws.prototype.constructor = Ws, Ws.prototype.isRawShaderMaterial = !0, js.prototype = Object.create(Xe.prototype), js.prototype.constructor = js, js.prototype.isMeshStandardMaterial = !0, js.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.defines = {
      STANDARD: ""
    }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.vertexTangents = t.vertexTangents, this;
  }, qs.prototype = Object.create(js.prototype), qs.prototype.constructor = qs, qs.prototype.isMeshPhysicalMaterial = !0, qs.prototype.copy = function (t) {
    return js.prototype.copy.call(this, t), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new We()).copy(t.sheen) : this.sheen = null, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this;
  }, Xs.prototype = Object.create(Xe.prototype), Xs.prototype.constructor = Xs, Xs.prototype.isMeshPhongMaterial = !0, Xs.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
  }, Ys.prototype = Object.create(Xe.prototype), Ys.prototype.constructor = Ys, Ys.prototype.isMeshToonMaterial = !0, Ys.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
  }, Zs.prototype = Object.create(Xe.prototype), Zs.prototype.constructor = Zs, Zs.prototype.isMeshNormalMaterial = !0, Zs.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
  }, Js.prototype = Object.create(Xe.prototype), Js.prototype.constructor = Js, Js.prototype.isMeshLambertMaterial = !0, Js.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
  }, Qs.prototype = Object.create(Xe.prototype), Qs.prototype.constructor = Qs, Qs.prototype.isMeshMatcapMaterial = !0, Qs.prototype.copy = function (t) {
    return Xe.prototype.copy.call(this, t), this.defines = {
      MATCAP: ""
    }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
  }, Ks.prototype = Object.create(Za.prototype), Ks.prototype.constructor = Ks, Ks.prototype.isLineDashedMaterial = !0, Ks.prototype.copy = function (t) {
    return Za.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
  };
  var $s = Object.freeze({
    __proto__: null,
    ShadowMaterial: Vs,
    SpriteMaterial: va,
    RawShaderMaterial: Ws,
    ShaderMaterial: jn,
    PointsMaterial: oo,
    MeshPhysicalMaterial: qs,
    MeshStandardMaterial: js,
    MeshPhongMaterial: Xs,
    MeshToonMaterial: Ys,
    MeshNormalMaterial: Zs,
    MeshLambertMaterial: Js,
    MeshDepthMaterial: Ji,
    MeshDistanceMaterial: Qi,
    MeshBasicMaterial: Ye,
    MeshMatcapMaterial: Qs,
    LineDashedMaterial: Ks,
    LineBasicMaterial: Za,
    Material: Xe
  }),
      tc = {
    arraySlice: function arraySlice(t, e, n) {
      return tc.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n);
    },
    convertArray: function convertArray(t, e, n) {
      return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t);
    },
    isTypedArray: function isTypedArray(t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView);
    },
    getKeyframeOrder: function getKeyframeOrder(t) {
      for (var e = t.length, n = new Array(e), r = 0; r !== e; ++r) {
        n[r] = r;
      }

      return n.sort(function (e, n) {
        return t[e] - t[n];
      }), n;
    },
    sortedArray: function sortedArray(t, e, n) {
      for (var r = t.length, i = new t.constructor(r), a = 0, o = 0; o !== r; ++a) {
        for (var s = n[a] * e, c = 0; c !== e; ++c) {
          i[o++] = t[s + c];
        }
      }

      return i;
    },
    flattenJSON: function flattenJSON(t, e, n, r) {
      for (var i = 1, a = t[0]; void 0 !== a && void 0 === a[r];) {
        a = t[i++];
      }

      if (void 0 !== a) {
        var o = a[r];
        if (void 0 !== o) if (Array.isArray(o)) do {
          void 0 !== (o = a[r]) && (e.push(a.time), n.push.apply(n, o)), a = t[i++];
        } while (void 0 !== a);else if (void 0 !== o.toArray) do {
          void 0 !== (o = a[r]) && (e.push(a.time), o.toArray(n, n.length)), a = t[i++];
        } while (void 0 !== a);else do {
          void 0 !== (o = a[r]) && (e.push(a.time), n.push(o)), a = t[i++];
        } while (void 0 !== a);
      }
    },
    subclip: function subclip(t, e, n, r, i) {
      void 0 === i && (i = 30);
      var a = t.clone();
      a.name = e;

      for (var o = [], s = 0; s < a.tracks.length; ++s) {
        for (var c = a.tracks[s], l = c.getValueSize(), u = [], h = [], d = 0; d < c.times.length; ++d) {
          var p = c.times[d] * i;

          if (!(p < n || p >= r)) {
            u.push(c.times[d]);

            for (var f = 0; f < l; ++f) {
              h.push(c.values[d * l + f]);
            }
          }
        }

        0 !== u.length && (c.times = tc.convertArray(u, c.times.constructor), c.values = tc.convertArray(h, c.values.constructor), o.push(c));
      }

      a.tracks = o;

      for (var m = 1 / 0, v = 0; v < a.tracks.length; ++v) {
        m > a.tracks[v].times[0] && (m = a.tracks[v].times[0]);
      }

      for (var g = 0; g < a.tracks.length; ++g) {
        a.tracks[g].shift(-1 * m);
      }

      return a.resetDuration(), a;
    },
    makeClipAdditive: function makeClipAdditive(t, e, n, r) {
      void 0 === e && (e = 0), void 0 === n && (n = t), void 0 === r && (r = 30), r <= 0 && (r = 30);

      for (var i = n.tracks.length, a = e / r, o = function o(e) {
        var r = n.tracks[e],
            i = r.ValueTypeName;
        if ("bool" === i || "string" === i) return "continue";
        var o = t.tracks.find(function (t) {
          return t.name === r.name && t.ValueTypeName === i;
        });
        if (void 0 === o) return "continue";
        var s = 0,
            c = r.getValueSize();
        r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (s = c / 3);
        var l = 0,
            u = o.getValueSize();
        o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (l = u / 3);
        var h = r.times.length - 1,
            d = void 0;

        if (a <= r.times[0]) {
          var p = s,
              f = c - s;
          d = tc.arraySlice(r.values, p, f);
        } else if (a >= r.times[h]) {
          var m = h * c + s,
              v = m + c - s;
          d = tc.arraySlice(r.values, m, v);
        } else {
          var g = r.createInterpolant(),
              y = s,
              x = c - s;
          g.evaluate(a), d = tc.arraySlice(g.resultBuffer, y, x);
        }

        "quaternion" === i && new wt().fromArray(d).normalize().conjugate().toArray(d);

        for (var _ = o.times.length, b = 0; b < _; ++b) {
          var w = b * u + l;
          if ("quaternion" === i) wt.multiplyQuaternionsFlat(o.values, w, d, 0, o.values, w);else for (var M = u - 2 * l, S = 0; S < M; ++S) {
            o.values[w + S] -= d[S];
          }
        }
      }, s = 0; s < i; ++s) {
        o(s);
      }

      return t.blendMode = j, t;
    }
  };

  function ec(t, e, n, r) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== r ? r : new e.constructor(n), this.sampleValues = e, this.valueSize = n;
  }

  function nc(t, e, n, r) {
    ec.call(this, t, e, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0;
  }

  function rc(t, e, n, r) {
    ec.call(this, t, e, n, r);
  }

  function ic(t, e, n, r) {
    ec.call(this, t, e, n, r);
  }

  function ac(t, e, n, r) {
    if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = tc.convertArray(e, this.TimeBufferType), this.values = tc.convertArray(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
  }

  function oc(t, e, n) {
    ac.call(this, t, e, n);
  }

  function sc(t, e, n, r) {
    ac.call(this, t, e, n, r);
  }

  function cc(t, e, n, r) {
    ac.call(this, t, e, n, r);
  }

  function lc(t, e, n, r) {
    ec.call(this, t, e, n, r);
  }

  function uc(t, e, n, r) {
    ac.call(this, t, e, n, r);
  }

  function hc(t, e, n, r) {
    ac.call(this, t, e, n, r);
  }

  function dc(t, e, n, r) {
    ac.call(this, t, e, n, r);
  }

  function pc(t, e, n, r) {
    this.name = t, this.tracks = n, this.duration = void 0 !== e ? e : -1, this.blendMode = void 0 !== r ? r : W, this.uuid = st.generateUUID(), this.duration < 0 && this.resetDuration();
  }

  function fc(t) {
    if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");

    var e = function (t) {
      switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return cc;

        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return dc;

        case "color":
          return sc;

        case "quaternion":
          return uc;

        case "bool":
        case "boolean":
          return oc;

        case "string":
          return hc;
      }

      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
    }(t.type);

    if (void 0 === t.times) {
      var n = [],
          r = [];
      tc.flattenJSON(t.keys, n, r, "value"), t.times = n, t.values = r;
    }

    return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation);
  }

  Object.assign(ec.prototype, {
    evaluate: function evaluate(t) {
      var e = this.parameterPositions,
          n = this._cachedIndex,
          r = e[n],
          i = e[n - 1];

      t: {
        e: {
          var a;

          n: {
            r: if (!(t < r)) {
              for (var o = n + 2;;) {
                if (void 0 === r) {
                  if (t < i) break r;
                  return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, i);
                }

                if (n === o) break;
                if (i = r, t < (r = e[++n])) break e;
              }

              a = e.length;
              break n;
            }

            if (t >= i) break t;
            var s = e[1];
            t < s && (n = 2, i = s);

            for (var c = n - 2;;) {
              if (void 0 === i) return this._cachedIndex = 0, this.beforeStart_(0, t, r);
              if (n === c) break;
              if (r = i, t >= (i = e[--n - 1])) break e;
            }

            a = n, n = 0;
          }

          for (; n < a;) {
            var l = n + a >>> 1;
            t < e[l] ? a = l : n = l + 1;
          }

          if (r = e[n], void 0 === (i = e[n - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, r);
          if (void 0 === r) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, i, t);
        }

        this._cachedIndex = n, this.intervalChanged_(n, i, r);
      }

      return this.interpolate_(n, i, t, r);
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function getSettings_() {
      return this.settings || this.DefaultSettings_;
    },
    copySampleValue_: function copySampleValue_(t) {
      for (var e = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = t * r, a = 0; a !== r; ++a) {
        e[a] = n[i + a];
      }

      return e;
    },
    interpolate_: function interpolate_() {
      throw new Error("call to abstract method");
    },
    intervalChanged_: function intervalChanged_() {}
  }), Object.assign(ec.prototype, {
    beforeStart_: ec.prototype.copySampleValue_,
    afterEnd_: ec.prototype.copySampleValue_
  }), nc.prototype = Object.assign(Object.create(ec.prototype), {
    constructor: nc,
    DefaultSettings_: {
      endingStart: H,
      endingEnd: H
    },
    intervalChanged_: function intervalChanged_(t, e, n) {
      var r = this.parameterPositions,
          i = t - 2,
          a = t + 1,
          o = r[i],
          s = r[a];
      if (void 0 === o) switch (this.getSettings_().endingStart) {
        case k:
          i = t, o = 2 * e - n;
          break;

        case V:
          o = e + r[i = r.length - 2] - r[i + 1];
          break;

        default:
          i = t, o = n;
      }
      if (void 0 === s) switch (this.getSettings_().endingEnd) {
        case k:
          a = t, s = 2 * n - e;
          break;

        case V:
          a = 1, s = n + r[1] - r[0];
          break;

        default:
          a = t - 1, s = e;
      }
      var c = .5 * (n - e),
          l = this.valueSize;
      this._weightPrev = c / (e - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
    },
    interpolate_: function interpolate_(t, e, n, r) {
      for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, d = this._weightNext, p = (n - e) / (r - e), f = p * p, m = f * p, v = -h * m + 2 * h * f - h * p, g = (1 + h) * m + (-1.5 - 2 * h) * f + (-.5 + h) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + .5 * p, x = d * m - d * f, _ = 0; _ !== o; ++_) {
        i[_] = v * a[l + _] + g * a[c + _] + y * a[s + _] + x * a[u + _];
      }

      return i;
    }
  }), rc.prototype = Object.assign(Object.create(ec.prototype), {
    constructor: rc,
    interpolate_: function interpolate_(t, e, n, r) {
      for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, l = (n - e) / (r - e), u = 1 - l, h = 0; h !== o; ++h) {
        i[h] = a[c + h] * u + a[s + h] * l;
      }

      return i;
    }
  }), ic.prototype = Object.assign(Object.create(ec.prototype), {
    constructor: ic,
    interpolate_: function interpolate_(t) {
      return this.copySampleValue_(t - 1);
    }
  }), Object.assign(ac, {
    toJSON: function toJSON(t) {
      var e,
          n = t.constructor;
      if (void 0 !== n.toJSON) e = n.toJSON(t);else {
        e = {
          name: t.name,
          times: tc.convertArray(t.times, Array),
          values: tc.convertArray(t.values, Array)
        };
        var r = t.getInterpolation();
        r !== t.DefaultInterpolation && (e.interpolation = r);
      }
      return e.type = t.ValueTypeName, e;
    }
  }), Object.assign(ac.prototype, {
    constructor: ac,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: F,
    InterpolantFactoryMethodDiscrete: function InterpolantFactoryMethodDiscrete(t) {
      return new ic(this.times, this.values, this.getValueSize(), t);
    },
    InterpolantFactoryMethodLinear: function InterpolantFactoryMethodLinear(t) {
      return new rc(this.times, this.values, this.getValueSize(), t);
    },
    InterpolantFactoryMethodSmooth: function InterpolantFactoryMethodSmooth(t) {
      return new nc(this.times, this.values, this.getValueSize(), t);
    },
    setInterpolation: function setInterpolation(t) {
      var e;

      switch (t) {
        case U:
          e = this.InterpolantFactoryMethodDiscrete;
          break;

        case F:
          e = this.InterpolantFactoryMethodLinear;
          break;

        case G:
          e = this.InterpolantFactoryMethodSmooth;
      }

      if (void 0 === e) {
        var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;

        if (void 0 === this.createInterpolant) {
          if (t === this.DefaultInterpolation) throw new Error(n);
          this.setInterpolation(this.DefaultInterpolation);
        }

        return console.warn("THREE.KeyframeTrack:", n), this;
      }

      return this.createInterpolant = e, this;
    },
    getInterpolation: function getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return U;

        case this.InterpolantFactoryMethodLinear:
          return F;

        case this.InterpolantFactoryMethodSmooth:
          return G;
      }
    },
    getValueSize: function getValueSize() {
      return this.values.length / this.times.length;
    },
    shift: function shift(t) {
      if (0 !== t) for (var e = this.times, n = 0, r = e.length; n !== r; ++n) {
        e[n] += t;
      }
      return this;
    },
    scale: function scale(t) {
      if (1 !== t) for (var e = this.times, n = 0, r = e.length; n !== r; ++n) {
        e[n] *= t;
      }
      return this;
    },
    trim: function trim(t, e) {
      for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < t;) {
        ++i;
      }

      for (; -1 !== a && n[a] > e;) {
        --a;
      }

      if (++a, 0 !== i || a !== r) {
        i >= a && (i = (a = Math.max(a, 1)) - 1);
        var o = this.getValueSize();
        this.times = tc.arraySlice(n, i, a), this.values = tc.arraySlice(this.values, i * o, a * o);
      }

      return this;
    },
    validate: function validate() {
      var t = !0,
          e = this.getValueSize();
      e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
      var n = this.times,
          r = this.values,
          i = n.length;
      0 === i && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);

      for (var a = null, o = 0; o !== i; o++) {
        var s = n[o];

        if ("number" == typeof s && isNaN(s)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), t = !1;
          break;
        }

        if (null !== a && a > s) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), t = !1;
          break;
        }

        a = s;
      }

      if (void 0 !== r && tc.isTypedArray(r)) for (var c = 0, l = r.length; c !== l; ++c) {
        var u = r[c];

        if (isNaN(u)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, c, u), t = !1;
          break;
        }
      }
      return t;
    },
    optimize: function optimize() {
      for (var t = tc.arraySlice(this.times), e = tc.arraySlice(this.values), n = this.getValueSize(), r = this.getInterpolation() === G, i = t.length - 1, a = 1, o = 1; o < i; ++o) {
        var s = !1,
            c = t[o];
        if (c !== t[o + 1] && (1 !== o || c !== c[0])) if (r) s = !0;else for (var l = o * n, u = l - n, h = l + n, d = 0; d !== n; ++d) {
          var p = e[l + d];

          if (p !== e[u + d] || p !== e[h + d]) {
            s = !0;
            break;
          }
        }

        if (s) {
          if (o !== a) {
            t[a] = t[o];

            for (var f = o * n, m = a * n, v = 0; v !== n; ++v) {
              e[m + v] = e[f + v];
            }
          }

          ++a;
        }
      }

      if (i > 0) {
        t[a] = t[i];

        for (var g = i * n, y = a * n, x = 0; x !== n; ++x) {
          e[y + x] = e[g + x];
        }

        ++a;
      }

      return a !== t.length ? (this.times = tc.arraySlice(t, 0, a), this.values = tc.arraySlice(e, 0, a * n)) : (this.times = t, this.values = e), this;
    },
    clone: function clone() {
      var t = tc.arraySlice(this.times, 0),
          e = tc.arraySlice(this.values, 0),
          n = new (0, this.constructor)(this.name, t, e);
      return n.createInterpolant = this.createInterpolant, n;
    }
  }), oc.prototype = Object.assign(Object.create(ac.prototype), {
    constructor: oc,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: U,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  }), sc.prototype = Object.assign(Object.create(ac.prototype), {
    constructor: sc,
    ValueTypeName: "color"
  }), cc.prototype = Object.assign(Object.create(ac.prototype), {
    constructor: cc,
    ValueTypeName: "number"
  }), lc.prototype = Object.assign(Object.create(ec.prototype), {
    constructor: lc,
    interpolate_: function interpolate_(t, e, n, r) {
      for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - e) / (r - e), c = t * o, l = c + o; c !== l; c += 4) {
        wt.slerpFlat(i, 0, a, c - o, a, c, s);
      }

      return i;
    }
  }), uc.prototype = Object.assign(Object.create(ac.prototype), {
    constructor: uc,
    ValueTypeName: "quaternion",
    DefaultInterpolation: F,
    InterpolantFactoryMethodLinear: function InterpolantFactoryMethodLinear(t) {
      return new lc(this.times, this.values, this.getValueSize(), t);
    },
    InterpolantFactoryMethodSmooth: void 0
  }), hc.prototype = Object.assign(Object.create(ac.prototype), {
    constructor: hc,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: U,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  }), dc.prototype = Object.assign(Object.create(ac.prototype), {
    constructor: dc,
    ValueTypeName: "vector"
  }), Object.assign(pc, {
    parse: function parse(t) {
      for (var e = [], n = t.tracks, r = 1 / (t.fps || 1), i = 0, a = n.length; i !== a; ++i) {
        e.push(fc(n[i]).scale(r));
      }

      var o = new pc(t.name, t.duration, e, t.blendMode);
      return o.uuid = t.uuid, o;
    },
    toJSON: function toJSON(t) {
      for (var e = [], n = t.tracks, r = {
        name: t.name,
        duration: t.duration,
        tracks: e,
        uuid: t.uuid,
        blendMode: t.blendMode
      }, i = 0, a = n.length; i !== a; ++i) {
        e.push(ac.toJSON(n[i]));
      }

      return r;
    },
    CreateFromMorphTargetSequence: function CreateFromMorphTargetSequence(t, e, n, r) {
      for (var i = e.length, a = [], o = 0; o < i; o++) {
        var s = [],
            c = [];
        s.push((o + i - 1) % i, o, (o + 1) % i), c.push(0, 1, 0);
        var l = tc.getKeyframeOrder(s);
        s = tc.sortedArray(s, 1, l), c = tc.sortedArray(c, 1, l), r || 0 !== s[0] || (s.push(i), c.push(c[0])), a.push(new cc(".morphTargetInfluences[" + e[o].name + "]", s, c).scale(1 / n));
      }

      return new pc(t, -1, a);
    },
    findByName: function findByName(t, e) {
      var n = t;

      if (!Array.isArray(t)) {
        var r = t;
        n = r.geometry && r.geometry.animations || r.animations;
      }

      for (var i = 0; i < n.length; i++) {
        if (n[i].name === e) return n[i];
      }

      return null;
    },
    CreateClipsFromMorphTargetSequences: function CreateClipsFromMorphTargetSequences(t, e, n) {
      for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
        var s = t[a],
            c = s.name.match(i);

        if (c && c.length > 1) {
          var l = c[1],
              u = r[l];
          u || (r[l] = u = []), u.push(s);
        }
      }

      var h = [];

      for (var d in r) {
        h.push(pc.CreateFromMorphTargetSequence(d, r[d], e, n));
      }

      return h;
    },
    parseAnimation: function parseAnimation(t, e) {
      if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;

      for (var n = function n(t, e, _n2, r, i) {
        if (0 !== _n2.length) {
          var a = [],
              o = [];
          tc.flattenJSON(_n2, a, o, r), 0 !== a.length && i.push(new t(e, a, o));
        }
      }, r = [], i = t.name || "default", a = t.fps || 30, o = t.blendMode, s = t.length || -1, c = t.hierarchy || [], l = 0; l < c.length; l++) {
        var u = c[l].keys;
        if (u && 0 !== u.length) if (u[0].morphTargets) {
          var h = {},
              d = void 0;

          for (d = 0; d < u.length; d++) {
            if (u[d].morphTargets) for (var p = 0; p < u[d].morphTargets.length; p++) {
              h[u[d].morphTargets[p]] = -1;
            }
          }

          for (var f in h) {
            for (var m = [], v = [], g = 0; g !== u[d].morphTargets.length; ++g) {
              var y = u[d];
              m.push(y.time), v.push(y.morphTarget === f ? 1 : 0);
            }

            r.push(new cc(".morphTargetInfluence[" + f + "]", m, v));
          }

          s = h.length * (a || 1);
        } else {
          var x = ".bones[" + e[l].name + "]";
          n(dc, x + ".position", u, "pos", r), n(uc, x + ".quaternion", u, "rot", r), n(dc, x + ".scale", u, "scl", r);
        }
      }

      return 0 === r.length ? null : new pc(i, s, r, o);
    }
  }), Object.assign(pc.prototype, {
    resetDuration: function resetDuration() {
      for (var t = 0, e = 0, n = this.tracks.length; e !== n; ++e) {
        var r = this.tracks[e];
        t = Math.max(t, r.times[r.times.length - 1]);
      }

      return this.duration = t, this;
    },
    trim: function trim() {
      for (var t = 0; t < this.tracks.length; t++) {
        this.tracks[t].trim(0, this.duration);
      }

      return this;
    },
    validate: function validate() {
      for (var t = !0, e = 0; e < this.tracks.length; e++) {
        t = t && this.tracks[e].validate();
      }

      return t;
    },
    optimize: function optimize() {
      for (var t = 0; t < this.tracks.length; t++) {
        this.tracks[t].optimize();
      }

      return this;
    },
    clone: function clone() {
      for (var t = [], e = 0; e < this.tracks.length; e++) {
        t.push(this.tracks[e].clone());
      }

      return new pc(this.name, this.duration, t, this.blendMode);
    },
    toJSON: function toJSON() {
      return pc.toJSON(this);
    }
  });
  var mc = {
    enabled: !1,
    files: {},
    add: function add(t, e) {
      !1 !== this.enabled && (this.files[t] = e);
    },
    get: function get(t) {
      if (!1 !== this.enabled) return this.files[t];
    },
    remove: function remove(t) {
      delete this.files[t];
    },
    clear: function clear() {
      this.files = {};
    }
  };

  function vc(t, e, n) {
    var r = this,
        i = !1,
        a = 0,
        o = 0,
        s = void 0,
        c = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (t) {
      o++, !1 === i && void 0 !== r.onStart && r.onStart(t, a, o), i = !0;
    }, this.itemEnd = function (t) {
      a++, void 0 !== r.onProgress && r.onProgress(t, a, o), a === o && (i = !1, void 0 !== r.onLoad && r.onLoad());
    }, this.itemError = function (t) {
      void 0 !== r.onError && r.onError(t);
    }, this.resolveURL = function (t) {
      return s ? s(t) : t;
    }, this.setURLModifier = function (t) {
      return s = t, this;
    }, this.addHandler = function (t, e) {
      return c.push(t, e), this;
    }, this.removeHandler = function (t) {
      var e = c.indexOf(t);
      return -1 !== e && c.splice(e, 2), this;
    }, this.getHandler = function (t) {
      for (var e = 0, n = c.length; e < n; e += 2) {
        var r = c[e],
            i = c[e + 1];
        if (r.global && (r.lastIndex = 0), r.test(t)) return i;
      }

      return null;
    };
  }

  var gc = new vc();

  function yc(t) {
    this.manager = void 0 !== t ? t : gc, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }

  Object.assign(yc.prototype, {
    load: function load() {},
    loadAsync: function loadAsync(t, e) {
      var n = this;
      return new Promise(function (r, i) {
        n.load(t, r, e, i);
      });
    },
    parse: function parse() {},
    setCrossOrigin: function setCrossOrigin(t) {
      return this.crossOrigin = t, this;
    },
    setWithCredentials: function setWithCredentials(t) {
      return this.withCredentials = t, this;
    },
    setPath: function setPath(t) {
      return this.path = t, this;
    },
    setResourcePath: function setResourcePath(t) {
      return this.resourcePath = t, this;
    },
    setRequestHeader: function setRequestHeader(t) {
      return this.requestHeader = t, this;
    }
  });
  var xc = {};

  function _c(t) {
    yc.call(this, t);
  }

  function bc(t) {
    yc.call(this, t);
  }

  function wc(t) {
    yc.call(this, t);
  }

  function Mc(t) {
    yc.call(this, t);
  }

  function Sc(t) {
    yc.call(this, t);
  }

  function Tc(t) {
    yc.call(this, t);
  }

  function Ec(t) {
    yc.call(this, t);
  }

  function Ac() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }

  function Lc(t, e, n, r, i, a, o, s) {
    Ac.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = n || 1, this.yRadius = r || 1, this.aStartAngle = i || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0;
  }

  function Rc(t, e, n, r, i, a) {
    Lc.call(this, t, e, n, n, r, i, a), this.type = "ArcCurve";
  }

  function Cc() {
    var t = 0,
        e = 0,
        n = 0,
        r = 0;

    function i(i, a, o, s) {
      t = i, e = o, n = -3 * i + 3 * a - 2 * o - s, r = 2 * i - 2 * a + o + s;
    }

    return {
      initCatmullRom: function initCatmullRom(t, e, n, r, a) {
        i(e, n, a * (n - t), a * (r - e));
      },
      initNonuniformCatmullRom: function initNonuniformCatmullRom(t, e, n, r, a, o, s) {
        var c = (e - t) / a - (n - t) / (a + o) + (n - e) / o,
            l = (n - e) / o - (r - e) / (o + s) + (r - n) / s;
        i(e, n, c *= o, l *= o);
      },
      calc: function calc(i) {
        var a = i * i;
        return t + e * i + n * a + r * (a * i);
      }
    };
  }

  _c.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: _c,
    load: function load(t, e, n, r) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var i = this,
          a = mc.get(t);
      if (void 0 !== a) return i.manager.itemStart(t), setTimeout(function () {
        e && e(a), i.manager.itemEnd(t);
      }, 0), a;

      if (void 0 === xc[t]) {
        var o,
            s = t.match(/^data:(.*?)(;base64)?,(.*)$/);

        if (s) {
          var c = s[1],
              l = !!s[2],
              u = s[3];
          u = decodeURIComponent(u), l && (u = atob(u));

          try {
            var h,
                d = (this.responseType || "").toLowerCase();

            switch (d) {
              case "arraybuffer":
              case "blob":
                for (var p = new Uint8Array(u.length), f = 0; f < u.length; f++) {
                  p[f] = u.charCodeAt(f);
                }

                h = "blob" === d ? new Blob([p.buffer], {
                  type: c
                }) : p.buffer;
                break;

              case "document":
                var m = new DOMParser();
                h = m.parseFromString(u, c);
                break;

              case "json":
                h = JSON.parse(u);
                break;

              default:
                h = u;
            }

            setTimeout(function () {
              e && e(h), i.manager.itemEnd(t);
            }, 0);
          } catch (e) {
            setTimeout(function () {
              r && r(e), i.manager.itemError(t), i.manager.itemEnd(t);
            }, 0);
          }
        } else {
          for (var v in xc[t] = [], xc[t].push({
            onLoad: e,
            onProgress: n,
            onError: r
          }), (o = new XMLHttpRequest()).open("GET", t, !0), o.addEventListener("load", function (e) {
            var n = this.response,
                r = xc[t];

            if (delete xc[t], 200 === this.status || 0 === this.status) {
              0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), mc.add(t, n);

              for (var a = 0, o = r.length; a < o; a++) {
                var s = r[a];
                s.onLoad && s.onLoad(n);
              }

              i.manager.itemEnd(t);
            } else {
              for (var c = 0, l = r.length; c < l; c++) {
                var u = r[c];
                u.onError && u.onError(e);
              }

              i.manager.itemError(t), i.manager.itemEnd(t);
            }
          }, !1), o.addEventListener("progress", function (e) {
            for (var n = xc[t], r = 0, i = n.length; r < i; r++) {
              var a = n[r];
              a.onProgress && a.onProgress(e);
            }
          }, !1), o.addEventListener("error", function (e) {
            var n = xc[t];
            delete xc[t];

            for (var r = 0, a = n.length; r < a; r++) {
              var o = n[r];
              o.onError && o.onError(e);
            }

            i.manager.itemError(t), i.manager.itemEnd(t);
          }, !1), o.addEventListener("abort", function (e) {
            var n = xc[t];
            delete xc[t];

            for (var r = 0, a = n.length; r < a; r++) {
              var o = n[r];
              o.onError && o.onError(e);
            }

            i.manager.itemError(t), i.manager.itemEnd(t);
          }, !1), void 0 !== this.responseType && (o.responseType = this.responseType), void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials), o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) {
            o.setRequestHeader(v, this.requestHeader[v]);
          }

          o.send(null);
        }

        return i.manager.itemStart(t), o;
      }

      xc[t].push({
        onLoad: e,
        onProgress: n,
        onError: r
      });
    },
    setResponseType: function setResponseType(t) {
      return this.responseType = t, this;
    },
    setMimeType: function setMimeType(t) {
      return this.mimeType = t, this;
    }
  }), bc.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: bc,
    load: function load(t, e, n, r) {
      var i = this,
          a = new _c(i.manager);
      a.setPath(i.path), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(t, function (n) {
        try {
          e(i.parse(JSON.parse(n)));
        } catch (e) {
          r ? r(e) : console.error(e), i.manager.itemError(t);
        }
      }, n, r);
    },
    parse: function parse(t) {
      for (var e = [], n = 0; n < t.length; n++) {
        var r = pc.parse(t[n]);
        e.push(r);
      }

      return e;
    }
  }), wc.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: wc,
    load: function load(t, e, n, r) {
      var i = this,
          a = [],
          o = new mo();
      o.image = a;
      var s = new _c(this.manager);
      s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(i.withCredentials);
      var c = 0;

      function l(l) {
        s.load(t[l], function (t) {
          var n = i.parse(t, !0);
          a[l] = {
            width: n.width,
            height: n.height,
            format: n.format,
            mipmaps: n.mipmaps
          }, 6 === (c += 1) && (1 === n.mipmapCount && (o.minFilter = m), o.format = n.format, o.needsUpdate = !0, e && e(o));
        }, n, r);
      }

      if (Array.isArray(t)) for (var u = 0, h = t.length; u < h; ++u) {
        l(u);
      } else s.load(t, function (t) {
        var n = i.parse(t, !0);
        if (n.isCubemap) for (var r = n.mipmaps.length / n.mipmapCount, s = 0; s < r; s++) {
          a[s] = {
            mipmaps: []
          };

          for (var c = 0; c < n.mipmapCount; c++) {
            a[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + c]), a[s].format = n.format, a[s].width = n.width, a[s].height = n.height;
          }
        } else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
        1 === n.mipmapCount && (o.minFilter = m), o.format = n.format, o.needsUpdate = !0, e && e(o);
      }, n, r);
      return o;
    }
  }), Mc.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: Mc,
    load: function load(t, e, n, r) {
      void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var i = this,
          a = mc.get(t);
      if (void 0 !== a) return i.manager.itemStart(t), setTimeout(function () {
        e && e(a), i.manager.itemEnd(t);
      }, 0), a;
      var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

      function s() {
        o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), mc.add(t, this), e && e(this), i.manager.itemEnd(t);
      }

      function c(e) {
        o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), r && r(e), i.manager.itemError(t), i.manager.itemEnd(t);
      }

      return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), i.manager.itemStart(t), o.src = t, o;
    }
  }), Sc.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: Sc,
    load: function load(t, e, n, r) {
      var i = new Jn(),
          a = new Mc(this.manager);
      a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
      var o = 0;

      function s(n) {
        a.load(t[n], function (t) {
          i.images[n] = t, 6 === ++o && (i.needsUpdate = !0, e && e(i));
        }, void 0, r);
      }

      for (var c = 0; c < t.length; ++c) {
        s(c);
      }

      return i;
    }
  }), Tc.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: Tc,
    load: function load(t, e, n, r) {
      var i = this,
          a = new Kn(),
          o = new _c(this.manager);
      return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(i.withCredentials), o.load(t, function (t) {
        var n = i.parse(t);
        n && (void 0 !== n.image ? a.image = n.image : void 0 !== n.data && (a.image.width = n.width, a.image.height = n.height, a.image.data = n.data), a.wrapS = void 0 !== n.wrapS ? n.wrapS : u, a.wrapT = void 0 !== n.wrapT ? n.wrapT : u, a.magFilter = void 0 !== n.magFilter ? n.magFilter : m, a.minFilter = void 0 !== n.minFilter ? n.minFilter : m, a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (a.format = n.format), void 0 !== n.type && (a.type = n.type), void 0 !== n.mipmaps && (a.mipmaps = n.mipmaps, a.minFilter = g), 1 === n.mipmapCount && (a.minFilter = m), a.needsUpdate = !0, e && e(a, n));
      }, n, r), a;
    }
  }), Ec.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: Ec,
    load: function load(t, e, n, r) {
      var i = new gt(),
          a = new Mc(this.manager);
      return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function (n) {
        i.image = n;
        var r = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
        i.format = r ? S : T, i.needsUpdate = !0, void 0 !== e && e(i);
      }, n, r), i;
    }
  }), Object.assign(Ac.prototype, {
    getPoint: function getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    },
    getPointAt: function getPointAt(t, e) {
      var n = this.getUtoTmapping(t);
      return this.getPoint(n, e);
    },
    getPoints: function getPoints(t) {
      void 0 === t && (t = 5);

      for (var e = [], n = 0; n <= t; n++) {
        e.push(this.getPoint(n / t));
      }

      return e;
    },
    getSpacedPoints: function getSpacedPoints(t) {
      void 0 === t && (t = 5);

      for (var e = [], n = 0; n <= t; n++) {
        e.push(this.getPointAt(n / t));
      }

      return e;
    },
    getLength: function getLength() {
      var t = this.getLengths();
      return t[t.length - 1];
    },
    getLengths: function getLengths(t) {
      if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var e,
          n = [],
          r = this.getPoint(0),
          i = 0;
      n.push(0);

      for (var a = 1; a <= t; a++) {
        i += (e = this.getPoint(a / t)).distanceTo(r), n.push(i), r = e;
      }

      return this.cacheArcLengths = n, n;
    },
    updateArcLengths: function updateArcLengths() {
      this.needsUpdate = !0, this.getLengths();
    },
    getUtoTmapping: function getUtoTmapping(t, e) {
      var n,
          r = this.getLengths(),
          i = 0,
          a = r.length;
      n = e || t * r[a - 1];

      for (var o, s = 0, c = a - 1; s <= c;) {
        if ((o = r[i = Math.floor(s + (c - s) / 2)] - n) < 0) s = i + 1;else {
          if (!(o > 0)) {
            c = i;
            break;
          }

          c = i - 1;
        }
      }

      if (r[i = c] === n) return i / (a - 1);
      var l = r[i];
      return (i + (n - l) / (r[i + 1] - l)) / (a - 1);
    },
    getTangent: function getTangent(t, e) {
      var n = 1e-4,
          r = t - n,
          i = t + n;
      r < 0 && (r = 0), i > 1 && (i = 1);
      var a = this.getPoint(r),
          o = this.getPoint(i),
          s = e || (a.isVector2 ? new pt() : new Mt());
      return s.copy(o).sub(a).normalize(), s;
    },
    getTangentAt: function getTangentAt(t, e) {
      var n = this.getUtoTmapping(t);
      return this.getTangent(n, e);
    },
    computeFrenetFrames: function computeFrenetFrames(t, e) {
      for (var n = new Mt(), r = [], i = [], a = [], o = new Mt(), s = new Qt(), c = 0; c <= t; c++) {
        var l = c / t;
        r[c] = this.getTangentAt(l, new Mt()), r[c].normalize();
      }

      i[0] = new Mt(), a[0] = new Mt();
      var u = Number.MAX_VALUE,
          h = Math.abs(r[0].x),
          d = Math.abs(r[0].y),
          p = Math.abs(r[0].z);
      h <= u && (u = h, n.set(1, 0, 0)), d <= u && (u = d, n.set(0, 1, 0)), p <= u && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], o), a[0].crossVectors(r[0], i[0]);

      for (var f = 1; f <= t; f++) {
        if (i[f] = i[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(r[f - 1], r[f]), o.length() > Number.EPSILON) {
          o.normalize();
          var m = Math.acos(st.clamp(r[f - 1].dot(r[f]), -1, 1));
          i[f].applyMatrix4(s.makeRotationAxis(o, m));
        }

        a[f].crossVectors(r[f], i[f]);
      }

      if (!0 === e) {
        var v = Math.acos(st.clamp(i[0].dot(i[t]), -1, 1));
        v /= t, r[0].dot(o.crossVectors(i[0], i[t])) > 0 && (v = -v);

        for (var g = 1; g <= t; g++) {
          i[g].applyMatrix4(s.makeRotationAxis(r[g], v * g)), a[g].crossVectors(r[g], i[g]);
        }
      }

      return {
        tangents: r,
        normals: i,
        binormals: a
      };
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    copy: function copy(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this;
    },
    toJSON: function toJSON() {
      var t = {
        metadata: {
          version: 4.5,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
    },
    fromJSON: function fromJSON(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this;
    }
  }), Lc.prototype = Object.create(Ac.prototype), Lc.prototype.constructor = Lc, Lc.prototype.isEllipseCurve = !0, Lc.prototype.getPoint = function (t, e) {
    for (var n = e || new pt(), r = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON; i < 0;) {
      i += r;
    }

    for (; i > r;) {
      i -= r;
    }

    i < Number.EPSILON && (i = a ? 0 : r), !0 !== this.aClockwise || a || (i === r ? i = -r : i -= r);
    var o = this.aStartAngle + t * i,
        s = this.aX + this.xRadius * Math.cos(o),
        c = this.aY + this.yRadius * Math.sin(o);

    if (0 !== this.aRotation) {
      var l = Math.cos(this.aRotation),
          u = Math.sin(this.aRotation),
          h = s - this.aX,
          d = c - this.aY;
      s = h * l - d * u + this.aX, c = h * u + d * l + this.aY;
    }

    return n.set(s, c);
  }, Lc.prototype.copy = function (t) {
    return Ac.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }, Lc.prototype.toJSON = function () {
    var t = Ac.prototype.toJSON.call(this);
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }, Lc.prototype.fromJSON = function (t) {
    return Ac.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }, Rc.prototype = Object.create(Lc.prototype), Rc.prototype.constructor = Rc, Rc.prototype.isArcCurve = !0;
  var Pc = new Mt(),
      Ic = new Cc(),
      Nc = new Cc(),
      Dc = new Cc();

  function Oc(t, e, n, r) {
    void 0 === t && (t = []), void 0 === e && (e = !1), void 0 === n && (n = "centripetal"), void 0 === r && (r = .5), Ac.call(this), this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = r;
  }

  function Bc(t, e, n, r, i) {
    var a = .5 * (r - e),
        o = .5 * (i - n),
        s = t * t;
    return (2 * n - 2 * r + a + o) * (t * s) + (-3 * n + 3 * r - 2 * a - o) * s + a * t + n;
  }

  function zc(t, e, n, r) {
    return function (t, e) {
      var n = 1 - t;
      return n * n * e;
    }(t, e) + function (t, e) {
      return 2 * (1 - t) * t * e;
    }(t, n) + function (t, e) {
      return t * t * e;
    }(t, r);
  }

  function Uc(t, e, n, r, i) {
    return function (t, e) {
      var n = 1 - t;
      return n * n * n * e;
    }(t, e) + function (t, e) {
      var n = 1 - t;
      return 3 * n * n * t * e;
    }(t, n) + function (t, e) {
      return 3 * (1 - t) * t * t * e;
    }(t, r) + function (t, e) {
      return t * t * t * e;
    }(t, i);
  }

  function Fc(t, e, n, r) {
    void 0 === t && (t = new pt()), void 0 === e && (e = new pt()), void 0 === n && (n = new pt()), void 0 === r && (r = new pt()), Ac.call(this), this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = r;
  }

  function Gc(t, e, n, r) {
    void 0 === t && (t = new Mt()), void 0 === e && (e = new Mt()), void 0 === n && (n = new Mt()), void 0 === r && (r = new Mt()), Ac.call(this), this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = r;
  }

  function Hc(t, e) {
    void 0 === t && (t = new pt()), void 0 === e && (e = new pt()), Ac.call(this), this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }

  function kc(t, e) {
    void 0 === t && (t = new Mt()), void 0 === e && (e = new Mt()), Ac.call(this), this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }

  function Vc(t, e, n) {
    void 0 === t && (t = new pt()), void 0 === e && (e = new pt()), void 0 === n && (n = new pt()), Ac.call(this), this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }

  function Wc(t, e, n) {
    void 0 === t && (t = new Mt()), void 0 === e && (e = new Mt()), void 0 === n && (n = new Mt()), Ac.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }

  function jc(t) {
    void 0 === t && (t = []), Ac.call(this), this.type = "SplineCurve", this.points = t;
  }

  Oc.prototype = Object.create(Ac.prototype), Oc.prototype.constructor = Oc, Oc.prototype.isCatmullRomCurve3 = !0, Oc.prototype.getPoint = function (t, e) {
    void 0 === e && (e = new Mt());
    var n,
        r,
        i = e,
        a = this.points,
        o = a.length,
        s = (o - (this.closed ? 0 : 1)) * t,
        c = Math.floor(s),
        l = s - c;
    this.closed ? c += c > 0 ? 0 : (Math.floor(Math.abs(c) / o) + 1) * o : 0 === l && c === o - 1 && (c = o - 2, l = 1), this.closed || c > 0 ? n = a[(c - 1) % o] : (Pc.subVectors(a[0], a[1]).add(a[0]), n = Pc);
    var u = a[c % o],
        h = a[(c + 1) % o];

    if (this.closed || c + 2 < o ? r = a[(c + 2) % o] : (Pc.subVectors(a[o - 1], a[o - 2]).add(a[o - 1]), r = Pc), "centripetal" === this.curveType || "chordal" === this.curveType) {
      var d = "chordal" === this.curveType ? .5 : .25,
          p = Math.pow(n.distanceToSquared(u), d),
          f = Math.pow(u.distanceToSquared(h), d),
          m = Math.pow(h.distanceToSquared(r), d);
      f < 1e-4 && (f = 1), p < 1e-4 && (p = f), m < 1e-4 && (m = f), Ic.initNonuniformCatmullRom(n.x, u.x, h.x, r.x, p, f, m), Nc.initNonuniformCatmullRom(n.y, u.y, h.y, r.y, p, f, m), Dc.initNonuniformCatmullRom(n.z, u.z, h.z, r.z, p, f, m);
    } else "catmullrom" === this.curveType && (Ic.initCatmullRom(n.x, u.x, h.x, r.x, this.tension), Nc.initCatmullRom(n.y, u.y, h.y, r.y, this.tension), Dc.initCatmullRom(n.z, u.z, h.z, r.z, this.tension));

    return i.set(Ic.calc(l), Nc.calc(l), Dc.calc(l)), i;
  }, Oc.prototype.copy = function (t) {
    Ac.prototype.copy.call(this, t), this.points = [];

    for (var e = 0, n = t.points.length; e < n; e++) {
      var r = t.points[e];
      this.points.push(r.clone());
    }

    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }, Oc.prototype.toJSON = function () {
    var t = Ac.prototype.toJSON.call(this);
    t.points = [];

    for (var e = 0, n = this.points.length; e < n; e++) {
      var r = this.points[e];
      t.points.push(r.toArray());
    }

    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }, Oc.prototype.fromJSON = function (t) {
    Ac.prototype.fromJSON.call(this, t), this.points = [];

    for (var e = 0, n = t.points.length; e < n; e++) {
      var r = t.points[e];
      this.points.push(new Mt().fromArray(r));
    }

    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }, Fc.prototype = Object.create(Ac.prototype), Fc.prototype.constructor = Fc, Fc.prototype.isCubicBezierCurve = !0, Fc.prototype.getPoint = function (t, e) {
    void 0 === e && (e = new pt());
    var n = e,
        r = this.v0,
        i = this.v1,
        a = this.v2,
        o = this.v3;
    return n.set(Uc(t, r.x, i.x, a.x, o.x), Uc(t, r.y, i.y, a.y, o.y)), n;
  }, Fc.prototype.copy = function (t) {
    return Ac.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }, Fc.prototype.toJSON = function () {
    var t = Ac.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }, Fc.prototype.fromJSON = function (t) {
    return Ac.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }, Gc.prototype = Object.create(Ac.prototype), Gc.prototype.constructor = Gc, Gc.prototype.isCubicBezierCurve3 = !0, Gc.prototype.getPoint = function (t, e) {
    void 0 === e && (e = new Mt());
    var n = e,
        r = this.v0,
        i = this.v1,
        a = this.v2,
        o = this.v3;
    return n.set(Uc(t, r.x, i.x, a.x, o.x), Uc(t, r.y, i.y, a.y, o.y), Uc(t, r.z, i.z, a.z, o.z)), n;
  }, Gc.prototype.copy = function (t) {
    return Ac.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }, Gc.prototype.toJSON = function () {
    var t = Ac.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }, Gc.prototype.fromJSON = function (t) {
    return Ac.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }, Hc.prototype = Object.create(Ac.prototype), Hc.prototype.constructor = Hc, Hc.prototype.isLineCurve = !0, Hc.prototype.getPoint = function (t, e) {
    void 0 === e && (e = new pt());
    var n = e;
    return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }, Hc.prototype.getPointAt = function (t, e) {
    return this.getPoint(t, e);
  }, Hc.prototype.getTangent = function (t, e) {
    var n = e || new pt();
    return n.copy(this.v2).sub(this.v1).normalize(), n;
  }, Hc.prototype.copy = function (t) {
    return Ac.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }, Hc.prototype.toJSON = function () {
    var t = Ac.prototype.toJSON.call(this);
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }, Hc.prototype.fromJSON = function (t) {
    return Ac.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }, kc.prototype = Object.create(Ac.prototype), kc.prototype.constructor = kc, kc.prototype.isLineCurve3 = !0, kc.prototype.getPoint = function (t, e) {
    void 0 === e && (e = new Mt());
    var n = e;
    return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }, kc.prototype.getPointAt = function (t, e) {
    return this.getPoint(t, e);
  }, kc.prototype.copy = function (t) {
    return Ac.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }, kc.prototype.toJSON = function () {
    var t = Ac.prototype.toJSON.call(this);
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }, kc.prototype.fromJSON = function (t) {
    return Ac.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }, Vc.prototype = Object.create(Ac.prototype), Vc.prototype.constructor = Vc, Vc.prototype.isQuadraticBezierCurve = !0, Vc.prototype.getPoint = function (t, e) {
    void 0 === e && (e = new pt());
    var n = e,
        r = this.v0,
        i = this.v1,
        a = this.v2;
    return n.set(zc(t, r.x, i.x, a.x), zc(t, r.y, i.y, a.y)), n;
  }, Vc.prototype.copy = function (t) {
    return Ac.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }, Vc.prototype.toJSON = function () {
    var t = Ac.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }, Vc.prototype.fromJSON = function (t) {
    return Ac.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }, Wc.prototype = Object.create(Ac.prototype), Wc.prototype.constructor = Wc, Wc.prototype.isQuadraticBezierCurve3 = !0, Wc.prototype.getPoint = function (t, e) {
    void 0 === e && (e = new Mt());
    var n = e,
        r = this.v0,
        i = this.v1,
        a = this.v2;
    return n.set(zc(t, r.x, i.x, a.x), zc(t, r.y, i.y, a.y), zc(t, r.z, i.z, a.z)), n;
  }, Wc.prototype.copy = function (t) {
    return Ac.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }, Wc.prototype.toJSON = function () {
    var t = Ac.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }, Wc.prototype.fromJSON = function (t) {
    return Ac.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }, jc.prototype = Object.create(Ac.prototype), jc.prototype.constructor = jc, jc.prototype.isSplineCurve = !0, jc.prototype.getPoint = function (t, e) {
    void 0 === e && (e = new pt());
    var n = e,
        r = this.points,
        i = (r.length - 1) * t,
        a = Math.floor(i),
        o = i - a,
        s = r[0 === a ? a : a - 1],
        c = r[a],
        l = r[a > r.length - 2 ? r.length - 1 : a + 1],
        u = r[a > r.length - 3 ? r.length - 1 : a + 2];
    return n.set(Bc(o, s.x, c.x, l.x, u.x), Bc(o, s.y, c.y, l.y, u.y)), n;
  }, jc.prototype.copy = function (t) {
    Ac.prototype.copy.call(this, t), this.points = [];

    for (var e = 0, n = t.points.length; e < n; e++) {
      var r = t.points[e];
      this.points.push(r.clone());
    }

    return this;
  }, jc.prototype.toJSON = function () {
    var t = Ac.prototype.toJSON.call(this);
    t.points = [];

    for (var e = 0, n = this.points.length; e < n; e++) {
      var r = this.points[e];
      t.points.push(r.toArray());
    }

    return t;
  }, jc.prototype.fromJSON = function (t) {
    Ac.prototype.fromJSON.call(this, t), this.points = [];

    for (var e = 0, n = t.points.length; e < n; e++) {
      var r = t.points[e];
      this.points.push(new pt().fromArray(r));
    }

    return this;
  };
  var qc = Object.freeze({
    __proto__: null,
    ArcCurve: Rc,
    CatmullRomCurve3: Oc,
    CubicBezierCurve: Fc,
    CubicBezierCurve3: Gc,
    EllipseCurve: Lc,
    LineCurve: Hc,
    LineCurve3: kc,
    QuadraticBezierCurve: Vc,
    QuadraticBezierCurve3: Wc,
    SplineCurve: jc
  });

  function Xc() {
    Ac.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }

  function Yc(t) {
    Xc.call(this), this.type = "Path", this.currentPoint = new pt(), t && this.setFromPoints(t);
  }

  function Zc(t) {
    Yc.call(this, t), this.uuid = st.generateUUID(), this.type = "Shape", this.holes = [];
  }

  function Jc(t, e) {
    void 0 === e && (e = 1), we.call(this), this.type = "Light", this.color = new We(t), this.intensity = e;
  }

  function Qc(t, e, n) {
    Jc.call(this, t, n), this.type = "HemisphereLight", this.position.copy(we.DefaultUp), this.updateMatrix(), this.groundColor = new We(e);
  }

  function Kc(t) {
    this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new pt(512, 512), this.map = null, this.mapPass = null, this.matrix = new Qt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new er(), this._frameExtents = new pt(1, 1), this._viewportCount = 1, this._viewports = [new xt(0, 0, 1, 1)];
  }

  function $c() {
    Kc.call(this, new Xn(50, 1, .5, 500)), this.focus = 1;
  }

  function tl(t, e, n, r, i, a) {
    Jc.call(this, t, e), this.type = "SpotLight", this.position.copy(we.DefaultUp), this.updateMatrix(), this.target = new we(), Object.defineProperty(this, "power", {
      get: function get() {
        return this.intensity * Math.PI;
      },
      set: function set(t) {
        this.intensity = t / Math.PI;
      }
    }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== r ? r : Math.PI / 3, this.penumbra = void 0 !== i ? i : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new $c();
  }

  function el() {
    Kc.call(this, new Xn(90, 1, .5, 500)), this._frameExtents = new pt(4, 2), this._viewportCount = 6, this._viewports = [new xt(2, 1, 1, 1), new xt(0, 1, 1, 1), new xt(3, 1, 1, 1), new xt(1, 1, 1, 1), new xt(3, 0, 1, 1), new xt(1, 0, 1, 1)], this._cubeDirections = [new Mt(1, 0, 0), new Mt(-1, 0, 0), new Mt(0, 0, 1), new Mt(0, 0, -1), new Mt(0, 1, 0), new Mt(0, -1, 0)], this._cubeUps = [new Mt(0, 1, 0), new Mt(0, 1, 0), new Mt(0, 1, 0), new Mt(0, 1, 0), new Mt(0, 0, 1), new Mt(0, 0, -1)];
  }

  function nl(t, e, n, r) {
    Jc.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
      get: function get() {
        return 4 * this.intensity * Math.PI;
      },
      set: function set(t) {
        this.intensity = t / (4 * Math.PI);
      }
    }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== r ? r : 1, this.shadow = new el();
  }

  function rl(t, e, n, r, i, a) {
    qn.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== t ? t : -1, this.right = void 0 !== e ? e : 1, this.top = void 0 !== n ? n : 1, this.bottom = void 0 !== r ? r : -1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix();
  }

  function il() {
    Kc.call(this, new rl(-5, 5, 5, -5, .5, 500));
  }

  function al(t, e) {
    Jc.call(this, t, e), this.type = "DirectionalLight", this.position.copy(we.DefaultUp), this.updateMatrix(), this.target = new we(), this.shadow = new il();
  }

  function ol(t, e) {
    Jc.call(this, t, e), this.type = "AmbientLight";
  }

  function sl(t, e, n, r) {
    Jc.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== r ? r : 10;
  }

  Xc.prototype = Object.assign(Object.create(Ac.prototype), {
    constructor: Xc,
    add: function add(t) {
      this.curves.push(t);
    },
    closePath: function closePath() {
      var t = this.curves[0].getPoint(0),
          e = this.curves[this.curves.length - 1].getPoint(1);
      t.equals(e) || this.curves.push(new Hc(e, t));
    },
    getPoint: function getPoint(t) {
      for (var e = t * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length;) {
        if (n[r] >= e) {
          var i = n[r] - e,
              a = this.curves[r],
              o = a.getLength(),
              s = 0 === o ? 0 : 1 - i / o;
          return a.getPointAt(s);
        }

        r++;
      }

      return null;
    },
    getLength: function getLength() {
      var t = this.getCurveLengths();
      return t[t.length - 1];
    },
    updateArcLengths: function updateArcLengths() {
      this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
    },
    getCurveLengths: function getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;

      for (var t = [], e = 0, n = 0, r = this.curves.length; n < r; n++) {
        e += this.curves[n].getLength(), t.push(e);
      }

      return this.cacheLengths = t, t;
    },
    getSpacedPoints: function getSpacedPoints(t) {
      void 0 === t && (t = 40);

      for (var e = [], n = 0; n <= t; n++) {
        e.push(this.getPoint(n / t));
      }

      return this.autoClose && e.push(e[0]), e;
    },
    getPoints: function getPoints(t) {
      void 0 === t && (t = 12);

      for (var e, n = [], r = 0, i = this.curves; r < i.length; r++) {
        for (var a = i[r], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
          var l = s[c];
          e && e.equals(l) || (n.push(l), e = l);
        }
      }

      return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n;
    },
    copy: function copy(t) {
      Ac.prototype.copy.call(this, t), this.curves = [];

      for (var e = 0, n = t.curves.length; e < n; e++) {
        var r = t.curves[e];
        this.curves.push(r.clone());
      }

      return this.autoClose = t.autoClose, this;
    },
    toJSON: function toJSON() {
      var t = Ac.prototype.toJSON.call(this);
      t.autoClose = this.autoClose, t.curves = [];

      for (var e = 0, n = this.curves.length; e < n; e++) {
        var r = this.curves[e];
        t.curves.push(r.toJSON());
      }

      return t;
    },
    fromJSON: function fromJSON(t) {
      Ac.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];

      for (var e = 0, n = t.curves.length; e < n; e++) {
        var r = t.curves[e];
        this.curves.push(new qc[r.type]().fromJSON(r));
      }

      return this;
    }
  }), Yc.prototype = Object.assign(Object.create(Xc.prototype), {
    constructor: Yc,
    setFromPoints: function setFromPoints(t) {
      this.moveTo(t[0].x, t[0].y);

      for (var e = 1, n = t.length; e < n; e++) {
        this.lineTo(t[e].x, t[e].y);
      }

      return this;
    },
    moveTo: function moveTo(t, e) {
      return this.currentPoint.set(t, e), this;
    },
    lineTo: function lineTo(t, e) {
      var n = new Hc(this.currentPoint.clone(), new pt(t, e));
      return this.curves.push(n), this.currentPoint.set(t, e), this;
    },
    quadraticCurveTo: function quadraticCurveTo(t, e, n, r) {
      var i = new Vc(this.currentPoint.clone(), new pt(t, e), new pt(n, r));
      return this.curves.push(i), this.currentPoint.set(n, r), this;
    },
    bezierCurveTo: function bezierCurveTo(t, e, n, r, i, a) {
      var o = new Fc(this.currentPoint.clone(), new pt(t, e), new pt(n, r), new pt(i, a));
      return this.curves.push(o), this.currentPoint.set(i, a), this;
    },
    splineThru: function splineThru(t) {
      var e = new jc([this.currentPoint.clone()].concat(t));
      return this.curves.push(e), this.currentPoint.copy(t[t.length - 1]), this;
    },
    arc: function arc(t, e, n, r, i, a) {
      var o = this.currentPoint.x,
          s = this.currentPoint.y;
      return this.absarc(t + o, e + s, n, r, i, a), this;
    },
    absarc: function absarc(t, e, n, r, i, a) {
      return this.absellipse(t, e, n, n, r, i, a), this;
    },
    ellipse: function ellipse(t, e, n, r, i, a, o, s) {
      var c = this.currentPoint.x,
          l = this.currentPoint.y;
      return this.absellipse(t + c, e + l, n, r, i, a, o, s), this;
    },
    absellipse: function absellipse(t, e, n, r, i, a, o, s) {
      var c = new Lc(t, e, n, r, i, a, o, s);

      if (this.curves.length > 0) {
        var l = c.getPoint(0);
        l.equals(this.currentPoint) || this.lineTo(l.x, l.y);
      }

      this.curves.push(c);
      var u = c.getPoint(1);
      return this.currentPoint.copy(u), this;
    },
    copy: function copy(t) {
      return Xc.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this;
    },
    toJSON: function toJSON() {
      var t = Xc.prototype.toJSON.call(this);
      return t.currentPoint = this.currentPoint.toArray(), t;
    },
    fromJSON: function fromJSON(t) {
      return Xc.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this;
    }
  }), Zc.prototype = Object.assign(Object.create(Yc.prototype), {
    constructor: Zc,
    getPointsHoles: function getPointsHoles(t) {
      for (var e = [], n = 0, r = this.holes.length; n < r; n++) {
        e[n] = this.holes[n].getPoints(t);
      }

      return e;
    },
    extractPoints: function extractPoints(t) {
      return {
        shape: this.getPoints(t),
        holes: this.getPointsHoles(t)
      };
    },
    copy: function copy(t) {
      Yc.prototype.copy.call(this, t), this.holes = [];

      for (var e = 0, n = t.holes.length; e < n; e++) {
        var r = t.holes[e];
        this.holes.push(r.clone());
      }

      return this;
    },
    toJSON: function toJSON() {
      var t = Yc.prototype.toJSON.call(this);
      t.uuid = this.uuid, t.holes = [];

      for (var e = 0, n = this.holes.length; e < n; e++) {
        var r = this.holes[e];
        t.holes.push(r.toJSON());
      }

      return t;
    },
    fromJSON: function fromJSON(t) {
      Yc.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];

      for (var e = 0, n = t.holes.length; e < n; e++) {
        var r = t.holes[e];
        this.holes.push(new Yc().fromJSON(r));
      }

      return this;
    }
  }), Jc.prototype = Object.assign(Object.create(we.prototype), {
    constructor: Jc,
    isLight: !0,
    copy: function copy(t) {
      return we.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this;
    },
    toJSON: function toJSON(t) {
      var e = we.prototype.toJSON.call(this, t);
      return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
    }
  }), Qc.prototype = Object.assign(Object.create(Jc.prototype), {
    constructor: Qc,
    isHemisphereLight: !0,
    copy: function copy(t) {
      return Jc.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this;
    }
  }), Object.assign(Kc.prototype, {
    _projScreenMatrix: new Qt(),
    _lightPositionWorld: new Mt(),
    _lookTarget: new Mt(),
    getViewportCount: function getViewportCount() {
      return this._viewportCount;
    },
    getFrustum: function getFrustum() {
      return this._frustum;
    },
    updateMatrices: function updateMatrices(t) {
      var e = this.camera,
          n = this.matrix,
          r = this._projScreenMatrix,
          i = this._lookTarget,
          a = this._lightPositionWorld;
      a.setFromMatrixPosition(t.matrixWorld), e.position.copy(a), i.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(i), e.updateMatrixWorld(), r.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(r), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse);
    },
    getViewport: function getViewport(t) {
      return this._viewports[t];
    },
    getFrameExtents: function getFrameExtents() {
      return this._frameExtents;
    },
    copy: function copy(t) {
      return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    toJSON: function toJSON() {
      var t = {};
      return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
    }
  }), $c.prototype = Object.assign(Object.create(Kc.prototype), {
    constructor: $c,
    isSpotLightShadow: !0,
    updateMatrices: function updateMatrices(t) {
      var e = this.camera,
          n = 2 * st.RAD2DEG * t.angle * this.focus,
          r = this.mapSize.width / this.mapSize.height,
          i = t.distance || e.far;
      n === e.fov && r === e.aspect && i === e.far || (e.fov = n, e.aspect = r, e.far = i, e.updateProjectionMatrix()), Kc.prototype.updateMatrices.call(this, t);
    }
  }), tl.prototype = Object.assign(Object.create(Jc.prototype), {
    constructor: tl,
    isSpotLight: !0,
    copy: function copy(t) {
      return Jc.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
    }
  }), el.prototype = Object.assign(Object.create(Kc.prototype), {
    constructor: el,
    isPointLightShadow: !0,
    updateMatrices: function updateMatrices(t, e) {
      void 0 === e && (e = 0);
      var n = this.camera,
          r = this.matrix,
          i = this._lightPositionWorld,
          a = this._lookTarget,
          o = this._projScreenMatrix;
      i.setFromMatrixPosition(t.matrixWorld), n.position.copy(i), a.copy(n.position), a.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(a), n.updateMatrixWorld(), r.makeTranslation(-i.x, -i.y, -i.z), o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(o);
    }
  }), nl.prototype = Object.assign(Object.create(Jc.prototype), {
    constructor: nl,
    isPointLight: !0,
    copy: function copy(t) {
      return Jc.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
    }
  }), rl.prototype = Object.assign(Object.create(qn.prototype), {
    constructor: rl,
    isOrthographicCamera: !0,
    copy: function copy(t, e) {
      return qn.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this;
    },
    setViewOffset: function setViewOffset(t, e, n, r, i, a) {
      null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
    },
    clearViewOffset: function clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function updateProjectionMatrix() {
      var t = (this.right - this.left) / (2 * this.zoom),
          e = (this.top - this.bottom) / (2 * this.zoom),
          n = (this.right + this.left) / 2,
          r = (this.top + this.bottom) / 2,
          i = n - t,
          a = n + t,
          o = r + e,
          s = r - e;

      if (null !== this.view && this.view.enabled) {
        var c = (this.right - this.left) / this.view.fullWidth / this.zoom,
            l = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        a = (i += c * this.view.offsetX) + c * this.view.width, s = (o -= l * this.view.offsetY) - l * this.view.height;
      }

      this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    },
    toJSON: function toJSON(t) {
      var e = we.prototype.toJSON.call(this, t);
      return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
    }
  }), il.prototype = Object.assign(Object.create(Kc.prototype), {
    constructor: il,
    isDirectionalLightShadow: !0,
    updateMatrices: function updateMatrices(t) {
      Kc.prototype.updateMatrices.call(this, t);
    }
  }), al.prototype = Object.assign(Object.create(Jc.prototype), {
    constructor: al,
    isDirectionalLight: !0,
    copy: function copy(t) {
      return Jc.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
    }
  }), ol.prototype = Object.assign(Object.create(Jc.prototype), {
    constructor: ol,
    isAmbientLight: !0
  }), sl.prototype = Object.assign(Object.create(Jc.prototype), {
    constructor: sl,
    isRectAreaLight: !0,
    copy: function copy(t) {
      return Jc.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this;
    },
    toJSON: function toJSON(t) {
      var e = Jc.prototype.toJSON.call(this, t);
      return e.object.width = this.width, e.object.height = this.height, e;
    }
  });

  var cl = function () {
    function t() {
      Object.defineProperty(this, "isSphericalHarmonics3", {
        value: !0
      }), this.coefficients = [];

      for (var t = 0; t < 9; t++) {
        this.coefficients.push(new Mt());
      }
    }

    var e = t.prototype;
    return e.set = function (t) {
      for (var e = 0; e < 9; e++) {
        this.coefficients[e].copy(t[e]);
      }

      return this;
    }, e.zero = function () {
      for (var t = 0; t < 9; t++) {
        this.coefficients[t].set(0, 0, 0);
      }

      return this;
    }, e.getAt = function (t, e) {
      var n = t.x,
          r = t.y,
          i = t.z,
          a = this.coefficients;
      return e.copy(a[0]).multiplyScalar(.282095), e.addScaledVector(a[1], .488603 * r), e.addScaledVector(a[2], .488603 * i), e.addScaledVector(a[3], .488603 * n), e.addScaledVector(a[4], n * r * 1.092548), e.addScaledVector(a[5], r * i * 1.092548), e.addScaledVector(a[6], .315392 * (3 * i * i - 1)), e.addScaledVector(a[7], n * i * 1.092548), e.addScaledVector(a[8], .546274 * (n * n - r * r)), e;
    }, e.getIrradianceAt = function (t, e) {
      var n = t.x,
          r = t.y,
          i = t.z,
          a = this.coefficients;
      return e.copy(a[0]).multiplyScalar(.886227), e.addScaledVector(a[1], 1.023328 * r), e.addScaledVector(a[2], 1.023328 * i), e.addScaledVector(a[3], 1.023328 * n), e.addScaledVector(a[4], .858086 * n * r), e.addScaledVector(a[5], .858086 * r * i), e.addScaledVector(a[6], .743125 * i * i - .247708), e.addScaledVector(a[7], .858086 * n * i), e.addScaledVector(a[8], .429043 * (n * n - r * r)), e;
    }, e.add = function (t) {
      for (var e = 0; e < 9; e++) {
        this.coefficients[e].add(t.coefficients[e]);
      }

      return this;
    }, e.addScaledSH = function (t, e) {
      for (var n = 0; n < 9; n++) {
        this.coefficients[n].addScaledVector(t.coefficients[n], e);
      }

      return this;
    }, e.scale = function (t) {
      for (var e = 0; e < 9; e++) {
        this.coefficients[e].multiplyScalar(t);
      }

      return this;
    }, e.lerp = function (t, e) {
      for (var n = 0; n < 9; n++) {
        this.coefficients[n].lerp(t.coefficients[n], e);
      }

      return this;
    }, e.equals = function (t) {
      for (var e = 0; e < 9; e++) {
        if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
      }

      return !0;
    }, e.copy = function (t) {
      return this.set(t.coefficients);
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.fromArray = function (t, e) {
      void 0 === e && (e = 0);

      for (var n = this.coefficients, r = 0; r < 9; r++) {
        n[r].fromArray(t, e + 3 * r);
      }

      return this;
    }, e.toArray = function (t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);

      for (var n = this.coefficients, r = 0; r < 9; r++) {
        n[r].toArray(t, e + 3 * r);
      }

      return t;
    }, t.getBasisAt = function (t, e) {
      var n = t.x,
          r = t.y,
          i = t.z;
      e[0] = .282095, e[1] = .488603 * r, e[2] = .488603 * i, e[3] = .488603 * n, e[4] = 1.092548 * n * r, e[5] = 1.092548 * r * i, e[6] = .315392 * (3 * i * i - 1), e[7] = 1.092548 * n * i, e[8] = .546274 * (n * n - r * r);
    }, t;
  }();

  function ll(t, e) {
    Jc.call(this, void 0, e), this.type = "LightProbe", this.sh = void 0 !== t ? t : new cl();
  }

  function ul(t) {
    yc.call(this, t), this.textures = {};
  }

  ll.prototype = Object.assign(Object.create(Jc.prototype), {
    constructor: ll,
    isLightProbe: !0,
    copy: function copy(t) {
      return Jc.prototype.copy.call(this, t), this.sh.copy(t.sh), this;
    },
    fromJSON: function fromJSON(t) {
      return this.intensity = t.intensity, this.sh.fromArray(t.sh), this;
    },
    toJSON: function toJSON(t) {
      var e = Jc.prototype.toJSON.call(this, t);
      return e.object.sh = this.sh.toArray(), e;
    }
  }), ul.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: ul,
    load: function load(t, e, n, r) {
      var i = this,
          a = new _c(i.manager);
      a.setPath(i.path), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(t, function (n) {
        try {
          e(i.parse(JSON.parse(n)));
        } catch (e) {
          r ? r(e) : console.error(e), i.manager.itemError(t);
        }
      }, n, r);
    },
    parse: function parse(t) {
      var e = this.textures;

      function n(t) {
        return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t];
      }

      var r = new $s[t.type]();
      if (void 0 !== t.uuid && (r.uuid = t.uuid), void 0 !== t.name && (r.name = t.name), void 0 !== t.color && void 0 !== r.color && r.color.setHex(t.color), void 0 !== t.roughness && (r.roughness = t.roughness), void 0 !== t.metalness && (r.metalness = t.metalness), void 0 !== t.sheen && (r.sheen = new We().setHex(t.sheen)), void 0 !== t.emissive && void 0 !== r.emissive && r.emissive.setHex(t.emissive), void 0 !== t.specular && void 0 !== r.specular && r.specular.setHex(t.specular), void 0 !== t.shininess && (r.shininess = t.shininess), void 0 !== t.clearcoat && (r.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (r.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.fog && (r.fog = t.fog), void 0 !== t.flatShading && (r.flatShading = t.flatShading), void 0 !== t.blending && (r.blending = t.blending), void 0 !== t.combine && (r.combine = t.combine), void 0 !== t.side && (r.side = t.side), void 0 !== t.opacity && (r.opacity = t.opacity), void 0 !== t.transparent && (r.transparent = t.transparent), void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest), void 0 !== t.depthTest && (r.depthTest = t.depthTest), void 0 !== t.depthWrite && (r.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (r.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (r.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (r.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (r.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (r.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (r.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (r.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (r.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (r.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (r.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (r.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (r.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (r.rotation = t.rotation), 1 !== t.linewidth && (r.linewidth = t.linewidth), void 0 !== t.dashSize && (r.dashSize = t.dashSize), void 0 !== t.gapSize && (r.gapSize = t.gapSize), void 0 !== t.scale && (r.scale = t.scale), void 0 !== t.polygonOffset && (r.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (r.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (r.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (r.skinning = t.skinning), void 0 !== t.morphTargets && (r.morphTargets = t.morphTargets), void 0 !== t.morphNormals && (r.morphNormals = t.morphNormals), void 0 !== t.dithering && (r.dithering = t.dithering), void 0 !== t.vertexTangents && (r.vertexTangents = t.vertexTangents), void 0 !== t.visible && (r.visible = t.visible), void 0 !== t.toneMapped && (r.toneMapped = t.toneMapped), void 0 !== t.userData && (r.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? r.vertexColors = t.vertexColors > 0 : r.vertexColors = t.vertexColors), void 0 !== t.uniforms) for (var i in t.uniforms) {
        var a = t.uniforms[i];

        switch (r.uniforms[i] = {}, a.type) {
          case "t":
            r.uniforms[i].value = n(a.value);
            break;

          case "c":
            r.uniforms[i].value = new We().setHex(a.value);
            break;

          case "v2":
            r.uniforms[i].value = new pt().fromArray(a.value);
            break;

          case "v3":
            r.uniforms[i].value = new Mt().fromArray(a.value);
            break;

          case "v4":
            r.uniforms[i].value = new xt().fromArray(a.value);
            break;

          case "m3":
            r.uniforms[i].value = new ft().fromArray(a.value);
            break;

          case "m4":
            r.uniforms[i].value = new Qt().fromArray(a.value);
            break;

          default:
            r.uniforms[i].value = a.value;
        }
      }
      if (void 0 !== t.defines && (r.defines = t.defines), void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader), void 0 !== t.extensions) for (var o in t.extensions) {
        r.extensions[o] = t.extensions[o];
      }

      if (void 0 !== t.shading && (r.flatShading = 1 === t.shading), void 0 !== t.size && (r.size = t.size), void 0 !== t.sizeAttenuation && (r.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (r.map = n(t.map)), void 0 !== t.matcap && (r.matcap = n(t.matcap)), void 0 !== t.alphaMap && (r.alphaMap = n(t.alphaMap)), void 0 !== t.bumpMap && (r.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (r.bumpScale = t.bumpScale), void 0 !== t.normalMap && (r.normalMap = n(t.normalMap)), void 0 !== t.normalMapType && (r.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
        var s = t.normalScale;
        !1 === Array.isArray(s) && (s = [s, s]), r.normalScale = new pt().fromArray(s);
      }

      return void 0 !== t.displacementMap && (r.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (r.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (r.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (r.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (r.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (r.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (r.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (r.specularMap = n(t.specularMap)), void 0 !== t.envMap && (r.envMap = n(t.envMap)), void 0 !== t.envMapIntensity && (r.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (r.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (r.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (r.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (r.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (r.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (r.gradientMap = n(t.gradientMap)), void 0 !== t.clearcoatMap && (r.clearcoatMap = n(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (r.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (r.clearcoatNormalMap = n(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (r.clearcoatNormalScale = new pt().fromArray(t.clearcoatNormalScale)), void 0 !== t.transmission && (r.transmission = t.transmission), void 0 !== t.transmissionMap && (r.transmissionMap = n(t.transmissionMap)), r;
    },
    setTextures: function setTextures(t) {
      return this.textures = t, this;
    }
  });
  var hl = {
    decodeText: function decodeText(t) {
      if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(t);

      for (var e = "", n = 0, r = t.length; n < r; n++) {
        e += String.fromCharCode(t[n]);
      }

      try {
        return decodeURIComponent(escape(e));
      } catch (t) {
        return e;
      }
    },
    extractUrlBase: function extractUrlBase(t) {
      var e = t.lastIndexOf("/");
      return -1 === e ? "./" : t.substr(0, e + 1);
    }
  };

  function dl() {
    _n.call(this), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }

  function pl(t, e, n, r) {
    "number" == typeof n && (r = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), Qe.call(this, t, e, n), this.meshPerAttribute = r || 1;
  }

  function fl(t) {
    yc.call(this, t);
  }

  dl.prototype = Object.assign(Object.create(_n.prototype), {
    constructor: dl,
    isInstancedBufferGeometry: !0,
    copy: function copy(t) {
      return _n.prototype.copy.call(this, t), this.instanceCount = t.instanceCount, this;
    },
    clone: function clone() {
      return new this.constructor().copy(this);
    },
    toJSON: function toJSON() {
      var t = _n.prototype.toJSON.call(this);

      return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
    }
  }), pl.prototype = Object.assign(Object.create(Qe.prototype), {
    constructor: pl,
    isInstancedBufferAttribute: !0,
    copy: function copy(t) {
      return Qe.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this;
    },
    toJSON: function toJSON() {
      var t = Qe.prototype.toJSON.call(this);
      return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
    }
  }), fl.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: fl,
    load: function load(t, e, n, r) {
      var i = this,
          a = new _c(i.manager);
      a.setPath(i.path), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(t, function (n) {
        try {
          e(i.parse(JSON.parse(n)));
        } catch (e) {
          r ? r(e) : console.error(e), i.manager.itemError(t);
        }
      }, n, r);
    },
    parse: function parse(t) {
      var e = {},
          n = {};

      function r(t, r) {
        if (void 0 !== e[r]) return e[r];

        var i = t.interleavedBuffers[r],
            a = function (t, e) {
          if (void 0 !== n[e]) return n[e];
          var r = t.arrayBuffers[e],
              i = new Uint32Array(r).buffer;
          return n[e] = i, i;
        }(t, i.buffer),
            o = new da(dn(i.type, a), i.stride);

        return o.uuid = i.uuid, e[r] = o, o;
      }

      var i = t.isInstancedBufferGeometry ? new dl() : new _n(),
          a = t.data.index;

      if (void 0 !== a) {
        var o = dn(a.type, a.array);
        i.setIndex(new Qe(o, 1));
      }

      var s = t.data.attributes;

      for (var c in s) {
        var l = s[c],
            u = void 0;

        if (l.isInterleavedBufferAttribute) {
          u = new ma(r(t.data, l.data), l.itemSize, l.offset, l.normalized);
        } else {
          var h = dn(l.type, l.array);
          u = new (l.isInstancedBufferAttribute ? pl : Qe)(h, l.itemSize, l.normalized);
        }

        void 0 !== l.name && (u.name = l.name), i.setAttribute(c, u);
      }

      var d = t.data.morphAttributes;
      if (d) for (var p in d) {
        for (var f = d[p], m = [], v = 0, g = f.length; v < g; v++) {
          var y = f[v],
              x = void 0;
          if (y.isInterleavedBufferAttribute) x = new ma(r(t.data, y.data), y.itemSize, y.offset, y.normalized);else x = new Qe(dn(y.type, y.array), y.itemSize, y.normalized);
          void 0 !== y.name && (x.name = y.name), m.push(x);
        }

        i.morphAttributes[p] = m;
      }
      t.data.morphTargetsRelative && (i.morphTargetsRelative = !0);

      var _ = t.data.groups || t.data.drawcalls || t.data.offsets;

      if (void 0 !== _) for (var b = 0, w = _.length; b !== w; ++b) {
        var M = _[b];
        i.addGroup(M.start, M.count, M.materialIndex);
      }
      var S = t.data.boundingSphere;

      if (void 0 !== S) {
        var T = new Mt();
        void 0 !== S.center && T.fromArray(S.center), i.boundingSphere = new kt(T, S.radius);
      }

      return t.name && (i.name = t.name), t.userData && (i.userData = t.userData), i;
    }
  });

  var ml,
      vl = function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }

    ut(e, t);
    var n = e.prototype;
    return n.load = function (t, e, n, r) {
      var i = this,
          a = "" === this.path ? hl.extractUrlBase(t) : this.path;
      this.resourcePath = this.resourcePath || a;
      var o = new _c(this.manager);
      o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, function (n) {
        var a = null;

        try {
          a = JSON.parse(n);
        } catch (e) {
          return void 0 !== r && r(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message);
        }

        var o = a.metadata;
        void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? i.parse(a, e) : console.error("THREE.ObjectLoader: Can't load " + t);
      }, n, r);
    }, n.parse = function (t, e) {
      var n = this.parseAnimations(t.animations),
          r = this.parseShapes(t.shapes),
          i = this.parseGeometries(t.geometries, r),
          a = this.parseImages(t.images, function () {
        void 0 !== e && e(c);
      }),
          o = this.parseTextures(t.textures, a),
          s = this.parseMaterials(t.materials, o),
          c = this.parseObject(t.object, i, s, n),
          l = this.parseSkeletons(t.skeletons, c);

      if (this.bindSkeletons(c, l), void 0 !== e) {
        var u = !1;

        for (var h in a) {
          if (a[h] instanceof HTMLImageElement) {
            u = !0;
            break;
          }
        }

        !1 === u && e(c);
      }

      return c;
    }, n.parseShapes = function (t) {
      var e = {};
      if (void 0 !== t) for (var n = 0, r = t.length; n < r; n++) {
        var i = new Zc().fromJSON(t[n]);
        e[i.uuid] = i;
      }
      return e;
    }, n.parseSkeletons = function (t, e) {
      var n = {},
          r = {};
      if (e.traverse(function (t) {
        t.isBone && (r[t.uuid] = t);
      }), void 0 !== t) for (var i = 0, a = t.length; i < a; i++) {
        var o = new Va().fromJSON(t[i], r);
        n[o.uuid] = o;
      }
      return n;
    }, n.parseGeometries = function (t, e) {
      var n,
          r = {};
      if (void 0 !== t) for (var i = new fl(), a = 0, o = t.length; a < o; a++) {
        var s = void 0,
            c = t[a];

        switch (c.type) {
          case "PlaneGeometry":
          case "PlaneBufferGeometry":
            s = new ks[c.type](c.width, c.height, c.widthSegments, c.heightSegments);
            break;

          case "BoxGeometry":
          case "BoxBufferGeometry":
          case "CubeGeometry":
            s = new ks[c.type](c.width, c.height, c.depth, c.widthSegments, c.heightSegments, c.depthSegments);
            break;

          case "CircleGeometry":
          case "CircleBufferGeometry":
            s = new ks[c.type](c.radius, c.segments, c.thetaStart, c.thetaLength);
            break;

          case "CylinderGeometry":
          case "CylinderBufferGeometry":
            s = new ks[c.type](c.radiusTop, c.radiusBottom, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
            break;

          case "ConeGeometry":
          case "ConeBufferGeometry":
            s = new ks[c.type](c.radius, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
            break;

          case "SphereGeometry":
          case "SphereBufferGeometry":
            s = new ks[c.type](c.radius, c.widthSegments, c.heightSegments, c.phiStart, c.phiLength, c.thetaStart, c.thetaLength);
            break;

          case "DodecahedronGeometry":
          case "DodecahedronBufferGeometry":
          case "IcosahedronGeometry":
          case "IcosahedronBufferGeometry":
          case "OctahedronGeometry":
          case "OctahedronBufferGeometry":
          case "TetrahedronGeometry":
          case "TetrahedronBufferGeometry":
            s = new ks[c.type](c.radius, c.detail);
            break;

          case "RingGeometry":
          case "RingBufferGeometry":
            s = new ks[c.type](c.innerRadius, c.outerRadius, c.thetaSegments, c.phiSegments, c.thetaStart, c.thetaLength);
            break;

          case "TorusGeometry":
          case "TorusBufferGeometry":
            s = new ks[c.type](c.radius, c.tube, c.radialSegments, c.tubularSegments, c.arc);
            break;

          case "TorusKnotGeometry":
          case "TorusKnotBufferGeometry":
            s = new ks[c.type](c.radius, c.tube, c.tubularSegments, c.radialSegments, c.p, c.q);
            break;

          case "TubeGeometry":
          case "TubeBufferGeometry":
            s = new ks[c.type](new qc[c.path.type]().fromJSON(c.path), c.tubularSegments, c.radius, c.radialSegments, c.closed);
            break;

          case "LatheGeometry":
          case "LatheBufferGeometry":
            s = new ks[c.type](c.points, c.segments, c.phiStart, c.phiLength);
            break;

          case "PolyhedronGeometry":
          case "PolyhedronBufferGeometry":
            s = new ks[c.type](c.vertices, c.indices, c.radius, c.details);
            break;

          case "ShapeGeometry":
          case "ShapeBufferGeometry":
            n = [];

            for (var l = 0, u = c.shapes.length; l < u; l++) {
              var h = e[c.shapes[l]];
              n.push(h);
            }

            s = new ks[c.type](n, c.curveSegments);
            break;

          case "ExtrudeGeometry":
          case "ExtrudeBufferGeometry":
            n = [];

            for (var d = 0, p = c.shapes.length; d < p; d++) {
              var f = e[c.shapes[d]];
              n.push(f);
            }

            var m = c.options.extrudePath;
            void 0 !== m && (c.options.extrudePath = new qc[m.type]().fromJSON(m)), s = new ks[c.type](n, c.options);
            break;

          case "BufferGeometry":
          case "InstancedBufferGeometry":
            s = i.parse(c);
            break;

          case "Geometry":
            console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
            break;

          default:
            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + c.type + '"');
            continue;
        }

        s.uuid = c.uuid, void 0 !== c.name && (s.name = c.name), !0 === s.isBufferGeometry && void 0 !== c.userData && (s.userData = c.userData), r[c.uuid] = s;
      }
      return r;
    }, n.parseMaterials = function (t, e) {
      var n = {},
          r = {};

      if (void 0 !== t) {
        var i = new ul();
        i.setTextures(e);

        for (var a = 0, o = t.length; a < o; a++) {
          var s = t[a];

          if ("MultiMaterial" === s.type) {
            for (var c = [], l = 0; l < s.materials.length; l++) {
              var u = s.materials[l];
              void 0 === n[u.uuid] && (n[u.uuid] = i.parse(u)), c.push(n[u.uuid]);
            }

            r[s.uuid] = c;
          } else void 0 === n[s.uuid] && (n[s.uuid] = i.parse(s)), r[s.uuid] = n[s.uuid];
        }
      }

      return r;
    }, n.parseAnimations = function (t) {
      var e = {};
      if (void 0 !== t) for (var n = 0; n < t.length; n++) {
        var r = t[n],
            i = pc.parse(r);
        e[i.uuid] = i;
      }
      return e;
    }, n.parseImages = function (t, e) {
      var n,
          r = this,
          i = {};

      function a(t) {
        if ("string" == typeof t) {
          var e = t;
          return function (t) {
            return r.manager.itemStart(t), n.load(t, function () {
              r.manager.itemEnd(t);
            }, void 0, function () {
              r.manager.itemError(t), r.manager.itemEnd(t);
            });
          }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : r.resourcePath + e);
        }

        return t.data ? {
          data: dn(t.type, t.data),
          width: t.width,
          height: t.height
        } : null;
      }

      if (void 0 !== t && t.length > 0) {
        var o = new vc(e);
        (n = new Mc(o)).setCrossOrigin(this.crossOrigin);

        for (var s = 0, c = t.length; s < c; s++) {
          var l = t[s],
              u = l.url;

          if (Array.isArray(u)) {
            i[l.uuid] = [];

            for (var h = 0, d = u.length; h < d; h++) {
              var p = a(u[h]);
              null !== p && (p instanceof HTMLImageElement ? i[l.uuid].push(p) : i[l.uuid].push(new Kn(p.data, p.width, p.height)));
            }
          } else {
            var f = a(l.url);
            null !== f && (i[l.uuid] = f);
          }
        }
      }

      return i;
    }, n.parseTextures = function (t, e) {
      function n(t, e) {
        return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]);
      }

      var r = {};
      if (void 0 !== t) for (var i = 0, a = t.length; i < a; i++) {
        var o = t[i];
        void 0 === o.image && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), void 0 === e[o.image] && console.warn("THREE.ObjectLoader: Undefined image", o.image);
        var s = void 0,
            c = e[o.image];
        Array.isArray(c) ? (s = new Jn(c), 6 === c.length && (s.needsUpdate = !0)) : (s = c && c.data ? new Kn(c.data, c.width, c.height) : new gt(c), c && (s.needsUpdate = !0)), s.uuid = o.uuid, void 0 !== o.name && (s.name = o.name), void 0 !== o.mapping && (s.mapping = n(o.mapping, gl)), void 0 !== o.offset && s.offset.fromArray(o.offset), void 0 !== o.repeat && s.repeat.fromArray(o.repeat), void 0 !== o.center && s.center.fromArray(o.center), void 0 !== o.rotation && (s.rotation = o.rotation), void 0 !== o.wrap && (s.wrapS = n(o.wrap[0], yl), s.wrapT = n(o.wrap[1], yl)), void 0 !== o.format && (s.format = o.format), void 0 !== o.type && (s.type = o.type), void 0 !== o.encoding && (s.encoding = o.encoding), void 0 !== o.minFilter && (s.minFilter = n(o.minFilter, xl)), void 0 !== o.magFilter && (s.magFilter = n(o.magFilter, xl)), void 0 !== o.anisotropy && (s.anisotropy = o.anisotropy), void 0 !== o.flipY && (s.flipY = o.flipY), void 0 !== o.premultiplyAlpha && (s.premultiplyAlpha = o.premultiplyAlpha), void 0 !== o.unpackAlignment && (s.unpackAlignment = o.unpackAlignment), r[o.uuid] = s;
      }
      return r;
    }, n.parseObject = function (t, e, n, r) {
      var i, a, o;

      function s(t) {
        return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t];
      }

      function c(t) {
        if (void 0 !== t) {
          if (Array.isArray(t)) {
            for (var e = [], r = 0, i = t.length; r < i; r++) {
              var a = t[r];
              void 0 === n[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(n[a]);
            }

            return e;
          }

          return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t];
        }
      }

      switch (t.type) {
        case "Scene":
          i = new ha(), void 0 !== t.background && Number.isInteger(t.background) && (i.background = new We(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? i.fog = new ua(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (i.fog = new la(t.fog.color, t.fog.density)));
          break;

        case "PerspectiveCamera":
          i = new Xn(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (i.focus = t.focus), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.filmGauge && (i.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (i.filmOffset = t.filmOffset), void 0 !== t.view && (i.view = Object.assign({}, t.view));
          break;

        case "OrthographicCamera":
          i = new rl(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.view && (i.view = Object.assign({}, t.view));
          break;

        case "AmbientLight":
          i = new ol(t.color, t.intensity);
          break;

        case "DirectionalLight":
          i = new al(t.color, t.intensity);
          break;

        case "PointLight":
          i = new nl(t.color, t.intensity, t.distance, t.decay);
          break;

        case "RectAreaLight":
          i = new sl(t.color, t.intensity, t.width, t.height);
          break;

        case "SpotLight":
          i = new tl(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
          break;

        case "HemisphereLight":
          i = new Qc(t.color, t.groundColor, t.intensity);
          break;

        case "LightProbe":
          i = new ll().fromJSON(t);
          break;

        case "SkinnedMesh":
          i = new Fa(a = s(t.geometry), o = c(t.material)), void 0 !== t.bindMode && (i.bindMode = t.bindMode), void 0 !== t.bindMatrix && i.bindMatrix.fromArray(t.bindMatrix), void 0 !== t.skeleton && (i.skeleton = t.skeleton);
          break;

        case "Mesh":
          i = new Un(a = s(t.geometry), o = c(t.material));
          break;

        case "InstancedMesh":
          a = s(t.geometry), o = c(t.material);
          var l = t.count,
              u = t.instanceMatrix;
          (i = new Ya(a, o, l)).instanceMatrix = new Qe(new Float32Array(u.array), 16);
          break;

        case "LOD":
          i = new Ua();
          break;

        case "Line":
          i = new eo(s(t.geometry), c(t.material), t.mode);
          break;

        case "LineLoop":
          i = new ao(s(t.geometry), c(t.material));
          break;

        case "LineSegments":
          i = new io(s(t.geometry), c(t.material));
          break;

        case "PointCloud":
        case "Points":
          i = new ho(s(t.geometry), c(t.material));
          break;

        case "Sprite":
          i = new Ra(c(t.material));
          break;

        case "Group":
          i = new ra();
          break;

        case "Bone":
          i = new Ga();
          break;

        default:
          i = new we();
      }

      if (i.uuid = t.uuid, void 0 !== t.name && (i.name = t.name), void 0 !== t.matrix ? (i.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (i.matrixAutoUpdate = t.matrixAutoUpdate), i.matrixAutoUpdate && i.matrix.decompose(i.position, i.quaternion, i.scale)) : (void 0 !== t.position && i.position.fromArray(t.position), void 0 !== t.rotation && i.rotation.fromArray(t.rotation), void 0 !== t.quaternion && i.quaternion.fromArray(t.quaternion), void 0 !== t.scale && i.scale.fromArray(t.scale)), void 0 !== t.castShadow && (i.castShadow = t.castShadow), void 0 !== t.receiveShadow && (i.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (i.shadow.bias = t.shadow.bias), void 0 !== t.shadow.normalBias && (i.shadow.normalBias = t.shadow.normalBias), void 0 !== t.shadow.radius && (i.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && i.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (i.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.frustumCulled && (i.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (i.renderOrder = t.renderOrder), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.layers && (i.layers.mask = t.layers), void 0 !== t.children) for (var h = t.children, d = 0; d < h.length; d++) {
        i.add(this.parseObject(h[d], e, n, r));
      }
      if (void 0 !== t.animations) for (var p = t.animations, f = 0; f < p.length; f++) {
        var m = p[f];
        i.animations.push(r[m]);
      }

      if ("LOD" === t.type) {
        void 0 !== t.autoUpdate && (i.autoUpdate = t.autoUpdate);

        for (var v = t.levels, g = 0; g < v.length; g++) {
          var y = v[g],
              x = i.getObjectByProperty("uuid", y.object);
          void 0 !== x && i.addLevel(x, y.distance);
        }
      }

      return i;
    }, n.bindSkeletons = function (t, e) {
      0 !== Object.keys(e).length && t.traverse(function (t) {
        if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
          var n = e[t.skeleton];
          void 0 === n ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(n, t.bindMatrix);
        }
      });
    }, n.setTexturePath = function (t) {
      return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t);
    }, e;
  }(yc),
      gl = {
    UVMapping: n,
    CubeReflectionMapping: r,
    CubeRefractionMapping: i,
    EquirectangularReflectionMapping: a,
    EquirectangularRefractionMapping: o,
    CubeUVReflectionMapping: s,
    CubeUVRefractionMapping: c
  },
      yl = {
    RepeatWrapping: l,
    ClampToEdgeWrapping: u,
    MirroredRepeatWrapping: h
  },
      xl = {
    NearestFilter: d,
    NearestMipmapNearestFilter: p,
    NearestMipmapLinearFilter: f,
    LinearFilter: m,
    LinearMipmapNearestFilter: v,
    LinearMipmapLinearFilter: g
  };

  function _l(t) {
    "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), yc.call(this, t), this.options = {
      premultiplyAlpha: "none"
    };
  }

  function bl() {
    this.type = "ShapePath", this.color = new We(), this.subPaths = [], this.currentPath = null;
  }

  function wl(t) {
    this.type = "Font", this.data = t;
  }

  function Ml(t, e, n, r, i) {
    var a = i.glyphs[t] || i.glyphs["?"];

    if (a) {
      var o,
          s,
          c,
          l,
          u,
          h,
          d,
          p,
          f = new bl();
      if (a.o) for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, g = m.length; v < g;) {
        switch (m[v++]) {
          case "m":
            o = m[v++] * e + n, s = m[v++] * e + r, f.moveTo(o, s);
            break;

          case "l":
            o = m[v++] * e + n, s = m[v++] * e + r, f.lineTo(o, s);
            break;

          case "q":
            c = m[v++] * e + n, l = m[v++] * e + r, u = m[v++] * e + n, h = m[v++] * e + r, f.quadraticCurveTo(u, h, c, l);
            break;

          case "b":
            c = m[v++] * e + n, l = m[v++] * e + r, u = m[v++] * e + n, h = m[v++] * e + r, d = m[v++] * e + n, p = m[v++] * e + r, f.bezierCurveTo(u, h, d, p, c, l);
        }
      }
      return {
        offsetX: a.ha * e,
        path: f
      };
    }

    console.error('THREE.Font: character "' + t + '" does not exists in font family ' + i.familyName + ".");
  }

  function Sl(t) {
    yc.call(this, t);
  }

  _l.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: _l,
    isImageBitmapLoader: !0,
    setOptions: function setOptions(t) {
      return this.options = t, this;
    },
    load: function load(t, e, n, r) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var i = this,
          a = mc.get(t);
      if (void 0 !== a) return i.manager.itemStart(t), setTimeout(function () {
        e && e(a), i.manager.itemEnd(t);
      }, 0), a;
      var o = {};
      o.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", fetch(t, o).then(function (t) {
        return t.blob();
      }).then(function (t) {
        return createImageBitmap(t, i.options);
      }).then(function (n) {
        mc.add(t, n), e && e(n), i.manager.itemEnd(t);
      }).catch(function (e) {
        r && r(e), i.manager.itemError(t), i.manager.itemEnd(t);
      }), i.manager.itemStart(t);
    }
  }), Object.assign(bl.prototype, {
    moveTo: function moveTo(t, e) {
      return this.currentPath = new Yc(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
    },
    lineTo: function lineTo(t, e) {
      return this.currentPath.lineTo(t, e), this;
    },
    quadraticCurveTo: function quadraticCurveTo(t, e, n, r) {
      return this.currentPath.quadraticCurveTo(t, e, n, r), this;
    },
    bezierCurveTo: function bezierCurveTo(t, e, n, r, i, a) {
      return this.currentPath.bezierCurveTo(t, e, n, r, i, a), this;
    },
    splineThru: function splineThru(t) {
      return this.currentPath.splineThru(t), this;
    },
    toShapes: function toShapes(t, e) {
      function n(t) {
        for (var e = [], n = 0, r = t.length; n < r; n++) {
          var i = t[n],
              a = new Zc();
          a.curves = i.curves, e.push(a);
        }

        return e;
      }

      function r(t, e) {
        for (var n = e.length, r = !1, i = n - 1, a = 0; a < n; i = a++) {
          var o = e[i],
              s = e[a],
              c = s.x - o.x,
              l = s.y - o.y;

          if (Math.abs(l) > Number.EPSILON) {
            if (l < 0 && (o = e[a], c = -c, s = e[i], l = -l), t.y < o.y || t.y > s.y) continue;

            if (t.y === o.y) {
              if (t.x === o.x) return !0;
            } else {
              var u = l * (t.x - o.x) - c * (t.y - o.y);
              if (0 === u) return !0;
              if (u < 0) continue;
              r = !r;
            }
          } else {
            if (t.y !== o.y) continue;
            if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0;
          }
        }

        return r;
      }

      var i,
          a,
          o,
          s = ls.isClockWise,
          c = this.subPaths;
      if (0 === c.length) return [];
      if (!0 === e) return n(c);
      var l = [];
      if (1 === c.length) return a = c[0], (o = new Zc()).curves = a.curves, l.push(o), l;
      var u = !s(c[0].getPoints());
      u = t ? !u : u;
      var h,
          d,
          p = [],
          f = [],
          m = [],
          v = 0;
      f[v] = void 0, m[v] = [];

      for (var g = 0, y = c.length; g < y; g++) {
        i = s(h = (a = c[g]).getPoints()), (i = t ? !i : i) ? (!u && f[v] && v++, f[v] = {
          s: new Zc(),
          p: h
        }, f[v].s.curves = a.curves, u && v++, m[v] = []) : m[v].push({
          h: a,
          p: h[0]
        });
      }

      if (!f[0]) return n(c);

      if (f.length > 1) {
        for (var x = !1, _ = [], b = 0, w = f.length; b < w; b++) {
          p[b] = [];
        }

        for (var M = 0, S = f.length; M < S; M++) {
          for (var T = m[M], E = 0; E < T.length; E++) {
            for (var A = T[E], L = !0, R = 0; R < f.length; R++) {
              r(A.p, f[R].p) && (M !== R && _.push({
                froms: M,
                tos: R,
                hole: E
              }), L ? (L = !1, p[R].push(A)) : x = !0);
            }

            L && p[M].push(A);
          }
        }

        _.length > 0 && (x || (m = p));
      }

      for (var C = 0, P = f.length; C < P; C++) {
        o = f[C].s, l.push(o);

        for (var I = 0, N = (d = m[C]).length; I < N; I++) {
          o.holes.push(d[I].h);
        }
      }

      return l;
    }
  }), Object.assign(wl.prototype, {
    isFont: !0,
    generateShapes: function generateShapes(t, e) {
      void 0 === e && (e = 100);

      for (var n = [], r = function (t, e, n) {
        for (var r = Array.from ? Array.from(t) : String(t).split(""), i = e / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * i, o = [], s = 0, c = 0, l = 0; l < r.length; l++) {
          var u = r[l];
          if ("\n" === u) s = 0, c -= a;else {
            var h = Ml(u, i, s, c, n);
            s += h.offsetX, o.push(h.path);
          }
        }

        return o;
      }(t, e, this.data), i = 0, a = r.length; i < a; i++) {
        Array.prototype.push.apply(n, r[i].toShapes());
      }

      return n;
    }
  }), Sl.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: Sl,
    load: function load(t, e, n, r) {
      var i = this,
          a = new _c(this.manager);
      a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(i.withCredentials), a.load(t, function (t) {
        var n;

        try {
          n = JSON.parse(t);
        } catch (e) {
          console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2));
        }

        var r = i.parse(n);
        e && e(r);
      }, n, r);
    },
    parse: function parse(t) {
      return new wl(t);
    }
  });
  var Tl = {
    getContext: function getContext() {
      return void 0 === ml && (ml = new (window.AudioContext || window.webkitAudioContext)()), ml;
    },
    setContext: function setContext(t) {
      ml = t;
    }
  };

  function El(t) {
    yc.call(this, t);
  }

  function Al(t, e, n) {
    ll.call(this, void 0, n);
    var r = new We().set(t),
        i = new We().set(e),
        a = new Mt(r.r, r.g, r.b),
        o = new Mt(i.r, i.g, i.b),
        s = Math.sqrt(Math.PI),
        c = s * Math.sqrt(.75);
    this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c);
  }

  function Ll(t, e) {
    ll.call(this, void 0, e);
    var n = new We().set(t);
    this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }

  El.prototype = Object.assign(Object.create(yc.prototype), {
    constructor: El,
    load: function load(t, e, n, r) {
      var i = this,
          a = new _c(i.manager);
      a.setResponseType("arraybuffer"), a.setPath(i.path), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(t, function (n) {
        try {
          var a = n.slice(0);
          Tl.getContext().decodeAudioData(a, function (t) {
            e(t);
          });
        } catch (e) {
          r ? r(e) : console.error(e), i.manager.itemError(t);
        }
      }, n, r);
    }
  }), Al.prototype = Object.assign(Object.create(ll.prototype), {
    constructor: Al,
    isHemisphereLightProbe: !0,
    copy: function copy(t) {
      return ll.prototype.copy.call(this, t), this;
    },
    toJSON: function toJSON(t) {
      return ll.prototype.toJSON.call(this, t);
    }
  }), Ll.prototype = Object.assign(Object.create(ll.prototype), {
    constructor: Ll,
    isAmbientLightProbe: !0,
    copy: function copy(t) {
      return ll.prototype.copy.call(this, t), this;
    },
    toJSON: function toJSON(t) {
      return ll.prototype.toJSON.call(this, t);
    }
  });
  var Rl = new Qt(),
      Cl = new Qt();

  function Pl() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Xn(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Xn(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null
    };
  }

  Object.assign(Pl.prototype, {
    update: function update(t) {
      var e = this._cache;

      if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
        e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep;
        var n,
            r,
            i = t.projectionMatrix.clone(),
            a = e.eyeSep / 2,
            o = a * e.near / e.focus,
            s = e.near * Math.tan(st.DEG2RAD * e.fov * .5) / e.zoom;
        Cl.elements[12] = -a, Rl.elements[12] = a, n = -s * e.aspect + o, r = s * e.aspect + o, i.elements[0] = 2 * e.near / (r - n), i.elements[8] = (r + n) / (r - n), this.cameraL.projectionMatrix.copy(i), n = -s * e.aspect - o, r = s * e.aspect - o, i.elements[0] = 2 * e.near / (r - n), i.elements[8] = (r + n) / (r - n), this.cameraR.projectionMatrix.copy(i);
      }

      this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Cl), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Rl);
    }
  });

  var Il = function () {
    function t(t) {
      this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
    }

    var e = t.prototype;
    return e.start = function () {
      this.startTime = Nl(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
    }, e.stop = function () {
      this.getElapsedTime(), this.running = !1, this.autoStart = !1;
    }, e.getElapsedTime = function () {
      return this.getDelta(), this.elapsedTime;
    }, e.getDelta = function () {
      var t = 0;
      if (this.autoStart && !this.running) return this.start(), 0;

      if (this.running) {
        var e = Nl();
        t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
      }

      return t;
    }, t;
  }();

  function Nl() {
    return ("undefined" == typeof performance ? Date : performance).now();
  }

  var Dl = new Mt(),
      Ol = new wt(),
      Bl = new Mt(),
      zl = new Mt(),
      Ul = function (t) {
    function e() {
      var e;
      return (e = t.call(this) || this).type = "AudioListener", e.context = Tl.getContext(), e.gain = e.context.createGain(), e.gain.connect(e.context.destination), e.filter = null, e.timeDelta = 0, e._clock = new Il(), e;
    }

    ut(e, t);
    var n = e.prototype;
    return n.getInput = function () {
      return this.gain;
    }, n.removeFilter = function () {
      return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
    }, n.getFilter = function () {
      return this.filter;
    }, n.setFilter = function (t) {
      return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
    }, n.getMasterVolume = function () {
      return this.gain.gain.value;
    }, n.setMasterVolume = function (t) {
      return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
    }, n.updateMatrixWorld = function (e) {
      t.prototype.updateMatrixWorld.call(this, e);
      var n = this.context.listener,
          r = this.up;

      if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Dl, Ol, Bl), zl.set(0, 0, -1).applyQuaternion(Ol), n.positionX) {
        var i = this.context.currentTime + this.timeDelta;
        n.positionX.linearRampToValueAtTime(Dl.x, i), n.positionY.linearRampToValueAtTime(Dl.y, i), n.positionZ.linearRampToValueAtTime(Dl.z, i), n.forwardX.linearRampToValueAtTime(zl.x, i), n.forwardY.linearRampToValueAtTime(zl.y, i), n.forwardZ.linearRampToValueAtTime(zl.z, i), n.upX.linearRampToValueAtTime(r.x, i), n.upY.linearRampToValueAtTime(r.y, i), n.upZ.linearRampToValueAtTime(r.z, i);
      } else n.setPosition(Dl.x, Dl.y, Dl.z), n.setOrientation(zl.x, zl.y, zl.z, r.x, r.y, r.z);
    }, e;
  }(we),
      Fl = function (t) {
    function e(e) {
      var n;
      return (n = t.call(this) || this).type = "Audio", n.listener = e, n.context = e.context, n.gain = n.context.createGain(), n.gain.connect(e.getInput()), n.autoplay = !1, n.buffer = null, n.detune = 0, n.loop = !1, n.loopStart = 0, n.loopEnd = 0, n.offset = 0, n.duration = void 0, n.playbackRate = 1, n.isPlaying = !1, n.hasPlaybackControl = !0, n.source = null, n.sourceType = "empty", n._startedAt = 0, n._progress = 0, n._connected = !1, n.filters = [], n;
    }

    ut(e, t);
    var n = e.prototype;
    return n.getOutput = function () {
      return this.gain;
    }, n.setNodeSource = function (t) {
      return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this;
    }, n.setMediaElementSource = function (t) {
      return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this;
    }, n.setMediaStreamSource = function (t) {
      return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this;
    }, n.setBuffer = function (t) {
      return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this;
    }, n.play = function (t) {
      if (void 0 === t && (t = 0), !0 !== this.isPlaying) {
        if (!1 !== this.hasPlaybackControl) {
          this._startedAt = this.context.currentTime + t;
          var e = this.context.createBufferSource();
          return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
        }

        console.warn("THREE.Audio: this Audio has no playback control.");
      } else console.warn("THREE.Audio: Audio is already playing.");
    }, n.pause = function () {
      if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
      console.warn("THREE.Audio: this Audio has no playback control.");
    }, n.stop = function () {
      if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
      console.warn("THREE.Audio: this Audio has no playback control.");
    }, n.connect = function () {
      if (this.filters.length > 0) {
        this.source.connect(this.filters[0]);

        for (var t = 1, e = this.filters.length; t < e; t++) {
          this.filters[t - 1].connect(this.filters[t]);
        }

        this.filters[this.filters.length - 1].connect(this.getOutput());
      } else this.source.connect(this.getOutput());

      return this._connected = !0, this;
    }, n.disconnect = function () {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);

        for (var t = 1, e = this.filters.length; t < e; t++) {
          this.filters[t - 1].disconnect(this.filters[t]);
        }

        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());

      return this._connected = !1, this;
    }, n.getFilters = function () {
      return this.filters;
    }, n.setFilters = function (t) {
      return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this;
    }, n.setDetune = function (t) {
      if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
    }, n.getDetune = function () {
      return this.detune;
    }, n.getFilter = function () {
      return this.getFilters()[0];
    }, n.setFilter = function (t) {
      return this.setFilters(t ? [t] : []);
    }, n.setPlaybackRate = function (t) {
      if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
      console.warn("THREE.Audio: this Audio has no playback control.");
    }, n.getPlaybackRate = function () {
      return this.playbackRate;
    }, n.onEnded = function () {
      this.isPlaying = !1;
    }, n.getLoop = function () {
      return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
    }, n.setLoop = function (t) {
      if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
      console.warn("THREE.Audio: this Audio has no playback control.");
    }, n.setLoopStart = function (t) {
      return this.loopStart = t, this;
    }, n.setLoopEnd = function (t) {
      return this.loopEnd = t, this;
    }, n.getVolume = function () {
      return this.gain.gain.value;
    }, n.setVolume = function (t) {
      return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
    }, e;
  }(we),
      Gl = new Mt(),
      Hl = new wt(),
      kl = new Mt(),
      Vl = new Mt(),
      Wl = function (t) {
    function e(e) {
      var n;
      return (n = t.call(this, e) || this).panner = n.context.createPanner(), n.panner.panningModel = "HRTF", n.panner.connect(n.gain), n;
    }

    ut(e, t);
    var n = e.prototype;
    return n.getOutput = function () {
      return this.panner;
    }, n.getRefDistance = function () {
      return this.panner.refDistance;
    }, n.setRefDistance = function (t) {
      return this.panner.refDistance = t, this;
    }, n.getRolloffFactor = function () {
      return this.panner.rolloffFactor;
    }, n.setRolloffFactor = function (t) {
      return this.panner.rolloffFactor = t, this;
    }, n.getDistanceModel = function () {
      return this.panner.distanceModel;
    }, n.setDistanceModel = function (t) {
      return this.panner.distanceModel = t, this;
    }, n.getMaxDistance = function () {
      return this.panner.maxDistance;
    }, n.setMaxDistance = function (t) {
      return this.panner.maxDistance = t, this;
    }, n.setDirectionalCone = function (t, e, n) {
      return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this;
    }, n.updateMatrixWorld = function (e) {
      if (t.prototype.updateMatrixWorld.call(this, e), !0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
        this.matrixWorld.decompose(Gl, Hl, kl), Vl.set(0, 0, 1).applyQuaternion(Hl);
        var n = this.panner;

        if (n.positionX) {
          var r = this.context.currentTime + this.listener.timeDelta;
          n.positionX.linearRampToValueAtTime(Gl.x, r), n.positionY.linearRampToValueAtTime(Gl.y, r), n.positionZ.linearRampToValueAtTime(Gl.z, r), n.orientationX.linearRampToValueAtTime(Vl.x, r), n.orientationY.linearRampToValueAtTime(Vl.y, r), n.orientationZ.linearRampToValueAtTime(Vl.z, r);
        } else n.setPosition(Gl.x, Gl.y, Gl.z), n.setOrientation(Vl.x, Vl.y, Vl.z);
      }
    }, e;
  }(Fl),
      jl = function () {
    function t(t, e) {
      void 0 === e && (e = 2048), this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser);
    }

    var e = t.prototype;
    return e.getFrequencyData = function () {
      return this.analyser.getByteFrequencyData(this.data), this.data;
    }, e.getAverageFrequency = function () {
      for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++) {
        t += e[n];
      }

      return t / e.length;
    }, t;
  }();

  function ql(t, e, n) {
    var r, i, a;

    switch (this.binding = t, this.valueSize = n, e) {
      case "quaternion":
        r = this._slerp, i = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
        break;

      case "string":
      case "bool":
        r = this._select, i = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
        break;

      default:
        r = this._lerp, i = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n);
    }

    this._mixBufferRegion = r, this._mixBufferRegionAdditive = i, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }

  Object.assign(ql.prototype, {
    accumulate: function accumulate(t, e) {
      var n = this.buffer,
          r = this.valueSize,
          i = t * r + r,
          a = this.cumulativeWeight;

      if (0 === a) {
        for (var o = 0; o !== r; ++o) {
          n[i + o] = n[o];
        }

        a = e;
      } else {
        var s = e / (a += e);

        this._mixBufferRegion(n, i, 0, s, r);
      }

      this.cumulativeWeight = a;
    },
    accumulateAdditive: function accumulateAdditive(t) {
      var e = this.buffer,
          n = this.valueSize,
          r = n * this._addIndex;
      0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, r, 0, t, n), this.cumulativeWeightAdditive += t;
    },
    apply: function apply(t) {
      var e = this.valueSize,
          n = this.buffer,
          r = t * e + e,
          i = this.cumulativeWeight,
          a = this.cumulativeWeightAdditive,
          o = this.binding;

      if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, i < 1) {
        var s = e * this._origIndex;

        this._mixBufferRegion(n, r, s, 1 - i, e);
      }

      a > 0 && this._mixBufferRegionAdditive(n, r, this._addIndex * e, 1, e);

      for (var c = e, l = e + e; c !== l; ++c) {
        if (n[c] !== n[c + e]) {
          o.setValue(n, r);
          break;
        }
      }
    },
    saveOriginalState: function saveOriginalState() {
      var t = this.binding,
          e = this.buffer,
          n = this.valueSize,
          r = n * this._origIndex;
      t.getValue(e, r);

      for (var i = n, a = r; i !== a; ++i) {
        e[i] = e[r + i % n];
      }

      this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
    },
    restoreOriginalState: function restoreOriginalState() {
      var t = 3 * this.valueSize;
      this.binding.setValue(this.buffer, t);
    },
    _setAdditiveIdentityNumeric: function _setAdditiveIdentityNumeric() {
      for (var t = this._addIndex * this.valueSize, e = t + this.valueSize, n = t; n < e; n++) {
        this.buffer[n] = 0;
      }
    },
    _setAdditiveIdentityQuaternion: function _setAdditiveIdentityQuaternion() {
      this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
    },
    _setAdditiveIdentityOther: function _setAdditiveIdentityOther() {
      for (var t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize, n = 0; n < this.valueSize; n++) {
        this.buffer[e + n] = this.buffer[t + n];
      }
    },
    _select: function _select(t, e, n, r, i) {
      if (r >= .5) for (var a = 0; a !== i; ++a) {
        t[e + a] = t[n + a];
      }
    },
    _slerp: function _slerp(t, e, n, r) {
      wt.slerpFlat(t, e, t, e, t, n, r);
    },
    _slerpAdditive: function _slerpAdditive(t, e, n, r, i) {
      var a = this._workIndex * i;
      wt.multiplyQuaternionsFlat(t, a, t, e, t, n), wt.slerpFlat(t, e, t, e, t, a, r);
    },
    _lerp: function _lerp(t, e, n, r, i) {
      for (var a = 1 - r, o = 0; o !== i; ++o) {
        var s = e + o;
        t[s] = t[s] * a + t[n + o] * r;
      }
    },
    _lerpAdditive: function _lerpAdditive(t, e, n, r, i) {
      for (var a = 0; a !== i; ++a) {
        var o = e + a;
        t[o] = t[o] + t[n + a] * r;
      }
    }
  });
  var Xl = "\\[\\]\\.:\\/",
      Yl = new RegExp("[\\[\\]\\.:\\/]", "g"),
      Zl = "[^\\[\\]\\.:\\/]",
      Jl = "[^" + Xl.replace("\\.", "") + "]",
      Ql = /((?:WC+[\/:])*)/.source.replace("WC", Zl),
      Kl = /(WCOD+)?/.source.replace("WCOD", Jl),
      $l = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Zl),
      tu = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Zl),
      eu = new RegExp("^" + Ql + Kl + $l + tu + "$"),
      nu = ["material", "materials", "bones"];

  function ru(t, e, n) {
    var r = n || iu.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, r);
  }

  function iu(t, e, n) {
    this.path = e, this.parsedPath = n || iu.parseTrackName(e), this.node = iu.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t;
  }

  function au() {
    this.uuid = st.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    var t = {};
    this._indicesByUUID = t;

    for (var e = 0, n = arguments.length; e !== n; ++e) {
      t[arguments[e].uuid] = e;
    }

    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    var r = this;
    this.stats = {
      objects: {
        get total() {
          return r._objects.length;
        },

        get inUse() {
          return this.total - r.nCachedObjects_;
        }

      },

      get bindingsPerObject() {
        return r._bindings.length;
      }

    };
  }

  Object.assign(ru.prototype, {
    getValue: function getValue(t, e) {
      this.bind();
      var n = this._targetGroup.nCachedObjects_,
          r = this._bindings[n];
      void 0 !== r && r.getValue(t, e);
    },
    setValue: function setValue(t, e) {
      for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) {
        n[r].setValue(t, e);
      }
    },
    bind: function bind() {
      for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) {
        t[e].bind();
      }
    },
    unbind: function unbind() {
      for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) {
        t[e].unbind();
      }
    }
  }), Object.assign(iu, {
    Composite: ru,
    create: function create(t, e, n) {
      return t && t.isAnimationObjectGroup ? new iu.Composite(t, e, n) : new iu(t, e, n);
    },
    sanitizeNodeName: function sanitizeNodeName(t) {
      return t.replace(/\s/g, "_").replace(Yl, "");
    },
    parseTrackName: function parseTrackName(t) {
      var e = eu.exec(t);
      if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
      var n = {
        nodeName: e[2],
        objectName: e[3],
        objectIndex: e[4],
        propertyName: e[5],
        propertyIndex: e[6]
      },
          r = n.nodeName && n.nodeName.lastIndexOf(".");

      if (void 0 !== r && -1 !== r) {
        var i = n.nodeName.substring(r + 1);
        -1 !== nu.indexOf(i) && (n.nodeName = n.nodeName.substring(0, r), n.objectName = i);
      }

      if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
      return n;
    },
    findNode: function findNode(t, e) {
      if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;

      if (t.skeleton) {
        var n = t.skeleton.getBoneByName(e);
        if (void 0 !== n) return n;
      }

      if (t.children) {
        var r = function t(n) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            if (i.name === e || i.uuid === e) return i;
            var a = t(i.children);
            if (a) return a;
          }

          return null;
        }(t.children);

        if (r) return r;
      }

      return null;
    }
  }), Object.assign(iu.prototype, {
    _getValue_unavailable: function _getValue_unavailable() {},
    _setValue_unavailable: function _setValue_unavailable() {},
    BindingType: {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3
    },
    Versioning: {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function (t, e) {
      t[e] = this.node[this.propertyName];
    }, function (t, e) {
      for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) {
        t[e++] = n[r];
      }
    }, function (t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex];
    }, function (t, e) {
      this.resolvedProperty.toArray(t, e);
    }],
    SetterByBindingTypeAndVersioning: [[function (t, e) {
      this.targetObject[this.propertyName] = t[e];
    }, function (t, e) {
      this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (t, e) {
      for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) {
        n[r] = t[e++];
      }
    }, function (t, e) {
      for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) {
        n[r] = t[e++];
      }

      this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) {
        n[r] = t[e++];
      }

      this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
    }, function (t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (t, e) {
      this.resolvedProperty.fromArray(t, e);
    }, function (t, e) {
      this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
    }, function (t, e) {
      this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
    }]],
    getValue: function getValue(t, e) {
      this.bind(), this.getValue(t, e);
    },
    setValue: function setValue(t, e) {
      this.bind(), this.setValue(t, e);
    },
    bind: function bind() {
      var t = this.node,
          e = this.parsedPath,
          n = e.objectName,
          r = e.propertyName,
          i = e.propertyIndex;

      if (t || (t = iu.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
        if (n) {
          var a = e.objectIndex;

          switch (n) {
            case "materials":
              if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              t = t.material.materials;
              break;

            case "bones":
              if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              t = t.skeleton.bones;

              for (var o = 0; o < t.length; o++) {
                if (t[o].name === a) {
                  a = o;
                  break;
                }
              }

              break;

            default:
              if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              t = t[n];
          }

          if (void 0 !== a) {
            if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
            t = t[a];
          }
        }

        var s = t[r];

        if (void 0 !== s) {
          var c = this.Versioning.None;
          this.targetObject = t, void 0 !== t.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
          var l = this.BindingType.Direct;

          if (void 0 !== i) {
            if ("morphTargetInfluences" === r) {
              if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
              if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
              if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
              void 0 !== t.morphTargetDictionary[i] && (i = t.morphTargetDictionary[i]);
            }

            l = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = i;
          } else void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (l = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r;

          this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][c];
        } else {
          var u = e.nodeName;
          console.error("THREE.PropertyBinding: Trying to update property for track: " + u + "." + r + " but it wasn't found.", t);
        }
      } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
    },
    unbind: function unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  }), Object.assign(iu.prototype, {
    _getValue_unbound: iu.prototype.getValue,
    _setValue_unbound: iu.prototype.setValue
  }), Object.assign(au.prototype, {
    isAnimationObjectGroup: !0,
    add: function add() {
      for (var t = this._objects, e = this._indicesByUUID, n = this._paths, r = this._parsedPaths, i = this._bindings, a = i.length, o = void 0, s = t.length, c = this.nCachedObjects_, l = 0, u = arguments.length; l !== u; ++l) {
        var h = arguments[l],
            d = h.uuid,
            p = e[d];

        if (void 0 === p) {
          p = s++, e[d] = p, t.push(h);

          for (var f = 0, m = a; f !== m; ++f) {
            i[f].push(new iu(h, n[f], r[f]));
          }
        } else if (p < c) {
          o = t[p];
          var v = --c,
              g = t[v];
          e[g.uuid] = p, t[p] = g, e[d] = v, t[v] = h;

          for (var y = 0, x = a; y !== x; ++y) {
            var _ = i[y],
                b = _[v],
                w = _[p];
            _[p] = b, void 0 === w && (w = new iu(h, n[y], r[y])), _[v] = w;
          }
        } else t[p] !== o && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
      }

      this.nCachedObjects_ = c;
    },
    remove: function remove() {
      for (var t = this._objects, e = this._indicesByUUID, n = this._bindings, r = n.length, i = this.nCachedObjects_, a = 0, o = arguments.length; a !== o; ++a) {
        var s = arguments[a],
            c = s.uuid,
            l = e[c];

        if (void 0 !== l && l >= i) {
          var u = i++,
              h = t[u];
          e[h.uuid] = l, t[l] = h, e[c] = u, t[u] = s;

          for (var d = 0, p = r; d !== p; ++d) {
            var f = n[d],
                m = f[u],
                v = f[l];
            f[l] = m, f[u] = v;
          }
        }
      }

      this.nCachedObjects_ = i;
    },
    uncache: function uncache() {
      for (var t = this._objects, e = this._indicesByUUID, n = this._bindings, r = n.length, i = this.nCachedObjects_, a = t.length, o = 0, s = arguments.length; o !== s; ++o) {
        var c = arguments[o],
            l = c.uuid,
            u = e[l];
        if (void 0 !== u) if (delete e[l], u < i) {
          var h = --i,
              d = t[h],
              p = --a,
              f = t[p];
          e[d.uuid] = u, t[u] = d, e[f.uuid] = h, t[h] = f, t.pop();

          for (var m = 0, v = r; m !== v; ++m) {
            var g = n[m],
                y = g[h],
                x = g[p];
            g[u] = y, g[h] = x, g.pop();
          }
        } else {
          var _ = --a,
              b = t[_];

          _ > 0 && (e[b.uuid] = u), t[u] = b, t.pop();

          for (var w = 0, M = r; w !== M; ++w) {
            var S = n[w];
            S[u] = S[_], S.pop();
          }
        }
      }

      this.nCachedObjects_ = i;
    },
    subscribe_: function subscribe_(t, e) {
      var n = this._bindingsIndicesByPath,
          r = n[t],
          i = this._bindings;
      if (void 0 !== r) return i[r];
      var a = this._paths,
          o = this._parsedPaths,
          s = this._objects,
          c = s.length,
          l = this.nCachedObjects_,
          u = new Array(c);
      r = i.length, n[t] = r, a.push(t), o.push(e), i.push(u);

      for (var h = l, d = s.length; h !== d; ++h) {
        var p = s[h];
        u[h] = new iu(p, t, e);
      }

      return u;
    },
    unsubscribe_: function unsubscribe_(t) {
      var e = this._bindingsIndicesByPath,
          n = e[t];

      if (void 0 !== n) {
        var r = this._paths,
            i = this._parsedPaths,
            a = this._bindings,
            o = a.length - 1,
            s = a[o];
        e[t[o]] = n, a[n] = s, a.pop(), i[n] = i[o], i.pop(), r[n] = r[o], r.pop();
      }
    }
  });

  var ou = function () {
    function t(t, e, n, r) {
      void 0 === n && (n = null), void 0 === r && (r = e.blendMode), this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = r;

      for (var i = e.tracks, a = i.length, o = new Array(a), s = {
        endingStart: H,
        endingEnd: H
      }, c = 0; c !== a; ++c) {
        var l = i[c].createInterpolant(null);
        o[c] = l, l.settings = s;
      }

      this._interpolantSettings = s, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
    }

    var e = t.prototype;
    return e.play = function () {
      return this._mixer._activateAction(this), this;
    }, e.stop = function () {
      return this._mixer._deactivateAction(this), this.reset();
    }, e.reset = function () {
      return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
    }, e.isRunning = function () {
      return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
    }, e.isScheduled = function () {
      return this._mixer._isActiveAction(this);
    }, e.startAt = function (t) {
      return this._startTime = t, this;
    }, e.setLoop = function (t, e) {
      return this.loop = t, this.repetitions = e, this;
    }, e.setEffectiveWeight = function (t) {
      return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
    }, e.getEffectiveWeight = function () {
      return this._effectiveWeight;
    }, e.fadeIn = function (t) {
      return this._scheduleFading(t, 0, 1);
    }, e.fadeOut = function (t) {
      return this._scheduleFading(t, 1, 0);
    }, e.crossFadeFrom = function (t, e, n) {
      if (t.fadeOut(e), this.fadeIn(e), n) {
        var r = this._clip.duration,
            i = t._clip.duration,
            a = i / r,
            o = r / i;
        t.warp(1, a, e), this.warp(o, 1, e);
      }

      return this;
    }, e.crossFadeTo = function (t, e, n) {
      return t.crossFadeFrom(this, e, n);
    }, e.stopFading = function () {
      var t = this._weightInterpolant;
      return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
    }, e.setEffectiveTimeScale = function (t) {
      return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
    }, e.getEffectiveTimeScale = function () {
      return this._effectiveTimeScale;
    }, e.setDuration = function (t) {
      return this.timeScale = this._clip.duration / t, this.stopWarping();
    }, e.syncWith = function (t) {
      return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
    }, e.halt = function (t) {
      return this.warp(this._effectiveTimeScale, 0, t);
    }, e.warp = function (t, e, n) {
      var r = this._mixer,
          i = r.time,
          a = this.timeScale,
          o = this._timeScaleInterpolant;
      null === o && (o = r._lendControlInterpolant(), this._timeScaleInterpolant = o);
      var s = o.parameterPositions,
          c = o.sampleValues;
      return s[0] = i, s[1] = i + n, c[0] = t / a, c[1] = e / a, this;
    }, e.stopWarping = function () {
      var t = this._timeScaleInterpolant;
      return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
    }, e.getMixer = function () {
      return this._mixer;
    }, e.getClip = function () {
      return this._clip;
    }, e.getRoot = function () {
      return this._localRoot || this._mixer._root;
    }, e._update = function (t, e, n, r) {
      if (this.enabled) {
        var i = this._startTime;

        if (null !== i) {
          var a = (t - i) * n;
          if (a < 0 || 0 === n) return;
          this._startTime = null, e = n * a;
        }

        e *= this._updateTimeScale(t);

        var o = this._updateTime(e),
            s = this._updateWeight(t);

        if (s > 0) {
          var c = this._interpolants,
              l = this._propertyBindings;

          switch (this.blendMode) {
            case j:
              for (var u = 0, h = c.length; u !== h; ++u) {
                c[u].evaluate(o), l[u].accumulateAdditive(s);
              }

              break;

            case W:
            default:
              for (var d = 0, p = c.length; d !== p; ++d) {
                c[d].evaluate(o), l[d].accumulate(r, s);
              }

          }
        }
      } else this._updateWeight(t);
    }, e._updateWeight = function (t) {
      var e = 0;

      if (this.enabled) {
        e = this.weight;
        var n = this._weightInterpolant;

        if (null !== n) {
          var r = n.evaluate(t)[0];
          e *= r, t > n.parameterPositions[1] && (this.stopFading(), 0 === r && (this.enabled = !1));
        }
      }

      return this._effectiveWeight = e, e;
    }, e._updateTimeScale = function (t) {
      var e = 0;

      if (!this.paused) {
        e = this.timeScale;
        var n = this._timeScaleInterpolant;
        if (null !== n) e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e);
      }

      return this._effectiveTimeScale = e, e;
    }, e._updateTime = function (t) {
      var e = this._clip.duration,
          n = this.loop,
          r = this.time + t,
          i = this._loopCount,
          a = 2202 === n;
      if (0 === t) return -1 === i ? r : a && 1 == (1 & i) ? e - r : r;

      if (2200 === n) {
        -1 === i && (this._loopCount = 0, this._setEndings(!0, !0, !1));

        t: {
          if (r >= e) r = e;else {
            if (!(r < 0)) {
              this.time = r;
              break t;
            }

            r = 0;
          }
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = r, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t < 0 ? -1 : 1
          });
        }
      } else {
        if (-1 === i && (t >= 0 ? (i = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), r >= e || r < 0) {
          var o = Math.floor(r / e);
          r -= e * o, i += Math.abs(o);
          var s = this.repetitions - i;
          if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, r = t > 0 ? e : 0, this.time = r, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t > 0 ? 1 : -1
          });else {
            if (1 === s) {
              var c = t < 0;

              this._setEndings(c, !c, a);
            } else this._setEndings(!1, !1, a);

            this._loopCount = i, this.time = r, this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: o
            });
          }
        } else this.time = r;

        if (a && 1 == (1 & i)) return e - r;
      }

      return r;
    }, e._setEndings = function (t, e, n) {
      var r = this._interpolantSettings;
      n ? (r.endingStart = k, r.endingEnd = k) : (r.endingStart = t ? this.zeroSlopeAtStart ? k : H : V, r.endingEnd = e ? this.zeroSlopeAtEnd ? k : H : V);
    }, e._scheduleFading = function (t, e, n) {
      var r = this._mixer,
          i = r.time,
          a = this._weightInterpolant;
      null === a && (a = r._lendControlInterpolant(), this._weightInterpolant = a);
      var o = a.parameterPositions,
          s = a.sampleValues;
      return o[0] = i, s[0] = e, o[1] = i + t, s[1] = n, this;
    }, t;
  }();

  function su(t) {
    this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }

  su.prototype = Object.assign(Object.create(rt.prototype), {
    constructor: su,
    _bindAction: function _bindAction(t, e) {
      var n = t._localRoot || this._root,
          r = t._clip.tracks,
          i = r.length,
          a = t._propertyBindings,
          o = t._interpolants,
          s = n.uuid,
          c = this._bindingsByRootAndName,
          l = c[s];
      void 0 === l && (l = {}, c[s] = l);

      for (var u = 0; u !== i; ++u) {
        var h = r[u],
            d = h.name,
            p = l[d];
        if (void 0 !== p) a[u] = p;else {
          if (void 0 !== (p = a[u])) {
            null === p._cacheIndex && (++p.referenceCount, this._addInactiveBinding(p, s, d));
            continue;
          }

          var f = e && e._propertyBindings[u].binding.parsedPath;
          ++(p = new ql(iu.create(n, d, f), h.ValueTypeName, h.getValueSize())).referenceCount, this._addInactiveBinding(p, s, d), a[u] = p;
        }
        o[u].resultBuffer = p.buffer;
      }
    },
    _activateAction: function _activateAction(t) {
      if (!this._isActiveAction(t)) {
        if (null === t._cacheIndex) {
          var e = (t._localRoot || this._root).uuid,
              n = t._clip.uuid,
              r = this._actionsByClip[n];
          this._bindAction(t, r && r.knownActions[0]), this._addInactiveAction(t, n, e);
        }

        for (var i = t._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
          var s = i[a];
          0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState());
        }

        this._lendAction(t);
      }
    },
    _deactivateAction: function _deactivateAction(t) {
      if (this._isActiveAction(t)) {
        for (var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
          var i = e[n];
          0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i));
        }

        this._takeBackAction(t);
      }
    },
    _initMemoryManager: function _initMemoryManager() {
      this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
      var t = this;
      this.stats = {
        actions: {
          get total() {
            return t._actions.length;
          },

          get inUse() {
            return t._nActiveActions;
          }

        },
        bindings: {
          get total() {
            return t._bindings.length;
          },

          get inUse() {
            return t._nActiveBindings;
          }

        },
        controlInterpolants: {
          get total() {
            return t._controlInterpolants.length;
          },

          get inUse() {
            return t._nActiveControlInterpolants;
          }

        }
      };
    },
    _isActiveAction: function _isActiveAction(t) {
      var e = t._cacheIndex;
      return null !== e && e < this._nActiveActions;
    },
    _addInactiveAction: function _addInactiveAction(t, e, n) {
      var r = this._actions,
          i = this._actionsByClip,
          a = i[e];
      if (void 0 === a) a = {
        knownActions: [t],
        actionByRoot: {}
      }, t._byClipCacheIndex = 0, i[e] = a;else {
        var o = a.knownActions;
        t._byClipCacheIndex = o.length, o.push(t);
      }
      t._cacheIndex = r.length, r.push(t), a.actionByRoot[n] = t;
    },
    _removeInactiveAction: function _removeInactiveAction(t) {
      var e = this._actions,
          n = e[e.length - 1],
          r = t._cacheIndex;
      n._cacheIndex = r, e[r] = n, e.pop(), t._cacheIndex = null;
      var i = t._clip.uuid,
          a = this._actionsByClip,
          o = a[i],
          s = o.knownActions,
          c = s[s.length - 1],
          l = t._byClipCacheIndex;
      c._byClipCacheIndex = l, s[l] = c, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[i], this._removeInactiveBindingsForAction(t);
    },
    _removeInactiveBindingsForAction: function _removeInactiveBindingsForAction(t) {
      for (var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
        var i = e[n];
        0 == --i.referenceCount && this._removeInactiveBinding(i);
      }
    },
    _lendAction: function _lendAction(t) {
      var e = this._actions,
          n = t._cacheIndex,
          r = this._nActiveActions++,
          i = e[r];
      t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i;
    },
    _takeBackAction: function _takeBackAction(t) {
      var e = this._actions,
          n = t._cacheIndex,
          r = --this._nActiveActions,
          i = e[r];
      t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i;
    },
    _addInactiveBinding: function _addInactiveBinding(t, e, n) {
      var r = this._bindingsByRootAndName,
          i = this._bindings,
          a = r[e];
      void 0 === a && (a = {}, r[e] = a), a[n] = t, t._cacheIndex = i.length, i.push(t);
    },
    _removeInactiveBinding: function _removeInactiveBinding(t) {
      var e = this._bindings,
          n = t.binding,
          r = n.rootNode.uuid,
          i = n.path,
          a = this._bindingsByRootAndName,
          o = a[r],
          s = e[e.length - 1],
          c = t._cacheIndex;
      s._cacheIndex = c, e[c] = s, e.pop(), delete o[i], 0 === Object.keys(o).length && delete a[r];
    },
    _lendBinding: function _lendBinding(t) {
      var e = this._bindings,
          n = t._cacheIndex,
          r = this._nActiveBindings++,
          i = e[r];
      t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i;
    },
    _takeBackBinding: function _takeBackBinding(t) {
      var e = this._bindings,
          n = t._cacheIndex,
          r = --this._nActiveBindings,
          i = e[r];
      t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i;
    },
    _lendControlInterpolant: function _lendControlInterpolant() {
      var t = this._controlInterpolants,
          e = this._nActiveControlInterpolants++,
          n = t[e];
      return void 0 === n && ((n = new rc(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = n), n;
    },
    _takeBackControlInterpolant: function _takeBackControlInterpolant(t) {
      var e = this._controlInterpolants,
          n = t.__cacheIndex,
          r = --this._nActiveControlInterpolants,
          i = e[r];
      t.__cacheIndex = r, e[r] = t, i.__cacheIndex = n, e[n] = i;
    },
    _controlInterpolantsResultBuffer: new Float32Array(1),
    clipAction: function clipAction(t, e, n) {
      var r = e || this._root,
          i = r.uuid,
          a = "string" == typeof t ? pc.findByName(r, t) : t,
          o = null !== a ? a.uuid : t,
          s = this._actionsByClip[o],
          c = null;

      if (void 0 === n && (n = null !== a ? a.blendMode : W), void 0 !== s) {
        var l = s.actionByRoot[i];
        if (void 0 !== l && l.blendMode === n) return l;
        c = s.knownActions[0], null === a && (a = c._clip);
      }

      if (null === a) return null;
      var u = new ou(this, a, e, n);
      return this._bindAction(u, c), this._addInactiveAction(u, o, i), u;
    },
    existingAction: function existingAction(t, e) {
      var n = e || this._root,
          r = n.uuid,
          i = "string" == typeof t ? pc.findByName(n, t) : t,
          a = i ? i.uuid : t,
          o = this._actionsByClip[a];
      return void 0 !== o && o.actionByRoot[r] || null;
    },
    stopAllAction: function stopAllAction() {
      for (var t = this._actions, e = this._nActiveActions - 1; e >= 0; --e) {
        t[e].stop();
      }

      return this;
    },
    update: function update(t) {
      t *= this.timeScale;

      for (var e = this._actions, n = this._nActiveActions, r = this.time += t, i = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
        e[o]._update(r, t, i, a);
      }

      for (var s = this._bindings, c = this._nActiveBindings, l = 0; l !== c; ++l) {
        s[l].apply(a);
      }

      return this;
    },
    setTime: function setTime(t) {
      this.time = 0;

      for (var e = 0; e < this._actions.length; e++) {
        this._actions[e].time = 0;
      }

      return this.update(t);
    },
    getRoot: function getRoot() {
      return this._root;
    },
    uncacheClip: function uncacheClip(t) {
      var e = this._actions,
          n = t.uuid,
          r = this._actionsByClip,
          i = r[n];

      if (void 0 !== i) {
        for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
          var c = a[o];

          this._deactivateAction(c);

          var l = c._cacheIndex,
              u = e[e.length - 1];
          c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = l, e[l] = u, e.pop(), this._removeInactiveBindingsForAction(c);
        }

        delete r[n];
      }
    },
    uncacheRoot: function uncacheRoot(t) {
      var e = t.uuid,
          n = this._actionsByClip;

      for (var r in n) {
        var i = n[r].actionByRoot[e];
        void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i));
      }

      var a = this._bindingsByRootAndName[e];
      if (void 0 !== a) for (var o in a) {
        var s = a[o];
        s.restoreOriginalState(), this._removeInactiveBinding(s);
      }
    },
    uncacheAction: function uncacheAction(t, e) {
      var n = this.existingAction(t, e);
      null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
    }
  });

  var cu = function () {
    function t(t) {
      "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t;
    }

    return t.prototype.clone = function () {
      return new t(void 0 === this.value.clone ? this.value : this.value.clone());
    }, t;
  }();

  function lu(t, e, n) {
    da.call(this, t, e), this.meshPerAttribute = n || 1;
  }

  function uu(t, e, n, r, i) {
    this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = r, this.count = i, this.version = 0;
  }

  function hu(t, e, n, r) {
    this.ray = new Jt(t, e), this.near = n || 0, this.far = r || 1 / 0, this.camera = null, this.layers = new ce(), this.params = {
      Mesh: {},
      Line: {
        threshold: 1
      },
      LOD: {},
      Points: {
        threshold: 1
      },
      Sprite: {}
    }, Object.defineProperties(this.params, {
      PointCloud: {
        get: function get() {
          return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points;
        }
      }
    });
  }

  function du(t, e) {
    return t.distance - e.distance;
  }

  function pu(t, e, n, r) {
    if (t.layers.test(e.layers) && t.raycast(e, n), !0 === r) for (var i = t.children, a = 0, o = i.length; a < o; a++) {
      pu(i[a], e, n, !0);
    }
  }

  lu.prototype = Object.assign(Object.create(da.prototype), {
    constructor: lu,
    isInstancedInterleavedBuffer: !0,
    copy: function copy(t) {
      return da.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this;
    },
    clone: function clone(t) {
      var e = da.prototype.clone.call(this, t);
      return e.meshPerAttribute = this.meshPerAttribute, e;
    },
    toJSON: function toJSON(t) {
      var e = da.prototype.toJSON.call(this, t);
      return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
    }
  }), Object.defineProperty(uu.prototype, "needsUpdate", {
    set: function set(t) {
      !0 === t && this.version++;
    }
  }), Object.assign(uu.prototype, {
    isGLBufferAttribute: !0,
    setBuffer: function setBuffer(t) {
      return this.buffer = t, this;
    },
    setType: function setType(t, e) {
      return this.type = t, this.elementSize = e, this;
    },
    setItemSize: function setItemSize(t) {
      return this.itemSize = t, this;
    },
    setCount: function setCount(t) {
      return this.count = t, this;
    }
  }), Object.assign(hu.prototype, {
    set: function set(t, e) {
      this.ray.set(t, e);
    },
    setFromCamera: function setFromCamera(t, e) {
      e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type.");
    },
    intersectObject: function intersectObject(t, e, n) {
      var r = n || [];
      return pu(t, this, r, e), r.sort(du), r;
    },
    intersectObjects: function intersectObjects(t, e, n) {
      var r = n || [];
      if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), r;

      for (var i = 0, a = t.length; i < a; i++) {
        pu(t[i], this, r, e);
      }

      return r.sort(du), r;
    }
  });

  var fu = function () {
    function t(t, e, n) {
      return void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), this.radius = t, this.phi = e, this.theta = n, this;
    }

    var e = t.prototype;
    return e.set = function (t, e, n) {
      return this.radius = t, this.phi = e, this.theta = n, this;
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
    }, e.makeSafe = function () {
      var t = 1e-6;
      return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this;
    }, e.setFromVector3 = function (t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z);
    }, e.setFromCartesianCoords = function (t, e, n) {
      return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(st.clamp(e / this.radius, -1, 1))), this;
    }, t;
  }(),
      mu = function () {
    function t(t, e, n) {
      return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== n ? n : 0, this;
    }

    var e = t.prototype;
    return e.set = function (t, e, n) {
      return this.radius = t, this.theta = e, this.y = n, this;
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this;
    }, e.setFromVector3 = function (t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z);
    }, e.setFromCartesianCoords = function (t, e, n) {
      return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this;
    }, t;
  }(),
      vu = new pt(),
      gu = function () {
    function t(t, e) {
      Object.defineProperty(this, "isBox2", {
        value: !0
      }), this.min = void 0 !== t ? t : new pt(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new pt(-1 / 0, -1 / 0);
    }

    var e = t.prototype;
    return e.set = function (t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }, e.setFromPoints = function (t) {
      this.makeEmpty();

      for (var e = 0, n = t.length; e < n; e++) {
        this.expandByPoint(t[e]);
      }

      return this;
    }, e.setFromCenterAndSize = function (t, e) {
      var n = vu.copy(e).multiplyScalar(.5);
      return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }, e.makeEmpty = function () {
      return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
    }, e.isEmpty = function () {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    }, e.getCenter = function (t) {
      return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new pt()), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
    }, e.getSize = function (t) {
      return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new pt()), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
    }, e.expandByPoint = function (t) {
      return this.min.min(t), this.max.max(t), this;
    }, e.expandByVector = function (t) {
      return this.min.sub(t), this.max.add(t), this;
    }, e.expandByScalar = function (t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }, e.containsPoint = function (t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
    }, e.containsBox = function (t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
    }, e.getParameter = function (t, e) {
      return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new pt()), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y));
    }, e.intersectsBox = function (t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
    }, e.clampPoint = function (t, e) {
      return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new pt()), e.copy(t).clamp(this.min, this.max);
    }, e.distanceToPoint = function (t) {
      return vu.copy(t).clamp(this.min, this.max).sub(t).length();
    }, e.intersect = function (t) {
      return this.min.max(t.min), this.max.min(t.max), this;
    }, e.union = function (t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }, e.translate = function (t) {
      return this.min.add(t), this.max.add(t), this;
    }, e.equals = function (t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }, t;
  }(),
      yu = new Mt(),
      xu = new Mt(),
      _u = function () {
    function t(t, e) {
      this.start = void 0 !== t ? t : new Mt(), this.end = void 0 !== e ? e : new Mt();
    }

    var e = t.prototype;
    return e.set = function (t, e) {
      return this.start.copy(t), this.end.copy(e), this;
    }, e.clone = function () {
      return new this.constructor().copy(this);
    }, e.copy = function (t) {
      return this.start.copy(t.start), this.end.copy(t.end), this;
    }, e.getCenter = function (t) {
      return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new Mt()), t.addVectors(this.start, this.end).multiplyScalar(.5);
    }, e.delta = function (t) {
      return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new Mt()), t.subVectors(this.end, this.start);
    }, e.distanceSq = function () {
      return this.start.distanceToSquared(this.end);
    }, e.distance = function () {
      return this.start.distanceTo(this.end);
    }, e.at = function (t, e) {
      return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new Mt()), this.delta(e).multiplyScalar(t).add(this.start);
    }, e.closestPointToPointParameter = function (t, e) {
      yu.subVectors(t, this.start), xu.subVectors(this.end, this.start);
      var n = xu.dot(xu),
          r = xu.dot(yu) / n;
      return e && (r = st.clamp(r, 0, 1)), r;
    }, e.closestPointToPoint = function (t, e, n) {
      var r = this.closestPointToPointParameter(t, e);
      return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new Mt()), this.delta(n).multiplyScalar(r).add(this.start);
    }, e.applyMatrix4 = function (t) {
      return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
    }, e.equals = function (t) {
      return t.start.equals(this.start) && t.end.equals(this.end);
    }, t;
  }();

  function bu(t) {
    we.call(this), this.material = t, this.render = function () {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0;
  }

  bu.prototype = Object.create(we.prototype), bu.prototype.constructor = bu, bu.prototype.isImmediateRenderObject = !0;

  var wu = new Mt(),
      Mu = function (t) {
    function e(e, n) {
      var r;
      (r = t.call(this) || this).light = e, r.light.updateMatrixWorld(), r.matrix = e.matrixWorld, r.matrixAutoUpdate = !1, r.color = n;

      for (var i = new _n(), a = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], o = 0, s = 1; o < 32; o++, s++) {
        var c = o / 32 * Math.PI * 2,
            l = s / 32 * Math.PI * 2;
        a.push(Math.cos(c), Math.sin(c), 1, Math.cos(l), Math.sin(l), 1);
      }

      i.setAttribute("position", new sn(a, 3));
      var u = new Za({
        fog: !1,
        toneMapped: !1
      });
      return r.cone = new io(i, u), r.add(r.cone), r.update(), r;
    }

    ut(e, t);
    var n = e.prototype;
    return n.dispose = function () {
      this.cone.geometry.dispose(), this.cone.material.dispose();
    }, n.update = function () {
      this.light.updateMatrixWorld();
      var t = this.light.distance ? this.light.distance : 1e3,
          e = t * Math.tan(this.light.angle);
      this.cone.scale.set(e, e, t), wu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(wu), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
    }, e;
  }(we),
      Su = new Mt(),
      Tu = new Qt(),
      Eu = new Qt(),
      Au = function (t) {
    function e(e) {
      for (var n, r = Lu(e), i = new _n(), a = [], o = [], s = new We(0, 0, 1), c = new We(0, 1, 0), l = 0; l < r.length; l++) {
        var u = r[l];
        u.parent && u.parent.isBone && (a.push(0, 0, 0), a.push(0, 0, 0), o.push(s.r, s.g, s.b), o.push(c.r, c.g, c.b));
      }

      i.setAttribute("position", new sn(a, 3)), i.setAttribute("color", new sn(o, 3));
      var h = new Za({
        vertexColors: !0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
        transparent: !0
      });
      return (n = t.call(this, i, h) || this).type = "SkeletonHelper", n.isSkeletonHelper = !0, n.root = e, n.bones = r, n.matrix = e.matrixWorld, n.matrixAutoUpdate = !1, n;
    }

    return ut(e, t), e.prototype.updateMatrixWorld = function (e) {
      var n = this.bones,
          r = this.geometry,
          i = r.getAttribute("position");
      Eu.copy(this.root.matrixWorld).invert();

      for (var a = 0, o = 0; a < n.length; a++) {
        var s = n[a];
        s.parent && s.parent.isBone && (Tu.multiplyMatrices(Eu, s.matrixWorld), Su.setFromMatrixPosition(Tu), i.setXYZ(o, Su.x, Su.y, Su.z), Tu.multiplyMatrices(Eu, s.parent.matrixWorld), Su.setFromMatrixPosition(Tu), i.setXYZ(o + 1, Su.x, Su.y, Su.z), o += 2);
      }

      r.getAttribute("position").needsUpdate = !0, t.prototype.updateMatrixWorld.call(this, e);
    }, e;
  }(io);

  function Lu(t) {
    var e = [];
    t && t.isBone && e.push(t);

    for (var n = 0; n < t.children.length; n++) {
      e.push.apply(e, Lu(t.children[n]));
    }

    return e;
  }

  var Ru = function (t) {
    function e(e, n, r) {
      var i,
          a = new Rs(n, 4, 2),
          o = new Ye({
        wireframe: !0,
        fog: !1,
        toneMapped: !1
      });
      return (i = t.call(this, a, o) || this).light = e, i.light.updateMatrixWorld(), i.color = r, i.type = "PointLightHelper", i.matrix = i.light.matrixWorld, i.matrixAutoUpdate = !1, i.update(), i;
    }

    ut(e, t);
    var n = e.prototype;
    return n.dispose = function () {
      this.geometry.dispose(), this.material.dispose();
    }, n.update = function () {
      void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
    }, e;
  }(Un),
      Cu = new Mt(),
      Pu = new We(),
      Iu = new We(),
      Nu = function (t) {
    function e(e, n, r) {
      var i;
      (i = t.call(this) || this).light = e, i.light.updateMatrixWorld(), i.matrix = e.matrixWorld, i.matrixAutoUpdate = !1, i.color = r;
      var a = new xs(n);
      a.rotateY(.5 * Math.PI), i.material = new Ye({
        wireframe: !0,
        fog: !1,
        toneMapped: !1
      }), void 0 === i.color && (i.material.vertexColors = !0);
      var o = a.getAttribute("position"),
          s = new Float32Array(3 * o.count);
      return a.setAttribute("color", new Qe(s, 3)), i.add(new Un(a, i.material)), i.update(), i;
    }

    ut(e, t);
    var n = e.prototype;
    return n.dispose = function () {
      this.children[0].geometry.dispose(), this.children[0].material.dispose();
    }, n.update = function () {
      var t = this.children[0];
      if (void 0 !== this.color) this.material.color.set(this.color);else {
        var e = t.geometry.getAttribute("color");
        Pu.copy(this.light.color), Iu.copy(this.light.groundColor);

        for (var n = 0, r = e.count; n < r; n++) {
          var i = n < r / 2 ? Pu : Iu;
          e.setXYZ(n, i.r, i.g, i.b);
        }

        e.needsUpdate = !0;
      }
      t.lookAt(Cu.setFromMatrixPosition(this.light.matrixWorld).negate());
    }, e;
  }(we),
      Du = function (t) {
    function e(e, n, r, i) {
      var a;
      void 0 === e && (e = 10), void 0 === n && (n = 10), void 0 === r && (r = 4473924), void 0 === i && (i = 8947848), r = new We(r), i = new We(i);

      for (var o = n / 2, s = e / n, c = e / 2, l = [], u = [], h = 0, d = 0, p = -c; h <= n; h++, p += s) {
        l.push(-c, 0, p, c, 0, p), l.push(p, 0, -c, p, 0, c);
        var f = h === o ? r : i;
        f.toArray(u, d), d += 3, f.toArray(u, d), d += 3, f.toArray(u, d), d += 3, f.toArray(u, d), d += 3;
      }

      var m = new _n();
      m.setAttribute("position", new sn(l, 3)), m.setAttribute("color", new sn(u, 3));
      var v = new Za({
        vertexColors: !0,
        toneMapped: !1
      });
      return (a = t.call(this, m, v) || this).type = "GridHelper", a;
    }

    return ut(e, t), e;
  }(io),
      Ou = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      void 0 === e && (e = 10), void 0 === n && (n = 16), void 0 === r && (r = 8), void 0 === i && (i = 64), void 0 === a && (a = 4473924), void 0 === o && (o = 8947848), a = new We(a), o = new We(o);

      for (var c = [], l = [], u = 0; u <= n; u++) {
        var h = u / n * (2 * Math.PI),
            d = Math.sin(h) * e,
            p = Math.cos(h) * e;
        c.push(0, 0, 0), c.push(d, 0, p);
        var f = 1 & u ? a : o;
        l.push(f.r, f.g, f.b), l.push(f.r, f.g, f.b);
      }

      for (var m = 0; m <= r; m++) {
        for (var v = 1 & m ? a : o, g = e - e / r * m, y = 0; y < i; y++) {
          var x = y / i * (2 * Math.PI),
              _ = Math.sin(x) * g,
              b = Math.cos(x) * g;

          c.push(_, 0, b), l.push(v.r, v.g, v.b), x = (y + 1) / i * (2 * Math.PI), _ = Math.sin(x) * g, b = Math.cos(x) * g, c.push(_, 0, b), l.push(v.r, v.g, v.b);
        }
      }

      var w = new _n();
      w.setAttribute("position", new sn(c, 3)), w.setAttribute("color", new sn(l, 3));
      var M = new Za({
        vertexColors: !0,
        toneMapped: !1
      });
      return (s = t.call(this, w, M) || this).type = "PolarGridHelper", s;
    }

    return ut(e, t), e;
  }(io),
      Bu = new Mt(),
      zu = new Mt(),
      Uu = new Mt(),
      Fu = function (t) {
    function e(e, n, r) {
      var i;
      (i = t.call(this) || this).light = e, i.light.updateMatrixWorld(), i.matrix = e.matrixWorld, i.matrixAutoUpdate = !1, i.color = r, void 0 === n && (n = 1);
      var a = new _n();
      a.setAttribute("position", new sn([-n, n, 0, n, n, 0, n, -n, 0, -n, -n, 0, -n, n, 0], 3));
      var o = new Za({
        fog: !1,
        toneMapped: !1
      });
      return i.lightPlane = new eo(a, o), i.add(i.lightPlane), (a = new _n()).setAttribute("position", new sn([0, 0, 0, 0, 0, 1], 3)), i.targetLine = new eo(a, o), i.add(i.targetLine), i.update(), i;
    }

    ut(e, t);
    var n = e.prototype;
    return n.dispose = function () {
      this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
    }, n.update = function () {
      Bu.setFromMatrixPosition(this.light.matrixWorld), zu.setFromMatrixPosition(this.light.target.matrixWorld), Uu.subVectors(zu, Bu), this.lightPlane.lookAt(zu), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(zu), this.targetLine.scale.z = Uu.length();
    }, e;
  }(we),
      Gu = new Mt(),
      Hu = new qn(),
      ku = function (t) {
    function e(e) {
      var n,
          r = new _n(),
          i = new Za({
        color: 16777215,
        vertexColors: !0,
        toneMapped: !1
      }),
          a = [],
          o = [],
          s = {},
          c = new We(16755200),
          l = new We(16711680),
          u = new We(43775),
          h = new We(16777215),
          d = new We(3355443);

      function p(t, e, n) {
        f(t, n), f(e, n);
      }

      function f(t, e) {
        a.push(0, 0, 0), o.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(a.length / 3 - 1);
      }

      return p("n1", "n2", c), p("n2", "n4", c), p("n4", "n3", c), p("n3", "n1", c), p("f1", "f2", c), p("f2", "f4", c), p("f4", "f3", c), p("f3", "f1", c), p("n1", "f1", c), p("n2", "f2", c), p("n3", "f3", c), p("n4", "f4", c), p("p", "n1", l), p("p", "n2", l), p("p", "n3", l), p("p", "n4", l), p("u1", "u2", u), p("u2", "u3", u), p("u3", "u1", u), p("c", "t", h), p("p", "c", d), p("cn1", "cn2", d), p("cn3", "cn4", d), p("cf1", "cf2", d), p("cf3", "cf4", d), r.setAttribute("position", new sn(a, 3)), r.setAttribute("color", new sn(o, 3)), (n = t.call(this, r, i) || this).type = "CameraHelper", n.camera = e, n.camera.updateProjectionMatrix && n.camera.updateProjectionMatrix(), n.matrix = e.matrixWorld, n.matrixAutoUpdate = !1, n.pointMap = s, n.update(), n;
    }

    return ut(e, t), e.prototype.update = function () {
      var t = this.geometry,
          e = this.pointMap;
      Hu.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), Vu("c", e, t, Hu, 0, 0, -1), Vu("t", e, t, Hu, 0, 0, 1), Vu("n1", e, t, Hu, -1, -1, -1), Vu("n2", e, t, Hu, 1, -1, -1), Vu("n3", e, t, Hu, -1, 1, -1), Vu("n4", e, t, Hu, 1, 1, -1), Vu("f1", e, t, Hu, -1, -1, 1), Vu("f2", e, t, Hu, 1, -1, 1), Vu("f3", e, t, Hu, -1, 1, 1), Vu("f4", e, t, Hu, 1, 1, 1), Vu("u1", e, t, Hu, .7, 1.1, -1), Vu("u2", e, t, Hu, -.7, 1.1, -1), Vu("u3", e, t, Hu, 0, 2, -1), Vu("cf1", e, t, Hu, -1, 0, 1), Vu("cf2", e, t, Hu, 1, 0, 1), Vu("cf3", e, t, Hu, 0, -1, 1), Vu("cf4", e, t, Hu, 0, 1, 1), Vu("cn1", e, t, Hu, -1, 0, -1), Vu("cn2", e, t, Hu, 1, 0, -1), Vu("cn3", e, t, Hu, 0, -1, -1), Vu("cn4", e, t, Hu, 0, 1, -1), t.getAttribute("position").needsUpdate = !0;
    }, e;
  }(io);

  function Vu(t, e, n, r, i, a, o) {
    Gu.set(i, a, o).unproject(r);
    var s = e[t];
    if (void 0 !== s) for (var c = n.getAttribute("position"), l = 0, u = s.length; l < u; l++) {
      c.setXYZ(s[l], Gu.x, Gu.y, Gu.z);
    }
  }

  var Wu,
      ju,
      qu,
      Xu = new Et(),
      Yu = function (t) {
    function e(e, n) {
      var r;
      void 0 === n && (n = 16776960);
      var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
          a = new Float32Array(24),
          o = new _n();
      return o.setIndex(new Qe(i, 1)), o.setAttribute("position", new Qe(a, 3)), (r = t.call(this, o, new Za({
        color: n,
        toneMapped: !1
      })) || this).object = e, r.type = "BoxHelper", r.matrixAutoUpdate = !1, r.update(), r;
    }

    ut(e, t);
    var n = e.prototype;
    return n.update = function (t) {
      if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && Xu.setFromObject(this.object), !Xu.isEmpty()) {
        var e = Xu.min,
            n = Xu.max,
            r = this.geometry.attributes.position,
            i = r.array;
        i[0] = n.x, i[1] = n.y, i[2] = n.z, i[3] = e.x, i[4] = n.y, i[5] = n.z, i[6] = e.x, i[7] = e.y, i[8] = n.z, i[9] = n.x, i[10] = e.y, i[11] = n.z, i[12] = n.x, i[13] = n.y, i[14] = e.z, i[15] = e.x, i[16] = n.y, i[17] = e.z, i[18] = e.x, i[19] = e.y, i[20] = e.z, i[21] = n.x, i[22] = e.y, i[23] = e.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere();
      }
    }, n.setFromObject = function (t) {
      return this.object = t, this.update(), this;
    }, n.copy = function (t) {
      return io.prototype.copy.call(this, t), this.object = t.object, this;
    }, e;
  }(io),
      Zu = function (t) {
    function e(e, n) {
      var r;
      void 0 === n && (n = 16776960);
      var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
          a = new _n();
      return a.setIndex(new Qe(i, 1)), a.setAttribute("position", new sn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), (r = t.call(this, a, new Za({
        color: n,
        toneMapped: !1
      })) || this).box = e, r.type = "Box3Helper", r.geometry.computeBoundingSphere(), r;
    }

    return ut(e, t), e.prototype.updateMatrixWorld = function (e) {
      var n = this.box;
      n.isEmpty() || (n.getCenter(this.position), n.getSize(this.scale), this.scale.multiplyScalar(.5), t.prototype.updateMatrixWorld.call(this, e));
    }, e;
  }(io),
      Ju = function (t) {
    function e(e, n, r) {
      var i;
      void 0 === n && (n = 1), void 0 === r && (r = 16776960);
      var a = r,
          o = new _n();
      o.setAttribute("position", new sn([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), o.computeBoundingSphere(), (i = t.call(this, o, new Za({
        color: a,
        toneMapped: !1
      })) || this).type = "PlaneHelper", i.plane = e, i.size = n;
      var s = new _n();
      return s.setAttribute("position", new sn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), s.computeBoundingSphere(), i.add(new Un(s, new Ye({
        color: a,
        opacity: .2,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !1
      }))), i;
    }

    return ut(e, t), e.prototype.updateMatrixWorld = function (e) {
      var n = -this.plane.constant;
      Math.abs(n) < 1e-8 && (n = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, n), this.children[0].material.side = n < 0 ? 1 : 0, this.lookAt(this.plane.normal), t.prototype.updateMatrixWorld.call(this, e);
    }, e;
  }(eo),
      Qu = new Mt(),
      Ku = function (t) {
    function e(e, n, r, i, a, o) {
      var s;
      return (s = t.call(this) || this).type = "ArrowHelper", void 0 === e && (e = new Mt(0, 0, 1)), void 0 === n && (n = new Mt(0, 0, 0)), void 0 === r && (r = 1), void 0 === i && (i = 16776960), void 0 === a && (a = .2 * r), void 0 === o && (o = .2 * a), void 0 === Wu && ((Wu = new _n()).setAttribute("position", new sn([0, 0, 0, 0, 1, 0], 3)), (ju = new Eo(0, .5, 1, 5, 1)).translate(0, -.5, 0)), s.position.copy(n), s.line = new eo(Wu, new Za({
        color: i,
        toneMapped: !1
      })), s.line.matrixAutoUpdate = !1, s.add(s.line), s.cone = new Un(ju, new Ye({
        color: i,
        toneMapped: !1
      })), s.cone.matrixAutoUpdate = !1, s.add(s.cone), s.setDirection(e), s.setLength(r, a, o), s;
    }

    ut(e, t);
    var n = e.prototype;
    return n.setDirection = function (t) {
      if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);else if (t.y < -.99999) this.quaternion.set(1, 0, 0, 0);else {
        Qu.set(t.z, 0, -t.x).normalize();
        var e = Math.acos(t.y);
        this.quaternion.setFromAxisAngle(Qu, e);
      }
    }, n.setLength = function (t, e, n) {
      void 0 === e && (e = .2 * t), void 0 === n && (n = .2 * e), this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
    }, n.setColor = function (t) {
      this.line.material.color.set(t), this.cone.material.color.set(t);
    }, n.copy = function (e) {
      return t.prototype.copy.call(this, e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
    }, e;
  }(we),
      $u = function (t) {
    function e(e) {
      var n;
      void 0 === e && (e = 1);
      var r = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
          i = new _n();
      i.setAttribute("position", new sn(r, 3)), i.setAttribute("color", new sn([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
      var a = new Za({
        vertexColors: !0,
        toneMapped: !1
      });
      return (n = t.call(this, i, a) || this).type = "AxesHelper", n;
    }

    return ut(e, t), e;
  }(io),
      th = new Float32Array(1),
      eh = new Int32Array(th.buffer),
      nh = {
    toHalfFloat: function toHalfFloat(t) {
      th[0] = t;
      var e = eh[0],
          n = e >> 16 & 32768,
          r = e >> 12 & 2047,
          i = e >> 23 & 255;
      return i < 103 ? n : i > 142 ? (n |= 31744, n |= (255 == i ? 0 : 1) && 8388607 & e) : i < 113 ? n |= ((r |= 2048) >> 114 - i) + (r >> 113 - i & 1) : (n |= i - 112 << 10 | r >> 1, n += 1 & r);
    }
  },
      rh = Math.pow(2, 8),
      ih = [.125, .215, .35, .446, .526, .582],
      ah = 5 + ih.length,
      oh = 20,
      sh = ((qu = {})[3e3] = 0, qu[3001] = 1, qu[3002] = 2, qu[3004] = 3, qu[3005] = 4, qu[3006] = 5, qu[3007] = 6, qu),
      ch = new rl(),
      lh = xh(),
      uh = lh._lodPlanes,
      hh = lh._sizeLods,
      dh = lh._sigmas,
      ph = null,
      fh = (1 + Math.sqrt(5)) / 2,
      mh = 1 / fh,
      vh = [new Mt(1, 1, 1), new Mt(-1, 1, 1), new Mt(1, 1, -1), new Mt(-1, 1, -1), new Mt(0, fh, mh), new Mt(0, fh, -mh), new Mt(mh, 0, fh), new Mt(-mh, 0, fh), new Mt(fh, mh, 0), new Mt(-fh, mh, 0)],
      gh = function () {
    function t(t) {
      var e, n, r;
      this._renderer = t, this._pingPongRenderTarget = null, this._blurMaterial = (e = oh, n = new Float32Array(e), r = new Mt(0, 1, 0), new Ws({
        name: "SphericalGaussianBlur",
        defines: {
          n: e
        },
        uniforms: {
          envMap: {
            value: null
          },
          samples: {
            value: 1
          },
          weights: {
            value: n
          },
          latitudinal: {
            value: !1
          },
          dTheta: {
            value: 0
          },
          mipInt: {
            value: 0
          },
          poleAxis: {
            value: r
          },
          inputEncoding: {
            value: sh[3e3]
          },
          outputEncoding: {
            value: sh[3e3]
          }
        },
        vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
        blending: 0,
        depthTest: !1,
        depthWrite: !1
      })), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial);
    }

    var e = t.prototype;
    return e.fromScene = function (t, e, n, r) {
      void 0 === e && (e = 0), void 0 === n && (n = .1), void 0 === r && (r = 100), ph = this._renderer.getRenderTarget();

      var i = this._allocateTargets();

      return this._sceneToCubeUV(t, n, r, i), e > 0 && this._blur(i, 0, 0, e), this._applyPMREM(i), this._cleanup(i), i;
    }, e.fromEquirectangular = function (t) {
      return this._fromTexture(t);
    }, e.fromCubemap = function (t) {
      return this._fromTexture(t);
    }, e.compileCubemapShader = function () {
      null === this._cubemapShader && (this._cubemapShader = Mh(), this._compileMaterial(this._cubemapShader));
    }, e.compileEquirectangularShader = function () {
      null === this._equirectShader && (this._equirectShader = wh(), this._compileMaterial(this._equirectShader));
    }, e.dispose = function () {
      this._blurMaterial.dispose(), null !== this._cubemapShader && this._cubemapShader.dispose(), null !== this._equirectShader && this._equirectShader.dispose();

      for (var t = 0; t < uh.length; t++) {
        uh[t].dispose();
      }
    }, e._cleanup = function (t) {
      this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(ph), t.scissorTest = !1, bh(t, 0, 0, t.width, t.height);
    }, e._fromTexture = function (t) {
      ph = this._renderer.getRenderTarget();

      var e = this._allocateTargets(t);

      return this._textureToCubeUV(t, e), this._applyPMREM(e), this._cleanup(e), e;
    }, e._allocateTargets = function (t) {
      var e = {
        magFilter: d,
        minFilter: d,
        generateMipmaps: !1,
        type: y,
        format: 1023,
        encoding: yh(t) ? t.encoding : Z,
        depthBuffer: !1
      },
          n = _h(e);

      return n.depthBuffer = !t, this._pingPongRenderTarget = _h(e), n;
    }, e._compileMaterial = function (t) {
      var e = new Un(uh[0], t);

      this._renderer.compile(e, ch);
    }, e._sceneToCubeUV = function (t, e, n, r) {
      var i = new Xn(90, 1, e, n),
          a = [1, -1, 1, 1, 1, 1],
          o = [1, 1, 1, -1, -1, -1],
          s = this._renderer,
          c = s.outputEncoding,
          l = s.toneMapping,
          u = s.getClearColor(),
          h = s.getClearAlpha();
      s.toneMapping = 0, s.outputEncoding = q;
      var d = t.background;

      if (d && d.isColor) {
        d.convertSRGBToLinear();
        var p = Math.max(d.r, d.g, d.b),
            f = Math.min(Math.max(Math.ceil(Math.log2(p)), -128), 127);
        d = d.multiplyScalar(Math.pow(2, -f));
        var m = (f + 128) / 255;
        s.setClearColor(d, m), t.background = null;
      }

      for (var v = 0; v < 6; v++) {
        var g = v % 3;
        0 == g ? (i.up.set(0, a[v], 0), i.lookAt(o[v], 0, 0)) : 1 == g ? (i.up.set(0, 0, a[v]), i.lookAt(0, o[v], 0)) : (i.up.set(0, a[v], 0), i.lookAt(0, 0, o[v])), bh(r, g * rh, v > 2 ? rh : 0, rh, rh), s.setRenderTarget(r), s.render(t, i);
      }

      s.toneMapping = l, s.outputEncoding = c, s.setClearColor(u, h);
    }, e._textureToCubeUV = function (t, e) {
      var n = this._renderer;
      t.isCubeTexture ? null == this._cubemapShader && (this._cubemapShader = Mh()) : null == this._equirectShader && (this._equirectShader = wh());
      var r = t.isCubeTexture ? this._cubemapShader : this._equirectShader,
          i = new Un(uh[0], r),
          a = r.uniforms;
      a.envMap.value = t, t.isCubeTexture || a.texelSize.value.set(1 / t.image.width, 1 / t.image.height), a.inputEncoding.value = sh[t.encoding], a.outputEncoding.value = sh[e.texture.encoding], bh(e, 0, 0, 3 * rh, 2 * rh), n.setRenderTarget(e), n.render(i, ch);
    }, e._applyPMREM = function (t) {
      var e = this._renderer,
          n = e.autoClear;
      e.autoClear = !1;

      for (var r = 1; r < ah; r++) {
        var i = Math.sqrt(dh[r] * dh[r] - dh[r - 1] * dh[r - 1]),
            a = vh[(r - 1) % vh.length];

        this._blur(t, r - 1, r, i, a);
      }

      e.autoClear = n;
    }, e._blur = function (t, e, n, r, i) {
      var a = this._pingPongRenderTarget;
      this._halfBlur(t, a, e, n, r, "latitudinal", i), this._halfBlur(a, t, n, n, r, "longitudinal", i);
    }, e._halfBlur = function (t, e, n, r, i, a, o) {
      var s = this._renderer,
          c = this._blurMaterial;
      "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
      var l = new Un(uh[r], c),
          u = c.uniforms,
          h = hh[n] - 1,
          d = isFinite(i) ? Math.PI / (2 * h) : 2 * Math.PI / 39,
          p = i / d,
          f = isFinite(i) ? 1 + Math.floor(3 * p) : oh;
      f > oh && console.warn("sigmaRadians, " + i + ", is too large and will clip, as it requested " + f + " samples when the maximum is set to " + oh);

      for (var m = [], v = 0, g = 0; g < oh; ++g) {
        var y = g / p,
            x = Math.exp(-y * y / 2);
        m.push(x), 0 == g ? v += x : g < f && (v += 2 * x);
      }

      for (var _ = 0; _ < m.length; _++) {
        m[_] = m[_] / v;
      }

      u.envMap.value = t.texture, u.samples.value = f, u.weights.value = m, u.latitudinal.value = "latitudinal" === a, o && (u.poleAxis.value = o), u.dTheta.value = d, u.mipInt.value = 8 - n, u.inputEncoding.value = sh[t.texture.encoding], u.outputEncoding.value = sh[t.texture.encoding];
      var b = hh[r];
      bh(e, 3 * Math.max(0, rh - 2 * b), (0 === r ? 0 : 2 * rh) + 2 * b * (r > 4 ? r - 8 + 4 : 0), 3 * b, 2 * b), s.setRenderTarget(e), s.render(l, ch);
    }, t;
  }();

  function yh(t) {
    return void 0 !== t && t.type === y && (t.encoding === q || t.encoding === X || t.encoding === Y);
  }

  function xh() {
    for (var t = [], e = [], n = [], r = 8, i = 0; i < ah; i++) {
      var a = Math.pow(2, r);
      e.push(a);
      var o = 1 / a;
      i > 4 ? o = ih[i - 8 + 4 - 1] : 0 == i && (o = 0), n.push(o);

      for (var s = 1 / (a - 1), c = -s / 2, l = 1 + s / 2, u = [c, c, l, c, l, l, c, c, l, l, c, l], h = new Float32Array(108), d = new Float32Array(72), p = new Float32Array(36), f = 0; f < 6; f++) {
        var m = f % 3 * 2 / 3 - 1,
            v = f > 2 ? 0 : -1,
            g = [m, v, 0, m + 2 / 3, v, 0, m + 2 / 3, v + 1, 0, m, v, 0, m + 2 / 3, v + 1, 0, m, v + 1, 0];
        h.set(g, 18 * f), d.set(u, 12 * f);
        var y = [f, f, f, f, f, f];
        p.set(y, 6 * f);
      }

      var x = new _n();
      x.setAttribute("position", new Qe(h, 3)), x.setAttribute("uv", new Qe(d, 2)), x.setAttribute("faceIndex", new Qe(p, 1)), t.push(x), r > 4 && r--;
    }

    return {
      _lodPlanes: t,
      _sizeLods: e,
      _sigmas: n
    };
  }

  function _h(t) {
    var e = new _t(3 * rh, 3 * rh, t);
    return e.texture.mapping = s, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e;
  }

  function bh(t, e, n, r, i) {
    t.viewport.set(e, n, r, i), t.scissor.set(e, n, r, i);
  }

  function wh() {
    return new Ws({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        texelSize: {
          value: new pt(1, 1)
        },
        inputEncoding: {
          value: sh[3e3]
        },
        outputEncoding: {
          value: sh[3e3]
        }
      },
      vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    });
  }

  function Mh() {
    return new Ws({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        inputEncoding: {
          value: sh[3e3]
        },
        outputEncoding: {
          value: sh[3e3]
        }
      },
      vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    });
  }

  function Sh(t) {
    console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Oc.call(this, t), this.type = "catmullrom", this.closed = !0;
  }

  function Th(t) {
    console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Oc.call(this, t), this.type = "catmullrom";
  }

  function Eh(t) {
    console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Oc.call(this, t), this.type = "catmullrom";
  }

  Ac.create = function (t, e) {
    return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(Ac.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t;
  }, Object.assign(Xc.prototype, {
    createPointsGeometry: function createPointsGeometry(t) {
      console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
      var e = this.getPoints(t);
      return this.createGeometry(e);
    },
    createSpacedPointsGeometry: function createSpacedPointsGeometry(t) {
      console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
      var e = this.getSpacedPoints(t);
      return this.createGeometry(e);
    },
    createGeometry: function createGeometry(t) {
      console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");

      for (var e = new wo(), n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        e.vertices.push(new Mt(i.x, i.y, i.z || 0));
      }

      return e;
    }
  }), Object.assign(Yc.prototype, {
    fromPoints: function fromPoints(t) {
      return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t);
    }
  }), Sh.prototype = Object.create(Oc.prototype), Th.prototype = Object.create(Oc.prototype), Eh.prototype = Object.create(Oc.prototype), Object.assign(Eh.prototype, {
    initFromArray: function initFromArray() {
      console.error("THREE.Spline: .initFromArray() has been removed.");
    },
    getControlPointsArray: function getControlPointsArray() {
      console.error("THREE.Spline: .getControlPointsArray() has been removed.");
    },
    reparametrizeByArcLength: function reparametrizeByArcLength() {
      console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");
    }
  }), Du.prototype.setColors = function () {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
  }, Au.prototype.update = function () {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
  }, Object.assign(yc.prototype, {
    extractUrlBase: function extractUrlBase(t) {
      return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), hl.extractUrlBase(t);
    }
  }), yc.Handlers = {
    add: function add() {
      console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
    },
    get: function get() {
      console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
    }
  }, Object.assign(gu.prototype, {
    center: function center(t) {
      return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t);
    },
    empty: function empty() {
      return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    },
    isIntersectionBox: function isIntersectionBox(t) {
      return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
    },
    size: function size(t) {
      return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t);
    }
  }), Object.assign(Et.prototype, {
    center: function center(t) {
      return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t);
    },
    empty: function empty() {
      return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    },
    isIntersectionBox: function isIntersectionBox(t) {
      return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
    },
    isIntersectionSphere: function isIntersectionSphere(t) {
      return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
    },
    size: function size(t) {
      return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t);
    }
  }), Object.assign(kt.prototype, {
    empty: function empty() {
      return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    }
  }), er.prototype.setFromMatrix = function (t) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t);
  }, _u.prototype.center = function (t) {
    return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t);
  }, Object.assign(st, {
    random16: function random16() {
      return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random();
    },
    nearestPowerOfTwo: function nearestPowerOfTwo(t) {
      return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), st.floorPowerOfTwo(t);
    },
    nextPowerOfTwo: function nextPowerOfTwo(t) {
      return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), st.ceilPowerOfTwo(t);
    }
  }), Object.assign(ft.prototype, {
    flattenToArrayOffset: function flattenToArrayOffset(t, e) {
      return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
    },
    multiplyVector3: function multiplyVector3(t) {
      return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
    },
    multiplyVector3Array: function multiplyVector3Array() {
      console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
    },
    applyToBufferAttribute: function applyToBufferAttribute(t) {
      return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
    },
    applyToVector3Array: function applyToVector3Array() {
      console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
    },
    getInverse: function getInverse(t) {
      return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
    }
  }), Object.assign(Qt.prototype, {
    extractPosition: function extractPosition(t) {
      return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t);
    },
    flattenToArrayOffset: function flattenToArrayOffset(t, e) {
      return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
    },
    getPosition: function getPosition() {
      return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new Mt().setFromMatrixColumn(this, 3);
    },
    setRotationFromQuaternion: function setRotationFromQuaternion(t) {
      return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t);
    },
    multiplyToArray: function multiplyToArray() {
      console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
    },
    multiplyVector3: function multiplyVector3(t) {
      return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    },
    multiplyVector4: function multiplyVector4(t) {
      return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    },
    multiplyVector3Array: function multiplyVector3Array() {
      console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
    },
    rotateAxis: function rotateAxis(t) {
      console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this);
    },
    crossVector: function crossVector(t) {
      return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    },
    translate: function translate() {
      console.error("THREE.Matrix4: .translate() has been removed.");
    },
    rotateX: function rotateX() {
      console.error("THREE.Matrix4: .rotateX() has been removed.");
    },
    rotateY: function rotateY() {
      console.error("THREE.Matrix4: .rotateY() has been removed.");
    },
    rotateZ: function rotateZ() {
      console.error("THREE.Matrix4: .rotateZ() has been removed.");
    },
    rotateByAxis: function rotateByAxis() {
      console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    },
    applyToBufferAttribute: function applyToBufferAttribute(t) {
      return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    },
    applyToVector3Array: function applyToVector3Array() {
      console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
    },
    makeFrustum: function makeFrustum(t, e, n, r, i, a) {
      return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, r, n, i, a);
    },
    getInverse: function getInverse(t) {
      return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
    }
  }), Ee.prototype.isIntersectionLine = function (t) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t);
  }, Object.assign(wt.prototype, {
    multiplyVector3: function multiplyVector3(t) {
      return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this);
    },
    inverse: function inverse() {
      return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
    }
  }), Object.assign(Jt.prototype, {
    isIntersectionBox: function isIntersectionBox(t) {
      return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
    },
    isIntersectionPlane: function isIntersectionPlane(t) {
      return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t);
    },
    isIntersectionSphere: function isIntersectionSphere(t) {
      return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
    }
  }), Object.assign(ze.prototype, {
    area: function area() {
      return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
    },
    barycoordFromPoint: function barycoordFromPoint(t, e) {
      return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e);
    },
    midpoint: function midpoint(t) {
      return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t);
    },
    normal: function normal(t) {
      return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t);
    },
    plane: function plane(t) {
      return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t);
    }
  }), Object.assign(ze, {
    barycoordFromPoint: function barycoordFromPoint(t, e, n, r, i) {
      return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), ze.getBarycoord(t, e, n, r, i);
    },
    normal: function normal(t, e, n, r) {
      return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), ze.getNormal(t, e, n, r);
    }
  }), Object.assign(Zc.prototype, {
    extractAllPoints: function extractAllPoints(t) {
      return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t);
    },
    extrude: function extrude(t) {
      return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new fs(this, t);
    },
    makeGeometry: function makeGeometry(t) {
      return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Ls(this, t);
    }
  }), Object.assign(pt.prototype, {
    fromAttribute: function fromAttribute(t, e, n) {
      return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
    },
    distanceToManhattan: function distanceToManhattan(t) {
      return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
    },
    lengthManhattan: function lengthManhattan() {
      return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }
  }), Object.assign(Mt.prototype, {
    setEulerFromRotationMatrix: function setEulerFromRotationMatrix() {
      console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
    },
    setEulerFromQuaternion: function setEulerFromQuaternion() {
      console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
    },
    getPositionFromMatrix: function getPositionFromMatrix(t) {
      return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t);
    },
    getScaleFromMatrix: function getScaleFromMatrix(t) {
      return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t);
    },
    getColumnFromMatrix: function getColumnFromMatrix(t, e) {
      return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t);
    },
    applyProjection: function applyProjection(t) {
      return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t);
    },
    fromAttribute: function fromAttribute(t, e, n) {
      return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
    },
    distanceToManhattan: function distanceToManhattan(t) {
      return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
    },
    lengthManhattan: function lengthManhattan() {
      return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }
  }), Object.assign(xt.prototype, {
    fromAttribute: function fromAttribute(t, e, n) {
      return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
    },
    lengthManhattan: function lengthManhattan() {
      return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }
  }), Object.assign(wo.prototype, {
    computeTangents: function computeTangents() {
      console.error("THREE.Geometry: .computeTangents() has been removed.");
    },
    computeLineDistances: function computeLineDistances() {
      console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");
    },
    applyMatrix: function applyMatrix(t) {
      return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
    }
  }), Object.assign(we.prototype, {
    getChildByName: function getChildByName(t) {
      return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t);
    },
    renderDepth: function renderDepth() {
      console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
    },
    translate: function translate(t, e) {
      return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t);
    },
    getWorldRotation: function getWorldRotation() {
      console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
    },
    applyMatrix: function applyMatrix(t) {
      return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
    }
  }), Object.defineProperties(we.prototype, {
    eulerOrder: {
      get: function get() {
        return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
      },
      set: function set(t) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t;
      }
    },
    useQuaternion: {
      get: function get() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
      },
      set: function set() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
      }
    }
  }), Object.assign(Un.prototype, {
    setDrawMode: function setDrawMode() {
      console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }
  }), Object.defineProperties(Un.prototype, {
    drawMode: {
      get: function get() {
        return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0;
      },
      set: function set() {
        console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
      }
    }
  }), Object.defineProperties(Ua.prototype, {
    objects: {
      get: function get() {
        return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels;
      }
    }
  }), Object.defineProperty(Va.prototype, "useVertexTexture", {
    get: function get() {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.");
    },
    set: function set() {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.");
    }
  }), Fa.prototype.initBones = function () {
    console.error("THREE.SkinnedMesh: initBones() has been removed.");
  }, Object.defineProperty(Ac.prototype, "__arcLengthDivisions", {
    get: function get() {
      return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions;
    },
    set: function set(t) {
      console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t;
    }
  }), Xn.prototype.setLens = function (t, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t);
  }, Object.defineProperties(Jc.prototype, {
    onlyShadow: {
      set: function set() {
        console.warn("THREE.Light: .onlyShadow has been removed.");
      }
    },
    shadowCameraFov: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t;
      }
    },
    shadowCameraLeft: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t;
      }
    },
    shadowCameraRight: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t;
      }
    },
    shadowCameraTop: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t;
      }
    },
    shadowCameraBottom: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t;
      }
    },
    shadowCameraNear: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t;
      }
    },
    shadowCameraFar: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t;
      }
    },
    shadowCameraVisible: {
      set: function set() {
        console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
      }
    },
    shadowBias: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t;
      }
    },
    shadowDarkness: {
      set: function set() {
        console.warn("THREE.Light: .shadowDarkness has been removed.");
      }
    },
    shadowMapWidth: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t;
      }
    },
    shadowMapHeight: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t;
      }
    }
  }), Object.defineProperties(Qe.prototype, {
    length: {
      get: function get() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
      }
    },
    dynamic: {
      get: function get() {
        return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === et;
      },
      set: function set() {
        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(et);
      }
    }
  }), Object.assign(Qe.prototype, {
    setDynamic: function setDynamic(t) {
      return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? et : tt), this;
    },
    copyIndicesArray: function copyIndicesArray() {
      console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
    },
    setArray: function setArray() {
      console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }
  }), Object.assign(_n.prototype, {
    addIndex: function addIndex(t) {
      console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t);
    },
    addAttribute: function addAttribute(t, e) {
      return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new Qe(arguments[1], arguments[2])));
    },
    addDrawCall: function addDrawCall(t, e, n) {
      void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e);
    },
    clearDrawCalls: function clearDrawCalls() {
      console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
    },
    computeTangents: function computeTangents() {
      console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");
    },
    computeOffsets: function computeOffsets() {
      console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    },
    removeAttribute: function removeAttribute(t) {
      return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t);
    },
    applyMatrix: function applyMatrix(t) {
      return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
    }
  }), Object.defineProperties(_n.prototype, {
    drawcalls: {
      get: function get() {
        return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
      }
    },
    offsets: {
      get: function get() {
        return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
      }
    }
  }), Object.defineProperties(dl.prototype, {
    maxInstancedCount: {
      get: function get() {
        return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount;
      },
      set: function set(t) {
        console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount = t;
      }
    }
  }), Object.defineProperties(hu.prototype, {
    linePrecision: {
      get: function get() {
        return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold;
      },
      set: function set(t) {
        console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = t;
      }
    }
  }), Object.defineProperties(da.prototype, {
    dynamic: {
      get: function get() {
        return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === et;
      },
      set: function set(t) {
        console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(t);
      }
    }
  }), Object.assign(da.prototype, {
    setDynamic: function setDynamic(t) {
      return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? et : tt), this;
    },
    setArray: function setArray() {
      console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }
  }), Object.assign(ds.prototype, {
    getArrays: function getArrays() {
      console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");
    },
    addShapeList: function addShapeList() {
      console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");
    },
    addShape: function addShape() {
      console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");
    }
  }), Object.assign(ha.prototype, {
    dispose: function dispose() {
      console.error("THREE.Scene: .dispose() has been removed.");
    }
  }), Object.defineProperties(cu.prototype, {
    dynamic: {
      set: function set() {
        console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");
      }
    },
    onUpdate: {
      value: function value() {
        return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
      }
    }
  }), Object.defineProperties(Xe.prototype, {
    wrapAround: {
      get: function get() {
        console.warn("THREE.Material: .wrapAround has been removed.");
      },
      set: function set() {
        console.warn("THREE.Material: .wrapAround has been removed.");
      }
    },
    overdraw: {
      get: function get() {
        console.warn("THREE.Material: .overdraw has been removed.");
      },
      set: function set() {
        console.warn("THREE.Material: .overdraw has been removed.");
      }
    },
    wrapRGB: {
      get: function get() {
        return console.warn("THREE.Material: .wrapRGB has been removed."), new We();
      }
    },
    shading: {
      get: function get() {
        console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
      },
      set: function set(t) {
        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t;
      }
    },
    stencilMask: {
      get: function get() {
        return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
      },
      set: function set(t) {
        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t;
      }
    }
  }), Object.defineProperties(Xs.prototype, {
    metal: {
      get: function get() {
        return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1;
      },
      set: function set() {
        console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");
      }
    }
  }), Object.defineProperties(qs.prototype, {
    transparency: {
      get: function get() {
        return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission;
      },
      set: function set(t) {
        console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission = t;
      }
    }
  }), Object.defineProperties(jn.prototype, {
    derivatives: {
      get: function get() {
        return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
      },
      set: function set(t) {
        console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t;
      }
    }
  }), Object.assign(sa.prototype, {
    clearTarget: function clearTarget(t, e, n, r) {
      console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, r);
    },
    animate: function animate(t) {
      console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t);
    },
    getCurrentRenderTarget: function getCurrentRenderTarget() {
      return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
    },
    getMaxAnisotropy: function getMaxAnisotropy() {
      return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
    },
    getPrecision: function getPrecision() {
      return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
    },
    resetGLState: function resetGLState() {
      return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
    },
    supportsFloatTextures: function supportsFloatTextures() {
      return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
    },
    supportsHalfFloatTextures: function supportsHalfFloatTextures() {
      return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
    },
    supportsStandardDerivatives: function supportsStandardDerivatives() {
      return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
    },
    supportsCompressedTextureS3TC: function supportsCompressedTextureS3TC() {
      return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
    },
    supportsCompressedTexturePVRTC: function supportsCompressedTexturePVRTC() {
      return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
    },
    supportsBlendMinMax: function supportsBlendMinMax() {
      return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
    },
    supportsVertexTextures: function supportsVertexTextures() {
      return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
    },
    supportsInstancedArrays: function supportsInstancedArrays() {
      return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
    },
    enableScissorTest: function enableScissorTest(t) {
      console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t);
    },
    initMaterial: function initMaterial() {
      console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    },
    addPrePlugin: function addPrePlugin() {
      console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    },
    addPostPlugin: function addPostPlugin() {
      console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    },
    updateShadowMap: function updateShadowMap() {
      console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    },
    setFaceCulling: function setFaceCulling() {
      console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
    },
    allocTextureUnit: function allocTextureUnit() {
      console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
    },
    setTexture: function setTexture() {
      console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
    },
    setTexture2D: function setTexture2D() {
      console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
    },
    setTextureCube: function setTextureCube() {
      console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
    },
    getActiveMipMapLevel: function getActiveMipMapLevel() {
      return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
    }
  }), Object.defineProperties(sa.prototype, {
    shadowMapEnabled: {
      get: function get() {
        return this.shadowMap.enabled;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t;
      }
    },
    shadowMapType: {
      get: function get() {
        return this.shadowMap.type;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t;
      }
    },
    shadowMapCullFace: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      }
    },
    context: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
      }
    },
    vr: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
      }
    },
    gammaInput: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
      }
    },
    gammaOutput: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? X : q;
      }
    },
    toneMappingWhitePoint: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
      }
    }
  }), Object.defineProperties(Ki.prototype, {
    cullFace: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      }
    },
    renderReverseSided: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      }
    },
    renderSingleSided: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      }
    }
  }), Object.defineProperties(_t.prototype, {
    wrapS: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t;
      }
    },
    wrapT: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t;
      }
    },
    magFilter: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t;
      }
    },
    minFilter: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t;
      }
    },
    anisotropy: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t;
      }
    },
    offset: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t;
      }
    },
    repeat: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t;
      }
    },
    format: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t;
      }
    },
    type: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t;
      }
    },
    generateMipmaps: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t;
      }
    }
  }), Object.defineProperties(Fl.prototype, {
    load: {
      value: function value(t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var e = this;
        return new El().load(t, function (t) {
          e.setBuffer(t);
        }), this;
      }
    },
    startTime: {
      set: function set() {
        console.warn("THREE.Audio: .startTime is now .play( delay ).");
      }
    }
  }), jl.prototype.getData = function () {
    return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
  }, Zn.prototype.updateCubeMap = function (t, e) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e);
  }, Zn.prototype.clear = function (t, e, n, r) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, r);
  };
  var Ah = {
    merge: function merge(t, e, n) {
      var r;
      console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."), e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), r = e.matrix, e = e.geometry), t.merge(e, r, n);
    },
    center: function center(t) {
      return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center();
    }
  };
  mt.crossOrigin = void 0, mt.loadTexture = function (t, e, n, r) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    var i = new Ec();
    i.setCrossOrigin(this.crossOrigin);
    var a = i.load(t, n, void 0, r);
    return e && (a.mapping = e), a;
  }, mt.loadTextureCube = function (t, e, n, r) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    var i = new Sc();
    i.setCrossOrigin(this.crossOrigin);
    var a = i.load(t, n, void 0, r);
    return e && (a.mapping = e), a;
  }, mt.loadCompressedTexture = function () {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
  }, mt.loadCompressedTextureCube = function () {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
  };
  var Lh = {
    createMultiMaterialObject: function createMultiMaterialObject() {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    },
    detach: function detach() {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    },
    attach: function attach() {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    }
  };
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: "123"
    }
  })), t.ACESFilmicToneMapping = 4, t.AddEquation = e, t.AddOperation = 2, t.AdditiveAnimationBlendMode = j, t.AdditiveBlending = 2, t.AlphaFormat = 1021, t.AlwaysDepth = 1, t.AlwaysStencilFunc = 519, t.AmbientLight = ol, t.AmbientLightProbe = Ll, t.AnimationClip = pc, t.AnimationLoader = bc, t.AnimationMixer = su, t.AnimationObjectGroup = au, t.AnimationUtils = tc, t.ArcCurve = Rc, t.ArrayCamera = na, t.ArrowHelper = Ku, t.Audio = Fl, t.AudioAnalyser = jl, t.AudioContext = Tl, t.AudioListener = Ul, t.AudioLoader = El, t.AxesHelper = $u, t.AxisHelper = function (t) {
    return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new $u(t);
  }, t.BackSide = 1, t.BasicDepthPacking = 3200, t.BasicShadowMap = 0, t.BinaryTextureLoader = function (t) {
    return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new Tc(t);
  }, t.Bone = Ga, t.BooleanKeyframeTrack = oc, t.BoundingBoxHelper = function (t, e) {
    return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new Yu(t, e);
  }, t.Box2 = gu, t.Box3 = Et, t.Box3Helper = Zu, t.BoxBufferGeometry = Hn, t.BoxGeometry = Mo, t.BoxHelper = Yu, t.BufferAttribute = Qe, t.BufferGeometry = _n, t.BufferGeometryLoader = fl, t.ByteType = 1010, t.Cache = mc, t.Camera = qn, t.CameraHelper = ku, t.CanvasRenderer = function () {
    console.error("THREE.CanvasRenderer has been removed");
  }, t.CanvasTexture = vo, t.CatmullRomCurve3 = Oc, t.CineonToneMapping = 3, t.CircleBufferGeometry = So, t.CircleGeometry = To, t.ClampToEdgeWrapping = u, t.Clock = Il, t.ClosedSplineCurve3 = Sh, t.Color = We, t.ColorKeyframeTrack = sc, t.CompressedTexture = mo, t.CompressedTextureLoader = wc, t.ConeBufferGeometry = Ro, t.ConeGeometry = Lo, t.CubeCamera = Zn, t.CubeGeometry = Mo, t.CubeReflectionMapping = r, t.CubeRefractionMapping = i, t.CubeTexture = Jn, t.CubeTextureLoader = Sc, t.CubeUVReflectionMapping = s, t.CubeUVRefractionMapping = c, t.CubicBezierCurve = Fc, t.CubicBezierCurve3 = Gc, t.CubicInterpolant = nc, t.CullFaceBack = 1, t.CullFaceFront = 2, t.CullFaceFrontBack = 3, t.CullFaceNone = 0, t.Curve = Ac, t.CurvePath = Xc, t.CustomBlending = 5, t.CustomToneMapping = 5, t.CylinderBufferGeometry = Eo, t.CylinderGeometry = Ao, t.Cylindrical = mu, t.DataTexture = Kn, t.DataTexture2DArray = wr, t.DataTexture3D = Mr, t.DataTextureLoader = Tc, t.DataUtils = nh, t.DecrementStencilOp = 7683, t.DecrementWrapStencilOp = 34056, t.DefaultLoadingManager = gc, t.DepthFormat = E, t.DepthStencilFormat = A, t.DepthTexture = go, t.DirectionalLight = al, t.DirectionalLightHelper = Fu, t.DiscreteInterpolant = ic, t.DodecahedronBufferGeometry = Po, t.DodecahedronGeometry = Io, t.DoubleSide = 2, t.DstAlphaFactor = 206, t.DstColorFactor = 208, t.DynamicBufferAttribute = function (t, e) {
    return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."), new Qe(t, e).setUsage(et);
  }, t.DynamicCopyUsage = 35050, t.DynamicDrawUsage = et, t.DynamicReadUsage = 35049, t.EdgesGeometry = zo, t.EdgesHelper = function (t, e) {
    return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new io(new zo(t.geometry), new Za({
      color: void 0 !== e ? e : 16777215
    }));
  }, t.EllipseCurve = Lc, t.EqualDepth = 4, t.EqualStencilFunc = 514, t.EquirectangularReflectionMapping = a, t.EquirectangularRefractionMapping = o, t.Euler = ae, t.EventDispatcher = rt, t.ExtrudeBufferGeometry = ds, t.ExtrudeGeometry = fs, t.Face3 = je, t.Face4 = function (t, e, n, r, i, a, o) {
    return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new je(t, e, n, i, a, o);
  }, t.FaceColors = 1, t.FileLoader = _c, t.FlatShading = 1, t.Float16BufferAttribute = on, t.Float32Attribute = function (t, e) {
    return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new sn(t, e);
  }, t.Float32BufferAttribute = sn, t.Float64Attribute = function (t, e) {
    return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new cn(t, e);
  }, t.Float64BufferAttribute = cn, t.FloatType = b, t.Fog = ua, t.FogExp2 = la, t.Font = wl, t.FontLoader = Sl, t.FrontSide = 0, t.Frustum = er, t.GLBufferAttribute = uu, t.GLSL1 = "100", t.GLSL3 = nt, t.GammaEncoding = Y, t.Geometry = wo, t.GeometryUtils = Ah, t.GreaterDepth = 6, t.GreaterEqualDepth = 5, t.GreaterEqualStencilFunc = 518, t.GreaterStencilFunc = 516, t.GridHelper = Du, t.Group = ra, t.HalfFloatType = w, t.HemisphereLight = Qc, t.HemisphereLightHelper = Nu, t.HemisphereLightProbe = Al, t.IcosahedronBufferGeometry = ms, t.IcosahedronGeometry = vs, t.ImageBitmapLoader = _l, t.ImageLoader = Mc, t.ImageUtils = mt, t.ImmediateRenderObject = bu, t.IncrementStencilOp = 7682, t.IncrementWrapStencilOp = 34055, t.InstancedBufferAttribute = pl, t.InstancedBufferGeometry = dl, t.InstancedInterleavedBuffer = lu, t.InstancedMesh = Ya, t.Int16Attribute = function (t, e) {
    return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new en(t, e);
  }, t.Int16BufferAttribute = en, t.Int32Attribute = function (t, e) {
    return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new rn(t, e);
  }, t.Int32BufferAttribute = rn, t.Int8Attribute = function (t, e) {
    return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new Ke(t, e);
  }, t.Int8BufferAttribute = Ke, t.IntType = 1013, t.InterleavedBuffer = da, t.InterleavedBufferAttribute = ma, t.Interpolant = ec, t.InterpolateDiscrete = U, t.InterpolateLinear = F, t.InterpolateSmooth = G, t.InvertStencilOp = 5386, t.JSONLoader = function () {
    console.error("THREE.JSONLoader has been removed.");
  }, t.KeepStencilOp = $, t.KeyframeTrack = ac, t.LOD = Ua, t.LatheBufferGeometry = gs, t.LatheGeometry = ys, t.Layers = ce, t.LensFlare = function () {
    console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js");
  }, t.LessDepth = 2, t.LessEqualDepth = 3, t.LessEqualStencilFunc = 515, t.LessStencilFunc = 513, t.Light = Jc, t.LightProbe = ll, t.Line = eo, t.Line3 = _u, t.LineBasicMaterial = Za, t.LineCurve = Hc, t.LineCurve3 = kc, t.LineDashedMaterial = Ks, t.LineLoop = ao, t.LinePieces = 1, t.LineSegments = io, t.LineStrip = 0, t.LinearEncoding = q, t.LinearFilter = m, t.LinearInterpolant = rc, t.LinearMipMapLinearFilter = 1008, t.LinearMipMapNearestFilter = 1007, t.LinearMipmapLinearFilter = g, t.LinearMipmapNearestFilter = v, t.LinearToneMapping = 1, t.Loader = yc, t.LoaderUtils = hl, t.LoadingManager = vc, t.LogLuvEncoding = 3003, t.LoopOnce = 2200, t.LoopPingPong = 2202, t.LoopRepeat = 2201, t.LuminanceAlphaFormat = 1025, t.LuminanceFormat = 1024, t.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
  }, t.Material = Xe, t.MaterialLoader = ul, t.Math = st, t.MathUtils = st, t.Matrix3 = ft, t.Matrix4 = Qt, t.MaxEquation = 104, t.Mesh = Un, t.MeshBasicMaterial = Ye, t.MeshDepthMaterial = Ji, t.MeshDistanceMaterial = Qi, t.MeshFaceMaterial = function (t) {
    return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t;
  }, t.MeshLambertMaterial = Js, t.MeshMatcapMaterial = Qs, t.MeshNormalMaterial = Zs, t.MeshPhongMaterial = Xs, t.MeshPhysicalMaterial = qs, t.MeshStandardMaterial = js, t.MeshToonMaterial = Ys, t.MinEquation = 103, t.MirroredRepeatWrapping = h, t.MixOperation = 1, t.MultiMaterial = function (t) {
    return void 0 === t && (t = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function () {
      return t.slice();
    }, t;
  }, t.MultiplyBlending = 4, t.MultiplyOperation = 0, t.NearestFilter = d, t.NearestMipMapLinearFilter = 1005, t.NearestMipMapNearestFilter = 1004, t.NearestMipmapLinearFilter = f, t.NearestMipmapNearestFilter = p, t.NeverDepth = 0, t.NeverStencilFunc = 512, t.NoBlending = 0, t.NoColors = 0, t.NoToneMapping = 0, t.NormalAnimationBlendMode = W, t.NormalBlending = 1, t.NotEqualDepth = 7, t.NotEqualStencilFunc = 517, t.NumberKeyframeTrack = cc, t.Object3D = we, t.ObjectLoader = vl, t.ObjectSpaceNormalMap = 1, t.OctahedronBufferGeometry = xs, t.OctahedronGeometry = _s, t.OneFactor = 201, t.OneMinusDstAlphaFactor = 207, t.OneMinusDstColorFactor = 209, t.OneMinusSrcAlphaFactor = 205, t.OneMinusSrcColorFactor = 203, t.OrthographicCamera = rl, t.PCFShadowMap = 1, t.PCFSoftShadowMap = 2, t.PMREMGenerator = gh, t.ParametricBufferGeometry = bs, t.ParametricGeometry = ws, t.Particle = function (t) {
    return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Ra(t);
  }, t.ParticleBasicMaterial = function (t) {
    return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new oo(t);
  }, t.ParticleSystem = function (t, e) {
    return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new ho(t, e);
  }, t.ParticleSystemMaterial = function (t) {
    return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new oo(t);
  }, t.Path = Yc, t.PerspectiveCamera = Xn, t.Plane = Ee, t.PlaneBufferGeometry = ir, t.PlaneGeometry = Ms, t.PlaneHelper = Ju, t.PointCloud = function (t, e) {
    return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new ho(t, e);
  }, t.PointCloudMaterial = function (t) {
    return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new oo(t);
  }, t.PointLight = nl, t.PointLightHelper = Ru, t.Points = ho, t.PointsMaterial = oo, t.PolarGridHelper = Ou, t.PolyhedronBufferGeometry = Co, t.PolyhedronGeometry = Ss, t.PositionalAudio = Wl, t.PropertyBinding = iu, t.PropertyMixer = ql, t.QuadraticBezierCurve = Vc, t.QuadraticBezierCurve3 = Wc, t.Quaternion = wt, t.QuaternionKeyframeTrack = uc, t.QuaternionLinearInterpolant = lc, t.REVISION = "123", t.RGBADepthPacking = 3201, t.RGBAFormat = T, t.RGBAIntegerFormat = 1033, t.RGBA_ASTC_10x10_Format = 37819, t.RGBA_ASTC_10x5_Format = 37816, t.RGBA_ASTC_10x6_Format = 37817, t.RGBA_ASTC_10x8_Format = 37818, t.RGBA_ASTC_12x10_Format = 37820, t.RGBA_ASTC_12x12_Format = 37821, t.RGBA_ASTC_4x4_Format = 37808, t.RGBA_ASTC_5x4_Format = 37809, t.RGBA_ASTC_5x5_Format = 37810, t.RGBA_ASTC_6x5_Format = 37811, t.RGBA_ASTC_6x6_Format = 37812, t.RGBA_ASTC_8x5_Format = 37813, t.RGBA_ASTC_8x6_Format = 37814, t.RGBA_ASTC_8x8_Format = 37815, t.RGBA_BPTC_Format = 36492, t.RGBA_ETC2_EAC_Format = z, t.RGBA_PVRTC_2BPPV1_Format = O, t.RGBA_PVRTC_4BPPV1_Format = D, t.RGBA_S3TC_DXT1_Format = R, t.RGBA_S3TC_DXT3_Format = C, t.RGBA_S3TC_DXT5_Format = P, t.RGBDEncoding = K, t.RGBEEncoding = Z, t.RGBEFormat = 1023, t.RGBFormat = S, t.RGBIntegerFormat = 1032, t.RGBM16Encoding = Q, t.RGBM7Encoding = J, t.RGB_ETC1_Format = 36196, t.RGB_ETC2_Format = B, t.RGB_PVRTC_2BPPV1_Format = N, t.RGB_PVRTC_4BPPV1_Format = I, t.RGB_S3TC_DXT1_Format = L, t.RGFormat = 1030, t.RGIntegerFormat = 1031, t.RawShaderMaterial = Ws, t.Ray = Jt, t.Raycaster = hu, t.RectAreaLight = sl, t.RedFormat = 1028, t.RedIntegerFormat = 1029, t.ReinhardToneMapping = 2, t.RepeatWrapping = l, t.ReplaceStencilOp = 7681, t.ReverseSubtractEquation = 102, t.RingBufferGeometry = Ts, t.RingGeometry = Es, t.SRGB8_ALPHA8_ASTC_10x10_Format = 37851, t.SRGB8_ALPHA8_ASTC_10x5_Format = 37848, t.SRGB8_ALPHA8_ASTC_10x6_Format = 37849, t.SRGB8_ALPHA8_ASTC_10x8_Format = 37850, t.SRGB8_ALPHA8_ASTC_12x10_Format = 37852, t.SRGB8_ALPHA8_ASTC_12x12_Format = 37853, t.SRGB8_ALPHA8_ASTC_4x4_Format = 37840, t.SRGB8_ALPHA8_ASTC_5x4_Format = 37841, t.SRGB8_ALPHA8_ASTC_5x5_Format = 37842, t.SRGB8_ALPHA8_ASTC_6x5_Format = 37843, t.SRGB8_ALPHA8_ASTC_6x6_Format = 37844, t.SRGB8_ALPHA8_ASTC_8x5_Format = 37845, t.SRGB8_ALPHA8_ASTC_8x6_Format = 37846, t.SRGB8_ALPHA8_ASTC_8x8_Format = 37847, t.Scene = ha, t.SceneUtils = Lh, t.ShaderChunk = ar, t.ShaderLib = sr, t.ShaderMaterial = jn, t.ShadowMaterial = Vs, t.Shape = Zc, t.ShapeBufferGeometry = As, t.ShapeGeometry = Ls, t.ShapePath = bl, t.ShapeUtils = ls, t.ShortType = 1011, t.Skeleton = Va, t.SkeletonHelper = Au, t.SkinnedMesh = Fa, t.SmoothShading = 2, t.Sphere = kt, t.SphereBufferGeometry = Rs, t.SphereGeometry = Cs, t.Spherical = fu, t.SphericalHarmonics3 = cl, t.Spline = Eh, t.SplineCurve = jc, t.SplineCurve3 = Th, t.SpotLight = tl, t.SpotLightHelper = Mu, t.Sprite = Ra, t.SpriteMaterial = va, t.SrcAlphaFactor = 204, t.SrcAlphaSaturateFactor = 210, t.SrcColorFactor = 202, t.StaticCopyUsage = 35046, t.StaticDrawUsage = tt, t.StaticReadUsage = 35045, t.StereoCamera = Pl, t.StreamCopyUsage = 35042, t.StreamDrawUsage = 35040, t.StreamReadUsage = 35041, t.StringKeyframeTrack = hc, t.SubtractEquation = 101, t.SubtractiveBlending = 3, t.TOUCH = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
  }, t.TangentSpaceNormalMap = 0, t.TetrahedronBufferGeometry = Ps, t.TetrahedronGeometry = Is, t.TextBufferGeometry = Ns, t.TextGeometry = Ds, t.Texture = gt, t.TextureLoader = Ec, t.TorusBufferGeometry = Os, t.TorusGeometry = Bs, t.TorusKnotBufferGeometry = zs, t.TorusKnotGeometry = Us, t.Triangle = ze, t.TriangleFanDrawMode = 2, t.TriangleStripDrawMode = 1, t.TrianglesDrawMode = 0, t.TubeBufferGeometry = Fs, t.TubeGeometry = Gs, t.UVMapping = n, t.Uint16Attribute = function (t, e) {
    return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new nn(t, e);
  }, t.Uint16BufferAttribute = nn, t.Uint32Attribute = function (t, e) {
    return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new an(t, e);
  }, t.Uint32BufferAttribute = an, t.Uint8Attribute = function (t, e) {
    return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new $e(t, e);
  }, t.Uint8BufferAttribute = $e, t.Uint8ClampedAttribute = function (t, e) {
    return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new tn(t, e);
  }, t.Uint8ClampedBufferAttribute = tn, t.Uniform = cu, t.UniformsLib = or, t.UniformsUtils = Wn, t.UnsignedByteType = y, t.UnsignedInt248Type = M, t.UnsignedIntType = _, t.UnsignedShort4444Type = 1017, t.UnsignedShort5551Type = 1018, t.UnsignedShort565Type = 1019, t.UnsignedShortType = x, t.VSMShadowMap = 3, t.Vector2 = pt, t.Vector3 = Mt, t.Vector4 = xt, t.VectorKeyframeTrack = dc, t.Vertex = function (t, e, n) {
    return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new Mt(t, e, n);
  }, t.VertexColors = 2, t.VideoTexture = fo, t.WebGL1Renderer = ca, t.WebGLCubeRenderTarget = Qn, t.WebGLMultisampleRenderTarget = bt, t.WebGLRenderTarget = _t, t.WebGLRenderTargetCube = function (t, e, n) {
    return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."), new Qn(t, n);
  }, t.WebGLRenderer = sa, t.WebGLUtils = ea, t.WireframeGeometry = Hs, t.WireframeHelper = function (t, e) {
    return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new io(new Hs(t.geometry), new Za({
      color: void 0 !== e ? e : 16777215
    }));
  }, t.WrapAroundEnding = V, t.XHRLoader = function (t) {
    return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new _c(t);
  }, t.ZeroCurvatureEnding = H, t.ZeroFactor = 200, t.ZeroSlopeEnding = k, t.ZeroStencilOp = 0, t.sRGBEncoding = X, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49866" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/three.js"], null)
//# sourceMappingURL=/three.bf944244.js.map