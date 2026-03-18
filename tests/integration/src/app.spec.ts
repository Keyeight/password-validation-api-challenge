import request from "supertest";
import { app } from "../../../src/app";

describe("Password Validation Integration Tests", () => {
  it("It should return 200 for a password that meets all the criteria", async () => {
    const response = await request(app)
      .post("/api/password/validate")
      .send({ password: "AbTp9!fok" });

    expect(response.status).toBe(200);
    expect(response.body.isValid).toBe(true);
  });

  it("It should return 400 and errors for a weak password", async () => {
    const response = await request(app)
      .post("/api/password/validate")
      .send({ password: "123" });

    expect(response.status).toBe(400);
    expect(response.body.isValid).toBe(false);
    expect(response.body.errors).toContain(
      "A senha deve conter no mínimo 9 caracteres.",
    );
  });
});
