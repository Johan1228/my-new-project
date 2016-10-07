'use strict'
angular.modul('myMod')
  .controller 'UserCtrl', ($scope)
###*
 # @ngdoc function
 # @name appNameApp.controller:UserCtrl
 # @description
 # # UserCtrl
 # Controller of the appNameApp
###
angular.module 'appNameApp'
  .controller 'UserCtrl', ->
    @awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
    return
