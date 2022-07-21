const { Router } = require("express");
const Product = require("../../models/Aman/products.model");

const productRouter = Router();

productRouter.get("/get", async (req, res) => {
  let data = await Product.find();
  res.json(data);
});

productRouter.get("/:category", async (req, res) => {
  if (req.query.sort == "h2l") {
    var data = await Product.find({ category: req.params.category }).sort({
      price: -1,
    });
  } else if (req.query.sort == "l2h") {
    data = await Product.find({ category: req.params.category }).sort({
      price: 1,
    });
  } else {
    data = await Product.find({ category: req.params.category });
  }
  res.json(data);
});

productRouter.get("/single/:id", async (req, res) => {
  let data = await Product.findById({ _id: req.params.id });
  res.json(data);
});

module.exports = productRouter;
