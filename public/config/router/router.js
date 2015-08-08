(function (){
    "use strict";
    function routerConf ($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl : '/js/app/login/views/login.html',
                controller : 'ControllerLogin'
            })
            .when('/registro',
            {
                templateUrl : '/js/app/persona/views/persona.html',
                controller : 'ControllerPersona'
            })
            .when('/principal',
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
