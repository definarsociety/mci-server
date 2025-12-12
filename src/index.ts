import express from "express";
import swaggerUi from "swagger-ui-express";
import homeRoutes from "./routes/homeRoutes";
import poolRoutes from "./routes/poolRoutes";
import stakingRoutes from "./routes/stakingRoutes";
import walletRoutes from "./routes/walletRoutes";
import swaggerJsDoc from "swagger-jsdoc";
import { APP_NAME, API_VERSION } from "./constants/constants";
import path from "path";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: APP_NAME,
      version: API_VERSION,
      description: "API documentation for the Bun REST API",
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
            description: "Returns a welcome message for the Bun REST API.",
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
                          example: "Welcome to the Bun REST API!",
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

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Swagger setup
const swaggerSpec = swaggerJsDoc(swaggerOptions);
try {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger setup successful!");
} catch (err) {
  console.error("Swagger failed to load:", err);
}

// Routes
app.use("/home", homeRoutes);
app.use("/wallet", walletRoutes);
app.use("/pool", poolRoutes);
app.use("/staking", stakingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});