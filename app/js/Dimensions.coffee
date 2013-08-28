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

class Dimensions
  constructor: (mass, length, time) ->
    if typeof mass is 'number'
      @M = new BLADE.Rational(mass, 1)
    else
      @M = mass
    if typeof length is 'number'
      @L = new BLADE.Rational(length, 1)
    else
      @L = length
    if typeof time is 'number'
      @T = new BLADE.Rational(time, 1)
    else
      @T = time
  mul: (rhs) ->
    return new BLADE.Dimensions(@M.add(rhs.M), @L.add(rhs.L), @T.add(rhs.T))
  div: (rhs) ->
    return new BLADE.Dimensions(@M.sub(rhs.M), @L.sub(rhs.L), @T.sub(rhs.T))
  pow: (exponent) ->
    return new BLADE.Dimensions(@M.mul(exponent), @L.mul(exponent), @T.mul(exponent))
  toString: ()->
    [stringify(@M, 'M'), stringify(@L, 'L'), stringify(@T, 'T')].filter((x) -> typeof x is 'string').join(" * ")

@BLADE.Dimensions = Dimensions
