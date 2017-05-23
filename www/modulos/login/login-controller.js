login.controller('loginController', loginController);

function loginController($scope, $ionicPlatform, $state){
 
	$scope.logar = function(){
    	$state.go('listagem');
    }

    $scope.cadastrar = function(){
    	$state.go('cadastro');
    }

    $scope.redefinirSenha = function(){
    	$state.go('novaSenha')
    }
}


