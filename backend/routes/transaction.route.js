const express = require("express");
const { getAllTransactions, getTransactionsBySchool, getTransactionStatus } = require("../controllers/transaction.controller");
const router = express.Router();
const { authMiddleware, generateToken } = require("../middlewares/jwt.middleware");


router.get("/all-transactions", authMiddleware, getAllTransactions);
router.get("/school/:schoolId", authMiddleware, getTransactionsBySchool);
router.get("/transaction-status/:custom_order_id", authMiddleware, getTransactionStatus);

module.exports = router;