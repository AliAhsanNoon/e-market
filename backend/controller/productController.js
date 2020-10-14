const express = require('express');
const router = express.Router();
const productService = require('../services/product.service');

router.get('/', async (req, res) => {
    try {
        const productList = await productService.getAllProducts();
        res.status(201).json(productList)
    } catch (err) {
        console.log('Error Product List => ', err);
        res.status(400).send(`Error Getting Product List ${err}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let productId = req.params.id;
        const product = await productService.getById(productId);
        res.status(201).json(product);
    } catch (err) {
        console.log('Error Product ById => ', err);
        res.status(400).send(`Error Getting Product ById ${err}`);
    }
});

router.post('/', async (req, res) => {
    try {
        let ob = {};
        ob = req.body;
        //ob.Category = '5f8562e368bb0a32e8cc9129';
        const product = await productService.saveProduct(ob);
        res.status(201).json({ message: 'Product Saved Successfully', data: product });

    } catch (err) {
        console.log('Error in Product POST Request =>', err);
        res.status(400).send(`Error in Product POST Request => ${err}`);
    }

});

router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        const product = await productService.updateRecord(id, data);
        res.status(201).json({ message: 'Product Updated Successfully', data: product });

    } catch (err) {
        console.log('Error in Product PUT Request =>', err);
        res.status(400).send(`Error in Product PUT Request => ${err}`);
    }
});

module.exports = router;