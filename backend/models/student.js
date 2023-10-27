const mongoose = require("mongoose");
const studentschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const studentmodel = mongoose.model("studentmodel", studentschema);
module.exports = studentmodel;
