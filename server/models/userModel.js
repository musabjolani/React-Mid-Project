const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: String,
    email: String,
    street: String,
    city: String,
    zipcode: String,
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;
