app.config(function($stateProvider) {
  $stateProvider.state('game', {
    url: '/game',
    template: '<game></game>',
    controller: function($state) {
      $state.go("game.overview");
    }
  })
  .state('game.overview', {
    url: '/overview',
    template: '<overview></overview>'
  })
  .state('game.hr', {
    url: '/hr',
    template: '<human-resources></human-resources>'
  })
  .state('game.financials', {
    url: '/financials',
    template: '<financials></financials>'
  })
  .state('game.customers', {
    url: '/customers',
    template: '<customers></customers>'
  })
  .state('game.economy', {
    url: '/economy',
    template: '<economy></economy>'
  })
  .state('game.turn', {
    url: '/turn',
    template: '<turn></turn>'
  });
});