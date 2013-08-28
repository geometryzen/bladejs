/* bladejs - 0.0.50
 * JavaScript Geometric Algebra library.
 * 
 */
(function() {
  this.BLADE = this.BLADE || {};

}).call(this);

(function() {
  var BLADE, Dimensions, stringify;

  this.BLADE = this.BLADE || {};

  BLADE = this.BLADE;

  stringify = function(rational, label) {
    if (rational.numer === 0) {
      return null;
    } else if (rational.denom === 1) {
      if (rational.numer === 1) {
        return "" + label;
      } else {
        return "" + label + " ** " + rational.numer;
      }
    } else {

    }
    return "" + label + " ** " + rational;
  };

  Dimensions = (function() {
    function Dimensions(mass, length, time) {
      if (typeof mass === 'number') {
        this.M = new BLADE.Rational(mass, 1);
      } else {
        this.M = mass;
      }
      if (typeof length === 'number') {
        this.L = new BLADE.Rational(length, 1);
      } else {
        this.L = length;
      }
      if (typeof time === 'number') {
        this.T = new BLADE.Rational(time, 1);
      } else {
        this.T = time;
      }
    }

    Dimensions.prototype.mul = function(rhs) {
      return new BLADE.Dimensions(this.M.add(rhs.M), this.L.add(rhs.L), this.T.add(rhs.T));
    };

    Dimensions.prototype.div = function(rhs) {
      return new BLADE.Dimensions(this.M.sub(rhs.M), this.L.sub(rhs.L), this.T.sub(rhs.T));
    };

    Dimensions.prototype.pow = function(exponent) {
      return new BLADE.Dimensions(this.M.mul(exponent), this.L.mul(exponent), this.T.mul(exponent));
    };

    Dimensions.prototype.toString = function() {
      return [stringify(this.M, 'M'), stringify(this.L, 'L'), stringify(this.T, 'T')].filter(function(x) {
        return typeof x === 'string';
      }).join(" * ");
    };

    return Dimensions;

  })();

  this.BLADE.Dimensions = Dimensions;

}).call(this);

