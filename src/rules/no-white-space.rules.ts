import { IPasswordRule } from "../interfaces/password-rule.interface";
import { ValidationResult } from "../types/validation-result.types";

export class NoWhiteSpaceRule implements IPasswordRule {
  validate(password: string): ValidationResult {
    const hasWhiteSpace = /\s/.test(password);

    if (hasWhiteSpace) {
      return {
        isValid: false,
        message: "A senha não deve conter espaços em branco.",
      };
    }
    return {
      isValid: true,
    };
  }
}
