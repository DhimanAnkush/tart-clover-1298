
const express = require('express')
require('dotenv').config({ path: './.env' })
const connection = require('./Database/db')
const cookieParser = require('cookie-parser')
const productRouter = require('./routes/Aman/products.route')
const CartRouter = require('./routes/P Naga/CartRoute')
const AddressRoute = require('./routes/P Naga/AddressRoute')

const cors = require('cors')
const helmet = require('helmet')
// const otp = require('./routes/Arpit/otp.route')


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(cookieParser())


app.get('/', (req, res) => {
  res.send(`Sugar Cosmetics API server started on localhost:${PORT}`)
})
// app.use('/', otp)
app.use('/products', productRouter);
app.use("/cart", CartRouter);
app.use("/address",AddressRoute)


const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
  await connection
  console.log('Connected to Database')
  console.log(`🌎 started on http://localhost:${PORT}/`)
})
