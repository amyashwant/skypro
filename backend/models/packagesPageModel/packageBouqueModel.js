const mongoose = require("mongoose");

const packageBouqueSchema = new mongoose.Schema({
  packageRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package",
  },
  broadcasterRef: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Broadcaster",
    },
  ],
  bouqueRef: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bouque",
    },
  ],
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PackageBouque", packageBouqueSchema);
