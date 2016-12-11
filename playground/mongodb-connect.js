const MongoClient = require ('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert to do', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

//Insert new doc into Users (name, age, location)
  // db.collection('users').insertOne({
  //   name: 'Bella',
  //   age: 7,
  //   location: 'Melbourne'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops);
  // });
  db.close();
});
