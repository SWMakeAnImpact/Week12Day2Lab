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

// Tip Calculator Route
// This route calculates the tip based on a total bill amount and a tip percentage.
// It expects two parameters in the URL: 'total' for the bill amount and 'tipPercentage' for the tip.
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    // Multiply the total bill amount by the tip percentage and dividing by 100
    const tip = (total * tipPercentage) / 100;
    // Respond to the client with the calculated tip amount
    res.send(`Your tip should be \$${tip.toFixed(2)}`);
  });