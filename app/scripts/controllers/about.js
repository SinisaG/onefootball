'use strict';

/**
 * @ngdoc function
 * @name onefootballApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the onefootballApp
 */
angular.module('onefootballApp')
  .controller('AboutCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $rparams) {
        $http.get('teams/bayern.json').success(function(data) {
            var fplayer;
            for(var i = 0; i<data.players.length;i++){
                if(data.players[i].id === $rparams.id){
                    fplayer= data.players[i];
                    break;
                }
            }
            $scope.player = fplayer;
        });
  }]);
