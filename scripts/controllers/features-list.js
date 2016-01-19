'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # FeatureCtrl
 * Controller of the angularApp
 */
myApp.controller('ListController', function($scope, $routeParams, FeaturesDataOp) {
  $scope.name = 'ListController';

  // Routing
  $scope.params = $routeParams;
  
  // Service
  $scope.status; //Register status
  $scope.features; //Register features
  getFeatures();

  function getFeatures() {
    FeaturesDataOp.getFeatures()
      .success(function (feats) {
        if (feats.length) {
          $scope.features = feats;
        }
      })
      .error(function (error) {
        $scope.status = 'Unable to load customer data:' + error.message;
      });
  }
});
