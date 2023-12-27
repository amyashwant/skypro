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


const getnewsLetterController = asyncHandler(async (req,res) => {
  try {
    const newsletter = await Newsletter.find()
    // console.log(newsletter)
    res.status(200).json(newsletter)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: "Internal server error"})
  }
})

module.exports = { newsletterController , getnewsLetterController};
