(function(scope, objName, modName) {
  'use strict';
  var BLADE, CARTESIAN_2, CARTESIAN_3, Cartesian2, Cartesian3, stringFromMultivector;
  CARTESIAN_2 = "Cartesian2";
  CARTESIAN_3 = "Cartesian3";
  BLADE = {
    VERSION: "0.0.2"
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
      this.vector = [w, x, y, xy];
      this.length = 4;
    }

    Cartesian2.prototype.coordinate = function(index) {
      switch (index) {
        case 0:
          return this.vector[0];
        case 1:
          return this.vector[1];
        case 2:
          return this.vector[2];
        case 3:
          return this.vector[3];
        default:
          throw new Error("index must be in the range [0..3]");
      }
    };

    Cartesian2.prototype.add = function(rhs) {
      return new Cartesian2(this.coordinate(0) + rhs.coordinate(0), this.coordinate(1) + rhs.coordinate(1), this.coordinate(2) + rhs.coordinate(2), this.coordinate(3) + rhs.coordinate(3));
    };

    Cartesian2.prototype.sub = function(rhs) {
      return new Cartesian2(this.coordinate(0) - rhs.coordinate(0), this.coordinate(1) - rhs.coordinate(1), this.coordinate(2) - rhs.coordinate(2), this.coordinate(3) - rhs.coordinate(3));
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
      this.vector = [w, x, y, z, xy, yz, zx, xyz];
      this.length = 8;
    }

    Cartesian3.prototype.coordinate = function(index) {
      switch (index) {
        case 0:
          return this.vector[0];
        case 1:
          return this.vector[1];
        case 2:
          return this.vector[2];
        case 3:
          return this.vector[3];
        case 4:
          return this.vector[4];
        case 5:
          return this.vector[5];
        case 6:
          return this.vector[6];
        case 7:
          return this.vector[7];
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
