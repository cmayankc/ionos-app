(function(ng) {

	'use strict';

	ng.module('ionos-app')

	.controller('UserController', UserController);

	UserController.$inject = [];

	function UserController() {
		var vm = this;

		vm.dropResult = '';

		vm.handleDrop = handleDrop;

		function handleDrop(data) {
			vm.dropResult += '\n' + data.draggedItem + ' dropped into list ' + data.dropZone + '.';
		}
	}

})(angular);