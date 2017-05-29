produto.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('produto', {
          url: '/produto',
          templateUrl: '../modulos/produto/produto.html',
          controller: 'produtoController',
          controllerAs: 'produtoCtrl'
      });
});
