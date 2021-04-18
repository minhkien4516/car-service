const router = require("express").Router();
const CarController = require("../controllers/carController");
const JourneyController = require("../controllers/journeyController");

router.get("/health", CarController.getHealth);

router.route("/").get(CarController.getCars).post(CarController.registerCar);

router.route("/:id").get(CarController.getCar);

router.route("/journeys/:carId").get(JourneyController.getJourneysByCar);
router.route("/journeys").post(JourneyController.registerJourney);

router.route("/journeys/:journeyId").patch(JourneyController.activateJourney);

module.exports = router;
