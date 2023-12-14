// const asyncHandler = require("express-async-handler");
// // const User = require("../models/userModel");
// // const Contact = require("../models/contactModel")
// const contactMiddleware = require("../middleware/contactMiddleware")
// const nodemailer = require("nodemailer")

// const contactController = asyncHandler(async (req, res) => {
//     const { name, email, phone, subject, message } = req.body;
//     console.log(name, email, phone, subject, message)
    
//     contactMiddleware(name, email, phone, subject, message)
    
// });

// module.exports = { contactController };


//  // if (!name || !email || !phone || !subject || !message) {
//     //   return res.status(400).send({
//     //     success: false,
//     //     message: "enter all credentials correctly",
//     //   });
//     // }
