((scope, objName, modName)->
  'use strict'
  CARTESIAN_2 = "Cartesian2"
  CARTESIAN_3 = "Cartesian3"

  BLADE = VERSION: "0.0.3"

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
    Cartesian2 is a multivector for the Geometric Algebra of 2D Euclidean space with Cartesian coordinates.
    The even subalgebra of this Geometric Algebra is isomorphic to the complex numbers.
  ###
  class Cartesian2
    constructor: (w, x, y, xy) ->
      @xs = [w, x, y, xy]
      @length = 4

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

    add: (rhs) -> new Cartesian2(
      @coordinate(0) + rhs.coordinate(0),
      @coordinate(1) + rhs.coordinate(1),
      @coordinate(2) + rhs.coordinate(2),
      @coordinate(3) + rhs.coordinate(3))

    sub: (rhs) -> new Cartesian2(
      @coordinate(0) - rhs.coordinate(0),
      @coordinate(1) - rhs.coordinate(1),
      @coordinate(2) - rhs.coordinate(2),
      @coordinate(3) - rhs.coordinate(3))

    @mul: (a, b) ->
      xs = [0, 0, 0, 0]
      xs[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[3] * b[3]
      xs[1] = a[0] * b[1] + a[1] * b[0] - a[2] * b[3] + a[3] * b[2]
      xs[2] = a[0] * b[2] + a[1] * b[3] + a[2] * b[0] - a[3] * b[1]
      xs[3] = a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0]
      return xs

    mul: (rhs) ->
      xs = Cartesian2.mul(@.xs, rhs.xs)
      return new Cartesian2(xs[0], xs[1], xs[2], xs[3])

    toString: () -> stringFromMultivector(@, ["1", "e1", "e2", "e12"])
    toStringIJK: () -> stringFromMultivector(@, ["1", "i", "j", "I"])
    toStringLATEX: () -> stringFromMultivector(@, ["1", "e_{1}", "e_{2}", "e_{12}"])

  BLADE[CARTESIAN_2] = Cartesian2

  ###
    Cartesian3 is a multivector for the Geometric Algebra of 3D Euclidean space with Cartesian coordinates.
  ###
  class Cartesian3
    constructor: (w, x, y, z, xy, yz, zx, xyz) ->
      @xs = [w, x, y, z, xy, yz, zx, xyz]
      @length = 8

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

    add: (rhs) -> new Cartesian3(
      @coordinate(0) + rhs.coordinate(0),
      @coordinate(1) + rhs.coordinate(1),
      @coordinate(2) + rhs.coordinate(2),
      @coordinate(3) + rhs.coordinate(3),
      @coordinate(4) + rhs.coordinate(4),
      @coordinate(5) + rhs.coordinate(5),
      @coordinate(6) + rhs.coordinate(6),
      @coordinate(7) + rhs.coordinate(7)
    )

    sub: (rhs) -> new Cartesian3(
      @coordinate(0) - rhs.coordinate(0),
      @coordinate(1) - rhs.coordinate(1),
      @coordinate(2) - rhs.coordinate(2),
      @coordinate(3) - rhs.coordinate(3),
      @coordinate(4) - rhs.coordinate(4),
      @coordinate(5) - rhs.coordinate(5),
      @coordinate(6) - rhs.coordinate(6),
      @coordinate(7) - rhs.coordinate(7)
    )

    toString: () -> stringFromMultivector(@, ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"])
    toStringIJK: () -> stringFromMultivector(@, ["1", "i", "j", "k", "ij", "jk", "ki", "I"])
    toStringLATEX: () -> stringFromMultivector(@, ["1", "e_{1}", "e_{2}", "e_{3}", "e_{12}", "e_{23}", "e_{31}", "e_{123}"])

  BLADE[CARTESIAN_3] = Cartesian3

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
