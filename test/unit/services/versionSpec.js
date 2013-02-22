describe('Given the version service', function() {
  beforeEach(module('hn.services'));

  it('should return current version', inject(function(version) {
    expect(version).toEqual('0.1');
  }));
});
