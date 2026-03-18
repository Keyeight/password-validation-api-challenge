import { HasDigitRule } from "../../../../src/rules/has-digit.rules";

describe("HasDigitRule", () => {
  let rule: HasDigitRule;

  beforeEach(() => {
    rule = new HasDigitRule();
  });

  it("It should return isValid as true when the password contains at least one digit", () => {
    const password = "abc1def";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("It should return isValid as false and display an error message when the password does not contain digits", () => {
    const password = "password";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe("A senha deve conter pelo menos um dígito.");
  });

  it("It should return isValid as true when the password contains only digits", () => {
    const password = "12345";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("isValid should return false when the string is empty", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBeDefined();
  });

  it("isValid should return true when there are special characters and digits", () => {
    const password = "!@#$%^&*()_1";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });
});
