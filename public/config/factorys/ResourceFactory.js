angular.module("App").factory('AllResource',function($resource){
    var factory = {
        listarPersonas:$resource('/api/persona/listar',{},{
            listar:{
                method: 'GET',
                isArray:false
            }
         })
    };
    return factory;
});
