@BLADE = @BLADE or {}
BLADE = @BLADE
class Euclidean2
  constructor: (@w, @x, @y, @xy) ->

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
    return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

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
    return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

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
    xs = Euclidean2.mul(@coordinates(), rhs.coordinates())
    return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

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
    return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

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
    return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

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
    return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

  grade: (index) ->
    switch index
      when 0
        return Euclidean2.fromCartesian(@w, 0, 0, 0)
      when 1
        return Euclidean2.fromCartesian(0, @x, @y, 0)
      when 2
        return Euclidean2.fromCartesian(0, 0, 0, @xy)
      else
        return Euclidean2.fromCartesian(0, 0, 0, 0)

  quadrance: () ->
    w = @w
    x = @x
    y = @y
    xy = @xy;
    return w * w + x * x + y * y + xy * xy

  toString: () -> BLADE.bladeSTR.stringFromCoordinates([@w, @x, @y, @xy], ["1", "e1", "e2", "e12"])
  toStringIJK: () -> BLADE.bladeSTR.stringFromCoordinates(@coordinates(), ["1", "i", "j", "I"])
  toStringLATEX: () -> BLADE.bladeSTR.stringFromCoordinates(@coordinates(), ["1", "e_{1}", "e_{2}", "e_{12}"])

@BLADE.Euclidean2 = Euclidean2
