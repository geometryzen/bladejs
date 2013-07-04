/*
 * Blade.JS companion JavaScript library to blade.js or blade.min.js
 *
 * This asm.js part is kept separate to avoid issues caused by JavaScript compression.
 */
bladeASM = (function(/*stdlib*//*, foreign, heap*/) {
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
    addE2:addE2, subE2:subE2, mulE2:mulE2, extE2:extE2, lcoE2:lcoE2, rcoE2:rcoE2, addE3:addE3, subE3:subE3, mulE3:mulE3, extE3:extE3, lcoE3:lcoE3, rcoE3:rcoE3
  };
})((typeof window === 'object') ? window : undefined, {}, new ArrayBuffer(4 * 1024));
