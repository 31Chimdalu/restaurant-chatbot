// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/ordercontroller');

router.post('/add', orderController.addItem);
router.post('/checkout', orderController.checkout);
router.post('/current', orderController.getCurrent);
router.post('/cancel', orderController.cancel);
router.post('/history', orderController.getHistory);

module.exports = router;
