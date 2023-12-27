const mongoose = require('mongoose');

const complianceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  pdfFile: {
    type: String,
    default: '',
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Compliance', complianceSchema);
