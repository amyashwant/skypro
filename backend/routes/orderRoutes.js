const router = require("express").Router();
const {orderController} = require('../controllers/orderControllers')

router.post("/", orderController);

module.exports = router;