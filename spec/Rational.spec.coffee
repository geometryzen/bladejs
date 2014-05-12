describe "Rational", () ->

  it "Construction", () ->
    x = new BLADE.Rational(1, 1)
    expect(x.numer).toBe(1)
    expect(x.denom).toBe(1)

  it "Construction on zero", () ->
    x = new BLADE.Rational(0, 1)
    expect(x.numer).toBe(0)
    expect(x.denom).toBe(1)

  it "GCD", () ->
    x = new BLADE.Rational(2, 2)
    expect(x.numer).toBe(1)
    expect(x.denom).toBe(1)

  it "Canonical (-1,3) => (-1,3)", () ->
    x = new BLADE.Rational(-1, 3)
    expect(x.numer).toBe(-1)
    expect(x.denom).toBe(3)

  it "Canonical (1,-3) => (-1,3)", () ->
    x = new BLADE.Rational(1, -3)
    expect(x.numer).toBe(-1)
    expect(x.denom).toBe(3)

  it "add Rational", () ->
    x = new BLADE.Rational(1, 3)
    y = new BLADE.Rational(2, 1)
    sum = x.add(y)
    expect(sum.numer).toBe(7)
    expect(sum.denom).toBe(3)
    expect(x.numer).toBe(1)
    expect(x.denom).toBe(3)
    expect(y.numer).toBe(2)
    expect(y.denom).toBe(1)

  it "add number", () ->
    x = new BLADE.Rational(1, 3)
    sum = x.add(2)
    expect(sum.numer).toBe(7)
    expect(sum.denom).toBe(3)
    expect(x.numer).toBe(1)
    expect(x.denom).toBe(3)

  it "sub Rational", () ->
    x = new BLADE.Rational(1, 3)
    y = new BLADE.Rational(2, 1)
    sum = x.sub(y)
    expect(sum.numer).toBe(-5)
    expect(sum.denom).toBe(3)
    expect(x.numer).toBe(1)
    expect(x.denom).toBe(3)
    expect(y.numer).toBe(2)
    expect(y.denom).toBe(1)

  it "sub number", () ->
    x = new BLADE.Rational(1, 3)
    sum = x.sub(2)
    expect(sum.numer).toBe(-5)
    expect(sum.denom).toBe(3)
    expect(x.numer).toBe(1)
    expect(x.denom).toBe(3)

  it "mul", () ->
    x = new BLADE.Rational(1, 3)
    y = new BLADE.Rational(2, 1)
    sum = x.mul(y)
    expect(sum.numer).toBe 2
    expect(sum.denom).toBe 3
    expect(x.numer).toBe 1
    expect(x.denom).toBe 3
    expect(y.numer).toBe 2
    expect(y.denom).toBe 1

  it "negative() should change the sign of the numerator", () ->
    x = new BLADE.Rational(1, 3)
    n = x.negative()
    expect(x.numer).toBe +1
    expect(n.numer).toBe -1

  it "negative() should leave the denominator unchanged", () ->
    x = new BLADE.Rational(1, 3)
    n = x.negative()
    expect(x.denom).toBe +3
    expect(n.denom).toBe +3

  it "toString", () ->
    x = new BLADE.Rational(1, 2)
    expect("#{x}").toBe("1/2")

