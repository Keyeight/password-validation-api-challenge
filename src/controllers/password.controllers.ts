import { Request, Response } from "express";
import { HasMinimumLengthRule } from "../rules/has-minimum-length.rules";
import { HasUppercaseRule } from "../rules/has-uppercase.rules";
import { HasLowercaseRule } from "../rules/has-lowercase.rules";
import { HasDigitRule } from "../rules/has-digit.rules";
import { HasSpecialCharRule } from "../rules/has-special-char.rules";
import { NoRepeatedCharsRule } from "../rules/no-repeated-chars.rules";
import { PasswordValidatorService } from "../services/password-validator.service";
import { NoWhiteSpaceRule } from "../rules/no-white-space.rules";
import { NoEmptyRule } from "../rules/no-empty.rules";

export class PasswordController {
  public validatePassword(req: Request, res: Response) {
    const { password } = req.body;

    if (typeof password !== "string") {
      return res.status(400).json({
        isValid: false,
        errors: ["A senha é obrigatória e deve ser uma string."],
      });
    }
    
    const rules = [
      new HasMinimumLengthRule(),
      new HasUppercaseRule(),
      new HasLowercaseRule(),
      new HasDigitRule(),
      new HasSpecialCharRule(),
      new NoRepeatedCharsRule(),
      new NoWhiteSpaceRule(),
      new NoEmptyRule(),
    ];

    const service = new PasswordValidatorService(rules);

    const result = service.validate(password);

    if (!result.isValid) {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }
}
