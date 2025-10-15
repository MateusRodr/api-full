import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0",
            description: "API documentation for the Task management system",
        },
        servers: [
            {
                url: "http://localhost:3012"
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};

const specs = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}