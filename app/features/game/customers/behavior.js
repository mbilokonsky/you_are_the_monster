app.directive('customers', function(customersLink) {
  return {
    restrict:'E',
    replace: true,
    link: customersLink,
    templateUrl: 'game.customers'
  };
}).service('customersLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "customers"');
    scope.linkReady = true;
  };
});