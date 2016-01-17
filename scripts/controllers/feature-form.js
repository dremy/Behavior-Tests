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
  this.feature = featureEmpty;
  //console.log(this.feature);
  //console.log(this.feature.scenarios[0]);
  //$scope.feature = this.feature;
  // Full Feature
  // this.feature = feature;

  $scope.descript = this.feature.descript;
  $scope.nbsp = '&nbsp;&nbsp;'

  /* Scenario Show */
  $scope.descriptionFilled = function () {
    if ($scope.descript.userType && $scope.descript.goal && $scope.descript.reason) {
      return true;      
    };
  };


  /*if (this.feature.length) {
    console.log(this.feature);
  }*/
  //TO DO - add || scenario.title.length NVM .title IS A METHOD, CANT BE USED
  if (this.feature.scenarios.length && this.feature.scenarios[0].steps.length) { //If the first scenario has steps
    $scope.scenarios = this.feature.scenarios;
    console.log($scope.scenarios); // Then set the scenario values
    //$scope.scenarios = this.feature.scenarios;  
    //console.log($scope.scenarios);
    //$.each($scope.scenarios, function(i, val) {
    //  console.log($scope.scenarios[i].steps);
    //});
  };

  $scope.addScenario = function () {
    //var newScenarioFirstStep = $scope.scenarios.length+1;
    var scenarioNumber = $scope.scenarios.length;
    console.log(scenarioNumber);
    $scope.scenarios.push({
      id: scenarioNumber,
      steps: [
        {
          id: '0',
        }
      ]
    });
  };

  $scope.removeScenario = function () {
    console.log("Remove Scenario");
  };

/*  if (this.feature.scenarios[0].steps.length) {
    // If there's more than one scenario AND the first scenario has steps
    $scope.scenariossteps = this.feature.scenarios[0].steps;
  }*/    

  /* Scenario Steps */

  if ($scope.scenarios.length) {
    $scope.addStep = function (e) {
      console.log(e);
      var newStepNo = $scope.scenarios[e].steps.length+1;
      var step = {id: newStepNo};
      $scope.scenarios[e].steps.push(step);
    };

    /*$scope.removeStep = function () {
      var lastStep = $scope.steps.length-1;
      if (lastStep >= 1) {
        $scope.steps.splice(lastStep);
      }
    };*/
  }

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

  $(window).scroll(function() {
    // Get scroll Y position
    var scrollY = $(window).scrollTop();
    var scrollingDiv = $('.code-box');

    scrollingDiv
      .stop()
      .animate({'marginTop': ((scrollY + 30)+'px')}, 'slow');
  });
});
