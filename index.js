const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// API endpoint to handle form submissions
app.post('/api/farmer-feedbacks', (req, res) => {
  try {
    const feedbackData = req.body;
    
    // Log the received data (in a real app, you'd save to a database)
    console.log('Received feedback:', feedbackData);
    
    // Simulate processing delay
    setTimeout(() => {
      res.json({ 
        success: true, 
        message: 'Thank you for your feedback!',
        data: feedbackData
      });
    }, 1000);
    
  } catch (error) {
    console.error('Error processing feedback:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while processing your feedback.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});