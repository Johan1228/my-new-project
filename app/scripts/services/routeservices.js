'use strict';

/**
 * @ngdoc service
 * @name appNameApp.routeResolveService
 * @description
 * # routeResolveService
 * Service in the francoisAngularJsApp.
 */

angular.module('appNameApp', [])
    .service('routeResolveService', function($q, $cookies, $location) {
        var routeResolveService = this;

        routeResolveService.loggedIn = function() {
            var deferred = $q.defer();

            if ($cookies.get('token')) {
                deferred.resolve();
            } else {
                $location.path('/login');
                deferred.reject();
            }

            return deferred.promise;
        };

        routeResolveService.loggedOut = function() {
            var deferred = $q.defer();

            if (!$cookies.get('token')) {
                deferred.resolve();
            } else {
                $location.path('/');
                deferred.reject();
            }

            return deferred.promise;
        };
    });