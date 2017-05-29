perfil.controller('perfilController', perfilController);

function perfilController($scope, $ionicPlatform, $state){
 
	$scope.logar = function(){
    	$state.go('listagem');
    }
}


