/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      optional: ['es7.decorators', 'es7.functionBind'],
      includePolyfill: true
    },
    'ember-cli-qunit': {
      useLintTree: false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/signature_pad/signature_pad.min.js');
  app.import('bower_components/string/dist/string.min.js');
  app.import('bower_components/numeral/min/numeral.min.js');
  app.import('bower_components/rxjs/dist/rx.all.min.js');
  app.import('bower_components/immutable/dist/immutable.min.js');
  app.import('bower_components/lodash/dist/lodash.min.js');
  app.import('bower_components/ramda/dist/ramda.min.js');
  app.import('bower_components/localforage/dist/localforage.min.js');
  app.import('bower_components/le_js/product/le.min.js');

  return app.toTree();
};
