const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");

async function getCarByPartner(partners) {
  try {
    const Car = await sequelize.query(`SP_GetCarByPartnerId '${partners}'`, {
      type: QueryTypes.SELECT,
    });
    return Car;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = getCarByPartner;
