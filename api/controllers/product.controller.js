const Product = require("../models/product.model");

exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "No content supplied"
    });
  }
  Product.create({
    name: req.body.name,
    category: req.body.category,
    shelf_life: new Date(2018, 8, 1)
  })
    .then(product => {
      res.set("Location", product.url);
      res.sendStatus(201);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
};

exports.findOne = (req, res) => {
  Product.findById(req.params.productId)
    .then(product => {
      if (!product) {
        res.sendStatus(404);
      }
      res.json(product);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Product."
      });
    });
};

exports.update = (req, res) => {
  const query = { _id: req.params.productId };
  if (!req.body.name) {
    return res.status(400).send({
      message: "No content supplied for update"
    });
  }
  let data = {
    name: req.body.name,
    shelf_life: req.body.shelf_life,
    category: req.body.category
  };
  Product.update(query, data, { $set: data })
    .then(product => {
      if (!product) {
        res.sendStatus(404).send({
          message: `Product not found with id ${req.params.productId}`
        });
      }
      res.sendStatus(204);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          `Error then updating Product with id ${req.params.productId}`
      });
    });
};

exports.delete = (req, res) => {
  Product.findById(req.params.productId).then(product => {
    if (!product) {
      res.sendStatus(404).send({
        message: `Product not found with id ${req.params.productId}`
      });
    }
    Product.remove({ _id: req.params.productId })
      .then(() => {
        res.json(product);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while deletting Product"
        });
      });
  });
};

exports.findAll = (req, res) => {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving list of Products"
      });
    });
};
