var FeaturesService = angular.module('FeaturesService', []);
FeaturesService.factory('FeaturesDataOp', ['$http', function ($http) {
  
  // Set Service Location
  var urlBase = 'http://localhost/angular/drupal/features/node';
 
  // Set Empty Object
  var FeaturesDataOp = {};

  // Get List of Features
  FeaturesDataOp.getFeatures = function () {
    return $http.get(urlBase+'.json');
  };

  // Add Feature to Service
  FeaturesDataOp.addFeature = function (feat) {
    return $http.post(urlBase, feat);  
  }

  // Return the full Service object
  return FeaturesDataOp;
}]);