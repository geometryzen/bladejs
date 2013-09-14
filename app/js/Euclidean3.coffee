@BLADE = @BLADE or {}
BLADE = @BLADE

mulE3 = (a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) ->
  a0 = +a0
  a1 = +a1
  a2 = +a2
  a3 = +a3
  a4 = +a4
  a5 = +a5
  a6 = +a6
  a7 = +a7
  b0 = +b0
  b1 = +b1
  b2 = +b2
  b3 = +b3
  b4 = +b4
  b5 = +b5
  b6 = +b6
  b7 = +b7
  index = index|0
  x = 0.0
  switch ~(~index)
    when 0
      x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7)
    when 1
      x = +(a0 * b1 + a1 * b0 - a2 * b4 + a3 * b6 + a4 * b2 - a5 * b7 - a6 * b3 - a7 * b5)
    when 2
      x = +(a0 * b2 + a1 * b4 + a2 * b0 - a3 * b5 - a4 * b1 + a5 * b3 - a6 * b7 - a7 * b6)
    when 3
      x = +(a0 * b3 - a1 * b6 + a2 * b5 + a3 * b0 - a4 * b7 - a5 * b2 + a6 * b1 - a7 * b4)
    when 4
      x = +(a0 * b4 + a1 * b2 - a2 * b1 + a3 * b7 + a4 * b0 - a5 * b6 + a6 * b5 + a7 * b3)
    when 5
      x = +(a0 * b5 + a1 * b7 + a2 * b3 - a3 * b2 + a4 * b6 + a5 * b0 - a6 * b4 + a7 * b1)
    when 6
      x = +(a0 * b6 - a1 * b3 + a2 * b7 + a3 * b1 - a4 * b5 + a5 * b4 + a6 * b0 + a7 * b2)
    when 7
      x = +(a0 * b7 + a1 * b5 + a2 * b6 + a3 * b4 + a4 * b3 + a5 * b1 + a6 * b2 + a7 * b0)
  return +x

divide = (a000, a001, a010, a011, a100, a101, a110, a111, b000, b001, b010, b011, b100, b101, b110, b111, dst) ->
  # WARNING! mulE2 uses w,x,y,z,xy,yz,zx,xyz representation. Notice the ordering and sign change.
  # TODO: Move everything to the more systematic bitmap representation.
  # r = ~b = reverse(b)
  r000 = +b000 # w,   grade 0(+)
  r001 = +b001 # x,   grade 1(+)
  r010 = +b010 # y,   grade 1(+)
  r011 = -b011 # xy,  grade 2(-)
  r100 = +b100 # z,   grade 1(+)
  r101 = -b101 # yz,  grade 2(-)
  r110 = -b110 # yz,  grade 2(-)
  r111 = -b111 # xyz, grade 3(-)
  # m = b * r = b * (~b)
  # The grade 2 and grade 3 components evaluate to zero.
  m000 =  mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 0)
  m001 =  mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 1)
  m010 =  mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 2)
  m011 =  0
  m100 =  mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 3)
  m101 =  0
  m110 =  0
  m111 =  0
  # c = cliffordConjugate(m)
  c000 = +m000 # w,   grade 0(+)
  c001 = -m001 # x,   grade 1(-)
  c010 = -m010 # y,   grade 1(-)
  c011 = -m011 # xy,  grade 2(-)
  c100 = -m100 # z,   grade 1(-)
  c101 = -m101 # -zx, grade 2(-)
  c110 = -m110 # yz,  grade 2(-)
  c111 = +m111 # xyz, grade 3(+)
  # s = r * c
  # TODO: Presumably there is some simplified computation on account of the c's being sparse.
  s000 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 0)
  s001 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 1)
  s010 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 2)
  s011 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 4)
  s100 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 3)
  s101 = -mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 6)
  s110 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 5)
  s111 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 7)
  # k = b * s
  k000 =  mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, s000, s001, s010, s100, s011, s110, -s101, s111, 0)
  # i = inverse(b)
  i000 = s000/k000
  i001 = s001/k000
  i010 = s010/k000
  i011 = s011/k000
  i100 = s100/k000
  i101 = s101/k000
  i110 = s110/k000
  i111 = s111/k000
  # x = a * inverse(b)
  x000 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 0)
  x001 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 1)
  x010 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 2)
  x011 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 4)
  x100 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 3)
  x101 = -mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 6)
  x110 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 5)
  x111 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 7)
  # translate bitmap representation to Cartesian.
  w   =  x000
  x   =  x001
  y   =  x010
  z   =  x100
  xy  =  x011
  yz  =  x110
  zx  = -x101
  xyz =  x111
  # return or populate the optional dst parameter.
  if typeof dst isnt 'undefined'
    dst.w   = w
    dst.x   = x
    dst.y   = y
    dst.z   = z
    dst.xy  = xy
    dst.yz  = yz
    dst.zx  = zx
    dst.xyz = xyz
  else
    return new BLADE.Euclidean3(w, x, y, z, xy, yz, zx, xyz)

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
    if typeof rhs is 'number'
      return new BLADE.Euclidean3(@w * rhs, @x * rhs, @y * rhs, @z * rhs, @xy * rhs, @yz * rhs, @zx * rhs, @xyz * rhs)
    else
      coord = (x,n) -> x[n]
      pack = (w,x,y,z,xy,yz,zx,xyz) -> Euclidean3.fromCartesian(w, x, y, z, xy, yz, zx, xyz)
      return Euclidean3.compute(BLADE.bladeASM.mulE3, [@w, @x, @y, @z, @xy, @yz, @zx, @xyz], [rhs.w, rhs.x, rhs.y, rhs.z, rhs.xy, rhs.yz, rhs.zx, rhs.xyz], coord, pack)
  div: (rhs) ->
    if typeof rhs is 'number'
      return new BLADE.Euclidean3(@w / rhs, @x / rhs, @y / rhs, @z / rhs, @xy / rhs, @yz / rhs, @zx / rhs, @xyz / rhs)
    else
      return divide(@w, @x, @y, @xy, @z, -@zx, @yz, @xyz, rhs.w, rhs.x, rhs.y, rhs.xy, rhs.z, -rhs.zx, rhs.yz, rhs.xyz, undefined)
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

  dot: (vector) -> 
    return @x * vector.x + @y * vector.y + @z * vector.z

  cross: (vector) ->
    x1 = @x
    y1 = @y
    z1 = @z
    x2 = vector.x
    y2 = vector.y
    z2 = vector.z
    x = y1 * z2 - z1 * y2
    y = z1 * x2 - x1 * z2
    z = x1 * y2 - y1 * x2
    return new BLADE.Euclidean3(0, x, y, z, 0, 0, 0, 0)

  length: () ->
    return Math.sqrt(@x * @x + @y * @y + @z * @z)

  toString: () -> BLADE.bladeSTR.stringFromCoordinates([@w, @x, @y, @z, @xy, @yz, @zx, @xyz], ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"])
  toStringIJK: () -> BLADE.bladeSTR.stringFromCoordinates([@w, @x, @y, @z, @xy, @yz, @zx, @xyz], ["1", "i", "j", "k", "ij", "jk", "ki", "I"])
  toStringLATEX: () -> BLADE.bladeSTR.stringFromCoordinates([@w, @x, @y, @z, @xy, @yz, @zx, @xyz], ["1", "e_{1}", "e_{2}", "e_{3}", "e_{12}", "e_{23}", "e_{31}", "e_{123}"])

@BLADE.Euclidean3 = Euclidean3
