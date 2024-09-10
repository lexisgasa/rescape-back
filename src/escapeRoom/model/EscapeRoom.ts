import mongoose from "mongoose";
import escapeRoomSchema from "./schema/escapeRoomSchema";

const EscapeRoom = mongoose.model(
  "EscapeRoom",
  escapeRoomSchema,
  "escape-rooms",
);

export default EscapeRoom;
