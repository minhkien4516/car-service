require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("./configs/winston");
const router = require("./routes");
const sequelize = require("./configs/database");
const { logErrors, clientErrorHandler } = require("./errors/handler");

const app = express();
const PORT = process.env.PORT || 3005;

// const server = https.createServer(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/cars", router);

app.use(logErrors);
app.use(clientErrorHandler);

module.exports = app;
