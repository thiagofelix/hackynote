// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('hn.services', []).
  value('version', '0.1').


  /**
   * shodown implementation for markdown parser
   * https://github.com/coreyti/showdown
   */
  factory('$showdown',[function(){
    var Showdown = window.Showdown,
        converter = new Showdown.converter();
    return converter.makeHtml;
  }]).


  /**
   * marked implementation for markdown parser
   * https://github.com/chjj/marked/
   */
  factory('$marked', [function(){
    var marked = window.marked;
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      langPrefix: 'language-',
      highlight: function(code, lang) {
        if (lang === 'js') {
          return highlighter.javascript(code);
        }
        return code;
      }
    });
    return marked;
  }]).


  /**
   * $markdown abstration ( $showdon | $marked )
   */
  service('$markdown', ['$showdown', '$marked', function($showdown, $marked){
    //currently using $marked
    this.makeHtml = $marked;
  }]).


  /**
   * $slides service
   */
  service('$slides',['$markdown', function($markdown){
    function extractSlidesFromMarkdown(markdownText){
      var contents = markdownText.split("\n\n\n");
      return contents;
    }

    this.fromMarkdown = function(markdownText) {
      var slides = [];
          slidesContents = extractSlidesFromMarkdown(markdownText);

      angular.forEach(slidesContents, function(slideContent){
        slides.push({ html: $markdown.makeHtml(slideContent) });
      });

      return slides;
    };

  }]);
