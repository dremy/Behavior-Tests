'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # FeatureCtrl
 * Controller of the angularApp
 */
myApp.controller('ContactCtrl', function($scope, $routeParams) {
  $scope.name = 'ContactCtrl';

  // Routing
  $scope.params = $routeParams;
});