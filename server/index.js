const express = require("express");
require("dotenv").config({ path: "./.env" });
const connection = require("./Database/db");
const productRouter = require("./routes/Aman/products.route");
const connection = require("./Database/db");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Sugar Cosmetics API server started on localhost:${PORT}`);
});

app.use("/products", productRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  await connection;
  console.log("Connected to Database");
  console.log(`🌎 started on http://localhost:${PORT}/`);
});
