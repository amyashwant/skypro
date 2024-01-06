const asyncHandler = require("express-async-handler");
const contactMiddleware = require("../middleware/contactMiddleware");
const nodemailer = require("nodemailer");

const contactController = asyncHandler(async (req, res) => {
  const { name, email, phone, countryCode, subject, message } = req.body;
  console.log(name, email, phone, countryCode, subject, message);

  const emailTemplate = `
  <html>
  <head></head>
  <body>
    <div style="max-width: 600px; margin: auto; background: #e99e7a; padding: 20px; text-align: center; color: #fff; font-family: 'Roboto', sans-serif;">
      <h1 style="color: #071e43; font-weight: 900; font-family: Roboto;">SkyPro Communication</h1>
      <h2 style="color: #071e43; font-weight: 900;">Contact Form Submission</h2>

      <div style="margin-bottom: 20px;">
        <strong>Full Name:</strong> ${name}
      </div>

      <div style="margin-bottom: 20px;">
        <strong>Phone:</strong> ${countryCode} ${phone}
      </div>

      <div style="margin-bottom: 20px;">
        <strong>Email:</strong> ${email}
      </div>

      <div style="margin-bottom: 20px;">
        <strong>Subject:</strong> ${subject}
      </div>

      <div style="margin-bottom: 20px;">
        <strong>Message:</strong> ${message}
      </div>
    </div>
  </body>
</html>
    `;

  // contactMiddleware(name, email, phone, subject, message)

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_MAIL,
        pass: process.env.GOOGLE_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GOOGLE_MAIL,
      // subject: "SkyPro has contacted you through the Contact Form.",
      html: emailTemplate,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return false;
      } else {
        console.log("Email sent: " + info.response);
        return true;
      }
    });
    res.status(200).json("message sent successfull on email");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = { contactController };
