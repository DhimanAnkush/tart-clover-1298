const mongoose = require('mongoose')

const AddressSchema = mongoose.Schema({

  user: {
    type: String,
    required: true
  },
  Fname: {
    type: String,
    required: true,
  },
  Lname: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Line1: {
    type: String,
    required: true,
  },
  PinCode: {
    type: Number,
    required: true,
  },
  Post: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
}, {
  timestamps:true
})


module.exports = mongoose.model("address",AddressSchema)