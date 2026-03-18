import { HasSpecialCharRule } from "../../../../src/rules/has-special-char.rules";

describe("HasSpecialCharRule", () => {
  let rule: HasSpecialCharRule;

  beforeEach(() => {
    rule = new HasSpecialCharRule();
  });

  it("deve retornar isValid como true quando a senha contém um caractere especial da lista", () => {
    const specialChars = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "+",
    ];

    specialChars.forEach((char) => {
      const result = rule.validate(`senha${char}`);
      expect(result.isValid).toBe(true);
    });
  });

  it("deve retornar isValid como false quando a senha não possui caracteres especiais", () => {
    const password = "Password123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(
      "A senha deve conter pelo menos um caractere especial (!@#$%^&*()-+).",
    );
  });

  it("deve retornar isValid como false para uma string vazia", () => {
    const result = rule.validate("");
    expect(result.isValid).toBe(false);
  });

  it("deve retornar isValid como false para caracteres que NÃO estão na sua lista (ex: acentos ou espaços)", () => {
    const result = rule.validate("senha com espaço");
    const result2 = rule.validate("senhaÁrea");

    expect(result.isValid).toBe(false);
    expect(result2.isValid).toBe(false);
  });

  it("deve retornar isValid como true para uma senha composta apenas por caracteres especiais", () => {
    const result = rule.validate("!@#$");
    expect(result.isValid).toBe(true);
  });
});
