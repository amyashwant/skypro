const mongoose = require("mongoose");

const bouquetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  channels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  // Add any other bouquet-related fields here
});

module.exports = mongoose.model("Bouquet", bouquetSchema);
