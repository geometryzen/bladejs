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
  constructor: (mass, length, time, charge, temperature, amount, intensity, angle) ->

    if typeof mass is 'number'
      @M = new BLADE.Rational(mass, 1)
    else if mass instanceof BLADE.Rational
      @M = mass
    else
     throw name: "DimensionError", message: "mass must be a Rational or number"

    if typeof length is 'number'
      @L = new BLADE.Rational(length, 1)
    else if length instanceof BLADE.Rational
      @L = length
    else
     throw name: "DimensionError", message: "length must be a Rational or number"

    if typeof time is 'number'
      @T = new BLADE.Rational(time, 1)
    else if time instanceof BLADE.Rational
      @T = time
    else
     throw name: "DimensionError", message: "time must be a Rational or number"

    if typeof charge is 'number'
      @Q = new BLADE.Rational(charge, 1)
    else if charge instanceof BLADE.Rational
      @Q = charge
    else
     throw name: "DimensionError", message: "charge must be a Rational or number"

    if typeof temperature is 'number'
      @temperature = new BLADE.Rational(temperature, 1)
    else if temperature instanceof BLADE.Rational
      @temperature = temperature
    else
     throw name: "DimensionError", message: "(thermodynamic) temperature must be a Rational or number"

    if typeof amount is 'number'
      @amount = new BLADE.Rational(amount, 1)
    else if amount instanceof BLADE.Rational
      @amount = amount
    else
     throw name: "DimensionError", message: "amount (of substance) must be a Rational or number"

    if typeof intensity is 'number'
      @intensity = new BLADE.Rational(intensity, 1)
    else if intensity instanceof BLADE.Rational
      @intensity = intensity
    else
     throw name: "DimensionError", message: "(luminous) intensity must be a Rational or number"

    if typeof angle is 'number'
      @angle = new BLADE.Rational(angle, 1)
    else if angle instanceof BLADE.Rational
      @angle = angle
    else
     throw name: "DimensionError", message: "angle must be a Rational or number"

  compatible: (rhs) ->
    if @M.equals(rhs.M) and @L.equals(rhs.L) and @T.equals(rhs.T) and @Q.equals(rhs.Q) and @temperature.equals(rhs.temperature) and @amount.equals(rhs.amount) and @intensity.equals(rhs.intensity) and @angle.equals(rhs.angle)
      return @
    else
      throw name: "DimensionError", message: "Dimensions must be equal (#{@}, #{rhs})"

  mul: (rhs) ->
    return new BLADE.Dimensions(@M.add(rhs.M), @L.add(rhs.L), @T.add(rhs.T), @Q.add(rhs.Q), @temperature.add(rhs.temperature), @amount.add(rhs.amount), @intensity.add(rhs.intensity), @angle.add(rhs.angle))

  div: (rhs) ->
    return new BLADE.Dimensions(@M.sub(rhs.M), @L.sub(rhs.L), @T.sub(rhs.T), @Q.sub(rhs.Q), @temperature.sub(rhs.temperature), @amount.sub(rhs.amount), @intensity.sub(rhs.intensity), @angle.sub(rhs.angle))

  pow: (exponent) ->
    return new BLADE.Dimensions(@M.mul(exponent), @L.mul(exponent), @T.mul(exponent), @Q.mul(exponent), @temperature.mul(exponent), @amount.mul(exponent), @intensity.mul(exponent), @angle.mul(exponent))

  dimensionless: -> @M.isZero() and @L.isZero() and @T.isZero() and @Q.isZero() and @temperature.isZero() and @amount.isZero() and @intensity.isZero() and @angle.isZero()

  toString: ()->
    [
      stringify(@M, 'mass'),
      stringify(@L, 'length'),
      stringify(@T, 'time'),
      stringify(@Q, 'charge'),
      stringify(@temperature, 'thermodynamic temperature'),
      stringify(@amount, 'amount of substance'),
      stringify(@intensity, 'luminous intensity'),
      stringify(@angle, 'angle')
      ].filter((x) -> typeof x is 'string').join(" * ")

@BLADE.Dimensions = Dimensions
