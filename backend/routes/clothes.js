const express = require('express');
const router = express.Router();
const clothesController = require('../controllers/clothes');

router.get('/api/clothes/:clothesId', clothesController.getClothes)



module.exports = router
