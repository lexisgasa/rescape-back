import type { NextFunction, Request, Response } from "express";
import notFoundError from "./notFoundError.js";
import { ServerError } from "../serverError";

describe("Given the middleware notFoundError", () => {
  describe("When it receives a nonexistent path", () => {
    test("Then it should call the next function with an error Endpoint not found with 404", () => {
      const _req: Partial<Request> = {};
      const _res: Partial<Response> = {};
      const next: NextFunction = jest.fn();
      const error = new ServerError("Endpoint not found", 404);

      notFoundError(_req as Request, _res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
