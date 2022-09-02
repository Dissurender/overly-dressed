const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const favoritesSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        default: null
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
});

module.exports = Mongoose.model('Wishlist', WishlistSchema);