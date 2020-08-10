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
router.patch('/:id', getPlayer, async (req, res) => {
    switch (true) {
        case req.body.name != null:
            res.player.name = req.body.name;
            break;
        case req.body.age != null:
            res.player.age = req.body.age;
            break;
        case req.body.height != null:
            res.player.height = req.body.height;
            break;
        case req.body.weight != null:
            res.player.weight = req.body.weight;
            break;
        case req.body.position != null:
            res.player.position = req.body.position;
            break;
    }
    try {
        const updatedPlayer = await res.player.save();
        res.status(200).json(updatedPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
});

// Delete one player
router.delete('/:id', getPlayer, async (req, res) => {
    try {
        await res.player.remove();
        res.status(202).json({ message: "Player has been deleted, successfully."})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
    res.send('hello delete one')
});

// middleware: get a player by their
async function getPlayer(req, res, next) {
    let player;
    try {
        player = await Player.findById(req.params.id)
        if (player == null) {
            return res.status(404).json({ message: "Cannot find the player that you are searching for." });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.player = player;
    next();
}

module.exports = router;