describe("controlbar behavior", function() {
  describe("linking function", function() {
    var subject, scope, element, attributes, parents;

    beforeEach(function() {
      module('app', function($provide) {
        // you can inject mocks here, like this:
        // $provide.value('foo', 'bar');
      });

      inject(function(controlbarLink) {
        subject = controlbarLink;
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

      describe("scope.foo", function() {
        it ("is a function", function() {
          expect(angular.isFunction(scope.foo));
        });

        it("returns 'bar'", function() {
          expect(scope.foo()).toBe("bar");
        });
      })
    });
  });
});