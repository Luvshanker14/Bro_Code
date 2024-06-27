// models/BookRequest.js
const mongoose = require('mongoose');

const bookRequestSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    requestDate: { type: Date, default: Date.now },
    status: { type: String, default: 'pending' }
});

const BookRequest = mongoose.model('BookRequest', bookRequestSchema);

module.exports = BookRequest;
