import { ValidationResult } from "../types/validation-result.types";
import { IPasswordRule } from "../interfaces/password-rule.interface";

export class HasLowercaseRule implements IPasswordRule {
  validate(password: string): ValidationResult {
    const hasLowercase = /[a-z]/.test(password);

    if (!hasLowercase) {
      return {
        isValid: false,
        message: "A senha deve conter pelo menos uma letra minúscula.",
      };
    }
    return {
      isValid: true,
    };
  }
}
