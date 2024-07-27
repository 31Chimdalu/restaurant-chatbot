// backend/services/sessionService.js
const sessionModel = require('../models/sessionmodel');

exports.startSession = (sessionId) => {
  return sessionModel.createSession(sessionId);
};

exports.getSession = (sessionId) => {
  return sessionModel.getSession(sessionId);
};

exports.endSession = (sessionId) => {
  sessionModel.deleteSession(sessionId);
};



