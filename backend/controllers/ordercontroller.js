// backend/controllers/orderController.js
const orderService = require('../services/orderservices');
const sessionService = require('../services/sessionservice');
const validateInput = require('../utils/validateinput');

exports.addItem = (req, res) => {
  const { sessionId, itemId } = req.body;

  if (!validateInput.isValidSessionId(sessionId) || !validateInput.isValidItemId(itemId)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const response = orderService.addOrderItem(sessionId, itemId);
  res.json({ response });
};

exports.checkout = (req, res) => {
  const { sessionId } = req.body;

  if (!validateInput.isValidSessionId(sessionId)) {
    return res.status(400).json({ error: 'Invalid session ID' });
  }

  const response = orderService.checkoutOrder(sessionId);
  res.json({ response });
};

exports.getCurrent = (req, res) => {
  const { sessionId } = req.body;

  if (!validateInput.isValidSessionId(sessionId)) {
    return res.status(400).json({ error: 'Invalid session ID' });
  }

  const response = orderService.getCurrentOrder(sessionId);
  res.json({ response });
};

exports.cancel = (req, res) => {
  const { sessionId } = req.body;

  if (!validateInput.isValidSessionId(sessionId)) {
    return res.status(400).json({ error: 'Invalid session ID' });
  }

  const response = orderService.cancelOrder(sessionId);
  res.json({ response });
};

exports.getHistory = (req, res) => {
  const { sessionId } = req.body;

  if (!validateInput.isValidSessionId(sessionId)) {
    return res.status(400).json({ error: 'Invalid session ID' });
  }

  const response = orderService.getOrderHistory(sessionId);
  res.json({ response });
};
