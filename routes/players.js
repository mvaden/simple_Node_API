const express = require("express");
const router = express.Router();
const Player = require('../models/player');


// Get all players
router.get('/', (req, res) => {
});

// Get one player
router.get('/:id', (req, res) => {
});

// Create one player
router.post('/', (req, res) => {
});

// Update one player
router.patch('/:id', (req, res) => {
});

// Delete one player
router.delete('/:id', (req, res) => {
});


module.exports = router;