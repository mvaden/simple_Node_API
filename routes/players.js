const express = require("express");
const router = express.Router();
const Player = require('../models/player');


// Get all players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.stat(500).json({ message: err.message })
    }
});

// Get one player
router.get('/:id', getPlayer, (req, res) => {
    res.json(res.player);
});

// Create one player
router.post('/', async (req, res) => {
    const player = new Player({
        name: req.body.name,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
        position: req.body.position
    })
    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
});

// Update one player
router.patch('/:id', (req, res) => {
});

// Delete one player
router.delete('/:id', (req, res) => {
});

// middleware: get a player by their
async function getPlayer(req, res, next) {
    let player;
    try {
        player = await Player.findById(req.params.id);
        if (player == null) {
            return res.status(404).json({ message: "Cannot find the player that you are searching for." });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.player = player;
    next();
}

module.exports = router;