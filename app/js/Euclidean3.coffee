@BLADE = @BLADE or {}
BLADE = @BLADE
class Euclidean3
  constructor: (w, x, y, z, xy, yz, zx, xyz) ->
    @w   = w or 0
    @x   = x or 0
    @y   = y or 0
    @z   = z or 0
    @xy  = xy or 0
    @yz  = yz or 0
    @zx  = zx or 0
    @xyz = xyz or 0

  @fromCartesian: (w, x, y, z, xy, yz, zx, xyz) ->
    return new BLADE.Euclidean3(w, x, y, z, xy, yz, zx, xyz)

  coordinates: -> [@w, @x, @y, @z, @xy, @yz, @zx, @xyz]

  coordinate: (index) ->
    switch index
      when 0
        return @w
      when 1
        return @x
      when 2
        return @y
      when 3
        return @z
      when 4
        return @xy
      when 5
        return @yz
      when 6
        return @zx
      when 7
        return @xyz
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
    return Euclidean3.compute(BLADE.bladeASM.addE3, [@w, @x, @y, @z, @xy, @yz, @zx, @xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack)

  sub: (rhs) ->
    coord = (x,n) -> x[n]
    pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
    return Euclidean3.compute(BLADE.bladeASM.subE3, [@w, @x, @y, @z, @xy, @yz, @zx, @xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack)

  mul: (rhs) ->
    coord = (x,n) -> x[n]
    pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
    return Euclidean3.compute(BLADE.bladeASM.mulE3, [@w, @x, @y, @z, @xy, @yz, @zx, @xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack)

  wedge: (rhs) ->
    coord = (x,n) -> x[n]
    pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
    return Euclidean3.compute(BLADE.bladeASM.extE3, [@w, @x, @y, @z, @xy, @yz, @zx, @xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack)

  lshift: (rhs) ->
    coord = (x,n) -> x[n]
    pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
    return Euclidean3.compute(BLADE.bladeASM.lcoE3, [@w, @x, @y, @z, @xy, @yz, @zx, @xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack)

  rshift: (rhs) ->
    coord = (x,n) -> x[n]
    pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
    return Euclidean3.compute(BLADE.bladeASM.rcoE3, [@w, @x, @y, @z, @xy, @yz, @zx, @xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack)

  grade: (index) ->
    switch index
      when 0
        return Euclidean3.fromCartesian(@w, 0, 0, 0, 0, 0, 0, 0)
      when 1
        return Euclidean3.fromCartesian(0, @x, @y, @z, 0, 0, 0, 0)
      when 2
        return Euclidean3.fromCartesian(0, 0, 0, 0, @xy, @yz, @zx, 0)
      when 3
        return Euclidean3.fromCartesian(0, 0, 0, 0, 0, 0, 0, @xyz)
      else
        return Euclidean3.fromCartesian(0, 0, 0, 0, 0, 0, 0, 0)

  toString: () -> BLADE.bladeSTR.stringFromCoordinates([@w, @x, @y, @z, @xy, @yz, @zx, @xyz], ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"])
  toStringIJK: () -> BLADE.bladeSTR.stringFromCoordinates([@w, @x, @y, @z, @xy, @yz, @zx, @xyz], ["1", "i", "j", "k", "ij", "jk", "ki", "I"])
  toStringLATEX: () -> BLADE.bladeSTR.stringFromCoordinates([@w, @x, @y, @z, @xy, @yz, @zx, @xyz], ["1", "e_{1}", "e_{2}", "e_{3}", "e_{12}", "e_{23}", "e_{31}", "e_{123}"])

@BLADE.Euclidean3 = Euclidean3
