(function(ng) {

	'use strict';

	ng.module('ionos-app', ['ui.router'])

	.controller('AppController', AppController);

	AppController.$inject = [];

	function AppController() {

	}

	function bootstrapApp() {
        ng.element(document).ready(function() {
            ng.bootstrap(document, ['ionos-app']);
        });
    }

    bootstrapApp();

})(angular);