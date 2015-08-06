/**
 * Created by andreslopez.exe@gmail.com
 */
(function () {
    "use strict";

    function createPersonas(req, res, personaModel) {
        var persona = req.body.persona || req.query.persona;
        console.log(req);
        personaModel.create(persona, function (err, response) {
            if (err) {
                return res.status(500).jsonp({
                    "err": err,
                    "body": req.body,
                    "query": req.query
                });
            }
            return res.status(201).jsonp(
                {
                    data: response
                }
            );
        });
    }

    function getPersonas(req, res, personaModel) {
        personaModel.find()
            .exec(function (err, data) {
                if (err) {
                    return res.status(500).jsonp({
                        "err": err
                    });
                }
                return res.status(200).jsonp({
                    "result": data
                });
            });
    }

    module.exports = function (express, entityModel) {
        var router = express.Router();
        router.post("/insertar", function (req, res) {createPersonas(req, res, entityModel);});
        router.get("/listar", function (req, res) {getPersonas(req, res, entityModel);});
        return router;
    };
}());
