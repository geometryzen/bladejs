((scope, objName, modName)->
  'use strict'
  EUCLIDEAN_2 = "Euclidean2"
  EUCLIDEAN_3 = "Euclidean3"

  BLADE = BLADE or {}

  stringFromCoordinates = (coordinates, labels) ->
    sb = []
    append = (number, label) ->
      if number isnt 0
        # Determine and conditionally add a sign.
        if number >= 0
          if sb.length > 0
            sb.push "+"
        else
          sb.push "-"
        # If the absolute value of the number is unity then we only need the label.
        n = Math.abs number
        if n is 1
          sb.push label
        else
          sb.push n.toString()
          # We only need the label if it contributes under multiplication.
          if label isnt "1"
            sb.push "*"
            sb.push label
    for i in [0..coordinates.length - 1]
      append coordinates[i], labels[i]
    if sb.length > 0
      str = sb.join ""
    else
      str = "0"
    return str

  ###
    Euclidean2 is a multivector for the Geometric Algebra of 2D Euclidean space with Cartesian coordinates.
    The even subalgebra of this Geometric Algebra is isomorphic to the complex numbers.
  ###
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
      a0 = a[0]
      a1 = a[1]
      a2 = a[2]
      a3 = a[3]
      b0 = b[0]
      b1 = b[1]
      b2 = b[2]
      b3 = b[3]
      x0 = bladeASM.addEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
      x1 = bladeASM.addEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
      x2 = bladeASM.addEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
      x3 = bladeASM.addEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
      return [x0, x1, x2, x3]

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
      x0 = bladeASM.subEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
      x1 = bladeASM.subEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
      x2 = bladeASM.subEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
      x3 = bladeASM.subEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
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
      x0 = bladeASM.mulEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 0)
      x1 = bladeASM.mulEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 1)
      x2 = bladeASM.mulEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 2)
      x3 = bladeASM.mulEuclidean2(a0, a1, a2, a3, b0, b1, b2, b3, 3)
      return [x0, x1, x2, x3]

    mul: (rhs) ->
      xs = Euclidean2.mul(@_coordinates, rhs._coordinates)
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

    @wedge: (a, b) ->
      xs = [0, 0, 0, 0]
      xs[0] = a[0] * b[0]
      xs[1] = a[0] * b[1] + a[1] * b[0]
      xs[2] = a[0] * b[2]               + a[2] * b[0]
      xs[3] = a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0]
      return xs

    wedge: (rhs) ->
      xs = Euclidean2.wedge(@_coordinates, rhs._coordinates)
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

    @lshift: (a, b) ->
      xs = [0, 0, 0, 0]
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3]
      xs[1] = a[0] * b[1]               - a[2] * b[3]
      xs[2] = a[0] * b[2] + a[1] * b[3]
      xs[3] = a[0] * b[3]
      return xs

    lshift: (rhs) ->
      xs = Euclidean2.lshift(@_coordinates, rhs._coordinates)
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

    @rshift: (a, b) ->
      xs = [0, 0, 0, 0]
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3]
      xs[1] =             - a[1] * b[0]               - a[3] * b[2]
      xs[2] =                           - a[2] * b[0] + a[3] * b[1]
      xs[3] =                                           a[3] * b[0]
      return xs

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

    toString: () -> stringFromCoordinates(@_coordinates, ["1", "e1", "e2", "e12"])
    toStringIJK: () -> stringFromCoordinates(@_coordinates, ["1", "i", "j", "I"])
    toStringLATEX: () -> stringFromCoordinates(@_coordinates, ["1", "e_{1}", "e_{2}", "e_{12}"])

  BLADE[EUCLIDEAN_2] = Euclidean2

  ###
    Euclidean3 is a multivector for the Geometric Algebra of 3D Euclidean space with Cartesian coordinates.
  ###
  class Euclidean3
    constructor: (w, x, y, z, xy, yz, zx, xyz) ->
      @_coordinates = [w, x, y, z, xy, yz, zx, xyz]

    @fromCartesian: (w, x, y, z, xy, yz, zx, xyz) ->
      return new Euclidean3(w, x, y, z, xy, yz, zx, xyz)

    coordinates: -> [@_coordinates[0], @_coordinates[1], @_coordinates[2], @_coordinates[3], @_coordinates[4], @_coordinates[5], @_coordinates[6], @_coordinates[7]]

    coordinate: (index) ->
      switch index
        when 0
          return @_coordinates[0]
        when 1
          return @_coordinates[1]
        when 2
          return @_coordinates[2]
        when 3
          return @_coordinates[3]
        when 4
          return @_coordinates[4]
        when 5
          return @_coordinates[5]
        when 6
          return @_coordinates[6]
        when 7
          return @_coordinates[7]
        else
          throw new Error "index must be in the range [0..7]"

    @compute: (f, a, b, coord, pack) ->
      a0 = coord(a, 0)
      a1 = coord(a, 1)
      a2 = coord(a, 2)
      a3 = coord(a, 3)
      a4 = coord(a, 4)
      a5 = coord(a, 5)
      a6 = coord(a, 6)
      a7 = coord(a, 7)
      b0 = coord(b, 0)
      b1 = coord(b, 1)
      b2 = coord(b, 2)
      b3 = coord(b, 3)
      b4 = coord(b, 4)
      b5 = coord(b, 5)
      b6 = coord(b, 6)
      b7 = coord(b, 7)
      x0 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0)
      x1 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1)
      x2 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2)
      x3 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3)
      x4 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4)
      x5 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5)
      x6 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6)
      x7 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7)
      return pack(x0, x1, x2, x3, x4, x5, x6, x7)

    add: (rhs) ->
      coord = (x,n) -> x[n]
      pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
      return Euclidean3.compute(bladeASM.addE3, @_coordinates, rhs._coordinates, coord, pack)

    sub: (rhs) ->
      coord = (x,n) -> x[n]
      pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
      return Euclidean3.compute(bladeASM.subE3, @_coordinates, rhs._coordinates, coord, pack)

    mul: (rhs) ->
      coord = (x,n) -> x[n]
      pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
      return Euclidean3.compute(bladeASM.mulE3, @_coordinates, rhs._coordinates, coord, pack)

    wedge: (rhs) ->
      coord = (x,n) -> x[n]
      pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
      return Euclidean3.compute(bladeASM.extE3, @_coordinates, rhs._coordinates, coord, pack)

    lshift: (rhs) ->
      coord = (x,n) -> x[n]
      pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
      return Euclidean3.compute(bladeASM.lcoE3, @_coordinates, rhs._coordinates, coord, pack)

    rshift: (rhs) ->
      coord = (x,n) -> x[n]
      pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
      return Euclidean3.compute(bladeASM.rcoE3, @_coordinates, rhs._coordinates, coord, pack)

    grade: (index) ->
      switch index
        when 0
          return Euclidean3.fromCartesian(@_coordinates[0], 0, 0, 0, 0, 0, 0, 0)
        when 1
          return Euclidean3.fromCartesian(0, @_coordinates[1], @_coordinates[2], @_coordinates[3], 0, 0, 0, 0)
        when 2
          return Euclidean3.fromCartesian(0, 0, 0, 0, @_coordinates[4], @_coordinates[5], @_coordinates[6], 0)
        when 3
          return Euclidean3.fromCartesian(0, 0, 0, 0, 0, 0, 0, @_coordinates[7])
        else
          return Euclidean3.fromCartesian(0, 0, 0, 0, 0, 0, 0, 0, 0)

    toString: () -> stringFromCoordinates(@_coordinates, ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"])
    toStringIJK: () -> stringFromCoordinates(@_coordinates, ["1", "i", "j", "k", "ij", "jk", "ki", "I"])
    toStringLATEX: () -> stringFromCoordinates(@_coordinates, ["1", "e_{1}", "e_{2}", "e_{3}", "e_{12}", "e_{23}", "e_{31}", "e_{123}"])

  BLADE[EUCLIDEAN_3] = Euclidean3

  # Expose BLADE according to the execution environment.
  if typeof scope is "object" and scope and typeof scope.exports is "object"
    # Expose BLADE as module.exports in loaders that implement the Node
    # module pattern (including browserify). Do not create the global, since
    # the user will be storing it themselves locally, and globals are frowned
    # upon in the Node module world.
    module.exports = BLADE
  else if typeof define is "function" and define.amd
    # Register as a named AMD module, since BLADE can be concatenated with other
    # files that may use define, but not via a proper concatenation script that
    # understands anonymous AMD modules. A named AMD is safest and most robust
    # way to register. Lowercase blade is used because AMD module names are
    # derived from file names, and BLADE is normally delivered in a lowercase
    # file name. Do this after creating the global so that if an AMD module wants
    # to call noConflict to hide this version of BLADE, it will work.
    define modName, [], () -> BLADE

  # If there is a global object, that at least has a document property, then we assume that it is the
  # window object and install it in the window object as a property.
  if typeof scope is "object" and scope.document and typeof scope.document is "object"
    scope[objName] = BLADE

  return
)((if (typeof window is 'object') then window else undefined), 'BLADE', 'blade')
