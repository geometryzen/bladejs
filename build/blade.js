(function(scope, objName, modName) {
  'use strict';
  var BLADE, CARTESIAN_2, CARTESIAN_3, Cartesian2, Cartesian3;
  CARTESIAN_2 = "Cartesian2";
  CARTESIAN_3 = "Cartesian3";
  BLADE = {
    VERSION: "0.0.1"
  };
  /*
    Cartesian2 is a multivector for the Geometric Algebra of 2D Euclidean space with Cartesian coordinates.
    The even subalgebra of this Geometric Algebra is isomorphic to the complex numbers.
  */

  Cartesian2 = (function() {
    function Cartesian2(w, x, y, xy) {
      this.w = w;
      this.x = x;
      this.y = y;
      this.xy = xy;
    }

    Cartesian2.prototype.add = function(rhs) {
      return new Cartesian2(this.w + rhs.w, this.x + rhs.x, this.y + rhs.y, this.xy + rhs.xy);
    };

    Cartesian2.prototype.sub = function(rhs) {
      return new Cartesian2(this.w - rhs.w, this.x - rhs.x, this.y - rhs.y, this.xy - rhs.xy);
    };

    Cartesian2.prototype.toString = function() {
      var append, sb, str;
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
      append(this.w, "1");
      append(this.x, "e_{1}");
      append(this.y, "e_{2}");
      append(this.xy, "e_{12}");
      if (sb.length > 0) {
        str = sb.join("");
      } else {
        str = "0";
      }
      return str;
    };

    return Cartesian2;

  })();
  BLADE[CARTESIAN_2] = Cartesian2;
  /*
    Cartesian3 is a multivector for the Geometric Algebra of 3D Euclidean space with Cartesian coordinates.
  */

  Cartesian3 = (function() {
    function Cartesian3(w, x, y, z, xy, yz, zx, xyz) {
      this.w = w;
      this.x = x;
      this.y = y;
      this.z = z;
      this.xy = xy;
      this.yz = yz;
      this.zx = zx;
      this.xyz = xyz;
    }

    Cartesian3.prototype.toString = function() {
      var append, sb, str;
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
      append(this.w, "1");
      append(this.x, "e_{1}");
      append(this.y, "e_{2}");
      append(this.z, "e_{3}");
      append(this.xy, "e_{12}");
      append(this.yz, "e_{23}");
      append(this.zx, "e_{31}");
      append(this.xyz, "e_{123}");
      if (sb.length > 0) {
        str = sb.join("");
      } else {
        str = "0";
      }
      return str;
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
