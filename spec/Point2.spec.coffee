describe "Point2", () ->

  epsilon = Math.pow(10, -15)

  isCloseTo = (a, b, precision) ->
    return Math.abs(a - b) < Math.pow(10, -precision)

  it "Construction", () ->
    x = Math.random()
    y = Math.random()

    A = new BLADE.Point2(x, y)
    expect(A.x).toBe(x)
    expect(A.y).toBe(y)

  it "joinToPoint", () ->
    A1 = new BLADE.Point2(Math.random(), Math.random())
    A2 = new BLADE.Point2(Math.random(), Math.random())

    l = A1.joinToPoint(A2)
    expect(l.a).toBe(A1.y-A2.y)
    expect(l.b).toBe(A2.x-A1.x)
    expect(l.c).toBe(A1.x * A2.y - A2.x * A1.y)

  it "liesOnTheLine", () ->
    A1 = new BLADE.Point2(Math.random(), Math.random())
    A2 = new BLADE.Point2(Math.random(), Math.random())
    A3 = new BLADE.Point2(Math.random(), Math.random())

    l = A1.joinToPoint(A2)
    expect(A1.liesOnLine(l, epsilon)).toBe(true)
    expect(A2.liesOnLine(l, epsilon)).toBe(true)
    expect(A3.liesOnLine(l, epsilon)).toBe(false)

  it "quadrance", () ->
    A1 = new BLADE.Point2(Math.random(), Math.random())
    A2 = new BLADE.Point2(Math.random(), Math.random())

    q = A1.quadrance(A2)
    expect(q).toBeCloseTo((A2.x-A1.x)*(A2.x-A1.x)+(A2.y-A1.y)*(A2.y-A1.y))

  it "A reflection about the line y=k should map the point [x,y] to [x, 2k-y]", () ->
    k = Math.random()
    A1 = new BLADE.Point2(0, k)
    A2 = new BLADE.Point2(1, k)
    P = new BLADE.Point2(Math.random(), Math.random())

    l = A1.joinToPoint(A2)
    R = P.reflectAboutLine(l)
    expect(R.x).toBe(P.x)
    expect(R.y).toBe((2*k)-P.y)

  it "A reflection about the line x=k should map the point [x,y] to [2k-x, y]", () ->
    k = Math.random()
    A1 = new BLADE.Point2(k, 0)
    A2 = new BLADE.Point2(k, 1)
    P = new BLADE.Point2(Math.random(), Math.random())

    l = A1.joinToPoint(A2)
    R = P.reflectAboutLine(l)
    expect(R.x).toBe((2 * k) - P.x)
    expect(R.y).toBe(P.y)

  it "A point reflected about a line twice should map back to itself.", () ->
    A1 = new BLADE.Point2(Math.random(), Math.random())
    A2 = new BLADE.Point2(Math.random(), Math.random())
    P = new BLADE.Point2(Math.random(), Math.random())

    l = A1.joinToPoint(A2)
    Q = P.reflectAboutLine(l)
    R = Q.reflectAboutLine(l)
    expect(R.x).toBeCloseTo(P.x)

  it "signedArea", () ->
    A1 = new BLADE.Point2(Math.random(), Math.random())
    A2 = new BLADE.Point2(Math.random(), Math.random())
    A3 = new BLADE.Point2(Math.random(), Math.random())

    B = A1.signedArea(A2, A3)
    expect(B.coordinate(0)).toBe(0)
    expect(B.coordinate(1)).toBe(0)
    expect(B.coordinate(2)).toBeCloseTo(0)
    expect(B.coordinate(3)).toBeCloseTo((A1.x * A2.y - A2.x * A1.y + A2.x * A3.y - A3.x * A2.y + A3.x * A1.y - A1.x * A3.y)/2)

  it "vectorTo", () ->
    A1 = new BLADE.Point2(Math.random(), Math.random())
    A2 = new BLADE.Point2(Math.random(), Math.random())

    v = A1.vectorTo(A2)
    expect(v.coordinate(0)).toBe(0)
    expect(v.coordinate(1)).toBe(A2.x - A1.x)
    expect(v.coordinate(2)).toBe(A2.y - A1.y)
    expect(v.coordinate(3)).toBe(0)
