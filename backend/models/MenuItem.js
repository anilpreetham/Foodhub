const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ["Veg", "Non-Veg"], required: true },
  img: { type: String, default: "" },
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
