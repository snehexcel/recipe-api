// app.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

// Database Connection
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// API Routes
app.use('/api', recipeRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('Recipe API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
