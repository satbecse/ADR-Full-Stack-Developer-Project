var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'AdrsController',
		templateUrl: 'views/adrs.html'
	})
	.when('/adrs', {
		controller:'AdrsController',
		templateUrl: 'views/adrs.html'
	})
	.when('/adrs/details/:id',{
		controller:'AdrsController',
		templateUrl: 'views/adr_details.html'
	})
	.when('/adrs/add',{
		controller:'AdrsController',
		templateUrl: 'views/add_adr.html'
	})
	.when('/adrs/edit/:id',{
		controller:'AdrsController',
		templateUrl: 'views/edit_adr.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});