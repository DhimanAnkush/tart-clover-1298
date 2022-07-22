const mongoose = require('mongoose')

const CartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1
  }
}, {
  timestamps:true
})

module.exports = mongoose.model('cart', CartSchema)
