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
})

module.exports = mongoose.model('cart', CartSchema)