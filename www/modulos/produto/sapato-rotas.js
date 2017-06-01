cadastro.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('cadastro', {
          url: '/cadastro',
          templateUrl: '../modulos/cadastro/cadastro.html',
          controller: 'cadastroController',
          controllerAs: 'cadastroCtrl'
      });
});
