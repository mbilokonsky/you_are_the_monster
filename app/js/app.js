var deps = ['ui.router'];
if (window.jasmine) {
  deps.push("ngMock");
}
var app = angular.module("app", deps);

app.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/");
  // $locationProvider.html5Mode(true);
});