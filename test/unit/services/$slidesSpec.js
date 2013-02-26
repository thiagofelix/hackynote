describe('Given the $slides service', function() {
  beforeEach(module('hn.app'));

  it('should extract an array of slides from a markdownText', inject(function($slides) {
    var markdown = '#Hello World' + '\n\n\n' + '##HackyNote is Awesome',
        slides = [
          {html:'<h1>Hello World</h1>'},
          {html:'<h2>HackyNote is Awesome</h2>'}
        ];

    expect( $slides.fromMarkdown(markdown) ).toEqual(slides);
  }));
});
