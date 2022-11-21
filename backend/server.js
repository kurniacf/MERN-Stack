const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const workoutRoutes = require('./routes/workouts');

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

// Routes
app.get('/api', (req, res) => {
    res.send('Hello from the API!');
});

app.use('/api/workouts', workoutRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connect DB & Server is running on http://localhost:'+process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err)
    });