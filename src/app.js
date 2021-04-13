require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
// const https = require("https");
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

//intro
app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to nodejs</h1>");
});
//Error API
app.get("*", (req, res, next) => {
  res.send("API is not exit");
});

app.listen(PORT, async () => {
  console.log(`Your server is running on ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Car service connects to database successfully!");
  } catch (error) {
    console.error(`Car service can not connect due to ${error.message}`);
  }
});
