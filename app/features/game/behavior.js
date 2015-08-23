app.directive('game', function(gameLink, GameController) {
  return {
    restrict:'E',
    replace: true,
    link: gameLink,
    controller: GameController,
    templateUrl: 'game'
  };
}).service('gameLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "game"');
    scope.linkReady = true;
  };
}).service('GameController', function($state) {
  return function($scope) {
    $scope.getTabClass = function(name) {
      if ($state.current.url === "/" + name) {
        return 'active';
      }
    };

    $scope.reports = ["overview", "hr", "financials", "customers", "economy"];
  };
});