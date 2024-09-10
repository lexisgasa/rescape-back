import { Schema } from "mongoose";
import type { EscapeRoomStructure } from "../../types";

const escapeRoomSchema = new Schema<EscapeRoomStructure>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  alternativeText: {
    type: String,
    required: true,
  },
  smallImageUrl: {
    type: String,
    required: true,
  },
  detailImageUrl: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default escapeRoomSchema;
