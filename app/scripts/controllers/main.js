'use strict';

/**
 * @ngdoc function
 * @name onefootballApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onefootballApp
 */

var mainCtrl = angular.module('onefootballApp');
    mainCtrl.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('/teams/bayern.json').success(function(data) {
            $scope.team = data;
        });
    }]);
