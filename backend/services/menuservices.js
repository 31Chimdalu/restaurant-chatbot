// backend/services/menuService.js
const menu = [
    { id: 1, name: 'Pizza', price: 8.99 },
    { id: 2, name: 'Burger', price: 5.99 },
    { id: 3, name: 'Pasta', price: 7.99 },
    { id: 4, name: 'Salad', price: 4.99 },
    { id: 5, name: 'Soda', price: 1.99 },
  ];
  
  exports.getMenu = () => {
    let menuMessage = "Menu:\n";
    menu.forEach(item => {
      menuMessage += `${item.id}: ${item.name} - $${item.price.toFixed(2)}\n`;
    });
    menuMessage += "\nPlease select an item number to add to your order.";
    return menuMessage;
  };
  
  exports.getMenuItemById = (id) => {
    return menu.find(item => item.id === id);
  };  