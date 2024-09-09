import request from "supertest";
import app from "../../app";

describe("Given the endpoint with the method 'GET'and the path '/escapesito'", () => {
  describe("When it receives a request", () => {
    test("Then it should emit a response with the error Endpoint not found 404", async () => {
      const response = await request(app).get("/escapesito").expect(404);

      const responseBody = response.body as {
        message: string;
      };

      expect(responseBody).toHaveProperty("message", "Endpoint not found");
    });
  });
});
