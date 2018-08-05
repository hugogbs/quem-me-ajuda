const express = require("express");
const router = express.Router();

// Load Course validation
const validateCourseRegisterInput = require("../../validation/register-course");

// Load Course model
const Course = require("../../models/Course");

// @route   GET api/courses/test
// @desc    Tests user route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Courses Works" }));

// @route   POST api/courses/register
// @desc    Register course
// @access  Private
router.post("/register", (req, res) => {
  const { errors, isValid } = validateCourseRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Course.findOne({ course_code: req.body.course_code }).then(course => {
    if (course) {
      errors.course_code = "Course already exists";
      return res.status(400).json(errors);
    } else {
      const newCourse = new Course({
        course_code: req.body.course_code,
        course_name: req.body.course_name
      });
      newCourse
        .save()
        .then(course => res.json(course))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
