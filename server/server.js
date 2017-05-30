'use strict';
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    //local modules
    mongoose = require('./db/mongoose'),
    User = require('./models/user'),
    Todo = require('./models/todo');

app.use(bodyParser.json());
app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then((s) => {
        res.send(s);
        console.log('response received, new todo created: ', s);
    }, (e) => {
        res.status(400).send(e);
        console.log('Unable to save response to db: ', e);
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});