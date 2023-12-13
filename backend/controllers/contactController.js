// const asyncHandler = require("express-async-handler");
// // const User = require("../models/userModel");
// const Message = require("../models/contactModel")
// const nodemailer = require("nodemailer")

// const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     secure: false,
//     auth: {
//       user: process.env.SMTP_EMAIL,
//       pass: process.env.SMTP_PASSWORD
//     }
// });



// const contactController = asyncHandler(async (req, res) => {
//   try {
//     const { name, email, phone, subject, message } = req.body;
//     console.log(name, email, phone, subject, message)

//     if (!name || !email || !phone || !subject || !message) {
//       return res.status(400).send({
//         success: false,
//         message: "enter all credentials correctly",
//       });
//     }

//     var mailOptions = {
//         from: email,
//         to: process.env.SMTP_EMAIL,
//         subject: subject, 
//         text: message
//     }

//     transporter.sendMail(mailOptions, function(error, info){
//         if(error){
//             console.log(error)
//             return false
//         }else{
//             alert("email sent successfully")
//             console.log("email sent successfully", info.response)
//             return true
//         }
//     })
//   } catch (error) {
//     console.log(error);
//     res.status(401).send("something wrong happened");
//   }  
// });

// module.exports = { contactController };
