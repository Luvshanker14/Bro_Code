// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');
const bookRequestRoutes = require('./routes/bookRequestRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors())

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/booksdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Could not connect to MongoDB', err);
});

// Routes
app.use('/books', bookRoutes);
app.use('/bookRequests', bookRequestRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
