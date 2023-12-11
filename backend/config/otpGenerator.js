const otpGenerator = require("otp-generator");

const otp = otpGenerator.generate(6, {
  upperCaseAlphabets: false,
  specialChars: false,
});
// const otp = otpObj.otp;
// console.log("otpjs>>", otp);
module.exports = otp;
