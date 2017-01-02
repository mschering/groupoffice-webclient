'use strict';

/* Controllers */
GO.module('GO.Modules.GroupOffice.Notifications').controller('GO.Modules.GroupOffice.Notifications.Controller.Popup', [
		'$scope',
		'GO.Modules.GroupOffice.Notifications.Model.Notification',
		'GO.Core.Services.Application',
		'$interpolate',
		'$state',
		'$http',
		'GO.Core.Services.ServerAPI',
		'GO.Core.Services.CurrentUser',
		function ($scope, Notification, App, $interpolate,$state, $http,ServerAPI, CurrentUser) {

		$scope.store = (new Notification()).getStore({
			returnProperties: "*,creator[username],about"
		});
		
		$scope.store.load();
		
//		$http.put(ServerAPI.url('notifications/markAllSeen'));
		
//		$scope.getTemplate = function(event) {			
//			if(!event) {
//				return '';
//			}
//			var tpl = App.notificationTemplates[event.eventRecordType.name] && App.notificationTemplates[event.eventRecordType.name].tpl[event.name] ? App.notificationTemplates[event.eventRecordType.name].tpl[event.name] : 'unknown';
//		
////			if(!angular.isFunction(tpl.tpl))
//			tpl = $interpolate(tpl);
//			
//			var html =  tpl({event: event});
//			
//			return html;
//		};
		
		$scope.open = function(model) {
			var tpl = App.notificationTemplates[model.about.name] ? App.notificationTemplates[model.about.name] : false;
						
						
			this.mdPanelRef.close();
			
			if(tpl) {
				tpl.onClick.call(this, model, $state);
			}
		}.bind(this);
		
		$scope.showMore = function() {
			$state.go('notifications');
			this.mdPanelRef.close();
		}.bind(this);
		
		$scope.dismiss = function(notificationId) {
			$http.post(ServerAPI.url('notifications/dismiss/'+CurrentUser.id+'/'+notificationId));
			this.mdPanelRef.close();
		};
		
		$scope.dismissAll = function() {
			$http.post(ServerAPI.url('notifications/dismiss/'+CurrentUser.id));
			this.mdPanelRef.close();
		}.bind(this);

//		$scope.selectNotification = function (module) {
//			$state.go("modules.module", {moduleId: module.id});
//		};

}]);