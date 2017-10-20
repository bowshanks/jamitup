var jamitup = angular.module('jamitup', ['ui.router','ngAnimate', 'ngSanitize']);


jamitup.config(function($stateProvider,$urlRouterProvider,$httpProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: './views/home.html',
      controller: 'mainCtrl'
    })
    .state('test',{
      url: '/test',
      templateUrl: './views/test.html',
      controller: 'testCtrl'
    })
});

jamitup.run(function($rootScope, $state) {
  $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
      window.scrollTo(0, 0);
  });
});
