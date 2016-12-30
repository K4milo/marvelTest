'use strict';

var app = angular.module('marvelApp', [
  'ngRoute',
  'ngAnimate'
])

.config(function ($routeProvider) {
  // set routes
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});