const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");
const convertObjectToParam = require("../utils/convertObjectToParam");

module.exports = async function activateJourney(information) {
  try {
    const params = convertObjectToParam(information);
    await sequelize.query(`SP_ActivateJourney ${params}`, {
      type: QueryTypes.UPDATE,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
