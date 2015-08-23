app.directive('humanResources', function(humanResourcesLink, HumanResourcesController) {
  return {
    restrict:'E',
    replace: true,
    link: humanResourcesLink,
    controller: HumanResourcesController,
    templateUrl: 'game.humanResources'
  };
}).service('humanResourcesLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "humanResources"');
    scope.linkReady = true;
  };
}).service('HumanResourcesController', function() {
  return function($scope, HRService) {
    $scope.employees = HRService.getStaff();
  };
});