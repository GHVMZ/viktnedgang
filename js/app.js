var app = angular.module('app', ['ngRoute', 'ngAnimate']);

  app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
      templateUrl: './start.html'
    })

    .when('/start', {
      templateUrl: './start.html'
    })

    .when('/info', {
      templateUrl: './info.html'
    })

    .when('/rakna-ut', {
      templateUrl: './rakna.html'
    })

    .otherwise({
      redirectTo: '/'
    });

}]);
