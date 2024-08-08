const express = require('express');
const {isAuthenticated} = require('../middleware/autMiddleware')
const router = express.Router();
const jwt = require('jsonwebtoken');
const transactionController = require('../controllers/transactionsController')


router.post('/', isAuthenticated, transactionController.transaction);
router.delete('/:transactionID',isAuthenticated,transactionController.deleteTransaction);
router.get('/page/:pageNumber' , isAuthenticated , transactionController.transactions);


module.exports = router;