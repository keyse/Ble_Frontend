import materialize from 'Dogfalo/materialize'; // ensure the materialize jquery plugins are installed.
//import  'materialize-css/js/materialize.js';
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('resources')        // install application resources such as value-converters and custom html attributes.
    .plugin('aurelia-breeze')   // install the aurelia-breeze integration plugin.
    .plugin('aurelia-validation')
    .plugin('donnelljenkins/aurelia-pagination')
    .plugin('donnelljenkins/aurelia-datagrid');
  aurelia.start().then(a => a.setRoot());
}
