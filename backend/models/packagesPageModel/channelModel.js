const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  pic: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg ",
  },
  // Add any other channel-related fields here
});

module.exports = mongoose.model("Channel", channelSchema);
