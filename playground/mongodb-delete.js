const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');

//mongoose.Promise = global.Promise;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  console.log(result);
});
//deleteOne

//findOneAnd Delete

  // db.close();
});
