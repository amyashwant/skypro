const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Package", packageSchema);
