const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCourseRegisterInput(data) {
  let errors = {};

  data.course_name = !isEmpty(data.course_name) ? data.course_name : "";
  data.course_code = !isEmpty(data.course_code) ? data.course_code : "";

  if (Validator.isEmpty(data.course_name)) {
    errors.course_name = "Course name field is required";
  } else if (!Validator.isLength(data.course_name, { min: 2, max: 40 })) {
    errors.course_name = "Course name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.course_code)) {
    errors.course_code = "Course code field is required";
  }

  return { errors, isValid: isEmpty(errors) };
};
