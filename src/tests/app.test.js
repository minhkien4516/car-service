const { response } = require("express");
const { expect, test, afterEach } = require("jest-without-globals");
/* eslint-disable implicit-arrow-linebreak */
const { describe, it } = require("jest-without-globals");
const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
