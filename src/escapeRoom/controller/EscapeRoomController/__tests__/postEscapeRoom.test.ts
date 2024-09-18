import { type Request, type Response } from "express";
import EscapeRoomController from "../EscapeRoomController";
import { type Model } from "mongoose";
import { type EscapeRoomStructure } from "../../../types";

describe("Given the postEscapeRooms method from the escapeRoomController class", () => {
  describe("When it receives a request that contains the name 'Insomnia'", () => {
    test("Then it should call response's status method with 201", async () => {
      const escapeRoomModelMock: Partial<Model<EscapeRoomStructure>> = {
        create: jest.fn().mockReturnValue({ name: "Insomnia" }),
      };
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      const escapeRoomController = new EscapeRoomController(
        escapeRoomModelMock as Model<EscapeRoomStructure>,
      );

      await escapeRoomController.postEscapeRoom(
        req as Request,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  test("Then it should call response's json method with the name 'Insomnia'", async () => {
    const escapeRoomModelMock: Partial<Model<EscapeRoomStructure>> = {
      create: jest.fn().mockReturnValue({ name: "Insomnia" }),
    };
    const req: Partial<Request> = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    const escapeRoomController = new EscapeRoomController(
      escapeRoomModelMock as Model<EscapeRoomStructure>,
    );

    await escapeRoomController.postEscapeRoom(req as Request, res as Response);

    expect(res.json).toHaveBeenCalledWith({ escapeRoom: { name: "Insomnia" } });
  });
});
