import { HasSpecialCharRule } from "../../../../src/rules/has-special-char.rules";

describe("HasSpecialCharRule", () => {
  let rule: HasSpecialCharRule;

  beforeEach(() => {
    rule = new HasSpecialCharRule();
  });

  it("It should return isValid as true when the password contains a special character from the list", () => {
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

  it("isValid should return false when the password does not contain special characters", () => {
    const password = "Password123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(
      "A senha deve conter pelo menos um caractere especial (!@#$%^&*()-+).",
    );
  });

  it("isValid should return false for an empty string", () => {
    const result = rule.validate("");
    expect(result.isValid).toBe(false);
  });

  it("It should return isValid as false for characters that are NOT in your list", () => {
    const result = rule.validate("senha com espaço");
    const result2 = rule.validate("senhaÁrea");

    expect(result.isValid).toBe(false);
    expect(result2.isValid).toBe(false);
  });

  it("should return isValid as true for a password composed only of special characters", () => {
    const result = rule.validate("!@#$");
    expect(result.isValid).toBe(true);
  });
});
