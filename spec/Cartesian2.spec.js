describe('Cartesian2', function() {

  it('Should initialize the coordinates', function() {
    var a = new BLADE.Cartesian2(1, 2, 3, 4);
    expect(a.w).toBe(1);
    expect(a.x).toBe(2);
    expect(a.y).toBe(3);
    expect(a.xy).toBe(4);
  });

  it('Should implement toString()', function() {
    var a = new BLADE.Cartesian2(1, 2, 3, 4);
    expect(a.toString()).toBe("1+2*e_{1}+3*e_{2}+4*e_{12}");
  });

  it('Should implement add function', function() {
    var a = new BLADE.Cartesian2(Math.random(), Math.random(), Math.random(), Math.random());
    var b = new BLADE.Cartesian2(Math.random(), Math.random(), Math.random(), Math.random());
    
    var c = a.add(b);

    expect(c.w).toBe(a.w + b.w);
    expect(c.x).toBe(a.x + b.x);
    expect(c.y).toBe(a.y + b.y);
    expect(c.xy).toBe(a.xy + b.xy);
  });

  it('Should implement sub function', function() {
    var a = new BLADE.Cartesian2(Math.random(), Math.random(), Math.random(), Math.random());
    var b = new BLADE.Cartesian2(Math.random(), Math.random(), Math.random(), Math.random());
    
    var c = a.sub(b);

    expect(c.w).toBe(a.w - b.w);
    expect(c.x).toBe(a.x - b.x);
    expect(c.y).toBe(a.y - b.y);
    expect(c.xy).toBe(a.xy - b.xy);
  });
});