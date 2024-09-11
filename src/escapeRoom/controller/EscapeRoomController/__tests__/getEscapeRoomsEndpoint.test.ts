import request from "supertest";
import app from "../../../../server/app";
import { type EscapeRoomStructure } from "../../../types";
import { MongoMemoryServer } from "mongodb-memory-server";
import connectToDatabase from "../../../../database";
import EscapeRoom from "../../../model/EscapeRoom.js";
import { escapeRoomsMocks } from "../../../mocks/escapeRoomMocks.js";
import mongoose from "mongoose";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectToDatabase(server.getUri());
  await EscapeRoom.insertMany(escapeRoomsMocks);
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

describe("Given the endpoint with the method 'GET' and the path 'list'", () => {
  describe("When it receives a request", () => {
    test("Then it should call response's status method with 200 and a collection of escapeRooms", async () => {
      const path = "/list";
      const expectedStatusCode = 200;
      const escapeRoomsProperty = "escapeRooms";

      const response = await request(app).get(path).expect(expectedStatusCode);

      const responseBody = response.body as {
        escapeRooms: EscapeRoomStructure[];
      };

      expect(responseBody).toHaveProperty(escapeRoomsProperty);
    });
  });
});
