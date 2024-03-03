const express = require("express");
const cors = require("cors");
const router = require("./Routes/userRouter");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 5000;
const cookieParser = require("cookie-parser");

// Define the allowed origins for CORS
const allowedOrigins = {
 'http://localhost:5173': true, // Local development URL
 'https://your-app-name.onrender.com': true, // Production URL on Render
};

// CORS configuration
app.use(cors({
 origin: function (origin, callback) {
    if (allowedOrigins[origin]) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
 },
 credentials: true, // Allow cookies to be sent with requests
 methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
 allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

app.use(express.json());
app.use(cookieParser());

mongoose.connection.on('connected', () => {
 console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
 console.error('Mongoose connection error:', err);
});

app.use(async (req, res, next) => {
 try {
    await mongoose.connect(process.env.MongoDb_url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB is connected");
    next();
 } catch (error) {
    console.log("DB not connected", error.message);
 }
});

// Use your router here
app.use('/', router);

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});