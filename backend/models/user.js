const Mongoose = require('mongoose');

const { Schema } = Mongoose;

const UserSchema = new Schema({
    email: {
        type: String
    },
    googleId: {
        type: String
    },
    avatar: {
        type: String
    },
    role: {
        type: String
    }
});

module.exports = Mongoose.model('User', UserSchema);