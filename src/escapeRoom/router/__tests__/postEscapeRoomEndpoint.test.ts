import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import connectToDatabase from "../../../database";
import { type EscapeRoomStructure } from "../../types";
import app from "../../../server/app";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectToDatabase(server.getUri());
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await server.stop();
});

describe("Given the endpoint with the method 'POST' and the path 'escaperooms'", () => {
  describe("When it receives a request that contains a new escape room with the name 'Cronologic'", () => {
    test("Then it should call response's status method with 201 and the created escape room", async () => {
      const path = "/escaperooms";
      const expectedStatusCode = 201;
      const escapeRoom: Omit<EscapeRoomStructure, "id"> = {
        name: "Cronologic",
        alternativeText: "Imagen de la portada del escaperoom cronologic",
        smallImageUrl: "small.image.webp",
        detailImageUrl: "detail.image.webp",
        location: "Bcn",
        rating: 5,
        date: new Date(),
        content: "Escape room cronologic, ahora con datos",
      };
      const expectedResponseBodyProperty = "escapeRoom";
      const expectedResponseBodyPropertyName = "Cronologic";

      const response = await request(app)
        .post(path)
        .send(escapeRoom)
        .expect(expectedStatusCode);

      const responseBody = response.body as {
        escapeRoom: EscapeRoomStructure;
      };

      expect(responseBody).toHaveProperty(expectedResponseBodyProperty);
      expect(responseBody.escapeRoom.name).toBe(
        expectedResponseBodyPropertyName,
      );
    });
  });
});
