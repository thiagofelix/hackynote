basePath = '../app';

files = [
  JASMINE,
  JASMINE_ADAPTER,

  //App Libs
  //
  //
  'lib/**/showdown.js',

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

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
