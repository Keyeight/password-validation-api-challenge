import { HasDigitRule } from "../../../../src/rules/has-digit.rules";

describe("HasDigitRule", () => {
  let rule: HasDigitRule;

  beforeEach(() => {
    rule = new HasDigitRule();
  });

  it("deve retornar isValid como true quando a senha contém pelo menos um dígito", () => {
    const password = "abc1def";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("deve retornar isValid como false e a mensagem de erro quando a senha não possui dígitos", () => {
    const password = "password";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe("A senha deve conter pelo menos um dígito.");
  });

  it("deve retornar isValid como true quando a senha contém apenas dígitos", () => {
    const password = "12345";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("deve retornar isValid como false quando a string estiver vazia", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBeDefined();
  });

  it("deve retornar isValid como true quando houver caracteres especiais e dígitos", () => {
    const password = "!@#$%^&*()_1";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });
});
