// const MongoClient = require('mongodb').MongoClient; =copy of its original state
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
      return console.log('Unable to connect to the MongoDB server.');
    }
    console.log('Connected to the MongoDB server.');

    // db.collection('Todos').insertOne({
    //   text: 'Do this thing!',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert Todo.', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // }); 

    // db.collection('Users').insertOne({
    //   name: 'Froderick The Great',
    //   age: 60,
    //   location: 'Top of the World'
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert Todo.', err);
    //   }
    //   console.log(result.ops[0]._id.getTimestamp());
    // }); 

    db.close(); 
});