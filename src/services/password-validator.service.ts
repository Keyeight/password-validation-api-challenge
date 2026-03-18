import { IPasswordRule } from "../interfaces/password-rule.interface";
import { ValidationResult } from "../types/validation-result.types";

export class PasswordValidatorService {
  constructor(private rules: IPasswordRule[]) {}
  validate(password: string): ValidationResult {
    const errors: string[] = [];

    for (const rule of this.rules) {
      const result = rule.validate(password);

      if (!result.isValid && result.message) {
        errors.push(result.message);
      }
    }

    if (errors.length > 0) {
      return {
        isValid: false,
        errors,
      };
    }

    return { isValid: true };
  }
}
