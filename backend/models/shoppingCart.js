const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const ShoppingCartSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    purchasedItems: {
        type: Array,
        required: true,
        default: [],
    },
    totalPrice: {
        type: Number,
    }
});



module.exports = Mongoose.model('ShoppingCart', ShoppingCartSchema);