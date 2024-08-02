// frontend/public/js/main.js
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const sessionId = generateSessionId();

function generateSessionId() {
  return Math.random().toString(36).substr(2, 9);
}

sendButton.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (message) {
    addMessageToChat('User', message);
    sendMessageToChatbot(message);
    userInput.value = '';
  }
});

function addMessageToChat(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender === 'User' ? 'user-message' : 'bot-message');
  messageElement.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessageToChatbot(message) {
  addMessageToChat('Bot', '...'); // Temporary loading indicator
  fetch('http://localhost:3000/api/chatbot/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ sessionId, message })
  })
  .then(response => response.json())
  .then(data => {
    // const botMessages = chatBox.getElementsByClassName('bot-message');
    // botMessages[botMessages.length - 1].remove(); // Remove loading indicator
    if (data.response) {
      addMessageToChat('Bot', data.response);
    }
  })
  .catch(error => {
    addMessageToChat('Bot', 'Error communicating with the chatbot.');
    console.error('Error:', error);
  });
}

// Initialize chat with a welcome message
sendMessageToChatbot(alert( "Welcome to the Restaurant! Please select an option:\n1: Place an order\n99: Checkout order\n98: See order history\n97: See current order\n0: Cancel order"));
