const router = require("express").Router();
const Channel = require("../models/packagesPageModel/channelModel");
const Broadcaster = require("../models/packagesPageModel/broadcasterModel");
const {
  // createChannel,
  getChannels,
  createLanguage,
  getLanguage,
  createBouquet,
  getBouquets,
  // createBroadcaster,
  getBroadcasters,
  createType,
  getType,
  createPackage,
  getPackage,
} = require("../controllers/packagesController");
const {
  imageUploadMiddleware,
} = require("../middleware/imageUploadMiddleware");

// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // cb(null, "./skyproyashwant/src/assets/images/packagesImages"); // Uploads will be stored in the 'uploads/' directory
//     cb(null, "uploads/"); // Uploads will be stored in the 'uploads/' directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); // Unique filename to avoid overwriting
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload-image", upload.single("image"), async (req, res) => {
//   console.log(req.file.filename);
//   res.send("uploaded!!");
// });

// router.route("/channel").post(createChannel);
router.post("/channel", imageUploadMiddleware("image"), async (req, res) => {
  // console.log("req.file.filename>", req.file.filename);
  try {
    const { name, type, language, channelPrice } = req.body;
    const image = req.file.filename;
    // console.log(image, "image>>>");
    const channel = await Channel.create({
      name,
      type,
      language,
      image,
      channelPrice,
    });

    res.status(200).json(channel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.route("/channel").get(getChannels);
router.route("/language").post(createLanguage);
router.route("/language").get(getLanguage);
router.route("/bouquet").post(createBouquet);
router.route("/bouquet").get(getBouquets);
// router.route("/broadcaster").post(createBroadcaster);
router.post(
  "/broadcaster",
  imageUploadMiddleware("image"),
  async (req, res) => {
    try {
      const { name, bouqueRef } = req.body;
      const image = req.file.filename;
      const broadcaster = await Broadcaster.create({
        name,
        image,
        bouqueRef,
      });
      res.status(200).json(broadcaster);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.route("/broadcaster").get(getBroadcasters);

router.post("/type", createType);
router.get("/type", getType);
router.post("/pack", createPackage);
router.get("/pack", getPackage);

module.exports = router;
