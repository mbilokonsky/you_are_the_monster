app.directive('economy', function(economyLink) {
  return {
    restrict:'E',
    replace: true,
    link: economyLink,
    templateUrl: 'game.economy'
  };
}).service('economyLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "economy"');
    scope.linkReady = true;
  };
});