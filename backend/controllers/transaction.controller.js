const mongoose = require("mongoose");
const Order = require("../models/Order");
const OrderStatus = require("../models/OrderStatus");

// GET /transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await OrderStatus.aggregate([
      {
        $lookup: {
          from: "orders",               // collection name of Order model
          localField: "collect_id",     // field in OrderStatus
          foreignField: "_id",          // field in Order
          as: "order"
        }
      },
      { $unwind: "$order" }, // flatten the joined array
      {
        $project: {
          _id: 0,
          collect_id: "$collect_id",
          school_id: "$order.school_id",
          gateway: "$order.gateway_name",
          order_amount: "$order_amount",
          transaction_amount: "$transaction_amount",
          status: "$status",
          custom_order_id: "$order._id" // ✅ using Order._id as custom_order_id
        }
      }
    ]);

    return res.json({ transactions });
  } catch (err) {
    console.error("Error in /transactions:", err.message);
    return res.status(500).json({ success: false, error: "Failed to fetch transactions" });
  }
};


// GET /transactions/school/:schoolId
exports.getTransactionsBySchool = async (req, res) => {
  try {
    const { schoolId } = req.params;

    const transactions = await OrderStatus.aggregate([
      {
        $lookup: {
          from: "orders",               // collection name
          localField: "collect_id",     // from OrderStatus
          foreignField: "_id",          // from Order
          as: "order"
        }
      },
      { $unwind: "$order" },
      {
        $match: { "order.school_id": schoolId } // ✅ filter by schoolId
      },
      {
        $project: {
          _id: 0,
          collect_id: "$collect_id",
          school_id: "$order.school_id",
          gateway: "$order.gateway_name",
          order_amount: "$order_amount",
          transaction_amount: "$transaction_amount",
          status: "$status",
          custom_order_id: "$order._id"
        }
      }
    ]);

    return res.json({ success: true, transactions });
  } catch (err) {
    console.error("Error in /transactions/school:", err.message);
    return res.status(500).json({ success: false, error: "Failed to fetch school transactions" });
  }
};

// GET /transaction-status/:custom_order_id
exports.getTransactionStatus = async (req, res) => {
  try {
    const { custom_order_id } = req.params;

    const transaction = await OrderStatus.findOne({ collect_id: custom_order_id });

    if (!transaction) {
      return res.status(404).json({ success: false, message: "Transaction not found" });
    }

    return res.json({
      success: true,
      status: transaction.status  // ✅ only returning status
    });
  } catch (err) {
    console.error("Error in /transaction-status:", err.message);
    return res.status(500).json({ success: false, error: "Failed to fetch transaction status" });
  }
};

