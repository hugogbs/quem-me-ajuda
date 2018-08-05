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
  },
  places: {
    type: [String],
    required: true
  },
  schedules: {
    type: Map,
    of: [Number], // day : [hour]
    required: true
  }
});

module.exports = Tutor = mongoose.model("tutor", TutorSchema);
