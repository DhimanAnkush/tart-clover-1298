const { Router } = require('express')
const Address = require('../../models/P Naga/AddressModel')

const route = Router()

route.get('/', async (req, res) => {
  try {
    const data = await Address.find().sort('created_at')
    res.status(200).send(data)
  } catch (e) {
    res.status(400).send({ message: 'cant find latest one' })
  }
})

route.post('/', async (req, res) => {
  const data = req.body
  if (!data) {
    res.status(400).send({ message: 'PLEASE PROVIDE VALID ADRESS FIELD' })
    return
  }

  try {
    const data = await Address.create(data)
    res.status(200).send(data)
  } catch (e) {
    res.status(400).send({ message: 'PLEASE PROVIDE VALID ADRESS FIELD' })
  }
})


module.exports=route
