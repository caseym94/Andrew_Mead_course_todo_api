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
    // db.collection('Todos').find({
    //     _id: new ObjectID('592b6751869ee61660ccdb5c')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(docs);
    // }, (err) => {
    //     console.log('unable to fetch Todos collection ', err);
    // });
    db.collection('Users').find({
        name: 'Casey'
    }).toArray().then((doc) => {
        console.log('Users:', doc);
    }, (err) => {
        console.log('unable to fetch Todos collection ', err);
    });


    db.close();
});