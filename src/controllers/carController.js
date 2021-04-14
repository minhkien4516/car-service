const registerCar = require("../helpers/registerCar");
const registerCarRoster = require("../helpers/registerCarRoster");
const getCarById = require("../helpers/getCarById");
const getAllCars = require("../helpers/getAllCars");
const getCarByPartner = require("../helpers/getCarByPartner");
const getRosterByCar = require("../helpers/getRosterByCar");
const updateCar = require("../helpers/updateCar");
const unregisterCar = require("../helpers/unregisterCar");
const GetCarByStation = require("../helpers/getCarByStation");
const router = require("../routes");

class CarController {
  //[GET]: /cars/health
  static async getHealth(req, res) {
    res.status(200).json({ message: "Connect to Car Service successfully" });
  }
  //[GET]: /cars/:Id
  static async getCar(req, res, next) {
    const { Id } = req.params;
    const { licencePlate } = req.body;
    try {
      const car = await getCarById(Id, licencePlate);
      if (!car)
        return res.status(404).json({
          message: "ID or LicencePlate does not exist!",
        });
      return res.status(200).json({ car });
    } catch (error) {
      return next(error);
    }
  }
  //[GET]: /cars/
  static async getAllCars(req, res, next) {
    try {
      const cars = await getAllCars();
      if (!cars)
        return res.status(404).json({
          message: "Service has none of car",
        });
      return res.status(200).json({ cars });
    } catch (error) {
      return next(error);
    }
  }
  //[GET]: /cars/partner/:partners
  static async getCarByPartnerId(req, res, next) {
    const { partners } = req.params;
    try {
      const Car = await getCarByPartner(partners);
      if (!Car)
        return res.status(404).json({
          message: "partnerId is not exist",
        });
      return res.status(200).json({ Car });
    } catch (error) {
      return next(error);
    }
  }
  //[GET]: /cars/roster/:carId
  static async getRosterByCarId(req, res, next) {
    const { cars } = req.params;
    try {
      const roster = await getRosterByCar(cars);
      if (!roster)
        return res.status(404).json({
          message: "That Car does not exist. Failed to get your Roster",
        });
      return res.status(200).json({ roster });
    } catch (error) {
      return next(error);
    }
  }
  //[GET]: /cars/station/?district=...&city=...&country=...
  static async getCarByStation(req, res, next) {
    const { district } = req.query;
    const { city } = req.query;
    const { country } = req.query;
    try {
      const CAR = await GetCarByStation(district, city, country);
      if (!CAR)
        return res.status(404).json({
          message: "That Car does not exist. Failed to get your information",
        });
      return res.status(200).json({ CAR });
    } catch (error) {
      return next(error);
    }
  }

  //[POST]: /cars/
  static async registerCar(req, res, next) {
    try {
      const car = await registerCar(req.body);
      return res.status(201).json({ car });
    } catch (error) {
      return next(error);
    }
  }
  //[POST] /cars/rosters
  static async registerRoster(req, res, next) {
    try {
      await registerCarRoster(req.body);
      return res.status(201).json({
        message: "Register Roster Successfully!",
      });
    } catch (error) {
      return next(error);
    }
  }
  //[PATCH]: /cars/:Id
  static async updateCar(req, res, next) {
    const { Id } = req.params;
    try {
      await updateCar({ Id, ...req.body });
      return res.status(200).json({
        message: `Updated car successfully!`,
      });
    } catch (error) {
      return next(error);
    }
  }
  //[PATCH]: /unregister/Id
  static async unregisterCar(req, res, next) {
    const { Id } = req.params;
    try {
      await unregisterCar(Id);
      return res.status(200).json({
        message: `Unregistered car : ${Id} successfully!`,
      });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = CarController;
