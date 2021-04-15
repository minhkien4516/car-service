const { QueryTypes } = require('sequelize');
const sequelize = require('../configs/database');
const convertObjectToParam = require('../utils/convertObjectToParam');
/**
 *
 * @param {string} district
 * @param {string} city
 * @param {string} country
 * @returns {Car: Object}
 */
async function GetCarsByStation(information) {
  try {
    const params = convertObjectToParam(information);
    const cars = await sequelize.query(`SP_GetCarsByStation ${params}`, {
      type: QueryTypes.SELECT,
    });
    return cars;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = GetCarsByStation;
