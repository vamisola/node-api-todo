var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var Todo = require('./models/todo');
var User = require('./models/user');

const ObjectID = require('mongodb').ObjectID;


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('server is up and running!');
});


module.exports = app;















// var otherTodo = new Todo({
//     text: 'Feed the dog',
//     completed: true,
//     completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });

//User
//email - require - trim it - set type - set min lenght of 1

// var newUser = new User({
//     email: 'test!123.com',
// });

// newUser.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });