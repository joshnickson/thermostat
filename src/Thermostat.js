function Thermostat() {
  this.temperature = 20;
  this.powerSave = 'on';
};

var powerSave;

Thermostat.prototype.up = function(raiseBy) {
  this._setMaxTemp(powerSave);
  this.temperature = Math.min(this.temperature + raiseBy, this.maxTemp)
};

Thermostat.prototype.down = function(reduceBy) {
  this.temperature = Math.max(this.temperature - reduceBy, 10)
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype._setMaxTemp = function() {
  if(this.powerSave == 'on') {
    this.maxTemp = 25
  } else {
    this.maxTemp = 32
  }
};
