describe "Dimensions", () ->

  it "Construction(Rational)", () ->
    M = new BLADE.Rational(1,1)
    L = new BLADE.Rational(2,1)
    T = new BLADE.Rational(3,1)
    d = new BLADE.Dimensions(M, L, T)
    expect(d.M.numer).toBe(1)
    expect(d.M.denom).toBe(1)
    expect(d.L.numer).toBe(2)
    expect(d.L.denom).toBe(1)
    expect(d.T.numer).toBe(3)
    expect(d.T.denom).toBe(1)

  it "Construction(number)", () ->
    d = new BLADE.Dimensions(1, 2, 3)
    expect(d.M.numer).toBe(1)
    expect(d.M.denom).toBe(1)
    expect(d.L.numer).toBe(2)
    expect(d.L.denom).toBe(1)
    expect(d.T.numer).toBe(3)
    expect(d.T.denom).toBe(1)

  it "mul", () ->
    M = new BLADE.Dimensions(1, 0, 0)
    L = new BLADE.Dimensions(0, 1, 0)
    T = new BLADE.Dimensions(0, 0, 1)
    N = M.mul(L).mul(T).mul(T)
    expect(N.M.numer).toBe(1)
    expect(N.M.denom).toBe(1)
    expect(N.L.numer).toBe(1)
    expect(N.L.denom).toBe(1)
    expect(N.T.numer).toBe(2)
    expect(N.T.denom).toBe(1)

  it "div", () ->
    M = new BLADE.Dimensions(1, 0, 0)
    L = new BLADE.Dimensions(0, 1, 0)
    T = new BLADE.Dimensions(0, 0, 1)
    N = M.mul(L).div(T.mul(T))
    expect(N.M.numer).toBe(1)
    expect(N.M.denom).toBe(1)
    expect(N.L.numer).toBe(1)
    expect(N.L.denom).toBe(1)
    expect(N.T.numer).toBe(-2)
    expect(N.T.denom).toBe(1)

  it "pow", () ->
    base = new BLADE.Dimensions(1, 2, 3)
    x = base.pow(2)
    expect(x.M.numer).toBe(2)
    expect(x.M.denom).toBe(1)
    expect(x.L.numer).toBe(4)
    expect(x.L.denom).toBe(1)
    expect(x.T.numer).toBe(6)
    expect(x.T.denom).toBe(1)

    expect(base.M.numer).toBe(1)
    expect(base.M.denom).toBe(1)
    expect(base.L.numer).toBe(2)
    expect(base.L.denom).toBe(1)
    expect(base.T.numer).toBe(3)
    expect(base.T.denom).toBe(1)

  it "toString", () ->
    expect("#{new BLADE.Dimensions(new BLADE.Rational(0, 1), new BLADE.Rational(1, 1), new BLADE.Rational(-2, 1))}").toBe("L * T ** -2")
