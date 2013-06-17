((scope, objName, modName)->
  'use strict'
  EUCLIDEAN_2 = "Euclidean2"
  EUCLIDEAN_3 = "Euclidean3"

  BLADE = BLADE or {}

  stringFromMultivector = (m, labels) ->
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
    for i in [0..m.length - 1]
      append m.coordinate(i), labels[i]
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
      @xs = [w, x, y, xy]
      @length = 4

    @fromCartesian: (w, x, y, xy) ->
      return new Euclidean2(w, x, y, xy)

    @fromPolar: (w, r, theta, s) ->
      return new Euclidean2(w, r * Math.cos(theta), r * Math.sin(theta), s)

    coordinates: -> [@xs[0], @xs[1], @xs[2], @xs[3]]

    coordinate: (index) ->
      switch(index)
        when 0
          return @xs[0]
        when 1
          return @xs[1]
        when 2
          return @xs[2]
        when 3
          return @xs[3]
        else
          throw new Error "index must be in the range [0..3]"

    @add: (a, b) ->
      xs = [0, 0, 0, 0]
      xs[0] = a[0] + b[0]
      xs[1] = a[1] + b[1]
      xs[2] = a[2] + b[2]
      xs[3] = a[3] + b[3]
      return xs

    add: (rhs) ->
      xs = Euclidean2.add(@.xs, rhs.xs)
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

    @sub: (a, b) ->
      xs = [0, 0, 0, 0]
      xs[0] = a[0] - b[0]
      xs[1] = a[1] - b[1]
      xs[2] = a[2] - b[2]
      xs[3] = a[3] - b[3]
      return xs

    sub: (rhs) ->
      xs = Euclidean2.sub(@.xs, rhs.xs)
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

    @mul: (a, b) ->
      xs = [0, 0, 0, 0]
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3]
      xs[1] = a[0] * b[1] + a[1] * b[0] - a[2] * b[3] + a[3] * b[2]
      xs[2] = a[0] * b[2] + a[1] * b[3] + a[2] * b[0] - a[3] * b[1]
      xs[3] = a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0]
      return xs

    mul: (rhs) ->
      xs = Euclidean2.mul(@.xs, rhs.xs)
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

    @wedge: (a, b) ->
      xs = [0, 0, 0, 0]
      xs[0] = a[0] * b[0]
      xs[1] = a[0] * b[1] + a[1] * b[0]
      xs[2] = a[0] * b[2]               + a[2] * b[0]
      xs[3] = a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0]
      return xs

    wedge: (rhs) ->
      xs = Euclidean2.wedge(@.xs, rhs.xs)
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

    @lshift: (a, b) ->
      xs = [0, 0, 0, 0]
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3]
      xs[1] = a[0] * b[1]               - a[2] * b[3]
      xs[2] = a[0] * b[2] + a[1] * b[3]
      xs[3] = a[0] * b[3]
      return xs

    lshift: (rhs) ->
      xs = Euclidean2.lshift(@.xs, rhs.xs)
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

    @rshift: (a, b) ->
      xs = [0, 0, 0, 0]
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3]
      xs[1] =             - a[1] * b[0]               - a[3] * b[2]
      xs[2] =                           - a[2] * b[0] + a[3] * b[1]
      xs[3] =                                           a[3] * b[0]
      return xs

    rshift: (rhs) ->
      xs = Euclidean2.rshift(@.xs, rhs.xs)
      return Euclidean2.fromCartesian(xs[0], xs[1], xs[2], xs[3])

    toString: () -> stringFromMultivector(@, ["1", "e1", "e2", "e12"])
    toStringIJK: () -> stringFromMultivector(@, ["1", "i", "j", "I"])
    toStringLATEX: () -> stringFromMultivector(@, ["1", "e_{1}", "e_{2}", "e_{12}"])

  BLADE[EUCLIDEAN_2] = Euclidean2

  ###
    Euclidean3 is a multivector for the Geometric Algebra of 3D Euclidean space with Cartesian coordinates.
  ###
  class Euclidean3
    constructor: (w, x, y, z, xy, yz, zx, xyz) ->
      @xs = [w, x, y, z, xy, yz, zx, xyz]
      @length = 8

    @fromCartesian: (w, x, y, z, xy, yz, zx, xyz) ->
      return new Euclidean3(w, x, y, z, xy, yz, zx, xyz)

    coordinates: -> [@xs[0], @xs[1], @xs[2], @xs[3], @xs[4], @xs[5], @xs[6], @xs[7]]

    coordinate: (index) ->
      switch(index)
        when 0
          return @xs[0]
        when 1
          return @xs[1]
        when 2
          return @xs[2]
        when 3
          return @xs[3]
        when 4
          return @xs[4]
        when 5
          return @xs[5]
        when 6
          return @xs[6]
        when 7
          return @xs[7]
        else
          throw new Error "index must be in the range [0..7]"

    @add: (a, b) ->
      xs = [0, 0, 0, 0, 0, 0, 0, 0]
      xs[0] = a[0] + b[0]
      xs[1] = a[1] + b[1]
      xs[2] = a[2] + b[2]
      xs[3] = a[3] + b[3]
      xs[4] = a[4] + b[4]
      xs[5] = a[5] + b[5]
      xs[6] = a[6] + b[6]
      xs[7] = a[7] + b[7]
      return xs

    add: (rhs) ->
      xs = Euclidean3.add(@.xs, rhs.xs)
      return Euclidean3.fromCartesian(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7])

    @sub: (a, b) ->
      xs = [0, 0, 0, 0, 0, 0, 0, 0]
      xs[0] = a[0] - b[0]
      xs[1] = a[1] - b[1]
      xs[2] = a[2] - b[2]
      xs[3] = a[3] - b[3]
      xs[4] = a[4] - b[4]
      xs[5] = a[5] - b[5]
      xs[6] = a[6] - b[6]
      xs[7] = a[7] - b[7]
      return xs

    sub: (rhs) ->
      xs = Euclidean3.sub(@.xs, rhs.xs)
      return Euclidean3.fromCartesian(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7])

    toString: () -> stringFromMultivector(@, ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"])
    toStringIJK: () -> stringFromMultivector(@, ["1", "i", "j", "k", "ij", "jk", "ki", "I"])
    toStringLATEX: () -> stringFromMultivector(@, ["1", "e_{1}", "e_{2}", "e_{3}", "e_{12}", "e_{23}", "e_{31}", "e_{123}"])

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
  if typeof scope is "object" and typeof scope.document is "object"
    scope[objName] = BLADE

  return
)(window, 'BLADE', 'blade')
