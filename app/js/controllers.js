
angular.module('hn.controllers', []).
  /**
   * Project Controller
   */
  controller('ProjectCtrl',['$scope', '$http', function($scope, $http){
    $scope.editor = { markdown: "" };
  }]);