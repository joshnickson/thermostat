describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it("should have an initial start temperature of 20", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it("should increase the temperature with an up function", function() {
    thermostat.up(10)
    expect(thermostat.temperature).toEqual(30)
  });

});

