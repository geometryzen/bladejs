@BLADE = @BLADE or {}
BLADE = @BLADE
class Line2
  constructor: (a, b, c) ->
    @a = a
    @b = b
    @c = c

  meetWithLine: (line) ->
    a1 = @a
    b1 = @b
    c1 = @c
    a2 = line.a
    b2 = line.b
    c2 = line.c

    denom = a1 * b2 - a2 * b1
    return new BLADE.Point2((b1 * c2 - b2 * c1)/denom, (a2 * c1 - a1 * c2)/denom)

  passesThroughPoint: (point, epsilon) ->
    return Math.abs(@a * point.x + @b * point.y + @c) < epsilon

  reflectPoint: (point) ->
    a = @a
    aSquared = a * a
    b = @b
    bSquared = b * b
    c = @c
    denom = aSquared - bSquared
    sqsum = aSquared + bSquared
    x = point.x
    y = point.y
    u = - (2 * a * (b * y + c) + x * sqsum)/denom
    v = (2 * b * (a * x + c) + y * sqsum)/denom
    return new BLADE.Point2(u, v)

@BLADE.Line2 = Line2
