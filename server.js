const app = require("./app");
const port = process.env.NODE_PORT || 8081;
const db = require("./util/db");

db.then(
  () => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  },
  err => {
    console.error(`db connection error: ${err}`);
    process.exit();
  }
);

// if (process.env.NODE_ENV !== "test") {
//   require("./util/db").once("open", () =>
//     app.listen(port, () => console.log(`Listening on port ${port}`))
//   );
// } else {
//   app.listen(port, () => console.log(`Listening on port ${port}`));
// }
