describe('Given the version service', function() {
  beforeEach(module('hn.app'));

  it('should return current version', inject(function(version) {
    expect(version).toEqual('0.1');
  }));
});
