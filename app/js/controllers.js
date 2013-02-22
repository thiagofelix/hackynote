
angular.module('hn.controllers', []).
  /**
   * Project Controller
   */
  controller('ProjectCtrl',['$scope', '$http', function($scope, $http){
    $http.get('examples/home-markdown.md').then(function(response){
      $scope.editor = {
        markdown: response.data
      };
    });

  }]);