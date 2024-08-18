const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/Routes');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/errorHandler');

// Initialize dotenv to read .env variables
dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/posts', postRoutes);

// Middleware for error handling
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
