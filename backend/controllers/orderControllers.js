const asyncHandler = require("express-async-handler");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../models/paymentModel");

const orderController = asyncHandler(async (req, res) => {
  try {
    // Validate input parameters
    const { amount, receipt, currency } = req.body;

    // if (!amount || isNaN(amount) || amount <= 0) {
    //   return res.status(400).json({ error: "Invalid or missing 'amount' parameter" });
    // }

    // if (!receipt || typeof receipt !== "string" || receipt.trim() === "") {
    //   return res.status(400).json({ error: "Invalid or missing 'receipt' parameter" });
    // }

    // if (!currency || typeof currency !== "string" || currency.trim() === "") {
    //   return res.status(400).json({ error: "Invalid or missing 'currency' parameter" });
    // }

    // Instances for keys
    const razorpay = new Razorpay({
      key_id: process.env.RAJORPAY_KEY_ID,
      key_secret: process.env.RAJORPAY_SECRET,
    });

    // Options for creating the order
    const options = {
      amount: Number(amount * 100),
      currency: currency.toUpperCase(), // Ensure currency is in uppercase
      receipt: receipt,
    };

    // Create the order
    const order = await razorpay.orders.create(options);
    console.log(order);

    if (!order) {
      return res.status(500).send("Error creating Razorpay order");
    }

    // Send the order details in the response
    res.json(order);
  } catch (error) {
    console.log("API error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  for validation the payments with handler

const validatePaymentController = asyncHandler(async (req, res) => {
  try {
    console.log("Received request for payment validation:", req.body);

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const sha = crypto.createHmac("sha256", process.env.RAJORPAY_SECRET);
    console.log(sha, "Created SHA256 HMAC instance");

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");
    console.log("razorpay_signature", razorpay_signature);
    console.log("Calculated signature:", digest);

    if (digest !== razorpay_signature) {
      console.log("Transaction is not legit. Signatures do not match.");
      return res
        .status(400)
        .json({ error: "Transaction failed. Invalid signature." });
    }

    console.log("Payment is legit. Sending success response.");

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.json({
      msg: "Your payment has been successfully processed.",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error("Error during payment validation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  for validation with webhooks
// const validatePaymentController = asyncHandler(async (req, res) => {
//   try {
//     const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET;
//     console.log("webhook", WEBHOOK_SECRET)
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     console.log('Received Data:', req.body);

//     const data = crypto.createHmac('sha256', WEBHOOK_SECRET);
//     data.update(`${razorpay_order_id}|${razorpay_payment_id}`);
//     const digest = data.digest('hex');

//     console.log('Calculated Digest:', digest);
//     console.log('Received Signature:', razorpay_signature);

//     if (digest === razorpay_signature) {
//       // Request is legit
//       console.log('Request is legit');

//       // Store details in the database (replace this with your actual database logic)
//       await Payment.create({
//         razorpay_order_id,
//         razorpay_payment_id,
//         razorpay_signature,
//       });

//       res.json({
//         status: 'ok',
//         orderId: razorpay_order_id,
//         paymentId: razorpay_payment_id,
//       });
//     } else {
//       // Invalid signature
//       console.error('Invalid signature. Request is not legit.');
//       res.status(400).json({ error: 'Invalid signature' });
//     }
//   } catch (error) {
//     console.error('Error processing webhook:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

module.exports = { orderController, validatePaymentController };
