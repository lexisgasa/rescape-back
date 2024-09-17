import { type Request, type Response } from "express";

export interface EscapeRoomControllerStructure {
  getEscapeRooms: (req: Request, res: Response) => Promise<void>;
  postEscapeRoom: (req: Request, res: Response) => Promise<void>;
}
