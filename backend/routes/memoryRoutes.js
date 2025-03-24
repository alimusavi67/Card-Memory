const express = require('express');
const { saveGameData, getGameHistory } = require('../controllers/memoryController');
const router = express.Router();

// Route to save game data
router.post('/save', saveGameData);
// Route to get game history
router.get('/history/:userID', getGameHistory); // Updated route to include userID

module.exports = router;
