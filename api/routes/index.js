module.exports = app => {
  app.get("/api/version", (req, res) => {
    res.json({ version: "1.0.0" });
  });
  app.use("/api/products", require("./product.routes"));
  app.use("/api/categories", require("./category.routes"));
};
