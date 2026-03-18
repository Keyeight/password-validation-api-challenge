import request from "supertest";
import { app } from "../../../src/app";

describe("Password Validation Integration Tests", () => {
  it("deve retornar 200 para uma senha que atende todos os critérios", async () => {
    const response = await request(app)
      .post("/api/password/validate")
      .send({ password: "AbTp9!fok" });

    expect(response.status).toBe(200);
    expect(response.body.isValid).toBe(true);
  });

  it("deve retornar 400 e os erros para uma senha fraca", async () => {
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
