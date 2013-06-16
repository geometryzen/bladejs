describe('Cartesian3', function() {

  it('Should initialize coordinates', function() {
    var w = Math.random();
    var x = Math.random();
    var y = Math.random();
    var z = Math.random();
    var xy = Math.random();
    var yz = Math.random();
    var zx = Math.random();
    var xyz = Math.random();

    var a = new BLADE.Cartesian3(w, x, y, z, xy, yz, zx, xyz);

    expect(a.coordinate(0)).toBe(w);
    expect(a.coordinate(1)).toBe(x);
    expect(a.coordinate(2)).toBe(y);
    expect(a.coordinate(3)).toBe(z);
    expect(a.coordinate(4)).toBe(xy);
    expect(a.coordinate(5)).toBe(yz);
    expect(a.coordinate(6)).toBe(zx);
    expect(a.coordinate(7)).toBe(xyz);

    expect(a.w).toBe(w);
    expect(a.x).toBe(x);
    expect(a.y).toBe(y);
    expect(a.z).toBe(z);
    expect(a.xy).toBe(xy);
    expect(a.yz).toBe(yz);
    expect(a.zx).toBe(zx);
    expect(a.xyz).toBe(xyz);
  });

  it('Should implement toString()', function() {
    var a = new BLADE.Cartesian3(1, 2, 3, 4, 5, 6, 7, 8);
    expect(a.toString()).toBe("1+2*i+3*j+4*k+5*ij+6*jk+7*ki+8*I");
  });

  it('Should implement add function', function() {
    var a = new BLADE.Cartesian3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    var b = new BLADE.Cartesian3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    
    var c = a.add(b);

    expect(c.w).toBe(a.w + b.w);
    expect(c.x).toBe(a.x + b.x);
    expect(c.y).toBe(a.y + b.y);
    expect(c.z).toBe(a.z + b.z);
    expect(c.xy).toBe(a.xy + b.xy);
    expect(c.yz).toBe(a.yz + b.yz);
    expect(c.zx).toBe(a.zx + b.zx);
    expect(c.xyz).toBe(a.xyz + b.xyz);
  });

  it('Should implement sub function', function() {
    var a = new BLADE.Cartesian3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    var b = new BLADE.Cartesian3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
    
    var c = a.sub(b);

    expect(c.w).toBe(a.w - b.w);
    expect(c.x).toBe(a.x - b.x);
    expect(c.y).toBe(a.y - b.y);
    expect(c.z).toBe(a.z - b.z);
    expect(c.xy).toBe(a.xy - b.xy);
    expect(c.yz).toBe(a.yz - b.yz);
    expect(c.zx).toBe(a.zx - b.zx);
    expect(c.xyz).toBe(a.xyz - b.xyz);
  });
});