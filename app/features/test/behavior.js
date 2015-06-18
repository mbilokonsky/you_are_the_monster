app.directive('test', function(testLink) {
  return {
    restrict:'E',
    replace: true,
    link: testLink,
    templateUrl: 'test'
  };
}).service('testLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "test"');
    scope.linkReady = true;
  };
});