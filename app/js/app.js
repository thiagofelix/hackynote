
var HN = angular.module('hn.app', []);

HN.log = angular.module('hn.log', []);

angular.module('hn', ['hn.app', 'ngSanitize', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'partials/page/editor.html',
      controller: 'EditorCtrl'
    });

    // Gist route is not working yet because i need a way to authenticate the user
    // $routeProvider.when('/gist/:id', {
    //   templateUrl: 'partials/page/editor.html',
    //   controller: 'GistEditorCtrl'
    // });

    $routeProvider.otherwise({redirectTo: '/'});

  }]);
