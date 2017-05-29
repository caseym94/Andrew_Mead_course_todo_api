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
    //deleteOne

    // db.collection('Todos').deleteMany({
    //     text: 'do stuff'
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne 

    // db.collection('Todos').deleteOne({
    //     text: "do stuff"
    // }).then((result) => {
    //     console.log(result)
    // });

    //findOneAndDelete

    db.collection('Users').deleteMany({
        name: 'Casey'
    }).then((result) => {
        console.log('Removed:', result);
        console.log(result.value);
    });
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('592b8a81495c6e7f7169d49a')
    }).then((res)=>{
        console.log('Found and removed: ', res);
    })

    db.close();
});