angular.module("Mailbox")
	.factory("InboxServices", InboxServices);
	
InboxServices.$inject = ["$http", "$q"];

function InboxServices($http,$q){
	var exports = {};
	exports.messages = [];
	exports.getUnreadMessages = function(){
		var count = 0;
		exports.messages.forEach(function(a){
			if(!a.read){
				count++;
			}
		});
		return count;
	}
	exports.starMessage = function(index){
		this.messages[index].starred = !this.messages[index].starred;
	}	
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