// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getBooks);
router.post('/addBook',bookController.addBook);
router.post('/addFavouriteBook',bookController.addBookToCart);
router.post('/getFavouriteBook',bookController.getFavouriteBook);
router.post('/removeFavouriteBook',bookController.removeBookFromCart);

module.exports = router;
