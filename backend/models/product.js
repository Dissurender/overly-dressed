const Mongoose = require('mongoose');
const { Schema } = Mongoose;



const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    price: {
        type: Number,
    }
});

module.exports = Mongoose.model('Product', ProductSchema);