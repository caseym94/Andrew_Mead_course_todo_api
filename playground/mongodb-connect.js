//const MongoClient = require('mongodb').MongoClient;
'use strict';
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to db server.');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({
    //     text: 'do stuff',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Failed to insert new Todo', err);
    //     }
    //     console.log('Successfully inserted: ', result.ops);
    // });

    // db.collection('Users').insertOne({
    //     name: 'Casey',
    //     age: 22,
    //     location: 'Richlands, NC'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert new user', err);
    //     }
    //     console.log('New User created ', result);
    // });
    db.close();
});