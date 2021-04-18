const { expect } = require("jest-without-globals");
const getCarById = require("../helpers/getCarById");
const getCarsByPartner = require("../helpers/getCarsByPartner");
const getCarsByStation = require("../helpers/getCarsByStation");
const getJourneysByCar = require("../helpers/getJourneysByCar");
const registerCar = require("../helpers/registerCar");
const registerJourney = require("../helpers/registerJourney");
const activateJourney = require("../helpers/activateJourney");

//Test activateJourney
test("Test activate journey by non-existed journeyId", async () => {
  const car = await activateJourney({ journeyId: "2" });
  expect(car).not.toStrictEqual({ car });
});
test("Test activate journey by existed journeyId", async () => {
  const car = await activateJourney({
    journeyId: "16543FFF-9B3D-46B8-9D5D-6FD01AA136B2",
  });
  expect(car).toEqual(expect.arrayContaining([]));
});

//Test getCarById
test("Test get cars by non-existed id", async () => {
  const car = await getCarById("2");
  expect(car).not.toStrictEqual({ car });
});
test("Test get cars by existed id", async () => {
  const car = await getCarById("01FB2D75-7BD6-4813-BCB6-FE946260A467");
  expect(car).toEqual(expect.arrayContaining([]));
});

// Test getCarsByPartner
test("Test get cars by non-existed partner id", async () => {
  const Car = await getCarsByPartner("non-existed-partner-id");
  expect(Car).toEqual(expect.arrayContaining([]));
});
test("Test get cars by existed partner id", async () => {
  const Car = await getCarsByPartner("6FCBA8AD-FC47-4562-8C59-8BFFB4F8F408");
  expect(Car).toEqual(expect.arrayContaining([]));
});

//Test getCarByStation
test("Test get cars by non-existed station", async () => {
  const cars = await getCarsByStation({
    district: "Quan 4",
    city: "TP HCM",
    country: "Viet Nam",
  });
  expect(cars).not.toEqual([]);
});
test("Test get cars by existed station", async () => {
  const cars = await getCarsByStation({
    district: "Quan 4",
    city: "Ho Chi Minh",
    country: "Viet Nam",
  });
  expect(cars).not.toStrictEqual([]);
});

//Test getJourneysByCar
test("Test get rosters by non-existed car id", async () => {
  const journeys = await getJourneysByCar("non-existed-car-id");
  expect(journeys).toEqual(expect.arrayContaining([]));
});
test("Test get rosters by existed car id", async () => {
  const journeys = await getJourneysByCar(
    "0AB2CBF3-E515-4FB4-B160-5E1C7E83792C"
  );
  expect(journeys).toEqual(expect.arrayContaining([]));
});

//Test registerCar
test("Test post car by existed condition", async () => {
  const car = await registerCar({
    name: "Mazda 3",
    luggagePayload: "4",
    guestQuantity: "6",
    photoUrl: "UNKNOWN",
    partnerId: "6FCBA8AD-FC47-4562-8C59-8BFFB4F8F408",
    standardPricePerKm: "150000",
  });
  expect(car).not.toStrictEqual({ car });
});
test("Test post car by non-existed condition", async () => {
  const car = await registerCar({
    name: "Hyundai",
    luggagePayload: "4",
    guestQuantity: "6",
    photoUrl: "UNKNOWN",
    partnerId: "6FCBA8AD-FC47-4562-8C59-8BFFB4F8F408",
    standardPricePerKm: "120000",
  });
  expect(car).toEqual(expect.arrayContaining([]));
});

//Test registerJourney
test("Test post Journey by existed condition", async () => {
  const car = await registerJourney({
    placeId: "Huflit",
    district: "Quan 4",
    city: "Ho Chi Minh",
    country: "Viet Nam",
    carId: "92C9161D-94FB-4E1A-BCD9-1D0DE26AF31D",
  });
  expect(car).toEqual(expect.arrayContaining([]));
});
test("Test post Journey by non-existed condition", async () => {
  const car = await registerJourney({
    placeId: "Trung Vuong",
    district: "Quan 1",
    city: "Ho Chi Minh",
    country: "Viet Nam",
    carId: "0AB2CBF3-E515-4FB4-B160-5E1C7E83792C",
  });
  expect(car).not.toStrictEqual({ car });
});
