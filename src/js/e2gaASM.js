e2gaASM = (function(/*stdlib*//*, foreign, heap*/) {
  "use asm";
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
