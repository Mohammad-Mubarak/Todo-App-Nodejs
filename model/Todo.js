const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const todoSchema = new mongoose.Schema({
  task: {
    type: String, 
  },
  userId:{
    type:String
  }

});



module.exports = mongoose.model("todo", todoSchema);

