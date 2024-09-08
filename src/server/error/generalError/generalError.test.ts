import { type NextFunction, type Request, type Response } from "express";
import { generalError } from "./generalError";
import { ServerError } from "../serverError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the middleware generalError", () => {
  describe("When it receives a request", () => {
    const req: Partial<Request> = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next: NextFunction = jest.fn();
    const error = new ServerError("Path not found", 404);

    test("Then it should return response's status method with a status code of 404", () => {
      const expectedStatusCode = 404;

      generalError(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should return response's json method with the value 'Path not found'", () => {
      const expectedErrorMessage = { message: "Path not found" };

      generalError(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
