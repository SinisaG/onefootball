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
            data.players = data.players.sort(compare);
			$scope.team = data;
		});
		function compare(a,b) {
		  if (a.number < b.number)
			 return -1;
		  if (a.number > b.number)
			return 1;
		  return 0;
		};
    }]);
