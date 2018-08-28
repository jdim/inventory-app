const express = require("express");
const Product = require("../controllers/product.controller");
const router = express.Router();

router.post("/", Product.create);
router.get("/:productId", Product.findOne);
router.put("/:productId", Product.update);
router.delete("/:productId", Product.delete);
router.get("/", Product.findAll);

module.exports = router;
