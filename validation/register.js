const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.registration = !isEmpty(data.registration) ? data.registration : "";
  data.course_code = !isEmpty(data.course_code) ? data.course_code : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  } else if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.registration)) {
    errors.registration = "Registration field is required";
  } else if (!Validator.isLength(data.registration, { min: 9, max: 9 })) {
    errors.registration = "Registration must have 9 characters";
  }

  if (Validator.isEmpty(data.course_code)) {
    errors.course_code = "Course code field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email must be a valid email";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return { errors, isValid: isEmpty(errors) };
};
