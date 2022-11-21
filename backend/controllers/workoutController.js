const Workout = require('../models/workout');
const mongoose = require('mongoose');

// GET all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1});
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// GET one workout
const getWorkout = async (req, res) => {
    const {id} = req.params;

    // Check if ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Invalid ID'});
    }

    try {
        const workout = await Workout.findById(id);
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// POST new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;

    // Add doc to DB
    try {
        const workout = await Workout.create({
            title, reps, load
        })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// DELETE workout

// UPDATE workout

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
};