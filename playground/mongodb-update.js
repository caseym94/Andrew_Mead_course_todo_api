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
    //     db.collection('Todos').findOneAndUpdate({
    //         _id: new ObjectID('592ca8f618f0124d4d8b2ad2')
    //     }, {
    //         $set: {
    //             text: 'ass'
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((r) => {
    //         console.log('Doc Updated to ', r);
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('592b8a09495c6e7f7169d47c')
    }, {
        $set: {
            name: 'Casey',
            location: 'Richlands, NC'
        },
        $inc: {
            age: 3
        }
    }, {
        returnOriginal: false
    }).then((r) => {
        console.log('User changed to:', r);
    });

    db.close();
});