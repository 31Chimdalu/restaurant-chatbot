// backend/controllers/sessionController.js
const sessionService = require('../services/sessionservice');
const validateInput = require('../utils/validateinput');

exports.startSession = (req, res) => {
  const { sessionId } = req.body;

  if (!validateInput.isValidSessionId(sessionId)) {
    return res.status(400).json({ error: 'Invalid session ID' });
  }

  const session = sessionService.startSession(sessionId);
  res.json({ session });
};

exports.endSession = (req, res) => {
  const { sessionId } = req.body;

  if (!validateInput.isValidSessionId(sessionId)) {
    return res.status(400).json({ error: 'Invalid session ID' });
  }

  sessionService.endSession(sessionId);
  res.json({ message: 'Session ended' });
};
