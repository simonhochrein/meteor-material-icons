Package.describe({
  name: 'simonhochrein:material-icons',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A Meteor wrapper for Google\'s Material Icons',
  // URL to the Git repository containing the source code for this package.
  git: 'github.com/simonhochrein/meteor-material-icons',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('material-icons.js');
  api.addFiles('material-icons.css');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('simonhochrein:material-icons');
  api.addFiles('material-icons-tests.js');
});
