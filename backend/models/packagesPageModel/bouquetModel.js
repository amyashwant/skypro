const mongoose = require("mongoose");

const bouquetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  channelsRef: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
  ],
  price: {
    type: String,
    trim: true,
  },
  // Add any other bouquet-related fields here
});

module.exports = mongoose.model("Bouquet", bouquetSchema);