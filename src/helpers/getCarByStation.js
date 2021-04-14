const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");
const convertObjectToParam = require("../utils/convertObjectToParam");
/**
 *
 * @param {string} district
 * @param {string} city
 * @param {string} country
 * @returns {Car: Object}
 */
async function GetCarByStation(district, city, country) {
  try {
    const CAR = await sequelize.query(
      `SP_GetCarByStation '${district}','${city}','${country}'`,
      {
        type: QueryTypes.SELECT,
      }
    );
    return CAR[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = GetCarByStation;
