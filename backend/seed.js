const mongoose = require("mongoose");
require("dotenv").config();
const MenuItem = require("./models/MenuItem");

const items = [
  { name: "Paneer Butter Masala", price: 249, category: "Veg" },
  { name: "Veg Biryani", price: 199, category: "Veg" },
  { name: "Palak Paneer", price: 229, category: "Veg" },
  { name: "Dal Makhani", price: 179, category: "Veg" },
  { name: "Masala Dosa", price: 129, category: "Veg" },
  { name: "Chole Bhature", price: 149, category: "Veg" },
  { name: "Aloo Gobi", price: 159, category: "Veg" },
  { name: "Veg Manchurian", price: 169, category: "Veg" },
  { name: "Paneer Tikka", price: 259, category: "Veg" },
  { name: "Chicken Biryani", price: 299, category: "Non-Veg" },
  { name: "Butter Chicken", price: 319, category: "Non-Veg" },
  { name: "Chicken Tikka", price: 289, category: "Non-Veg" },
  { name: "Fish Fry", price: 349, category: "Non-Veg" },
  { name: "Mutton Rogan Josh", price: 399, category: "Non-Veg" },
  { name: "Prawn Masala", price: 379, category: "Non-Veg" },
  { name: "Egg Curry", price: 179, category: "Non-Veg" },
  { name: "Chicken 65", price: 259, category: "Non-Veg" },
  { name: "Mutton Keema", price: 339, category: "Non-Veg" },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await MenuItem.deleteMany();
  await MenuItem.insertMany(items);
  console.log("Seeded menu items!");
  process.exit();
});
