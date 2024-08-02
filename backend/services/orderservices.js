// backend/services/orderService.js
const orderModel = require ('../models/ordermodel');
const menuService = require('../services/menuservices');

exports.addOrderItem = (sessionId, itemId) => {
  const menuItem = menuService.getMenuItemById(itemId);
  if (!menuItem) return "Invalid item selected.";

  orderModel.addItemToOrder(sessionId, menuItem);
  return `Added ${menuItem.name} to your order.`;
};

exports.checkoutOrder = (sessionId) => {
  const currentOrder = orderModel.getOrder(sessionId);
  if (currentOrder.length > 0) {
    orderModel.clearOrder(sessionId); // Clear the current order
    return "Order placed successfully!";
  }
  return "No order to place.";
};

exports.getCurrentOrder = (sessionId) => {
  const currentOrder = orderModel.getOrder(sessionId);
  if (currentOrder.length > 0) {
    let orderSummary = "Your current order:\n";
    currentOrder.forEach(item => {
      orderSummary += `${item.name} - $${item.price.toFixed(2)}\n`;
    });
    return orderSummary;
  }
  return "No current order.";
};

exports.cancelOrder = (sessionId) => {
  const currentOrder = orderModel.getOrder(sessionId);
  if (currentOrder.length > 0) {
    orderModel.clearOrder(sessionId);
    return "Your order has been canceled.";
  }
  return "No order to cancel.";
};

exports.getOrderHistory = (sessionId) => {
  const history = orderModel.getOrderHistory(sessionId);
  if (history.length > 0) {
    let orderSummary = "Your order history:\n";
    history.forEach(item => {
      orderSummary += `${item.name} - $${item.price.toFixed(2)}\n`;
    });
    return orderSummary;
  }
  return "No order history found.";
};
