// backend/routes/sessionRoutes.js
const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessioncontroller');

router.post('/start', sessionController.startSession);
router.post('/end', sessionController.endSession);

module.exports = router;
