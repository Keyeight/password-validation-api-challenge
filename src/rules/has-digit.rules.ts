import { ValidationResult } from "../types/validation-result.types";
import { IPasswordRule } from "../interfaces/password-rule.interface";

export class HasDigitRule implements IPasswordRule {
  validate(password: string): ValidationResult {
    const hasDigit = /\d/.test(password);

    if (!hasDigit) {
      return {
        isValid: false,
        message: "A senha deve conter pelo menos um dígito.",
      };
    }
    return {
      isValid: true,
    };
  }
}