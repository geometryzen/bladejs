describe("Euclidean3", function() {

  var random = function() {
    var w = Math.random();
    var x = Math.random();
    var y = Math.random();
    var z = Math.random();
    return new BLADE.Euclidean3(w, x, y, z, Math.random(), Math.random(), Math.random(), Math.random());
  }

  var zero = new BLADE.Euclidean3(0, 0, 0, 0, 0, 0, 0, 0);
  var one  = new BLADE.Euclidean3(1, 0, 0, 0, 0, 0, 0, 0);
  var i    = new BLADE.Euclidean3(0, 1, 0, 0, 0, 0, 0, 0);
  var j    = new BLADE.Euclidean3(0, 0, 1, 0, 0, 0, 0, 0);
  var k    = new BLADE.Euclidean3(0, 0, 0, 1, 0, 0, 0, 0);
  var ij   = new BLADE.Euclidean3(0, 0, 0, 0, 1, 0, 0, 0);
  var jk   = new BLADE.Euclidean3(0, 0, 0, 0, 0, 1, 0, 0);
  var ki   = new BLADE.Euclidean3(0, 0, 0, 0, 0, 0, 1, 0);
  var I    = new BLADE.Euclidean3(0, 0, 0, 0, 0, 0, 0, 1);

  beforeEach(function() {
    this.addMatchers({
      toBeNearZero: function() {
        var tolerance = (Math.pow(10, -2) / 2);
        return (Math.abs(this.actual.coordinate(0)) < tolerance) &&
            (Math.abs(this.actual.coordinate(1)) < tolerance) &&
            (Math.abs(this.actual.coordinate(2)) < tolerance) &&
            (Math.abs(this.actual.coordinate(3)) < tolerance) &&
            (Math.abs(this.actual.coordinate(4)) < tolerance) &&
            (Math.abs(this.actual.coordinate(5)) < tolerance) &&
            (Math.abs(this.actual.coordinate(6)) < tolerance) &&
            (Math.abs(this.actual.coordinate(7)) < tolerance);
      },
      toBeNear: function(m) {
        var tolerance = (Math.pow(10, -2) / 2);
        return (Math.abs(this.actual.coordinate(0) - m.coordinate(0)) < tolerance) &&
               (Math.abs(this.actual.coordinate(1) - m.coordinate(1)) < tolerance) &&
               (Math.abs(this.actual.coordinate(2) - m.coordinate(2)) < tolerance) &&
               (Math.abs(this.actual.coordinate(3) - m.coordinate(3)) < tolerance) &&
               (Math.abs(this.actual.coordinate(4) - m.coordinate(4)) < tolerance) &&
               (Math.abs(this.actual.coordinate(5) - m.coordinate(5)) < tolerance) &&
               (Math.abs(this.actual.coordinate(6) - m.coordinate(6)) < tolerance) &&
               (Math.abs(this.actual.coordinate(7) - m.coordinate(7)) < tolerance);
      }
    });
  });

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

  describe("multiplication", function() {
    it("associative", function() {
      var a = random();
      var b = random();
      var c = random();

      var ab = a.mul(b);
      var bc = b.mul(c);
      var lhs = ab.mul(c);
      var rhs = a.mul(bc);

      expect(lhs.coordinate(0)).toBeCloseTo(rhs.coordinate(0));
      expect(lhs.coordinate(1)).toBeCloseTo(rhs.coordinate(1));
      expect(lhs.coordinate(2)).toBeCloseTo(rhs.coordinate(2));
      expect(lhs.coordinate(3)).toBeCloseTo(rhs.coordinate(3));
      expect(lhs.coordinate(4)).toBeCloseTo(rhs.coordinate(4));
      expect(lhs.coordinate(5)).toBeCloseTo(rhs.coordinate(5));
      expect(lhs.coordinate(6)).toBeCloseTo(rhs.coordinate(6));
      expect(lhs.coordinate(7)).toBeCloseTo(rhs.coordinate(7));
    });
    it("left distributive", function() {
      var x = random();
      var y = random();
      var z = random();

      var xy = x.mul(y);
      var xz = x.mul(z);
      var lhs = x.mul(y.add(z));
      var rhs = xy.add(xz);

      expect(lhs.coordinate(0)).toBeCloseTo(rhs.coordinate(0));
      expect(lhs.coordinate(1)).toBeCloseTo(rhs.coordinate(1));
      expect(lhs.coordinate(2)).toBeCloseTo(rhs.coordinate(2));
      expect(lhs.coordinate(3)).toBeCloseTo(rhs.coordinate(3));
      expect(lhs.coordinate(4)).toBeCloseTo(rhs.coordinate(4));
      expect(lhs.coordinate(5)).toBeCloseTo(rhs.coordinate(5));
      expect(lhs.coordinate(6)).toBeCloseTo(rhs.coordinate(6));
      expect(lhs.coordinate(7)).toBeCloseTo(rhs.coordinate(7));
    });
    it("right distributive over addition", function() {
      var x = random();
      var y = random();
      var z = random();

      var yx = y.mul(x);
      var zx = z.mul(x);
      var lhs = (y.add(z)).mul(x);
      var rhs = yx.add(zx);

      expect(lhs.coordinate(0)).toBeCloseTo(rhs.coordinate(0));
      expect(lhs.coordinate(1)).toBeCloseTo(rhs.coordinate(1));
      expect(lhs.coordinate(2)).toBeCloseTo(rhs.coordinate(2));
      expect(lhs.coordinate(3)).toBeCloseTo(rhs.coordinate(3));
      expect(lhs.coordinate(4)).toBeCloseTo(rhs.coordinate(4));
      expect(lhs.coordinate(5)).toBeCloseTo(rhs.coordinate(5));
      expect(lhs.coordinate(6)).toBeCloseTo(rhs.coordinate(6));
      expect(lhs.coordinate(7)).toBeCloseTo(rhs.coordinate(7));
    });
    it("square of any vector is a real scalar", function() {
      var a = random().grade(1);
      var b = a.mul(a);

      expect(b.grade(1)).toBeNear(zero);
      expect(b.grade(2)).toBeNear(zero);
      expect(b.grade(3)).toBeNear(zero);
    });
  });

  describe("left contraction", function() {
    it("square of any vector is a real scalar", function() {
      expect(one.lshift(one)).toBeNear(one);
      expect(one.lshift(i)).toBeNear(i);
      expect(one.lshift(j)).toBeNear(j);
      expect(one.lshift(k)).toBeNear(k);
      expect(one.lshift(ij)).toBeNear(ij);
      expect(one.lshift(jk)).toBeNear(jk);
      expect(one.lshift(ki)).toBeNear(ki);
      expect(one.lshift(I)).toBeNear(I);

      expect(i.lshift(one)).toBeNear(zero);
      expect(i.lshift(i)).toBeNear(one);
      expect(i.lshift(j)).toBeNear(zero);
      expect(i.lshift(k)).toBeNear(zero);
      expect(i.lshift(ij)).toBeNear(j);
      expect(i.lshift(jk)).toBeNear(zero);
      expect(i.lshift(ki)).toBeNear(zero.sub(k));
      expect(i.lshift(I)).toBeNear(jk);

      expect(j.lshift(one)).toBeNear(zero);
      expect(j.lshift(i)).toBeNear(zero);
      expect(j.lshift(j)).toBeNear(one);
      expect(j.lshift(k)).toBeNear(zero);
      expect(j.lshift(ij)).toBeNear(zero.sub(i));
      expect(j.lshift(jk)).toBeNear(k);
      expect(j.lshift(ki)).toBeNear(zero);
      expect(j.lshift(I)).toBeNear(ki);

      expect(k.lshift(one)).toBeNear(zero);
      expect(k.lshift(i)).toBeNear(zero);
      expect(k.lshift(j)).toBeNear(zero);
      expect(k.lshift(k)).toBeNear(one);
      expect(k.lshift(ij)).toBeNear(zero);
      expect(k.lshift(jk)).toBeNear(zero.sub(j));
      expect(k.lshift(ki)).toBeNear(i);
      expect(k.lshift(I)).toBeNear(ij);

      expect(ij.lshift(one)).toBeNear(zero);
      expect(ij.lshift(i)).toBeNear(zero);
      expect(ij.lshift(j)).toBeNear(zero);
      expect(ij.lshift(k)).toBeNear(zero);
      expect(ij.lshift(ij)).toBeNear(zero.sub(one));
      expect(ij.lshift(jk)).toBeNear(zero);
      expect(ij.lshift(ki)).toBeNear(zero);
      expect(ij.lshift(I)).toBeNear(zero.sub(k));

      expect(jk.lshift(one)).toBeNear(zero);
      expect(jk.lshift(i)).toBeNear(zero);
      expect(jk.lshift(j)).toBeNear(zero);
      expect(jk.lshift(k)).toBeNear(zero);
      expect(jk.lshift(ij)).toBeNear(zero);
      expect(jk.lshift(jk)).toBeNear(zero.sub(one));
      expect(jk.lshift(ki)).toBeNear(zero);
      expect(jk.lshift(I)).toBeNear(zero.sub(i));

      expect(ki.lshift(one)).toBeNear(zero);          // 49
      expect(ki.lshift(i)).toBeNear(zero);            // 50
      expect(ki.lshift(j)).toBeNear(zero);            // 51
      expect(ki.lshift(k)).toBeNear(zero);            // 52
      expect(ki.lshift(ij)).toBeNear(zero);           // 53
      expect(ki.lshift(jk)).toBeNear(zero);           // 54
      expect(ki.lshift(ki)).toBeNear(zero.sub(one));  // 55
      expect(ki.lshift(I)).toBeNear(zero.sub(j));     // 56

      expect(I.lshift(one)).toBeNear(zero);           // 57
      expect(I.lshift(i)).toBeNear(zero);             // 58
      expect(I.lshift(j)).toBeNear(zero);             // 59
      expect(I.lshift(k)).toBeNear(zero);             // 60
      expect(I.lshift(ij)).toBeNear(zero);            // 61
      expect(I.lshift(jk)).toBeNear(zero);            // 62
      expect(I.lshift(ki)).toBeNear(zero);            // 63
      expect(I.lshift(I)).toBeNear(zero.sub(one));    // 64
    });
  });
});