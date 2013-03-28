
describe('Given the controllers', function(){
	var $httpBackend, $controller, ctrl, scope;

	beforeEach(module('hn.app'));
	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		$controller = $injector.get('$controller');
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('The Editor Controller', function(){

		it('should request the sample markdown when initialized', function() {
			$httpBackend.expectGET('examples/home-markdown.md').respond(200);
			ctrl = $controller('EditorCtrl', {$scope: scope = {}});
			$httpBackend.flush();
		});

	});

	describe('The Gist Editor Controller', function(){

		beforeEach(inject(function($controller) {
			ctrl = $controller('GistEditorCtrl', {$scope: scope = {}});
		}));

	});

});
