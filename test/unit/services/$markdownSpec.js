describe('Given the $markdown service', function() {
  beforeEach(module('hn.services'));

  it('should make html from a markdownText', inject(function($markdown) {
    var markdown = '#Hello World',
        markdownHtml = '<h1>Hello World</h1>';

    expect( $markdown.makeHtml(markdown) ).toEqual(markdownHtml);
  }));
});
