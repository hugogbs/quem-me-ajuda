const express = require("express");
const router = express.Router();

// Load Course model
const Course = require("../../models/Course");

// @route   GET api/courses/test
// @desc    Tests user route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Courses Works" }));

// @route   GET api/courses/register
// @desc    Register course
// @access  Private
router.post("/register", (req, res) => {
  Course.findOne({ course_code: req.body.course_code }).then(course => {
    if (course) {
      return res.status(400).json({ course_code: "Course already exists" });
    } else {
      const newCourse = new Course({
        registration: req.body.course_code,
        course_name: req.body.course_name
      });
    }
  });
});

module.exports = router;
