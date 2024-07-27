// backend/utils/validateInput.js
// exports.isValidSessionId = (sessionId) => typeof sessionId === 'string' && sessionId.length > 0;
// exports.isValidMessage = (message) => typeof message === 'string' && message.length > 0;


// backend/utils/validateInput.js
const sanitizeHtml = require('sanitize-html');

exports.isValidSessionId = (sessionId) => typeof sessionId === 'string' && sessionId.length > 0;

exports.isValidMessage = (message) => typeof message === 'string' && message.length > 0;

exports.isValidItemId = (itemId) => Number.isInteger(itemId) && itemId > 0;

exports.sanitizeMessage = (message) => sanitizeHtml(message, {
  allowedTags: [],
  allowedAttributes: {}
});
