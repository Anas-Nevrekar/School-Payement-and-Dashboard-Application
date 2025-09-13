const express = require('express');
const router = express.Router();
const {authMiddleware, generateToken} = require('../middlewares/jwt.middleware');
const {createPayment} = require('../controllers/payement_gateway.controller');

router.post('/create-payment', authMiddleware, createPayment)


module.exports = router;