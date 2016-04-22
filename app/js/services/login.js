(function(ng) {

	'use strict';

	ng.module('ionos-app')

	.service('loginService', LoginService);

	LoginService.$inject = ['$q'];

	function LoginService($q) {

		var adminCredentials 	= { username: 'admin', password: 'admin' };
		var userCredentials 	= { username: 'user', password: 'user' };

		this.login = function(data) {

			var deferred = $q.defer();

			if(!data || !data.username || !data.password) {
				deferred.resolve( { success: false, message: 'Invalid username or password.' } );
			}

			if(data.username === adminCredentials.username && data.password === adminCredentials.password) {
				deferred.resolve( { success: true, loginType: 'admin' } );
			} else if(data.username === userCredentials.username && data.password === userCredentials.password) {
				deferred.resolve( { success: true, loginType: 'user' } );
			}

			return deferred.promise;
		};
	}

})(angular);