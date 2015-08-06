(function (){
    "use strict";
    function routerConf ($routeProvider) {
        $routeProvider
            .when('/persona',
            {
                templateUrl : '/js/app/persona/views/persona.html',
                controller : 'ControllerPersona'
            })
            .otherwise(
            {
                redirectTo : '/'
            });
    }
    angular.module("App").config(routerConf);
    routerConf.$inject = ["$routeProvider"]
}());;
