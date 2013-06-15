describe('Cartesian3', function() {

  it('Cartesian3 constructor should initialize coordinates', function() {
    var a = new BLADE.Cartesian3(1, 2, 3, 4, 5, 6, 7, 8);
    expect(a.w).toBe(1);
    expect(a.x).toBe(2);
    expect(a.y).toBe(3);
    expect(a.z).toBe(4);
    expect(a.xy).toBe(5);
    expect(a.yz).toBe(6);
    expect(a.zx).toBe(7);
    expect(a.xyz).toBe(8);
  });
});