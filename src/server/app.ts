import express from "express";
import morgan from "morgan";
import { generalError } from "./error/generalError/generalError.js";
import notFoundError from "./error/notFoundError/notFoundError.js";
import healthCheck from "./healthCheck/healthCheck.js";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));

app.get("/", healthCheck);

app.use(notFoundError);

app.use(generalError);

export default app;
