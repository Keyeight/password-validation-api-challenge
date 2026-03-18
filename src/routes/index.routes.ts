import { Router } from "express";
import passwordRouter from "./password.routes";

const router = Router();

router.use("/password", passwordRouter);

export default router;