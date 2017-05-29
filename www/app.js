var app = angular.module('starter', ['ionic','ngCordova', 'cadastro', 'login', 'perfil', 'listagem', 'produto']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

// app.config(function($stateProvider, $urlRouterProvider){
//     $stateProvider
//     .state('login', {
//           url: '/login',
//           templateUrl: 'modulos/login/login.html',
//           controller: 'loginController',
//           controllerAs: 'loginCtrl'
//       });
//       .state('cadastro', {
//           url: '/cadastro',
//           templateUrl: 'modulos/cadastro/cadastro.html',
//           controller: 'cadastroController',
//           controllerAs: 'cadastroCtrl'
//       });
//       .state('listagem', {
//           url: '/listagem',
//           templateUrl: 'modulos/listagem/listagem.html',
//           controller: 'listagemController',
//           controllerAs: 'listagemCtrl'
//       });
//     $urlRouterProvider.otherwise('/login');
// });