(function(ng) {

	'use strict';

	ng.module('ionos-app')

	.controller('AdminController', AdminController);

	AdminController.$inject = [];

	function AdminController() {
		var vm = this;

		vm.dropResult = '';

		vm.handleDrop = handleDrop;

		function handleDrop(data) {
			vm.dropResult += '\n' + data.draggedItem + ' dropped into list ' + data.dropZone + '.';
		}
	}

})(angular);