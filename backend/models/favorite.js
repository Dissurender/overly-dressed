const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const FavoriteSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    clothes: {
        type: mongoose.Types.ObjectId,
        ref: 'Clothes',
        required: true,
    }
});

module.exports = Mongoose.model('Favorite', FavoriteSchema);