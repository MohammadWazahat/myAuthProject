const mongoose = require("mongoose");

//Crating schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
});

//Creating a model
const User = mongoose.model("user", userSchema);

module.exports = User;
