// backend/models/orderModel.js
let orders = {};

exports.createOrder = (sessionId) => {
  if (!orders[sessionId]) {
    orders[sessionId] = [];
  }
  return orders[sessionId];
};

exports.addItemToOrder = (sessionId, item) => {
  if (!orders[sessionId]) {
    orders[sessionId] = [];
  }
  orders[sessionId].push(item);
  return orders[sessionId];
};

exports.getOrder = (sessionId) => {
  return orders[sessionId] || [];
};

exports.clearOrder = (sessionId) => {
  orders[sessionId] = [];
};

exports.getOrderHistory = (sessionId) => {
  return orders[sessionId] || [];
};
