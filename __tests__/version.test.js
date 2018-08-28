const request = require("supertest");
const app = require("../app");

describe("GET /api/version", () => {
  test("should return JSON, 200 OK", done => {
    request(app)
      .get("/api/version")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        done();
      });
  });
});
