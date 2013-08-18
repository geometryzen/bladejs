describe "Line2", () ->

  epsilon = Math.pow(10, -15)

  it "Construction", () ->
    a = Math.random()
    b = Math.random()
    c = Math.random()

    l = new BLADE.Line2(a, b, c)
    expect(l.a).toBe(a)
    expect(l.b).toBe(b)
    expect(l.c).toBe(c)

  it "meetWithLine", () ->
    A1 = new BLADE.Point2(Math.random(), Math.random())
    A2 = new BLADE.Point2(Math.random(), Math.random())
    A3 = new BLADE.Point2(Math.random(), Math.random())

    l1 = A1.joinToPoint(A2)
    l2 = A1.joinToPoint(A3)
    P = l1.meetWithLine(l2)
    expect(P.x).toBeCloseTo(A1.x)
    expect(P.y).toBeCloseTo(A1.y)

  it "passesThroughPoint", () ->
    A1 = new BLADE.Point2(Math.random(), Math.random())
    A2 = new BLADE.Point2(Math.random(), Math.random())
    A3 = new BLADE.Point2(Math.random(), Math.random())

    l = A1.joinToPoint(A2)
    expect(l.passesThroughPoint(A1, epsilon)).toBe(true)
    expect(l.passesThroughPoint(A2, epsilon)).toBe(true)
    expect(l.passesThroughPoint(A3, epsilon)).toBe(false)

  it "A reflection in the line y=k should map the point [x,y] to [x, 2k-y]", () ->
    k = Math.random()
    A1 = new BLADE.Point2(0, k)
    A2 = new BLADE.Point2(1, k)
    P = new BLADE.Point2(Math.random(), Math.random())

    l = A1.joinToPoint(A2)
    R = l.reflectPoint(P)
    expect(R.x).toBe(P.x)
    expect(R.y).toBe((2 * k) - P.y)

  it "A reflection in the line x=k should map the point [x,y] to [2k-x, y]", () ->
    k = Math.random()
    A1 = new BLADE.Point2(k, 0)
    A2 = new BLADE.Point2(k, 1)
    P = new BLADE.Point2(Math.random(), Math.random())

    l = A1.joinToPoint(A2)
    R = l.reflectPoint(P)
    expect(R.x).toBe((2 * k) - P.x)
    expect(R.y).toBe(P.y)

  it "A point reflected in a line twice should map back to itself.", () ->
    A1 = new BLADE.Point2(Math.random(), Math.random())
    A2 = new BLADE.Point2(Math.random(), Math.random())
    P = new BLADE.Point2(Math.random(), Math.random())

    l = A1.joinToPoint(A2)
    Q = l.reflectPoint(P)
    R = l.reflectPoint(Q)
    expect(R.x).toBeCloseTo(P.x)
