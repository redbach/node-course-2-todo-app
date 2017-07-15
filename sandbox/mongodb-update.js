const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
      return console.log('Unable to connect to the MongoDB server.');
    }
    console.log('Connected to the MongoDB server.');


    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("59690b12df6a7f3a4d69db4d")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5964f9af86722d17652b72e2')
    }, {
        $set: {
            name: 'Chuck.e'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close(); 
});