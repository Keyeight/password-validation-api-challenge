import request from "supertest";
import { app } from "../../../../src/app";

describe("PasswordController (Integration)", () => {
  const route = "/api/password/validate";

  it("It should return 200 when the password meets all security criteria", async () => {
    const validPassword = "AbTp9!fok";

    const response = await request(app)
      .post(route)
      .send({ password: validPassword });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      isValid: true,
    });
  });

  it("It should return 400 and the list of errors when the password fails on multiple rules", async () => {
    const invalidPassword = "aa";

    const response = await request(app)
      .post(route)
      .send({ password: invalidPassword });

    expect(response.status).toBe(400);
    expect(response.body.isValid).toBe(false);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors).toContain(
      "A senha deve conter no mínimo 9 caracteres.",
    );
    expect(response.body.errors).toContain(
      "A senha não deve conter caracteres repetidos.",
    );
  });

  it("It should return 400 if the password field is not submitted or is not a string", async () => {
    const response = await request(app).post(route).send({ password: 12345 });

    expect(response.status).toBe(400);
    expect(response.body.isValid).toBe(false);
    expect(response.body.errors).toContain(
      "A senha é obrigatória e deve ser uma string.",
    );
  });

  it("It should return 400 for passwords that contain spaces", async () => {
    const passwordWithSpace = "AbTp9! fok";

    const response = await request(app)
      .post(route)
      .send({ password: passwordWithSpace });

    expect(response.status).toBe(400);
    expect(response.body.errors).toContain(
      "A senha não deve conter espaços em branco.",
    );
  });

  it("It should return 400 when the password is an empty string", async () => {
    const response = await request(app).post(route).send({ password: "" });
    expect(response.status).toBe(400);
    expect(response.body.isValid).toBe(false);
    expect(response.body.errors).toContain("A senha não pode ser vazia.");
  });

  it("It should return 400 when the password contains only spaces", async () => {
    const response = await request(app).post(route).send({ password: "   " });

    expect(response.status).toBe(400);
    expect(response.body.errors).toContain("A senha não pode ser vazia.");
  });
});
