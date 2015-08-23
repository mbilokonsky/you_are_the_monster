app.directive('overview', function(overviewLink) {
  return {
    restrict:'E',
    replace: true,
    link: overviewLink,
    templateUrl: 'game.overview'
  };
}).service('overviewLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "overview"');
    scope.linkReady = true;
  };
});