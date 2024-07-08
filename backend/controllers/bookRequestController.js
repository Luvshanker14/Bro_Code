// controllers/bookRequestController.js
const BookRequest = require('../models/BookRequest');
const Book = require('../models/Book');
const User = require('../models/userModel');

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
      const bookRequests = await BookRequest.find().populate('userId', 'email name'); 
      res.status(200).json(bookRequests);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
//   exports.getBookRequests = async (req, res) => {
//     try {
//         const bookRequests = await BookRequest.find();
//         res.status(200).json(bookRequests);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

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

exports.approveBookRequest = async (req, res) => {
    try {
        const bookRequest = await BookRequest.findById(req.params.id);
        
        if (!bookRequest) {
            return res.status(404).json({ message: 'Book request not found' });
        }

        bookRequest.status = 'approved';

        const book = await Book.findById(bookRequest.bookId);
        if (book) {
            book.count -= 1;
            await book.save();
        }

        await bookRequest.save();
        res.status(200).json({ message: 'Book request approved successfully' });
    } catch (error) {
        console.error('Error approving book request:', error);
        res.status(500).json({ message: 'Failed to approve book request' });
    }
};

exports.returnBook = async (req, res) => {
    try {
        // Find the book request and ensure it exists
        const bookRequest = await BookRequest.findOne({_id: req.params.id});
        if (!bookRequest) {
            return res.status(404).json({ message: 'Book request not found' });
        }

        // Ensure the book is currently borrowed
        if (bookRequest.status !== 'approved') {
            return res.status(400).json({ message: 'Book is not borrowed' });
        }

        // Update the book count
        const book = await Book.findById(bookRequest.bookId);
        if (book) {
            book.count += 1;
            await book.save();
        }

        // Remove the book request
        await BookRequest.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'Book returned successfully' });
    } catch (error) {
        console.error('Error returning book:', error);
        res.status(500).json({ message: 'Failed to return book' });
    }
};

