import express from "express";
import { generalError } from "./error/generalError/generalError.js";

const app = express();

app.use((_req, res) => {
  res.status(404).json({ message: "Path not found" });
});

app.use(generalError);

export default app;
