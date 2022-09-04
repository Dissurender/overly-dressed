const Mongoose = require('mongoose');
const { Schema } = Mongoose;



const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    commentString: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        default: 1,
    }
});

module.exports = Mongoose.model('Comment', CommentSchema);