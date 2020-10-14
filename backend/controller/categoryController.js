const express = require('express');
const router = express.Router();
const categoryService = require('../services/category.service');

router.get('/', async (req, res) => {
    try {
        const categoryList = await categoryService.getAllCategories();
        res.status(201).json(categoryList)
    } catch (err) {
        console.log('Error category List => ', err);
        res.status(400).send(`Error Getting category List ${err}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let categoryId = req.params.id;
        const category = await categoryService.getById(categoryId);
        res.status(201).json(category);
    } catch (err) {
        console.log('Error category ById => ', err);
        res.status(400).send(`Error Getting category ById ${err}`);
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('ReqCAT => ', req.body)
        const category = await categoryService.saveCategory(req.body);
        res.status(201).json({ message: 'category Saved Successfully', data: category });

    } catch (err) {
        console.log('Error in category POST Request =>', err);
        res.status(400).send(`Error in category POST Request => ${err}`);
    }

});

router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        const category = await categoryService.updateRecord(id, data);
        res.status(201).json({ message: 'category Updated Successfully', data: category });

    } catch (err) {
        console.log('Error in category PUT Request =>', err);
        res.status(400).send(`Error in category PUT Request => ${err}`);
    }
});

module.exports = router;