const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  User.findOne({ registration: req.body.registration }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Registration already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "150", // Size
        r: "pg", // Rating
        d: "mm" // Default avatar
      });

      const newUser = new User({
        registration: req.body.registration,
        name: req.body.name,
        avatar,
        course_code: req.body.course_code,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
