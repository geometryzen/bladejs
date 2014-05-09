describe "Unit", () ->

  labels = ["kg", "m", "s", "C", "K", "mol", "cd", "rad"]

  it "Construction", () ->
    meter = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0, 0), labels)
    expect(meter.scale).toBe(1)

  it "toString", () ->
    dimensionless = new BLADE.Unit(1234, new BLADE.Dimensions(0, 0, 0, 0, 0, 0, 0, 0), labels)
    expect(BLADE.UNIT_METER.toString()).toBe("m")
    expect(BLADE.UNIT_KILOGRAM.toString()).toBe("kg")
    expect(BLADE.UNIT_SECOND.toString()).toBe("s")
    expect(BLADE.UNIT_AMPERE.toString()).toBe("s ** -1 C")
    expect(BLADE.UNIT_KELVIN.toString()).toBe("K")
    expect(BLADE.UNIT_MOLE.toString()).toBe("mol")
    expect(BLADE.UNIT_CANDELA.toString()).toBe("cd")
    expect(BLADE.UNIT_COULOMB.toString()).toBe("C")
    expect(BLADE.UNIT_RADIAN.toString()).toBe("rad")
    expect(dimensionless.toString()).toBe("1234")

  it "mul", () ->
    meter    = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0, 0), labels)
    centimeter = meter.mul(0.01)
    inch = centimeter.mul(2.54)
    foot = inch.mul(12)
    yard = foot.mul(3)
    mile = yard.mul(1760)

    micron    = meter.mul(1e-6)
    nanometer = meter.mul(1e-9)
    angstrom  = nanometer.mul(1e-1)

    expect(meter.toString()).toBe("m")
    expect(centimeter.toString()).toBe("0.01 m")
    expect(inch.scale).toBeCloseTo(0.0254)
    expect(foot.scale).toBeCloseTo(0.3048)
    expect(yard.scale).toBeCloseTo(0.9144)
    expect(mile.scale).toBeCloseTo(1609.344)

    expect(micron.scale    * 1e6).toBe(1)
    expect(nanometer.scale * 1e9).toBe(1)
    expect(angstrom.scale  * 1e10).toBeCloseTo(1)

  it "mul by number", () ->
    meter    = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0, 0), labels)
    yard = meter.mul(2.54*36/100)

  it "mul by Unit", () ->
    meter    = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0, 0), labels)
    second    = new BLADE.Unit(1, new BLADE.Dimensions(0, 0, 1, 0, 0, 0, 0, 0), labels)
    areaUnit = meter.mul(second)

    expect(meter.toString()).toBe("m")
    expect(second.toString()).toBe("s")
    expect(areaUnit.toString()).toBe("m s")

  it "div by number", () ->
    meter    = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0, 0), labels)
    centimeter = meter.div(100)

    expect(meter.toString()).toBe("m")
    expect(centimeter.toString()).toBe("0.01 m")

  it "div by Unit", () ->
    meter     = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0, 0), labels)
    second    = new BLADE.Unit(1, new BLADE.Dimensions(0, 0, 1, 0, 0, 0, 0, 0), labels)
    speedUnit = meter.div(second)

    expect(meter.toString()).toBe("m")
    expect(second.toString()).toBe("s")
    expect(speedUnit.toString()).toBe("m s ** -1")

  it "pow by number", () ->
    meter  = new BLADE.Unit(1, new BLADE.Dimensions(0, 1, 0, 0, 0, 0, 0, 0), labels)
    square = meter.pow(2)
    radian = new BLADE.Unit(1, new BLADE.Dimensions(0, 0, 0, 0, 0, 0, 0, 1), labels)

    expect(meter.toString()).toBe("m")
    expect(square.toString()).toBe("m ** 2")
    expect(radian.toString()).toBe("rad")
