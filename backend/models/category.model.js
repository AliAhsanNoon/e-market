const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    CategoryName: String,
    CategoryDescription: String
});


const CategoryModel = mongoose.model('Categories', CategorySchema);

module.exports = CategoryModel;