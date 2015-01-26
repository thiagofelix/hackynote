
HN.controller('AppCtrl', ['$scope', function($scope){
	$scope.mode = 'edit';
	$scope.preview = function($event){
		$event.preventDefault();
		$scope.mode = 'preview';
	};
	$scope.backToEdit = function($event){
		$event.preventDefault();
		$scope.mode = 'edit';
	};

	$scope.alerts = [];
  $scope.addAlert = function(opts) {
    $scope.alerts.push(opts);
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

}]);


HN.controller('EditorCtrl',['$scope', '$http', function($scope, $http){
	$scope.editor = { markdown: ''};
	$http.get('examples/home-markdown.md').then(function(response){
			$scope.editor.markdown = response.data;
		});
}]);

HN.controller('GistEditorCtrl',['$scope', '$http','$routeParams', '$location', 'loading', function($scope, $http, $routeParams, $location, loading){
	var github = new Github({});
	var gist = github.getGist($routeParams.id);

	$scope.editor = { markdown: ''};

	loading.show();

	gist.read(function(err, gist) {

		$scope.$apply(function(){

			loading.hide();
			if(err) { showGistReadError(err);return;}

			var files = Object.keys(gist.files);
			if(files.length >= 0) {
				$scope.editor.markdown = gist.files[files[0]].content;
			}

		});

	});

	function showGistReadError(err){
		var msg = 'Error loading the gist ( '+$routeParams.id+' ): ' + err.error + ' - ' + err.request.statusText;
		$scope.addAlert({msg: msg, type: 'error'});
		$location.path('/');
	}

}]);

HN.controller('GistErrorModalCtrl', ['$scope', 'dialog',function($scope, dialog){
	$scope.close = function(result){
		dialog.close(result);
	};
}]);

HN.controller('ThemesCtrl',['$scope', '$http', function($scope, $http){
		$scope.setTheme = function(theme){
			$scope.theme.current = theme;
			$('#style-theme-link').attr('href', theme.css);
		};

		$http.get('themes.json').then(function(response){
			$scope.theme = { list: response.data };
			$scope.theme.list.push({css: "",name: "None"});
			$scope.setTheme(response.data[0]);
		});

	}]);

HN.controller('TransitionsCtrl',['$scope', '$http', function($scope, $http){
	$scope.setTransition = function(transition){
		$scope.transition.current = transition;
		$('#transition-theme-link').attr('href', transition.css);
	};

	$http.get('transitions.json').then(function(response){
			$scope.transition = { list: response.data };
			$scope.transition.list.push({css: "",name: "None"});
			$scope.setTransition(response.data[0]);
		});
}]);
