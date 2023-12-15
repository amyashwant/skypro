const router = require("express").Router();

const {contactController} = require('../controllers/contactController')

router.post("/", contactController)

module.exports = router;