function Thermostat() {
  this.temperature = 20;
  this.powerSave = DEFAULT;
};

var powerSave;
DEFAULT = 'on';

Thermostat.prototype.up = function(raiseBy) {
  this._setMaxTemp(powerSave);
  this.temperature = Math.min(this.temperature + raiseBy, this.maxTemp)
};

Thermostat.prototype.down = function(reduceBy) {
  this.temperature = Math.max(this.temperature - reduceBy, 10)
};

Thermostat.prototype._setMaxTemp = function() {
  if(this.powerSave == 'on') {
    this.maxTemp = 25
  } else {
    this.maxTemp = 32
  }
};
