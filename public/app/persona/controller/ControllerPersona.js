angular.module("App").controller('ControllerPersona',ControllerPersona);

function ControllerPersona($scope, $http, $log) {

    $scope.persona = {};

    $scope.listar= function(){
        $http.get('/api/persona/listar')
            .success(function(data) {
                $scope.persona.todos = data.result;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        }

        $scope.guardar = function(){
            console.log("entro");
            $http.post('/api/persona/insertar', $scope.persona)
                .success(function(data) {
                    $scope.persona.todos = {};
                    $scope.persona.todos = data;
                })
                .error(function(data) {
                    console.log('Error:' + data);
                });
        };


        $scope.deleteTodo = function(id) {
            $http.delete('/api/todos/' + id)
                .success(function(data) {
                    $scope.todos = data;
                })
                .error(function(data) {
                    console.log('Error:' + data);
                });
        };

}