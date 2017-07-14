const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
      return console.log('Unable to connect to the MongoDB server.');
    }
    console.log('Connected to the MongoDB server.');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Walk the dog.'}).then((result) => {
    //     console.log(result);
    // }); 

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Do the other thing!'}).then((result) => {
    //     console.log(result);
    // }); 

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Do the other thing!'}).then((result) => {
    //     console.log(result);
    // }); 


// deleteMany EXERCISE
    // db.collection('Users').deleteMany({name: 'Froderick The Great'}).then((result) => {
    //     console.log(result);
    // }); 

//findOneAndDelete EXERCISE
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("596615ce6b0cec047444b9d2")
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    }); 

    // db.close(); 
});