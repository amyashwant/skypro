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

// const MAX_RETRIES = 3; // Maximum number of connection retry attempts
// const RETRY_INTERVAL_MS = 5000; // Retry interval in milliseconds (5 seconds in this example)

// const connectWithRetry = async (retryCount) => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected".cyan.bold, conn.connection.host.cyan.bold);
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err.message);

//     if (retryCount <= MAX_RETRIES) {
//       console.log(
//         `Retrying connection in ${RETRY_INTERVAL_MS / 1000} seconds...`
//       );
//       setTimeout(() => connectWithRetry(retryCount + 1), RETRY_INTERVAL_MS);
//     } else {
//       console.error(`Max connection attempts reached. Exiting...`);
//       // Implement additional logic for notifying administrators if needed
//       process.exit(1); // Exit with a non-zero code to indicate an error
//     }
//   }
// };

// const dbConnect = async () => {
//   console.log("Attempting to connect to MongoDB...");

//   // Start the connection attempt with the first retry
//   await connectWithRetry(1);
// };

module.exports = dbConnect;
