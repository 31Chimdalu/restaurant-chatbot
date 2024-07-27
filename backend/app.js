const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chatbotRoutes = require('./routes/chatbotroutes');
const orderRoutes = require('./routes/orderroutes');
const sessionRoutes = require('./routes/sessionroutes');
const path = require('path')

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend/public')));

// Routes
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/sessions', sessionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
