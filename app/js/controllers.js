
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

HN.controller('ThemesCtrl',['$scope', '$http', function($scope, $http){
    $scope.setTheme = function(theme){
      $scope.theme.current = theme;
      $('#style-theme-link').attr('href', theme.css);
    };

    $http.get('themes.json').then(function(response){
      $scope.theme = { list: response.data };
      $scope.theme.list.push({
        src: "",
        name: "None"
      });
      $scope.setTheme(response.data[0]);
    });

  }]);

HN.controller('TransitionsCtrl',['$scope', '$http', function($scope, $http){
  $scope.setTransition = function(transition){
    $scope.transition.current = transition;
    $('#transition-theme-link').attr('href', transition.css);
  };

  $http.get('transitions.json').then(function(response){
      $scope.transition = { list: response.data };
      $scope.transition.list.push({
        src: "",
        name: "None"
      });
      $scope.setTransition(response.data[0]);
    });
}]);