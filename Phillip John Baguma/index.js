// Dependencies
const express = require("express"); // Importing the express framework
const mongoose = require("mongoose"); // Importing the mongoose library for MongoDB
const path = require("path"); // Importing the built-in path module for working with file paths



require("dotenv").config(); // Load environment variables from a .env file into process.env


// easy way to set the port we are using. It is used in the app.listen at the bottom
const port = 3000;

// Importing routes
const registrationRoutes = require("./routes/regRoutes");

// Instantiations
const app = express(); // Creating an instance of an Express application


// Configurations
// Connecting to the MongoDB database using the connection string stored in environment variables
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  // Event handlers for MongoDB connection
  mongoose.connection
    .once("open", () => {
      console.log("Mongoose connection open"); // Log a message when the connection is open
    })
    .on("error", (err) => {
      console.error(`Connection error: ${err.message}`); // Log an error message if there is a connection error
    });

// Setting up Express application configurations
app.set("view engine", "pug"); // Set the view engine to pug for rendering views
app.set("views", path.join(__dirname, "views")); // Specify the directory where the views are found


//MIDDLEWARE setup
app.use(express.static(path.join(__dirname, "public"))); // Set directory for static files (e.g., CSS, JS, images)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data from incoming requests
app.use(express.json()); // Parse JSON data from incoming requests


// Routes setup
// Use the imported registration routes for requests starting with "/baby"
app.use("/", registrationRoutes);

// Route for handling invalid URLs (404 Not Found)
app.get("*", (req, res) => {
    res.send("404! This is an invalid URL."); // Respond with a 404 message for invalid URLs
  });
  
// Starting the server (this should always be the last line in your code)
// Listen for incoming requests on port 3000 and log a message when the server starts
app.listen(port, () => console.log(`Listening on port ${port}`));
  