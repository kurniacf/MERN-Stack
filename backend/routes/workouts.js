const express = require('express');
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout
} = require('../controllers/workoutController');

// GET all workouts
router.get('/', getWorkouts);

// GET one workout
router.get('/:id', getWorkout);

// POST new workout
router.post('/', createWorkout);

// DELETE workout
router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE WORKOUT'});
});

// UPDATE workout
router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE WORKOUT'});
});

module.exports = router;