const nodemailer = require("nodemailer");
async function contactMiddleware(email, name, phone, subject, message) {
  // let deferred = Q.defer();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_MAIL,
      pass: process.env.GOOGLE_PASS,
    },
  });
  console.log("google mail>>", process.env.GOOGLE_MAIL);
  console.log("google mail>>", process.env.GOOGLE_PASS);
  const mailOptions = {
    from: email,
    to: process.env.GOOGLE_MAIL,
    subject: "Sending Email using Node.js",
    text: message,
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

module.exports = contactMiddleware;
