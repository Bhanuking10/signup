const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

const studentmodel = require("./models/student");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;

mongoose.connect("mongodb://127.0.0.1:27017/student", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  studentmodel.findOne({ email, password }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("password incorrect");
      }
    } else {
      res.json("user does not exist");
    }
  });
});
app.post("/register", (req, res) => {
  studentmodel
    .create(req.body)
    .then((student) => {
      res.json(student);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log("app is running");
});
