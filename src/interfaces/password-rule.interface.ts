import { ValidationResult } from "../types/validation-result.types";

export interface IPasswordRule {
    validate(password: string): ValidationResult;
}
