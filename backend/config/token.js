const jwt = require("jsonwebtoken");
require("dotenv").config();

generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.SEC_KEY, {
    expiresIn: "30d",
  });
  return token;
};

module.exports = generateToken;
