describe("Euclidean3 suite", function() {

  it('Should initialize coordinates', function() {
    var w = Math.random();
    var x = Math.random();
    var y = Math.random();
    var z = Math.random();
    var xy = Math.random();
    var yz = Math.random();
    var zx = Math.random();
    var xyz = Math.random();

    var a = new BLADE.Euclidean3(w, x, y, z, xy, yz, zx, xyz);

    expect(a.coordinate(0)).toBe(w);
    expect(a.coordinate(1)).toBe(x);
    expect(a.coordinate(2)).toBe(y);
    expect(a.coordinate(3)).toBe(z);
    expect(a.coordinate(4)).toBe(xy);
    expect(a.coordinate(5)).toBe(yz);
    expect(a.coordinate(6)).toBe(zx);
    expect(a.coordinate(7)).toBe(xyz);

    expect(a.coordinates()[0]).toBe(w);
    expect(a.coordinates()[1]).toBe(x);
    expect(a.coordinates()[2]).toBe(y);
    expect(a.coordinates()[3]).toBe(z);
    expect(a.coordinates()[4]).toBe(xy);
    expect(a.coordinates()[5]).toBe(yz);
    expect(a.coordinates()[6]).toBe(zx);
    expect(a.coordinates()[7]).toBe(xyz);
  });

  it('Should implement toString()', function() {
    var a = new BLADE.Euclidean3(1, 2, 3, 4, 5, 6, 7, 8);
    expect(a.toStringIJK()).toBe("1+2*i+3*j+4*k+5*ij+6*jk+7*ki+8*I");
  });

  it('Should implement add function', function() {
    var a = new BLADE.Euclidean3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    var b = new BLADE.Euclidean3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    
    var c = a.add(b);

    expect(c.coordinate(0)).toBe(a.coordinate(0) + b.coordinate(0));
    expect(c.coordinate(1)).toBe(a.coordinate(1) + b.coordinate(1));
    expect(c.coordinate(2)).toBe(a.coordinate(2) + b.coordinate(2));
    expect(c.coordinate(3)).toBe(a.coordinate(3) + b.coordinate(3));
    expect(c.coordinate(4)).toBe(a.coordinate(4) + b.coordinate(4));
    expect(c.coordinate(5)).toBe(a.coordinate(5) + b.coordinate(5));
    expect(c.coordinate(6)).toBe(a.coordinate(6) + b.coordinate(6));
    expect(c.coordinate(7)).toBe(a.coordinate(7) + b.coordinate(7));
  });

  it('Should implement sub function', function() {
    var a = new BLADE.Euclidean3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    var b = new BLADE.Euclidean3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    
    var c = a.sub(b);

    expect(c.coordinate(0)).toBe(a.coordinate(0) - b.coordinate(0));
    expect(c.coordinate(1)).toBe(a.coordinate(1) - b.coordinate(1));
    expect(c.coordinate(2)).toBe(a.coordinate(2) - b.coordinate(2));
    expect(c.coordinate(3)).toBe(a.coordinate(3) - b.coordinate(3));
    expect(c.coordinate(4)).toBe(a.coordinate(4) - b.coordinate(4));
    expect(c.coordinate(5)).toBe(a.coordinate(5) - b.coordinate(5));
    expect(c.coordinate(6)).toBe(a.coordinate(6) - b.coordinate(6));
    expect(c.coordinate(7)).toBe(a.coordinate(7) - b.coordinate(7));
  });

  it('grade(index) function', function() {
    var m = new BLADE.Euclidean3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());

    var w = m.grade(0);

    expect(w.coordinate(0)).toBe(m.coordinate(0));
    expect(w.coordinate(1)).toBe(0);
    expect(w.coordinate(2)).toBe(0);
    expect(w.coordinate(3)).toBe(0);
    expect(w.coordinate(4)).toBe(0);
    expect(w.coordinate(5)).toBe(0);
    expect(w.coordinate(6)).toBe(0);
    expect(w.coordinate(7)).toBe(0);

    var v = m.grade(1);

    expect(v.coordinate(0)).toEqual(0);
    expect(v.coordinate(1)).toEqual(m.coordinate(1));
    expect(v.coordinate(2)).toEqual(m.coordinate(2));
    expect(v.coordinate(3)).toEqual(m.coordinate(3));
    expect(v.coordinate(4)).toBe(0);
    expect(v.coordinate(5)).toBe(0);
    expect(v.coordinate(6)).toBe(0);
    expect(v.coordinate(7)).toBe(0);

    var b = m.grade(2);

    expect(b.coordinate(0)).toEqual(0);
    expect(b.coordinate(1)).toBe(0);
    expect(b.coordinate(2)).toBe(0);
    expect(b.coordinate(3)).toBe(0);
    expect(b.coordinate(4)).toEqual(m.coordinate(4));
    expect(b.coordinate(5)).toEqual(m.coordinate(5));
    expect(b.coordinate(6)).toEqual(m.coordinate(6));
    expect(b.coordinate(7)).toBe(0);

    var s = m.grade(3);

    expect(s.coordinate(0)).toEqual(0);
    expect(s.coordinate(1)).toBe(0);
    expect(s.coordinate(2)).toBe(0);
    expect(s.coordinate(3)).toBe(0);
    expect(s.coordinate(4)).toEqual(0);
    expect(s.coordinate(5)).toEqual(0);
    expect(s.coordinate(6)).toEqual(0);
    expect(s.coordinate(7)).toBe(m.coordinate(7));

    var z = m.grade(4);

    expect(z.coordinate(0)).toEqual(0);
    expect(z.coordinate(1)).toBe(0);
    expect(z.coordinate(2)).toBe(0);
    expect(z.coordinate(3)).toBe(0);
    expect(z.coordinate(4)).toEqual(0);
    expect(z.coordinate(5)).toEqual(0);
    expect(z.coordinate(6)).toEqual(0);
    expect(z.coordinate(7)).toEqual(0);
  });
});