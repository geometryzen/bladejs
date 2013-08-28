describe "Vector2", () ->

  epsilon = Math.pow(10, -15)

  it "Construction", () ->
    a = Math.random()
    b = Math.random()
    c = Math.random()
    d = Math.random()

    M = new BLADE.Euclidean2(a, b, c, d)
    expect(M.w).toBe(a)
    expect(M.x).toBe(b)
    expect(M.y).toBe(c)
    expect(M.xy).toBe(d)

  it "A reflection in the vector n should map the vector p to npn/Q(p)", () ->
    A1 = new BLADE.Point2(Math.random(), 0)
    A2 = new BLADE.Point2(Math.random(), 0)
    origin = new BLADE.Point2(0, 0)
    P = new BLADE.Point2(Math.random(), Math.random())

    n = A1.vectorTo(A2)
    p = origin.vectorTo(P)
    r = n.mul(p).mul(n).mul(new BLADE.Euclidean2(1/n.quadrance(), 0, 0, 0))
    expect(r.w).toBe(0)
    expect(r.x).toBeCloseTo(+P.x)
    expect(r.y).toBeCloseTo(-P.y)
    expect(r.xy).toBe(0)
