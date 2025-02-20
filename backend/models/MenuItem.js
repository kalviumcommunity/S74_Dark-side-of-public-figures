const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the menu item (e.g., "Pizza")
  price: { type: Number, required: true }, // Price of the menu item
  description: { type: String }, // Description of the dish
  category: { type: String, required: true }, // Category (e.g., "Beverages", "Main Course")
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;
