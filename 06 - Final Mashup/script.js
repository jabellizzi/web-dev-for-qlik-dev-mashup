// Define baseUrl where qlik.js file will be loaded from
require.config({
  baseUrl: 'http://localhost:4848/resources'
});

var _qlik, _app;

/* ======================
    Require
====================== */
require(['js/qlik'], function(qlik) {
  // Define a global instance of qlik so that other functions can use it
  _qlik = qlik;
  // Open up an app using the openApp() method
  app = qlik.openApp('Helpdesk Management');
  // Define global instance of app
  _app = app;
  

  // Dashboard Charts
  app.getObject('kpi-0', 'jTuCwkB');
  app.getObject('kpi-1', 'JARjh');
  app.getObject('kpi-2', 'JsVPe');
  app.getObject('scatter-0', '298bbd6d-f23d-4469-94a2-df243d680e0c', { noSelections: true });
  app.getObject('bar-0', 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', { noSelections: true });
  app.getObject('line-0', 'hRZaKk', { noSelections: true });

  // KPI Charts
  app.getObject('pie-0', 'PAppmU', { noSelections: true });
  app.getObject('line-1', 'xfvKMP', { noSelections: true });
  app.getObject('table-0', 'uETyGUP', { noSelections: true });

})


/* ======================
    What If Slider
====================== */
var sliderValueElement = document.getElementById('slider-value');

function whatIf(event) {
  var sliderValue = event.target.valueAsNumber;

  sliderValueElement.innerHTML = sliderValue;
  
  _app.variable.setNumValue('vWhatIf', sliderValue);
}

/* ======================
    Sheet Buttons
====================== */
// Get button elements
var dashboardButtonElement = document.getElementById('dashboard-button');
var performanceButtonElement = document.getElementById('performance-button');

// Get the sheet elements
var dashboardElement = document.getElementById('dashboard-sheet');
var performanceElement = document.getElementById('performance-sheet');

function changeSheet(sheet) {
  if(sheet === 'dashboard') { // If dashboard clicked..
    // hide performance, show dashboard
    performanceElement.classList.add('hidden');
    dashboardElement.classList.remove('hidden');

    // update button status
    dashboardButtonElement.classList.add('btn-primary');
    performanceButtonElement.classList.remove('btn-primary');
  } else if(sheet === 'performance') { // if performance clicked..
    // hide dashboard, show performance
    dashboardElement.classList.add('hidden');
    performanceElement.classList.remove('hidden');

    // update button status
    performanceButtonElement.classList.add('btn-primary');
    dashboardButtonElement.classList.remove('btn-primary');
  }

  // Resize all elements so that they render correctly
  _qlik.resize();
}