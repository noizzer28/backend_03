const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  surname: {
    type: String,
    required: true,
    minlength: 2,
  },
  username: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
