const nodemailer = require("nodemailer");
async function emailVerification(email, otp) {
  // let deferred = Q.defer();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_MAIL,
      pass: process.env.GOOGLE_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GOOGLE_MAIL,
    to: email,
    subject: "Sending Email using Node.js",
    text: `Your OTP for verification is ${otp}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return false;
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  });
  // return deferred.promise;
}

module.exports = emailVerification;
