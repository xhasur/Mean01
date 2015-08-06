var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('express-logger');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


app.use(express.static(__dirname + '/public'));
app.use(logger({path: "logfile.txt"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": false}));

mongoose.connect('mongodb://localhost:27017/Node');


/*Model*/
var entityModel = require("./models/entity.js")(mongoose);
/*controllers*/
var entityController = require("./controllers/entityController.js")(express, entityModel);
/*endpoints*/
app.use("/api/v1/entity", entityController);







var Todo = mongoose.model('Todo', {
    text: String
});

// Rutas de nuestro API
app.get('/api/todos', function (req, res) {
    Todo.find(function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    });
});

app.post('/api/todos', function (req, res) {
    Todo.create({
        text: req.body.text,
        done: false
    }, function (err, todo) {
        if (err) {
            res.send(err);
        }

        Todo.find(function (err, todos) {
            if (err) {
                res.send(err);
            }
            res.json(todos);
        });
    });
});

app.delete('/api/todos/:todo', function (req, res) {
    Todo.remove({
        _id: req.params.todo
    }, function (err, todo) {
        if (err) {
            res.send(err);
        }

        Todo.find(function (err, todos) {
            if (err) {
                res.send(err);
            }
            res.json(todos);
        });

    })
});


app.get('p', function (req, res) {
    res.sendfile('./index.html');
});

app.all('*', function (req, res) {
    res.sendFile(__dirname+'/public/index.html')
})

servidor = app.listen(8080, function () {
    console.log("Arrancado");
});
