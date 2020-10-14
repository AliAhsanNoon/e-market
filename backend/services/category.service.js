const CategoryModel = require('../models/category.model');

async function getAllCategories() {
    try {
        //{catPrice  : {$in : [100,98,35000]} }
        const catList = await CategoryModel.find().sort({_id : -1});
        return catList;
    } catch (err) {
        console.log('Error Getting Category List from databse', err);
        return err;
    }
}

async function getById(id) {
    try {
        const cat = await CategoryModel.findById(id);
        return cat;
    } catch (err) {
        console.log('Error Getting Category List from database', err);
        return err;
    }
}

async function saveCategory(catData) {
    try {
        const cat = new CategoryModel(catData);
        await cat.save();
        return cat;

    } catch (err) {
        console.log('Error saving Category', err);
        return err;
    }
}

async function updateRecord(_id, data) {
    try {
        const cat = await CategoryModel.findByIdAndUpdate(_id, data, { new: true }, (err, result) => {
            if (err) {
                console.log('error updating record ', err);
                return err;
            } else {
                console.log('Result is ', result)
                return result;
            }
        })
        //return cat;
    } catch (err) {
        console.log('Error in Updating Category', err);
        return err;
    }
}

module.exports = {
    getAllCategories,
    saveCategory,
    getById,
    updateRecord
}