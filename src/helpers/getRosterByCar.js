const { QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");

async function GetRosterByCar(cars) {
  try {
    const roster = await sequelize.query(`GetRosterByCarId '${cars}'`, {
      type: QueryTypes.SELECT,
    });
    return roster;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = GetRosterByCar;
