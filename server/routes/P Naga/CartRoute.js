const { Router } = require('express')
const Product = require('../../models/Aman/products.model')
const Cart = require('../../models/P Naga/CartModel')

const route = Router()

route.get('/', async (req, res) => {
  try {
    const data = await Cart.find()
      .pupulate('user', '-password') 
      .populate('product')

    res.status(200).json(data)
  } catch (e) {
    res.status(400).json(e.message)
  }
})

route.post('/', async (req, res) => {
  const data = req.body
  if (!data) {
    res.status(400).json({ message: 'Please Provide Valid Inputs' })
    return
  }

  try {
    const response = await Cart.create(data)
    res.status(200).json(response)
  } catch (e) {
    res.status(400).json({ message: 'Provide Valid Inputs' })
  }
})

route.put('/:id/increment', async (req, res) => {
  const id = req.params.id
  if (!id) {
    res.status(400).json({ message: 'id is not valid' })
    return
  }

  try {
    const response = await Cart.findById(
      id,
      { $inc: { quantity: 1 } },
      { new: true },
    )
    res.status(200).send(response)
  } catch (e) {
    res.status(400).json({ message: 'cant update the field' })
  }
})

route.put('/:id/decrement', async (req, res) => {
  const id = req.params.id
  if (!id) {
    res.status(400).json({ message: 'id is not valid' })
    return
  }

  try {
    const response = await Cart.findById(
      id,
      { $inc: { quantity: -1 } },
      { new: true },
    )
    res.status(200).send(response)
  } catch (e) {
    res.status(400).json({ message: 'cant update the field' })
  }
})

module.exports = route
