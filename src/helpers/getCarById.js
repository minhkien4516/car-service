const { QueryTypes } = require('sequelize');
const sequelize = require('../configs/database');

/**
 *
 * @param {string|number} id
 * @returns {car: Object}
 */
async function getCarById(id) {
  try {
    const car = await sequelize.query(`SP_GetCarById '${id}'`, {
      type: QueryTypes.SELECT,
    });
    return car[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = getCarById;
