const mongoose = require("mongoose");
const { Schema } = mongoose;
const OrderSchema = require("./Order");

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
  role: { type: String, default: "client" },
  company: String,
  address: String,
  contactPhone: String,
  fullName: String,
  email: String // should be num? + how to validate israeli phone
});

mongoose.model("users", userSchema);
