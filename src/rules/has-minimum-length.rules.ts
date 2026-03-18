import { ValidationResult } from "../types/validation-result.types";
import { IPasswordRule } from "../interfaces/password-rule.interface";

export class HasMinimumLengthRule implements IPasswordRule {
  validate(password: string): ValidationResult {
    if (password.length < 9) {
      return {
        isValid: false,
        message: "A senha deve conter no mínimo 9 caracteres.",
      };
    }
    return {
      isValid: true,
    };
  }
}
