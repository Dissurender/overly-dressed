const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const VoteSchema = new Schema({
    clothingId: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
});

module.exports = Mongoose.model('Vote', VoteSchema);