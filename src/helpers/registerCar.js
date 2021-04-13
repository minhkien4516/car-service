const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");
const convertObjectToParam = require("../utils/convertObjectToParam");

/**
 * @param {string} carName,
 * @param {string} Brand,
 * @param {string|number} licencePlate,
 * @param {string|number} luggage,
 * @param {string|number} passenger,
 * @param {string|number} partners,
 * @returns {Car: Object}
 */
async function registerCar(information) {
  try {
    const paramString = convertObjectToParam(information);
    await sequelize.query(`RegisterCar ${paramString}`, {
      type: QueryTypes.INSERT,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = registerCar;
