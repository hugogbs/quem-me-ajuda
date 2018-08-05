const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  registration: {
    type: String,
    required: true,
    index: { unique: true }
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  course_code: {
    type: String,
    ref: "courses",
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_number: {
    type: String
  },
  evaluation: {
    type: Number,
    default: 5
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
