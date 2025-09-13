const express = require('express');
const router = express.Router();
const {authMiddleware, generateToken} = require('../middlewares/jwt.middleware');
const { handleLogin, handleRegiester, signout } = require('../controllers/auth.controller');

router.post('/login', handleLogin); // Route to handle user login
router.post('/register', handleRegiester); // Route to handle user sign-in
router.get('/logout',authMiddleware, signout); // Route to handle user logout

module.exports = router;    