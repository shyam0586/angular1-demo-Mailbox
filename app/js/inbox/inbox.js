angular.module("Mailbox")
	.factory("InboxServices", InboxServices);
	
InboxServices.$inject = ["$http", "$q"];

function InboxServices($http,$q){
	var exports = {};
	exports.messages = [];
	exports.getMessages = function(){
		var deferred = $q.defer();
		return $http.get("json/email.json")
			.success(function(data){
				exports.messages = data;
				deferred.resolve(data); 
			}).error(function(data){
				alert("Failed to fetch data");
				deferred.reject(data);
			});
		return deffered.promise;
	}
	return exports;
}