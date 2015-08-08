var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('express-logger');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use("/js", express.static(__dirname + '/public'));
app.use("/bower", express.static(__dirname + '/bower_components'));
app.use(logger({path: "logfile.txt"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": false}));

mongoose.connect('mongodb://localhost:27017/Node');

/*Model*/
var personaModel = require("./models/persona.js")(mongoose);
/*controllers*/
var personaController = require("./controllers/personaController.js")(express, personaModel);
/*endpoints*/
app.use("/api/persona", personaController);




app.get("/", function (req,res) {
    res.sendfile("./public/index.html");
})

servidor = app.listen(8080, function () {
    console.log("Arrancado server" );
});
