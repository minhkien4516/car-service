const registerCar = require("../helpers/registerCar");
const getCarById = require("../helpers/getCarById");
const getCarsByPartner = require("../helpers/getCarsByPartner");
const GetCarsByStation = require("../helpers/getCarsByStation");

class CarController {
  //[GET]: /cars/health
  static async getHealth(req, res) {
    res.status(200).json({ message: "Connect to Car Service successfully" });
  }
  //[GET]: /cars/:id
  static async getCar(req, res, next) {
    const { id } = req.params;
    try {
      const car = await getCarById(id);
      if (!car)
        return res.status(404).json({
          message: "ID does not exist!",
        });
      return res.status(200).json({ car });
    } catch (error) {
      return next(error);
    }
  }
  //[GET]: /cars?partnerId=...||?district=...&city=...&country=...
  static async getCars(req, res, next) {
    try {
      const partnerId = req.query?.partnerId;
      if (partnerId) {
        const cars = await getCarsByPartner(partnerId);
        return res.status(200).json({ cars });
      }

      const cars = await GetCarsByStation(req.query);
      return res.status(200).json({ cars });
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
}

module.exports = CarController;
