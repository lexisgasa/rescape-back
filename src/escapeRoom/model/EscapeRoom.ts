import mongoose from "mongoose";
import escapeRoomSchema from "./schema/escapeRoomSchema.js";

const EscapeRoom = mongoose.model(
  "EscapeRoom",
  escapeRoomSchema,
  "escape-rooms",
);

export default EscapeRoom;
