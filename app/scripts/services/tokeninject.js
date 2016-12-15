'use strict';

/**
 * @ngdoc service
 * @name appNameApp.tokenInjec
 * @description
 * # tokenInjec
 * Factory in the appNameApp.
 */
angular.module('appNameApp')
    .factory('tokenInject', function($cookies) {
        return {
            request: function(config) {
                var token = $cookies.get('token');

                if (token) {
                    config.headers.Authorization = 'Token ' + token;
                } else {
                    config.headers.Authorization = undefined;
                }

                return config;
            }
        };
    });
