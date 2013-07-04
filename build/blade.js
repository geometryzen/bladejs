(function(scope, objName, modName) {
  'use strict';
  var BLADE, EUCLIDEAN_2, EUCLIDEAN_3, Euclidean2, Euclidean3;
  EUCLIDEAN_2 = "Euclidean2";
  EUCLIDEAN_3 = "Euclidean3";
  BLADE = BLADE || {};
  /*
    Euclidean2 is a multivector for the Geometric Algebra of 2D Euclidean space with Cartesian coordinates.
    The even subalgebra of this Geometric Algebra is isomorphic to the complex numbers.
  */

  Euclidean2 = (function() {
    function Euclidean2(w, x, y, xy) {
      this._coordinates = [w, x, y, xy];
    }

    Euclidean2.fromCartesian = function(w, x, y, xy) {
      return new Euclidean2(w, x, y, xy);
    };

    Euclidean2.fromPolar = function(w, r, theta, s) {
      return new Euclidean2(w, r * Math.cos(theta), r * Math.sin(theta), s);
    };

    Euclidean2.prototype.coordinates = function() {
      return [this._coordinates[0], this._coordinates[1], this._coordinates[2], this._coordinates[3]];
    };

    Euclidean2.prototype.coordinate = function(index) {
      switch (index) {
        case 0:
          return this._coordinates[0];
        case 1:
          return this._coordinates[1];
        case 2:
          return this._coordinates[2];
        case 3:
          return this._coordinates[3];
        default:
          throw new Error("index must be in the range [0..3]");
      }
    };

    Euclidean2.add = function(a, b) {
      var a0, a1, a2, a3, b0, b1, b2, b3, x0, x1, x2, x3;
      a0 = a[0];
      a1 = a[1];
      a2 = a[2];
      a3 = a[3];
      b0 = b[0];
      b1 = b[1];
      b2 = b[2];
      b3 = b[3];
      x0 = bladeASM.addE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = bladeASM.addE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = bladeASM.addE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = bladeASM.addE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.add = function(rhs) {
      var xs;
      xs = Euclidean2.add(this._coordinates, rhs._coordinates);
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
      x0 = bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.sub = function(rhs) {
      var xs;
      xs = Euclidean2.sub(this._coordinates, rhs._coordinates);
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
      x0 = bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.mul = function(rhs) {
      var xs;
      xs = Euclidean2.mul(this._coordinates, rhs._coordinates);
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
      x0 = bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.wedge = function(rhs) {
      var xs;
      xs = Euclidean2.wedge(this._coordinates, rhs._coordinates);
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
      x0 = bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.lshift = function(rhs) {
      var xs;
      xs = Euclidean2.lshift(this._coordinates, rhs._coordinates);
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
      x0 = bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
      x1 = bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
      x2 = bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
      x3 = bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.rshift = function(rhs) {
      var xs;
      xs = Euclidean2.rshift(this._coordinates, rhs._coordinates);
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.prototype.grade = function(index) {
      switch (index) {
        case 0:
          return Euclidean2.fromCartesian(this._coordinates[0], 0, 0, 0);
        case 1:
          return Euclidean2.fromCartesian(0, this._coordinates[1], this._coordinates[2], 0);
        case 2:
          return Euclidean2.fromCartesian(0, 0, 0, this._coordinates[3]);
        default:
          return Euclidean2.fromCartesian(0, 0, 0, 0);
      }
    };

    Euclidean2.prototype.toString = function() {
      return bladeSTR.stringFromCoordinates(this._coordinates, ["1", "e1", "e2", "e12"]);
    };

    Euclidean2.prototype.toStringIJK = function() {
      return bladeSTR.stringFromCoordinates(this._coordinates, ["1", "i", "j", "I"]);
    };

    Euclidean2.prototype.toStringLATEX = function() {
      return bladeSTR.stringFromCoordinates(this._coordinates, ["1", "e_{1}", "e_{2}", "e_{12}"]);
    };

    return Euclidean2;

  })();
  BLADE[EUCLIDEAN_2] = Euclidean2;
  /*
    Euclidean3 is a multivector for the Geometric Algebra of 3D Euclidean space with Cartesian coordinates.
  */

  Euclidean3 = (function() {
    function Euclidean3(w, x, y, z, xy, yz, zx, xyz) {
      this._coordinates = [w, x, y, z, xy, yz, zx, xyz];
    }

    Euclidean3.fromCartesian = function(w, x, y, z, xy, yz, zx, xyz) {
      return new Euclidean3(w, x, y, z, xy, yz, zx, xyz);
    };

    Euclidean3.prototype.coordinates = function() {
      return [this._coordinates[0], this._coordinates[1], this._coordinates[2], this._coordinates[3], this._coordinates[4], this._coordinates[5], this._coordinates[6], this._coordinates[7]];
    };

    Euclidean3.prototype.coordinate = function(index) {
      switch (index) {
        case 0:
          return this._coordinates[0];
        case 1:
          return this._coordinates[1];
        case 2:
          return this._coordinates[2];
        case 3:
          return this._coordinates[3];
        case 4:
          return this._coordinates[4];
        case 5:
          return this._coordinates[5];
        case 6:
          return this._coordinates[6];
        case 7:
          return this._coordinates[7];
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
      return Euclidean3.compute(bladeASM.addE3, this._coordinates, rhs._coordinates, coord, pack);
    };

    Euclidean3.prototype.sub = function(rhs) {
      var coord, pack;
      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(bladeASM.subE3, this._coordinates, rhs._coordinates, coord, pack);
    };

    Euclidean3.prototype.mul = function(rhs) {
      var coord, pack;
      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(bladeASM.mulE3, this._coordinates, rhs._coordinates, coord, pack);
    };

    Euclidean3.prototype.wedge = function(rhs) {
      var coord, pack;
      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(bladeASM.extE3, this._coordinates, rhs._coordinates, coord, pack);
    };

    Euclidean3.prototype.lshift = function(rhs) {
      var coord, pack;
      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(bladeASM.lcoE3, this._coordinates, rhs._coordinates, coord, pack);
    };

    Euclidean3.prototype.rshift = function(rhs) {
      var coord, pack;
      coord = function(x, n) {
        return x[n];
      };
      pack = function(w, x, y, z, xy, yz, zx, xyz) {
        return Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz);
      };
      return Euclidean3.compute(bladeASM.rcoE3, this._coordinates, rhs._coordinates, coord, pack);
    };

    Euclidean3.prototype.grade = function(index) {
      switch (index) {
        case 0:
          return Euclidean3.fromCartesian(this._coordinates[0], 0, 0, 0, 0, 0, 0, 0);
        case 1:
          return Euclidean3.fromCartesian(0, this._coordinates[1], this._coordinates[2], this._coordinates[3], 0, 0, 0, 0);
        case 2:
          return Euclidean3.fromCartesian(0, 0, 0, 0, this._coordinates[4], this._coordinates[5], this._coordinates[6], 0);
        case 3:
          return Euclidean3.fromCartesian(0, 0, 0, 0, 0, 0, 0, this._coordinates[7]);
        default:
          return Euclidean3.fromCartesian(0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    };

    Euclidean3.prototype.toString = function() {
      return bladeSTR.stringFromCoordinates(this._coordinates, ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"]);
    };

    Euclidean3.prototype.toStringIJK = function() {
      return bladeSTR.stringFromCoordinates(this._coordinates, ["1", "i", "j", "k", "ij", "jk", "ki", "I"]);
    };

    Euclidean3.prototype.toStringLATEX = function() {
      return bladeSTR.stringFromCoordinates(this._coordinates, ["1", "e_{1}", "e_{2}", "e_{3}", "e_{12}", "e_{23}", "e_{31}", "e_{123}"]);
    };

    return Euclidean3;

  })();
  BLADE[EUCLIDEAN_3] = Euclidean3;
  if (typeof scope === "object" && scope && typeof scope.exports === "object") {
    module.exports = BLADE;
  } else if (typeof define === "function" && define.amd) {
    define(modName, [], function() {
      return BLADE;
    });
  }
  if (typeof scope === "object" && scope.document && typeof scope.document === "object") {
    scope[objName] = BLADE;
  }
})((typeof window === 'object' ? window : (typeof module === 'object' ? module : void 0)), 'BLADE', 'blade');
