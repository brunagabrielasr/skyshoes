sapato.controller('sapatoController', sapatoController);

function sapatoController($scope, $ionicPlatform, $state){
 
	$scope.logar = function(){
    	$state.go('cadastro');
    }

}


