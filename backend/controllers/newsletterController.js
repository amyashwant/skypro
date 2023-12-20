const asyncHandler = require("express-async-handler");
const Newsletter = require("../models/newsletterModel")

const newsletterController = asyncHandler(async (req, res) => {
  const { email } = req.body;

  console.log(email,"email")

  const existingEmail = await Newsletter.findOne({ email })

  if(existingEmail) {
    return res.status(400).json({ message: "Email already exists"})
  }

  const data = await Newsletter.create({email})

  res.status(201).json({ message: "Thankyou for Subscribing", data:data})
});

module.exports = { newsletterController };
