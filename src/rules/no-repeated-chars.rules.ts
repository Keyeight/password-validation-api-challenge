import { IPasswordRule } from "../interfaces/password-rule.interface";
import { ValidationResult } from "../types/validation-result.types";

export class NoRepeatedCharsRule implements IPasswordRule {
  validate(password: string): ValidationResult {
    const hasRepeatedChars = new Set(password).size !== password.length;

    if (hasRepeatedChars) {
      return {
        isValid: false,
        message: "A senha não deve conter caracteres repetidos.",
      };
    }
    return {
      isValid: true,
    };
  }
}
