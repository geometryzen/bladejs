describe('Cartesian3', function() {

  it('Should initialize coordinates', function() {
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

  it('Should implement toString()', function() {
    var a = new BLADE.Cartesian3(1, 2, 3, 4, 5, 6, 7, 8);
    expect(a.toString()).toBe("1+2*e_{1}+3*e_{2}+4*e_{3}+5*e_{12}+6*e_{23}+7*e_{31}+8*e_{123}");
  });
});