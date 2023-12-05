const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected".cyan.bold, conn.connection.host.cyan.bold);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = dbConnect;
