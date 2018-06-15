'use strict'
// The minimum temperature is 10 degrees
// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
// You can reset the temperature to 20 with a reset function
// You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
// (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20)
  });

  it('can increase the temperature by 1 degree', function(){
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('can decrease the temperature by 1 degree', function(){
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degreees', function(){
    var i;
    for( i = 0; i < 11; i++){
      thermostat.down();
    };
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('can switch on the power saving mode', function(){
    thermostat.switchPowerSavingOn();
    expect(thermostat.isPowerSaving()).toBe(true);
  });

  it('can switch off the power saving mode', function(){
    thermostat.switchPowerSavingOff();
    expect(thermostat.isPowerSaving()).toBe(false);
  });

  it('has a maximum temperature of 25 degrees when power saving mode is on', function(){
    var i;
    for( i = 0; i < 6; i++){
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toEqual(25)
  });

  it('has a maximum temperature of 32 degrees when power saving mode is off', function(){
    thermostat.switchPowerSavingOff();
    var i;
    for( i = 0; i < 13; i++){
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toEqual(32)
  });

});
