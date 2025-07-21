const express = require('express');
const { sendContactEmail } = require('../controllers/contactController');

const router = express.Router();

// POST route for contact form submission
router.post('/send', sendContactEmail);

// Optional: GET route to test if the contact route is working
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Contact route is working!',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;