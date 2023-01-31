const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "must provide name"],
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("users", UserModel);
