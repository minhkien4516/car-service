const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");

/**
 *
 * @param {string|number} Id
 * @param {string|number} licencePlate
 * @returns {car: Object}
 */
async function getCarById(Id, licencePlate) {
  try {
    const car = await sequelize.query(`GetCar '${Id}','${licencePlate}'`, {
      type: QueryTypes.SELECT,
    });
    return car[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = getCarById;
