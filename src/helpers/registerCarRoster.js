const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");
const convertObjectToParam = require("../utils/convertObjectToParam");

/**
 * @param {string} description,
 * @param {string} placeId,
 * @param {string} description,
 * @param {string} placeId,
 * @param {string} district,
 * @param {string} city,
 * @param {string} country,
 * @param {string|number} cars,
 * @param {string} driverName,
 * @param {number} standardPrice,
 * @returns {carRoster: Object}
 */
async function registerCarRoster(information) {
  try {
    const paramString = convertObjectToParam(information);
    await sequelize.query(`SP_addCarRoster ${paramString}`, {
      type: QueryTypes.INSERT,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = registerCarRoster;
