import { PasswordValidatorService } from "../../../../src/services/password-validator.service";
import { IPasswordRule } from "../../../../src/interfaces/password-rule.interface";

describe("PasswordValidatorService", () => {
  const mockRulePass: IPasswordRule = {
    validate: jest.fn().mockReturnValue({ isValid: true }),
  };

  const mockRuleFail: IPasswordRule = {
    validate: jest.fn().mockReturnValue({
      isValid: false,
      message: "Erro da regra falha",
    }),
  };

  it("deve retornar isValid true se todas as regras passarem", () => {
    const service = new PasswordValidatorService([mockRulePass, mockRulePass]);

    const result = service.validate("qualquer_senha");

    expect(result.isValid).toBe(true);
    expect(result.errors).toBeUndefined();
    expect(mockRulePass.validate).toHaveBeenCalledTimes(2);
  });

  it("deve retornar isValid false e a lista de erros se alguma regra falhar", () => {
    const service = new PasswordValidatorService([mockRulePass, mockRuleFail]);

    const result = service.validate("senha_invalida");

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Erro da regra falha");
    expect(result.errors).toHaveLength(1);
  });

  it("deve acumular múltiplos erros de diferentes regras", () => {
    const ruleFail1: IPasswordRule = {
      validate: () => ({ isValid: false, message: "Erro 1" }),
    };
    const ruleFail2: IPasswordRule = {
      validate: () => ({ isValid: false, message: "Erro 2" }),
    };

    const service = new PasswordValidatorService([ruleFail1, ruleFail2]);

    const result = service.validate("senha");

    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual(["Erro 1", "Erro 2"]);
  });

  it("deve retornar isValid true se a lista de regras estiver vazia", () => {
    const service = new PasswordValidatorService([]);

    const result = service.validate("123");

    expect(result.isValid).toBe(true);
  });
});
