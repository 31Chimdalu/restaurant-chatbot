// backend/controllers/chatbotController.js
const sessionService = require('../services/sessionservice');
const menuService = require('../services/menuservices');
const orderService = require('../services/orderservices');
const responseMessages = require('../utils/responsemessage');
const validateInput = require('../utils/validateinput');

exports.handleMessage = (req, res) => {
  const { sessionId, message } = req.body;

  if (!validateInput.isValidSessionId(sessionId) || !validateInput.isValidMessage(message)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  let response = responseMessages.default;
  switch (message) {
    case '1':
      response = menuService.getMenu();
      sessionService.startSession(sessionId);
      break;
    case '99':
      response = orderService.checkoutOrder(sessionId);
      break;
    case '98':
      response = orderService.getOrderHistory(sessionId);
      break;
    case '97':
      response = orderService.getCurrentOrder(sessionId);
      break;
    case '0':
      response = orderService.cancelOrder(sessionId);
      break;
    default:
      const itemNumber = parseInt(message, 10); // Parse the message as an integer
        if (!isNaN(itemNumber)) {
          const item = menuService.getMenuItemById(itemNumber);
        if (item) {
          response = orderService.addOrderItem(sessionId, item.id);
        } else {
          response = responseMessages.invalidOption;
        }
      } else {
        response = responseMessages.invalidOption;
      }
  }
  
  res.json({ response });
}