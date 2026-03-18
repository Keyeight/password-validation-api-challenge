import { HasMinimumLengthRule } from "../../../../src/rules/has-minimum-length.rules";

describe("HasMinimumLengthRule", () => {
  let rule: HasMinimumLengthRule;

  beforeEach(() => {
    rule = new HasMinimumLengthRule();
  });

  it("deve retornar isValid como true quando a senha tem exatamente 9 caracteres", () => {
    const password = "123456789";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("deve retornar isValid como true quando a senha tem mais de 9 caracteres", () => {
    const password = "uma-senha-bem-longa-123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("deve retornar isValid como false quando a senha tem menos de 9 caracteres (ex: 8)", () => {
    const password = "12345678";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe("A senha deve conter no mínimo 9 caracteres.");
  });

  it("deve retornar isValid como false para uma string vazia", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBeDefined();
  });

  it("deve validar corretamente senhas com espaços (contando como caracteres)", () => {
    const password = "1 2 3 4 5";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });
});
