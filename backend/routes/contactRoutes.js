const router = require("express").Router();

const { contactController } = require('../controllers/contactController');
const { newsletterController, getnewsLetterController } = require('../controllers/newsletterController');

router.post("/", contactController);
router.post("/newsletter", newsletterController);
router.get("/newsletter", getnewsLetterController)

module.exports = router;
