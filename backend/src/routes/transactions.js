const express = require('express');
const {isAuthenticated} = require('../middleware/autMiddleware')
const router = express.Router();
const jwt = require('jsonwebtoken');
const transactionController = require('../controllers/transactionsController')

//Route that creates a new transaction in the database for the authenticated user 
//Expects : 
//  Auth token in headers
//  Request body : [title , amount , description] , representing each name for the transaction to be made
//Returns: 
//  returns succesful boolean
router.post('/', isAuthenticated, transactionController.transaction);

//Route that deletes a transaction from the database 
//Expects :
//  Auth token in headers
//  transactionID in the params representing the transaction to be deleted
//Returns:
//  returns succesful boolean 
router.delete('/:transactionID',isAuthenticated,transactionController.deleteTransaction);

//Route that gets the transactions of a user ordered by the date they were created it returns it page by page depending on params
//Expects:
//  Auth token in headers
//  pagenumber in the params
//Returns:
//the transactions of the user in json form stored in an array 
router.get('/page/:pageNumber' , isAuthenticated , transactionController.transactions);


module.exports = router;