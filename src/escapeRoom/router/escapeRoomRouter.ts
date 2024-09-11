import express from "express";
import EscapeRoomController from "../controller/EscapeRoomController/EscapeRoomController.js";
import EscapeRoom from "../model/EscapeRoom.js";

const escapeRoomRouter = express.Router();

const escapeRoomController = new EscapeRoomController(EscapeRoom);

escapeRoomRouter.get("/", escapeRoomController.getEscapeRooms);

export default escapeRoomRouter;
