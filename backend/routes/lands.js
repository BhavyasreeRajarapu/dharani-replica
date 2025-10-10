const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Land = require('../models/lands');

// Get all lands for logged-in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const lands = await Land.findAll({ where: { userId: req.user.id } });
    res.json(lands); // must be an array
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
