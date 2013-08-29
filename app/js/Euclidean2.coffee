@BLADE = @BLADE or {}
BLADE = @BLADE

divide = (a00, a01, a10, a11, b00, b01, b10, b11, m) ->
  # r = ~b
  r00 = +b00
  r01 = +b01
  r10 = +b10
  r11 = -b11
  # m = b * r
  m00 = b00 * r00 + b01 * r01 + b10 * r10 - b11 * r11
  m01 = 0
  m10 = 0
  m11 = 0
  # c = cliffordConjugate(m)
  c00 = +m00
  c01 = -m01
  c10 = -m10
  c11 = -m11
  # s = r * c
  s00 = r00 * c00 + r01 * c01 + r10 * c10 - r11 * c11
  s01 = r00 * c01 + r01 * c00 - r10 * c11 + r11 * c10
  s10 = r00 * c10 + r01 * c11 + r10 * c00 - r11 * c01
  s11 = r00 * c11 + r01 * c10 - r10 * c01 + r11 * c00
  # k = b * s
  k00 = b00 * s00 + b01 * s01 + b10 * s10 - b11 * s11
  # i = inverse(b)
  i00 = s00/k00
  i01 = s01/k00
  i10 = s10/k00
  i11 = s11/k00
  # x = a * inverse(b)
  x00 = a00 * i00 + a01 * i01 + a10 * i10 - a11 * i11
  x01 = a00 * i01 + a01 * i00 - a10 * i11 + a11 * i10
  x10 = a00 * i10 + a01 * i11 + a10 * i00 - a11 * i01
  x11 = a00 * i11 + a01 * i10 - a10 * i01 + a11 * i00
  if typeof m isnt 'undefined'
    m.w  = x00
    m.x  = x01
    m.y  = x10
    m.xy = x11
  else
    return new BLADE.Euclidean2(x00, x01, x10, x11)

