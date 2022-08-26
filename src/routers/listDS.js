const express = require('express');
const router = express.Router();

const listController = require('../app/controllers/listDSController');

router.get('/:id', listController.edit);
router.put('/:id/update', listController.update);
router.get('/:id/delete', listController.delete);
router.get('/', listController.index);

module.exports = router;