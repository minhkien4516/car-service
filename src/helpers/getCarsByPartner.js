const { QueryTypes } = require('sequelize');
const sequelize = require('../configs/database');

/**
 *
 * @param {string|number} partnerId
 * @returns  {Car: []}
 */
async function getCarsByPartner(partnerId) {
  try {
    const Car = await sequelize.query(`SP_GetCarsByPartner '${partnerId}'`, {
      type: QueryTypes.SELECT,
    });
    return Car;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = getCarsByPartner;
