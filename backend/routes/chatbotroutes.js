// backend/routes/chatbotRoutes.js
const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotcontroller');

router.post('/message', chatbotController.handleMessage);

module.exports = router;
