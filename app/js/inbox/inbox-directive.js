angular.module("Mailbox").directive("inbox", inboxDirective);
function inboxDirective(){
	var directive = {};
	directive = {
			restrict : "AE",
			templateUrl : "js/inbox/inbox-temp.html",
			controllerAs : "inbox",
			controller : function($scope,InboxServices){
				this.messages = [];
				this.unreadMessages = 0;
				InboxServices.getMessages()
					.then(angular.bind(this, function then(){
						this.messages = InboxServices.messages;
						this.unreadMessages = InboxServices.getUnreadMessages();
						this.starMessage = function(index){
							InboxServices.starMessage(index);
						}
						$scope.$watch(function () {
							return InboxServices.messages;
						}, function (newValue, oldValue) {
							//alert(newValue);
						});
					}));				
			},
			link : function(scope,ele,attrs,ctrl){
			 
			}
	}
	return directive;
}

