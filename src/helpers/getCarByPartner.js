const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");

async function getCarByPartner(partners) {
  try {
    const car = await sequelize.query(`SP_GetCarByPartnerId '${partners}'`, {
      type: QueryTypes.SELECT,
    });
    return car[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = getCarByPartner;
