const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const ClothesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    productDate: {
        type: Date,
        require: true,
    },
    description: {
        type: String,
        required: true,
    }
});



module.exports = Mongoose.model('Clothes', ClothesSchema);