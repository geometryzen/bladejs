((scope, modName)->
  'use strict'

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

    toString: () -> bladeSTR.stringFromCoordinates(@_coordinates, ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"])
    toStringIJK: () -> bladeSTR.stringFromCoordinates(@_coordinates, ["1", "i", "j", "k", "ij", "jk", "ki", "I"])
    toStringLATEX: () -> bladeSTR.stringFromCoordinates(@_coordinates, ["1", "e_{1}", "e_{2}", "e_{3}", "e_{12}", "e_{23}", "e_{31}", "e_{123}"])

  if typeof scope is "object" and scope.document and typeof scope.document is "object"

    scope[modName] = scope[modName] or {}
    scope[modName]["Euclidean3"] = Euclidean3

  return
)((if (typeof window is 'object') then window else (if (typeof module is 'object') then module else undefined)), 'BLADE')
