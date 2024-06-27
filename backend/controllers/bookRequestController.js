// controllers/bookRequestController.js
const BookRequest = require('../models/BookRequest');

exports.borrowBook = async (req, res) => {
    const { userId, bookId } = req.body;

    if (!userId || !bookId) {
        return res.status(400).json({ message: 'User ID and Book ID are required' });
    }

    const newRequest = new BookRequest({
        userId,
        bookId
    });

    try {
        const savedRequest = await newRequest.save();
        res.status(201).json(savedRequest);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
