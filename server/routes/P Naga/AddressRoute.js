
const { Router } = require('express')
const Address = require('../../models/P Naga/AddressModel')

const route = Router()

route.get('/:id', async (req, res) => {
  try {
    const data = await Address.findOne({user:req.params.id}).sort('-createdAt')
    res.status(200).send(data)
  } catch (e) {
    res.status(400).send({ message: 'cant find latest one' })
  }
})

route.post('/', async (req, res) => {
  const data = req.body
  console.log(data)
  if (!data) {
    res.status(400).send({ message: 'PLEASE PROVIDE ALL ADRESS FIELD' })
    return
  }
console.log(data)
  try {
    const response = await Address.create(data)
    res.status(200).send(response)
  } catch (e) {
    console.log(e.message)
    res.status(400).send(e.message)
  }
})


module.exports=route