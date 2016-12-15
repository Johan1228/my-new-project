'use strict';


/**@ngdoc function 
 * @name appNameApp,controller:ProjectCtrl
 * @description
 * #ProjectCtrl
 * Controller of the appNameApp
 */

angular.module('appNameApp')
    .controller('ProjectCtrl', function($routeParams, projectService) {
        var ProjectCtrl = this;

        ProjectCtrl.model = {
            pk: parseInt($routeParams.pk, 10),
            project: undefined
        };

        projectService.getProject(ProjectCtrl.model.pk)
            .then(function(datum) {
                ProjectCtrl.model.project = datum;
            }, function() {
                ProjectCtrl.model.project = undefined;
            });

    });