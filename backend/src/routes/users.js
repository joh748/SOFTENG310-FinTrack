const express = require('express');
const {isAuthenticated} = require('../middleware/autMiddleware')
const router = express.Router();
const usersController = require('../controllers/usersController');


router.post('/login', usersController.login);
router.post('/signup', usersController.signup);
router.get('/balance', isAuthenticated, usersController.balance);
router.patch('/balance',isAuthenticated,usersController.setBalance);
route.patch('/goal',isAuthenticated,usersController.setGoal);
router.get('/goal', isAuthenticated , usersController.goal );





module.exports = router;