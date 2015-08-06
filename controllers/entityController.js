/**
 * Created by OscarAndres on 06/08/2015.
 */
(function () {
    "use strict";

    function createInstance(req, res, entityModel) {
        var entity = req.body.entity || req.query.entity;
        entityModel.create(entity, function (err, response) {
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

    function getEntities(req, res, entityModel) {
        entityModel.find()
            .exec(function (err, data) {
                if (err) {
                    return res.status(500).jsonp({
                        "err": err
                    });
                }
                return res.status(200).jsonp({
                    "data": data
                });
            });
    }

    module.exports = function (express, entityModel) {
        var router = express.Router();
        router.post("/instance", function (req, res) {
            createInstance(req, res, entityModel);
        });
        router.get("/lists", function (req, res) {
            getEntities(req, res, entityModel);
        });
        return router;
    };
}());
