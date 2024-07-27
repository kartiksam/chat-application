const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3, // Use 'minlength' instead of 'min'
    maxlength: 20, // Use 'maxlength' instead of 'max'
    unique: true,
  },
  email: {
    type: String, // Add 'type'
    required: true,
    maxlength: 50, // Use 'maxlength' instead of 'max'
    unique: true,
  },
  password: {
    type: String, // Add 'type'
    required: true,
    minlength: 8, // Use 'minlength' instead of 'min'
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Users", userSchema);
