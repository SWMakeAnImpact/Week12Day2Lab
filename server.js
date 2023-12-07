const express = require('express');
const app = express();

// Define the port to run the server on
const PORT = process.env.PORT || 3000;

// Greetings Route
// This route will respond with a personalized greeting message.
// The ':name' is a route parameter that can be used to pass the user's name into the URL.
app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}! It's so great to see you!`);
  });