'use strict';

angular.module('GO.Modules.GroupOffice.Messages').controller('GO.Modules.GroupOffice.Messages.Controller.Thread', [
	'$scope',
	'$stateParams',
	'$timeout',
	'$state',
	'$q', 
	'GO.Core.Factories.Models.Tag', 
	'GO.Modules.GroupOffice.Messages.Model.Thread',	
	'GO.Modules.GroupOffice.Contacts.ContactEditor',	
	'GO.Modules.GroupOffice.Contacts.Model.Contact',
	function ($scope, $stateParams, $timeout, $state, $q, Tag, Thread, ContactEditor, Contact) {

//						var message = new Message($stateParams.accountId, $stateParams.threadId);
//						$scope.threadStore = message.getStore({limit: 5});//new Store('email/accounts/'+$stateParams.accountId+'/threads/'+$stateParams.threadId, {limit: 5});				


		$scope.threadStore.$storeRoute = 'messages/threads/' + $stateParams.threadId + '/messages';
		$scope.threadStore.$modelConstructorArgs = [$stateParams.threadId];


		
		$scope.openContact = function (emailAddress, personal) {

			var contact = new Contact();

			var store = contact.getStore({returnProperties: 'id'});
			store.$loadParams.q = [
				['joinRelation', 'emailAddresses'],
				['andWhere', ['like', {'emailAddresses.email': emailAddress}]],
				['limit', 1],
				['offset', 0]
			];

			return store.load().then(function (data) {

				if (data.store.items.length) {
					$state.go("contacts.contact", {contactId: data.store.items[0].id});
				} else {
					ContactEditor.show({
						contact: new Contact(),
						attributes: {
							name: personal, emailAddresses: [{email: emailAddress}]
						}
					});
				}
			}.bind(this));
		};				
	

		$scope.changeType = function (thread, type) {

			thread.type = type;
			thread.save().then(function () {
				//$scope.store.load();
				//$state.go('^');
				
				var index = $scope.store.findIndexByAttribute('id', thread.id);
				$scope.store.remove(index);
				var selectedItems = $scope.store.select([index]);
				
				if(selectedItems[0]) {
					$state.go('messages.thread', {threadId: selectedItems[0].id});
				}
				
				
			});
		};

		var tagStore = new Tag().getStore({returnProperties: "id,name,color", limit: 0});

		$scope.getTags = function (input) {

			var deferred = $q.defer();

			tagStore.load({
				searchQuery: input
			}).then(function (result) {
//											console.log(data);
				deferred.resolve(result.store.items);
			});

			return deferred.promise;
		};

		$scope.createTag = function (chip, index) {

			if (!chip.name) {
				chip = {name: chip};
			}

			$scope.thread.tags[index] = chip;
			$scope.tags[index] = chip;
			
			$scope.thread.save().then(function() {
				$scope.tags = angular.copy($scope.thread.tags);
			});
		};
		
		$scope.removeTag = function (chip, index) {			
			$scope.thread.tags[index].markDeleted = true;
			$scope.thread.save().then(function() {
				$scope.tags = angular.copy($scope.thread.tags);
			});
		};


//		$timeout(function(){
		$scope.threadStore.load().then(function (data) {
				
				//reset write only prop type because it might have been set in the changeType funciton
				$scope.thread.type = null;
				$scope.thread.loadData(data.response.data.thread);
				$scope.tags = angular.copy(data.response.data.thread.tags);

			//Mark message as read after 3s.
				if ($scope.thread.seen === false) {
					var timer = $timeout(function () {
						$scope.thread.seen = true;
						$scope.thread.save();
					}, 3000);

					$scope.$on(
									"$destroy",
									function (event) {
										$timeout.cancel(timer);
									}
					);
				}
				
				
//				console.profileEnd('thread');
			});
//		}, 1000);


	}]);


