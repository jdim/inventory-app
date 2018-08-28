const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

let foodTypeId;

beforeAll(async () => {
  await mongoose
    .connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true }
    )
    .catch(err => {
      console.error(err);
    });
  foodTypeId = await __pushFoodType();
});

afterAll(() => {
  return mongoose.connection.close();
});

describe("POST /products create new product", () => {
  it("should return 201 & Location", () => {
    return request(app)
      .post("/api/products/")
      .set("Content-Type", "application/json")
      .send({
        name: "Milk",
        category: foodTypeId,
        shelf_life: new Date(2018, 7, 22)
      })
      .expect(201)
      .expect("Location", /\/products\/[0-9a-f]{24}$/);
  });
});

async function __pushFoodType() {
  const idRegEx = RegExp("[0-9a-f]{24}$");
  res = await request(app)
    .post("/api/categories/")
    .set("Content-Type", "application/json")
    .send({
      name: "Dairy product"
    });
  return idRegEx.exec(res.headers["location"])[0];
}
