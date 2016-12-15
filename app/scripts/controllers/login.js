'use strict';


/**@ngdoc function 
 * @name appNameApp,controller:LoginCtrl
 * @description
 * #LoginCtrl
 * Controller of the appNameApp
 */

angular.module('appNameApp')
    .controller('LoginCtrl', function(apiService, $location) {
        var LoginCtrl = this;

        LoginCtrl.model = {
            username: '',
            password: '',
            errorMessage: '',
            errorPassword: '',
            errorUsername: '',
            successMessage: ''
        };

        LoginCtrl.login = function() {
            apiService.login(LoginCtrl.model.username, LoginCtrl.model.password)
                .then(function() {
                    LoginCtrl.model.successMessage = 'You are now logged in.';
                    LoginCtrl.model.errorMessage = '';

                    LoginCtrl.model.username = '';
                    LoginCtrl.model.password = '';

                    $location.path('/home');
                }, function(response) {
                    LoginCtrl.model.successMessage = '';

                    if (!response.username && !response.password) {
                        LoginCtrl.model.errorMessage = 'Unable to login with provided credentials.';
                    } else {
                        LoginCtrl.model.errorMessage = '';
                        LoginCtrl.model.errorUsername = response.username[0];
                        LoginCtrl.model.errorPassword = response.password[0];
                    }
                });
        };
    });