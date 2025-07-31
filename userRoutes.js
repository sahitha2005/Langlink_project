const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/users
router.post('/', async (req, res) => {
  const { username, language } = req.body;

  if (!username || !language) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newUser = new User({ username, language });
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
