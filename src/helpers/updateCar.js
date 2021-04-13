const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");
const convertObjectToParam = require("../utils/convertObjectToParam");

/**
 *
 * @param {string} Id,
 * @param {string} carName,
 * @param {string} newName,
 * @param {string} Brand,
 * @param {string|number} licencePlate,
 * @param {string|number} luggage,
 * @param {string|number} passenger,
 * @returns {Car: Object}
 */
async function updateCar(information) {
  const params = convertObjectToParam(information);
  try {
    await sequelize.query(`SP_UpdateCarInformation ${params}`, {
      type: QueryTypes.UPDATE,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = updateCar;
