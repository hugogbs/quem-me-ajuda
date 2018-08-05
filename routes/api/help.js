const express = require("express");
const router = express.Router();

// @route   GET api/helps/test
// @desc    Tests helps route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Helps Works" }));

module.exports = router;
