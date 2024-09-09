import type { NextFunction, Request, Response } from "express";
import notFoundEndpoint from "./notFoundEndpoint";
import { ServerError } from "../serverError";

describe("Given the middleware notFoundEndpoint", () => {
  describe("When it receives a nonexistent path", () => {
    test("Then it should call the next function with an error Endpoint not found with 404", () => {
      const _req: Partial<Request> = {};
      const _res: Partial<Response> = {};
      const next: NextFunction = jest.fn();
      const error = new ServerError("Endpoint not found", 404);

      notFoundEndpoint(_req as Request, _res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
