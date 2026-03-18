import { IPasswordRule } from "../interfaces/password-rule.interface";
import { ValidationResult } from "../types/validation-result.types";

export class HasUppercaseRule implements IPasswordRule {
  validate(password: string): ValidationResult {
    const hasUppercase = /[A-Z]/.test(password);

    if (!hasUppercase) {
      return {
        isValid: false,
        message: "A senha deve conter pelo menos uma letra maiúscula.",
      };
    }
    return {
      isValid: true,
    };
  }
}
