/*
 * Blade.JS companion JavaScript library to blade.js or blade.min.js
 *
 * This asm.js part is kept separate to avoid issues caused by JavaScript compression.
 */
bladeASM = (function(/*stdlib, foreign, heap*/) {
  "use asm";
  // Section for imports and module variables.

  // The following lines are by way of example only.
  // var i32 = new stdlib.Int32Array(heap);
  // var f64 = new stdlib.Float64Array(heap);
  // var imul = stdlib.Math.imul;
  // var a = 0;
  // a = i32[0]|0;
  // var b = 0.0;
  // b = +f64[0];
  function addEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
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
  function subEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
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
  function mulEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
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
  // Export section.
  return {
    addEuclidean2: addEuclidean2, subEuclidean2: subEuclidean2, mulEuclidean2: mulEuclidean2
  };
})(window, {}, new ArrayBuffer(4 * 1024));