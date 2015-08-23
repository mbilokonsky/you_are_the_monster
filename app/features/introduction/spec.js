describe("introduction behavior", function() {
  describe("linking function", function() {
    var subject, scope, element, attributes, parents;

    beforeEach(function() {
      module('app', function($provide) {
        // you can inject mocks here, like this:
        // $provide.value('foo', 'bar');
      });

      inject(function(introductionLink) {
        subject = introductionLink;
      });

      scope = {};
    });

    it('is a function', function() {
      expect(angular.isFunction(subject));
    });

    describe("which, when called", function() {
      beforeEach(function() {
        subject(scope, element, attributes, parents);
      });

      it('sets scope.isReady to true [example]', function() {
        expect(scope.isReady);
      });
    });
  });
});