import { type NextFunction, type Request, type Response } from "express";

export interface EscapeRoomControllerStructure {
  getEscapeRooms: (_req: Request, res: Response) => Promise<void>;
}
