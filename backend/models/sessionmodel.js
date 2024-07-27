// backend/models/sessionModel.js
let sessions = {};

exports.createSession = (sessionId) => {
  if (!sessions[sessionId]) {
    sessions[sessionId] = { currentOrder: [], orderHistory: [] };
  }
  return sessions[sessionId];
};

exports.getSession = (sessionId) => {
  return sessions[sessionId];
};

exports.deleteSession = (sessionId) => {
  delete sessions[sessionId];
};
