'use strict';

/**
 * @ngdoc filter
 * @name appNameApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the appNameApp.
 */
angular.module('appNameApp').filter('myFilter', function () {
  return function (input) {
    return 'myFilter filter:' + input;
  };
});
