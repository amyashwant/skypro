const mongoose = require("mongoose");

const packageBouqueSchema = new mongoose.Schema({
  packageRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package",
  },
  broadcasterRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Broadcaster",
    // type: String,
    // required: true,
  },

  bouqueRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bouquet",
  },

  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PackageBouque", packageBouqueSchema);
