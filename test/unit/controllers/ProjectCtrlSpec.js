
describe('Given the Editor Controller', function(){
  beforeEach(module('hn.controllers'));

  var ctrl, scope;

  beforeEach(inject(function($controller) {
    ctrl = $controller('EditorCtrl', {$scope: scope = {}});
  }));

  it('contain editor.markdown on the scope', function() {
    expect(scope.editor.markdown).toBeDefined();
  });
});
