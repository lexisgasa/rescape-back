import type { ServerErrorStructure } from "./types";

export class ServerError extends Error implements ServerErrorStructure {
  constructor(
    message: string,
    public statusCode: number,
  ) {
    super(message);
  }
}
