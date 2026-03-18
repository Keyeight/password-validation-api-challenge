import { IPasswordRule } from "../interfaces/password-rule.interface";
import { ValidationResult } from "../types/validation-result.types";

export class HasSpecialCharRule implements IPasswordRule {
  validate(password: string): ValidationResult {
    const hasSpecialChar = /[!@#$%^&*()\-+]/.test(password);

    if (!hasSpecialChar) {
      return {
        isValid: false,
        message:
          "A senha deve conter pelo menos um caractere especial (!@#$%^&*()-+).",
      };
    }
    return {
      isValid: true,
    };
  }
}
