# Restaurant Chatbot

A simple chatbot for a restaurant, allowing customers to place orders, view order history, and manage their orders through a chat interface.

### Build requirements
1. ChatBot interface would be like a chat interface
2. No need for authentication but we should be able to store user session based on devices
3. When a customer lands on the chatbot page, the bot should send these options to the customer:
Select 1 to Place an order
Select 99 to checkout order
Select 98 to see order history
Select 97 to see current order
Select 0 to cancel order
4. When a customer selects “1”, the bot should return a list of items from the restaurant. It is up to you to create the items in your restaurant for the customer. The order items can have multiple options but the customer should be able to select the preferred items from the list using this same number select system and place an order.
5. When a customer selects “99” out an order, the bot should respond with “order placed” and if none the bot should respond with “No order to place”. Customer should also see an option to place a new order
6. When a customer selects “98”, the bot should be able to return all placed order
7. When a customer selects “97”, the bot should be able to return current order
8. When a customer selects “0”, the bot should cancel the order if there is.


## Features
- **Order Management**: Place an order by selecting items from a menu.
- **Order Tracking**: View current orders and order history.
- **Order Cancellation**: Cancel an ongoing order.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the repository:**


2. **Install dependencies:**


3. **Start the backend server:**
The server will start on `http://localhost:3000`.

4. **Open the frontend:**
Open `frontend/public/index.html` in a web browser to access the chatbot interface.

### API Endpoints

- **POST `/api/chatbot/message`**: Handles messages sent by the user to the chatbot.
- **Request Body:**
 - `sessionId` (string): A unique identifier for the user session.
 - `message` (string): The user's message.
- **Response:**
 - `response` (string): The chatbot's response.

### Example Interaction
- **User**: "1"
- **Bot**: "Menu: 1: Pizza - $8.99, 2: Burger - $5.99, ..."


### Contribution


## License

