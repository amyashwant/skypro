const asyncHandler = require("express-async-handler");
const Razorpay = require("razorpay");
const crypto = require('crypto')

const orderController = asyncHandler(async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAJORPAY_KEY_ID,
      key_secret: process.env.RAJORPAY_SECRET,
    });

    const options = req.body;
    console.log(options);
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error");
    }
    console.log(order);
    res.json(order);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const validatePaymentController = asyncHandler(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  try {
    const sha = crypto.createHmac("sha256", process.env.RAJORPAY_SECRET);
    console.log(sha)

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");
    if (digest !== razorpay_signature) {
      return res.status(400).json({ msg: "Transaction is not legit!" });
    }

    res.json({
      msg: "success",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = { orderController, validatePaymentController };
