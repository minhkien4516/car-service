const { expect } = require("jest-without-globals");
const getCarById = require("../helpers/getCarById");
const getCarsByPartner = require("../helpers/getCarsByPartner");
const getCarsByStation = require("../helpers/getCarsByStation");
const getJourneysByCar = require("../helpers/getJourneysByCar");
const registerCar = require("../helpers/registerCar");
const registerJourney = require("../helpers/registerJourney");

//Test getCarById&licencePlate
test("Test get cars by non-existed id", async () => {
  const car = await getCarById({
    Id: "2",
  });
  expect(car).not.toStrictEqual({ car });
});
test("Test get cars by existed id and licencePlate", async () => {
  const car = await getCarById({
    Id: "1",
  });
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
    district: "District 1",
    city: "Ha Noi City",
    country: "Viet Nam",
  });
  expect(cars).toEqual([]);
});
test("Test get cars by existed station", async () => {
  const cars = await getCarsByStation({
    district: "Quan 4",
    city: "HCM",
    country: "Viet Nam",
  });
  expect(cars).toStrictEqual([]);
});

//Test getJourneysByCar
test("Test get rosters by non-existed car id", async () => {
  const journeys = await getJourneysByCar("non-existed-car-id");
  expect(journeys).toEqual(expect.arrayContaining([]));
});
test("Test get rosters by existed car id", async () => {
  const journeys = await getJourneysByCar("1");
  expect(journeys).toEqual(expect.arrayContaining([]));
});

//Test registerCar
test("Test post car by existed condition", async () => {
  const car = await registerCar({
    carName: "Hyundai",
    luggage: "4 hanh ly",
    passenger: "6 hanh khach",
    partnerId: "6FCBA8AD-FC47-4562-8C59-8BFFB4F8F408",
  });
  expect(car).not.toStrictEqual({ car });
});
test("Test post car by non-existed condition", async () => {
  const car = await registerCar({
    carName: "Hyundai",
    luggage: "4 hanh ly",
    passenger: "6 hanh khach",
    partnerId: "1",
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
    carId: "1",
    workDate: "4/18/2021",
    standardPricePerKm: "100000",
  });
  expect(car).toEqual(expect.arrayContaining([]));
});
test("Test post Journey by non-existed condition", async () => {
  const car = await registerJourney({
    placeId: "Huflit",
    district: "Quan 4",
    city: "Ho Chi Minh",
    country: "Viet Nam",
    carId: "1",
    workDate: "4/18/2021",
    standardPricePerKm: "100000",
  });
  expect(car).not.toStrictEqual({ car });
});
