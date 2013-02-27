
HN.controller('AppCtrl', ['$scope', function($scope){
  $scope.mode = 'edit';

  $scope.preview = function(){
    $scope.mode = 'preview';
  };

  $scope.backToEdit = function(){
    $scope.mode = 'edit';
  };

}]);


HN.controller('EditorCtrl',['$scope', '$http', function($scope, $http){
  $http.get('examples/home-markdown.md').then(function(response){
    $scope.editor = { markdown: response.data };
  });
}]);

HN.controller('ThemesCtrl',['$scope', function($scope){
    $scope.setTheme = function(theme){
      $scope.theme.current = theme;
      $('#style-theme-link').attr('href', theme.src);
    };

    $scope.theme = {};
    $scope.theme.list = [{
      src: "themes/dclick-1.0.css",
      name: "Hacky"
    },{
      src: "lib/deck.js/themes/style/web-2.0.css",
      name: "Web 2.0"
    },{
      src: "lib/deck.js/themes/style/swiss.css",
      name: "Swiss"
    },{
      src: "lib/deck.js/themes/style/neon.css",
      name: "Neon"
    },{
      src: "",
      name: "None"
    }];

    $scope.setTheme($scope.theme.list[0]);

  }]);

HN.controller('TransitionsCtrl',['$scope', function($scope){
  $scope.setTransition = function(transition){
    $scope.transition.current = transition;
    $('#transition-theme-link').attr('href', transition.src);
  };

  $scope.transition = {};
  $scope.transition.list = [{
    src: "lib/deck.js/themes/transition/horizontal-slide.css",
    name: "Horizontal"
  },{
    src: "lib/deck.js/themes/transition/vertical-slide.css",
    name: "Vertical"
  },{
    src: "lib/deck.js/themes/transition/fade.css",
    name: "Fade"
  },{
    src: "",
    name: "None"
  }];

  $scope.setTransition($scope.transition.list[0]);
}]);