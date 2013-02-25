// Declare app level module which depends on filters, and services
angular.module('hn', ['hn.filters', 'hn.services', 'hn.directives', 'hn.controllers', 'ngSanitize', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/editor', {
      templateUrl: 'partials/page/editor.html', controller: "EditorCtrl"
    });

    $routeProvider.otherwise({redirectTo: '/editor'});
  }]);
