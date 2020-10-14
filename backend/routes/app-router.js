const express = require('express');
const router = express.Router();

router.use('/product', require('../controller/productController'));
router.use('/category', require('../controller/categoryController'));
router.use('/user', require('../controller/userController'));

module.exports = router;