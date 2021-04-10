const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/database');

async function getCarByPartner(partners) {
  try {
    const car = await sequelize.query(`SP_GetCarByPartnerId '${partners}'`, {
      type: QueryTypes.SELECT,
    });
    return car;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = getCarByPartner;
