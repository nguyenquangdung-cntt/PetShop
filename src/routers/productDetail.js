const express = require('express');
const router = express.Router();

const productDetailController = require('../app/controllers/ProductDetailController');

router.get('/:slug', productDetailController.show);

module.exports = router;