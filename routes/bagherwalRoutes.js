const express = require('express');
const router = express.Router();
const { getBagherwal, updateBagherwal } = require('../controllers/bagherwalController');

router.get('/', getBagherwal);
router.put('/', updateBagherwal);

module.exports = router;
