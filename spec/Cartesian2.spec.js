describe('Cartesian2', function() {

  it('Should initialize the coordinates', function() {
    var w = Math.random();
    var x = Math.random();
    var y = Math.random();
    var xy = Math.random();

    var a = new BLADE.Cartesian2(w, x, y, xy);

    expect(a.coordinate(0)).toBe(w);
    expect(a.coordinate(1)).toBe(x);
    expect(a.coordinate(2)).toBe(y);
    expect(a.coordinate(3)).toBe(xy);
    expect(a.w).toBe(w);
    expect(a.x).toBe(x);
    expect(a.y).toBe(y);
    expect(a.xy).toBe(xy);
  });

  it('Should implement toString()', function() {
    var a = new BLADE.Cartesian2(1, 2, 3, 4);
    expect(a.toString()).toBe("1+2*i+3*j+4*I");
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