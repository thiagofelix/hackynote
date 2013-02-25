basePath = '../app';

files = [
  JASMINE,
  JASMINE_ADAPTER,

  //App Libs
  //
  //
  'lib/**/showdown.js',
  'lib/**/marked.js',

  // App & Angular
  //
  //
  'lib/angular/angular.js',
  'lib/angular/angular-*.js',
  'js/**/*.js',

  //Tests
  //
  //
  '../test/lib/angular/angular-mocks.js',
  '../test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

preprocessors = {
  'js/**/*.js': 'coverage'
};

reporters = ['progress', 'coverage'];

coverageReporter = {
  type: 'html',
  dir: '../coverage/'
};