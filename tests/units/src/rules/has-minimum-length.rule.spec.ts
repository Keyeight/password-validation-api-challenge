import { HasMinimumLengthRule } from "../../../../src/rules/has-minimum-length.rules";

describe("HasMinimumLengthRule", () => {
  let rule: HasMinimumLengthRule;

  beforeEach(() => {
    rule = new HasMinimumLengthRule();
  });

  it("It should return isValid as true when the password has exactly 9 characters", () => {
    const password = "123456789";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("It should return isValid as true when the password has more than 9 characters", () => {
    const password = "uma-senha-bem-longa-123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("isValid should return false when the password has fewer than 9 characters", () => {
    const password = "12345678";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe("A senha deve conter no mínimo 9 caracteres.");
  });

  it("isValid should return false for an empty string", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBeDefined();
  });

  it("It must correctly validate passwords with spaces (counting them as characters)", () => {
    const password = "1 2 3 4 5";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });
});
