angular.module("Mailbox",['ngRoute'])
	.config(routeFunction);
	
routeFunction.$inject = ["$routeProvider"];

function routeFunction($routeProvider){
	'use strict';
	$routeProvider.when("/inbox",{
		templateUrl : "views/inbox.html",
		controller : 'InboxCtrl',
		controllerAs : 'inb'
	}).when("/inbox/:id",{
		templateUrl:"views/email.html"
		
	})
		.otherwise({
			redirectTo : "/inbox"
		});
}