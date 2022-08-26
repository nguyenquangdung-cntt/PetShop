const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.get('/Dog', productController.index1);
router.get('/Cat', productController.index2);

module.exports = router;