const express = require("express");
const mogoose = require("mongoose");

const users = require("./routes/api/user");
const helps = require("./routes/api/help");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// Connect to Mongo DB
mogoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

// Use routes
app.use("/api/users", users);
app.use("/api/helps", helps);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