(function() {
  var BLADE, Euclidean2;

  this.BLADE = this.BLADE || {};

  BLADE = this.BLADE;

  Euclidean2 = (function() {
    function Euclidean2(w, x, y, xy) {
      this.w = w;
      this.x = x;
      this.y = y;
      this.xy = xy;
    }

    Euclidean2.fromCartesian = function(w, x, y, xy) {
      return new BLADE.Euclidean2(w, x, y, xy);
    };

    Euclidean2.fromPolar = function(w, r, theta, s) {
      return new BLADE.Euclidean2(w, r * Math.cos(theta), r * Math.sin(theta), s);
    };

    Euclidean2.prototype.coordinates = function() {
      return [this.w, this.x, this.y, this.xy];
    };

    Euclidean2.prototype.coordinate = function(index) {
      switch (index) {
        case 0:
          return this.w;
        case 1:
          return this.x;
        case 2:
          return this.y;
        case 3:
          return this.xy;
        default:
          throw new Error("index must be in the range [0..3]");
      }
    };

    Euclidean2.add = function(a, b) {
      var a00, a01, a10, a11, b00, b01, b10, b11, x00, x01, x10, x11;

      a00 = a[0];
      a01 = a[1];
      a10 = a[2];
      a11 = a[3];
      b00 = b[0];
      b01 = b[1];
      b10 = b[2];
      b11 = b[3];
      x00 = BLADE.e2gaASM.add00(a00, a01, a10, a11, b00, b01, b10, b11);
      x01 = BLADE.e2gaASM.add01(a00, a01, a10, a11, b00, b01, b10, b11);
      x10 = BLADE.e2gaASM.add10(a00, a01, a10, a11, b00, b01, b10, b11);
      x11 = BLADE.e2gaASM.add11(a00, a01, a10, a11, b00, b01, b10, b11);
      return [x00, x01, x10, x11];
    };

    Euclidean2.prototype.add = function(rhs) {
      var xs;

      xs = Euclidean2.add(this.coordinates(), rhs.coordinates());
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.sub = function(a, b) {
      var a0, a1, a2, a3, b0, b1, b2, b3, x0, x1, x2, x3;

      a0 = a[0];
      a1 = a[1];
      a2 = a[2];
      a3 = a[3];
      b0 = b[0];
      b1 = b[1];
      b2 = b[2];
      b3 = b[3];
      x0 = BLADE.bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = BLADE.bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = BLADE.bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = BLADE.bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.sub = function(rhs) {
      var xs;

      xs = Euclidean2.sub(this.coordinates(), rhs.coordinates());
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.mul = function(a, b) {
      var a0, a1, a2, a3, b0, b1, b2, b3, x0, x1, x2, x3;

      a0 = a[0];
      a1 = a[1];
      a2 = a[2];
      a3 = a[3];
      b0 = b[0];
      b1 = b[1];
      b2 = b[2];
      b3 = b[3];
      x0 = BLADE.bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = BLADE.bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = BLADE.bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = BLADE.bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.mul = function(rhs) {
      var xs;

      xs = Euclidean2.mul(this.coordinates(), rhs.coordinates());
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.wedge = function(a, b) {
      var a0, a1, a2, a3, b0, b1, b2, b3, x0, x1, x2, x3;

      a0 = a[0];
      a1 = a[1];
      a2 = a[2];
      a3 = a[3];
      b0 = b[0];
      b1 = b[1];
      b2 = b[2];
      b3 = b[3];
      x0 = BLADE.bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = BLADE.bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = BLADE.bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = BLADE.bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.wedge = function(rhs) {
      var xs;

      xs = Euclidean2.wedge(this.coordinates(), rhs.coordinates());
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.lshift = function(a, b) {
      var a0, a1, a2, a3, b0, b1, b2, b3, x0, x1, x2, x3;

      a0 = a[0];
      a1 = a[1];
      a2 = a[2];
      a3 = a[3];
      b0 = b[0];
      b1 = b[1];
      b2 = b[2];
      b3 = b[3];
      x0 = BLADE.bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = BLADE.bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = BLADE.bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = BLADE.bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.lshift = function(rhs) {
      var xs;

      xs = Euclidean2.lshift(this.coordinates(), rhs.coordinates());
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.rshift = function(a, b) {
      var a0, a1, a2, a3, b0, b1, b2, b3, x0, x1, x2, x3;

      a0 = a[0];
      a1 = a[1];
      a2 = a[2];
      a3 = a[3];
      b0 = b[0];
      b1 = b[1];
      b2 = b[2];
      b3 = b[3];
      x0 = BLADE.bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = BLADE.bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = BLADE.bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = BLADE.bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.rshift = function(rhs) {
      var xs;

      xs = Euclidean2.rshift(this.coordinates(), rhs.coordinates());
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.prototype.grade = function(index) {
      switch (index) {
        case 0:
          return Euclidean2.fromCartesian(this.w, 0, 0, 0);
        case 1:
          return Euclidean2.fromCartesian(0, this.x, this.y, 0);
        case 2:
          return Euclidean2.fromCartesian(0, 0, 0, this.xy);
        default:
          return Euclidean2.fromCartesian(0, 0, 0, 0);
      }
    };

    Euclidean2.prototype.quadrance = function() {
      var w, x, xy, y;

      w = this.w;
      x = this.x;
      y = this.y;
      xy = this.xy;
      return w * w + x * x + y * y + xy * xy;
    };

    Euclidean2.prototype.toString = function() {
      return BLADE.bladeSTR.stringFromCoordinates([this.w, this.x, this.y, this.xy], ["1", "e1", "e2", "e12"]);
    };

    Euclidean2.prototype.toStringIJK = function() {
      return BLADE.bladeSTR.stringFromCoordinates(this.coordinates(), ["1", "i", "j", "I"]);
    };

    Euclidean2.prototype.toStringLATEX = function() {
      return BLADE.bladeSTR.stringFromCoordinates(this.coordinates(), ["1", "e_{1}", "e_{2}", "e_{12}"]);
    };

    return Euclidean2;

  })();

  this.BLADE.Euclidean2 = Euclidean2;

}).call(this);

(function() {
  var BLADE, Euclidean3;

  this.BLADE = this.BLADE || {};

  BLADE = this.BLADE;

  Euclidean3 = (function() {
    function Euclidean3(w, x, y, z, xy, yz, zx, xyz) {
      this.w = w || 0;
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.xy = xy || 0;
      this.yz = yz || 0;
      this.zx = zx || 0;
      this.xyz = xyz || 0;
    }

    Euclidean3.fromCartesian = function(w, x, y, z, xy, yz, zx, xyz) {
      return new BLADE.Euclidean3(w, x, y, z, xy, yz, zx, xyz);
    };

    Euclidean3.prototype.coordinates = function() {
      return [this.w, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.xyz];
    };

    Euclidean3.prototype.coordinate = function(index) {
      switch (index) {
        case 0:
          return this.w;
        case 1:
          return this.x;
        case 2:
          return this.y;
        case 3:
          return this.z;
        case 4:
          return this.xy;
        case 5:
          return this.yz;
        case 6:
          return this.zx;
        case 7:
          return this.xyz;
        default:
          throw new Error("index must be in the range [0..7]");
      }
    };

    Euclidean3.compute = function(f, a, b, coord, pack) {
      var a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, x0, x1, x2, x3, x4, x5, x6, x7;

      a0 = coord(a, 0);
      a1 = coord(a, 1);
      a2 = coord(a, 2);
      a3 = coord(a, 3);
      a4 = coord(a, 4);
      a5 = coord(a, 5);
      a6 = coord(a, 6);
      a7 = coord(a, 7);
      b0 = coord(b, 0);
      b1 = coord(b, 1);
      b2 = coord(b, 2);
      b3 = coord(b, 3);
      b4 = coord(b, 4);
      b5 = coord(b, 5);
      b6 = coord(b, 6);
      b7 = coord(b, 7);
      x0 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
      x1 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
      x2 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
      x3 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
      x4 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
      x5 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
      x6 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
      x7 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
      return pack(x0, x1, x2, x3, x4, x5, x6, x7);
    };

    Euclidean3.prototype.add = function(rhs) {
      var coord, pack;

      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(BLADE.bladeASM.addE3, [this.w, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack);
    };

    Euclidean3.prototype.sub = function(rhs) {
      var coord, pack;

      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(BLADE.bladeASM.subE3, [this.w, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack);
    };

    Euclidean3.prototype.mul = function(rhs) {
      var coord, pack;

      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(BLADE.bladeASM.mulE3, [this.w, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack);
    };

    Euclidean3.prototype.wedge = function(rhs) {
      var coord, pack;

      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(BLADE.bladeASM.extE3, [this.w, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack);
    };

    Euclidean3.prototype.lshift = function(rhs) {
      var coord, pack;

      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(BLADE.bladeASM.lcoE3, [this.w, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack);
    };

    Euclidean3.prototype.rshift = function(rhs) {
      var coord, pack;

      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(BLADE.bladeASM.rcoE3, [this.w, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack);
    };

    Euclidean3.prototype.grade = function(index) {
      switch (index) {
        case 0:
          return Euclidean3.fromCartesian(this.w, 0, 0, 0, 0, 0, 0, 0);
        case 1:
          return Euclidean3.fromCartesian(0, this.x, this.y, this.z, 0, 0, 0, 0);
        case 2:
          return Euclidean3.fromCartesian(0, 0, 0, 0, this.xy, this.yz, this.zx, 0);
        case 3:
          return Euclidean3.fromCartesian(0, 0, 0, 0, 0, 0, 0, this.xyz);
        default:
          return Euclidean3.fromCartesian(0, 0, 0, 0, 0, 0, 0, 0);
      }
    };

    Euclidean3.prototype.toString = function() {
      return BLADE.bladeSTR.stringFromCoordinates([this.w, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.xyz], ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"]);
    };

    Euclidean3.prototype.toStringIJK = function() {
      return BLADE.bladeSTR.stringFromCoordinates([this.w, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.xyz], ["1", "i", "j", "k", "ij", "jk", "ki", "I"]);
    };

    Euclidean3.prototype.toStringLATEX = function() {
      return BLADE.bladeSTR.stringFromCoordinates([this.w, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.xyz], ["1", "e_{1}", "e_{2}", "e_{3}", "e_{12}", "e_{23}", "e_{31}", "e_{123}"]);
    };

    return Euclidean3;

  })();

  this.BLADE.Euclidean3 = Euclidean3;

}).call(this);

(function() {
  var BLADE, Line2;

  this.BLADE = this.BLADE || {};

  BLADE = this.BLADE;

  Line2 = (function() {
    function Line2(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }

    Line2.prototype.meetWithLine = function(line) {
      var a1, a2, b1, b2, c1, c2, denom;

      a1 = this.a;
      b1 = this.b;
      c1 = this.c;
      a2 = line.a;
      b2 = line.b;
      c2 = line.c;
      denom = a1 * b2 - a2 * b1;
      return new BLADE.Point2((b1 * c2 - b2 * c1) / denom, (a2 * c1 - a1 * c2) / denom);
    };

    Line2.prototype.passesThroughPoint = function(point, epsilon) {
      return Math.abs(this.a * point.x + this.b * point.y + this.c) < epsilon;
    };

    Line2.prototype.reflectPoint = function(point) {
      var a, aSquared, b, bSquared, c, denom, sqsum, u, v, x, y;

      a = this.a;
      aSquared = a * a;
      b = this.b;
      bSquared = b * b;
      c = this.c;
      denom = aSquared - bSquared;
      sqsum = aSquared + bSquared;
      x = point.x;
      y = point.y;
      u = -(2 * a * (b * y + c) + x * sqsum) / denom;
      v = (2 * b * (a * x + c) + y * sqsum) / denom;
      return new BLADE.Point2(u, v);
    };

    return Line2;

  })();

  this.BLADE.Line2 = Line2;

}).call(this);

(function() {
  var BLADE, Measure;

  this.BLADE = this.BLADE || {};

  BLADE = this.BLADE;

  Measure = (function() {
    function Measure(quantity, uom) {
      var scale;

      scale = uom.scale;
      if (scale === 1) {
        this.quantity = quantity;
        this.uom = uom;
      } else {
        this.quantity = quantity.mul(scale);
        this.uom = new BLADE.Unit(1, uom.dimensions, uom.labels);
      }
    }

    Measure.prototype.mul = function(rhs) {
      if (rhs instanceof BLADE.Measure) {
        return new BLADE.Measure(this.quantity.mul(rhs.quantity), this.uom.mul(rhs.uom));
      } else if (rhs instanceof BLADE.Unit) {
        return new BLADE.Measure(this.quantity, this.uom.mul(rhs));
      } else {
        throw new Error("...");
      }
    };

    Measure.prototype.div = function(rhs) {
      if (rhs instanceof BLADE.Measure) {
        return new BLADE.Measure(this.quantity.div(rhs.quantity), this.uom.div(rhs.uom));
      } else if (rhs instanceof BLADE.Unit) {
        return new BLADE.Measure(this.quantity, this.uom.div(rhs));
      } else {
        throw new Error("...");
      }
    };

    Measure.prototype.toString = function() {
      return "" + this.quantity + " " + this.uom;
    };

    return Measure;

  })();

  this.BLADE.Measure = Measure;

}).call(this);

(function() {
  var BLADE, Point2;

  this.BLADE = this.BLADE || {};

  BLADE = this.BLADE;

  Point2 = (function() {
    function Point2(x, y) {
      this.x = x;
      this.y = y;
    }

    Point2.prototype.joinToPoint = function(point) {
      var x1, x2, y1, y2;

      x1 = this.x;
      y1 = this.y;
      x2 = point.x;
      y2 = point.y;
      return new BLADE.Line2(y1 - y2, x2 - x1, x1 * y2 - x2 * y1);
    };

    Point2.prototype.liesOnLine = function(line, epsilon) {
      return Math.abs(line.a * this.x + line.b * this.y + line.c) < epsilon;
    };

    Point2.prototype.quadrance = function(point) {
      var dx, dy, x1, x2, y1, y2;

      x1 = this.x;
      y1 = this.y;
      x2 = point.x;
      y2 = point.y;
      dx = x2 - x1;
      dy = y2 - y1;
      return dx * dx + dy * dy;
    };

    Point2.prototype.reflectAboutLine = function(line) {
      var a, aSquared, b, bSquared, c, denom, sqsum, u, v, x, y;

      a = line.a;
      aSquared = a * a;
      b = line.b;
      bSquared = b * b;
      c = line.c;
      denom = aSquared - bSquared;
      sqsum = aSquared + bSquared;
      x = this.x;
      y = this.y;
      u = -(2 * a * (b * y + c) + x * sqsum) / denom;
      v = (2 * b * (a * x + c) + y * sqsum) / denom;
      return new BLADE.Point2(u, v);
    };

    Point2.prototype.signedArea = function(pointA2, pointA3) {
      var v1, v2;

      v1 = this.vectorTo(pointA2);
      v2 = this.vectorTo(pointA3);
      return v1.wedge(v2).mul(new BLADE.Euclidean2(0.5, 0, 0, 0));
    };

    Point2.prototype.vectorTo = function(point) {
      return new BLADE.Euclidean2(0, point.x - this.x, point.y - this.y, 0);
    };

    return Point2;

  })();

  this.BLADE.Point2 = Point2;

}).call(this);

(function() {
  var BLADE, Rational, gcd;

  this.BLADE = this.BLADE || {};

  BLADE = this.BLADE;

  gcd = function(a, b) {
    var temp;

    if (a < 0) {
      a = -a;
    }
    if (b < 0) {
      b = -b;
    }
    if (b > a) {
      temp = a;
      a = b;
      b = temp;
    }
    while (true) {
      a %= b;
      if (a === 0) {
        return b;
      }
      b %= a;
      if (b === 0) {
        return a;
      }
    }
  };

  Rational = (function() {
    function Rational(n, d) {
      var g;

      if (d === 0) {
        throw new Error("denominator must not be zero");
      }
      if (n === 0) {
        g = 1;
      } else {
        g = gcd(Math.abs(n), Math.abs(d));
      }
      if (d < 0) {
        n = -n;
        d = -d;
      }
      this.numer = n / g;
      this.denom = d / g;
    }

    Rational.prototype.add = function(rhs) {
      if (typeof rhs === 'number') {
        return new BLADE.Rational(this.numer + this.denom * rhs, this.denom);
      } else {
        return new BLADE.Rational(this.numer * rhs.denom + this.denom * rhs.numer, this.denom * rhs.denom);
      }
    };

    Rational.prototype.sub = function(rhs) {
      if (typeof rhs === 'number') {
        return new BLADE.Rational(this.numer - this.denom * rhs, this.denom);
      } else {
        return new BLADE.Rational(this.numer * rhs.denom - this.denom * rhs.numer, this.denom * rhs.denom);
      }
    };

    Rational.prototype.mul = function(rhs) {
      if (typeof rhs === 'number') {
        return new BLADE.Rational(this.numer * rhs, this.denom);
      } else {
        return new BLADE.Rational(this.numer * rhs.numer, this.denom * rhs.denom);
      }
    };

    Rational.prototype.div = function(rhs) {
      return new BLADE.Rational(this.numer * rhs.denom, this.denom * rhs.numer);
    };

    Rational.prototype.toString = function() {
      return "" + this.numer + "/" + this.denom;
    };

    return Rational;

  })();

  this.BLADE.Rational = Rational;

}).call(this);

(function() {
  var BLADE, Unit, stringify;

  this.BLADE = this.BLADE || {};

  BLADE = this.BLADE;

  stringify = function(rational, label) {
    if (rational.numer === 0) {
      return null;
    } else if (rational.denom === 1) {
      if (rational.numer === 1) {
        return "" + label;
      } else {
        return "" + label + " ** " + rational.numer;
      }
    } else {

    }
    return "" + label + " ** " + rational;
  };

  Unit = (function() {
    function Unit(scale, dimensions, labels) {
      this.scale = scale;
      this.dimensions = dimensions;
      this.labels = labels;
    }

    Unit.prototype.mul = function(rhs) {
      if (typeof rhs === 'number') {
        return new BLADE.Unit(this.scale * rhs, this.dimensions, this.labels);
      } else if (rhs instanceof Unit) {
        return new BLADE.Unit(this.scale * rhs.scale, this.dimensions.mul(rhs.dimensions), this.labels);
      } else {
        throw new Error("Illegal Argument for mul: " + rhs);
      }
    };

    Unit.prototype.div = function(rhs) {
      if (typeof rhs === 'number') {
        return new BLADE.Unit(this.scale / rhs, this.dimensions, this.labels);
      } else if (rhs instanceof Unit) {
        return new BLADE.Unit(this.scale / rhs.scale, this.dimensions.div(rhs.dimensions), this.labels);
      } else {
        throw new Error("Illegal Argument for div: " + rhs);
      }
    };

    Unit.prototype.pow = function(rhs) {
      if (typeof rhs === 'number') {
        return new BLADE.Unit(Math.pow(this.scale, rhs), this.dimensions.pow(rhs), this.labels);
      } else {
        throw new Error("Illegal Argument for div: " + rhs);
      }
    };

    Unit.prototype.toString = function() {
      var scaleString, unitsString;

      scaleString = this.scale === 1 ? "" : "" + this.scale + " * ";
      unitsString = [stringify(this.dimensions.M, this.labels[0]), stringify(this.dimensions.L, this.labels[1]), stringify(this.dimensions.T, this.labels[2])].filter(function(x) {
        return typeof x === 'string';
      }).join(" ");
      return "" + scaleString + unitsString;
    };

    return Unit;

  })();

  this.BLADE.Unit = Unit;

}).call(this);

/*
 * Blade.JS companion JavaScript library to blade.js or blade.min.js
 *
 * This asm.js part is kept separate to avoid issues caused by JavaScript compression.
 */
(function() {
this.BLADE = this.BLADE || {};
this.BLADE.bladeASM = (function(stdlib, foreign, heap) {
//"use asm";
  // Section for imports and module variables.

  // The following lines are by way of example only.
  // var i32 = new stdlib.Int32Array(heap);
  // var f64 = new stdlib.Float64Array(heap);
  // var imul = stdlib.Math.imul;
  // var a = 0;
  // a = i32[0]|0;
  // var b = 0.0;
  // b = +f64[0];
  function addE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 + b0);
      }
      break;
      case 1: {
        x = +(a1 + b1);
      }
      break;
      case 2: {
        x = +(a2 + b2);
      }
      break;
      case 3: {
        x = +(a3 + b3);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function subE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 - b0);
      }
      break;
      case 1: {
        x = +(a1 - b1);
      }
      break;
      case 2: {
        x = +(a2 - b2);
      }
      break;
      case 3: {
        x = +(a3 - b3);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function mulE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0 + a1 * b1 + a2 * b2 - a3 * b3);
      }
      break;
      case 1: {
        x = +(a0 * b1 + a1 * b0 - a2 * b3 + a3 * b2);
      }
      break;
      case 2: {
        x = +(a0 * b2 + a1 * b3 + a2 * b0 - a3 * b1);
      }
      break;
      case 3: {
        x = +(a0 * b3 + a1 * b2 - a2 * b1 + a3 * b0);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function extE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0);
      }
      break;
      case 1: {
        x = +(a0 * b1 + a1 * b0);
      }
      break;
      case 2: {
        x = +(a0 * b2           + a2 * b0);
      }
      break;
      case 3: {
        x = +(a0 * b3 + a1 * b2 - a2 * b1 + a3 * b0);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0 + a1 * b1 + a2 * b2 - a3 * b3);
      }
      break;
      case 1: {
        x = +(a0 * b1           - a2 * b3);
      }
      break;
      case 2: {
        x = +(a0 * b2 + a1 * b3);
      }
      break;
      case 3: {
        x = +(a0 * b3);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0 + a1 * b1 + a2 * b2 - a3 * b3);
      }
      break;
      case 1: {
        x = +(        - a1 * b0           - a3 * b2);
      }
      break;
      case 2: {
        x = +(                  - a2 * b0 + a3 * b1);
      }
      break;
      case 3: {
        x = +(                              a3 * b0);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function addE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 + b0);
      }
      break;
      case 1: {
        x = +(a1 + b1);
      }
      break;
      case 2: {
        x = +(a2 + b2);
      }
      break;
      case 3: {
        x = +(a3 + b3);
      }
      break;
      case 4: {
        x = +(a4 + b4);
      }
      break;
      case 5: {
        x = +(a5 + b5);
      }
      break;
      case 6: {
        x = +(a6 + b6);
      }
      break;
      case 7: {
        x = +(a7 + b7);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function subE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 - b0);
      }
      break;
      case 1: {
        x = +(a1 - b1);
      }
      break;
      case 2: {
        x = +(a2 - b2);
      }
      break;
      case 3: {
        x = +(a3 - b3);
      }
      break;
      case 4: {
        x = +(a4 - b4);
      }
      break;
      case 5: {
        x = +(a5 - b5);
      }
      break;
      case 6: {
        x = +(a6 - b6);
      }
      break;
      case 7: {
        x = +(a7 - b7);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
      }
      break;
      case 1: {
        x = +(a0 * b1 + a1 * b0 - a2 * b4 + a3 * b6 + a4 * b2 - a5 * b7 - a6 * b3 - a7 * b5);
      }
      break;
      case 2: {
        x = +(a0 * b2 + a1 * b4 + a2 * b0 - a3 * b5 - a4 * b1 + a5 * b3 - a6 * b7 - a7 * b6);
      }
      break;
      case 3: {
        x = +(a0 * b3 - a1 * b6 + a2 * b5 + a3 * b0 - a4 * b7 - a5 * b2 + a6 * b1 - a7 * b4);
      }
      break;
      case 4: {
        x = +(a0 * b4 + a1 * b2 - a2 * b1 + a3 * b7 + a4 * b0 - a5 * b6 + a6 * b5 + a7 * b3);
      }
      break;
      case 5: {
        x = +(a0 * b5 + a1 * b7 + a2 * b3 - a3 * b2 + a4 * b6 + a5 * b0 - a6 * b4 + a7 * b1);
      }
      break;
      case 6: {
        x = +(a0 * b6 - a1 * b3 + a2 * b7 + a3 * b1 - a4 * b5 + a5 * b4 + a6 * b0 + a7 * b2);
      }
      break;
      case 7: {
        x = +(a0 * b7 + a1 * b5 + a2 * b6 + a3 * b4 + a4 * b3 + a5 * b1 + a6 * b2 + a7 * b0);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0);
      }
      break;
      case 1: {
        x = +(a0 * b1 + a1 * b0);
      }
      break;
      case 2: {
        x = +(a0 * b2           + a2 * b0);
      }
      break;
      case 3: {
        x = +(a0 * b3                     + a3 * b0);
      }
      break;
      case 4: {
        x = +(a0 * b4 + a1 * b2 - a2 * b1           + a4* b0);
      }
      break;
      case 5: {
        x = +(a0 * b5           + a2 * b3 - a3 * b2           + a5 * b0);
      }
      break;
      case 6: {
        x = +(a0 * b6 - a1 * b3           + a3 * b1                     + a6 * b0);
      }
      break;
      case 7: {
        x = +(a0 * b7 + a1 * b5 + a2 * b6 + a3 * b4 + a4 * b3 + a5 * b1 + a6 * b2 + a7 * b0);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
      }
      break;
      case 1: {
        x = +(a0 * b1           - a2 * b4 + a3 * b6           - a5 * b7);
      }
      break;
      case 2: {
        x = +(a0 * b2 + a1 * b4           - a3 * b5                     - a6 * b7);
      }
      break;
      case 3: {
        x = +(a0 * b3 - a1 * b6 + a2 * b5           - a4 * b7);
      }
      break;
      case 4: {
        x = +(a0 * b4                     + a3 * b7);
      }
      break;
      case 5: {
        x = +(a0 * b5 + a1 * b7);
      }
      break;
      case 6: {
        x = +(a0 * b6           + a2 * b7);
      }
      break;
      case 7: {
        x = +(a0 * b7);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  function rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
      }
      break;
      case 1: {
        x = +(        + a1 * b0                     + a4 * b2           - a6 * b3 - a7 * b5);
      }
      break;
      case 2: {
        x = +(                  + a2 * b0           - a4 * b1 + a5 * b3           - a7 * b6);
      }
      break;
      case 3: {
        x = +(                            + a3 * b0           - a5 * b2 + a6 * b1 - a7 * b4);
      }
      break;
      case 4: {
        x = +(                                      + a4 * b0                     + a7 * b3);
      }
      break;
      case 5: {
        x = +(                                                + a5 * b0           + a7 * b1);
      }
      break;
      case 6: {
        x = +(                                                          + a6 * b0 + a7 * b2);
      }
      break;
      case 7: {
        x = +(                                                                    + a7 * b0);
      }
      break;
      default: {
      }
    }
    return +x;
  }
  // Export section.
  return {
    addE2:addE2,
    subE2:subE2,
    mulE2:mulE2,
    extE2:extE2,
    lcoE2:lcoE2,
    rcoE2:rcoE2,
    addE3:addE3,
    subE3:subE3,
    mulE3:mulE3,
    extE3:extE3,
    lcoE3:lcoE3,
    rcoE3:rcoE3
  };
})((typeof window === 'object') ? window : undefined, {}, new ArrayBuffer(4 * 1024));
}).call(this);

(function() {
this.BLADE = this.BLADE || {};
this.BLADE.bladeSTR = (function() {

  "use strict";

  function stringFromCoordinates(coordinates, labels) {
    var append, i, sb, str, _i, _ref;
    sb = [];
    append = function(number, label) {
      var n;
      if (number !== 0) {
        if (number >= 0) {
          if (sb.length > 0) {
            sb.push("+");
          }
        } else {
          sb.push("-");
        }
        n = Math.abs(number);
        if (n === 1) {
          return sb.push(label);
        } else {
          sb.push(n.toString());
          if (label !== "1") {
            sb.push("*");
            return sb.push(label);
          }
        }
      }
    };
    for (i = _i = 0, _ref = coordinates.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      append(coordinates[i], labels[i]);
    }
    if (sb.length > 0) {
      str = sb.join("");
    } else {
      str = "0";
    }
    return str;
  }

  return {
    stringFromCoordinates: stringFromCoordinates
  };
})();
}).call(this);

(function() {
this.BLADE = this.BLADE || {};
this.BLADE.e2gaASM = (function(stdlib, foreign, heap) {
//"use asm";
  function add00(a00, a01, a10, a11, b00, b01, b10, b11) {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a00 + b00);
  }
  function add01(a00, a01, a10, a11, b00, b01, b10, b11) {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a01 + b01);
  }
  function add10(a00, a01, a10, a11, b00, b01, b10, b11) {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a10 + b10);
  }
  function add11(a00, a01, a10, a11, b00, b01, b10, b11) {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a11 + b11);
  }
  // Export section.
  return {
    add00:add00,
    add01:add01,
    add10:add10,
    add11:add11
  };
})((typeof window === 'object') ? window : undefined, {}, new ArrayBuffer(4 * 1024));
}).call(this);
