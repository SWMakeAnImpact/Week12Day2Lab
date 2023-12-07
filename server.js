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

  // Magic 8 Ball Route
// Ask a question in the URL and get a random Magic 8 Ball response.
const magic8Responses = [
    // Responses array
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", 
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
  ];
  
  app.get('/magic/:question', (req, res) => {
    // Format question from URL
    const question = req.params.question.replace(/%20/g, " ");
    // Get random answer
    const answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
    // Send formatted question and answer
    res.send(`<h1>${question}? ${answer}</h1>`);
  });
  
  // Start server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  