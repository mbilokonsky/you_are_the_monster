app.directive('introduction', function(introductionLink) {
  return {
    restrict:'E',
    replace: true,
    link: introductionLink,
    templateUrl: 'introduction'
  };
}).service('introductionLink', function() {
  return function(scope, element, attributes, parents) {

  };
});