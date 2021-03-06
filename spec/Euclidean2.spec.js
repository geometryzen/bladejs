describe("Euclidean2", function() {

  it('Construction', function() {
    var x0 = Math.random();
    var x1 = Math.random();
    var x2 = Math.random();
    var x3 = Math.random();

    var a = new BLADE.Euclidean2(x0, x1, x2, x3);

    expect(a.coordinate(0)).toBe(x0);
    expect(a.coordinate(1)).toBe(x1);
    expect(a.coordinate(2)).toBe(x2);
    expect(a.coordinate(3)).toBe(x3);

    expect(a.coordinates()[0]).toBe(x0);
    expect(a.coordinates()[1]).toBe(x1);
    expect(a.coordinates()[2]).toBe(x2);
    expect(a.coordinates()[3]).toBe(x3);
  });

  it('Should implement toString()', function() {
    var a = new BLADE.Euclidean2(1, 2, 3, 4);
    expect(a.toStringIJK()).toBe("1+2*i+3*j+4*I");
  });

  it('Should implement add function', function() {
    var a = new BLADE.Euclidean2(Math.random(), Math.random(), Math.random(), Math.random());
    var b = new BLADE.Euclidean2(Math.random(), Math.random(), Math.random(), Math.random());
    
    var c = a.add(b);

    expect(c.coordinate(0)).toBe(a.coordinate(0) + b.coordinate(0));
    expect(c.coordinate(1)).toBe(a.coordinate(1) + b.coordinate(1));
    expect(c.coordinate(2)).toBe(a.coordinate(2) + b.coordinate(2));
    expect(c.coordinate(3)).toBe(a.coordinate(3) + b.coordinate(3));
  });

  it('Should implement sub function', function() {
    var a = new BLADE.Euclidean2(Math.random(), Math.random(), Math.random(), Math.random());
    var b = new BLADE.Euclidean2(Math.random(), Math.random(), Math.random(), Math.random());
    
    var c = a.sub(b);

    expect(c.coordinate(0)).toBe(a.coordinate(0) - b.coordinate(0));
    expect(c.coordinate(1)).toBe(a.coordinate(1) - b.coordinate(1));
    expect(c.coordinate(2)).toBe(a.coordinate(2) - b.coordinate(2));
    expect(c.coordinate(3)).toBe(a.coordinate(3) - b.coordinate(3));
  });

  it('Should implement mul function', function() {
    var u = new BLADE.Euclidean2(1, 0, 0, 0)
    var i = new BLADE.Euclidean2(0, 1, 0, 0)
    var j = new BLADE.Euclidean2(0, 0, 1, 0)
    var I = new BLADE.Euclidean2(0, 0, 0, 1)

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

  it('div Euclidean2', function() {
    var u = new BLADE.Euclidean2(1, 0, 0, 0)
    var i = new BLADE.Euclidean2(0, 1, 0, 0)
    var j = new BLADE.Euclidean2(0, 0, 1, 0)
    var I = new BLADE.Euclidean2(0, 0, 0, 1)

    expect(u.div(u).coordinate(0)).toBe(1);
    expect(u.div(u).coordinate(1)).toBe(0);
    expect(u.div(u).coordinate(2)).toBe(0);
    expect(u.div(u).coordinate(3)).toBe(0);

    expect(u.div(i).coordinate(0)).toBe(0);
    expect(u.div(i).coordinate(1)).toBe(1);
    expect(u.div(i).coordinate(2)).toBe(0);
    expect(u.div(i).coordinate(3)).toBe(0);

    expect(u.div(j).coordinate(0)).toBe(0);
    expect(u.div(j).coordinate(1)).toBe(0);
    expect(u.div(j).coordinate(2)).toBe(1);
    expect(u.div(j).coordinate(3)).toBe(0);

    expect(u.div(I).coordinate(0)).toBe(0);
    expect(u.div(I).coordinate(1)).toBe(0);
    expect(u.div(I).coordinate(2)).toBe(0);
    expect(u.div(I).coordinate(3)).toBe(-1);

    expect(i.div(u).coordinate(0)).toBe(0);
    expect(i.div(u).coordinate(1)).toBe(1);
    expect(i.div(u).coordinate(2)).toBe(0);
    expect(i.div(u).coordinate(3)).toBe(0);

    expect(i.div(i).coordinate(0)).toBe(1);
    expect(i.div(i).coordinate(1)).toBe(0);
    expect(i.div(i).coordinate(2)).toBe(0);
    expect(i.div(i).coordinate(3)).toBe(0);

    expect(i.div(j).coordinate(0)).toBe(0);
    expect(i.div(j).coordinate(1)).toBe(0);
    expect(i.div(j).coordinate(2)).toBe(0);
    expect(i.div(j).coordinate(3)).toBe(1);

    expect(i.div(I).coordinate(0)).toBe(0);
    expect(i.div(I).coordinate(1)).toBe(0);
    expect(i.div(I).coordinate(2)).toBe(-1);
    expect(i.div(I).coordinate(3)).toBe(0);

    expect(j.div(u).coordinate(0)).toBe(0);
    expect(j.div(u).coordinate(1)).toBe(0);
    expect(j.div(u).coordinate(2)).toBe(1);
    expect(j.div(u).coordinate(3)).toBe(0);

    expect(j.div(i).coordinate(0)).toBe(0);
    expect(j.div(i).coordinate(1)).toBe(0);
    expect(j.div(i).coordinate(2)).toBe(0);
    expect(j.div(i).coordinate(3)).toBe(-1);

    expect(j.div(j).coordinate(0)).toBe(1);
    expect(j.div(j).coordinate(1)).toBe(0);
    expect(j.div(j).coordinate(2)).toBe(0);
    expect(j.div(j).coordinate(3)).toBe(0);

    expect(j.div(I).coordinate(0)).toBe(0);
    expect(j.div(I).coordinate(1)).toBe(1);
    expect(j.div(I).coordinate(2)).toBe(0);
    expect(j.div(I).coordinate(3)).toBe(0);

    expect(I.div(u).coordinate(0)).toBe(0);
    expect(I.div(u).coordinate(1)).toBe(0);
    expect(I.div(u).coordinate(2)).toBe(0);
    expect(I.div(u).coordinate(3)).toBe(1);

    expect(I.div(i).coordinate(0)).toBe(0);
    expect(I.div(i).coordinate(1)).toBe(0);
    expect(I.div(i).coordinate(2)).toBe(-1);
    expect(I.div(i).coordinate(3)).toBe(0);

    expect(I.div(j).coordinate(0)).toBe(0);
    expect(I.div(j).coordinate(1)).toBe(1);
    expect(I.div(j).coordinate(2)).toBe(0);
    expect(I.div(j).coordinate(3)).toBe(0);

    expect(I.div(I).coordinate(0)).toBe(1);
    expect(I.div(I).coordinate(1)).toBe(0);
    expect(I.div(I).coordinate(2)).toBe(0);
    expect(I.div(I).coordinate(3)).toBe(0);
  });

  it('div number', function() {
    var u = new BLADE.Euclidean2(2, 0, 0, 0)
    var i = new BLADE.Euclidean2(0, 2, 0, 0)
    var j = new BLADE.Euclidean2(0, 0, 2, 0)
    var I = new BLADE.Euclidean2(0, 0, 0, 2)

    expect(u.div(2).coordinate(0)).toBe(1);
    expect(u.div(2).coordinate(1)).toBe(0);
    expect(u.div(2).coordinate(2)).toBe(0);
    expect(u.div(2).coordinate(3)).toBe(0);

    expect(i.div(2).coordinate(0)).toBe(0);
    expect(i.div(2).coordinate(1)).toBe(1);
    expect(i.div(2).coordinate(2)).toBe(0);
    expect(i.div(2).coordinate(3)).toBe(0);

    expect(j.div(2).coordinate(0)).toBe(0);
    expect(j.div(2).coordinate(1)).toBe(0);
    expect(j.div(2).coordinate(2)).toBe(1);
    expect(j.div(2).coordinate(3)).toBe(0);

    expect(I.div(2).coordinate(0)).toBe(0);
    expect(I.div(2).coordinate(1)).toBe(0);
    expect(I.div(2).coordinate(2)).toBe(0);
    expect(I.div(2).coordinate(3)).toBe(1);
  });

  it('div 0', function() {
    var u = new BLADE.Euclidean2(2, 0, 0, 0)
    var i = new BLADE.Euclidean2(0, 2, 0, 0)
    var j = new BLADE.Euclidean2(0, 0, 2, 0)
    var I = new BLADE.Euclidean2(0, 0, 0, 2)

    expect(u.div(0).coordinate(0)).toBe(Infinity);
    expect(u.div(0).coordinate(1)).toBeNaN();
    expect(u.div(0).coordinate(2)).toBeNaN();
    expect(u.div(0).coordinate(3)).toBeNaN();

    expect(i.div(0).coordinate(0)).toBe(0);
    expect(i.div(0).coordinate(1)).toBe(Infinity);
    expect(i.div(0).coordinate(2)).toBeNaN();
    expect(i.div(0).coordinate(3)).toBeNaN();

    expect(j.div(0).coordinate(0)).toBe(0);
    expect(j.div(0).coordinate(1)).toBeNaN();
    expect(j.div(0).coordinate(2)).toBe(Infinity);
    expect(j.div(0).coordinate(3)).toBeNaN();

    expect(I.div(0).coordinate(0)).toBe(0);
    expect(I.div(0).coordinate(1)).toBeNaN();
    expect(I.div(0).coordinate(2)).toBeNaN();
    expect(I.div(0).coordinate(3)).toBe(Infinity);
  });

  it('Should implement wedge function', function() {
    var u = new BLADE.Euclidean2(1, 0, 0, 0)
    var i = new BLADE.Euclidean2(0, 1, 0, 0)
    var j = new BLADE.Euclidean2(0, 0, 1, 0)
    var I = new BLADE.Euclidean2(0, 0, 0, 1)

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

  it('Should implement lshift function', function() {
    var u = new BLADE.Euclidean2(1, 0, 0, 0)
    var i = new BLADE.Euclidean2(0, 1, 0, 0)
    var j = new BLADE.Euclidean2(0, 0, 1, 0)
    var I = new BLADE.Euclidean2(0, 0, 0, 1)

    expect(u.lshift(u).coordinate(0)).toBe(1);
    expect(u.lshift(u).coordinate(1)).toBe(0);
    expect(u.lshift(u).coordinate(2)).toBe(0);
    expect(u.lshift(u).coordinate(3)).toBe(0);

    expect(u.lshift(i).coordinate(0)).toBe(0);
    expect(u.lshift(i).coordinate(1)).toBe(1);
    expect(u.lshift(i).coordinate(2)).toBe(0);
    expect(u.lshift(i).coordinate(3)).toBe(0);

    expect(u.lshift(j).coordinate(0)).toBe(0);
    expect(u.lshift(j).coordinate(1)).toBe(0);
    expect(u.lshift(j).coordinate(2)).toBe(1);
    expect(u.lshift(j).coordinate(3)).toBe(0);

    expect(u.lshift(I).coordinate(0)).toBe(0);
    expect(u.lshift(I).coordinate(1)).toBe(0);
    expect(u.lshift(I).coordinate(2)).toBe(0);
    expect(u.lshift(I).coordinate(3)).toBe(1);

    expect(i.lshift(u).coordinate(0)).toBe(0);
    expect(i.lshift(u).coordinate(1)).toBe(0);
    expect(i.lshift(u).coordinate(2)).toBe(0);
    expect(i.lshift(u).coordinate(3)).toBe(0);

    expect(i.lshift(i).coordinate(0)).toBe(1);
    expect(i.lshift(i).coordinate(1)).toBe(0);
    expect(i.lshift(i).coordinate(2)).toBe(0);
    expect(i.lshift(i).coordinate(3)).toBe(0);

    expect(i.lshift(j).coordinate(0)).toBe(0);
    expect(i.lshift(j).coordinate(1)).toBe(0);
    expect(i.lshift(j).coordinate(2)).toBe(0);
    expect(i.lshift(j).coordinate(3)).toBe(0);

    expect(i.lshift(I).coordinate(0)).toBe(0);
    expect(i.lshift(I).coordinate(1)).toBe(0);
    expect(i.lshift(I).coordinate(2)).toBe(1);
    expect(i.lshift(I).coordinate(3)).toBe(0);

    expect(j.lshift(u).coordinate(0)).toBe(0);
    expect(j.lshift(u).coordinate(1)).toBe(0);
    expect(j.lshift(u).coordinate(2)).toBe(0);
    expect(j.lshift(u).coordinate(3)).toBe(0);

    expect(j.lshift(i).coordinate(0)).toBe(0);
    expect(j.lshift(i).coordinate(1)).toBe(0);
    expect(j.lshift(i).coordinate(2)).toBe(0);
    expect(j.lshift(i).coordinate(3)).toBe(0);

    expect(j.lshift(j).coordinate(0)).toBe(1);
    expect(j.lshift(j).coordinate(1)).toBe(0);
    expect(j.lshift(j).coordinate(2)).toBe(0);
    expect(j.lshift(j).coordinate(3)).toBe(0);

    expect(j.lshift(I).coordinate(0)).toBe(0);
    expect(j.lshift(I).coordinate(1)).toBe(-1);
    expect(j.lshift(I).coordinate(2)).toBe(0);
    expect(j.lshift(I).coordinate(3)).toBe(0);

    expect(I.lshift(u).coordinate(0)).toBe(0);
    expect(I.lshift(u).coordinate(1)).toBe(0);
    expect(I.lshift(u).coordinate(2)).toBe(0);
    expect(I.lshift(u).coordinate(3)).toBe(0);

    expect(I.lshift(i).coordinate(0)).toBe(0);
    expect(I.lshift(i).coordinate(1)).toBe(0);
    expect(I.lshift(i).coordinate(2)).toBe(0);
    expect(I.lshift(i).coordinate(3)).toBe(0);

    expect(I.lshift(j).coordinate(0)).toBe(0);
    expect(I.lshift(j).coordinate(1)).toBe(0);
    expect(I.lshift(j).coordinate(2)).toBe(0);
    expect(I.lshift(j).coordinate(3)).toBe(0);

    expect(I.lshift(I).coordinate(0)).toBe(-1);
    expect(I.lshift(I).coordinate(1)).toBe(0);
    expect(I.lshift(I).coordinate(2)).toBe(0);
    expect(I.lshift(I).coordinate(3)).toBe(0);
  });

  it('Should implement rshift function', function() {
    var u = new BLADE.Euclidean2(1, 0, 0, 0)
    var i = new BLADE.Euclidean2(0, 1, 0, 0)
    var j = new BLADE.Euclidean2(0, 0, 1, 0)
    var I = new BLADE.Euclidean2(0, 0, 0, 1)

    expect(u.rshift(u).coordinate(0)).toBe(1);
    expect(u.rshift(u).coordinate(1)).toBe(0);
    expect(u.rshift(u).coordinate(2)).toBe(0);
    expect(u.rshift(u).coordinate(3)).toBe(0);

    expect(u.rshift(i).coordinate(0)).toBe(0);
    expect(u.rshift(i).coordinate(1)).toBe(0);
    expect(u.rshift(i).coordinate(2)).toBe(0);
    expect(u.rshift(i).coordinate(3)).toBe(0);

    expect(u.rshift(j).coordinate(0)).toBe(0);
    expect(u.rshift(j).coordinate(1)).toBe(0);
    expect(u.rshift(j).coordinate(2)).toBe(0);
    expect(u.rshift(j).coordinate(3)).toBe(0);

    expect(u.rshift(I).coordinate(0)).toBe(0);
    expect(u.rshift(I).coordinate(1)).toBe(0);
    expect(u.rshift(I).coordinate(2)).toBe(0);
    expect(u.rshift(I).coordinate(3)).toBe(0);

    expect(i.rshift(u).coordinate(0)).toBe(0);
    expect(i.rshift(u).coordinate(1)).toBe(-1);
    expect(i.rshift(u).coordinate(2)).toBe(0);
    expect(i.rshift(u).coordinate(3)).toBe(0);

    expect(i.rshift(i).coordinate(0)).toBe(1);
    expect(i.rshift(i).coordinate(1)).toBe(0);
    expect(i.rshift(i).coordinate(2)).toBe(0);
    expect(i.rshift(i).coordinate(3)).toBe(0);

    expect(i.rshift(j).coordinate(0)).toBe(0);
    expect(i.rshift(j).coordinate(1)).toBe(0);
    expect(i.rshift(j).coordinate(2)).toBe(0);
    expect(i.rshift(j).coordinate(3)).toBe(0);

    expect(i.rshift(I).coordinate(0)).toBe(0);
    expect(i.rshift(I).coordinate(1)).toBe(0);
    expect(i.rshift(I).coordinate(2)).toBe(0);
    expect(i.rshift(I).coordinate(3)).toBe(0);

    expect(j.rshift(u).coordinate(0)).toBe(0);
    expect(j.rshift(u).coordinate(1)).toBe(0);
    expect(j.rshift(u).coordinate(2)).toBe(-1);
    expect(j.rshift(u).coordinate(3)).toBe(0);

    expect(j.rshift(i).coordinate(0)).toBe(0);
    expect(j.rshift(i).coordinate(1)).toBe(0);
    expect(j.rshift(i).coordinate(2)).toBe(0);
    expect(j.rshift(i).coordinate(3)).toBe(0);

    expect(j.rshift(j).coordinate(0)).toBe(1);
    expect(j.rshift(j).coordinate(1)).toBe(0);
    expect(j.rshift(j).coordinate(2)).toBe(0);
    expect(j.rshift(j).coordinate(3)).toBe(0);

    expect(j.rshift(I).coordinate(0)).toBe(0);
    expect(j.rshift(I).coordinate(1)).toBe(0);
    expect(j.rshift(I).coordinate(2)).toBe(0);
    expect(j.rshift(I).coordinate(3)).toBe(0);

    expect(I.rshift(u).coordinate(0)).toBe(0);
    expect(I.rshift(u).coordinate(1)).toBe(0);
    expect(I.rshift(u).coordinate(2)).toBe(0);
    expect(I.rshift(u).coordinate(3)).toBe(1);

    expect(I.rshift(i).coordinate(0)).toBe(0);
    expect(I.rshift(i).coordinate(1)).toBe(0);
    expect(I.rshift(i).coordinate(2)).toBe(1);
    expect(I.rshift(i).coordinate(3)).toBe(0);

    expect(I.rshift(j).coordinate(0)).toBe(0);
    expect(I.rshift(j).coordinate(1)).toBe(-1);
    expect(I.rshift(j).coordinate(2)).toBe(0);
    expect(I.rshift(j).coordinate(3)).toBe(0);

    expect(I.rshift(I).coordinate(0)).toBe(-1);
    expect(I.rshift(I).coordinate(1)).toBe(0);
    expect(I.rshift(I).coordinate(2)).toBe(0);
    expect(I.rshift(I).coordinate(3)).toBe(0);
  });

  it('grade(index) function', function() {
    var m = new BLADE.Euclidean2(Math.random(), Math.random(), Math.random(), Math.random());

    var w = m.grade(0);

    expect(w.coordinate(0)).toEqual(m.coordinate(0));
    expect(w.coordinate(1)).toEqual(0);
    expect(w.coordinate(2)).toEqual(0);
    expect(w.coordinate(3)).toEqual(0);

    var v = m.grade(1);

    expect(v.coordinate(0)).toEqual(0);
    expect(v.coordinate(1)).toEqual(m.coordinate(1));
    expect(v.coordinate(2)).toEqual(m.coordinate(2));
    expect(v.coordinate(3)).toEqual(0);

    var b = m.grade(2);

    expect(b.coordinate(0)).toEqual(0);
    expect(b.coordinate(1)).toEqual(0);
    expect(b.coordinate(2)).toEqual(0);
    expect(b.coordinate(3)).toEqual(m.coordinate(3));

    var z = m.grade(3);

    expect(z.coordinate(0)).toEqual(0);
    expect(z.coordinate(1)).toEqual(0);
    expect(z.coordinate(2)).toEqual(0);
    expect(z.coordinate(3)).toEqual(0);
  });
});