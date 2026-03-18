import { NoWhiteSpaceRule } from "../../../../src/rules/no-white-space.rules";

describe("NoWhiteSpaceRule", () => {
  let rule: NoWhiteSpaceRule;

  beforeEach(() => {
    rule = new NoWhiteSpaceRule();
  });

  it("It should return isValid as true when the password does not contain spaces", () => {
    const password = "SenhaSemEspacos123!";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("isValid should return false when the password contains spaces in the middle", () => {
    const password = "senha com espaço";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe("A senha não deve conter espaços em branco.");
  });

  it("isValid should return false when the password contains spaces at the beginning or end", () => {
    const password = " senha";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
  });

  it("isValid should return false for other types of whitespace characters (tab, newline)", () => {
    const passwordTab = "senha\tcomtab";
    const passwordNewline = "senha\ncomquebra";

    expect(rule.validate(passwordTab).isValid).toBe(false);
    expect(rule.validate(passwordNewline).isValid).toBe(false);
  });

  it("should return isValid as true for an empty string", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });
});
