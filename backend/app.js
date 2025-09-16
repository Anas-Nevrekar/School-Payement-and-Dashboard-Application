const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;


dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "https://jade-pixie-e71e4e.netlify.app", // React frontend URL
    credentials: true,               // allow cookies
  })
);

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/payment', require('./routes/payement_gateway.route'));
app.use('/api/transactions', require('./routes/transaction.route'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

