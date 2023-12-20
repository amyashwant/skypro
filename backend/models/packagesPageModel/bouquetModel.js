const mongoose = require("mongoose");

const bouquetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  // channelRef: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Channel",
  //   },
  // ],
  broadcasterRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Broadcaster",
  },

  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Bouquet", bouquetSchema);
