import { type Model } from "mongoose";
import { type EscapeRoomControllerStructure } from "../types";
import { type EscapeRoomStructure } from "../../types";
import type { Request, Response } from "express";

class EscapeRoomController implements EscapeRoomControllerStructure {
  constructor(private readonly escapeRoomModel: Model<EscapeRoomStructure>) {}

  getEscapeRooms = async (_req: Request, res: Response): Promise<void> => {
    const escapeRooms = await this.escapeRoomModel.find().exec();

    res.status(200).json({ escapeRooms });
  };

  postEscapeRoom = async (req: Request, res: Response): Promise<void> => {
    const escapeRoom = await this.escapeRoomModel.create(req.body);

    res.status(201).json({ escapeRoom });
  };
}

export default EscapeRoomController;
