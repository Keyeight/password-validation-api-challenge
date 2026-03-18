import { HasUppercaseRule } from "../../../../src/rules/has-uppercase.rules";

describe("HasUppercaseRule", () => {
  let rule: HasUppercaseRule;

  beforeEach(() => {
    rule = new HasUppercaseRule();
  });

  it("isValid should return true when the password contains at least one uppercase letter", () => {
    const password = "pAssword123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("isValid should return false when the password contains only lowercase letters", () => {
    const password = "password123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(
      "A senha deve conter pelo menos uma letra maiúscula.",
    );
  });

  it("isValid should return true when the password consists only of uppercase letters", () => {
    const password = "PASSWORD";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("isValid should return false when the password contains only numbers and special characters", () => {
    const password = "12345678!@#";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBeDefined();
  });

  it("isValid should return false for an empty string", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
  });
});
