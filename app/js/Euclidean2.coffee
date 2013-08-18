((scope)->
  'use strict'

  class Euclidean2
    constructor: (w, x, y, xy) ->
      @_coordinates = [w, x, y, xy]

    @fromCartesian: (w, x, y, xy) ->
      return new Euclidean2(w, x, y, xy)

    @fromPolar: (w, r, theta, s) ->
      return new Euclidean2(w, r * Math.cos(theta), r * Math.sin(theta), s)

    coordinates: -> [@_coordinates[0], @_coordinates[1], @_coordinates[2], @_coordinates[3]]

    coordinate: (index) ->
      switch(index)
        when 0
          return @_coordinates[0]
        when 1
          return @_coordinates[1]
        when 2
          return @_coordinates[2]
        when 3
          return @_coordinates[3]
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
      x00 = e2gaASM.add00(a00, a01, a10, a11, b00, b01, b10, b11)
      x01 = e2gaASM.add01(a00, a01, a10, a11, b00, b01, b10, b11)
      x10 = e2gaASM.add10(a00, a01, a10, a11, b00, b01, b10, b11)
      x11 = e2gaASM.add11(a00, a01, a10, a11, b00, b01, b10, b11)
      return [x00, x01, x10, x11]

    add: (rhs) ->
      xs = Euclidean2.add(@_coordinates, rhs._coordinates)
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
      x0 = bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
      x1 = bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
      x2 = bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
      x3 = bladeASM.subE2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
      return [x0, x1, x2, x3]

    sub: (rhs) ->
      xs = Euclidean2.sub(@_coordinates, rhs._coordinates)
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
      x0 = bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
      x1 = bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
      x2 = bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
      x3 = bladeASM.mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
      return [x0, x1, x2, x3]

    mul: (rhs) ->
      xs = Euclidean2.mul(@_coordinates, rhs._coordinates)
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
      x0 = bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
      x1 = bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
      x2 = bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
      x3 = bladeASM.extE2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
      return [x0, x1, x2, x3]

    wedge: (rhs) ->
      xs = Euclidean2.wedge(@_coordinates, rhs._coordinates)
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
      x0 = bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
      x1 = bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
      x2 = bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
      x3 = bladeASM.lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
      return [x0, x1, x2, x3]

    lshift: (rhs) ->
      xs = Euclidean2.lshift(@_coordinates, rhs._coordinates)
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
      x0 = bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
      x1 = bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
      x2 = bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
      x3 = bladeASM.rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
      return [x0, x1, x2, x3]
#      xs = [0, 0, 0, 0]
#      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3]
#      xs[1] =             - a[1] * b[0]               - a[3] * b[2]
#      xs[2] =                           - a[2] * b[0] + a[3] * b[1]
#      xs[3] =                                           a[3] * b[0]
#      return xs

    rshift: (rhs) ->
      xs = Euclidean2.rshift(@_coordinates, rhs._coordinates)
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

    grade: (index) ->
      switch index
        when 0
          return Euclidean2.fromCartesian(@_coordinates[0], 0, 0, 0)
        when 1
          return Euclidean2.fromCartesian(0, @_coordinates[1], @_coordinates[2], 0)
        when 2
          return Euclidean2.fromCartesian(0, 0, 0, @_coordinates[3])
        else
          return Euclidean2.fromCartesian(0, 0, 0, 0)

    toString: () -> bladeSTR.stringFromCoordinates(@_coordinates, ["1", "e1", "e2", "e12"])
    toStringIJK: () -> bladeSTR.stringFromCoordinates(@_coordinates, ["1", "i", "j", "I"])
    toStringLATEX: () -> bladeSTR.stringFromCoordinates(@_coordinates, ["1", "e_{1}", "e_{2}", "e_{12}"])

  if typeof scope is "object" and scope.document and typeof scope.document is "object"

    scope.BLADE = scope.BLADE or {}
    scope.BLADE.Euclidean2 = Euclidean2

  return
)((if (typeof window is 'object') then window else (if (typeof module is 'object') then module else undefined)))
