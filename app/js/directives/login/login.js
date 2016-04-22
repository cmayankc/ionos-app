(function(ng) {

	'use strict';

	ng.module('ionos-app')

	.directive('login', Login);

	Login.$inject = [];

	function Login() {
		var _directive = {};

		_directive.restrict 	= 'AE';
		_directive.scope 		= {};
		_directive.templateUrl 	= 'js/directives/login/login.html';
		_directive.link 		= linkFn;
		_directive.controller	= controllerFn;
		_directive.controllerAs = 'loginCtrl';

		return _directive;
	}

	function linkFn($scope, $element, $attrs) {

	}

	controllerFn.$inject = ['$scope', '$state', 'loginService'];

	function controllerFn($scope, $state, loginService) {

		var vm = this;

		vm.loginData = { username: null, password: null };

		vm.login = login;

		function login() {

			loginService.login(vm.loginData)
			.then(function(res) {
				if(res.success) {
					$state.go(res.loginType);
				} else {
					alert(res.message);
				}
			});
		}

	}

})(angular);