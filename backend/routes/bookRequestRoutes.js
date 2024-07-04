// routes/bookRequestRoutes.js
const express = require('express');
const router = express.Router();
const bookRequestController = require('../controllers/bookRequestController');

router.post('/borrow', bookRequestController.borrowBook);
router.get('/', bookRequestController.getBookRequests);
router.delete('/delete/:id', bookRequestController.deleteBookRequest);
router.put('/approve/:id', bookRequestController.approveBookRequest);
module.exports = router;
