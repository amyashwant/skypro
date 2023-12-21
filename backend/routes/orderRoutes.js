const router = require("express").Router();
const {orderController} = require('../controllers/orderControllers')
const {validatePaymentController} = require('../controllers/orderControllers')
router.post("/", orderController);
router.post("/validatepayment", validatePaymentController)

module.exports = router;