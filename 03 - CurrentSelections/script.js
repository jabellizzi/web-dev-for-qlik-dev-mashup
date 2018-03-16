// Define baseUrl where qlik.js file will be loaded from
require.config({
  baseUrl: 'http://localhost:4848/resources'
});

/* Load in qlik.js file using RequireJS so that we can use the
    qlik object within our callback function */
require(['js/qlik'], function(qlik) {
  console.log(qlik);

  // Open up an app using the openApp() method
  var app = qlik.openApp('Helpdesk Management');
  
  // Use getObject() to add Qlik Sense Chart to web page
  app.getObject('kpi-0', 'jTuCwkB');

  // Use getObject() to add Selections bar
  app.getObject('current-selections', 'CurrentSelections')
})