(function() {
  'use strict';

  angular
    .module('recarga')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('prueba', {
        url: '/prueba',
        templateUrl: 'app/prueba/prueba.html',
        controller: 'PruebaController',
        controllerAs: 'angular'
      })
      .state('second', {
        url: '/second',
        templateUrl: 'app/second/second.html',
        controller: 'SecondController',
        controllerAs: 'angular'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
