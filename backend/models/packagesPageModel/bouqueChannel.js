const mongoose = require("mongoose");

const bouquetSchema = new mongoose.Schema({
  bouqueRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bouquet",
  },

  channelRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Channel",
  },

  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BouqueChannel", bouquetSchema);
