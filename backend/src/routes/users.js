const express = require('express');
const {isAuthenticated} = require('../middleware/autMiddleware')
const router = express.Router();
const jwt = require('jsonwebtoken');
const usersController = require('../controllers/usersController');

// router.post('/checkEmailExists', async (req, res) => {
//     const email = req.body.email;
//     const emailExists = await checkEmailExists(email);
//     res.send({ emailExists });
// });

// router.post('/checkPasswordCorrect', async (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     const passwordCorrect = await checkPasswordCorrect(email, password);
//     res.send({ passwordCorrect });
// });

router.post('/login', usersController.login);
router.post('/signup', usersController.signup);
router.get('/balance', isAuthenticated, usersController.balance);



module.exports = router;