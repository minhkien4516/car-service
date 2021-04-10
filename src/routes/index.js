const router = require('express').Router();
const CarController = require('../controllers/carController');

router.get('/health', CarController.getHealth);
router.route('/').get(CarController.getAllCars);
router
  .route('/:Id')
  .post(CarController.registerCar)
  .get(CarController.getCar)
  .patch(CarController.updateCar);
router.route('/partners/:partnerId?').get(CarController.getCarByPartnerId);
router.route('/unregister/:Id?').patch(CarController.unregisterCar);

router
  .route('/roster/:carId?')
  .get(CarController.getRosterByCarId)
  .post(CarController.registerRoster);

module.exports = router;
