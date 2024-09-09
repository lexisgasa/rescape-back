import type { NextFunction, Request, Response } from "express";
import { ServerError } from "../serverError.js";

const notFoundEndpoint = (
  _req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const error = new ServerError("Endpoint not found", 404);

  next(error);
};

export default notFoundEndpoint;
