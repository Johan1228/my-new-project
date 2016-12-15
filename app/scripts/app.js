'use strict';

/**
 * @ngdoc overview
 * @name appNameApp
 * @description
 * # appNameApp
 *
 * Main module of the application.
 */
angular
    .module('appNameApp', [
        'ngAnimate',
        'ngCookiesStore',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])

.config(function($routeProvider, $httpProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'Home',
            resolve: {
                loggedIn: function(routeResolveService) {
                    return routeResolveService.loggedIn();
                }
            }
        })
        .when('/projects', {
            templateUrl: 'views/projects.html',
            controller: 'ProjectsCtrl',
            controllerAs: 'Projects',
            resolve: {
                loggedIn: function(routeResolveService) {
                    return routeResolveService.loggedIn();
                }
            }
        })
        .when('/projects/:pk', {
            templateUrl: 'views/project.html',
            controller: 'ProjectCtrl',
            controllerAs: 'Project',
            resolve: {
                loggedIn: function(routeResolveService) {
                    return routeResolveService.loggedIn();
                }
            }
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'Login',
            resolve: {
                loggedOut: function(routeResolveService) {
                    return routeResolveService.loggedOut();
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });

    $httpProvider.interceptors.push('tokenInject');
});