'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it("should have an initial start temperature of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase the temperature with an up function", function() {
    thermostat.up(2);
    expect(thermostat.temperature).toEqual(22);
  });

  it("should decrease the temperature with an down function", function() {
    thermostat.down(10);
    expect(thermostat.temperature).toEqual(10);
  });

  it("has a minumum temp of 10 degrees", function() {
    thermostat.down(20);
    expect(thermostat.temperature).toEqual(10);
  });

  it("has max temp 25 when power saving mode enabled", function() {
    thermostat.up(20);
    expect(thermostat.temperature).toEqual(25);
  });

  it("has max temp 32 when power saving mode disabled", function() {
    thermostat.powerSave = 'off';
    thermostat.up(20);
    expect(thermostat.temperature).toEqual(32);
  });

  it("can reset the temperature to 20", function() {
    thermostat.up(5)
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });

  it("can display information on energy usage", function() {
    expect(thermostat.energyUsage()).toEqual('medium-usage');
    thermostat.temperature = 25
    expect(thermostat.energyUsage()).toEqual('high-usage');
    thermostat.temperature = 15
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });

  it("can toggle power saving mode on and off", function() {
    expect(thermostat.powerSave == true) 
    thermostat.togglePowerMode();
    expect(thermostat.powerSave == false) 
  });
});

