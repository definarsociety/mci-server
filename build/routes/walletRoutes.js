"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = require("../middlewares/logger");
const router = (0, express_1.Router)();
router.get("/", logger_1.logger, (req, res) => {
    res.json({ message: "Welcome to Wallet Routes!" });
});
exports.default = router;
