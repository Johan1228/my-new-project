'use strict';

/**
 * @ngdoc service
 * @name appNameApp.settings
 * @description
 * # settings
 * Constant in the appNameApp.
 */
angular.module('appNameApp')
    .constant('AUTH_SERVICE_BASE_URI', 'http://userservice.staging.tangentmicroservices.com/')
    .constant('PROJECT_SERVICE_BASE_URI', 'http://projectservice.staging.tangentmicroservices.com/api/v1/');