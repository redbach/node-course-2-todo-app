const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app =  express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
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
    res.status(500).send(e);  //Student suggest 500 instead of 400 here. Instructor agreed!
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

app.delete('/todos/:id/', (req, res) => {
  // get the ID - just as we did in the app.get('/todos/:id'... route;
  var id = req.params.id;
  // validate the ID. If not valid, return 404;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  // remove todo by ID using the function we just covered in mongoose-remove.js. There are two ways this could go:
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    // success
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });  
      // if no doc, send 404
      // if doc, send doc back with 200
    // error
      // return 400 with empty body
});

app.listen(port, () => {
  console.log(`server.js is a GO at port ${port}!`);
});

module.exports = {app};