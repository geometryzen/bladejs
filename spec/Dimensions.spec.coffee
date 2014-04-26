describe "Dimensions", () ->

  it "Construction(Rational)", () ->
    M = new BLADE.Rational(1,1)
    L = new BLADE.Rational(2,1)
    T = new BLADE.Rational(3,1)
    Q = new BLADE.Rational(4,1)
    temperature = new BLADE.Rational(5,1)
    amount = new BLADE.Rational(6,1)
    intensity = new BLADE.Rational(7,1)
    d = new BLADE.Dimensions(M, L, T, Q, temperature, amount, intensity)
    expect(d.M.numer).toBe(1)
    expect(d.M.denom).toBe(1)
    expect(d.L.numer).toBe(2)
    expect(d.L.denom).toBe(1)
    expect(d.T.numer).toBe(3)
    expect(d.T.denom).toBe(1)
    expect(d.Q.numer).toBe(4)
    expect(d.Q.denom).toBe(1)
    expect(d.temperature.numer).toBe(5)
    expect(d.temperature.denom).toBe(1)
    expect(d.amount.numer).toBe(6)
    expect(d.amount.denom).toBe(1)
    expect(d.intensity.numer).toBe(7)
    expect(d.intensity.denom).toBe(1)

  it "Construction(number)", () ->
    d = new BLADE.Dimensions(1, 2, 3, 4, 5, 6, 7)
    expect(d.M.numer).toBe(1)
    expect(d.M.denom).toBe(1)
    expect(d.L.numer).toBe(2)
    expect(d.L.denom).toBe(1)
    expect(d.T.numer).toBe(3)
    expect(d.T.denom).toBe(1)
    expect(d.Q.numer).toBe(4)
    expect(d.Q.denom).toBe(1)
    expect(d.temperature.numer).toBe(5)
    expect(d.temperature.denom).toBe(1)
    expect(d.amount.numer).toBe(6)
    expect(d.amount.denom).toBe(1)
    expect(d.intensity.numer).toBe(7)
    expect(d.intensity.denom).toBe(1)

  it "mul", () ->
    M = new BLADE.Dimensions(1, 0, 0, 0, 0, 0, 0)
    L = new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0)
    T = new BLADE.Dimensions(0, 0, 1, 0, 0, 0, 0)
    Q = new BLADE.Dimensions(0, 0, 0, 1, 0, 0, 0)
    temperature = new BLADE.Dimensions(0, 0, 0, 0, 1, 0, 0)
    amount = new BLADE.Dimensions(0, 0, 0, 0, 0, 1, 0)
    intensity = new BLADE.Dimensions(0, 0, 0, 0, 0, 0, 1)
    N = M.mul(L).mul(T).mul(Q).mul(temperature).mul(amount).mul(intensity)
    expect(N.M.numer).toBe(1)
    expect(N.M.denom).toBe(1)
    expect(N.L.numer).toBe(1)
    expect(N.L.denom).toBe(1)
    expect(N.Q.numer).toBe(1)
    expect(N.Q.denom).toBe(1)
    expect(N.temperature.numer).toBe(1)
    expect(N.temperature.denom).toBe(1)
    expect(N.amount.numer).toBe(1)
    expect(N.amount.denom).toBe(1)
    expect(N.intensity.numer).toBe(1)
    expect(N.intensity.denom).toBe(1)

  it "div", () ->
    one = new BLADE.Dimensions(0, 0, 0, 0, 0, 0, 0)
    M = new BLADE.Dimensions(1, 0, 0, 0, 0, 0, 0)
    L = new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0)
    T = new BLADE.Dimensions(0, 0, 1, 0, 0, 0, 0)
    Q = new BLADE.Dimensions(0, 0, 0, 1, 0, 0, 0)
    temperature = new BLADE.Dimensions(0, 0, 0, 0, 1, 0, 0)
    amount = new BLADE.Dimensions(0, 0, 0, 0, 0, 1, 0)
    intensity = new BLADE.Dimensions(0, 0, 0, 0, 0, 0, 1)
    N = one.div(M).div(L).div(T).div(Q).div(temperature).div(amount).div(intensity)
    expect(N.M.numer).toBe(-1)
    expect(N.M.denom).toBe(1)
    expect(N.L.numer).toBe(-1)
    expect(N.L.denom).toBe(1)
    expect(N.T.numer).toBe(-1)
    expect(N.T.denom).toBe(1)
    expect(N.Q.numer).toBe(-1)
    expect(N.Q.denom).toBe(1)
    expect(N.temperature.numer).toBe(-1)
    expect(N.temperature.denom).toBe(1)
    expect(N.amount.numer).toBe(-1)
    expect(N.amount.denom).toBe(1)
    expect(N.intensity.numer).toBe(-1)
    expect(N.intensity.denom).toBe(1)

  it "pow", () ->
    base = new BLADE.Dimensions(1, 2, 3, 4, 5, 6, 7)
    x = base.pow(2)
    expect(x.M.numer).toBe(2)
    expect(x.M.denom).toBe(1)
    expect(x.L.numer).toBe(4)
    expect(x.L.denom).toBe(1)
    expect(x.T.numer).toBe(6)
    expect(x.T.denom).toBe(1)
    expect(x.Q.numer).toBe(8)
    expect(x.Q.denom).toBe(1)
    expect(x.temperature.numer).toBe(10)
    expect(x.temperature.denom).toBe(1)
    expect(x.amount.numer).toBe(12)
    expect(x.amount.denom).toBe(1)
    expect(x.intensity.numer).toBe(14)
    expect(x.intensity.denom).toBe(1)

    expect(base.M.numer).toBe(1)
    expect(base.M.denom).toBe(1)
    expect(base.L.numer).toBe(2)
    expect(base.L.denom).toBe(1)
    expect(base.T.numer).toBe(3)
    expect(base.T.denom).toBe(1)
    expect(base.Q.numer).toBe(4)
    expect(base.Q.denom).toBe(1)
    expect(base.temperature.numer).toBe(5)
    expect(base.temperature.denom).toBe(1)
    expect(base.amount.numer).toBe(6)
    expect(base.amount.denom).toBe(1)
    expect(base.intensity.numer).toBe(7)
    expect(base.intensity.denom).toBe(1)

  it "compatible", () ->
    one    = new BLADE.Dimensions(0, 0, 0, 0, 0, 0, 0)
    all    = new BLADE.Dimensions(1, 1, 1, 1, 1, 1, 1)
    mass   = new BLADE.Dimensions(1, 0, 0, 0, 0, 0, 0)
    length = new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0)
    time = new BLADE.Dimensions(0, 0, 1, 0, 0, 0, 0)
    charge = new BLADE.Dimensions(0, 0, 0, 1, 0, 0, 0)
    temperature = new BLADE.Dimensions(0, 0, 0, 0, 1, 0, 0)
    amount = new BLADE.Dimensions(0, 0, 0, 0, 0, 1, 0)
    intensity = new BLADE.Dimensions(0, 0, 0, 0, 0, 0, 1)

    expect(one.compatible(one)).toBe one
    expect(all.compatible(all)).toBe all

    expect(mass.compatible(mass)).toBe mass
    expect(length.compatible(length)).toBe length
    expect(time.compatible(time)).toBe time
    expect(charge.compatible(charge)).toBe charge
    expect(temperature.compatible(temperature)).toBe temperature
    expect(amount.compatible(amount)).toBe amount
    expect(intensity.compatible(intensity)).toBe intensity

    expect(-> one.compatible(length)).toThrow(new Error("Dimensions must be equal +(, length)"))
    expect(-> one.compatible(time)).toThrow(new Error("Dimensions must be equal +(, time)"))
    expect(-> one.compatible(charge)).toThrow(new Error("Dimensions must be equal +(, charge)"))
    expect(-> one.compatible(temperature)).toThrow(new Error("Dimensions must be equal +(, thermodynamic temperature)"))
    expect(-> one.compatible(amount)).toThrow(new Error("Dimensions must be equal +(, amount of substance)"))
    expect(-> one.compatible(intensity)).toThrow(new Error("Dimensions must be equal +(, luminous intensity)"))

  it "dimensionless", ->
    expect(new BLADE.Dimensions(0, 0, 0, 0, 0, 0, 0).dimensionless()).toBe true
    expect(new BLADE.Dimensions(1, 0, 0, 0, 0, 0, 0).dimensionless()).toBe false
    expect(new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0).dimensionless()).toBe false
    expect(new BLADE.Dimensions(0, 0, 1, 0, 0, 0, 0).dimensionless()).toBe false
    expect(new BLADE.Dimensions(0, 0, 0, 1, 0, 0, 0).dimensionless()).toBe false
    expect(new BLADE.Dimensions(0, 0, 0, 0, 1, 0, 0).dimensionless()).toBe false
    expect(new BLADE.Dimensions(0, 0, 0, 0, 0, 1, 0).dimensionless()).toBe false
    expect(new BLADE.Dimensions(0, 0, 0, 0, 0, 0, 1).dimensionless()).toBe false

  it "toString", () ->
    expect("#{new BLADE.Dimensions(1, 0, 0, 0, 0, 0, 0)}").toBe("mass")
    expect("#{new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0)}").toBe("length")
    expect("#{new BLADE.Dimensions(0, 0, 1, 0, 0, 0, 0)}").toBe("time")
    expect("#{new BLADE.Dimensions(0, 0, 0, 1, 0, 0, 0)}").toBe("charge")
    expect("#{new BLADE.Dimensions(0, 0, 0, 0, 1, 0, 0)}").toBe("thermodynamic temperature")
    expect("#{new BLADE.Dimensions(0, 0, 0, 0, 0, 1, 0)}").toBe("amount of substance")
    expect("#{new BLADE.Dimensions(0, 0, 0, 0, 0, 0, 1)}").toBe("luminous intensity")

    expect("#{new BLADE.Dimensions(0, 1, new BLADE.Rational(-2, 1), 0, 0, 0, 0)}").toBe("length * time ** -2")
