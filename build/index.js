"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const homeRoutes_1 = __importDefault(require("./routes/homeRoutes"));
const poolRoutes_1 = __importDefault(require("./routes/poolRoutes"));
const stakingRoutes_1 = __importDefault(require("./routes/stakingRoutes"));
const walletRoutes_1 = __importDefault(require("./routes/walletRoutes"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const constants_1 = require("./constants/constants");
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: constants_1.APP_NAME,
            version: constants_1.API_VERSION,
            description: "API documentation for the REST API",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local server",
            },
        ],
        paths: {
            "/home": {
                get: {
                    summary: "Welcome message",
                    description: "Returns a welcome message for the REST API.",
                    responses: {
                        200: {
                            description: "A JSON object containing the welcome message.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                                example: "Welcome to the REST API!",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "/pool": {
                get: {
                    summary: "pool information",
                    description: "Returns pool details.",
                    responses: {
                        200: {
                            description: "A JSON object containing pool data.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "string",
                                            },
                                            balance: {
                                                type: "number",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "/staking": {
                get: {
                    summary: "Staking information",
                    description: "Returns staking details.",
                    responses: {
                        200: {
                            description: "A JSON object containing staking data.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "string",
                                            },
                                            balance: {
                                                type: "number",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "/wallet": {
                get: {
                    summary: "Wallet information",
                    description: "Returns wallet details.",
                    responses: {
                        200: {
                            description: "A JSON object containing wallet data.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "string",
                                            },
                                            balance: {
                                                type: "number",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    apis: ["dist/index.js"], // Change this path if needed
};
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use(express_1.default.json());
// Swagger setup
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
try {
    app.use("/", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    console.log("Swagger setup successful!");
}
catch (err) {
    console.error("Swagger failed to load:", err);
}
// Routes
app.use("/home", homeRoutes_1.default);
app.use("/wallet", walletRoutes_1.default);
app.use("/pool", poolRoutes_1.default);
app.use("/staking", stakingRoutes_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
