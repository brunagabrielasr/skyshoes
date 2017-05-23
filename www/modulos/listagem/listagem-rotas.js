listagem.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('listagem', {
          url: '/listagem',
          templateUrl: '../modulos/listagem/listagem.html',
          controller: 'listagemController',
          controllerAs: 'listagemCtrl'
      });
    $urlRouterProvider.otherwise('/login');
});
