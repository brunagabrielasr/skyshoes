login.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('login', {
          url: '/login',
          templateUrl: '../modulos/login/login.html',
          controller: 'loginController',
          controllerAs: 'loginCtrl'
      })
      .state('novaSenha', {
          url: '/redefinirSenha',
          templateUrl: '../modulos/cadastro/redefinirSenha.html',
          controller: 'loginController',
          controllerAs: 'loginCtrl'
      });
	$urlRouterProvider.otherwise('/login');


});
