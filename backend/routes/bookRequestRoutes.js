// routes/bookRequestRoutes.js
const express = require('express');
const router = express.Router();
const bookRequestController = require('../controllers/bookRequestController');

router.post('/borrow', bookRequestController.borrowBook);
router.get('/', bookRequestController.getBookRequests);
router.delete('/delete/:id', bookRequestController.deleteBookRequest);
module.exports = router;
