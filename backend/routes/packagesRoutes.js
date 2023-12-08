const router = require("express").Router();
const {
  createChannel,
  getChannels,
  createBouquet,
  getBouquets,
  createBroadcaster,
  getBroadcasters,
} = require("../controllers/packagesController");

router.route("/channel").post(createChannel);
router.route("/channel").get(getChannels);
router.route("/bouquet").post(createBouquet);
router.route("/bouquet").get(getBouquets);
router.route("/broadcaster").post(createBroadcaster);
router.route("/broadcaster").get(getBroadcasters);

module.exports = router;
