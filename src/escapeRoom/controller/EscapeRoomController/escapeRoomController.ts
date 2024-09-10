import { type Model } from "mongoose";
import { type EscapeRoomControllerStructure } from "../types";
import { type EscapeRoomStructure } from "../../types";
import type { Request, Response, NextFunction } from "express";

class EscapeRoomController implements EscapeRoomControllerStructure {
  constructor(private readonly escapeRoomModel: Model<EscapeRoomStructure>) {}

  getEscapeRooms = async (
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<void> => {
    const escapeRooms = await this.escapeRoomModel.find().exec();

    res.status(200).json({ escapeRooms });
  };
}

export default EscapeRoomController;
