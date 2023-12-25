const express = require("express");
const path = require("path");
const app = express();
const dbConnect = require("./config/db");
dbConnect();
const chats = require("./data/data");
const colors = require("colors");
const cookieparser = require("cookie-parser");
require("dotenv").config();
const crypto = require("crypto");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const userRoutes = require("./routes/userRoutes");
const userChats = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const packageRoutes = require("./routes/packagesRoutes");
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");
//middlewares
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/chat", userChats);
app.use("/api/message", messageRoutes);
app.use("/api/package", packageRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/checkout", orderRoutes);

app.use("/api/getkeys", (req, res) => {
  res.status(200).json({ key: process.env.RAJORPAY_KEY_ID });
});

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

// sk_test_51OKbt1SBYt5a6mPeZIypG17yCrMcbBOqbxiFvDGsvaeg6ssl5bYvfh4UfJxBYDa9I58zKOBGtJblnZFFEoV2xbbv00cIhviCDe
// bouquet: price_1OKcfxSBYt5a6mPeuFEF0QBc
// bouquetTwo: price_1OKcliSBYt5a6mPe7OHM2nUO

// const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OKbt1SBYt5a6mPeZIypG17yCrMcbBOqbxiFvDGsvaeg6ssl5bYvfh4UfJxBYDa9I58zKOBGtJblnZFFEoV2xbbv00cIhviCDe"
);

// const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
  req.body.items
  [
      {
          id: 1,
          quantity: 3
      }
  ]

  stripe wants
  [
      {
          price: 1,
          quantity: 3
      }
  ]
  */
  console.log(req.body);
  const items = req.body.items;
  console.log("items>", items);
  console.log("items>>36", items);
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

// app.listen(4000, () => console.log("Listening on port 4000!"));
