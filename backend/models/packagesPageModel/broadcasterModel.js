const mongoose = require("mongoose");
const broadcasterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  // bouqueRef: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Bouquet",
  //   },
  // ],
  // channels: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Channel",
  //   },
  // ],
  // Add any other broadcaster-related fields here
});

module.exports = mongoose.model("Broadcaster", broadcasterSchema);
