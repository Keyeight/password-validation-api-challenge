import { NoWhiteSpaceRule } from "../../../../src/rules/no-white-space.rules";

describe("NoWhiteSpaceRule", () => {
  let rule: NoWhiteSpaceRule;

  beforeEach(() => {
    rule = new NoWhiteSpaceRule();
  });

  it("deve retornar isValid como true quando a senha não contém espaços", () => {
    const password = "SenhaSemEspacos123!";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("deve retornar isValid como false quando a senha contém espaços no meio", () => {
    const password = "senha com espaço";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe("A senha não deve conter espaços em branco.");
  });

  it("deve retornar isValid como false quando a senha contém espaços no início ou fim", () => {
    const password = " senha";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
  });

  it("deve retornar isValid como false para outros tipos de caracteres em branco (tab, newline)", () => {
    const passwordTab = "senha\tcomtab";
    const passwordNewline = "senha\ncomquebra";

    expect(rule.validate(passwordTab).isValid).toBe(false);
    expect(rule.validate(passwordNewline).isValid).toBe(false);
  });

  it("deve retornar isValid como true para uma string vazia", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });
});
