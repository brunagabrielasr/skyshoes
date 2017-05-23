menu.controller('menuController', menuController);

function menuController($scope, $ionicPlatform, $state){
 
	$scope.login = function(){
    	$state.go('listagem');
    }

    $scope.cadastrar = function(){
    	$state.go('cadastro');
    }
}


