import { Router } from "express";
import { PasswordController } from "../controllers/password.controllers";

const router = Router();

const passwordController = new PasswordController();

router.post("/validate", (req, res) =>
  passwordController.validatePassword(req, res),
);

export default router;

