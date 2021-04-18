const { QueryTypes } = require('sequelize');
const sequelize = require('../configs/database');
const convertObjectToParam = require('../utils/convertObjectToParam');

/**
 * @param {string} carName,
 * @param {string|number} luggage,
 * @param {string|number} passenger,
 * @param {string} partnerId,
 * @param {string} photoUrl,
 * @returns {Car: Object}
 */
async function registerCar(information) {
  try {
    const paramString = convertObjectToParam(information);
    const inserted = await sequelize.query(`SP_RegisterCar ${paramString}`, {
      type: QueryTypes.SELECT,
    });
    return inserted[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = registerCar;
