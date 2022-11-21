const express = require('express');
const Workout = require('../models/workout');
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
router.post('/', async (req, res) => {
    const {title, reps, load} = req.body;

    try {
        const workout = await Workout.create({
            title, reps, load
        })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
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