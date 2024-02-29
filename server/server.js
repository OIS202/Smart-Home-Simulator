// app.js

const express = require('express');
const connectDB = require('./db/conn.js');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));