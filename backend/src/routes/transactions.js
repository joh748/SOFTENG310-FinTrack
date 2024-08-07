const express = require('express');
const {isAuthenticated} = require('../middleware/autMiddleware')
const router = express.Router();
const jwt = require('jsonwebtoken');
const {getUserTransactionsByPage , makeTransaction} = require('../services/transactionService')
const transactionController = require('../controllers/transactionsController')


router.post('/makeTransaction', isAuthenticated, transactionController.transaction);
router.get('/getTransactionByPage/:pageNumber' , isAuthenticated , transactionController.transactions);

module.exports = router;