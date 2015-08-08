angular.module("App").controller('ControllerLogin', ControllerLogin);

function ControllerLogin($scope, $http, $log) {

    $scope.login = {};

    $scope.login = function ($varAuth) {
        alert($varAuth.usuario+" y pwd "+$varAuth.password);
    }
}