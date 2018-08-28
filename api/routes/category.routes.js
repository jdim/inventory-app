const express = require("express");
const Category = require("../controllers/category.controller");
const router = express.Router();

router.post("/", Category.post);

module.exports = router;
