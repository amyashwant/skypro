const asyncHandler = require("express-async-handler");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require('../models/paymentModel')

const orderController = asyncHandler(async (req, res) => {
  try {
    // console.log(process.env.RAJORPAY_KEY_ID )
    // console.log(process.env.RAJORPAY_SECRET )

    // instances for keys
    const razorpay = new Razorpay({
      key_id: process.env.RAJORPAY_KEY_ID,
      key_secret: process.env.RAJORPAY_SECRET,
    });

    // console.log(razorpay)
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
      receipt: req.body.receipt
    };

    console.log(options);
    console.log(razorpay.orders.create, "razorpay")
    const order = await razorpay.orders.create(options);
    console.log(order);

    if (!order) {
      return res.status(500).send("Error");
    }
    console.log(order);
    res.json(order);
  } catch (error) {
    console.log("api error", error.message);
    res.status(500);
    throw new Error(error.message);
  }
});

//  for validation the payments
// const validatePaymentController = asyncHandler(async (req, res) => {
//   console.log(req.body, "validate router")
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//   try {
//     const sha = crypto.createHmac("sha256", process.env.RAJORPAY_SECRET);
//     console.log(sha, "shaaaaaaaaaa");

//     sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

//     const digest = sha.digest("hex");
//     if (digest !== razorpay_signature) {
//       return res.status(400).json({ msg: "Transaction is not legit!" });
//     }

//     res.json({
//       msg: "Your payment has been successfully processed.",
//       orderId: razorpay_order_id,
//       paymentId: razorpay_payment_id,
//     });

    
//   } catch (error) {
//     res.status(500);
//     throw new Error(error.message);
//   }
// });

const validatePaymentController = asyncHandler(async (req, res) => {
  console.log(req.body, "validate router");
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  try {
    const sha = crypto.createHmac("sha256", process.env.RAJORPAY_SECRET);
    console.log(sha, "shaaaaaaaaaa");

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest("hex");
    const isAuthentic = digest === razorpay_signature

    if(isAuthentic){
      await Payment.create({
        razorpay_order_id, razorpay_payment_id, razorpay_signature
      })

      res.redirect(
          `http://localhost:3000/success`
        );
    }else{
      res.status(400).json("payment failed")
    } 
    // if (digest !== razorpay_signature) {
    //   return res.status(400).json({ msg: "Transaction is not legit!" });
    // }

    // // Send JSON response
    // res.json({
    //   msg: "Your payment has been successfully processed.",
    //   orderId: razorpay_order_id,
    //   paymentId: razorpay_payment_id,
    // });

    // // Redirect after sending JSON response
    // res.redirect(
    //   `http://localhost:3000/success`
    // );
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = { orderController, validatePaymentController };

// Redirect after sending JSON response
    // res.redirect(
    //   `http://localhost:3000/success?reference=${razorpay_payment_id}`
    // );