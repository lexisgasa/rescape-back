import express from "express";
import morgan from "morgan";
import { generalError } from "./error/generalError/generalError.js";
import notFoundError from "./error/notFoundError/notFoundError.js";
import healthCheck from "./healthCheck/healthCheck.js";
import EscapeRoomController from "../escapeRoom/controller/EscapeRoomController/escapeRoomController.js";
import EscapeRoom from "../escapeRoom/model/EscapeRoom.js";

const escapeRoomController = new EscapeRoomController(EscapeRoom);

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));

app.get("/", healthCheck);

app.get("/listado", escapeRoomController.getEscapeRooms);

app.use(notFoundError);

app.use(generalError);

export default app;
