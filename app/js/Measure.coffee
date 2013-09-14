@BLADE = @BLADE or {}
BLADE = @BLADE
class Measure
  constructor: (quantity, uom) ->
    scale = uom.scale
    if scale is 1
      @quantity = quantity
      @uom = uom
    else
      @quantity = quantity.mul(scale)
      @uom = new BLADE.Unit(1, uom.dimensions, uom.labels)
  add: (rhs) ->
    if rhs instanceof BLADE.Measure
      return new BLADE.Measure(@quantity.add(rhs.quantity), @uom.compatible(rhs.uom))
    else
      throw new Error("Measure.add(rhs): rhs must be a Measure.")
  sub: (rhs) ->
    if rhs instanceof BLADE.Measure
      return new BLADE.Measure(@quantity.sub(rhs.quantity), @uom.compatible(rhs.uom))
    else
      throw new Error("Measure.sub(rhs): rhs must be a Measure.")
  mul: (rhs) ->
    if rhs instanceof BLADE.Measure
      return new BLADE.Measure @quantity.mul(rhs.quantity), @uom.mul(rhs.uom)
    else if rhs instanceof BLADE.Unit
      return new BLADE.Measure @quantity, @uom.mul(rhs)
    else if typeof rhs is 'number'
      return new BLADE.Measure @quantity.mul(rhs), @uom
    else
      throw new Error("Measure.mul(rhs): rhs must be a [Measure, Unit, number]")
  div: (rhs) ->
    if rhs instanceof BLADE.Measure
      return new BLADE.Measure(@quantity.div(rhs.quantity), @uom.div(rhs.uom))
    else if rhs instanceof BLADE.Unit
      return new BLADE.Measure(@quantity, @uom.div(rhs))
    else if typeof rhs is 'number'
      return new BLADE.Measure @quantity.div(rhs), @uom
    else
      throw new Error("Measure.div(rhs): rhs must be a [Measure, Unit, number]")
  wedge: (rhs) ->
    if rhs instanceof BLADE.Measure
      return new BLADE.Measure(@quantity.wedge(rhs.quantity), @uom.mul(rhs.uom))
    else
      throw new Error("Measure.wedge(rhs): rhs must be a Measure")
  toString: () ->
    return "#{@quantity} #{@uom}"

@BLADE.Measure = Measure
