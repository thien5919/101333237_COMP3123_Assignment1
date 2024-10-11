let mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    "id": ObjectId,
    "username": String,
    "email": String,
    "password": String,
    "created_at": Date,
    "updated_at": Date
});

const User = mongoose.model('User', UserSchema);
MediaSourceHandle.exports = User;
