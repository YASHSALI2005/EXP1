const express = require('express');
const mongoose = require('mongoose');
const dotenv =require("dotenv");
const path = require('path');
// Create an Express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Set the port from environment variables or default to 7000
const PORT = process.env.PORT || 5001;

// Get the MongoDB connection URL from environment variables
const MONGOURL = process.env.MONGO_URL;

// Connect to MongoDB and start the server
mongoose.connect(MONGOURL).then(() => {
  console.log("Database connected successfully.");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
app.use(express.static(path.join(__dirname, 'public')));

// Flight Schema and Model
const flightSchema = new mongoose.Schema({
  flightNumber: String,
  airline: String,
  departure: {
      city: String,
      airport: String,
      time: String
  },
  arrival: {
      city: String,
      airport: String,
      time: String
  },
  price: Number,
  duration: String,
  stops: Number,
  cancellationPolicy: String
});

  
app.use(express.static('public'));
// Create a Mongoose model called "UserModel" based on the userSchema
const FlightModel = mongoose.model("flights", flightSchema);

// Set up a route in the Express application to handle GET requests to "/getUsers"
app.get("/users", async (req, res) => {
  // Await fetching all user data from the database using the UserModel
  const flightdata = await FlightModel.find();
  // Send the user data as a JSON response
  res.json(flightdata);
});
