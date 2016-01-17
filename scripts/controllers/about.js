'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
myApp.controller('AboutCtrl', function($scope, $routeParams) {
  $scope.name = 'AboutCtrl';

  // Routing
  $scope.params = $routeParams;
});