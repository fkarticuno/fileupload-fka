const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    position: String,
    name: String,
    company: String,
    image: Buffer,
    date: Date
});

const User = mongoose.model('User', UserSchema);


module.exports = User;