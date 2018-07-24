const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const TutorSchema = new Schema({
  tutor_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    require: true,
    index: true
  },
  course_code: {
    type: Schema.Types.ObjectId,
    ref: "courses",
    require: true
  },
  proeficiency: {
    type: Number,
    require: true
  },
  evaluation: {
    type: Number,
    default: 4
  },
  amount_of_money: {
    type: Number
  }
});

module.exports = Tutor = mongoose.model("tutor", TutorSchema);
