const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const CartItemSchema = new Schema({
    clothesId: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    }
});

module.exports = Mongoose.model('CartItem', CartItemSchema);