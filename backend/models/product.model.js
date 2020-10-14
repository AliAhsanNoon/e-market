const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    ProductName: String,
    ProductPrice: { type: Number, default: 0 },
    Category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' }
});

const ProductModel = mongoose.model('Products', ProductSchema);

module.exports = ProductModel;