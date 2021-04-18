const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const sequelize = require("./configs/database");
const logger = require("./configs/winston");

const PORT = process.env.PORT || 3005;

server.listen(PORT, async () => {
  logger.info(`Your server is running on ${PORT}`);
  try {
    await sequelize.authenticate();
    logger.info("Car service connects to database successfully!");
  } catch (error) {
    logger.error(`Car service can not connect due to ${error.message}`);
  }
});
