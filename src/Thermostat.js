'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSave = true;
};

var powerSave;

Thermostat.prototype.up = function(raiseBy) {
  this._setMaxTemp(powerSave);
  this.temperature = Math.min(this.temperature + raiseBy, this.maxTemp)
};

Thermostat.prototype.down = function(reduceBy) {
  this.temperature = Math.max(this.temperature - reduceBy, 10)
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature < 25) {
    return 'medium-usage'; 
  } else return 'high-usage';
};

Thermostat.prototype._setMaxTemp = function() {
  (this.powerSave == true) ? this.maxTemp = 25 : this.maxTemp = 32;
};

Thermostat.prototype.togglePowerMode = function() {
  this.power_mode = !this.power_mode
  if(this.temperature > this.maxTemp) {
    this.temperature = this.maxTemp;
  };
};