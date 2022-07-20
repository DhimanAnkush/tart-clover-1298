const express = require("express");
require("dotenv").config({ path: "./.env" });
const connection= require("./Database/db");
const productRouter = require("./routes/Aman/products.route");
const cors= require("cors")


const app= express();
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/products",productRouter)




const PORT =process.env.PORT||8080


app.listen(PORT, async ()=>{
  await connection;
  console.log("Connected to Database");
  console.log(`🌎 started on http://localhost:${PORT}/`);
})


