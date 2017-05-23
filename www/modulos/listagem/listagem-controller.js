listagem.controller('listagemController', listagemController);

function listagemController($scope, $ionicPlatform, $state){
 
	$scope.logar = function(){
    	$state.go('listagem');
    }

    $scope.cadastrar = function(){
    	$state.go('cadastro');
    }
}


