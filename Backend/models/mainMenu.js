const mongoose = require('mongoose');

const mainMenu = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true }); 

const Menu = mongoose.model("Menu", mainMenu);
module.exports = Menu;
