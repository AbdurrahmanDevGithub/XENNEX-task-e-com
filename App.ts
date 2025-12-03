import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/DbConnection";
import router from "./routes/index.route";
import { swaggerUiServe, swaggerUiSetup } from "./swagger/Swagger";

dotenv.config();
const app = express();

app.use(express.json());

// Swagger docs
app.use("/api-docs", swaggerUiServe, swaggerUiSetup);

// Main API routes
app.use("/api", router);

connectDb();

app.listen(process.env.PORT, () => {
  console.log(`Server runs on port ${process.env.PORT}`);
});
