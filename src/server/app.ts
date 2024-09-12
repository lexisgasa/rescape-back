import express from "express";
import morgan from "morgan";
import cors from "cors";
import { generalError } from "./error/generalError/generalError.js";
import notFoundError from "./error/notFoundError/notFoundError.js";
import healthCheck from "./healthCheck/healthCheck.js";
import escapeRoomRouter from "../escapeRoom/router/escapeRoomRouter.js";

const app = express();
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://alexis-garcia-202406-front.netlify.app",
  ],
};

app.use(cors(corsOptions));
app.disable("x-powered-by");
app.use(morgan("dev"));

app.get("/", healthCheck);
app.use("/list", escapeRoomRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
