app.config(function($stateProvider) {
  $stateProvider.state('nested', {
    url: '/nested',
    template: '<nested></nested>'
  });
});