@BLADE = @BLADE or {}
BLADE = @BLADE
class Point2
  constructor: (x, y) ->
    @x = x
    @y = y

  joinToPoint: (point) ->
    x1 = @x
    y1 = @y
    x2 = point.x
    y2 = point.y
    return new BLADE.Line2(y1 - y2, x2 - x1, x1 * y2 - x2 * y1)

  liesOnLine: (line, epsilon) ->
    return Math.abs(line.a * @x + line.b * @y + line.c) < epsilon

  quadrance: (point) ->
    x1 = @x
    y1 = @y
    x2 = point.x
    y2 = point.y
    dx = x2 - x1
    dy = y2 - y1
    return dx * dx + dy * dy

  reflectAboutLine: (line) ->
    a = line.a
    aSquared = a * a
    b = line.b
    bSquared = b * b
    c = line.c
    denom = aSquared - bSquared
    sqsum = aSquared + bSquared
    x = @x
    y = @y
    u = - (2 * a * (b * y + c) + x * sqsum)/denom
    v = (2 * b * (a * x + c) + y * sqsum)/denom
    return new BLADE.Point2(u, v)

  signedArea: (pointA2, pointA3) ->
    v1 = @vectorTo(pointA2)
    v2 = @vectorTo(pointA3)
    return v1.wedge(v2).mul(new BLADE.Euclidean2(0.5, 0, 0, 0))

  vectorTo: (point) ->
    return new BLADE.Euclidean2(0, point.x - @x, point.y - @y, 0)

@BLADE.Point2 = Point2
