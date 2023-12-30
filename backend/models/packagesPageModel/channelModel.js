const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Type",
  },

  language: {
    // type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
  },
  category: {
    // type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  image: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg ",
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Channel", channelSchema);
