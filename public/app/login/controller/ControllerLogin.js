angular.module("App").controller('ControllerLogin', ControllerLogin);

function ControllerLogin($scope, $http, $log,$location) {

    $scope.login = {};

    $scope.login = function ($varAuth) {
        $log.info($varAuth.usuario+" y pwd "+$varAuth.password);
        $location.path("/principal");


    }
    
    $scope.limpiar= function ($varAuth) {
        $varAuth.usuario="";
        $varAuth.password="";
        console.log("");
    }
}