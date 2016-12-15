'use strict';

/**
 * @ngdoc service
 * @name appNameApp.apiService
 * @description
 * # apiService
 * Service in the appNameApp.
 */

angular.module('appNameApp')
    .service('apiService', function($http, $q, $cookies, AUTH_SERVICE_BASE_URI) {
        //Create a reference to this, will allow for easier testing of the service and clear code
        var apiService = this;

        apiService.login = function(username, password) {
            var deferred = $q.defer();
            var url = AUTH_SERVICE_BASE_URI + 'api-token-auth/';

            $http.post(url, {
                username: username,
                password: password
            }).success(function(response) {
                if (response.token) {
                    $cookies.put('token', response.token);
                }
                deferred.resolve(response);
            }).error(function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        };

    });