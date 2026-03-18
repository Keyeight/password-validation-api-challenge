import { IPasswordRule } from "../interfaces/password-rule.interface";
import { ValidationResult } from "../types/validation-result.types";

export class NoEmptyRule implements IPasswordRule {
    validate(password: string): ValidationResult {
        if (password.trim() === "") {
            return {
                isValid: false,
                message: "A senha não pode ser vazia.",
            };
        }
        return {
            isValid: true,
        };
    }
}