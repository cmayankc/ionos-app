(function(ng) {

	'use strict';

	ng.module('ionos-app')

	.config(RouteConfig);

	RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RouteConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('admin', {
			url: '/admin',
      		templateUrl: 'js/states/admin/admin.html',
      		controller: 'AdminController',
      		controllerAs: 'adminCtrl'
		})

		.state('user', {
			url: '/user',
      		templateUrl: 'js/states/user/user.html',
      		controller: 'UserController',
      		controllerAs: 'userCtrl'
		});

		$urlRouterProvider.otherwise('/');
	}

})(angular);