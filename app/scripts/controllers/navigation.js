'use strict';


/**@ngdoc function
 * @name appNameApp,controller:NavCtrl
 * @description
 * #NavCtrl
 * Controller of the appNameApp
 */

angular.module('appNameApp').controller('NavCtrl', function ($rootScope, $cookies, $location) {
  var NavCtrl = this;
  NavCtrl.model = {loggedIn: $cookies.get('token') ? true : false}; //This is over complicated and can be shortened using angular.isDefined($cookies.get('token')) or $cookies.get('token') !== undefined
  NavCtrl.isActive = function (location) {
    return location === $location.path();
  };
  NavCtrl.logout = function () {
    $cookies.remove('token');
    $location.path('/login');
  };
  $rootScope.$on('$routeChangeStart', function () {
    NavCtrl.model.loggedIn = $cookies.get('token') ? true : false;
  });
});
