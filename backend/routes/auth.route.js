const express = require('express');
const router = express.Router();
const { handleLogin, handleRegiester, signout } = require('../controllers/auth.controller');
const { sign } = require('jsonwebtoken');

router.post('/login', handleLogin); // Route to handle user login
router.post('/register', handleRegiester); // Route to handle user sign-in
router.get('/logout', signout); // Route to handle user logout

module.exports = router;