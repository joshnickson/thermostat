describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  describe("Up", function() {
    it("should increase temperature", function() {
      thermostat.up(10)
      expect(thermostat.temperature).toEqual(30)
    });
  });

  describe("Down", function() {
    it("should increase temperature", function() {
      thermostat.down(10)
      expect(thermostat.temperature).toEqual(10)
    });
  });


});

