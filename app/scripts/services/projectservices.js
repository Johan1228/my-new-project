'use strict';

/**
 * @ngdoc service
 * @name appNameApp.projectService
 * @description
 * # projectService
 * Service in the appNameApp.
 */

angular.module('appNameApp', [])
    .service('projectService', function($q, $http, PROJECT_SERVICE_BASE_URI) {

        var projectService = this;

        projectService.getProjects = function() {
            var deferred = $q.defer();
            var url = PROJECT_SERVICE_BASE_URI + 'projects/';

            $http.get(url)
                .success(function(response) {
                    deferred.resolve(response);
                })
                .error(function(response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        };

        projectService.getProject = function(pk) {
            var deferred = $q.defer();
            var url = PROJECT_SERVICE_BASE_URI + 'projects/';

            $http.get(url + pk + '/')
                .success(function(response) {
                    deferred.resolve(response);
                })
                .error(function(response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        };

    });