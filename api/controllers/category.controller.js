const Category = require("../models/category.model");

exports.post = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "No content supplied"
    });
  }
  Category.create({
    name: req.body.name
  })
    .then(category => {
      res.set("Location", category.url);
      res.status(201).end();
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category."
      });
    });
};
