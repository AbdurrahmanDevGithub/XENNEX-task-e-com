import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
  openapi: "3.0.0",
  info: {
    title: "E Commerce Backend API",
    version: "1.0.0",
    description: "API documentation for the E Commerce backend",
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: []
    }
  ],
  tags: [
    { name: "Accounts", description: "User Account APIs" },
    { name: "Categories", description: "Category Management" },
    { name: "Products", description: "Product Management" }
  ],
},

  apis: ["./routes/*.ts"],
};

export const swaggerSpec = swaggerJsDoc(options);
export const swaggerUiServe = swaggerUi.serve;
export const swaggerUiSetup = swaggerUi.setup(swaggerSpec);
