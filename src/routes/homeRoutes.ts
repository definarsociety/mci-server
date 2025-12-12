import { Router } from "express";
import { logger } from "../middlewares/logger";
const router = Router();

router.get("/", logger, (req, res) => {
  res.json({ message: "Welcome to the REST API!" });
});

export default router;