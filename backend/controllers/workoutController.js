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

    let emptyFields = [];

    if (!title) {
        emptyFields.push('title');
    }
    if (!load) {
        emptyFields.push('load');
    }
    if (!reps) {
        emptyFields.push('reps');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

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
const deleteWorkout = async (req, res) => {
    const {id} = req.params;

    // Check if ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Invalid ID'});
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout) {
        return res.status(400).json({error: 'Workout not found'});
    }  

    res.status(200).json({message: 'Workout deleted'});
}

// UPDATE workout
const updateWorkout = async (req, res) => {
    const {id} = req.params;

    // Check if ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Invalid ID'});
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({error: 'Workout not found'});
    }

    res.status(200).json({message: 'Workout updated'});
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
};