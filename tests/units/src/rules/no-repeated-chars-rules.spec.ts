import { NoRepeatedCharsRule } from "../../../../src/rules/no-repeated-chars.rules";

describe("NoRepeatedCharsRule", () => {
  let rule: NoRepeatedCharsRule;

  beforeEach(() => {
    rule = new NoRepeatedCharsRule();
  });

  it("deve retornar isValid como true quando a senha não tem caracteres repetidos", () => {
    const password = "abcde123!@";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("deve retornar isValid como false quando a senha contém caracteres repetidos", () => {
    const password = "password";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(
      "A senha não deve conter caracteres repetidos.",
    );
  });

  it("deve ser case-sensitive (tratar 'A' e 'a' como caracteres diferentes)", () => {
    const password = "Aa";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("deve retornar isValid como false para números repetidos", () => {
    const password = "123345";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
  });

  it("deve retornar isValid como true para uma string vazia", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });
});
