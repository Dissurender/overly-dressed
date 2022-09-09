const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const FavoriteSchema = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    clothesId: {
        type: String,
        required: true,
    }
});

module.exports = Mongoose.model('Favorite', FavoriteSchema);