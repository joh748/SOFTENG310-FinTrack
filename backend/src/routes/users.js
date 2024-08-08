const express = require('express');
const {isAuthenticated} = require('../middleware/autMiddleware')
const router = express.Router();
const usersController = require('../controllers/usersController');

//Route that takes email and password and checks it with the backend to see if the user exists and password is validated
//Expects:[ email , password ] to be sent in the request body
// Returns : returns success : boolean  , if succesfull returns token as well token should be used in headers for future validation
router.post('/login', usersController.login);

//Route that takes email and password , validates the emails originality and creates the user in the backend
//Expects:[ email , password ] to be sent in the request body
//Returns : returns success : boolean  , if succesfull returns token as well token should be used in headers for future validation

router.post('/signup', usersController.signup);

// Route to get the balance of a user
// Expects: Auth token in headers
// Returns: User balance as a JSON object
router.get('/balance', isAuthenticated, usersController.balance);

// Route to set the balance of a user
// Expects: Auth token in headers as well as balance : in the request body which represents the new balance to be set
// Returns: succesfull: boolean , representing if it was succesfull or not
router.patch('/balance',isAuthenticated,usersController.setBalance);

// Route to set the savings goal of a user
// Expects: Auth token in headers as well as goal : in the request body which represents the new goal to be set
// Returns: succesfull: boolean , representing if it was succesfull or not
route.patch('/goal',isAuthenticated,usersController.setGoal);

// Route to get the goal of a user
// Expects: Auth token in headers
// Returns: User goal as a JSON object
router.get('/goal', isAuthenticated , usersController.goal );





module.exports = router;