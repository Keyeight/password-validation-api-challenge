import { HasLowercaseRule } from "../../../../src/rules/has-lowercase.rules";

describe("HasLowercaseRule", () => {
  let rule: HasLowercaseRule;

  beforeEach(() => {
    rule = new HasLowercaseRule();
  });

  it("deve retornar isValid como true quando a senha contém pelo menos uma letra minúscula", () => {
    const password = "Password123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("deve retornar isValid como false quando a senha não possui letras minúsculas", () => {
    const password = "PASSWORD123!";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(
      "A senha deve conter pelo menos uma letra minúscula.",
    );
  });

  it("deve retornar isValid como false quando a senha contém apenas números e caracteres especiais", () => {
    const password = "12345678!@#";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBeDefined();
  });

  it("deve retornar isValid como true quando a senha é composta apenas por letras minúsculas", () => {
    const password = "abcdefgh";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("deve retornar isValid como false para uma string vazia", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
  });
});
