const mongoose = require("mongoose");

const username = process.env.MONGO_USERNAME || "";
const password = process.env.MONGO_PASSWORD || "";

mongoose.Promise = global.Promise;
module.exports = mongoose.connect(
  `mongodb://${username}:${password}@mongo/inventory?authSource=admin`,
  { useNewUrlParser: true }
);
