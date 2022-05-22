const mongoose = require("mongoose");

const password = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  User_id: {
    type: String,
    required: true,
  },
  OTP: {
    type: String,
    required: true,
  },
  create_At: { 
      type: Date, 
      default:Date.now(),
      expires: 900 },
});

module.exports.Password = mongoose.model("passwordReset", password);
