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

CartItemSchema.prototype.calculatePriceOnQuantity = async function () {
    const clothesItems = await clothes.find({ id: req.query.clothesId });
    const totalPrice = this.quantity * clothesItems.price;
    if (totalPrice < 0) {
        return console.error(`Returning value of ${totalPrice} which is negative.`)
    }
    return totalPrice;
}

module.exports = Mongoose.model('CartItem', CartItemSchema);