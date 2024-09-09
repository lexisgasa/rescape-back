import express from "express";
import { generalError } from "./error/generalError/generalError.js";
import notFoundEndpoint from "./error/notFoundEndpoint/notFoundEndpoint.js";

const app = express();

app.use(notFoundEndpoint);

app.use(generalError);

export default app;
