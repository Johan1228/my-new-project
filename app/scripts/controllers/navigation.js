'use strict';


/**@ngdoc function 
 * @name appNameApp,controller:NavCtrl
 * @description
 * #NavCtrl
 * Controller of the appNameApp
 */

angular.module('appNameApp')    .controller('NavCtrl', ['$rootScope', '$location', '$cookiesStore', function($rootScope, $cookies, $location) {        
    var NavCtrl = this;        
    NavCtrl.model = {       loggedIn: $cookiesStore.get('token') ? true : false         };        
    NavCtrl.isActive = function(location) {            
        return location === $location.path();        
    };        
    NavCtrl.logout = function() {            
        $cookiesStore.remove('token');            
        $location.path('/login');        
    };        
    $rootScope.$on('$routeChangeStart', function() {            
        NavCtrl.model.loggedIn = $cookiesStore.get('token') ? true : false;        
    });    
}]);