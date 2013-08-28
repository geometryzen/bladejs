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
    scaleString = if @scale is 1 then "" else "#{@scale} * "
    unitsString = [stringify(@dimensions.M, @labels[0]), stringify(@dimensions.L, @labels[1]), stringify(@dimensions.T, @labels[2])].filter((x) -> typeof x is 'string').join(" ")
    return "#{scaleString}#{unitsString}"

@BLADE.Unit = Unit
