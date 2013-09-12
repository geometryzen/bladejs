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
    unitsString = [stringify(@dimensions.M, @labels[0]), stringify(@dimensions.L, @labels[1]), stringify(@dimensions.T, @labels[2]), stringify(@dimensions.Q, @labels[3])].filter((x) -> typeof x is 'string').join(" ")
    return "#{scaleString}#{operatorStr}#{unitsString}"

@BLADE.Unit = Unit
