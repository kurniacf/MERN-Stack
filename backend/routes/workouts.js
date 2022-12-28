const express = require('express');
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

// GET all workouts
router.get('/', getWorkouts);

// GET one workout
router.get('/:id', getWorkout);

// POST new workout
router.post('/', createWorkout);

// DELETE workout
router.delete('/:id', deleteWorkout);

// UPDATE workout
router.patch('/:id', updateWorkout);

module.exports = router;