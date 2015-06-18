app.directive('nested', function(nestedLink) {
  return {
    restrict:'E',
    replace: true,
    link: nestedLink,
    templateUrl: 'test.nested'
  };
}).service('nestedLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "nested"');
    // NOTE: this test still passes. This is because it's inherting the scope from the <test> directive, since this is not declaring an isolate scope.
    // scope.isReady = true;
  };
});