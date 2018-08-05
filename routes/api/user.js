const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");

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
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    res.status(400).json(errors);
  }

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

// @route   GET api/users/login
// @desc    Login user / Returning JTW Token
// @access  Public
router.post("/login", (req, res) => {
  const registration = req.body.registration;
  const password = req.body.password;

  // Find user by registration
  User.findOne({ registration }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({ registration: "User not found" });
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        const payload = {
          registration: user.registration,
          name: user.name
        }; // Creat Jwt payload

        // Sign the token
        jwt.sign(
          payload,
          keys.secretOrkey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              sucess: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Passmord incorrect" });
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      registration: req.user.registration,
      email: req.user.email
    });
  }
);

module.exports = router;
