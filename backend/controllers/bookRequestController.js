// controllers/bookRequestController.js
const BookRequest = require('../models/BookRequest');

exports.borrowBook = async (req, res) => {
    const { userId, bookId } = req.body;

    if (!userId || !bookId) {
        return res.status(400).json({ message: 'User ID and Book ID are required' });
    }

    try {
        // Check if the user has already requested the same book
        const existingRequest = await BookRequest.findOne({ userId, bookId });
        if (existingRequest) {
            return res.status(409).json({ message: 'Duplicate request. You have already requested this book.' });
        }

        const newRequest = new BookRequest({
            userId,
            bookId
        });

        const savedRequest = await newRequest.save();
        res.status(201).json(savedRequest);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getBookRequests = async (req, res) => {
    try {
        const bookRequests = await BookRequest.find();
        res.status(200).json(bookRequests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteBookRequest = async (req, res, next) => {
    try {
        const deletedRequest = await BookRequest.findByIdAndDelete(req.params.id);
        
        if (!deletedRequest) {
            return res.status(404).json({ message: 'Book request not found' });
        }
        
        res.status(200).json({ message: 'Book request deleted successfully' });
    } catch (error) {
        console.error('Error deleting book request:', error);
        res.status(500).json({ message: 'Failed to delete book request' });
    }
};
