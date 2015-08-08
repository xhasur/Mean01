(function (){
    "use strict";
    function routerConf ($routeProvider) {
        $routeProvider
            .when('/persona',
            {
                templateUrl : '/js/app/persona/views/persona.html',
                controller : 'ControllerPersona'
            })
            .when('/login',
            {
                templateUrl : '/js/app/login/views/login.html',
                controller : 'ControllerLogin'
            })
            .otherwise(
            {
                redirectTo : '/'
            });
    }
    angular.module("App").config(routerConf);
    routerConf.$inject = ["$routeProvider"]
}());;
