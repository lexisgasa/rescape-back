import type { Request, Response } from "express";
import healthCheck from "./healthCheck";

describe("Given the middleware healthCheck", () => {
  describe("When it receives a request", () => {
    const _req = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call response's status method with 200", () => {
      healthCheck(_req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call response's json method with the message 'OK!'", () => {
      healthCheck(_req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ message: "OK!" });
    });
  });
});
