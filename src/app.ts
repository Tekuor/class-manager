import express from "express";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";
import { errorHandler } from "./error-handler/error-handler";

dotenv.config();
const app = express();
app.use(express.json()).use(cors()).use("/api/v1", routes);
app.use(errorHandler);

export default app;
