const mongoose = require("mongoose");

const menuItems = new mongoose.Schema({
 Id: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu", 
    required: true,
  }, 
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

},{timestamps:true});

const MenuItem = mongoose.model("MenuItem", menuItems);

module.exports = MenuItem;