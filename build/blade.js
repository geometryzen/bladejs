(function(scope, objName, modName) {
  'use strict';
  var BLADE, CARTESIAN_2, CARTESIAN_3, Cartesian2, Cartesian3;
  CARTESIAN_2 = "Cartesian2";
  CARTESIAN_3 = "Cartesian3";
  BLADE = {
    VERSION: "1.0.0"
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

    Cartesian2.prototype.toString = function() {
      return "Under construction";
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
