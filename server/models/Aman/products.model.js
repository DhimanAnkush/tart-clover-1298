const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  image: String,
  title: String,
  review: String,
  price: String,
  rating: String,
  category: String,
});

const Product = model("product", productSchema);

module.exports = Product;
