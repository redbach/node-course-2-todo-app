const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
      return console.log('Unable to connect to the MongoDB server.');
    }
    console.log('Connected to the MongoDB server.');


    // db.collection('Todos').find({
    //     _id: new ObjectID('59677cec9e28dc3b535af422')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find Todos.', err);
    // }); 

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to find Todos.', err);
    // }); 

    db.collection('Users').find({name: 'Froderick The Great'}).toArray().then((docs) => {
        console.log('USERS FOUND:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find users.', err);
    });

    // db.close(); 
});