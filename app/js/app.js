
var HN = angular.module('hn.app', []);

HN.log = angular.module('hn.log', []);

angular.module('hn', ['hn.app', 'ngSanitize', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/editor', {
      templateUrl: 'partials/page/editor.html',
      controller: "EditorCtrl",
      reloadOnSearch: false
    });

    $routeProvider.otherwise({redirectTo: '/editor'});
  }]);
