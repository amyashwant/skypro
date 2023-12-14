const express = require("express");
const app = express();
const dbConnect = require("./config/db");
dbConnect();
const chats = require("./data/data");
const colors = require("colors");
const cookieparser = require("cookie-parser");
require("dotenv").config();

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const userRoutes = require("./routes/userRoutes");
const userChats = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const packageRoutes = require("./routes/packagesRoutes");
// const contactRoutes = require("./routes/contactRoutes")
const path = require("path");

//middlewares
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/chat", userChats);
app.use("/api/message", messageRoutes);
app.use("/api/package", packageRoutes);
// app.use("/api/contact", contactRoutes);

//error handeling mechanism
// app.use(notFound);
// app.use(errorHandler);

//listening the server
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`server listened at port ${PORT}`.yellow.bold);
});

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/skyproyashwant/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname1, "skyproyashwant", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------
