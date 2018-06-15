function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingOn = true;
};

Thermostat.prototype.getTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.up = function () {
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()){
    return;
  };
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.switchPowerSavingOn = function () {
  this.powerSavingOn = true
};

Thermostat.prototype.switchPowerSavingOff = function () {
  this.powerSavingOn = false
};

Thermostat.prototype.isPowerSaving = function () {
  return this.powerSavingOn
};
