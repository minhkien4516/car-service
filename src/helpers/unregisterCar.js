const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");

/**
 *
 * @param {string|number} Id,
 * @returns {isRegisterd: BOOLEAN}
 */
async function unregisterCar(Id) {
  try {
    await sequelize.query(`UnregisterCar '${Id}'`, {
      type: QueryTypes.UPDATE,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = unregisterCar;
