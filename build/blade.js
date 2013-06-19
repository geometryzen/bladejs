(function(scope, objName, modName) {
  'use strict';
  var BLADE, EUCLIDEAN_2, EUCLIDEAN_3, Euclidean2, Euclidean3, stringFromCoordinates;
  EUCLIDEAN_2 = "Euclidean2";
  EUCLIDEAN_3 = "Euclidean3";
  BLADE = BLADE || {};
  stringFromCoordinates = function(coordinates, labels) {
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
  };
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
      var x0, x1, x2, x3;
      x0 = bladeASM.addEuclidean2(a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3], 0);
      x1 = bladeASM.addEuclidean2(a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3], 1);
      x2 = bladeASM.addEuclidean2(a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3], 2);
      x3 = bladeASM.addEuclidean2(a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3], 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.add = function(rhs) {
      var xs;
      xs = Euclidean2.add(this._coordinates, rhs._coordinates);
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.sub = function(a, b) {
      var x0, x1, x2, x3;
      x0 = bladeASM.subEuclidean2(a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3], 0);
      x1 = bladeASM.subEuclidean2(a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3], 1);
      x2 = bladeASM.subEuclidean2(a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3], 2);
      x3 = bladeASM.subEuclidean2(a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3], 3);
      return [x0, x1, x2, x3];
    };

    Euclidean2.prototype.sub = function(rhs) {
      var xs;
      xs = Euclidean2.sub(this._coordinates, rhs._coordinates);
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.mul = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0];
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3];
      xs[1] = a[0] * b[1] + a[1] * b[0] - a[2] * b[3] + a[3] * b[2];
      xs[2] = a[0] * b[2] + a[1] * b[3] + a[2] * b[0] - a[3] * b[1];
      xs[3] = a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0];
      return xs;
    };

    Euclidean2.prototype.mul = function(rhs) {
      var xs;
      xs = Euclidean2.mul(this._coordinates, rhs._coordinates);
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.wedge = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0];
      xs[0] = a[0] * b[0];
      xs[1] = a[0] * b[1] + a[1] * b[0];
      xs[2] = a[0] * b[2] + a[2] * b[0];
      xs[3] = a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0];
      return xs;
    };

    Euclidean2.prototype.wedge = function(rhs) {
      var xs;
      xs = Euclidean2.wedge(this._coordinates, rhs._coordinates);
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.lshift = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0];
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3];
      xs[1] = a[0] * b[1] - a[2] * b[3];
      xs[2] = a[0] * b[2] + a[1] * b[3];
      xs[3] = a[0] * b[3];
      return xs;
    };

    Euclidean2.prototype.lshift = function(rhs) {
      var xs;
      xs = Euclidean2.lshift(this._coordinates, rhs._coordinates);
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3]);
    };

    Euclidean2.rshift = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0];
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3];
      xs[1] = -a[1] * b[0] - a[3] * b[2];
      xs[2] = -a[2] * b[0] + a[3] * b[1];
      xs[3] = a[3] * b[0];
      return xs;
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
      return stringFromCoordinates(this._coordinates, ["1", "e1", "e2", "e12"]);
    };

    Euclidean2.prototype.toStringIJK = function() {
      return stringFromCoordinates(this._coordinates, ["1", "i", "j", "I"]);
    };

    Euclidean2.prototype.toStringLATEX = function() {
      return stringFromCoordinates(this._coordinates, ["1", "e_{1}", "e_{2}", "e_{12}"]);
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

    Euclidean3.add = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0, 0, 0, 0, 0];
      xs[0] = a[0] + b[0];
      xs[1] = a[1] + b[1];
      xs[2] = a[2] + b[2];
      xs[3] = a[3] + b[3];
      xs[4] = a[4] + b[4];
      xs[5] = a[5] + b[5];
      xs[6] = a[6] + b[6];
      xs[7] = a[7] + b[7];
      return xs;
    };

    Euclidean3.prototype.add = function(rhs) {
      var xs;
      xs = Euclidean3.add(this._coordinates, rhs._coordinates);
      return Euclidean3.fromCartesian(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7]);
    };

    Euclidean3.sub = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0, 0, 0, 0, 0];
      xs[0] = a[0] - b[0];
      xs[1] = a[1] - b[1];
      xs[2] = a[2] - b[2];
      xs[3] = a[3] - b[3];
      xs[4] = a[4] - b[4];
      xs[5] = a[5] - b[5];
      xs[6] = a[6] - b[6];
      xs[7] = a[7] - b[7];
      return xs;
    };

    Euclidean3.prototype.sub = function(rhs) {
      var xs;
      xs = Euclidean3.sub(this._coordinates, rhs._coordinates);
      return Euclidean3.fromCartesian(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7]);
    };

    Euclidean3.mul = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0, 0, 0, 0, 0];
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3] - a[4] * b[4] - a[5] * b[5] - a[6] * b[6] - a[7] * b[7];
      xs[1] = a[0] * b[1] + a[1] * b[0] - a[2] * b[4] + a[3] * b[6] + a[4] * b[2] - a[5] * b[7] - a[6] * b[3] - a[7] * b[5];
      xs[2] = a[0] * b[2] + a[1] * b[4] + a[2] * b[0] - a[3] * b[5] - a[4] * b[1] + a[5] * b[3] - a[6] * b[7] - a[7] * b[6];
      xs[3] = a[0] * b[3] - a[1] * b[6] + a[2] * b[5] + a[3] * b[0] - a[4] * b[7] - a[5] * b[2] + a[6] * b[1] - a[7] * b[4];
      xs[4] = a[0] * b[4] + a[1] * b[2] - a[2] * b[1] + a[3] * b[7] + a[4] * b[0] - a[5] * b[6] + a[6] * b[5] + a[7] * b[3];
      xs[5] = a[0] * b[5] + a[1] * b[7] + a[2] * b[3] - a[3] * b[2] + a[4] * b[6] + a[5] * b[0] - a[6] * b[4] + a[7] * b[1];
      xs[6] = a[0] * b[6] - a[1] * b[3] + a[2] * b[7] + a[3] * b[1] - a[4] * b[5] + a[5] * b[4] + a[6] * b[0] + a[7] * b[2];
      xs[7] = a[0] * b[7] + a[1] * b[5] + a[2] * b[6] + a[3] * b[4] + a[4] * b[3] + a[5] * b[1] + a[6] * b[2] + a[7] * b[0];
      return xs;
    };

    Euclidean3.prototype.mul = function(rhs) {
      var xs;
      xs = Euclidean3.mul(this._coordinates, rhs._coordinates);
      return Euclidean3.fromCartesian(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7]);
    };

    Euclidean3.wedge = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0, 0, 0, 0, 0];
      xs[0] = a[0] * b[0];
      xs[1] = a[0] * b[1] + a[1] * b[0];
      xs[2] = a[0] * b[2] + a[2] * b[0];
      xs[3] = a[0] * b[3] + a[3] * b[0];
      xs[4] = a[0] * b[4] + a[1] * b[2] - a[2] * b[1] + a[4] * b[0];
      xs[5] = a[0] * b[5] + a[2] * b[3] - a[3] * b[2] + a[5] * b[0];
      xs[6] = a[0] * b[6] - a[1] * b[3] + a[3] * b[1] + a[6] * b[0];
      xs[7] = a[0] * b[7] + a[1] * b[5] + a[2] * b[6] + a[3] * b[4] + a[4] * b[3] + a[5] * b[1] + a[6] * b[2] + a[7] * b[0];
      return xs;
    };

    Euclidean3.prototype.wedge = function(rhs) {
      var xs;
      xs = Euclidean3.wedge(this._coordinates, rhs._coordinates);
      return Euclidean3.fromCartesian(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7]);
    };

    Euclidean3.lshift = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0, 0, 0, 0, 0];
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3] - a[4] * b[4] - a[5] * b[5] - a[6] * b[6] - a[7] * b[7];
      xs[1] = a[0] * b[1] - a[2] * b[4] + a[3] * b[6] - a[5] * b[7];
      xs[2] = a[0] * b[2] + a[1] * b[4] - a[3] * b[5] - a[6] * b[7];
      xs[3] = a[0] * b[3] - a[1] * b[6] + a[2] * b[5] - a[4] * b[7];
      xs[4] = a[0] * b[4] + a[3] * b[7];
      xs[5] = a[0] * b[5] + a[1] * b[7];
      xs[6] = a[0] * b[6] + a[2] * b[7];
      xs[7] = a[0] * b[7];
      return xs;
    };

    Euclidean3.prototype.lshift = function(rhs) {
      var xs;
      xs = Euclidean3.lshift(this._coordinates, rhs._coordinates);
      return Euclidean3.fromCartesian(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7]);
    };

    Euclidean3.rshift = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0, 0, 0, 0, 0];
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3] - a[4] * b[4] - a[5] * b[5] - a[6] * b[6] - a[7] * b[7];
      xs[1] = +a[1] * b[0] + a[4] * b[2] - a[6] * b[3] - a[7] * b[5];
      xs[2] = +a[2] * b[0] - a[4] * b[1] + a[5] * b[3] - a[7] * b[6];
      xs[3] = +a[3] * b[0] - a[5] * b[2] + a[6] * b[1] - a[7] * b[4];
      xs[4] = +a[4] * b[0] + a[7] * b[3];
      xs[5] = +a[5] * b[0] + a[7] * b[1];
      xs[6] = +a[6] * b[0] + a[7] * b[2];
      xs[7] = +a[7] * b[0];
      return xs;
    };

    Euclidean3.prototype.rshift = function(rhs) {
      var xs;
      xs = Euclidean3.rshift(this._coordinates, rhs._coordinates);
      return Euclidean3.fromCartesian(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7]);
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
      return stringFromCoordinates(this._coordinates, ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"]);
    };

    Euclidean3.prototype.toStringIJK = function() {
      return stringFromCoordinates(this._coordinates, ["1", "i", "j", "k", "ij", "jk", "ki", "I"]);
    };

    Euclidean3.prototype.toStringLATEX = function() {
      return stringFromCoordinates(this._coordinates, ["1", "e_{1}", "e_{2}", "e_{3}", "e_{12}", "e_{23}", "e_{31}", "e_{123}"]);
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
  if (typeof scope === "object" && typeof scope.document === "object") {
    scope[objName] = BLADE;
  }
})(window, 'BLADE', 'blade');
