@BLADE = @BLADE or {}
BLADE = @BLADE
stringify = (rational, label) ->
  if rational.numer is 0
    return null
  else if rational.denom is 1
    if rational.numer is 1
      return "#{label}"
    else
      return "#{label} ** #{rational.numer}"
  else
  "#{label} ** #{rational}"

class Unit
  constructor: (scale, dimensions, labels) ->
    if labels.length isnt 7
      throw new Error("Expecting 7 elements in the labels array.")
    @scale = scale
    @dimensions = dimensions
    @labels = labels
  compatible: (rhs) ->
    if rhs instanceof Unit
      dimensions = @dimensions.compatible(rhs.dimensions)
      return @
    else
      throw new Error("Illegal Argument for Unit.compatible: " + rhs)
  add: (rhs) ->
    if rhs instanceof Unit
      return new BLADE.Unit(@scale + rhs.scale, @dimensions.compatible(rhs.dimensions), @labels)
    else
      throw new Error("Illegal Argument for Unit.add: " + rhs)
  sub: (rhs) ->
    if rhs instanceof Unit
      return new BLADE.Unit(@scale - rhs.scale, @dimensions.compatible(rhs.dimensions), @labels)
    else
      throw new Error("Illegal Argument for Unit.sub: " + rhs)
  mul: (rhs) ->
    if typeof rhs is 'number'
      return new BLADE.Unit(@scale * rhs, @dimensions, @labels)
    else if rhs instanceof Unit
      return new BLADE.Unit(@scale * rhs.scale, @dimensions.mul(rhs.dimensions), @labels)
    else
      throw new Error("Illegal Argument for mul: " + rhs)
  div: (rhs) ->
    if typeof rhs is 'number'
      return new BLADE.Unit(@scale / rhs, @dimensions, @labels)
    else if rhs instanceof Unit
      return new BLADE.Unit(@scale / rhs.scale, @dimensions.div(rhs.dimensions), @labels)
    else
      throw new Error("Illegal Argument for div: " + rhs)
  pow: (rhs) ->
    if typeof rhs is 'number'
      return new BLADE.Unit(Math.pow(@scale, rhs), @dimensions.pow(rhs), @labels)
    else
      throw new Error("Illegal Argument for div: " + rhs)
  toString: ()->
    operatorStr = if @scale is 1 or @dimensions.dimensionless() then "" else " "
    scaleString = if @scale is 1 then "" else "#{@scale}"
    unitsString = [stringify(@dimensions.M, @labels[0]), stringify(@dimensions.L, @labels[1]), stringify(@dimensions.T, @labels[2]), stringify(@dimensions.Q, @labels[3]), stringify(@dimensions.temperature, @labels[4]), stringify(@dimensions.amount, @labels[5]), stringify(@dimensions.intensity, @labels[6])].filter((x) -> typeof x is 'string').join(" ")
    return "#{scaleString}#{operatorStr}#{unitsString}"

@BLADE.Unit = Unit
@BLADE.UNIT_SYMBOLS = ["kg","m","s","C","K","mol","cd"]
@BLADE.UNIT_KILOGRAM = new Unit(1, new @BLADE.Dimensions(1,0,0,0,0,0,0), @BLADE.UNIT_SYMBOLS)
@BLADE.UNIT_METER    = new Unit(1, new @BLADE.Dimensions(0,1,0,0,0,0,0), @BLADE.UNIT_SYMBOLS)
@BLADE.UNIT_SECOND   = new Unit(1, new @BLADE.Dimensions(0,0,1,0,0,0,0), @BLADE.UNIT_SYMBOLS)
@BLADE.UNIT_COULOMB  = new Unit(1, new @BLADE.Dimensions(0,0,0,1,0,0,0), @BLADE.UNIT_SYMBOLS)
@BLADE.UNIT_KELVIN   = new Unit(1, new @BLADE.Dimensions(0,0,0,0,1,0,0), @BLADE.UNIT_SYMBOLS)
@BLADE.UNIT_MOLE     = new Unit(1, new @BLADE.Dimensions(0,0,0,0,0,1,0), @BLADE.UNIT_SYMBOLS)
@BLADE.UNIT_CANDELA  = new Unit(1, new @BLADE.Dimensions(0,0,0,0,0,0,1), @BLADE.UNIT_SYMBOLS)
