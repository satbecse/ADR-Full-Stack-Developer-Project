var myApp = angular.module('myApp');

myApp.controller('AdrsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('AdrsController loaded...');

/*	angular.module('app', [])
	.controller('Main', ['$scope', function($scope) {
	  $scope.title = "Filter Based on Select Value";
	   $scope.ourTeamCategories = [
			{"id":18,"title":'Management'},
			{"id":19,"title":'Administration'},
			{"id":21,"title":'Designers'},
			{"id":22,"title":'Accounts'},
		]
	}]); */

	$scope.getAdrs = function(){
		$http.get('/api/adrs').success(function(response){
			$scope.adrs = response;
		});
	}

	$scope.getAdr = function(){
		var id = $routeParams.id;
		$http.get('/api/adrs/'+id).success(function(response){
			$scope.adr = response;
		});
	}

	$scope.addAdr = function(){
		console.log($scope.adr);
		$http.post('/api/adrs/', $scope.adr).success(function(response){
			window.location.href='#/adrs';
		});
	}

	$scope.updateAdr = function(){
		var id = $routeParams.id;
		$http.put('/api/adrs/'+id, $scope.adr).success(function(response){
			window.location.href='#/adrs';
		});
	}

	$scope.removeAdr = function(id){
		$http.delete('/api/adrs/'+id).success(function(response){
			window.location.href='#/adrs';
		});
	}

	$scope.onChange = function()
	{
	   list.hide
	   app.show
	
	}
}]);