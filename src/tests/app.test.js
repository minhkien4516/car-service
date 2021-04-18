const { expect, test } = require("jest-without-globals");
const { describe } = require("jest-without-globals");
const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/cars")
      .then((response) => {
        expect(response.statusCode).not.toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/cars/health")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/cars/")
      .then((response) => {
        expect(response.statusCode).not.toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the POST method", () => {
    return request(app)
      .post("/cars/")
      .then((response) => {
        expect(response.statusCode).not.toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/cars/:id")
      .then((response) => {
        expect(response.statusCode).not.toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/cars/journeys/:carId")
      .then((response) => {
        expect(response.statusCode).not.toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the POST method", () => {
    return request(app)
      .post("/cars/journeys")
      .then((response) => {
        expect(response.statusCode).not.toBe(200);
      });
  });
});

describe("Test the root path", () => {
  test("It should response the PATCH method", () => {
    return request(app)
      .patch("/cars/journeys/:journeyId")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
