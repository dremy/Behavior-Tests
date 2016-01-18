'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # FeatureCtrl
 * Controller of the angularApp
 */
myApp.controller('FeatureControl', function($scope, $routeParams, FeaturesDataOp) {
  $scope.name = 'FeatureControl';

  // Routing
  $scope.params = $routeParams;

  // Blank Feature
  this.feature = featureEmbedly; //featureEmpty;


  ///////////////////////
  /// Feature
  ///////////////////////
  $scope.descript = this.feature.descript;

  ///////////////////////
  /// Scenarios
  ///////////////////////

  //Before loading scenarios to scope, first...
  if (this.feature.scenarios) {   //Validate a scenario exists
    var scenariosCount = this.feature.scenarios.length; // Grab the number of scenarios
    var scenariosIdCount = 0; // And prepare to validate that each scenario has an ID

    for (var i = 0; i < scenariosCount; i++) {
      if (this.feature.scenarios[i].scenarioId === i) { //If the ID value is not empty, then increment scenariosIDCount
        scenariosIdCount++;
      } 
    };
    
    if (scenariosCount === scenariosIdCount) { //If each Scenario has an ID, then...
      $scope.scenarios = this.feature.scenarios; // Set the scenarios to scope      
    }
  };

  $scope.addScenario = function () {
    //var newScenarioFirstStep = $scope.scenarios.length+1;
    var scenarioNumber = $scope.scenarios.length;
    console.log('Before: ' + scenarioNumber);
    $scope.scenarios.push({
      scenarioId: scenarioNumber,
      steps: [
        {
          id: '0',
        }
      ]
    });
// Checks the above is working properly
//    var newScenarioNumber = $scope.scenarios.length;
//    console.log('After: ' + newScenarioNumber);
  };

  $scope.removeScenario = function (e) {
    var lastScenario = $scope.scenarios.length-1;
    console.log('Last Scenario is: ' + lastScenario);
    console.log('Scenario ID is: ' + e);
    if (lastScenario >= 1) {
      $scope.scenarios.splice(lastScenario);
    };
  };

  /* Scenario Steps */

  if ($scope.scenarios) {
    $scope.addStep = function (e) {
      console.log('Scenario Id#: '+ e);
      var newStepNo = $scope.scenarios[e].steps.length;
      var step = {id: newStepNo++};
      $scope.scenarios[e].steps.push(step);
    };

    $scope.removeStep = function (e) {
      var lastStep = $scope.scenarios[e].steps.length-1;
      if (lastStep >= 1) {
        $scope.scenarios[e].steps.splice(lastStep);
      };
    };
  }

  ///////////////////////
  /// Background
  ///////////////////////

  if (this.feature.background.steps.length) {
    $scope.backgroundSteps = this.feature.background.steps;
  }

  /* Background Steps */
  $scope.addBackgroundStep = function () {
    var newBackgroundStepNo = $scope.backgroundSteps.length+1;
    $scope.backgroundSteps.push({id: newBackgroundStepNo});
  };

  $scope.removeBackgroundStep = function () {
    var lastBackgroundStep = $scope.backgroundSteps.length-1;
    if (lastBackgroundStep >= 1) {
      $scope.backgroundSteps.splice(lastBackgroundStep);
    }
  };
  
  /* Background Toggle*/  
  $scope.background = 0;
  
  if (this.feature.background.steps.length > 1) {
    $scope.background = 1;
  }; 

  $scope.setBackground = function() {
    $scope.background = 1;
  };

  $scope.unsetBackground = function() {
    $scope.background = 0;
  };

  $scope.backgroundSet = function() {
    return $scope.background === 1;
  }; 

  $scope.addFeature = function(e) {
    console.log(e.target);
  };

  ///////////////////////
  /// Coder
  ///////////////////////

  /* Scenario Show */
  $scope.descriptionFilled = function () {
    if ($scope.descript.userType && $scope.descript.goal && $scope.descript.reason) {
      return true;      
    };
  };

  $scope.nbsp = '&nbsp;&nbsp;';
});
