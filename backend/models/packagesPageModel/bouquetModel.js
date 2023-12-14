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
  broadcasterRef: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Broadcaster",
    },
  ],
  channelRef: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
  ],

  // Add any other bouquet-related fields here
});

module.exports = mongoose.model("Bouquet", bouquetSchema);
