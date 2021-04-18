const { QueryTypes } = require('sequelize');
const sequelize = require('../configs/database');

/**
 *
 * @param {string|number} carId
 * @returns {roster: []}
 */
async function GetJourneysByCar(carId) {
  try {
    const journeys = await sequelize.query(`SP_GetJourneysByCar '${carId}'`, {
      type: QueryTypes.SELECT,
    });
    return journeys;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = GetJourneysByCar;
