cadastro.controller('cadastroController', cadastroController);

function cadastroController($scope, $ionicPlatform, $state){
 
	$scope.logar = function(){
    	$state.go('perfil');
    }

}


