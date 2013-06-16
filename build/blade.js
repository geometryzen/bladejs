(function(scope, objName, modName) {
  'use strict';
  var BLADE, CARTESIAN_2, CARTESIAN_3, Cartesian2, Cartesian3, stringFromMultivector;
  CARTESIAN_2 = "Cartesian2";
  CARTESIAN_3 = "Cartesian3";
  BLADE = {
    version: "0.0.9",
    description: "JavaScript Geometric Algebra library"
  };
  stringFromMultivector = function(m, labels) {
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
    for (i = _i = 0, _ref = m.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      append(m.coordinate(i), labels[i]);
    }
    if (sb.length > 0) {
      str = sb.join("");
    } else {
      str = "0";
    }
    return str;
  };
  /*
    Cartesian2 is a multivector for the Geometric Algebra of 2D Euclidean space with Cartesian coordinates.
    The even subalgebra of this Geometric Algebra is isomorphic to the complex numbers.
  */

  Cartesian2 = (function() {
    function Cartesian2(w, x, y, xy) {
      this.xs = [w, x, y, xy];
      this.length = 4;
    }

    Cartesian2.prototype.coordinates = function() {
      return [this.xs[0], this.xs[1], this.xs[2], this.xs[3]];
    };

    Cartesian2.prototype.coordinate = function(index) {
      switch (index) {
        case 0:
          return this.xs[0];
        case 1:
          return this.xs[1];
        case 2:
          return this.xs[2];
        case 3:
          return this.xs[3];
        default:
          throw new Error("index must be in the range [0..3]");
      }
    };

    Cartesian2.add = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0];
      xs[0] = a[0] + b[0];
      xs[1] = a[1] + b[1];
      xs[2] = a[2] + b[2];
      xs[3] = a[3] + b[3];
      return xs;
    };

    Cartesian2.prototype.add = function(rhs) {
      var xs;
      xs = Cartesian2.add(this.xs, rhs.xs);
      return new Cartesian2(xs[0], xs[1], xs[2], xs[3]);
    };

    Cartesian2.sub = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0];
      xs[0] = a[0] - b[0];
      xs[1] = a[1] - b[1];
      xs[2] = a[2] - b[2];
      xs[3] = a[3] - b[3];
      return xs;
    };

    Cartesian2.prototype.sub = function(rhs) {
      var xs;
      xs = Cartesian2.sub(this.xs, rhs.xs);
      return new Cartesian2(xs[0], xs[1], xs[2], xs[3]);
    };

    Cartesian2.mul = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0];
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3];
      xs[1] = a[0] * b[1] + a[1] * b[0] - a[2] * b[3] + a[3] * b[2];
      xs[2] = a[0] * b[2] + a[1] * b[3] + a[2] * b[0] - a[3] * b[1];
      xs[3] = a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0];
      return xs;
    };

    Cartesian2.prototype.mul = function(rhs) {
      var xs;
      xs = Cartesian2.mul(this.xs, rhs.xs);
      return new Cartesian2(xs[0], xs[1], xs[2], xs[3]);
    };

    Cartesian2.wedge = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0];
      xs[0] = a[0] * b[0];
      xs[1] = a[0] * b[1] + a[1] * b[0];
      xs[2] = a[0] * b[2] + a[2] * b[0];
      xs[3] = a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0];
      return xs;
    };

    Cartesian2.prototype.wedge = function(rhs) {
      var xs;
      xs = Cartesian2.wedge(this.xs, rhs.xs);
      return new Cartesian2(xs[0], xs[1], xs[2], xs[3]);
    };

    Cartesian2.lshift = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0];
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3];
      xs[1] = a[0] * b[1] - a[2] * b[3];
      xs[2] = a[0] * b[2] + a[1] * b[3];
      xs[3] = a[0] * b[3];
      return xs;
    };

    Cartesian2.prototype.lshift = function(rhs) {
      var xs;
      xs = Cartesian2.lshift(this.xs, rhs.xs);
      return new Cartesian2(xs[0], xs[1], xs[2], xs[3]);
    };

    Cartesian2.rshift = function(a, b) {
      var xs;
      xs = [0, 0, 0, 0];
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3];
      xs[1] = -a[1] * b[0] - a[3] * b[2];
      xs[2] = -a[2] * b[0] + a[3] * b[1];
      xs[3] = a[3] * b[0];
      return xs;
    };

    Cartesian2.prototype.rshift = function(rhs) {
      var xs;
      xs = Cartesian2.rshift(this.xs, rhs.xs);
      return new Cartesian2(xs[0], xs[1], xs[2], xs[3]);
    };

    Cartesian2.prototype.toString = function() {
      return stringFromMultivector(this, ["1", "e1", "e2", "e12"]);
    };

    Cartesian2.prototype.toStringIJK = function() {
      return stringFromMultivector(this, ["1", "i", "j", "I"]);
    };

    Cartesian2.prototype.toStringLATEX = function() {
      return stringFromMultivector(this, ["1", "e_{1}", "e_{2}", "e_{12}"]);
    };

    return Cartesian2;

  })();
  BLADE[CARTESIAN_2] = Cartesian2;
  /*
    Cartesian3 is a multivector for the Geometric Algebra of 3D Euclidean space with Cartesian coordinates.
  */

  Cartesian3 = (function() {
    function Cartesian3(w, x, y, z, xy, yz, zx, xyz) {
      this.xs = [w, x, y, z, xy, yz, zx, xyz];
      this.length = 8;
    }

    Cartesian3.prototype.coordinate = function(index) {
      switch (index) {
        case 0:
          return this.xs[0];
        case 1:
          return this.xs[1];
        case 2:
          return this.xs[2];
        case 3:
          return this.xs[3];
        case 4:
          return this.xs[4];
        case 5:
          return this.xs[5];
        case 6:
          return this.xs[6];
        case 7:
          return this.xs[7];
        default:
          throw new Error("index must be in the range [0..7]");
      }
    };

    Cartesian3.prototype.add = function(rhs) {
      return new Cartesian3(this.coordinate(0) + rhs.coordinate(0), this.coordinate(1) + rhs.coordinate(1), this.coordinate(2) + rhs.coordinate(2), this.coordinate(3) + rhs.coordinate(3), this.coordinate(4) + rhs.coordinate(4), this.coordinate(5) + rhs.coordinate(5), this.coordinate(6) + rhs.coordinate(6), this.coordinate(7) + rhs.coordinate(7));
    };

    Cartesian3.prototype.sub = function(rhs) {
      return new Cartesian3(this.coordinate(0) - rhs.coordinate(0), this.coordinate(1) - rhs.coordinate(1), this.coordinate(2) - rhs.coordinate(2), this.coordinate(3) - rhs.coordinate(3), this.coordinate(4) - rhs.coordinate(4), this.coordinate(5) - rhs.coordinate(5), this.coordinate(6) - rhs.coordinate(6), this.coordinate(7) - rhs.coordinate(7));
    };

    Cartesian3.prototype.toString = function() {
      return stringFromMultivector(this, ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"]);
    };

    Cartesian3.prototype.toStringIJK = function() {
      return stringFromMultivector(this, ["1", "i", "j", "k", "ij", "jk", "ki", "I"]);
    };

    Cartesian3.prototype.toStringLATEX = function() {
      return stringFromMultivector(this, ["1", "e_{1}", "e_{2}", "e_{3}", "e_{12}", "e_{23}", "e_{31}", "e_{123}"]);
    };

    return Cartesian3;

  })();
  BLADE[CARTESIAN_3] = Cartesian3;
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
