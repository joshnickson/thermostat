$( document ).ready(function() {

  var thermostat = new Thermostat();
  
  updateDisplay();

  $("#up").click(function() {
    thermostat.up(1);
    updateDisplay();
  });

  $("#down").click(function() {
    thermostat.down(1);
    updateDisplay();
  });

  $("#reset").click(function() {
    thermostat.reset();
    updateDisplay();
  });

  $("#power-save").click(function() {
    thermostat.togglePowerMode();
    console.log(thermostat.powerSave)
    updateDisplay();
  });

  function updateDisplay() {
    $('#temperature').text(thermostat.temperature);
  }

});