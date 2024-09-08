import express from "express";
import { generalError } from "./error/generalError/generalError.js";

const app = express();

app.use(generalError);

export default app;
