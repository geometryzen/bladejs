describe('Cartesian2', function() {

  it('Cartesian2 constructor should initialize coordinates', function() {
    var a = new BLADE.Cartesian2(1, 2, 3, 4);
    expect(a.w).toBe(1);
    expect(a.x).toBe(2);
    expect(a.y).toBe(3);
    expect(a.xy).toBe(4);
  });

  it('Cartesian2 toString()', function() {
    var a = new BLADE.Cartesian2(1, 2, 3, 4);
    expect(a.toString()).toBe("Under construction");
  });
});