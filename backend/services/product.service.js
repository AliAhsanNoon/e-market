const ProductModel = require('../models/product.model');

async function getAllProducts() {
    try {
        //{ProductPrice  : {$in : [100,98,35000]} }
        const productList = await ProductModel.find().sort({_id : -1});
        return productList;
    } catch (err) {
        console.log('Error Getting Product List from databse', err);
        return err;
    }
}

async function getById(id) {
    try {
        const product = await ProductModel.findById(id);
        return product;
    } catch (err) {
        console.log('Error Getting Product List from databse', err);
        return err;
    }
}

async function saveProduct(productData) {
    try {
        const product = new ProductModel(productData);
        await product.save();
        return product;

    } catch (err) {
        console.log('Error saving Product', err);
        return err;
    }
}

async function updateRecord(_id, data) {
    try {
        // const product = await ProductModel.updateOne({ _id:id }, { $set:{ ProductPrice: data.ProductPrice, ProductName: data.ProductName } });
        const product = await ProductModel.findByIdAndUpdate(_id, data, { new: true }, (err, result) => {
            if (err) {
                console.log('error updating record ', err);
                return err;
            } else {
                console.log('Result is ', result)
                return result;
            }
        })
        //return product;
    } catch (err) {
        console.log('Error in Updating Product', err);
        return err;
    }
}

module.exports = {
    getAllProducts,
    saveProduct,
    getById,
    updateRecord
}