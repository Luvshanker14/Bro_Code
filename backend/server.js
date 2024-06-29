// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');
const bookRequestRoutes = require('./routes/bookRequestRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const userRoute = require('./routes/userRouter');
const adminRoute=require('./routes/adminRoute');
dotenv.config()

// Middleware
app.use(bodyParser.json());
app.use(cors())

// MongoDB connection
const URL=process.env.MONGODB_URL;
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Could not connect to MongoDB', err);
});

// Routes
app.get('/', (req, res) => {
    res.json({ msg: "Welcome To LMS Server" });
})

app.use('/user', userRoute);
app.use('/books', bookRoutes);
app.use('/bookRequests', bookRequestRoutes);
app.use('/admin',adminRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
