app.directive('mock', function(mockLink) {
  return {
    restrict:'E',
    replace: true,
    link: mockLink,
    templateUrl: 'test.mock'
  };
}).service('mockLink', function($http) {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "mock"');
    scope.linkReady = true;
    $http.get("/mockData").success(function(result) {
      scope.data = result;
    });
  };
});