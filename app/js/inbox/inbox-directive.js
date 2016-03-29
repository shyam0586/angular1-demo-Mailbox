angular.module("Mailbox").directive("inbox", inboxDirective);
function inboxDirective(){
	var directive = {};
	directive = {
			restrict : "AE",
			templateUrl : "js/inbox/inbox-temp.html",
			controllerAs : "inbox",
			controller : function(InboxServices){
				this.messages = [];
				InboxServices.getMessages()
					.then(angular.bind(this, function then(){
						this.messages = InboxServices.messages;
					}));
			}
	}
	return directive;
}

