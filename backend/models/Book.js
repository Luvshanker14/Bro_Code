// models/Book.js
const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    genre: String,
    department: String,
    count: Number,
    vendor: String,
    vendor_id: Number,
    publisher: String,
    publisher_id: Number
});

const Book = mongoose.model('book_datasets', bookSchema);

module.exports = Book;
