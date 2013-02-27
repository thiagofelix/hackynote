HN.directive('appVersion', ['version', function(version) {
  return function(scope, elm) {
    elm.text(version);
  };
}]);

HN.directive('editor',[function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/editor/editor.html',
    scope: {markdown: "="}
  };
}]);

HN.directive('aceEditor',[function(){
  return {
    restrict: 'EA',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel){
      var editor = ace.edit(element[0]);
      editor.setTheme("ace/theme/tomorrow");
      editor.getSession().setMode("ace/mode/markdown");
      editor.getSession().on('change',function(){
        scope.$apply(function(){
          ngModel.$setViewValue(editor.getSession().getValue());
        });
      });

      ngModel.$render = function(){
        editor.getSession().setValue(ngModel.$viewValue);
      };
    }
  };
}]);

HN.directive('preview',['$timeout', '$slides', function($timeout, $slides){
  var currentSlide;
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    templateUrl: 'partials/preview/preview.html',
    scope:{ markdown: "=" },
    link: function(scope, element) {

      $(document).bind('deck.change', function(event, from, to){
        currentSlide = to;
      });

      scope.$watch('markdown', function(markdownText){
        markdownText = markdownText || "";
        scope.slides = $slides.fromMarkdown(markdownText);

        //TODO: Stop hiding/show element.
        //It is happening to avoit a flick effect while plugin's call
        //happens
        element.hide();
        $timeout(function(){
          $.deck('.slide');
          if(currentSlide){
            $.deck('go', currentSlide);
          }
          element.show();
        });
      });
    }
  };
}]);
