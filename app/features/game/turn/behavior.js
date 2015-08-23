app.directive('turn', function(turnLink, TurnController) {
  return {
    restrict:'E',
    replace: true,
    link: turnLink,
    controller: TurnController,
    templateUrl: 'game.turn'
  };
}).service('turnLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "turn"');
    scope.linkReady = true;
    scope.selectEvent = function(event) {
      scope.selectedEvent = event;
      element.find('#inspectEvent').modal();
    };
  };
}).service('TurnController', function() {
  return function($scope, TurnEventService) {
    $scope.events = TurnEventService.generateEvents();
  };
});