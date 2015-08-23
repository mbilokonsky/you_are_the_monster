app.directive('action', function(actionLink) {
  return {
    restrict:'E',
    replace: true,
    link: actionLink,
    scope: {
      action: "=",
      output: "=",
      source: "="
    },
    templateUrl: 'game.turn.inspect.action'
  };
}).service('actionLink', function() {
  return function(scope, element, attributes, parents) {
    console.log('Linking function executed for feature "action"');
  };
});