class Euclidean2
  constructor: (w, x, y, xy) ->
    @w  = w or 0
    @x  = x
    @y  = y
    @xy = xy

  @fromCartesian: (w, x, y, xy) ->
    return new BLADE.Euclidean2(w, x, y, xy)

  @fromPolar: (w, r, theta, s) ->
    return new BLADE.Euclidean2(w, r * Math.cos(theta), r * Math.sin(theta), s)

  coordinates: -> [@w, @x, @y, @xy]

  coordinate: (index) ->
    switch(index)
      when 0
        return @w
      when 1
        return @x
      when 2
        return @y
      when 3
        return @xy
      else
        throw new Error "index must be in the range [0..3]"

  @add: (a, b) ->
    a00 = a[0]
    a01 = a[1]
    a10 = a[2]
    a11 = a[3]
    b00 = b[0]
    b01 = b[1]
    b10 = b[2]
    b11 = b[3]
    x00 = BLADE.e2gaASM.add00(a00, a01, a10, a11, b00, b01, b10, b11)
    x01 = BLADE.e2gaASM.add01(a00, a01, a10, a11, b00, b01, b10, b11)
    x10 = BLADE.e2gaASM.add10(a00, a01, a10, a11, b00, b01, b10, b11)
    x11 = BLADE.e2gaASM.add11(a00, a01, a10, a11, b00, b01, b10, b11)
    return [x00, x01, x10, x11]

  add: (rhs) ->
    xs = Euclidean2.add(@coordinates(), rhs.coordinates())
    return new BLADE.Euclidean2(xs[0], xs[1], xs[2], xs[3])

  @sub: (a, b) ->
    a0 = a[0]
    a1 = a[1]
    a2 = a[2]
    a3 = a[3]
    b0 = b[0]
    b1 = b[1]
    b2 = b[2]
    b3 = b[3]
    x0 = BLADE.bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
    x1 = BLADE.bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
    x2 = BLADE.bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
    x3 = BLADE.bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
    return [x0, x1, x2, x3]

  sub: (rhs) ->
    xs = Euclidean2.sub(@coordinates(), rhs.coordinates())
    return new BLADE.Euclidean2(xs[0], xs[1], xs[2], xs[3])

  @mul: (a, b) ->
    a0 = a[0]
    a1 = a[1]
    a2 = a[2]
    a3 = a[3]
    b0 = b[0]
    b1 = b[1]
    b2 = b[2]
    b3 = b[3]
    x0 = BLADE.bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
    x1 = BLADE.bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
    x2 = BLADE.bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
    x3 = BLADE.bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
    return [x0, x1, x2, x3]

  mul: (rhs) ->
    if typeof rhs is 'number'
      return new BLADE.Euclidean2(@w * rhs, @x * rhs, @y * rhs, @xy * rhs)
    else
      xs = Euclidean2.mul(@coordinates(), rhs.coordinates())
      return new BLADE.Euclidean2(xs[0], xs[1], xs[2], xs[3])

  div: (rhs) ->
    if typeof rhs is 'number'
      return new BLADE.Euclidean2(@w / rhs, @x / rhs, @y / rhs, @xy / rhs);
    else
      return divide(@w, @x, @y, @xy, rhs.w, rhs.x, rhs.y, rhs.xy, undefined)

  @wedge: (a, b) ->
    a0 = a[0]
    a1 = a[1]
    a2 = a[2]
    a3 = a[3]
    b0 = b[0]
    b1 = b[1]
    b2 = b[2]
    b3 = b[3]
    x0 = BLADE.bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
    x1 = BLADE.bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
    x2 = BLADE.bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
    x3 = BLADE.bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
    return [x0, x1, x2, x3]

  wedge: (rhs) ->
    xs = Euclidean2.wedge(@coordinates(), rhs.coordinates())
    return new BLADE.Euclidean2(xs[0], xs[1], xs[2], xs[3])

  @lshift: (a, b) ->
    a0 = a[0]
    a1 = a[1]
    a2 = a[2]
    a3 = a[3]
    b0 = b[0]
    b1 = b[1]
    b2 = b[2]
    b3 = b[3]
    x0 = BLADE.bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
    x1 = BLADE.bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
    x2 = BLADE.bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
    x3 = BLADE.bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
    return [x0, x1, x2, x3]

  lshift: (rhs) ->
    xs = Euclidean2.lshift(@coordinates(), rhs.coordinates())
    return new BLADE.Euclidean2(xs[0], xs[1], xs[2], xs[3])

  @rshift: (a, b) ->
    a0 = a[0]
    a1 = a[1]
    a2 = a[2]
    a3 = a[3]
    b0 = b[0]
    b1 = b[1]
    b2 = b[2]
    b3 = b[3]
    x0 = BLADE.bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
    x1 = BLADE.bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
    x2 = BLADE.bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
    x3 = BLADE.bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
    return [x0, x1, x2, x3]
#      xs = [0, 0, 0, 0]
#      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3]
#      xs[1] =             - a[1] * b[0]               - a[3] * b[2]
#      xs[2] =                           - a[2] * b[0] + a[3] * b[1]
#      xs[3] =                                           a[3] * b[0]
#      return xs

  rshift: (rhs) ->
    xs = Euclidean2.rshift(@coordinates(), rhs.coordinates())
    return new BLADE.Euclidean2(xs[0], xs[1], xs[2], xs[3])

  grade: (index) ->
    switch index
      when 0
        return new BLADE.Euclidean2(@w, 0, 0, 0)
      when 1
        return new BLADE.Euclidean2(0, @x, @y, 0)
      when 2
        return new BLADE.Euclidean2(0, 0, 0, @xy)
      else
        return new BLADE.Euclidean2(0, 0, 0, 0)

  quadrance: () ->
    w = @w
    x = @x
    y = @y
    xy = @xy;
    return w * w + x * x + y * y + xy * xy

  isNaN: () -> isNaN(@w) or isNaN(@x) or isNaN(@y) or isNaN(@xy)

  toString: () -> BLADE.bladeSTR.stringFromCoordinates([@w, @x, @y, @xy], ["1", "e1", "e2", "e12"])
  toStringIJK: () -> BLADE.bladeSTR.stringFromCoordinates(@coordinates(), ["1", "i", "j", "I"])
  toStringLATEX: () -> BLADE.bladeSTR.stringFromCoordinates(@coordinates(), ["1", "e_{1}", "e_{2}", "e_{12}"])

@BLADE.Euclidean2 = Euclidean2
