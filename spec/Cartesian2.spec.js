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

    expect(a.coordinates()[0]).toBe(w);
    expect(a.coordinates()[1]).toBe(x);
    expect(a.coordinates()[2]).toBe(y);
    expect(a.coordinates()[3]).toBe(xy);
  });

  it('Should implement toString()', function() {
    var a = new BLADE.Cartesian2(1, 2, 3, 4);
    expect(a.toStringIJK()).toBe("1+2*i+3*j+4*I");
  });

  it('Should implement add function', function() {
    var a = new BLADE.Cartesian2(Math.random(), Math.random(), Math.random(), Math.random());
    var b = new BLADE.Cartesian2(Math.random(), Math.random(), Math.random(), Math.random());
    
    var c = a.add(b);

    expect(c.coordinate(0)).toBe(a.coordinate(0) + b.coordinate(0));
    expect(c.coordinate(1)).toBe(a.coordinate(1) + b.coordinate(1));
    expect(c.coordinate(2)).toBe(a.coordinate(2) + b.coordinate(2));
    expect(c.coordinate(3)).toBe(a.coordinate(3) + b.coordinate(3));
  });

  it('Should implement sub function', function() {
    var a = new BLADE.Cartesian2(Math.random(), Math.random(), Math.random(), Math.random());
    var b = new BLADE.Cartesian2(Math.random(), Math.random(), Math.random(), Math.random());
    
    var c = a.sub(b);

    expect(c.coordinate(0)).toBe(a.coordinate(0) - b.coordinate(0));
    expect(c.coordinate(1)).toBe(a.coordinate(1) - b.coordinate(1));
    expect(c.coordinate(2)).toBe(a.coordinate(2) - b.coordinate(2));
    expect(c.coordinate(3)).toBe(a.coordinate(3) - b.coordinate(3));
  });

  it('Should implement mul function', function() {
    var u = new BLADE.Cartesian2(1, 0, 0, 0)
    var i = new BLADE.Cartesian2(0, 1, 0, 0)
    var j = new BLADE.Cartesian2(0, 0, 1, 0)
    var I = new BLADE.Cartesian2(0, 0, 0, 1)

    expect(u.mul(u).coordinate(0)).toBe(1);
    expect(u.mul(u).coordinate(1)).toBe(0);
    expect(u.mul(u).coordinate(2)).toBe(0);
    expect(u.mul(u).coordinate(3)).toBe(0);

    expect(u.mul(i).coordinate(0)).toBe(0);
    expect(u.mul(i).coordinate(1)).toBe(1);
    expect(u.mul(i).coordinate(2)).toBe(0);
    expect(u.mul(i).coordinate(3)).toBe(0);

    expect(u.mul(j).coordinate(0)).toBe(0);
    expect(u.mul(j).coordinate(1)).toBe(0);
    expect(u.mul(j).coordinate(2)).toBe(1);
    expect(u.mul(j).coordinate(3)).toBe(0);

    expect(u.mul(I).coordinate(0)).toBe(0);
    expect(u.mul(I).coordinate(1)).toBe(0);
    expect(u.mul(I).coordinate(2)).toBe(0);
    expect(u.mul(I).coordinate(3)).toBe(1);

    expect(i.mul(u).coordinate(0)).toBe(0);
    expect(i.mul(u).coordinate(1)).toBe(1);
    expect(i.mul(u).coordinate(2)).toBe(0);
    expect(i.mul(u).coordinate(3)).toBe(0);

    expect(i.mul(i).coordinate(0)).toBe(1);
    expect(i.mul(i).coordinate(1)).toBe(0);
    expect(i.mul(i).coordinate(2)).toBe(0);
    expect(i.mul(i).coordinate(3)).toBe(0);

    expect(i.mul(j).coordinate(0)).toBe(0);
    expect(i.mul(j).coordinate(1)).toBe(0);
    expect(i.mul(j).coordinate(2)).toBe(0);
    expect(i.mul(j).coordinate(3)).toBe(1);

    expect(i.mul(I).coordinate(0)).toBe(0);
    expect(i.mul(I).coordinate(1)).toBe(0);
    expect(i.mul(I).coordinate(2)).toBe(1);
    expect(i.mul(I).coordinate(3)).toBe(0);

    expect(j.mul(u).coordinate(0)).toBe(0);
    expect(j.mul(u).coordinate(1)).toBe(0);
    expect(j.mul(u).coordinate(2)).toBe(1);
    expect(j.mul(u).coordinate(3)).toBe(0);

    expect(j.mul(i).coordinate(0)).toBe(0);
    expect(j.mul(i).coordinate(1)).toBe(0);
    expect(j.mul(i).coordinate(2)).toBe(0);
    expect(j.mul(i).coordinate(3)).toBe(-1);

    expect(j.mul(j).coordinate(0)).toBe(1);
    expect(j.mul(j).coordinate(1)).toBe(0);
    expect(j.mul(j).coordinate(2)).toBe(0);
    expect(j.mul(j).coordinate(3)).toBe(0);

    expect(j.mul(I).coordinate(0)).toBe(0);
    expect(j.mul(I).coordinate(1)).toBe(-1);
    expect(j.mul(I).coordinate(2)).toBe(0);
    expect(j.mul(I).coordinate(3)).toBe(0);

    expect(I.mul(u).coordinate(0)).toBe(0);
    expect(I.mul(u).coordinate(1)).toBe(0);
    expect(I.mul(u).coordinate(2)).toBe(0);
    expect(I.mul(u).coordinate(3)).toBe(1);

    expect(I.mul(i).coordinate(0)).toBe(0);
    expect(I.mul(i).coordinate(1)).toBe(0);
    expect(I.mul(i).coordinate(2)).toBe(-1);
    expect(I.mul(i).coordinate(3)).toBe(0);

    expect(I.mul(j).coordinate(0)).toBe(0);
    expect(I.mul(j).coordinate(1)).toBe(1);
    expect(I.mul(j).coordinate(2)).toBe(0);
    expect(I.mul(j).coordinate(3)).toBe(0);

    expect(I.mul(I).coordinate(0)).toBe(-1);
    expect(I.mul(I).coordinate(1)).toBe(0);
    expect(I.mul(I).coordinate(2)).toBe(0);
    expect(I.mul(I).coordinate(3)).toBe(0);
  });

  it('Should implement wedge function', function() {
    var u = new BLADE.Cartesian2(1, 0, 0, 0)
    var i = new BLADE.Cartesian2(0, 1, 0, 0)
    var j = new BLADE.Cartesian2(0, 0, 1, 0)
    var I = new BLADE.Cartesian2(0, 0, 0, 1)

    expect(u.wedge(u).coordinate(0)).toBe(1);
    expect(u.wedge(u).coordinate(1)).toBe(0);
    expect(u.wedge(u).coordinate(2)).toBe(0);
    expect(u.wedge(u).coordinate(3)).toBe(0);

    expect(u.wedge(i).coordinate(0)).toBe(0);
    expect(u.wedge(i).coordinate(1)).toBe(1);
    expect(u.wedge(i).coordinate(2)).toBe(0);
    expect(u.wedge(i).coordinate(3)).toBe(0);

    expect(u.wedge(j).coordinate(0)).toBe(0);
    expect(u.wedge(j).coordinate(1)).toBe(0);
    expect(u.wedge(j).coordinate(2)).toBe(1);
    expect(u.wedge(j).coordinate(3)).toBe(0);

    expect(u.wedge(I).coordinate(0)).toBe(0);
    expect(u.wedge(I).coordinate(1)).toBe(0);
    expect(u.wedge(I).coordinate(2)).toBe(0);
    expect(u.wedge(I).coordinate(3)).toBe(1);

    expect(i.wedge(u).coordinate(0)).toBe(0);
    expect(i.wedge(u).coordinate(1)).toBe(1);
    expect(i.wedge(u).coordinate(2)).toBe(0);
    expect(i.wedge(u).coordinate(3)).toBe(0);

    expect(i.wedge(i).coordinate(0)).toBe(0);
    expect(i.wedge(i).coordinate(1)).toBe(0);
    expect(i.wedge(i).coordinate(2)).toBe(0);
    expect(i.wedge(i).coordinate(3)).toBe(0);

    expect(i.wedge(j).coordinate(0)).toBe(0);
    expect(i.wedge(j).coordinate(1)).toBe(0);
    expect(i.wedge(j).coordinate(2)).toBe(0);
    expect(i.wedge(j).coordinate(3)).toBe(1);

    expect(i.wedge(I).coordinate(0)).toBe(0);
    expect(i.wedge(I).coordinate(1)).toBe(0);
    expect(i.wedge(I).coordinate(2)).toBe(0);
    expect(i.wedge(I).coordinate(3)).toBe(0);

    expect(j.wedge(u).coordinate(0)).toBe(0);
    expect(j.wedge(u).coordinate(1)).toBe(0);
    expect(j.wedge(u).coordinate(2)).toBe(1);
    expect(j.wedge(u).coordinate(3)).toBe(0);

    expect(j.wedge(i).coordinate(0)).toBe(0);
    expect(j.wedge(i).coordinate(1)).toBe(0);
    expect(j.wedge(i).coordinate(2)).toBe(0);
    expect(j.wedge(i).coordinate(3)).toBe(-1);

    expect(j.wedge(j).coordinate(0)).toBe(0);
    expect(j.wedge(j).coordinate(1)).toBe(0);
    expect(j.wedge(j).coordinate(2)).toBe(0);
    expect(j.wedge(j).coordinate(3)).toBe(0);

    expect(j.wedge(I).coordinate(0)).toBe(0);
    expect(j.wedge(I).coordinate(1)).toBe(0);
    expect(j.wedge(I).coordinate(2)).toBe(0);
    expect(j.wedge(I).coordinate(3)).toBe(0);

    expect(I.wedge(u).coordinate(0)).toBe(0);
    expect(I.wedge(u).coordinate(1)).toBe(0);
    expect(I.wedge(u).coordinate(2)).toBe(0);
    expect(I.wedge(u).coordinate(3)).toBe(1);

    expect(I.wedge(i).coordinate(0)).toBe(0);
    expect(I.wedge(i).coordinate(1)).toBe(0);
    expect(I.wedge(i).coordinate(2)).toBe(0);
    expect(I.wedge(i).coordinate(3)).toBe(0);

    expect(I.wedge(j).coordinate(0)).toBe(0);
    expect(I.wedge(j).coordinate(1)).toBe(0);
    expect(I.wedge(j).coordinate(2)).toBe(0);
    expect(I.wedge(j).coordinate(3)).toBe(0);

    expect(I.wedge(I).coordinate(0)).toBe(0);
    expect(I.wedge(I).coordinate(1)).toBe(0);
    expect(I.wedge(I).coordinate(2)).toBe(0);
    expect(I.wedge(I).coordinate(3)).toBe(0);
  });
});