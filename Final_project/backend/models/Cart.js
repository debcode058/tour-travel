const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tourId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour",
  },
});

module.exports = mongoose.model("Cart", cartSchema);