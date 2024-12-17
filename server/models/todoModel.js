const mongoose = require("mongoose");

const todotSchema = mongoose.Schema(
  {
    completed: Boolean,
    userId: {
      type: String,
      ref: "User",
    },
    title: String,
  },
  { versionKey: false }
);

const Todo = mongoose.model("Todo", todotSchema);

module.exports = Todo;
