   var app = angular.module('app', ['ui.router']);

        app.config(function ($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise("/main");

          $stateProvider
            .state('/cab', {
              url: '/cab',
              templateUrl: '/app/tasks/tpl.html',
              controller: 'tasksCtrl as ctrl',
              params: {
                name: undefined,
                password: undefined
              }
            })
            .state('/main', {
              url: "/main",
              templateUrl: '/app/login/tpl.html',
              controller: 'loginCtrl as ctrl',
            })
        });