const express = require("express");
const router = express.Router();

const productController = require("../Controlers/product-controller");

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductWithId);

router.post("/", productController.createNewProduct);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
