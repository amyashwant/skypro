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
const path = require("path");
// const multer = require("multer");
//middlewares
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/chat", userChats);
app.use("/api/message", messageRoutes);
app.use("/api/package", packageRoutes);

// const upload = multer({ dest: "uploads/" });

// app.post("/uploads", upload.single("complienceFile"), async (req, res) => {
//   console.log(req.body);
//   console.log(req.file);
// });

//error handeling mechanism
app.use(notFound);
app.use(errorHandler);

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

// socket code starts Below------------------------------
// const io = require("socket.io")(server, {
//   pingTimeout: 60000,
//   cors: {
//     origin: "http://localhost:3000", //:5000 may be
//   },
// });

// io.on("connection", (socket) => {
//   console.log("connected to socket.io");

//   //everytime users open the app he should be connected to his own personal socket
//   // take up user data from frontend
//   //creating a new socket where frontend will send some data and will join our room
//   socket.on("setup", (userData) => {
//     socket.join(userData._id); //thhis has created a room for that particular user
//     // console.log(userData._id);
//     socket.emit("connected");
//   });

//   socket.on("join chat", (room) => {
//     socket.join(room);
//     console.log("user joined Room:" + room);
//   });

//   socket.on("typing", (room) => socket.in(room).emit("typing"));
//   socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

//   socket.on("new message", (newMessageRecieved) => {
//     var chat = newMessageRecieved.chat;

//     if (!chat.users) return console.log("chat.users not defined");

//     chat.users.forEach((user) => {
//       if (user._id == newMessageRecieved.sender._id) return;

//       socket.in(user._id).emit("message recieved", newMessageRecieved);
//     });
//   });

//   socket.off("setup", () => {
//     console.log("USER DISCONNECTED");
//     socket.leave(userData._id);
//   });
// });

//-----dummy data APIs-----------------------------------
// app.get("/", (req, res) => {
//   res.send("API is running");
// });
// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });
// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

// // sk_test_51OKbt1SBYt5a6mPeZIypG17yCrMcbBOqbxiFvDGsvaeg6ssl5bYvfh4UfJxBYDa9I58zKOBGtJblnZFFEoV2xbbv00cIhviCDe
// // bouquet: price_1OKcfxSBYt5a6mPeuFEF0QBc
// // bouquetTwo: price_1OKcliSBYt5a6mPe7OHM2nUO

// const express = require("express");
// var cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51OKbt1SBYt5a6mPeZIypG17yCrMcbBOqbxiFvDGsvaeg6ssl5bYvfh4UfJxBYDa9I58zKOBGtJblnZFFEoV2xbbv00cIhviCDe"
// );

// const app = express();
// app.use(cors());
// app.use(express.static("public"));
// app.use(express.json());

// app.post("/checkout", async (req, res) => {
//   /*
//   req.body.items
//   [
//       {
//           id: 1,
//           quantity: 3
//       }
//   ]

//   stripe wants
//   [
//       {
//           price: 1,
//           quantity: 3
//       }
//   ]
//   */
//   console.log(req.body);
//   const items = req.body.items;
//   console.log("items>>36",items)
//   let lineItems = [];
//   items.forEach((item) => {
//     lineItems.push({
//       price: item.id,
//       quantity: item.quantity,
//     });
//   });

//   const session = await stripe.checkout.sessions.create({
//     line_items: lineItems,
//     mode: "payment",
//     success_url: "http://localhost:3000/success",
//     cancel_url: "http://localhost:3000/cancel",
//   });

//   res.send(
//     JSON.stringify({
//       url: session.url,
//     })
//   );
// });

// app.listen(4000, () => console.log("Listening on port 4000!"));
