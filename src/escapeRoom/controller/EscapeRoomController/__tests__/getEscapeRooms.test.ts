import { type Model } from "mongoose";
import EscapeRoomController from "../EscapeRoomController.js";
import { type EscapeRoomStructure } from "../../../types";
import { type NextFunction, type Request, type Response } from "express";
import { escapeRooms } from "../../../mocks/escapeRoomMocks";

describe("Given the getEscapeRooms method from the escapeRoomController class", () => {
  describe("When it receives a request", () => {
    test("Then it should call response's status method with 200 and 2 escape rooms which title are 'Profana', 'Awaken'", async () => {
      const escapeRoomModelMock: Partial<Model<EscapeRoomStructure>> = {
        find: jest.fn().mockReturnValue({
          exec: jest.fn().mockResolvedValue(escapeRooms),
        }),
      };

      const escapeRoomController = new EscapeRoomController(
        escapeRoomModelMock as Model<EscapeRoomStructure>,
      );
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      const next: NextFunction = jest.fn();

      await escapeRoomController.getEscapeRooms(
        req as Request,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ escapeRooms }),
      );
    });
  });
});
