const ObjectID = require('mongodb').ObjectID;

const mongoose = require('./../server/db/mongoose');
//const Todo = require('./../server/models/todo'); 
const User = require('./../server/models/user'); 


var id = '584ccdb6f2ecf80b7bef27cc';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

// Todo.find({
//   _id: id 
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id 
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if(!user){
        return console.log('user not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));