import { HasUppercaseRule } from "../../../../src/rules/has-uppercase.rules";

describe("HasUppercaseRule", () => {
  let rule: HasUppercaseRule;

  beforeEach(() => {
    rule = new HasUppercaseRule();
  });

  it("deve retornar isValid como true quando a senha contém pelo menos uma letra maiúscula", () => {
    const password = "pAssword123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("deve retornar isValid como false quando a senha possui apenas letras minúsculas", () => {
    const password = "password123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(
      "A senha deve conter pelo menos uma letra maiúscula.",
    );
  });

  it("deve retornar isValid como true quando a senha é composta apenas por letras maiúsculas", () => {
    const password = "PASSWORD";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("deve retornar isValid como false quando a senha contém apenas números e caracteres especiais", () => {
    const password = "12345678!@#";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBeDefined();
  });

  it("deve retornar isValid como false para uma string vazia", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
  });
});
