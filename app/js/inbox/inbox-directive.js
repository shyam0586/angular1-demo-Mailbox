angular.module("Mailbox").directive("inbox", inboxDirective);
function inboxDirective(){
	var directive = {};
	directive = {
			restrict : "AE",
			templateUrl : "js/inbox/inbox-temp.html",
			controllerAs : "inbox",
			controller : function($scope,InboxServices){
				this.messages = [];
				this.unreadMessage = 0;
				InboxServices.getMessages()
					.then(angular.bind(this, function then(){
						this.messages = InboxServices.messages;
						this.unreadMessage = InboxServices.getUnreadMessages();
						this.starMessage = function(index){
							InboxServices.starMessage(index);
						}
						this.goToMessage  = function(id,index){ 
							InboxServices.goToMessage(id,index);
							this.unreadMessage = InboxServices.getUnreadMessages();
						}
						this.mailSelector = function(index){
							this.messages[index].selected = !this.messages[index].selected;
						}
						this.removeMessage = function(){
							InboxServices.removeMessage();
							this.unreadMessage = InboxServices.getUnreadMessages();
						}
					}));				
			},
			link : function(scope,ele,attrs,ctrl){
				
			}
	}
	return directive;
}

