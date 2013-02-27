
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