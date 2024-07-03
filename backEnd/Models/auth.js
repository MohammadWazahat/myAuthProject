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
const Auth = mongoose.model("authUser", userSchema);
//here "user" is the name of the collection which will become plural as users

module.exports = Auth;
