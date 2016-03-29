angular.module("Mailbox",['ngRoute'])
	.config(routeFunction);
	
routeFunction.$inject = ["$routeProvider"];

function routeFunction($routeProvider){
	'use strict';
	$routeProvider.when("/inbox",{
		templateUrl : "views/inbox.html",
		controller : 'InboxCtrl',
		controllerAs : 'inb'
	})
		.otherwise({
			redirectTo : "/inbox"
		});
}