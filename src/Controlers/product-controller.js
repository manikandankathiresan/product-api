const createError = require("http-errors");
// const router = require('express').Router();   ## alternativ use in single import

const Product = require("../Model/product-model");
module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      const result = await Product.find();
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  },

  getProductWithId: async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await Product.findById(id);
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewProduct: async (req, res, next) => {
    try {
      const product = new Product(req.body);
      const result = await product.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  },

  updateProduct: async (req, res, next) => {
    const { id } = req.params;
    const updated = req.body;
    const options = { new: true };
    try {
      const result = await Product.findByIdAndUpdate(id, updated, options);
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteProduct: async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await Product.findByIdAndDelete(id);
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  },
};
