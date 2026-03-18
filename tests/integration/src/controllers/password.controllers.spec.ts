import request from "supertest";
import { app } from "../../../../src/app";

describe("PasswordController (Integration)", () => {
  const route = "/api/password/validate";

  it("deve retornar 200 quando a senha atende a todos os critérios de segurança", async () => {
    const validPassword = "AbTp9!fok";

    const response = await request(app)
      .post(route)
      .send({ password: validPassword });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      isValid: true,
    });
  });

  it("deve retornar 400 e a lista de erros quando a senha falha em múltiplas regras", async () => {
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

  it("deve retornar 400 se o campo password não for enviado ou não for uma string", async () => {
    const response = await request(app).post(route).send({ password: 12345 });

    expect(response.status).toBe(400);
    expect(response.body.isValid).toBe(false);
    expect(response.body.errors).toContain(
      "A senha é obrigatória e deve ser uma string.",
    );
  });

  it("deve retornar 400 para senhas que contenham espaços em branco", async () => {
    const passwordWithSpace = "Abcd! 1234";

    const response = await request(app)
      .post(route)
      .send({ password: passwordWithSpace });

    expect(response.status).toBe(400);
    expect(response.body.errors).toContain(
      "A senha não deve conter espaços em branco.",
    );
  });

  it("deve retornar 400 quando a senha for uma string vazia", async () => {
    const response = await request(app)
      .post(route)
      .send({ password: "" });
    expect(response.status).toBe(400);
    expect(response.body.isValid).toBe(false);
    expect(response.body.errors).toContain("A senha não pode ser vazia.");
  });

  it("deve retornar 400 quando a senha contiver apenas espaços", async () => {
    const response = await request(app)
      .post(route)
      .send({ password: "   " });

    expect(response.status).toBe(400);
    expect(response.body.errors).toContain("A senha não pode ser vazia.");
  });
});
