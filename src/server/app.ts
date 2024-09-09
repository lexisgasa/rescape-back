import express from "express";
import { generalError } from "./error/generalError/generalError.js";
import notFoundError from "./error/notFoundError/notFoundError.js";

const app = express();

app.use(notFoundError);

app.use(generalError);

export default app;
