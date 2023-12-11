const mongoose = require("mongoose");
const broadcasterSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    channelsRef: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
      },
    ],
    bouquetsRef: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bouquet',
      },
    ],
    // Add any other broadcaster-related fields here
  });

module.exports = mongoose.model('Broadcaster', broadcasterSchema);