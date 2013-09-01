@BLADE = @BLADE or {}

BLADE = @BLADE

gcd = (a,b) ->
  if a < 0
    a = -a
  if b < 0
    b = -b
  if (b > a)
    temp = a
    a = b
    b = temp
  while true
      a %= b
      if a is 0
        return b
      b %= a
      if b is 0
        return a

class Rational
  constructor: (n, d) ->
    if d is 0
      throw new Error "denominator must not be zero"
    if n is 0
      g = 1
    else
      g = gcd Math.abs(n), Math.abs(d)
    if d < 0
      n = -n
      d = -d
    @numer = n / g
    @denom = d / g
  add: (rhs) ->
    if typeof rhs is 'number'
      return new BLADE.Rational(@numer + @denom * rhs, @denom)
    else
      return new BLADE.Rational(@numer * rhs.denom + @denom * rhs.numer, @denom * rhs.denom)
  sub: (rhs) ->
    if typeof rhs is 'number'
      return new BLADE.Rational(@numer - @denom * rhs, @denom)
    else
      return new BLADE.Rational(@numer * rhs.denom - @denom * rhs.numer, @denom * rhs.denom)
  mul: (rhs) ->
    if typeof rhs is 'number'
      return new BLADE.Rational(@numer * rhs, @denom)
    else
      return new BLADE.Rational(@numer * rhs.numer, @denom * rhs.denom)
  div: (rhs) ->
    return new BLADE.Rational(@numer * rhs.denom, @denom * rhs.numer)
  equals: (other) ->
    if other instanceof BLADE.Rational
      return (@numer * other.denom) is (@denom * other.numer)
    else
      return false
  toString: ()-> "#{@numer}/#{@denom}"

@BLADE.Rational = Rational
