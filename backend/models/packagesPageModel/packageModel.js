const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  // price: {
  //   type: String,
  //   trim: true,
  // },
  // broadcasterRef: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Broadcaster",
  //   },
  // ],
});

module.exports = mongoose.model("Package", packageSchema);
