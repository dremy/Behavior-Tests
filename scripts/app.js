'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('angularApp', [
    'ngRoute',
    'ngAnimate',
    //'ngCookies',
    //'ngResource',
    'puElasticInput',
    'FeaturesService'
    //'ngSanitize',
    //'ngTouch'*/
  ]);

myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/' , {
        templateUrl: 'views/main.html',
        controller: 'FeatureControl',
        resolve: {
        // I will cause a 0 second delay
          delay: function($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 0); //Values in Milliseconds
            return delay.promise;
          }
        }
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListController',
        resolve: {
          // I will cause a 0 second delay.
          delay: function($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 0);
            return delay.promise;
          }
        }
      })
      .when('/about' , {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        resolve: {
        // I will cause a 0 second delay
          delay: function($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 0);
            return delay.promise;
          }
        }
      })
      .when('/contact' , {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        resolve: {
        // I will cause a 0 second delay
            delay: function($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 0);
            return delay.promise;
          }
        }
      })
  });

  /*.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'FeatureCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/drupal', {
        templateUrl: 'views/drupal.html',
        controller: 'DrupalCtrl'        
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/

  /*app.controller('DrupalCtrl', function($scope, $resource) {
    var url = 'http://localhost/angular/drupal';

    var nodeService = $resource(url + 'node/:nodeId', {nodeId: '@nodeId'}, {
      get: {
        method: 'GET',
        transformRequest: function(data, headersGetter) {
          headersGetter()['Accept'] = 'application/hal+json'
        }
      }
    });

    $scope.getNode = function() {
      var node = nodeService.get({'nodeId': $scope.nodeId}, function() {
        $scope.node = node;
      });
    }

  });

$("")

  /* $scope.regEx = $('#field-step').keyup( function(){
    var regExMatch = new RegEx( '^' + $(this).val() );
    $_LIs = $('#steps li');
    $_LIs.hide();
    $_LIs.each(function(){
      if(this.innerText.match(regExMatch)) {
       $(this).show(); 
      }
    });
  });
  */