((scope, objName, modName)->
  'use strict'
  CARTESIAN_2 = "Cartesian2"
  CARTESIAN_3 = "Cartesian3"

  BLADE = VERSION: "0.1.0" 

  ###
    Cartesian2 is a multivector for the Geometric Algebra of 2D Euclidean space with Cartesian coordinates.
    The even subalgebra of this Geometric Algebra is isomorphic to the complex numbers.
  ###
  class Cartesian2
    constructor: (@w, @x, @y, @xy) ->

  BLADE[CARTESIAN_2] = Cartesian2

  ###
    Cartesian3 is a multivector for the Geometric Algebra of 3D Euclidean space with Cartesian coordinates.
  ###
  class Cartesian3
    constructor: (@w, @x, @y, @z, @xy, @yz, @zx, @xyz) ->

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
