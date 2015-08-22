angular.module("App").factory('AllResource',function($resource){
    var factory = {
        listarPersonas:$resource('/api/persona/listar',{},{
            listar:{
                method: 'GET',
                isArray:false
            }
         }),
        guardarPersonas:$resource('/api/persona/insertar',{},{
            guardar:{
                method:'POST',
                headers:{'Content-Type':'application/json; charset=UTF-8',
                    'Accept':'application/json'}
            }
        })
    };
    return factory;
});
