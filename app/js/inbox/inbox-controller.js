angular.module("Mailbox")
	.controller("InboxCtrl", InboxController);
	
function InboxController(){
	var vm = this;
	vm.name = "My Inbox";
	vm.messages = [];
}