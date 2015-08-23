app.directive('controlbar', function(controlbarLink, controlbarController) {
  return {
    restrict:'E',
    replace: true,
    link: controlbarLink,
    controller: controlbarController,
    templateUrl: 'controlbar'
  };
}).service('controlbarLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "controlbar"');
    scope.linkReady = true;
  };
}).service('controlbarController', function() {
  return function($scope, resources) {
    $scope.resources = resources;
  };
});