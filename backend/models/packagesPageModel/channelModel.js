const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  Type: {
    type: String,
    trim: true,
  },
  channelImage: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg ",
  },

  channelPrice: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Channel", channelSchema);
