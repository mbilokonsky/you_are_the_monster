var deps = [];
if (window.jasmine) {
  deps.push("ngMock");
}
var app = angular.module("app", deps);