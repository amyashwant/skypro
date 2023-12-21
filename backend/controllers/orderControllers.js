const asyncHandler = require("express-async-handler");
const Razorpay = require("razorpay");

const orderController = asyncHandler(async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    console.log(options)
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error");
    }
    console.log(order)
    res.json(order);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { orderController };
