// controllers/bookController.js
const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addBook = async (req, res) => {
    const { title, description, author, genre, department, count, vendor, vendor_id, publisher, publisher_id, image } = req.body;

    const newBook = new Book({
        title,
        description,
        author,
        genre,
        department,
        count,
        vendor,
        vendor_id,
        publisher,
        publisher_id,
        image
    });

    try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
