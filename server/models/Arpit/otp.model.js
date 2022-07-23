const { Schema, model } = require("mongoose");

const otpModel = new Schema({
  phone: { type: String },
  hash: { type: String },
  otp: { type: Number },
});
const otpSchema = model("user", otpModel);
module.exports = { otpSchema };
