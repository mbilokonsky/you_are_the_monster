app.directive('inspect', function(inspectLink, InspectLinkController) {
  return {
    restrict:'E',
    replace: true,
    link: inspectLink,
    controller: InspectLinkController,
    templateUrl: 'game.turn.inspect'
  };
}).service('inspectLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "inspect"');

  };
}).service('InspectLinkController', function() {
  return function($scope) {
    $scope.$watch('selectedEvent', function(newItem) {
      if (!newItem) { return; }
      $scope.actionOutput = newItem.actions.reduce(function(acc, action) {
        acc[action.bindTo] = {value: null};
        return acc;
      }, {});
    });

    $scope.confirm = function() {
      $scope.selectedEvent.choose($scope.actionOutput);
    };
  };
});