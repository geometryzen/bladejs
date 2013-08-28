describe "Unit", () ->

  it "Construction", () ->
    meter = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0), ["kg", "m", "s"])
    expect(meter.scale).toBe(1)

  it "toString", () ->
    kilogram = new BLADE.Unit(1, new BLADE.Dimensions(1, 0, 0), ["kg", "m", "s"])
    meter    = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0), ["kg", "m", "s"])
    second   = new BLADE.Unit(1, new BLADE.Dimensions(0, 0, 1), ["kg", "m", "s"])
    expect(meter.toString()).toBe("m")
    expect(kilogram.toString()).toBe("kg")
    expect(second.toString()).toBe("s")

  it "mul", () ->
    meter    = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0), ["kg", "m", "s"])
    centimeter = meter.mul(0.01)
    inch = centimeter.mul(2.54)
    foot = inch.mul(12)
    yard = foot.mul(3)
    mile = yard.mul(1760)

    micron    = meter.mul(1e-6)
    nanometer = meter.mul(1e-9)
    angstrom  = nanometer.mul(1e-1)

    expect(meter.toString()).toBe("m")
    expect(centimeter.toString()).toBe("0.01 * m")
    expect(inch.scale).toBeCloseTo(0.0254)
    expect(foot.scale).toBeCloseTo(0.3048)
    expect(yard.scale).toBeCloseTo(0.9144)
    expect(mile.scale).toBeCloseTo(1609.344)

    expect(micron.scale    * 1e6).toBe(1)
    expect(nanometer.scale * 1e9).toBe(1)
    expect(angstrom.scale  * 1e10).toBeCloseTo(1)

  it "mul by number", () ->
    meter    = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0), ["kg", "m", "s"])
    yard = meter.mul(2.54*36/100)

  it "mul by Unit", () ->
    meter    = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0), ["kg", "m", "s"])
    second    = new BLADE.Unit(1, new BLADE.Dimensions(0, 0, 1), ["kg", "m", "s"])
    areaUnit = meter.mul(second)

    expect(meter.toString()).toBe("m")
    expect(second.toString()).toBe("s")
    expect(areaUnit.toString()).toBe("m s")

  it "div by number", () ->
    meter    = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0), ["kg", "m", "s"])
    centimeter = meter.div(100)

    expect(meter.toString()).toBe("m")
    expect(centimeter.toString()).toBe("0.01 * m")

  it "div by Unit", () ->
    meter     = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0), ["kg", "m", "s"])
    second    = new BLADE.Unit(1, new BLADE.Dimensions(0, 0, 1), ["kg", "m", "s"])
    speedUnit = meter.div(second)

    expect(meter.toString()).toBe("m")
    expect(second.toString()).toBe("s")
    expect(speedUnit.toString()).toBe("m s ** -1")

  it "pow by number", () ->
    meter  = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0), ["kg", "m", "s"])
    square = meter.pow(2)

    expect(meter.toString()).toBe("m")
    expect(square.toString()).toBe("m ** 2")
