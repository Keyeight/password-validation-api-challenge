import { NoRepeatedCharsRule } from "../../../../src/rules/no-repeated-chars.rules";

describe("NoRepeatedCharsRule", () => {
  let rule: NoRepeatedCharsRule;

  beforeEach(() => {
    rule = new NoRepeatedCharsRule();
  });

  it("It should return isValid as true when the password has no repeated characters", () => {
    const password = "abcde123!@";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("isValid should return false when the password contains repeated characters", () => {
    const password = "password";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(
      "A senha não deve conter caracteres repetidos.",
    );
  });

  it("It should be case-sensitive (treat 'A' and 'a' as different characters)", () => {
    const password = "Aa";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });

  it("isValid should return false for repeated numbers", () => {
    const password = "123345";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
  });

  it("should return isValid as true for an empty string", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });
});
