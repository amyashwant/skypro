const router = require("express").Router();

const { contactController } = require('../controllers/contactController');
const { newsletterController } = require('../controllers/newsletterController');

router.post("/", contactController);
router.post("/newsletter", newsletterController);

module.exports = router;
