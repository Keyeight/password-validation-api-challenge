import { NoEmptyRule } from "../../../../src/rules/no-empty.rules";

describe("NoEmptyRule", () => {
  let rule: NoEmptyRule;

  beforeEach(() => {
    rule = new NoEmptyRule();
  });

  it("deve retornar isValid como true quando a senha não está vazia", () => {
    const password = "password123";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("deve retornar isValid como false quando a senha é uma string vazia", () => {
    const password = "";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe("A senha não pode ser vazia.");
  });

  it("deve retornar isValid como false quando a senha contém apenas espaços (devido ao trim)", () => {
    const password = "     ";

    const result = rule.validate(password);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe("A senha não pode ser vazia.");
  });

  it("deve retornar isValid como true quando a senha tem espaços mas também caracteres", () => {
    const password = "  senha123  ";

    const result = rule.validate(password);

    expect(result.isValid).toBe(true);
  });
});
