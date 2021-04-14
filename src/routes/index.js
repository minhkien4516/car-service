const router = require("express").Router();
const CarController = require("../controllers/carController");

router.get("/health", CarController.getHealth);
router.route("/").get(CarController.getAllCars).post(CarController.registerCar);
router.route("/station/").get(CarController.getCarByStation);
router.route("/:Id").get(CarController.getCar).patch(CarController.updateCar);

router.route("/unregister/:Id?").patch(CarController.unregisterCar);

router.route("/partner/:partners?").get(CarController.getCarByPartnerId);

router.route("/roster/:cars?").get(CarController.getRosterByCarId);
router.route("/rosters").post(CarController.registerRoster);

module.exports = router;
