require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const { logErrors, clientErrorHandler } = require("./errors/handler");

const app = express();
// const server = https.createServer(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/cars", router);

app.use(logErrors);
app.use(clientErrorHandler);

module.exports = app;
