import { NoEmptyRule } from "../../../../src/rules/no-empty.rules";

describe("NoEmptyRule", () => {
  let rule: NoEmptyRule;

  beforeEach(() => {
    rule = new NoEmptyRule();
  });

  it("It should return isValid as true when the password is not empty", () => {
    const password = "password123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("isValid should return false when the password is an empty string", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe("A senha não pode ser vazia.");
  });

  it("isValid should return false when the password contains only spaces", () => {
    const password = "     ";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe("A senha não pode ser vazia.");
  });

  it("It should return isValid as true when the password contains spaces but also characters", () => {
    const password = "  senha123  ";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });
});
