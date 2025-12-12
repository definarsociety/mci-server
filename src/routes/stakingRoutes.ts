import { Router } from "express";
import { logger } from "../middlewares/logger";

const router = Router();

router.get("/", logger, (req, res) => {
  res.json({ message: "Welcome to Staking Routes!" });
});

export default router;