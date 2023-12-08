const mongoose = require("mongoose");
const broadcasterSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    channels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
      },
    ],
    bouquets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bouquet',
      },
    ],
    // Add any other broadcaster-related fields here
  });

module.exports = mongoose.model('Broadcaster', broadcasterSchema);