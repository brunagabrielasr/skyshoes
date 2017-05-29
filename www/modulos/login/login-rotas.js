login.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('login', {
          url: '/login',
          templateUrl: '../modulos/login/login.html',
          controller: 'loginController',
          controllerAs: 'loginCtrl'
      });
      /*.state('cadastro', {
          url: '/cadastro',
          templateUrl: '../modulos/cadastro/cadastro.html',
          controller: 'cadastroController',
          controllerAs: 'cadastroCtrl'
      });*/
    $urlRouterProvider.otherwise('/login');
});
