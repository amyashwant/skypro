const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/token");
// const otp = require("../config/otpGenerator");
const emailVerification = require("../middleware/emailVerification");
const otpGenerator = require("otp-generator");

const registerController = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).send({
        success: false,
        message: "enter all credentials correctly",
      });
    }

    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({ message: "user is already registered " });
    }

    // const otp = otpGenerator.generate(6, {
    //   upperCaseAlphabets: false,
    //   specialChars: false,
    //   alphabets: false, // Exclude alphabets (both uppercase and lowercase)
    //   specialChars: false, // Exclude special characters
    //   digits: true, // Include digits
    // });

    function generateOTP() {
      // Generate a random 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000);
      return otp.toString();
    }

    // Example usage:
    const otp = generateOTP();

    console.log("otpcontroller>>", otp);

    if (emailVerification(email, otp)) {
      let user = await User.create({
        name,
        email,
        password,
        confirmPassword,
      });

      if (user) {
        res.status(200).send({
          success: true,
          user: user,
          otp: otp,
          token: generateToken(user._id),
        });
      } else {
        res.status(400).send("user not inserted in db");
      }
    } else {
      res.status(400).send("email is not verified");
    }

    // let user = await User.create({
    //   name,
    //   email,
    //   password,
    //   confirmPassword,
    // });

    // if (user) {
    //   res.status(200).send({
    //     success: true,
    //     user: user,
    //     token: generateToken(user._id),
    //   });
    // } else {
    //   res.status(400).send("user not inserted in db");
    // }
  } catch (error) {
    console.log(error);
    res.status(401).send("something wrong happened");
  }
};

const authController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search;

  const users = await User.find({
    $or: [
      {
        name: { $regex: req.query.search, $options: "i" },
        email: { $regex: req.query.search, $options: "i" },
      },
    ],
  }).find({ _id: { $ne: req.user._id } });
  // .find({ _id: { $ne: req.user._id } });
  res.send(users);

  console.log(keyword);
});

module.exports = { registerController, authController, allUsers };
