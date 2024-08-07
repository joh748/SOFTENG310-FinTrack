const express = require('express');
const {isAuthenticated} = require('../middleware/autMiddleware')
const router = express.Router();
const jwt = require('jsonwebtoken');
const usersController = require('../controllers/usersController');


router.post('/login', usersController.login);
router.post('/signup', usersController.signup);
router.get('/balance', isAuthenticated, usersController.balance);



module.exports = router;