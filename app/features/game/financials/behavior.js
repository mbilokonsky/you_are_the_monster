app.directive('financials', function(financialsLink) {
  return {
    restrict:'E',
    replace: true,
    link: financialsLink,
    templateUrl: 'game.financials'
  };
}).service('financialsLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "financials"');
    scope.linkReady = true;
  };
});