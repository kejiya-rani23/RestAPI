const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSch = new Schema({
    name:{type:String},
    email:{type:String},
    age:{type:Number},
    gender:{type:String},
    password:{type:String}

});


const User = mongoose.model('users', userSch)

module.exports = User;