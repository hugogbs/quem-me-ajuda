const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.registration = !isEmpty(data.registration) ? data.registration : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.registration)) {
    errors.registration = "Registration field is required";
  } else if (!Validator.isLength(data.registration, { min: 9, max: 9 })) {
    errors.registration = "Registration must have 9 characters";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  return { errors, isValid: isEmpty(errors) };
};
