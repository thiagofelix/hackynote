
angular.module('hn.controllers', []).
  /**
   * Project Controller
   */
  controller('ProjectCtrl',['$scope', '$http', function($scope, $http){
    $scope.editor = { markdown: "" };
  }]).
  controller('ThemesCtrl',['$scope', function($scope){
    $scope.setTheme = function(theme){
      $scope.theme.current = theme;
      $('#style-theme-link').attr('href', theme.src);
    };

    $scope.theme = {};
    $scope.theme.list = [{
      src: "themes/dclick-1.0.css",
      name: "DClick"
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

  }]).
  controller('TransitionsCtrl',['$scope', function($scope){
    $scope.setTransition = function(transition){
      $scope.transition.current = transition;
      $('#transition-theme-link').attr('href', transition.src);
    };

    $scope.transition = {};
    $scope.transition.list = [{
      src: "lib/deck.js/themes/transition/horizontal-slide.css",
      name: "Horizontal Slide"
    },{
      src: "lib/deck.js/themes/transition/vertical-slide.css",
      name: "Vertical Slide"
    },{
      src: "lib/deck.js/themes/transition/fade.css",
      name: "Fade"
    },{
      src: "",
      name: "None"
    }];

    $scope.setTransition($scope.transition.list[0]);
  }]);