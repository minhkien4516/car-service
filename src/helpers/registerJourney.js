const { QueryTypes } = require('sequelize');
const sequelize = require('../configs/database');
const convertObjectToParam = require('../utils/convertObjectToParam');

/**

 * @param {string} placeId,
 * @param {string} placeId,
 * @param {string} district,
 * @param {string} city,
 * @param {string} country,
 * @param {string|number} carId,
 * @param {string} driverName,
 * @param {number} standardPrice,
 */
async function registerJourney(information) {
  try {
    const paramString = convertObjectToParam(information);
    await sequelize.query(`SP_AddJourney ${paramString}`, {
      type: QueryTypes.INSERT,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = registerJourney;
