const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const ClothesSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
    },
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
    },
    stock: {
        type: Number,
        default: 1,
    },
    votes: {
        type: Array,
        default: [],
    },
    image: {
        type: String,
        default: null,
    }
});

//Assumes all inputs are valid numbers.
ClothesSchema.methods.calculateAverageRating = function calculateAverageRating() {
    if (!Array.isArray(this.votes) || !this.votes.length) {
        return null;
    }
    return calculateAverageRating.reduce((acc, c) => acc + c, 0) / votes.length;
}

module.exports = Mongoose.model('Clothes', ClothesSchema);