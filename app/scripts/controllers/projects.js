'use strict';


/**@ngdoc function 
 * @name appNameApp,controller:ProjectsCtrl
 * @description
 * #ProjectsCtrl
 * Controller of the appNameApp
 */

angular.module('appNameApp')
    .controller('ProjectsCtrl', function(projectService) {
        var ProjectsCtrl = this;

        ProjectsCtrl.model = {
            projects: []
        };

        projectService.getProjects()
            .then(function(data) {
                ProjectsCtrl.model.projects = data;
            }, function() {
                ProjectsCtrl.model.projects = [];
            });
    });