const express = require("express");
const routes = require("./api/routes");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const addUUID = require("./util/req-uuid");
const app = express();

// logging
app.use(addUUID);
morgan.token("id", function getId(req) {
  return req.id;
});
if (process.env.NODE_ENV == "production") {
  app.use(
    morgan(
      ':id :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
    )
  );
} else {
  app.use(
    morgan(":id :method :url :status :response-time ms - :res[content-length]")
  );
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

module.exports = app;
