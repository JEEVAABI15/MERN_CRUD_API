const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please provide your name']
    },
    email:{
        type: String,
        required: [true, 'Please provide your email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please provide your password'],
    },
},{
    timestamps: true
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;