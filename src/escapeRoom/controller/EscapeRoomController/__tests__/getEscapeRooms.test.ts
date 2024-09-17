import { type Model } from "mongoose";
import EscapeRoomController from "../EscapeRoomController.js";
import { type EscapeRoomStructure } from "../../../types";
import { type Request, type Response } from "express";
import { escapeRoomsMocks } from "../../../mocks/escapeRoomMocks";

describe("Given the getEscapeRooms method from the escapeRoomController class", () => {
  describe("When it receives a request", () => {
    test("Then it should call response's status method with 200 and json method with an array of two escape rooms", async () => {
      const escapeRoomModelMock: Partial<Model<EscapeRoomStructure>> = {
        find: jest.fn().mockReturnValue({
          exec: jest.fn().mockResolvedValue(escapeRoomsMocks),
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

      await escapeRoomController.getEscapeRooms(
        req as Request,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ escapeRooms: escapeRoomsMocks }),
      );
    });
  });
});
