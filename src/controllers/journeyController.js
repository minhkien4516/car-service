const registerJourney = require('../helpers/registerJourney');
const getJourneysByCar = require('../helpers/getJourneysByCar');

class JourneyController {
  // [GET] /cars/journeys?vehicleId=...
  static async getJourneysByCar(req, res, next) {
    const { vehicleId } = req.query;
    try {
      const journeys = await getJourneysByCar(vehicleId);
      if (!journeys)
        return res.status(404).json({
          message: 'That Car does not exist. Failed to get your Roster',
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
        message: 'Register journey Successfully!',
      });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = JourneyController;
