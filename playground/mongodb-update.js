//const MongoClient = require('mongodb').MongoClient;
//const {MongoClient, ObjectID} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//mongoose.Promise = global.Promise;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID('584cce78a90f5a0d6ec6575b')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  
  db.collection('users').findOneAndUpdate({
    _id : new ObjectID('584ccdb6f2ecf80b7bef27cc')
  }, {
    $set: {
      name: "Vina",
    },
    $inc:{
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  
  
    
  // db.close();
});
