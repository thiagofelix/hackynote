
angular.module('hn.controllers', []).

  controller('EditorCtrl',['$scope', '$http', function($scope, $http){
    $scope.editor = { markdown: "" };
    $http.get('md/mkyky9T3');

  }]);