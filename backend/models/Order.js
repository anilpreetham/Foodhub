const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        id: Number,
        name: String,
        price: Number,
        quantity: Number,
        img: String,
      },
    ],
    total: { type: Number, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
