const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const MenuItem = require("./models/MenuItem");
const Order = require("./models/Order");

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// ── Menu Items ──────────────────────────────────────────────
app.get("/api/menu", async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
});

app.post("/api/menu", async (req, res) => {
  const item = await MenuItem.create(req.body);
  res.status(201).json(item);
});

app.put("/api/menu/:id", async (req, res) => {
  const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

app.delete("/api/menu/:id", async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// ── Orders ───────────────────────────────────────────────────
app.post("/api/orders", async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
});

app.get("/api/orders", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
