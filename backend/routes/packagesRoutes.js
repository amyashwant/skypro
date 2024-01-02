const router = require("express").Router();
const Channel = require("../models/packagesPageModel/channelModel");
const Broadcaster = require("../models/packagesPageModel/broadcasterModel");
const cloudinary = require("cloudinary").v2;
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
  createPackageBouque,
  getPackageBouque,
  createBouqueChannel,
  getBouqueChannel,
  createCategory,
  getCategory,
  //--------------------------------------------
  updateLanguage,
  deleteLanguage,
} = require("../controllers/packagesController");
const {
  imageUploadMiddleware,
} = require("../middleware/imageUploadMiddleware");
const { error } = require("console");

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
  const { name, type, language, category } = req.body;

  if (!req?.file?.path) {
    return res.status(400).json(error);
  }
  const result = await cloudinary.uploader.upload(req.file.path);
  // console.log("result>>>",result)
  try {
    const existingChannel = await Channel.findOne({ name });
    if (existingChannel) {
      return res.status(400).json({ error: "Channel Already Added" });
    }

    // const image = req?.file?.filename;
    const image = result.secure_url;
    // console.log(image, "image>>>");
    try {
      const channel = await Channel.create({
        name,
        type,
        language,
        category,
        image,
        // channelPrice,
      });
      res.status(200).json(channel);
    } catch (error) {
      res.status(400).json(error);
    }
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
    const { name } = req.body;
    try {
      const existingBroadcaster = await Broadcaster.findOne({ name });
      if (existingBroadcaster) {
        return res.status(400).json({ error: "Broadcaster Already Added" });
      }

      if (!req?.file?.path) {
        return res.status(400).json(error);
      }
      const result = await cloudinary.uploader.upload(req.file.path);

      const image = result.secure_url;
      const broadcaster = await Broadcaster.create({
        name,
        image,
        // bouqueRef,
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

router.post("/package-bouque", createPackageBouque);
router.get("/package-bouque", getPackageBouque);
router.post("/bouque-channel", createBouqueChannel);
router.get("/bouque-channel", getBouqueChannel);
router.post("/category", createCategory);
router.get("/category", getCategory);
//----------------------------------------------------------------
router.put("/language/:itemId", updateLanguage);
router.delete("/language/:id", deleteLanguage);
module.exports = router;
