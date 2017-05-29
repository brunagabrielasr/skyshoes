perfil.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('perfil', {
          url: '/perfil',
          templateUrl: '../modulos/perfil/perfil.html',
          controller: 'perfilController',
          controllerAs: 'produtoCtrl'
      });
});
