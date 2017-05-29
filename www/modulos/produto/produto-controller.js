produto.controller('produtoController', produtoController);

function produtoController($scope, $ionicPlatform, $state){
 
	$scope.logar = function(){
    	$state.go('listagem');
    }
}


