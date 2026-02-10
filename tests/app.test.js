const request = require("supertest");
const app = require("../src/app");

describe("Todo API", () => {
  it("should return empty list", async () => {
    const res = await request(app).get("/api/todos");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should add a todo", async () => {
    const todo = { text: "Buy milk" };
    const res = await request(app).post("/api/todos").send(todo);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(todo);
  });
});
