angular.module('hn.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm) {
      elm.text(version);
    };
  }]).
  directive('editor',[function(){
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'partials/editor/editor.html',
      scope:{ markdown: "=" }
    };
  }]).
  directive('preview',['$timeout', '$slides', function($timeout, $slides){
    var currentSlide;
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'partials/preview/preview.html',
      scope:{ markdown: "=" },
      link: function(scope) {

        $(document).bind('deck.change', function(event, from, to){
          currentSlide = to;
        });

        scope.$watch('markdown', function(markdownText){
          markdownText = markdownText || "";
          scope.slides = $slides.fromMarkdown(markdownText);
          $timeout(function(){
            $.deck('.slide');
            if(currentSlide){
              $.deck('go', currentSlide);
            }
          });
        });
      }
    };
  }]);
