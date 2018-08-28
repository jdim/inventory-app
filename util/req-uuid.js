const uuidv4 = require("uuid/v4");

module.exports = function(req, res, next) {
  req.id = uuidv4();
  next();
};
