HN.controller('EditorCtrl',['$scope', '$http', function($scope, $http){

  $http.get('examples/home-markdown.md').then(function(response){
    $scope.editor = { markdown: response.data };
  });

}]);