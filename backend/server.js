const express = require('express');
const app = express();
require('dotenv').config();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

// Routes
app.get('/api', (req, res) => {
    res.send('Hello from the API!');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:'+process.env.PORT);
});