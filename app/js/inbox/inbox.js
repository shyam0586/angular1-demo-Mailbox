angular.module("Mailbox")
	.factory("InboxServices", InboxServices);
	
InboxServices.$inject = ["$http", "$q","$location"];

function InboxServices($http,$q, $location){
	var exports = {};
	exports.messages = [];
	exports.getUnreadMessages = function(){
		var count  = 0;
		exports.messages.map(function(a){
			if(!a.read){
				count++;
			}
		});
		return count;
	}
	exports.starMessage = function(index){
		this.messages[index].starred = !this.messages[index].starred;
	}	
	exports.removeMessage = function(){
		var arrayLength = exports.messages.length;
		for(var i = arrayLength-1; i >= 0; i--){
			if(exports.messages[i].selected){
				exports.messages.splice(i,1);
			}
		}
	}
	exports.goToMessage = function(id,index) {
		exports.messages[index].read = true;
		//$location.path('inbox/:' + id);
		//exports.getUnreadMessages();
     
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