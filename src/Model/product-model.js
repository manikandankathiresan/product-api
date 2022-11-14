const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
