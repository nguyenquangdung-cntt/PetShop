const express = require('express');
const router = express.Router();

const buyController = require('../app/controllers/BuyController');

router.get('/', buyController.index);

module.exports = router;