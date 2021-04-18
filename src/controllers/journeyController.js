const registerJourney = require("../helpers/registerJourney");
const getJourneysByCar = require("../helpers/getJourneysByCar");
const activateJourney = require("../helpers/activateJourney");
class JourneyController {
  // [GET] /cars/journeys?carId=...
  static async getJourneysByCar(req, res, next) {
    const { carId } = req.params;
    try {
      const journeys = await getJourneysByCar(carId);
      if (!journeys)
        return res.status(404).json({
          message: "That Car does not exist. Failed to get your Roster",
        });
      return res.status(200).json({ journeys });
    } catch (error) {
      return next(error);
    }
  }

  //[POST] /cars/journeys
  static async registerJourney(req, res, next) {
    const { vehicleId, ...station } = req.body;
    try {
      await registerJourney({ carId: vehicleId, ...station });
      return res.status(201).json({
        message: "Register journey Successfully!",
      });
    } catch (error) {
      return next(error);
    }
  }

  // [PATCH] /cars/journeys/:journeyId
  static async activateJourney(req, res, next) {
    try {
      await activateJourney(req.params);
      return res
        .status(200)
        .json({ message: "Activate journey successfully!" });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = JourneyController;
