





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