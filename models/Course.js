const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const CourseSchema = new Schema({
  course_code: {
    type: String,
    required: true,
    index: true
  },
  course_name: {
    type: String,
    required: true
  }
});

module.exports = Course = mongoose.model("courses", CourseSchema);
