import { HasLowercaseRule } from "../../../../src/rules/has-lowercase.rules";

describe("HasLowercaseRule", () => {
  let rule: HasLowercaseRule;

  beforeEach(() => {
    rule = new HasLowercaseRule();
  });

  it("isValid should return true when the password contains at least one lowercase letter", () => {
    const password = "Password123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("isValid should return false when the password does not contain lowercase letters", () => {
    const password = "PASSWORD123!";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(
      "A senha deve conter pelo menos uma letra minúscula.",
    );
  });

  it("isValid should return false when the password contains only numbers and special characters", () => {
    const password = "12345678!@#";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBeDefined();
  });

  it("isValid should return true when the password consists only of lowercase letters", () => {
    const password = "abcdefgh";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("isValid should return false for an empty string", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
  });
});
