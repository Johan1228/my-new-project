/// <reference path="../app.ts" />

'use strict';

module demoApp {
    export interface IUserScope extends ng.IScope {
        awesomeThings: any[];
    }

    export class UserCtrl {

        constructor (private $scope:IUserScope) {
            $scope.awesomeThings = [
              'HTML5 Boilerplate',
              'AngularJS',
              'Karma'
            ];
        }
    }
}

angular.module('demoApp')
  .controller('UserCtrl', demoApp.UserCtrl);