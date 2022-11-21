const express = require('express');
const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({message: 'GET ALL WORKOUTS'});
})

// GET one workout
router.get('/:id', (req, res) => {
    res.json({message: 'GET ONE WORKOUT'});
})

// POST new workout
router.post('/', (req, res) => {
    res.json({message: 'POST NEW WORKOUT'});
});

// DELETE workout
router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE WORKOUT'});
});

// UPDATE workout
router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE WORKOUT'});
});

module.exports = router;