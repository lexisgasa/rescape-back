import request from "supertest";
import app from "../../app";

describe("Given the endpoint with the method GET and the path '/'", () => {
  describe("When it receives a request", () => {
    test("Then it should emit a response 'OK!' with the status code 200", async () => {
      const expectedStatusCode = 200;
      const path = "/";

      const response = await request(app).get(path).expect(expectedStatusCode);

      const responseBody = response.body as {
        status: number;
        message: string;
      };

      expect(responseBody).toHaveProperty("message", "OK!");
    });
  });
});
