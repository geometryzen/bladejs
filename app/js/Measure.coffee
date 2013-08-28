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
  mul: (rhs) ->
    if rhs instanceof BLADE.Measure
      return new BLADE.Measure(@quantity.mul(rhs.quantity), @uom.mul(rhs.uom))
    else if rhs instanceof BLADE.Unit
      return new BLADE.Measure(@quantity, @uom.mul(rhs))
    else
      throw new Error("...")
  div: (rhs) ->
    if rhs instanceof BLADE.Measure
      return new BLADE.Measure(@quantity.div(rhs.quantity), @uom.div(rhs.uom))
    else if rhs instanceof BLADE.Unit
      return new BLADE.Measure(@quantity, @uom.div(rhs))
    else
      throw new Error("...")
  toString: () ->
    return "#{@quantity} #{@uom}"

@BLADE.Measure = Measure
