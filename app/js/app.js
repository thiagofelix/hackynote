// Declare app level module which depends on filters, and services
angular.module('hn', ['hn.filters', 'hn.services', 'hn.directives', 'hn.controllers', 'ngSanitize']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/project', {templateUrl: 'partials/page/project.html', controller: "ProjectCtrl"});
    $routeProvider.otherwise({redirectTo: '/project'});
  }]);
