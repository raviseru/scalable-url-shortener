const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortCode: {
      type: String,
      unique: true,
      index: true,
    },
    clickCount: {
      type: Number,
      default: 0,
    },
    expiryDate: {
      type: Date,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Url", urlSchema);
